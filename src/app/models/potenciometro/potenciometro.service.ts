import { Injectable } from "@angular/core";
import { Potenciometro } from "./potenciometro.model";

@Injectable({
  providedIn: 'root'
})
export class PotenciometroService{
  constructor(){}

  createPotenciometro(): Potenciometro{
    return {
      id: Date.now(),
      type: 'Potenciometro',
      resistance: '10Ω',
      pins: {
        terminal1: {
          pintState: 'OFF',
          pinConn: '',
        },
        wiper: {
          pinState: 'OFF',
          pinConn: '',
        },
        terminal2: {
          pinState: 'OFF',
          pinConn: '',
        },
      },
      state: 'OFF',
      position: { x: 342, y: 122 }
    }
  }
}