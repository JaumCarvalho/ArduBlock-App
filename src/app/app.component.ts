import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Executar', url: '/folder/Executar', icon: 'play' },
    { title: 'Componentes do Arduino', url: '/arduino-components', icon: 'hardware-chip' },
    { title: 'Programação', url: '/programming', icon: 'extension-puzzle' }
  ];  
  constructor() {}
}
