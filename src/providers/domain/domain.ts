import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { Domain } from '../../models/domain/domain.interface';
import { AppSettingsProvider } from '../app-settings/app-settings';

@Injectable()
export class DomainProvider {
  private baseUrl:string = this.appSettingsProvider.baseUrl();

  constructor(private http:Http, private appSettingsProvider:AppSettingsProvider) {
    console.log('Hello DomainProvider Provider');
  }

  getDomainList(query): Observable<Domain[]> {
    const { parentId, level = 1 } = query;
    return this.http.get(`${this.baseUrl}/domains?level=${level}${parentId ? '&parentId=' + parentId : '' }`)
      //.do((data => console.log(data)))
      .map((data: Response) => data.json())
      //.do((data => console.log(data)))
      .catch((error: Response) => Observable.throw(error.json().error || "Server error."))

  }

}
