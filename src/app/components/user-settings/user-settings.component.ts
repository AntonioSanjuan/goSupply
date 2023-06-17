import { Component, OnInit } from '@angular/core';
import { IUserInfo, UserInfo } from 'src/app/models/user-info.model';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent {
  public userInfo!: IUserInfo;
}
