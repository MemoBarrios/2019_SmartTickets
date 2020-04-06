import { IDepartamento } from "./IDepartamento";
import { ISucursal } from "./ISucursal";
import { ICategoria } from "./ICategoria";
import { ISubcategoria } from "./ISubcategoria";

export interface ITicket {
  folio: number;
  compania: number;
  sucursal: number;
  titulo: string;
  tipo_Ticket: string;
  usuario_Asig: string;
  id_Usuario: number;
  id_Estatus: number;
  id_Fecha: Date;
  descripcion: string;
  categoria: string;
  subcategoria: string;
  departamento: string;
  fecha_Cierre: Date;
  adjuntos: File;
}
