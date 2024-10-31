import { Injectable } from '@angular/core';
import { Resistor } from './resistor.model';

@Injectable({
  providedIn: 'root',
})
export class ResistorService {
  
  private resistorState: { [key: number]: number } = {};

  constructor() {}

  createResistor(): Resistor{
    return {
      id: Date.now(),
          type: 'Resistor',
          resistance: '220Ω',
          pins: {
            terminal1: {
              pinState: 'OFF',
              pinConn: '',
            },
            terminal2: {
              pinState: 'OFF',
              pinConn: '',
            },
          },
          state: 'OFF',
          position: { x: 300, y: 150 }
    }
  }

  addResistor(pin: number, resistance: number): void {
    this.resistorState[pin] = resistance;
    this.sendCommand(pin, `Adicionar resistor de ${resistance}Ω`);
    console.log(`Resistor de ${resistance}Ω adicionado no pino ${pin}.`);
  }

  removeResistor(pin: number): void {
    delete this.resistorState[pin];
    this.sendCommand(pin, 'Remover resistor');
    console.log(`Resistor removido do pino ${pin}.`);
  }

  getResistance(pin: number): number {
    return this.resistorState[pin] || 0;
  }

  private sendCommand(pin: number, command: string): void {
    console.log(`Comando enviado para o Arduino: ${command} no pino ${pin}`);
  }
}
