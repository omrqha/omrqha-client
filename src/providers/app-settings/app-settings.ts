import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppSettingsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AppSettingsProvider {

  baseUrl(){
    // return 'http://127.0.0.1:4040/api';
    return 'http://147.75.80.139:4040/api';
  }

}
