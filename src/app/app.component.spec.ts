import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  const elements = {
    getHeader: () =>
      fixture.debugElement.query(By.css('[data-role="app-header"]')),
    getFooter: () =>
      fixture.debugElement.query(By.css('[data-role="app-footer"]')),
    getRouterLinks: () =>
      fixture.debugElement.queryAll(By.css('[data-role="navigation-link"]')),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  describe('common rendering', () => {
    it('should render header', () => {
      expect(elements.getHeader()).toBeTruthy();
    });

    it('should render footer', () => {
      expect(elements.getFooter()).toBeTruthy();
    });
  });

  it('should render correct amount of router links', () => {
    const currentNumberOfRouterLinks = 4;

    expect(elements.getRouterLinks().length).toBe(currentNumberOfRouterLinks);
  });
});
