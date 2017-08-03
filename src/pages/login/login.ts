import {Component, Input} from '@angular/core';
import { IonicPage } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @Input() events: any;


  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



}
