import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { User } from './interfaces';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-components',
  templateUrl: './components-types.component.html',
  styleUrls: ['./components-types.component.scss']
})
export class ComponentsTypesComponent implements OnInit {
  users$: Observable<User[]> = of([]);
  filteredUsers$: Observable<User[]> = of([]);

  private genderFilter$$ = new BehaviorSubject<string>('all');
  private searchFilter$$ = new BehaviorSubject<string>('');

  constructor (private usersService: UsersService, private route: ActivatedRoute) {
  }

  ngOnInit (): void {
    this.users$ = this.usersService.getUsers();

    this.filteredUsers$ = combineLatest([this.users$, this.searchFilter$$.asObservable(), this.genderFilter$$.asObservable()])
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

    console.log("Message from the SimpleResolver", this.route.snapshot.data.message);
  }

  public applyFilterByGender(choosenGender: string): void {
    this.genderFilter$$.next(choosenGender);
  }

  public applyFilterBySearchString(searchText: string): void {
    this.searchFilter$$.next(searchText)
  }
}
