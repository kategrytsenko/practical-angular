import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "rendering",
    loadChildren: () => import('./rendering/rendering.module').then(m => m.RenderingModule)
  },
  {
    path: "components-types",
    loadChildren: () => import('./components-types/components-types.module').then(m => m.ComponentsTypesModule)
  },
  {
    path: "resolver",
    loadChildren: () => import('./resolver/resolver.module').then(m => m.ResolverModule)
  },
  {
    path: "template-rendering",
    loadChildren: () => import('./template-rendering/template-rendering.module').then(m => m.TemplateRenderingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
