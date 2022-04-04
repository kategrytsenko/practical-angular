import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
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

  // todo: this is example of the logic that can be extracted
  // from container component to make it easier to grasp essentials,
  // no going into deep of presentation logic
  searchInput: FormControl = new FormControl('');
  searchQuery$: Observable<string> = this.searchInput.valueChanges.pipe(startWith(''));

  private genderFilter$$ = new BehaviorSubject<string>('all');

  constructor (private usersService: UsersService) {
  }

  ngOnInit (): void {
    this.users$ = this.usersService.getUsers();

    this.filteredUsers$ = combineLatest([this.users$, this.searchQuery$, this.genderFilter$$.asObservable()])
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
