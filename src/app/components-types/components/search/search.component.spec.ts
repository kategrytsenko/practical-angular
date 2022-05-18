import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: TestSearchComponent;
  let fixture: ComponentFixture<TestSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent, TestSearchComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TestSearchComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should output inputted search query to the parent', () => {
    const outputSpy = spyOn(component, 'outputListener');
    const mockQuery = 'mock query';

    utils.dispatchSearchEvent(mockQuery);

    expect(outputSpy).toHaveBeenCalledWith(mockQuery);
  });

  @Component({
    template: `<app-search
      (filterSearchString)="outputListener($event)"
    ></app-search>`,
  })
  class TestSearchComponent {
    outputListener = (payload: string) => {};
  }

  const elements = {
    getSearchInput: () =>
      fixture.debugElement.query(By.css('[data-role="search-input"]')),
  };

  const utils = {
    // DispatchEvent is used because there is no explicit handler for text input.
    // This is the official angular styleguide recommendation.
    dispatchSearchEvent: (query: string) => {
      elements.getSearchInput().nativeElement.value = query;
      elements.getSearchInput().nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
    },
  };
});
