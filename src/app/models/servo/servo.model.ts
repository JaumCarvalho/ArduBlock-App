export interface Servo{
  id: number,
  type: string,
  angle: number,
  pins: {
    ground: {
      pinState: string,
      pinConn: string
    },
    power: {
      pinState: string,
      pinConn: string
    },
    signal: {
      pinState: string,
      pinConn: string
    }
  },
  state: string,
  position: { x: number, y: number }
}