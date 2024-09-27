import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { WorkspaceService } from '../../core/services/workspace_idb.service'; // Ajuste o caminho conforme necessário
import { Led } from '../led/led.model';
@Component({
  selector: 'app-card-component-arduino',
  templateUrl: './card-component-arduino.component.html',
  styleUrls: ['./card-component-arduino.component.scss'],
})
export class CardComponentArduinoComponent implements OnInit {
  @Output() componentAdded = new EventEmitter<string>(); // Adicionando um EventEmitter

  constructor(private router: Router, private workspaceService: WorkspaceService) {}

  ngOnInit(): void {}

  addComponentToWorkspace(componentType: string): void {
    const componentData: Led = {
      id: Date.now(), // Gera um ID único baseado na data e hora
      type: componentType,
      pin: 2, // Exemplo, pode ser um valor dinâmico
      state: 'OFF' // Estado inicial do componente (por exemplo, LED)
    };
  
    // Salva o componente no banco de dados
    this.workspaceService.saveComponent(componentData);
  
    // Navega para a página de execução
    this.router.navigate(['/folder', 'Executar'], { state: { item: componentData } });
  }

  // Método para chamar ao clicar no card
  onCardClick(componentType: string) {
    this.addComponentToWorkspace(componentType);
  }
}
