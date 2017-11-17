import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Events, IonicPage, Modal, ModalController, ModalOptions} from 'ionic-angular';
import {Content, FabButton} from 'ionic-angular';
import {ServiceProvidersProvider} from "../../providers/service-providers/service-providers";
import {ServiceProvider} from "../../models/service-provider/service-provider.interface";
import {Domain} from "../../models/domain/domain.interface";


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
export class ServiceProvidersPage implements AfterViewInit {
  @ViewChild(Content)
  content: Content;
  @ViewChild(FabButton)
  fabButton: FabButton;
  serviceProvidersList: ServiceProvider[];

  constructor(private serviceProvidersProvider: ServiceProvidersProvider, private modal: ModalController,public events: Events) {

  }



  ngAfterViewInit(): void {
    this.content.ionScroll.subscribe((d) => {
      this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
    });
  }

  getServiceProvidersListByDomain(domain: Domain) {
    this.serviceProvidersProvider.getServiceProvidersList(domain).subscribe((data: ServiceProvider[]) => this.serviceProvidersList = data);

  }

  filter() {

    const SbFilterModalOptions: ModalOptions = {
      enableBackdropDismiss: true
    };

    const SbFilterModal: Modal = this.modal.create('SPFilterModalPage', {}, SbFilterModalOptions);
    SbFilterModal.present();

    SbFilterModal.onWillDismiss((data) => {
      if(data) {
        this.events.publish('filter:updated',data);
      }
    })

  }


}
