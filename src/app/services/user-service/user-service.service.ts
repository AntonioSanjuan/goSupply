import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
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

  private getUserCity(userId: string): Observable<ICity> {
    return this.http.get<ICity>(`https://646b8fc77d3c1cae4ce3ffe0.mockapi.io/commonapi/cities/${userId}`)
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

  public getUserCityRelation(): any {
    return this.getListOfUsers2().pipe(
      map((users: IUser[]) => {
        return users;
      }),
      switchMap((users: IUser[]) => {
        const requests = users.map((user: IUser) => {
          return this.getUserCity(user.id)
        })
        return forkJoin<ICity[]>(requests).pipe(
          map((cities: any) => {
            const mergedData = users.map((user: IUser, index: number) => {
              return {
                user: user,
                city: cities[index]
              };
            });
            return mergedData;
          })
        );
      }),

    )
  }
}
