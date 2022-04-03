import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResolverComponent } from './resolver.component';
import { SharedModule } from '../shared/shared.module';
import { ResolverRoutingModule } from './resolver-routing.module';


@NgModule({
  declarations: [
    ResolverComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    ResolverRoutingModule,

    SharedModule
  ]
})
export class ResolverModule { }
