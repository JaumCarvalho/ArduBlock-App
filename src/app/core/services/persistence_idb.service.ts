import { Injectable } from '@angular/core';
import { openDB, IDBPDatabase } from 'idb';
import * as Blockly from 'blockly';


@Injectable({
  providedIn: 'root'
})
export class PersistenceDbService {
  private dbPromise: Promise<IDBPDatabase>;

  constructor() {
    this.dbPromise = openDB('ArduBlockDB', 1, {
      upgrade(db) {
        db.createObjectStore('workspace', { keyPath: 'id' });
      }
    });
  }

  async saveWorkspace(xmlText: string) {
    const db = await this.dbPromise;
    await db.put('workspace', { id: 'currentWorkspace', xml: xmlText });
    console.log('Workspace salvo com sucesso!');
  }

  async loadWorkspace(): Promise<string | null> {
    const db = await this.dbPromise;
    const data = await db.get('workspace', 'currentWorkspace');
    console.log('Workspace carregado:', data);
    return data ? data.xml : null;
  }
}