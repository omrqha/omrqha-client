import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NavParams} from "ionic-angular";
import {DomainProvider} from "../../providers/domain/domain";
import {Domain} from "../../models/domain/domain.interface";
/**
 * Generated class for the SubDomainComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'sub-domain',
  templateUrl: 'sub-domain.component.html'
})
export class SubDomainComponent implements OnInit {
  @Output() serviceProviderBySubDomain: EventEmitter<Domain>;

  subDomainsParentId: string;
  subDomains: Domain[];
  constructor(private navParams: NavParams, private domainProvider: DomainProvider) {
    this.serviceProviderBySubDomain = new EventEmitter<Domain>();
    this.subDomainsParentId = this.navParams.get('subDomainsParentId');
  }

  ngOnInit(): void {
    this.domainProvider.getDomainList({ parentId: this.subDomainsParentId, level: 2 }).subscribe((data: Domain[]) => this.initSubDomain(data));
  }

  initSubDomain(domainList: Domain[]){
    this.subDomains = domainList;
    if(this.subDomains.length > 0){
      this.filterServiceProviderBySubDomain(this.subDomains[0]);
    }
  }

  filterServiceProviderBySubDomain(subDomain){
    this.serviceProviderBySubDomain.emit(subDomain);
  }


}
