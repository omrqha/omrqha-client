import { Component } from '@angular/core';
import {Events, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from '../providers/user/user'
import {User} from "../models/user/user.interface";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public events: Events, userProvider: UserProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      userProvider.getUser().subscribe((user: User) => {
        if(user){
          this.rootPage = 'TabsPage';
        }else{
          this.rootPage = 'LoginPage';
        }
      });
      events.subscribe('user:unauthorized', () => {
        this.rootPage = 'LoginPage';
      });

    });
  }


}

