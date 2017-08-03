import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceProviderPage } from './service-provider';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    ServiceProviderPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceProviderPage),
    ComponentsModule
  ],
  exports: [
    ServiceProviderPage
  ]
})
export class ServiceProviderPageModule {}
