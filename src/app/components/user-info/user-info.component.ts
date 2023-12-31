import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { IUserInfo } from 'src/app/models/user-info.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnChanges{
  @Input() userInfo!: IUserInfo
  @Output() incrementAge = new EventEmitter<void>()

  ngOnChanges() {
    this.logUserInfoChanges()
  }

  private logUserInfoChanges() {
    console.log("userInfo", this.userInfo)
  }

  public increment() {
    this.incrementAge.emit()
  }
}
