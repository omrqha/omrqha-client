import {Component, Input, OnInit} from '@angular/core';
import {ServiceProvider} from "../../models/service-provider/service-provider.interface";
import {ServiceProvidersProvider} from "../../providers/service-providers/service-providers";
import {NavController} from "ionic-angular";

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
export class ServiceProvidersCardsComponent implements OnInit{
  @Input() serviceProvidersList: ServiceProvider[];
  @Input() loadPrimary: boolean;

  constructor(private navCtrl: NavController, private serviceProvidersProvider:ServiceProvidersProvider) {
  }

  ngOnInit(){
    if(this.loadPrimary){
      this.serviceProvidersProvider.getServiceProvidersList({ primary: true }).subscribe((data: ServiceProvider[]) => this.serviceProvidersList = data);
    }

  }

  navigateToServiceProvider(selectedServiceProvider){
    this.navCtrl.push('ServiceProviderPage', {selectedServiceProvider: selectedServiceProvider});
  }




}
