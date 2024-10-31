import { Injectable } from "@angular/core";
import { Breadboard } from "./breadboard.model";

@Injectable({
  providedIn: 'root'
})

export class BreadboardService {
  constructor(){}

  createBreadboard(): Breadboard{
    return{
      id: Date.now(),
      type: 'Breadboard',
      pins: {
        positiveLeftSide: {
          pin1: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin2: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin3: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin4: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin5: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin6: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin7: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin8: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin9: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin10: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin11: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin12: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin13: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin14: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin15: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin16: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin17: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin18: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin19: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin20: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin21: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin22: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin23: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin24: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin25: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin26: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin27: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin28: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin29: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin30: {
            pinState: 'OFF',
            pinConn: ''
          }
        },
        negativeLeftSide: {
          pin1: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin2: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin3: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin4: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin5: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin6: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin7: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin8: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin9: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin10: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin11: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin12: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin13: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin14: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin15: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin16: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin17: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin18: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin19: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin20: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin21: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin22: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin23: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin24: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin25: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin26: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin27: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin28: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin29: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin30: {
            pinState: 'OFF',
            pinConn: ''
          }
        },
        letterRowA: {
          pin1: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin2: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin3: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin4: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin5: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin6: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin7: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin8: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin9: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin10: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin11: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin12: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin13: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin14: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin15: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin16: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin17: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin18: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin19: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin20: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin21: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin22: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin23: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin24: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin25: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin26: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin27: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin28: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin29: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin30: {
            pinState: 'OFF',
            pinConn: ''
          }
        },
        letterRowB: {
          pin1: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin2: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin3: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin4: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin5: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin6: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin7: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin8: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin9: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin10: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin11: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin12: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin13: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin14: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin15: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin16: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin17: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin18: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin19: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin20: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin21: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin22: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin23: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin24: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin25: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin26: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin27: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin28: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin29: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin30: {
            pinState: 'OFF',
            pinConn: ''
          }
        },
        letterRowC: {
          pin1: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin2: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin3: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin4: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin5: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin6: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin7: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin8: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin9: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin10: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin11: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin12: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin13: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin14: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin15: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin16: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin17: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin18: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin19: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin20: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin21: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin22: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin23: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin24: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin25: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin26: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin27: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin28: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin29: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin30: {
            pinState: 'OFF',
            pinConn: ''
          }
        },
        letterRowD: {
          pin1: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin2: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin3: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin4: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin5: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin6: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin7: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin8: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin9: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin10: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin11: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin12: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin13: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin14: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin15: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin16: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin17: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin18: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin19: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin20: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin21: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin22: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin23: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin24: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin25: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin26: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin27: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin28: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin29: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin30: {
            pinState: 'OFF',
            pinConn: ''
          }
        },
        letterRowE: {
          pin1: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin2: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin3: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin4: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin5: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin6: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin7: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin8: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin9: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin10: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin11: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin12: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin13: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin14: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin15: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin16: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin17: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin18: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin19: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin20: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin21: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin22: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin23: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin24: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin25: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin26: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin27: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin28: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin29: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin30: {
            pinState: 'OFF',
            pinConn: ''
          }
        },
        letterRowF: {
          pin1: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin2: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin3: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin4: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin5: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin6: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin7: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin8: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin9: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin10: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin11: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin12: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin13: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin14: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin15: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin16: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin17: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin18: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin19: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin20: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin21: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin22: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin23: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin24: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin25: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin26: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin27: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin28: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin29: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin30: {
            pinState: 'OFF',
            pinConn: ''
          }
        },
        letterRowG: {
          pin1: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin2: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin3: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin4: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin5: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin6: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin7: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin8: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin9: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin10: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin11: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin12: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin13: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin14: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin15: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin16: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin17: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin18: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin19: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin20: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin21: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin22: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin23: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin24: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin25: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin26: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin27: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin28: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin29: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin30: {
            pinState: 'OFF',
            pinConn: ''
          }
        },
        letterRowH: {
          pin1: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin2: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin3: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin4: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin5: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin6: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin7: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin8: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin9: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin10: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin11: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin12: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin13: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin14: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin15: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin16: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin17: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin18: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin19: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin20: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin21: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin22: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin23: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin24: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin25: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin26: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin27: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin28: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin29: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin30: {
            pinState: 'OFF',
            pinConn: ''
          }
        },
        letterRowI: {
          pin1: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin2: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin3: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin4: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin5: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin6: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin7: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin8: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin9: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin10: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin11: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin12: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin13: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin14: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin15: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin16: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin17: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin18: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin19: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin20: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin21: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin22: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin23: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin24: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin25: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin26: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin27: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin28: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin29: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin30: {
            pinState: 'OFF',
            pinConn: ''
          }
        },
        letterRowJ: {
          pin1: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin2: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin3: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin4: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin5: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin6: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin7: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin8: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin9: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin10: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin11: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin12: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin13: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin14: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin15: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin16: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin17: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin18: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin19: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin20: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin21: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin22: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin23: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin24: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin25: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin26: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin27: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin28: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin29: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin30: {
            pinState: 'OFF',
            pinConn: ''
          }
        },
        positiveRightSide: {
          pin1: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin2: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin3: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin4: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin5: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin6: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin7: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin8: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin9: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin10: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin11: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin12: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin13: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin14: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin15: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin16: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin17: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin18: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin19: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin20: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin21: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin22: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin23: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin24: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin25: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin26: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin27: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin28: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin29: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin30: {
            pinState: 'OFF',
            pinConn: ''
          }
        },
        negativeRighSide: {
          pin1: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin2: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin3: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin4: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin5: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin6: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin7: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin8: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin9: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin10: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin11: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin12: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin13: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin14: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin15: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin16: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin17: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin18: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin19: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin20: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin21: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin22: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin23: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin24: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin25: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin26: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin27: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin28: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin29: {
            pinState: 'OFF',
            pinConn: ''
          },
          pin30: {
            pinState: 'OFF',
            pinConn: ''
          }
        }
      },
      position: {x: 300, y: 100}
    }
  }
}