import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndexedDBservice } from 'src/app/core/services/indexed-db.service';

@Component({
  selector: 'app-card-component-arduino',
  templateUrl: './card-component-arduino.component.html',
  styleUrls: ['./card-component-arduino.component.scss'],
})
export class CardComponentArduinoComponent implements OnInit {
  images: string[] = [];

  constructor(private router: Router, private indexedDBService: IndexedDBservice) {}

  async ngOnInit(): Promise<void> {
    try {
      // Aguardar a abertura do banco de dados antes de qualquer operação
      await this.indexedDBService.openDB();
  
      const imagePaths = [
        '../../../assets/arduino-components/led.png',
        '../../../assets/arduino-components/potenciometro.png',
        '../../../assets/arduino-components/resistor.png'
      ];
  
      // Carregar as imagens da pasta assets para o IndexedDB
      this.indexedDBService.loadImagesFromAssets(imagePaths);
  
      // Agora, carregar as imagens do IndexedDB para exibição
      await this.loadImagesFromDB();
    } catch (error) {
      console.error('Erro ao inicializar componente:', error);
    }
  }
  

  async loadImagesFromDB(): Promise<void> {
    try {
      const imagens = await this.indexedDBService.getImage();
      console.log('Imagens recuperadas do IndexedDB:', imagens);
      this.images = imagens.map((item) => item.url);
      console.log('Imagens para exibição:', this.images);
    } catch (error) {
      console.error('Erro ao carregar as imagens do IndexedDB', error);
    }
  }  

  addComponentToWorkspace(): void {
    this.router.navigate(['/folder', 'Executar'], { state: { item: 'dado teste' } });
  }

  handleImageError(event: Event): void {
    (event.target as HTMLImageElement).src = 'path/to/default/image.png'; // Caminho para uma imagem padrão
  }
  
}
