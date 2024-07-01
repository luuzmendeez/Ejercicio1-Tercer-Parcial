import { Categoria } from "./Categoria";

export interface Articulo {
    idArticulo: number;
    nombreArticulo: string;
    descripcion: string;
    existencia: number;
    precio: number;
    idCategoria: Categoria; // O usa una relación de objeto si es necesario
  }
