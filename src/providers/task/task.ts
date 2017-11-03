import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { Task } from '../../models/task/task.interface'
import { AppSettingsProvider } from '../app-settings/app-settings';

@Injectable()
export class TaskProvider {
  private baseUrl:string = this.appSettingsProvider.baseUrl();

  constructor(private http:Http, private appSettingsProvider:AppSettingsProvider) {
  }

  getTaskList(): Observable<Task[]> {
    return this.http.get(`${this.baseUrl}/tasks`)
      //.do((data => console.log(data)))
      .map((data: Response) => data.json())
      //.do((data => console.log(data)))
      .catch((error: Response) => Observable.throw(error.json().error || "Server error."))

  }

}