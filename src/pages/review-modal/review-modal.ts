import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import {UserProvider} from '../../providers/user/user';
import {User} from "../../models/user/user.interface";

@IonicPage()
@Component({
  selector: 'page-review-modal',
  templateUrl: 'review-modal.html',
})
export class ReviewModalPage {

  newRatingArray = [];
  comment: string = '';
  constructor(private view: ViewController, private navParams: NavParams, private userProvider: UserProvider) {
    this.newRatingArray = this.navParams.get('newRatingArray');
    this.comment = this.navParams.get('defaultReview') || '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskModalPage');
  }

  closeModal(){
    this.view.dismiss();
  }

  onStarClass(index: number) {
    for (let i = 0; i < this.newRatingArray.length; i++) {
      this.newRatingArray[i].isActive = i <= index;
    }
  };

  done() {
    let score = 0;
    this.newRatingArray.forEach((item) => {
      if(item.isActive){
        score ++;
      }
    });

    let user: User = this.userProvider.getCurrentUser();

    this.view.dismiss({ score, comment: this.comment, user });
  }



}
