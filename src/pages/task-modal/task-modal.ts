import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import {Category} from "../../models/task/category.interface";

/**
 * Generated class for the TaskModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task-modal',
  templateUrl: 'task-modal.html',
})
export class TaskModalPage {
  tasksCategories: Category[] = [];
  categoryName: string = 'other';
  taskName: string;
  constructor(private view: ViewController, private navParams: NavParams) {
    this.tasksCategories = this.navParams.get('tasksCategories');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskModalPage');
  }

  closeModal(){
    this.view.dismiss({ categoryName: this.categoryName, taskName: this.taskName });
  }

}
