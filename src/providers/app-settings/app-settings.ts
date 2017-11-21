import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Events} from "ionic-angular";

@Injectable()
export class AppSettingsProvider {

  UNAUTHORIZED = 401;
  constructor(public events: Events){}

  baseUrl(): string{
     //return 'http://127.0.0.1:4040/api';
    return 'http://147.75.80.139:4040/api';
  }

  checkIfUnauthorized(error: any): void{
    if(error.status === this.UNAUTHORIZED){
      this.events.publish('user:unauthorized');
    }
  }

}
