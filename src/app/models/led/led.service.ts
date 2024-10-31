import { Injectable } from '@angular/core';
import { Led } from './led.model';
@Injectable({
  providedIn: 'root',
})
export class LedService {

  private ledState: { [key: number]: boolean } = {};

  constructor() {}
  createLed(): Led{
    return {
      id: Date.now(),
      type: 'LED',
      pins: {
        catodo: { pinState: 'OFF', pinConn: '' },
        anodo: { pinState: 'OFF', pinConn: '' },
      },
      state: 'OFF',
      position: { x: 324, y: 122 },
    };
  }
  turnOn(pin: number): void {
    this.ledState[pin] = true;
    this.sendCommand(pin, 'ON');
    console.log(`LED no pino ${pin} ligado.`);
  }

  turnOff(pin: number): void {
    this.ledState[pin] = false;
    this.sendCommand(pin, 'OFF');
    console.log(`LED no pino ${pin} desligado.`);
  }

  private sendCommand(pin: number, command: string): void {
    console.log(`Comando enviado para o Arduino: ${command} no pino ${pin}`);
  }

  getLedState(pin: number): boolean {
    return this.ledState[pin] || false;
  }
  addLed(pin: number) {
    console.log(`LED adicionado no pino ${pin}`);
  }
  
}
