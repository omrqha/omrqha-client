import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { LocalStorageProvider } from '../providers/local-storage/local-storage'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, storage: Storage, localStorageProvider: LocalStorageProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      storage.get('x-auth-token').then((val) => {
        localStorageProvider.setToken(val);
        if(val){
          this.rootPage = 'TabsPage';
        }else{
          this.rootPage = 'LoginPage';
        }
      });
    });
  }
}

