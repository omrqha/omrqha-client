import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import {AppSettingsProvider} from "../app-settings/app-settings";
import {ServiceProvider} from "../../models/service-provider/service-provider.interface";


@Injectable()
export class ServiceProvidersProvider {

  private baseUrl:string = this.appSettingsProvider.baseUrl();

  constructor(private http:Http, private appSettingsProvider:AppSettingsProvider) {
    console.log('Hello ServiceProvidersProvider Provider');
  }


  getServiceProvidersList(query):  Observable<ServiceProvider[]> {
    const { limit = '50', skip = '0', domainId, primary,filter, byFavorite = false} = query;
    return this.http.get(`${this.baseUrl}/serviceProviders?limit=${limit}&skip=${skip}${domainId ? '&domainId=' + domainId : ''}${byFavorite ? '&byFavorite=' + byFavorite : ''}${primary ? '&primary=' + primary : ''}${filter ? '&filter=' + JSON.stringify(filter) : ''}`)
      //.do((data => console.log(data)))
      .map((data: Response) => data.json())
      //.do((data => console.log(data)))
      .catch((error: Response) => Observable.throw(error.json().error || "Server error."))
  }

  getAreasList():  Observable<String[]> {
    return this.http.get(`${this.baseUrl}/serviceProviders/getAreasList`)
    //.do((data => console.log(data)))
      .map((data: Response) => data.json())
      //.do((data => console.log(data)))
      .catch((error: Response) => Observable.throw(error.json().error || "Server error."))
  }

  updateServiceProvider(serviceProvider: ServiceProvider): Observable<ServiceProvider> {
    return this.http.put(`${this.baseUrl}/serviceProviders/${serviceProvider.serviceProviderId}`, serviceProvider)
    //.do((data => console.log(data)))
      .map((data: Response) => data.json())
      //.do((data => console.log(data)))
      .catch((error: Response) => Observable.throw(error.json().error || "Server error."))
  }

}
