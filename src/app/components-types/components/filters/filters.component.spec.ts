import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { FiltersComponent } from './filters.component';

describe('FiltersComponent', () => {
  let component: TestFiltersComponent;
  let fixture: ComponentFixture<TestFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltersComponent, TestFiltersComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TestFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit gender string when option is selected', () => {
    const outputListenerSpy = spyOn(component, 'outputListener');
    const selectedFilter = 'non-binary';

    utils.dispatchSelectFilterEvent(selectedFilter);

    expect(outputListenerSpy).toHaveBeenCalledWith(selectedFilter);
  });

  @Component({
    template: `<app-filters
      (filterByGender)="outputListener($event)"
    ></app-filters>`,
  })
  class TestFiltersComponent {
    outputListener = (payload: string) => {};
  }

  const elements = {
    getGenderSelect: () =>
      fixture.debugElement.query(By.css('[data-role="gender-select"]')),
  };

  const utils = {
    // DispatchEvent is used because there is no explicit handler for text input.
    // This is the official angular styleguide recommendation.
    // Pay attention that for select it should be Event of type `change`.
    dispatchSelectFilterEvent: (filterOption: string) => {
      elements.getGenderSelect().nativeElement.value = filterOption;
      elements
        .getGenderSelect()
        .nativeElement.dispatchEvent(new Event('change'));
      fixture.detectChanges();
    },
  };
});
