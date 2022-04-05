import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateRenderingRoutingModule } from './template-rendering-routing.module';
import { TemplateRenderingComponent } from './template-rendering.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [TemplateRenderingComponent],
  imports: [
    CommonModule,
    SharedModule,
    TemplateRenderingRoutingModule
  ]
})
export class TemplateRenderingModule { }
