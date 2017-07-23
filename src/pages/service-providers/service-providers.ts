import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServiceProvider} from "../../models/service-provider/service-provider"
import {DomainProvider} from "../../providers/domain/domain";

/**
 * Generated class for the ServiceProvidersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-service-providers',
  templateUrl: 'service-providers.html',
})
export class ServiceProvidersPage {

  filteredServiceProvidersList: ServiceProvider[];
  domainList: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, domainProvider: DomainProvider) {
    this.domainList = domainProvider.getDomainList();
  }



}
