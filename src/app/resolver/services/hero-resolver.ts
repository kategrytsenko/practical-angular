// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
// import { UsersService } from '../../components-types/services/users.service';
// import { Observable } from 'rxjs';
// import { User } from '../../components-types/interfaces';
//
// @Injectable({ providedIn: 'root' })
// export class HeroResolver implements Resolve<User> {
//   constructor(private userService: UsersService) {}
//
//   resolve(route: ActivatedRouteSnapshot): Observable<User>|Promise<User>|User {
//     const id = route.paramMap.get('id');
//
//     return id ? this.userService.getUser(id) : this.userService.getDefaultUser();
//   }
// }
