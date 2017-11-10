import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { User } from '../../models/user/user.interface'
import { AppSettingsProvider } from '../app-settings/app-settings';

@Injectable()
export class UserProvider {
  private baseUrl:string = this.appSettingsProvider.baseUrl();

  constructor(private http:Http, private appSettingsProvider:AppSettingsProvider) {
  }

  createUser(user: User): Observable<User> {
    return this.http.post(`${this.baseUrl}/users`, user)
      //.do((data => console.log(data)))
      .map((data: Response) => data.headers.get('x-auth-token'))
      //.do((data => console.log(data)))
      .catch((error: Response) => Observable.throw(error.json().error || "Server error."))

  }
  getTaskList(): Observable<User[]> {
    return this.http.get(`${this.baseUrl}/tasks`)
      //.do((data => console.log(data)))
      .map((data: Response) => data.json())
      //.do((data => console.log(data)))
      .catch((error: Response) => Observable.throw(error.json().error || "Server error."))

  }

}
