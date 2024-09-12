import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class IndexedDBservice{
  getImages() {
    throw new Error('Method not implemented.');
  }
  private db: IDBDatabase | null = null

  constructor(){
    this.openDB();
  }

  // Função para abrir o IndexedDB
  private openDB(): void {

    const request = indexedDB.open('ImageDataBase', 1);

    // Requisição para armazenar uma nova imagem em um objeto com autoincrement ID
    request.onupgradeneeded = (event: any) => {
      this.db = event.target.result;
      if (!this.db?.objectStoreNames.contains('images')){
        this.db?.createObjectStore('images', {keyPath: 'id', autoIncrement: true});
      }
    };

    // Em caso de sucesso retornar o resultado
    request.onsuccess = (event: any) => {
      this.db = event.target.result;
      console.log('Bando de dados IndexedDB aberto com sucesso');
    };

    // Em caso de erro retornar um error
    request.onerror = (event: any) => {
      console.error('Erro ao abri o banco de dados IndexedDB', event);
    }
  }

  // Função para adicionar imagem
  addImage(image: File): Promise<void>{
    return new Promise((resolve, reject) => {
      if (!this.db) return reject('Banco de dados não inicializado');

      const transaction = this.db.transaction(['images'], 'readwrite');
      const objectStore= transaction.objectStore('images');
      const request = objectStore.add({image});

      request.onsuccess = () => resolve();
      request.onerror = (event) => reject(event);
    });
  }

  // Função para pegar imagens
  getImage(): Promise<{ id: number; url: string }[]> {
    return new Promise((resolve, reject) => {
      if (!this.db) return reject('Banco de dados não inicializado');
  
      const transaction = this.db.transaction(['images'], 'readonly');
      const objectStore = transaction.objectStore('images');
      const request = objectStore.getAll();
  
      request.onsuccess = (event) => {
        const result = (event.target as IDBRequest).result;
        const images = result.map((item: { id: number; image: Blob }) => ({
          id: item.id,
          url: URL.createObjectURL(item.image),
        }));
  
        resolve(images);
      };
  
      request.onerror = (event) => reject(event);
    });
  }  
  

  // Função para carregar as imagens da pasta assets
  loadImagesFromAssets(imagePaths: string[]): void {
    imagePaths.forEach((imagePath) => {
      fetch(imagePath)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], imagePath.split('/').pop()!, { type: blob.type });
          this.addImage(file)
            .then(() => {
              console.log(`Imagem ${imagePath} armazenada com sucesso no IndexedDB`);
            })
            .catch((error) => {
              console.error('Erro ao armazenar imagem no IndexedDB', error);
            });
        });
    });
  }
}