import { Injectable } from '@angular/core';
import { Button } from './button.model';
@Injectable({
  providedIn: 'root',
})
export class ButtonService {

  private buttonState: { [key: number]: boolean } = {};

  constructor() {}

  createButton(): Button{
    return {
      id: Date.now(),
      type: 'Botao',
      pins: {
        terminalA1: {
          pinState: 'OFF',
          pinConn: '',
        },
        terminalA2: {
          pinState: 'OFF',
          pinConn: '',
        },
        terminalB1: {
          pinState: 'OFF',
          pinConn: '',
        },
        terminalB2: {
          pinState: 'OFF',
          pinConn: '',
        },
      },
      state: 'OFF',
      position: { x: 280, y: 140 },
    };
  }
  addButton(pin: number): void {
    this.buttonState[pin] = false;
    this.sendCommand(pin, 'Adicionar botão');
    console.log(`Botão adicionado no pino ${pin}.`);
  }

  pressButton(pin: number): void {
    this.buttonState[pin] = true;
    this.sendCommand(pin, 'PRESS');
    console.log(`Botão no pino ${pin} pressionado.`);
  }

  releaseButton(pin: number): void {
    this.buttonState[pin] = false;
    this.sendCommand(pin, 'RELEASE');
    console.log(`Botão no pino ${pin} liberado.`);
  }

  isPressed(pin: number): boolean {
    return this.buttonState[pin] || false;
  }

  private sendCommand(pin: number, command: string): void {
    console.log(`Comando enviado para o Arduino: ${command} no pino ${pin}`);
  }
}
