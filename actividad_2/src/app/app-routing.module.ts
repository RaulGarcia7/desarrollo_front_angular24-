import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from 'src/components/formulario/form.component';
import { TablaComponent } from 'src/components/tabla/tabla.component';

const routes: Routes = [
  {
    path: 'table', component: TablaComponent
  },
  {
    path: 'form', component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
