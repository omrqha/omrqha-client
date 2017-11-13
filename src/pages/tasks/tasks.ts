import {Component, OnInit} from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {Task} from "../../models/task/task.interface";
import {TaskProvider} from "../../providers/task/task";

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
  constructor(private taskProvider: TaskProvider) {
  }

  async ngOnInit(){
    this.taskProvider.getTaskList().subscribe((data: Task[]) => {
      this.taskList = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MissionPage');
  }

  updateTask(){

  }

}
