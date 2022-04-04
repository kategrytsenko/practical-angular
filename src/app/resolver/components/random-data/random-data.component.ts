import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-random-data',
  templateUrl: './random-data.component.html',
  styleUrls: ['./random-data.component.scss']
})
export class RandomDataComponent implements OnInit, OnDestroy {
  dataFromResolver: string = '';

  private destroyed$$ = new Subject<void>();

  constructor (private route: ActivatedRoute, private auth: AuthService) {
  }

  ngOnInit (): void {
    this.dataFromResolver = this.route.snapshot.data.data;

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
