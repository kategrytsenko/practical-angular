import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { UsersService } from '../../components-types/services/users.service';
import { Observable } from 'rxjs';
import { User } from '../../components-types/interfaces';

@Injectable({ providedIn: 'root' })
export class HeroResolver implements Resolve<string> {
  // constructor(private userService: UsersService) {}
  constructor() {}
  // Observable<User>|Promise<User>|User
  resolve(route: ActivatedRouteSnapshot): string {
    const id = route.paramMap.get('id');

    // return id ? this.userService.getUser(id) : this.userService.getDefaultUser();
    return "Resolver";
  }
}
