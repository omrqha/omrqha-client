import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceProvidersPage } from './service-providers';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ServiceProvidersPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceProvidersPage),
    ComponentsModule
  ],
  exports: [
    ServiceProvidersPage
  ]
})
export class ServiceProvidersPageModule {}
