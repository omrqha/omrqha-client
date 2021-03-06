import {Component, Input, OnInit} from '@angular/core';
import {ServiceProvider} from "../../models/service-provider/service-provider.interface";
import {ServiceProvidersProvider} from "../../providers/service-providers/service-providers";
import {Events, NavController} from "ionic-angular";

@Component({
  selector: 'service-providers-cards',
  templateUrl: 'service-providers-cards.component.html'
})
export class ServiceProvidersCardsComponent implements OnInit{
  @Input() serviceProvidersList: ServiceProvider[];
  @Input() loadPrimary: boolean;

  constructor(private navCtrl: NavController, private serviceProvidersProvider:ServiceProvidersProvider,public events: Events) {
    events.subscribe('filter:updated', (filter) => {
      this.serviceProvidersProvider.getServiceProvidersList({ filter: filter }).subscribe((data: ServiceProvider[]) => this.serviceProvidersList = data);
    });
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
