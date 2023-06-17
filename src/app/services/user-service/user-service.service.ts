import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { IUserInfo } from 'src/app/models/user-info.model';
import { IUser } from 'src/app/models/dtos/user.model';
import { ICity } from 'src/app/models/dtos/city.model';

@Injectable()
export class UsersService {

  constructor(
    private http: HttpClient,
  ) { }

  public getListOfUsers(): Observable<IUserInfo[]> {
    return this.http.get<IUserInfo[]>(`https://6390b47b65ff4183111c4b91.mockapi.io/users/users`)
  }

  private getListOfUsers2(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`https://646b8fc77d3c1cae4ce3ffe0.mockapi.io/commonapi/users`)
  }

  private getListOfCities(): Observable<ICity[]> {
    return this.http.get<ICity[]>(`https://646b8fc77d3c1cae4ce3ffe0.mockapi.io/commonapi/cities`)
  }

  public getListOfUsersAndCities(): Observable<{
    users: IUser[];
    cities: ICity[];
  }> {
    return forkJoin({
      users: this.getListOfUsers2(),
      cities: this.getListOfCities()
    })
  }
}
