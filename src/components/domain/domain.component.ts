import { Component } from '@angular/core';
import {DomainProvider} from "../../providers/domain/domain";
import {ServiceProvider} from "../../models/service-provider/service-provider";

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

  filteredServiceProvidersList: ServiceProvider[];
  domainList: any[];
  constructor(domainProvider: DomainProvider) {
    this.domainList = domainProvider.getDomainList();
  }



}
