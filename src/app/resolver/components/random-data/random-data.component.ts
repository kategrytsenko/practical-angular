import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-random-data',
  templateUrl: './random-data.component.html',
  styleUrls: ['./random-data.component.scss']
})
export class RandomDataComponent implements OnInit {
  dataFromResolver: string = '';

  constructor (private route: ActivatedRoute) {
  }

  ngOnInit (): void {
    this.dataFromResolver = this.route.snapshot.data.data;
  }
}
