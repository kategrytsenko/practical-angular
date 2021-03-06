import { Component, OnDestroy, OnInit } from '@angular/core';
import { RandomDataService } from '../shared/services/random-data.service';
import { Observable, of, Subject } from 'rxjs';
import { RandomData } from '../shared/interfaces';
import { AuthService } from '../core/auth.service';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-template-rendering',
  templateUrl: './template-rendering.component.html',
  styleUrls: ['./template-rendering.component.scss']
})
export class TemplateRenderingComponent implements OnInit, OnDestroy {
  randomData$: Observable<RandomData[]> = of([]);
  randomDataWithDelay$: Observable<RandomData[]> = of([]);

  outerContext = 'outerContext';

  totalEstimate = 10;

  templateContext = {
    estimate: this.totalEstimate,
    otherContextProperty: 'We are in the template context'
  };

  private destroyed$$ = new Subject<void>();

  constructor (private randomDataService: RandomDataService, private auth: AuthService) {
  }

  ngOnInit (): void {
    this.randomDataWithDelay$ = this.randomDataService.getRandomDataWithDelay();

    this.randomData$ = this.randomDataService.getRandomData();

    this.auth.isAuthenticated$.pipe(
      takeUntil(this.destroyed$$),
      filter(isAuthenticated => isAuthenticated)
    ).subscribe(() => console.warn('i am authenticated and i know this from the core module'));
  }

  ngOnDestroy(): void {
    this.destroyed$$.next();
    this.destroyed$$.complete();
  }
}
