import { Component, OnInit } from '@angular/core';
import { RandomDataService } from '../shared/services/random-data.service';
import { Observable, of, Subscription } from 'rxjs';
import { RandomData } from '../shared/interfaces';

@Component({
  selector: 'app-rendering',
  templateUrl: './rendering.component.html',
  styleUrls: ['./rendering.component.scss']
})
export class RenderingComponent implements OnInit {
  randomData$: Observable<RandomData[]> = of([]);
  randomDataBad$ = new Subscription();
  randomDataBad: RandomData[] | undefined;
  columnTitles = ["Animal", "Color", "Car", "City"];

  constructor (private randomDataService: RandomDataService) {
  }

  ngOnInit () {
    this.randomData$ = this.randomDataService.getRandomData();

    // With this approach we need to unsubscribe
    this.randomDataBad$ = this.randomDataService.getRandomData()
      .subscribe((data) => this.randomDataBad = data);
  }

  //TODO: ngOnDestroy
}


