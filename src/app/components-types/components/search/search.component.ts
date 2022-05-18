import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public searchInput: FormControl = new FormControl('');

  @Output() public filterSearchString = new EventEmitter<string>();

  ngOnInit(): void {
    this.searchInput.valueChanges.subscribe((value: string) =>
      this.filterSearchString.emit(value)
    );
  }
}
