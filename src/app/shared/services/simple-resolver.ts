import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class SimpleResolver implements Resolve<string> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot): string {
    return "Just a simple resolver with with not very useful message...";
  }
}
