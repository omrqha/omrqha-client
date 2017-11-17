import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../../models/user/user.interface";
import {UserProvider} from "../../providers/user/user";

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  user: User;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider) {
    this.user = this.userProvider.getCurrentUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  done() {

  }

}
