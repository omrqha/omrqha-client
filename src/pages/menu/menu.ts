import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(private navCtrl: NavController, private localStorageProvier : LocalStorageProvider) {}

  logout() {
    this.localStorageProvier.setToken(null);
    this.navCtrl.push('LoginPage');
    this.navCtrl.setRoot('LoginPage');
  }
}
