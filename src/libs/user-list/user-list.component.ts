import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '../../app/user';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {

  @Input() users! : User[];

}
