import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolver',
  templateUrl: './resolver.component.html',
  styleUrls: ['./resolver.component.scss']
})
export class ResolverComponent implements OnInit {
  constructor (private route: ActivatedRoute) {
  }

  ngOnInit (): void {
    console.log(this.route.snapshot.data);
    console.log('lkj');

  }
}
