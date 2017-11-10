import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { AppSettingsProvider } from '../app-settings/app-settings';
import { LocalStorageProvider } from '../local-storage/local-storage';

@Injectable()
export class HttpClient {
  private baseUrl: string;
  constructor(private http: Http,  private localStorageProvider: LocalStorageProvider, appSettingsProvider: AppSettingsProvider) {
    this.baseUrl = appSettingsProvider.baseUrl();
  }

  get(url) {
    let headers = new Headers();
    headers.append('x-auth-token', this.localStorageProvider.getToken());
    return this.http.get(`${this.baseUrl}/${url}`, {
      headers: headers
    });

  }

  post(url, data) {
    let headers = new Headers();
    headers.append('x-auth-token', this.localStorageProvider.getToken());
    return this.http.post(`${this.baseUrl}/${url}` , data, {
      headers: headers
    });
  }

}
