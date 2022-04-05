import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class SimpleResolver implements Resolve<string> {

  resolve(): string {
    return "Just a simple resolver with not very useful message...";
  }
}
