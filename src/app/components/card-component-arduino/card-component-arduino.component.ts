import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { WorkspaceService } from '../../core/services/workspace_idb.service';
import { CreateComponentService } from '../../core/services/create_component.service';

@Component({
  selector: 'app-card-component-arduino',
  templateUrl: './card-component-arduino.component.html',
  styleUrls: ['./card-component-arduino.component.scss'],
})
export class CardComponentArduinoComponent implements OnInit {
  @Output() componentAdded = new EventEmitter<string>();
  components = this.createComponentService.components;
  constructor(
    private router: Router,
    private workspaceService: WorkspaceService,
    private createComponentService: CreateComponentService
  ) {}

  ngOnInit(): void {}

  // função para adicionar e salvar os dados do componente criado em Workspace
  addComponentToWorkspace(componentType: string): any {
    const componentData = this.createComponentService.createComponentData(componentType);
    if (componentData) {
      this.workspaceService.saveComponent(componentData);
      // navega para a página de execução transferindo os dados pela rota
      this.router.navigate(['/folder', 'Executar'], {
        state: { item: componentData },
      });
    }
  }
}
