import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../../interfaces';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent {
  @Input() user!: User;

  // executeFunction() {
  //   console.log("App Rerendered");
  //
  //   return "This is Child Component"
  // }
}
