import { Injectable } from '@angular/core';
import { Servo } from './servo.model';

@Injectable({
  providedIn: 'root',
})
export class ServoService {
  constructor() {}

  createServo(): Servo {
    return {
      id: Date.now(),
      type: 'Servo',
      angle: 0,
      pins: {
        ground: {
          pinState: 'OFF',
          pinConn: '',
        },
        power: {
          pinState: 'OFF',
          pinConn: '',
        },
        signal: {
          pinState: 'OFF',
          pinConn: '',
        },
      },
      state: 'OFF',
      position: { x: 100, y: 100 },
    };
  }
}
