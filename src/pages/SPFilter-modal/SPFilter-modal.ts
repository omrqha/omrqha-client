import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import {Category} from "../../models/task/tasks.interface";
import {ServiceProvidersProvider} from "../../providers/service-providers/service-providers";

/**
 * Generated class for the TaskModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-SPFilter-modal',
  templateUrl: 'SPFilter-modal.html',
})
export class SPFilterModalPage {
  tasksCategories: Category[] = [];
  areasList: String[] = [];
  filter: any = {};
  categoryName: string = 'other';
  taskName: string;
  constructor(private view: ViewController, private serviceProvidersProvider: ServiceProvidersProvider) {
    // this.tasksCategories = this.navParams.get('tasksCategories');
    this.serviceProvidersProvider.getAreasList().subscribe((data: String[]) => this.areasList = data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskModalPage');
  }

  closeModal(){
    this.view.dismiss();
  }

  done() {
    this.view.dismiss(this.filter);
  }

}
