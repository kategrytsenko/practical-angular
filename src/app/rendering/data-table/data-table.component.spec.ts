import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomData } from 'src/app/shared/interfaces';

import { DataTableComponent } from './data-table.component';

describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
    // Bad practicies of setting input,
    // left here as reminder.
    component.data = [{ id: '1' } as RandomData];
    component.columnTitles = [];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
