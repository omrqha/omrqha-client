import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Content, FabButton } from 'ionic-angular';


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
export class ServiceProvidersPage implements AfterViewInit{
  @ViewChild(Content)
  content: Content;
  @ViewChild(FabButton)
  fabButton: FabButton;

  ngAfterViewInit(): void {
    this.content.ionScroll.subscribe((d) => {
      this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
    });
  }


  constructor() {

  }




}
