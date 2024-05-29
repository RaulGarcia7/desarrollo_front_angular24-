import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';

const routes: Routes = [
  {path: '', component: CategoriasComponent},
  {path: 'categoria/:id', component: ProductosComponent},
  {path: 'producto/:id', component: ProductoDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendaRoutingModule { }
