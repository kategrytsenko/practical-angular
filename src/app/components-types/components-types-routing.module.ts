import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsTypesComponent } from './components-types.component';
import { SimpleResolver } from '../shared/services/simple-resolver';


const routes: Routes = [
  {
    path: '',
    component: ComponentsTypesComponent,
    resolve: { message: SimpleResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsTypesRoutingModule { }
