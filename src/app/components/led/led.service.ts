import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LedService {

  private ledState: { [key: number]: boolean } = {}; // Estado dos LEDs armazenado por ID de pino

  constructor() {}

  // Método para ligar o LED
  turnOn(pin: number): void {
    this.ledState[pin] = true;
    this.sendCommand(pin, 'ON');
    console.log(`LED no pino ${pin} ligado.`);
  }

  // Método para desligar o LED
  turnOff(pin: number): void {
    this.ledState[pin] = false;
    this.sendCommand(pin, 'OFF');
    console.log(`LED no pino ${pin} desligado.`);
  }

  // Simula o envio de comando para o Arduino
  private sendCommand(pin: number, command: string): void {
    // Implementar a lógica de comunicação com o Arduino
    // Por exemplo, enviar um comando via Web Serial API
    console.log(`Comando enviado para o Arduino: ${command} no pino ${pin}`);
  }

  // Método para verificar o estado do LED
  getLedState(pin: number): boolean {
    return this.ledState[pin] || false;
  }
  addLed(pin: number) {
    console.log(`LED adicionado no pino ${pin}`);
    // Lógica para adicionar o LED
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
