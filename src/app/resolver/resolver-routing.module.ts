import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolverComponent } from './components/simple-resolver/resolver.component';
import { SimpleResolver } from '../shared/services/simple-resolver';
import { RandomDataResolver } from '../shared/services/random-data-resolver';
import { RandomDataComponent } from './components/random-data/random-data.component';


const routes: Routes = [
  {
    path: '',
    component: ResolverComponent,
    resolve: { data: SimpleResolver },
  },
  {
    path: 'random/:id',
    component: RandomDataComponent,
    resolve: {
      data: RandomDataResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResolverRoutingModule { }
