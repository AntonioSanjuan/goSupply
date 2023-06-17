import { Component, Input } from '@angular/core';
import { IUserInfo, UserInfo } from 'src/app/models/user-info.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  @Input() userInfo!: IUserInfo
}
