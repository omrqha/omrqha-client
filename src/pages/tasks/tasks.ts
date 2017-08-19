import {Component, OnInit} from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {Task} from "../../models/task/task.interface";
import {TaskProvider} from "../../providers/task/task";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";

/**
 * Generated class for the MissionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage implements OnInit {

  taskList: Task[];
  constructor(private taskProvider: TaskProvider, private localStorageProvider: LocalStorageProvider) {
  }

  async ngOnInit(){
    //let a = await this.localStorageProvider.getTasks();
    //console.log(a);
    //if(this.taskList.length === 0){
      this.taskProvider.getTaskList().subscribe((data: Task[]) => this.initData(data));
    //}
  }

  initData(taskList){
    this.taskList = taskList;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MissionPage');
  }

}
