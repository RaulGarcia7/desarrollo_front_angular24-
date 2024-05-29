import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaModule } from './tienda/tienda.module';

const routes: Routes = [
  { path: '', redirectTo: '/tienda', pathMatch: 'full' },
  { path: 'tienda', loadChildren: () => import('./tienda/tienda.module').then(m => m.TiendaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
