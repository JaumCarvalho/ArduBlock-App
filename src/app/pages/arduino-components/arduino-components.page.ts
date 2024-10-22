import { Component } from '@angular/core';
import {LedService} from '../../components/led/led.service'
@Component({
  selector: 'app-arduino-components',
  templateUrl: './arduino-components.page.html',
  styleUrls: ['./arduino-components.page.scss'],
})
export class ArduinoComponentsPage {
  constructor(private ledService: LedService) {}

  onComponentAdded(componentName: string) {
    if (componentName === 'LED') {
      this.ledService.addLed(2);
    }
  }
}
