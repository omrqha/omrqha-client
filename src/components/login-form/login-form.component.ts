import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {Platform} from "ionic-angular";
import { Facebook } from '@ionic-native/facebook';
import { User } from '../../models/user/user.interface'
import { UserProvider } from '../../providers/user/user'

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
  private platform: Platform;
  constructor(private navCtrl: NavController, private fb: Facebook, private _platform: Platform, private userProvider: UserProvider) {
    console.log('Hello LoginFormComponent Component');
    this.platform = _platform;
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
      .catch(e => console.log(e));

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
    if(this.platform.is('cordova')){
      let _this = this;
      this.fb.login(['public_profile', 'user_friends', 'email'])
        .then(res => {
          if(res.status === "connected") {


            this.user = {
              fbAccessToken: res.authResponse.accessToken,
              fbUserId: res.authResponse.userID
            };

            this.isLoggedIn = true;
            this.userProvider.createUser(this.user).subscribe((data: User) => console.log(data));
            this.getUserDetail(res.authResponse.userID);
          } else {
            this.isLoggedIn = false;
          }
        })
        .catch(e => console.log('Error logging into Facebook', e));
    }else{
      this.user = {
        fbAccessToken: "1",
        fbUserId: "1"
      };
      this.userProvider.createUser(this.user).subscribe((data: User) => console.log(data));

    }

  }

  navigateToPage(page: string): void{
    page === 'TabsPage' ? this.navCtrl.setRoot(page) : this.navCtrl.push(page);
  }

}
