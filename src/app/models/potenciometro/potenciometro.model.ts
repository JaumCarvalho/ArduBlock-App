export interface Potenciometro{
  id: number,
  type: string,
  resistance: string,
  pins: {
    terminal1: {
      pintState: string,
      pinConn: string
    },
    wiper: {
      pinState: string,
      pinConn: string
    },
    terminal2:{
      pinState: string,
      pinConn: string
    }
  },
  state: string,
  position: { x:number, y:number }
}