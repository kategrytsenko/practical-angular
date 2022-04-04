import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  public genderFilter = new FormControl();

  @Output() public filterByGender = new EventEmitter();

  ngOnInit(): void {
    this.genderFilter.valueChanges.subscribe(value => this.filterByGender.emit(value));
  }
}
