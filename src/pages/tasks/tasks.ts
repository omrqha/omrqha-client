import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {IonicPage, Modal, ModalController, ModalOptions} from 'ionic-angular';
import { Content, FabButton } from 'ionic-angular';
import {Tasks, Task, Category} from "../../models/task/tasks.interface";
import {TaskProvider} from "../../providers/task/task";


@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage implements OnInit, AfterViewInit {
  @ViewChild(Content)
  content: Content;
  @ViewChild(FabButton)
  fabButton: FabButton;
  taskList: Task[] = [];
  tasksCategories: Category[] = [];
  constructor(private taskProvider: TaskProvider, private modal: ModalController) {
  }

  async ngOnInit(){
    this.taskProvider.getTaskList().subscribe((data: Tasks) => {
      debugger;
      for (let obj of data.tasksCategories) {
        this.tasksCategories.push(obj);
      }
      for (let obj of data.tasks) {
        this.taskList.push(obj);
      }
    });
  }

  ngAfterViewInit(): void {
    this.content.ionScroll.subscribe((d) => {
      this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MissionPage');
  }

  updateTask(){

  }

  getOrder(task: Task): number{
    let order = -1;
    for (let obj of task.tasks) {
      if(obj.order > order){
        order = obj.order;
      }
    }
    order ++;
    return order;
  }

  ionViewWillLeave (){
    console.log('going to sae the tasks');
    if(this.taskList && this.taskList.length > 0){
      this.taskProvider.updateTasks(this.taskList).subscribe((data: Tasks) => {});
    }
  }

  addTask(){
    const taskModalOptions: ModalOptions = {
      enableBackdropDismiss: true
    };

    const taskModal: Modal = this.modal.create('TaskModalPage',{tasksCategories: this.tasksCategories}, taskModalOptions);
    taskModal.present();

    taskModal.onWillDismiss((data) => {
      if(data){
        for (let obj of this.taskList) {
          if(obj.categoryName === data.categoryName){
            const taskData = {
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
