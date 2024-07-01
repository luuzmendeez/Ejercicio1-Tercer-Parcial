import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Articulo } from '../model/Articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  private urlEndPoint: string = 'http://localhost:8082/apiArticulo/articulos';
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) { }

  mostrarArticulos(): Observable<Articulo[]>{
    return this.http
    .get(this.urlEndPoint)
    .pipe(map((response) => response as Articulo[]));
  }

  mostrarArticulo(id: number): Observable<Articulo>{
    return this.http.get<Articulo>(`${this.urlEndPoint}/${id}`);
  }

  eliminarArticulo(id: number): Observable<Articulo>{
    return this.http.delete<Articulo>(`${this.urlEndPoint}/${id}`, {
      headers: this.httpHeaders
    });
  }

  crearArticulo(articulo: Articulo): Observable<Articulo>{
    return this.http.post<Articulo>(
      this.urlEndPoint, 
      articulo, 
      {
        headers: this.httpHeaders
      }
    );
  }

  actualizarArticulo(articulo: Articulo): Observable<Articulo>{
    return this.http.put<Articulo>(
      `${this.urlEndPoint}/${articulo.idArticulo}`, 
      articulo, 
      {
        headers: this.httpHeaders
      }
    );
  }
}
