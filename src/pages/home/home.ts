import { Component, ViewChild, ElementRef } from '@angular/core';
import {IonicPage, PopoverController} from 'ionic-angular';
import { ENTERPRISE_LIST } from '../../mocks/enterprise/enterprise';
import { Enterprise } from '../../models/enterprise/enterprise';
import { MenuPage } from '../../pages/menu/menu';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  enterpriseList: Enterprise[] = ENTERPRISE_LIST;

  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;

  constructor(private popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log(this.enterpriseList);
  }

  menuPresent(myEvent) {
    const popover = this.popoverCtrl.create(MenuPage);
    popover.present({
      ev: myEvent
    });
  }
}
