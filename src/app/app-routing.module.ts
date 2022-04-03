import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "rendering-t-1",
    loadChildren: () => import('./rendering-t-1/rendering-t-1.module').then(m => m.RenderingT1Module)
  },
  {
    path: "components-types",
    loadChildren: () => import('./components-types/components-types.module').then(m => m.ComponentsTypesModule)
  },
  {
    path: "resolver",
    loadChildren: () => import('./resolver/resolver.module').then(m => m.ResolverModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
