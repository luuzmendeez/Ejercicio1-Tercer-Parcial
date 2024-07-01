import { Component, OnInit } from '@angular/core';
import { Articulo } from '../model/Articulo';
import { ArticulosService } from '../service/articulos.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ArticulosComponent implements OnInit {
  articulos: Articulo[] = [];

  constructor(private articulosService: ArticulosService) { }

  ngOnInit() {
    this.articulosService.mostrarArticulos().subscribe(data => {
      this.articulos = data;
    });
  }

  eliminarArticulo(id: number) {
    this.articulosService.eliminarArticulo(id).subscribe(() => {
      this.articulos = this.articulos.filter(a => a.idArticulo !== id);
    });
  }
}