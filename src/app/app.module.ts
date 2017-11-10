import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { Facebook } from '@ionic-native/facebook';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { ServiceProvidersProvider } from '../providers/service-providers/service-providers';
import { DomainProvider } from '../providers/domain/domain';
import { TaskProvider } from '../providers/task/task';
import { UserProvider } from '../providers/user/user';
import { AppSettingsProvider } from '../providers/app-settings/app-settings';
import { LocalStorageProvider } from '../providers/local-storage/local-storage';
import { HttpClient } from '../providers/http-client/http-client';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    ServiceProvidersProvider,
    DomainProvider,
    TaskProvider,
    AppSettingsProvider,
    LocalStorageProvider,
    UserProvider,
    HttpClient
  ]
})
export class AppModule {}
