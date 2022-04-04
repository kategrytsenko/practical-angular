import { Component, OnInit } from '@angular/core';
import { RandomDataService } from '../shared/services/random-data.service';
import { Observable, of } from 'rxjs';
import { RandomData } from '../shared/interfaces';

@Component({
  selector: 'app-template-rendering',
  templateUrl: './template-rendering.component.html',
  styleUrls: ['./template-rendering.component.scss']
})
export class TemplateRenderingComponent implements OnInit {
  randomData$: Observable<RandomData[]> = of([]);
  randomDataWithDelay$: Observable<RandomData[]> = of([]);


  totalEstimate = 10;
  ctx = { estimate: this.totalEstimate };

  loginText = 'Login';
  signUpText = 'Sign Up';
  lessons = ['Lesson 1', 'Lessons 2'];

  login () {
    console.log('Login');
  }

  signUp () {
    console.log('Sign Up');
  }

  constructor (private randomDataService: RandomDataService) {
  }

  ngOnInit (): void {
    this.randomDataWithDelay$ = this.randomDataService.getRandomDataWithDelay();

    this.randomData$ = this.randomDataService.getRandomData();
  }
}
