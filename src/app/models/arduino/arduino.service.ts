import { Injectable } from "@angular/core";
import { Arduino } from "./arduino.model";

@Injectable({
  providedIn:'root'
})

export class ArduinoService{
  constructor(){}

  createArduino(): Arduino{
    return {
      id: Date.now(),
      type: 'Arduino',
      pins: {
        digitalPwm: {
          d0: {
            pinState: 'OFF',
            pinConn: ''
          },
          d1: {
            pinState: 'OFF',
            pinConn: ''
          },
          d2: {
            pinState: 'OFF',
            pinConn: ''
          },
          d3: {
            pinState: 'OFF',
            pinConn: ''
          },
          d4: {
            pinState: 'OFF',
            pinConn: ''
          },
          d5: {
            pinState: 'OFF',
            pinConn: ''
          },
          d6: {
            pinState: 'OFF',
            pinConn: ''
          },
          d7: {
            pinState: 'OFF',
            pinConn: ''
          },
          d8: {
            pinState: 'OFF',
            pinConn: ''
          },
          d9: {
            pinState: 'OFF',
            pinConn: ''
          },
          d10: {
            pinState: 'OFF',
            pinConn: ''
          },
          d11: {
            pinState: 'OFF',
            pinConn: ''
          },
          d12: {
            pinState: 'OFF',
            pinConn: ''
          },
          d13: {
            pinState: 'OFF',
            pinConn: ''
          }
        },
        analogIn: {
          a0: {
            pinState: 'OFF',
            pinConn: ''
          },
          a1: {
            pinState: 'OFF',
            pinConn: ''
          },
          a2: {
            pinState: 'OFF',
            pinConn: ''
          },
          a3: {
            pinState: 'OFF',
            pinConn: ''
          },
          a4: {
            pinState: 'OFF',
            pinConn: ''
          },
          a5: {
            pinState: 'OFF',
            pinConn: ''
          },
          auxPin: {
            gnd: {
              pinState: 'OFF',
            pinConn: ''
            },
            aref: {
              pinState: 'OFF',
            pinConn: ''
            },
            sda: {
              pinState: 'OFF',
            pinConn: ''
            },
            scl:{
              pinState: 'OFF',
            pinConn: ''
            }
          }
        },
        power: {
          vin: {
            pinState: 'OFF',
            pinConn: ''
          },
          gnd1: {
            pinState: 'OFF',
            pinConn: ''
          },
          gnd2: {
            pinState: 'OFF',
            pinConn: ''
          },
          p5v: {
            pinState: 'OFF',
            pinConn: ''
          },
          p33v: {
            pinState: 'OFF',
            pinConn: ''
          },
          auxPin: {
            reset: {
              pinState: 'OFF',
            pinConn: ''
            },
            ioref: {
              pinState: 'OFF',
              pinConn: ''
            },
            unused: {
              pinState: 'OFF',
              pinConn: ''
            }
          }
        }
      },
      state: 'OFF',
      ledBuiltin: 'OFF',
      ledTx: 'OFF',
      ledRx: 'OFF',
      ledOn: 'OFF',
      button: 'OFF',
      position: {x: 200, y: 122},
    }
  }
}