import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { GraphComponent } from './components/graph/graph.component';

const routes: Routes = [
  { path: '', component: FormComponent},
  { path: 'charts', component: GraphComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
