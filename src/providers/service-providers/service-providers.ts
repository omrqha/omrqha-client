import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import {SERVICE_PROVIDER_LIST} from '../../mocks/service-provider/service-provider'

/*
  Generated class for the ServiceProvidersProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ServiceProvidersProvider {

  serviceProvidersList = SERVICE_PROVIDER_LIST;

  constructor() {
    console.log('Hello ServiceProvidersProvider Provider');
  }

  getServiceProvidersList() {
    return this.serviceProvidersList;
  }
  getServiceProviderById(id:string) {
    return this.serviceProvidersList[id];
  }


}
