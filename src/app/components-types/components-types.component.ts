import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { combineLatest, Observable, of } from 'rxjs';
import { User } from './interfaces';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-components',
  templateUrl: './components-types.component.html',
  styleUrls: ['./components-types.component.scss']
})
export class ComponentsTypesComponent implements OnInit {
  users$: Observable<User[]> = of([]);
  filteredUsers$: Observable<User[]> = of([]);
  filter: FormControl = new FormControl('');
  filter$: Observable<string> = this.filter.valueChanges.pipe(startWith(''));

  constructor (private usersService: UsersService) {
  }

  ngOnInit (): void {
    this.users$ = this.usersService.getUsers();

    this.filteredUsers$ = combineLatest(this.users$, this.filter$)
      .pipe(
        map(([users, filterString]) =>
            users.filter(user => user.first_name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
      );
  }
}
