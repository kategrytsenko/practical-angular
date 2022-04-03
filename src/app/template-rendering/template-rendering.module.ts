import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateRenderingRoutingModule } from './template-rendering-routing.module';
import { TemplateRenderingComponent } from './template-rendering.component';


@NgModule({
  declarations: [TemplateRenderingComponent],
  imports: [
    CommonModule,
    TemplateRenderingRoutingModule
  ]
})
export class TemplateRenderingModule { }
