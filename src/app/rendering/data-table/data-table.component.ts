import { Component, Input, OnInit } from '@angular/core';
import { RandomData } from '../../shared/interfaces';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() data!: RandomData[];
  @Input() columnTitles!: string[];

  constructor() { }

  ngOnInit(): void {
  }

  trackByFn(index: number, item: RandomData): string {
    return item.id;
  }

}
