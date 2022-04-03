import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolverComponent } from './resolver.component';
import { SimpleResolver } from '../shared/services/simple-resolver';
// import { HeroResolver } from './services/hero-resolver';


const routes: Routes = [
  {
    path: '',
    component: ResolverComponent,
    resolve: { message: SimpleResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResolverRoutingModule { }
