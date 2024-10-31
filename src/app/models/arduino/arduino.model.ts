export interface Arduino {
  id: number;
  type: string;
  pins: {
    digitalPwm: {
      d0: {
        pinState: string,
        pinConn: string
      },
      d1: {
        pinState: string,
        pinConn: string
      },
      d2: {
        pinState: string,
        pinConn: string
      },
      d3: {
        pinState: string,
        pinConn: string
      },
      d4: {
        pinState: string,
        pinConn: string
      },
      d5: {
        pinState: string,
        pinConn: string
      },
      d6: {
        pinState: string,
        pinConn: string
      },
      d7: {
        pinState: string,
        pinConn: string
      },
      d8: {
        pinState: string,
        pinConn: string
      },
      d9: {
        pinState: string,
        pinConn: string
      },
      d10: {
        pinState: string,
        pinConn: string
      },
      d11: {
        pinState: string,
        pinConn: string
      },
      d12: {
        pinState: string,
        pinConn: string
      },
      d13: {
        pinState: string,
        pinConn: string
      }
    },
    analogIn: {
      a0: {
        pinState: string,
        pinConn: string
      },
      a1: {
        pinState: string,
        pinConn: string
      },
      a2: {
        pinState: string,
        pinConn: string
      },
      a3: {
        pinState: string,
        pinConn: string
      },
      a4: {
        pinState: string,
        pinConn: string
      },
      a5: {
        pinState: string,
        pinConn: string
      },
      auxPin: {
        gnd: {
          pinState: string,
          pinConn: string
        },
        aref: {
          pinState: string,
          pinConn: string
        },
        sda: {
          pinState: string,
          pinConn: string
        },
        scl:{
          pinState: string,
          pinConn: string
        }
      }
    },
    power: {
      vin: {
        pinState: string,
        pinConn: string
      },
      gnd1: {
        pinState: string,
        pinConn: string
      },
      gnd2: {
        pinState: string,
        pinConn: string
      },
      p5v: {
        pinState: string,
        pinConn: string
      },
      p33v: {
        pinState: string,
        pinConn: string
      },
      auxPin: {
        reset: {
          pinState: string,
          pinConn: string
        },
        ioref: {
          pinState: string,
          pinConn: string
        },
        unused: {
          pinState: string,
          pinConn: string
        }
      }
    }
  };
  state: string;
  ledBuiltin: string;
  ledTx: string;
  ledRx: string;
  ledOn: string;
  button: string;
  position: {x: number, y: number};
}