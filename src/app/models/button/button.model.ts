export interface Button {
  id: number;
  type: string;
  pins: {
    terminalA1: {
      pinState: string,
      pinConn: string
    },
    terminalA2: {
      pinState: string,
      pinConn: string
    },
    terminalB1: {
      pinState: string,
      pinConn: string
    },
    terminalB2: {
      pinState: string,
      pinConn: string
    }
  };
  state: string;
  position: {x: number, y: number};
}
