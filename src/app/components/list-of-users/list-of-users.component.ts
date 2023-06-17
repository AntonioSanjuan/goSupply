import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUserInfo } from 'src/app/models/user-info.model';
import { UsersService } from 'src/app/services/user-service/user-service.service';
import {Observable, Subscription} from 'rxjs'
@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss']
})
export class ListOfUsersComponent implements OnInit, OnDestroy{
  public listOfUsers$!: Observable<any>
  private subscriptions: Subscription[] = []
  constructor(public userService: UsersService) {}

  ngOnInit(): void {
    this.listOfUsers$ = this.userService.getListOfUsers()

    this.subscriptions.push(
      this.userService.getListOfUsersAndCities().subscribe((data: any) => {
        console.log("getListOfUsersAndCities", data)
      })
    )

    this.subscriptions.push(
      this.userService.getUserCityRelation().subscribe((data: any) => {
        console.log("getListOfCitiesByUsers", data)
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    })
  }
}
