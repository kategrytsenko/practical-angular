import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchInput: FormControl = new FormControl('');

  @Output() public filterSearchString = new EventEmitter();

  ngOnInit(): void {
    this.searchInput.valueChanges.subscribe(value => this.filterSearchString.emit(value))
  }
}
