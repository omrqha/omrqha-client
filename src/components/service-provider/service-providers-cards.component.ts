import { Component } from '@angular/core';
import {ServiceProvider} from "../../models/service-provider/service-provider";
import {ServiceProvidersProvider} from "../../providers/service-providers/service-providers";

/**
 * Generated class for the ServiceProviderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'service-providers-cards',
  templateUrl: 'service-providers-cards.component.html'
})
export class ServiceProvidersCardsComponent {


  serviceProvidersList :ServiceProvider[];
  constructor( serviceProvidersProvider:ServiceProvidersProvider) {
    this.serviceProvidersList=serviceProvidersProvider.getServiceProvidersList();
  }


}
