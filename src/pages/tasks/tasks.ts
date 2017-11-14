import {Component, OnInit} from '@angular/core';
import {IonicPage, Modal, ModalController, ModalOptions} from 'ionic-angular';
import {Tasks} from "../../models/task/tasks.interface";
import {Task} from "../../models/task/task.interface";
import {TaskData} from "../../models/task/task-data.interface";
import {Category} from "../../models/task/category.interface";
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

  taskList: Task[] = [];
  tasksCategories: Category[] = [];
  constructor(private taskProvider: TaskProvider, private modal: ModalController) {
  }

  async ngOnInit(){
    this.taskProvider.getTaskList().subscribe((data: Tasks) => {
      for (let obj:Category of data.tasksCategories) {
        this.tasksCategories.push(obj);
      }
      for (let obj:Task of data.tasks) {
        this.taskList.push(obj);
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MissionPage');
  }

  updateTask(){

  }

  getOrder(task: Task): number{
    let order = -1;
    for (let obj:TaskData of task.tasks) {
      if(obj.order > order){
        order = obj.order;
      }
    }
    order ++;
    return order;
  }

  addTask(){
    const taskModalOptions: ModalOptions = {
      enableBackdropDismiss: true
    };

    const taskModal: Modal = this.modal.create('TaskModalPage',{tasksCategories: this.tasksCategories}, taskModalOptions);
    taskModal.present();

    taskModal.onWillDismiss((data) => {
      if(data){
        for (let obj:Task of this.taskList) {
          if(obj.categoryName === data.categoryName){
            const taskData: TaskData = {
              order: this.getOrder(obj),
              taskName: data.taskName,
              selected: false
            };
            obj.tasks.push(taskData);
          }
        }
        console.log(data);
      }
    })

  }

}
