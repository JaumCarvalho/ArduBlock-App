import { Injectable } from '@angular/core';
import { LedService } from '../../models/led/led.service';
import { ButtonService } from '../../models/button/button.service';
import { ResistorService } from '../../models/resistor/resistor.service';
import { PotenciometroService } from '../../models/potenciometro/potenciometro.service';
import { ArduinoService } from '../../models/arduino/arduino.service';
import { BreadboardService } from 'src/app/models/breadboard/breadboard.service';
@Injectable({
  providedIn: 'root',
})
export class CreateComponentService {
  constructor(
    private ledService: LedService,
    private resistorService: ResistorService,
    private potenciometroService: PotenciometroService,
    private buttonService: ButtonService,
    private arduinoService: ArduinoService,
    private breadboardService: BreadboardService
  ) {}
  components = [
    {
      type: 'LED',
      svg: '../../../assets/arduino-components/led.svg',
      label: 'Led',
    },
    {
      type: 'Potenciometro',
      svg: '../../../assets/arduino-components/potenciometro.svg',
      label: 'Potenciômetro',
    },
    {
      type: 'Resistor',
      svg: '../../../assets/arduino-components/resistor.svg',
      label: 'Resistor',
    },
    {
      type: 'Botao',
      svg: '../../../assets/arduino-components/botao.svg',
      label: 'Botão',
    },
    {
      type: 'Servo',
      svg: '../../../assets/arduino-components/servomotor.svg',
      label: 'Servo Motor',
    },
    {
      type: 'Arduino',
      svg: '../../../assets/arduino-components/arduino.svg',
      label: 'Arduino',
    },
    {
      type: 'Breadboard',
      svg: '../../../assets/arduino-components/breadboard.svg',
      label: 'Breadboard',
    },
  ];

  /* cria os componentes usando o service direcionado à essa função
  de cada componente
  */
  createComponentData(componentType: string): any {
    switch (componentType) {
      case 'LED':
        return this.ledService.createLed();

      case 'Resistor':
        return this.resistorService.createResistor();

      case 'Botao':
        return this.buttonService.createButton();

      case 'Potenciometro':
        return this.potenciometroService.createPotenciometro();
      
      case 'Arduino':
        return this.arduinoService.createArduino();

      case 'Breadboard':
        return this.breadboardService.createBreadboard();

      default:
        console.warn(`Componente do tipo ${componentType} não reconhecido.`);
        return null;
    }
  }
}
