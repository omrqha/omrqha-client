import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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

  domainList: any[];

  constructor(private navCtrl: NavController, private navParams: NavParams) {

  }


  filterServiceProviderByDomain(event){ //this come from domain component emitter event
    console.log(event);
  }



}
