import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public navigation = [
    {
      path: '/rendering',
      name: 'Rendering',
    },
    {
      path: '/template-rendering',
      name: 'Template rendering',
    },
    {
      path: '/components-types',
      name: 'Components',
    },
    {
      path: '/resolver',
      name: 'Resolver',
    },
  ];
}
