import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
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

  private genderFilter$$ = new BehaviorSubject<string>('all');

  constructor (private usersService: UsersService) {
  }

  ngOnInit () {
    this.users$ = this.usersService.getUsers();

    this.filteredUsers$ = combineLatest([this.users$, this.filter$, this.genderFilter$$.asObservable()])
      .pipe(
        map(([users, searchQuery, genderFilter]): [Array<User>, string] => {
          if (genderFilter === 'all') {
            return [users, searchQuery];
          }

          if (genderFilter === 'non-binary') {
            return [users.filter(({ gender }) => !(gender.toLowerCase() === 'male' || gender.toLowerCase() === 'female')), searchQuery];
          }

          return [users.filter(({ gender }) => gender.toLowerCase() === genderFilter), searchQuery];
        }),
        map(([users, filterString]) =>
            users.filter(user => user.first_name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1)),
      );
  }

  public applyFilterByGender(choosenGender: string) {
    this.genderFilter$$.next(choosenGender);
  }
}
