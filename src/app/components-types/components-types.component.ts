import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './interfaces';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-components',
  templateUrl: './components-types.component.html',
  styleUrls: ['./components-types.component.scss'],
})
export class ComponentsTypesComponent implements OnInit {
  private users$ = this.usersService.getUsers();

  private genderFilter$$ = new BehaviorSubject<string>('all');
  private searchFilter$$ = new BehaviorSubject<string>('');

  public filteredUsers$!: Observable<User[]>;
  public totalUserCount$ = this.users$.pipe(map(({ length }) => length));

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.filteredUsers$ = combineLatest([
      this.users$,
      this.searchFilter$$.asObservable(),
      this.genderFilter$$.asObservable(),
    ]).pipe(
      map(([users, searchQuery, genderFilter]): [Array<User>, string] => {
        if (genderFilter === 'all') {
          return [users, searchQuery];
        }

        if (genderFilter === 'non-binary') {
          return [
            users.filter(
              ({ gender }) =>
                !(
                  gender.toLowerCase() === 'male' ||
                  gender.toLowerCase() === 'female'
                )
            ),
            searchQuery,
          ];
        }

        return [
          users.filter(({ gender }) => gender.toLowerCase() === genderFilter),
          searchQuery,
        ];
      }),
      map(([users, filterString]) =>
        users.filter(
          (user) =>
            user.first_name
              .toLowerCase()
              .indexOf(filterString.toLowerCase()) !== -1
        )
      )
    );

    console.log(
      'Message from the SimpleResolver',
      this.route.snapshot.data.message
    );
  }

  public applyFilterByGender(choosenGender: string): void {
    this.genderFilter$$.next(choosenGender);
  }

  public applyFilterBySearchString(searchText: string): void {
    this.searchFilter$$.next(searchText);
  }
}
