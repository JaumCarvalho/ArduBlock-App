export interface Led {
  id: number;
  type: string;
  pins: {
    catodo: {
      pinState: string, pinConn: string
    },
    anodo: {
      pinState: string, pinConn: string
    }
  };
  state: string;
  position: {x: number, y: number}
}
