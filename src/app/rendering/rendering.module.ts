import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenderingRoutingModule } from './rendering-routing.module';
import { RenderingComponent } from './rendering.component';
import { DataTableComponent } from './data-table/data-table.component';



@NgModule({
  declarations: [RenderingComponent, DataTableComponent],
  imports: [
    CommonModule,
    RenderingRoutingModule
  ]
})
export class RenderingModule { }
