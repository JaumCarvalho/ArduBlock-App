export interface Led {
  id: number;
  type: string;
  pin: any;
  state: string;
  position: {x: number, y: number}
}
