import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolverComponent } from './resolver.component';
import { HeroResolver } from '../components-types/services/hero-resolver';
// import { HeroResolver } from './services/hero-resolver';


const routes: Routes = [
  {
    path: '',
    component: ResolverComponent,
    resolve: { message: HeroResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResolverRoutingModule { }
