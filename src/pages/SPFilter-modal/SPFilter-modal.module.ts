import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SPFilterModalPage } from './SPFilter-modal';

@NgModule({
  declarations: [
    SPFilterModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SPFilterModalPage),
  ],
})
export class SPFilterModalPageModule {}
