import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceProviderPage } from './service-provider';

@NgModule({
  declarations: [
    ServiceProviderPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceProviderPage),
  ],
  exports: [
    ServiceProviderPage
  ]
})
export class ServiceProviderPageModule {}
