import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaRoutingModule } from './tienda-routing.module';
import { TiendaComponent } from './tienda.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';
import { FakeApi } from '../services/fake.service';


@NgModule({
  declarations: [
    TiendaComponent,
    CategoriasComponent,
    ProductosComponent,
    ProductoDetalleComponent
  ],
  imports: [
    CommonModule,
    TiendaRoutingModule
  ],
  providers: [
    FakeApi
  ]
})
export class TiendaModule { }
