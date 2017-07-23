import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DomainProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DomainProvider {

  domainList = [
    {
      id: 1,
      name: "Music",
      logo: ""
    },
    {
      id: 2,
      name: "Food",
      logo: ""
    },
    {
      id: 3,
      name: "Place",
      logo: ""
    },
    {
      id: 4,
      name: "Place",
      logo: ""
    },
    {
      id: 5,
      name: "Place",
      logo: ""
    },
    {
      id: 6,
      name: "Place",
      logo: ""
    },
    {
      id: 7,
      name: "Place",
      logo: ""
    },
    {
      id: 8,
      name: "Place",
      logo: ""
    },
    {
      id: 9,
      name: "Place",
      logo: ""
    }
  ];
  constructor() {
    console.log('Hello DomainProvider Provider');
  }
  getDomainList = function () {
    return this.domainList;
  }

}
