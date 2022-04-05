import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstLetterPipe } from './pipes/first-letter.pipe';
import { ShowContentProjectionComponent } from './components/show-content-projection/show-content-projection.component';


@NgModule({
  declarations: [FirstLetterPipe, ShowContentProjectionComponent],
  imports: [CommonModule],
  exports: [FirstLetterPipe, ShowContentProjectionComponent]
})
export class SharedModule {
}
