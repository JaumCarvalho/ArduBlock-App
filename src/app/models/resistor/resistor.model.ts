export interface Resistor {
  id: number;
  type: string;
  resistance: string,
  pins: {
    terminal1: {
      pinState: string,
      pinConn: string
    },
    terminal2: {
    pinState: string,
     pinConn: string
    }
  };
  state: string;
  position: {x: number, y: number}
}
