import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResolverComponent } from './components/simple-resolver/resolver.component';
import { SharedModule } from '../shared/shared.module';
import { ResolverRoutingModule } from './resolver-routing.module';
import { RandomDataComponent } from './components/random-data/random-data.component';


@NgModule({
  declarations: [
    ResolverComponent,
    RandomDataComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    ResolverRoutingModule,

    SharedModule
  ]
})
export class ResolverModule { }
