import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { RandomDataService } from './random-data.service';
import { RandomData } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class RandomDataResolver implements Resolve<RandomData> {
  constructor(private randomDataService: RandomDataService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<RandomData>|Promise<RandomData>|RandomData {
    const id = route.paramMap.get('id');

    return id ? this.randomDataService.getRandomDataById(id) : this.randomDataService.getDefaultRandomData();
  }
}
