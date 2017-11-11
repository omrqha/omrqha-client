import {Component, OnInit} from '@angular/core';
import {ServiceProvider} from "../../models/service-provider/service-provider.interface";
import {ServiceProvidersProvider} from "../../providers/service-providers/service-providers";
import { ENTERPRISE_LIST } from '../../mocks/enterprise/enterprise';
import {NavController} from "ionic-angular";
import {Enterprise} from "../../models/enterprise/enterprise";

/**
 * Generated class for the ServiceProviderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'carousel-ah',
  templateUrl: 'carousel.component.html'
})
export class CarouselComponent implements OnInit{
   serviceProvidersList: ServiceProvider[];
   loadPrimary: boolean=true;
  enterpriseList: Enterprise[] = ENTERPRISE_LIST;
  constructor(private navCtrl: NavController, private serviceProvidersProvider:ServiceProvidersProvider) {
    console.log(ENTERPRISE_LIST)
  }

  ngOnInit(){
    this.serviceProvidersProvider.getServiceProvidersList({ primary: true }).subscribe((data: ServiceProvider[]) => this.serviceProvidersList = data);
  }
  navigateToServiceProvider(selectedServiceProvider){
    this.navCtrl.push('ServiceProviderPage', {selectedServiceProvider: selectedServiceProvider});
  }
  //
  // navigateToServiceProvider(selectedServiceProvider){
  //   this.navCtrl.push('ServiceProviderPage', {selectedServiceProvider: selectedServiceProvider});
  // }
  //



}
