import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent implements OnInit {
  public genderFilter = new FormControl();

  @Output() public filterByGender = new EventEmitter<string>();

  ngOnInit(): void {
    this.genderFilter.valueChanges.subscribe((value: string) =>
      this.filterByGender.emit(value)
    );
  }
}
