import { Injectable } from '@angular/core';
import { openDB } from 'idb';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceService {
  private dbName = 'workspaceDb';

  constructor() {
    this.init();
  }

  private async init() {
    const db = await openDB(this.dbName, 1, {
      upgrade(db) {
        db.createObjectStore('components', { keyPath: 'id' });
      },
    });
  }

  async saveComponent(component: any) {
    const db = await openDB(this.dbName, 1);
    await db.put('components', component);
    console.log('Componente salvo:', component);
  }

  async getAllComponents() {
    const db = await openDB(this.dbName, 1);
    return await db.getAll('components');
  }

  async clearComponents() {
    const db = await openDB(this.dbName, 1);
    await db.clear('components');
    console.log('Todos os componentes foram limpos.');
  }
}
