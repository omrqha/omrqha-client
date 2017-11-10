import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { Domain } from '../../models/domain/domain.interface';
import { HttpClient } from '../http-client/http-client';

@Injectable()
export class DomainProvider {

  constructor(private http: HttpClient) {
    console.log('Hello DomainProvider Provider');
  }

  getDomainList(query): Observable<Domain[]> {
    const { parentId, level = 1 } = query;
    return this.http.get(`domains?level=${level}${parentId ? '&parentId=' + parentId : '' }`)
      .map((data: Response) => data.json())
      .catch((error: Response) => Observable.throw(error.json() || "Server error."))
  }

}
