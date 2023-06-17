import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserInfo } from 'src/app/models/user-info.model';

@Injectable()
export class UsersService {

  constructor(
    private http: HttpClient,
  ) { }

  public getListOfUsers(): Observable<IUserInfo[]> {
    return this.http.get<IUserInfo[]>(`https://6390b47b65ff4183111c4b91.mockapi.io/users/users`)
  }
}
