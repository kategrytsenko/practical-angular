import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContentProjectionComponent } from './show-content-projection.component';

describe('ShowContentProjectionComponent', () => {
  let component: ShowContentProjectionComponent;
  let fixture: ComponentFixture<ShowContentProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowContentProjectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
