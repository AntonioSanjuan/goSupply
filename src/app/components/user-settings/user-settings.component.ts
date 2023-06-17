import { Component } from '@angular/core';
import { IUserInfo, UserInfo } from 'src/app/models/user-info.model';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent {
  public userInfo!: IUserInfo;

  constructor() {
    this.userInfo = new UserInfo()
  }

  increment() {
    this.userInfo.age = this.userInfo.age +1;
    console.log(`new user age: ${this.userInfo.age}`)
  }
}
