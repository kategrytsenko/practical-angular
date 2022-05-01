import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FirstLetterPipe } from 'src/app/shared/pipes/first-letter.pipe';

import { UserCardComponent } from './user-card.component';

describe('UserCardComponent', () => {
  let fixture: ComponentFixture<TestUserCardComponent>;

  const mockUser = {
    id: 123,
    first_name: 'first name',
    last_name: 'last name',
    email: 'email',
    gender: 'gender',
  };

  const renderFormatters = {
    email: (email: string) => `Email: ${email}`,
  };

  const elements = {
    getEmailText: () =>
      fixture.debugElement.query(By.css('[data-role="card__user-email"]'))
        .nativeElement.innerText,
  };

  @Component({
    template: `<app-user-card [user]="user"></app-user-card>`,
  })
  class TestUserCardComponent {
    user = mockUser;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCardComponent, FirstLetterPipe, TestUserCardComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TestUserCardComponent);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should render formatted email', () => {
    expect(elements.getEmailText()).toBe(
      renderFormatters.email(mockUser.email)
    );
  });
});
