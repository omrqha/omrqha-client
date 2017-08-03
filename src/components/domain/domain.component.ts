import {Component, EventEmitter, Output} from '@angular/core';
import {DomainProvider} from "../../providers/domain/domain";
import {ServiceProvider} from "../../models/service-provider/service-provider.interface";

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
export class DomainComponent {

  @Output() serviceProviderFilter: EventEmitter<any>;

  filteredServiceProvidersList: ServiceProvider[];
  domainList: any[];
  constructor(domainProvider: DomainProvider) {
    this.serviceProviderFilter = new EventEmitter<any>();

    console.log("ss");
  }

  filterServiceProvicerByDomain(domain){
    console.log("1");
    this.serviceProviderFilter.emit(domain);
  }



}
