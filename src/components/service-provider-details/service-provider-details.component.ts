import { Component } from '@angular/core';
import {NavParams} from "ionic-angular";
import {ServiceProvider} from "../../models/service-provider/service-provider.interface";

/**
 * Generated class for the ServiceProviderDetailsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'service-provider-details',
  templateUrl: 'service-provider-details.component.html'
})
export class ServiceProviderDetailsComponent {

  serviceProvider: ServiceProvider;

  constructor(private navParams: NavParams) {
    this.serviceProvider = this.navParams.get('selectedServiceProvider');
  }

}
