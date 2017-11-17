import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServiceProvider} from "../../models/service-provider/service-provider.interface";
import {ServiceProvidersProvider} from "../../providers/service-providers/service-providers";

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  serviceProvidersList: ServiceProvider[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private serviceProvidersProvider: ServiceProvidersProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  getServiceProvidersListByDomain({}){
    this.serviceProvidersProvider.getServiceProvidersList({byFavorite: true}).subscribe((data: ServiceProvider[]) => this.serviceProvidersList = data);
  }

}
