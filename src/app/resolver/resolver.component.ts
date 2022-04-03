import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolver',
  templateUrl: './resolver.component.html',
  styleUrls: ['./resolver.component.scss']
})
export class ResolverComponent implements OnInit {
  dataFromResolver: string = '';

  constructor (private route: ActivatedRoute) {
  }

  ngOnInit (): void {
    this.dataFromResolver = this.route.snapshot.data.message;
  }
}
