import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import { Facebook } from '@ionic-native/facebook';
import { User } from '../../models/user/user.interface'

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  text: string;

  public username: string;
  public password: string;

  isLoggedIn:boolean = false;
  users: any;

  private user: User;

  constructor(private navCtrl: NavController, private fb: Facebook) {
    console.log('Hello LoginFormComponent Component');
    this.text = 'Hello World';
    fb.getLoginStatus()
      .then(res => {
        console.log(res.status);
        if(res.status === "connect") {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => alert(JSON.stringify(e)));
  }

  getUserDetail(userid) {
    this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
      .then(res => {
        alert(JSON.stringify(res));
        this.users = res;
      })
      .catch(e => {
        alert(JSON.stringify(e))
      });
  }


  loginByFacebook(){
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        if(res.status === "connected") {
          this.user.fbAccessToken = res.authResponse.accessToken;
          this.user.fbUserId = res.authResponse.userID;
          alert(JSON.stringify(res));
          this.isLoggedIn = true;
          this.getUserDetail(res.authResponse.userID);
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }

  navigateToPage(page: string): void{
    page === 'TabsPage' ? this.navCtrl.setRoot(page) : this.navCtrl.push(page);
  }

}
