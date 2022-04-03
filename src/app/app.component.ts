import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navigation = [
    {
      path: '',
      name: 'Home'
    },
    {
      path: '/rendering-t-1',
      name: 'Rendering'
    },
    {
      path: '/components-types',
      name: 'Components'
    },
    {
      path: '/resolver',
      name: 'Resolver'
    },
  ];
}
