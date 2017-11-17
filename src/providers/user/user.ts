import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { User, FavoritesServiceProviders } from '../../models/user/user.interface'
import { AppSettingsProvider } from '../app-settings/app-settings';
import {ServiceProvider} from "../../models/service-provider/service-provider.interface";

@Injectable()
export class UserProvider {
  private baseUrl:string = this.appSettingsProvider.baseUrl();
  private user: User;
  private favoritesServiceProviders = {};

  constructor(private http:Http, private appSettingsProvider:AppSettingsProvider) {
  }

  private fillServiceProvidersFavorites (){
    this.user.favoritesServiceProviders.forEach((item) => {
      this.favoritesServiceProviders[item.serviceProviderId] = true;
    })
  }

  private getServiceProvidersFavoritesFromLocal (): FavoritesServiceProviders[]{
    let localFavoritesServiceProviders: FavoritesServiceProviders[] = [];
    for (let serviceProviderId in this.favoritesServiceProviders) {
      let value = this.favoritesServiceProviders[serviceProviderId];
      if(value){
        localFavoritesServiceProviders.push({serviceProviderId})
      }
    }
    return localFavoritesServiceProviders;
  }

  createUser(user: User): Observable<User> {
    return this.http.post(`${this.baseUrl}/users/auth/facebook`, user)
      //.do((data => console.log(data)))
      .map((data: Response) => data.headers.get('x-auth-token'))
      //.do((data => console.log(data)))
      .catch((error: Response) => Observable.throw(error.json().error || "Server error."))
  }

  getUser(): Observable<User> {
    return this.http.get(`${this.baseUrl}/users/auth/me`)
    //.do((data => console.log(data)))
      .map((data: Response) => {
        this.user = data.json();
        this.fillServiceProvidersFavorites();
        return data.json();
      })
      //.do((data => console.log(data)))
      .catch((error: Response) => {
        this.appSettingsProvider.checkIfUnauthorized(error);
        return Observable.throw(error.json().error || "Server error.")
      })
  }

  updateUser(user: User): Observable<User> {
    user.favoritesServiceProviders = this.getServiceProvidersFavoritesFromLocal();
    return this.http.put(`${this.baseUrl}/users/auth/me`, user)
    //.do((data => console.log(data)))
      .map((data: Response) => {
        this.user = data.json();
        this.fillServiceProvidersFavorites();
        return data.json();
      })
      //.do((data => console.log(data)))
      .catch((error: Response) => {
        this.appSettingsProvider.checkIfUnauthorized(error);
        return Observable.throw(error.json().error || "Server error.")
      })
  }

  getCurrentUser(): User{
    return this.user;
  }

  getFavoritesServiceProviders() {
    return this.favoritesServiceProviders;
  }

  addServiceProviderToFavorites(serviceProvider: ServiceProvider): void{
    this.favoritesServiceProviders[serviceProvider.serviceProviderId] = true;
    this.updateUser(this.user).subscribe((user) => user);
  }

  removeServiceProviderFromFavorites(serviceProvider: ServiceProvider): void{
     this.favoritesServiceProviders[serviceProvider.serviceProviderId] = false;
     this.updateUser(this.user).subscribe((user) => user);
  }

  isServiceProviderFavorite (serviceProvider: ServiceProvider) {
    return !!this.favoritesServiceProviders[serviceProvider.serviceProviderId];
  }
}
