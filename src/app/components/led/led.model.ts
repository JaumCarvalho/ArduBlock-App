export interface Led {
  id: number;
  type: string; // Tipo do componente, por exemplo 'LED'
  pin: number;  // Pino ao qual o LED está conectado
  state: string; // Estado inicial do LED, por exemplo, 'OFF' ou 'ON'
}
