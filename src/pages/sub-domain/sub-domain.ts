import {Component} from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {Domain} from "../../models/domain/domain.interface";
import {ServiceProvidersProvider} from "../../providers/service-providers/service-providers";
import {ServiceProvider} from "../../models/service-provider/service-provider.interface";

/**
 * Generated class for the SubDomainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sub-domain',
  templateUrl: 'sub-domain.html',
})
export class SubDomainPage {
  serviceProvidersList: ServiceProvider[];
  constructor(private serviceProvidersProvider: ServiceProvidersProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubDomainPage');
  }

  initServiceProvidersFromSubDomains(data: ServiceProvider[]){
    this.serviceProvidersList = data;
  }

  getServiceProvidersListByDomain(subDomain: Domain){
    this.serviceProvidersProvider.getServiceProvidersList(subDomain).subscribe((data: ServiceProvider[]) => this.initServiceProvidersFromSubDomains(data));
  }

}
