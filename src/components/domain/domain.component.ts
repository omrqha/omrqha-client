import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {DomainProvider} from "../../providers/domain/domain";
import {Domain} from "../../models/domain/domain.interface";
import {NavController} from "ionic-angular";

/**
 * Generated class for the DomainComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'domain',
  templateUrl: 'domain.component.html'
})
export class DomainComponent implements OnInit{

  @Output() serviceProviderByDomain: EventEmitter<Domain>;

  domainList: any[];
  constructor(private navCtrl: NavController, private domainProvider: DomainProvider) {
    this.serviceProviderByDomain = new EventEmitter<Domain>();
  }

  ngOnInit(){
    this.domainProvider.getDomainList({}).subscribe((data: Domain[]) => this.initData(data));
  }

  initData(domainList: Domain[]){
    this.domainList = domainList;
  }

  initSubDomain(domainList: Domain[]){
    this.navCtrl.push('SubDomainPage', {subDomains: domainList});
  }

  filterServiceProviderByDomain(domain){
    if(domain.isParent){
      this.navCtrl.push('SubDomainPage', {subDomainsParentId: domain.domainId});
      //this.domainProvider.getDomainList({ parentId: domain.domainId }).subscribe((data: Domain[]) => this.initSubDomain(data));
    }else{
      // this.serviceProvidersProvider.getServiceProvidersListByDomain(domain).subscribe((data: ServiceProvider[]) => this.filteredServiceProvidersList = data);
      this.serviceProviderByDomain.emit(domain);
    }

  }



}
