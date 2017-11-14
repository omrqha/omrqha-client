import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';
import { Facebook } from '@ionic-native/facebook';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { ServiceProvidersProvider } from '../providers/service-providers/service-providers';
import { DomainProvider } from '../providers/domain/domain';
import { TaskProvider } from '../providers/task/task';
import { UserProvider } from '../providers/user/user';
import { AppSettingsProvider } from '../providers/app-settings/app-settings';
import { LocalStorageProvider } from '../providers/local-storage/local-storage';
import {HttpInterceptor} from '../auth/http.interceptor';
import { MenuPageModule } from '../pages/menu/menu.module';

export function httpInterceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, storage: Storage) {
  return new HttpInterceptor(xhrBackend, requestOptions, storage);
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    MenuPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: Http,
      useFactory: httpInterceptorFactory,
      deps: [XHRBackend, RequestOptions, Storage]
    },
    Facebook,
    ServiceProvidersProvider,
    DomainProvider,
    TaskProvider,
    AppSettingsProvider,
    LocalStorageProvider,
    UserProvider
  ]
})
export class AppModule {}
