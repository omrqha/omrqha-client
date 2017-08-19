import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { SQLite } from '@ionic-native/sqlite';

import { MyApp } from './app.component';
import { ServiceProvidersProvider } from '../providers/service-providers/service-providers';
import { DomainProvider } from '../providers/domain/domain';
import { TaskProvider } from '../providers/task/task';
import { AppSettingsProvider } from '../providers/app-settings/app-settings';
import { LocalStorageProvider } from '../providers/local-storage/local-storage';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    SQLite,
    ServiceProvidersProvider,
    DomainProvider,
    TaskProvider,
    AppSettingsProvider,
    LocalStorageProvider
  ]
})
export class AppModule {}
