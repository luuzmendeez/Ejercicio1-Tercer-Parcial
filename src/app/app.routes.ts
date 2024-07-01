import { ActividadesComponent } from './actividades/actividades.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriasComponent } from './categorias/categorias.component';
// import { ProductosComponent } from './productos/productos.component';
import { ConversionesComponent } from './conversiones/conversiones.component';
import { CategoriasformComponent } from './categoriasform/categoriasform.component';
import { ArticulosComponent } from './productos/productos.component';
// import { ArticuloFormComponent } from './articulo-form/articulo-form.component'; 

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'actividades', component: ActividadesComponent },
    { path: 'productos', component: ArticulosComponent },
    // { path: 'articulosForm/:id', component: ArticuloFormComponent },
    { path: 'categorias', component: CategoriasComponent },
    { path: 'conversiones', component: ConversionesComponent },
    { path: 'categoriasForm', component: CategoriasformComponent },
    { path: 'categoriasForm/:id', component: CategoriasformComponent }
];
