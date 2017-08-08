import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubDomainPage } from './sub-domain';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SubDomainPage,
  ],
  imports: [
    IonicPageModule.forChild(SubDomainPage),
    ComponentsModule
  ],
  exports: [
    SubDomainPage
  ]
})
export class SubDomainPageModule {}
