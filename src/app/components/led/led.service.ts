import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LedService {

  private ledState: { [key: number]: boolean } = {};

  constructor() {}
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

  addPotenciometro(pin: number) {
    console.log(`Potenciômetro adicionado no pino ${pin}`);
    // Lógica para adicionar o Potenciômetro
  }

  addResistor(value: number) {
    console.log(`Resistor de ${value} Ohms adicionado`);
    // Lógica para adicionar o Resistor
  }
}
