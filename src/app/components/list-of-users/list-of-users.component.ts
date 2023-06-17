import { Component, OnInit } from '@angular/core';
import { IUserInfo } from 'src/app/models/user-info.model';
import { UsersService } from 'src/app/services/user-service/user-service.service';
import {Observable} from 'rxjs'
@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss']
})
export class ListOfUsersComponent implements OnInit{
  public listOfUsers$!: Observable<IUserInfo[]>
  constructor(public userService: UsersService) {}

  ngOnInit(): void {
    this.listOfUsers$ = this.userService.getListOfUsers()
  }
}
