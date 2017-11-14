import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { Tasks } from '../../models/task/tasks.interface'
import { AppSettingsProvider } from '../app-settings/app-settings';

@Injectable()
export class TaskProvider {
  private baseUrl:string = this.appSettingsProvider.baseUrl();

  constructor(private http:Http, private appSettingsProvider:AppSettingsProvider) {
  }

  getTaskList(): Observable<Tasks> {
    return this.http.get(`${this.baseUrl}/users/tasks`)
      //.do((data => console.log(data)))
      .map((data: Response) => data.json())
      //.do((data => console.log(data)))
      .catch((error: Response) => {
        this.appSettingsProvider.checkIfUnauthorized(error);
        Observable.throw(error.json().error || "Server error.");
      })

  }

}
