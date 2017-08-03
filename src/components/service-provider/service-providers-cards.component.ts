import {Component, OnInit} from '@angular/core';
import {ServiceProvider} from "../../models/service-provider/service-provider.interface";
import {ServiceProvidersProvider} from "../../providers/service-providers/service-providers";
import {DomainProvider} from "../../providers/domain/domain";
import {Domain} from "../../models/domain/domain.interface"
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

  filteredServiceProvidersList :ServiceProvider[];
  domainList :Domain[];

  constructor(private navCtrl: NavController, private serviceProvidersProvider:ServiceProvidersProvider,private domainProvider:DomainProvider) {
  }

  ngOnInit(){
    this.domainProvider.getDomainList().subscribe((data: Domain[]) => this.domainList = data, () => this.filterServiceProvicerByDomain(this.domainList[0]));
  }

  filterServiceProvicerByDomain(domain: Domain){
    this.serviceProvidersProvider.getServiceProvidersList(domain).subscribe((data: ServiceProvider[]) => this.filteredServiceProvidersList = data);
  }

  navigateToServiceProvider(selectedServiceProvider){
    this.navCtrl.push('ServiceProviderPage', {selectedServiceProvider: selectedServiceProvider});
  }


}
