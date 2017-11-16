import { Component } from '@angular/core';
import {Modal, ModalController, NavParams} from "ionic-angular";
import {ServiceProvider} from "../../models/service-provider/service-provider.interface";
import {ServiceProvidersProvider} from "../../providers/service-providers/service-providers";
import {UserProvider} from "../../providers/user/user"
import {User} from "../../models/user/user.interface";

/**
 * Generated class for the ServiceProviderDetailsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'service-provider-details',
  templateUrl: 'service-provider-details.component.html'
})
export class ServiceProviderDetailsComponent {

  serviceProvider: ServiceProvider;
  user: User;

  ratingArray = [
    {isActive:false, iconActive: 'icon-star', iconInactive: 'icon-star-outline'},
    {isActive:false, iconActive: 'icon-star', iconInactive: 'icon-star-outline'},
    {isActive:false, iconActive: 'icon-star', iconInactive: 'icon-star-outline'},
    {isActive:false, iconActive: 'icon-star', iconInactive: 'icon-star-outline'},
    {isActive:false, iconActive: 'icon-star', iconInactive: 'icon-star-outline'}
  ];

  newRatingArray = [
    {isActive:false, iconActive: 'icon-star', iconInactive: 'icon-star-outline'},
    {isActive:false, iconActive: 'icon-star', iconInactive: 'icon-star-outline'},
    {isActive:false, iconActive: 'icon-star', iconInactive: 'icon-star-outline'},
    {isActive:false, iconActive: 'icon-star', iconInactive: 'icon-star-outline'},
    {isActive:false, iconActive: 'icon-star', iconInactive: 'icon-star-outline'}
  ];

  constructor(private navParams: NavParams, private modal: ModalController, private serviceProvidersProvider: ServiceProvidersProvider, private userProvider: UserProvider ) {
    this.serviceProvider = this.navParams.get('selectedServiceProvider');
    this.user = this.userProvider.getCurrentUser();
    this.initRating()
  }

  initRating(){
    if(this.serviceProvider && this.serviceProvider.reviews){
      let score = 0;
      let average = 0;
      let count = 0;
      if(this.serviceProvider.reviews.length > 0){
        count = this.serviceProvider.reviews.length;
        this.serviceProvider.reviews.forEach((item) => {
          score += item.score;
        });
        average = score/count;

      }
      this.serviceProvider.rating = { count, average };

      for (let i = 0; i < average ; i++) {
        this.ratingArray[i].isActive = true;
      }
    }
  }

  onStarClass(index: number) {
    for (let i = 0; i < this.newRatingArray.length; i++) {
      this.newRatingArray[i].isActive = i <= index;
    }
    const reviewModal: Modal = this.modal.create('ReviewModalPage',{newRatingArray: this.newRatingArray, defaultReview: this.serviceProvider.defaultReview});
    reviewModal.present();

    reviewModal.onWillDismiss((data) => {
      if(data){
        if(!this.serviceProvider.reviews){
          this.serviceProvider.reviews = [data];
        }else{
          this.serviceProvider.reviews.push(data);
        }

        this.serviceProvidersProvider.updateServiceProvider(this.serviceProvider).subscribe((data: ServiceProvider) => {});
      }
    })
  };

}
