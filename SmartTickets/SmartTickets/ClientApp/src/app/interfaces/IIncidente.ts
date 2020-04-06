import { ITicket } from "./ITicket";

export interface IIncidente extends ITicket {
  prioridad: string;
  tiempoInv: Date;
}
