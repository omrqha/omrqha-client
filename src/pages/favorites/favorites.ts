import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {ServiceProvider} from "../../models/service-provider/service-provider.interface";
import {ServiceProvidersProvider} from "../../providers/service-providers/service-providers";

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage  {
  serviceProvidersList: ServiceProvider[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private serviceProvidersProvider: ServiceProvidersProvider, private popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  ionViewWillEnter() {
    this.serviceProvidersProvider.getServiceProvidersList({byFavorite: true}).subscribe((data: ServiceProvider[]) => this.serviceProvidersList = data);

  }

  menuPresent(myEvent) {
    const popover = this.popoverCtrl.create('MenuPage');
    popover.present({
      ev: myEvent
    });
  }

}
