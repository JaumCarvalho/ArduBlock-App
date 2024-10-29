import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { WorkspaceService } from '../../core/services/workspace_idb.service';
import { Led } from '../led/led.model';
@Component({
  selector: 'app-card-component-arduino',
  templateUrl: './card-component-arduino.component.html',
  styleUrls: ['./card-component-arduino.component.scss'],
})
export class CardComponentArduinoComponent implements OnInit {
  @Output() componentAdded = new EventEmitter<string>();
  components = [
    { type: 'LED', svg: '../../../assets/arduino-components/led.svg', label: 'Led' },
    { type: 'Potenciômetro', svg: '../../../assets/arduino-components/potenciometro.svg', label: 'Potenciômetro' },
    { type: 'Resistor', svg: '../../../assets/arduino-components/resistor.svg', label: 'Resistor' },
    { type: 'Botao', svg: '../../../assets/arduino-components/botao.svg', label: 'Botão' },
    { type: 'Servo', svg: '../../../assets/arduino-components/servomotor.svg', label: 'Servo Motor' },
  ];
  constructor(private router: Router, private workspaceService: WorkspaceService) {}

  ngOnInit(): void {}

  addComponentToWorkspace(componentType: string): void {
    const componentData: Led = {
      id: Date.now(),
      type: componentType,
      pin: null,
      state: 'OFF'
    };
  
    this.workspaceService.saveComponent(componentData);
  
    this.router.navigate(['/folder', 'Executar'], { state: { item: componentData } });
  }
}
