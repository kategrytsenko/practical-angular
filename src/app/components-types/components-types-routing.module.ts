import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsTypesComponent } from './components-types.component';


const routes: Routes = [
  {
    path: '',
    component: ComponentsTypesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsTypesRoutingModule { }
