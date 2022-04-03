import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateRenderingComponent } from './template-rendering.component';


const routes: Routes = [
  {
    path: '',
    component: TemplateRenderingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRenderingRoutingModule { }
