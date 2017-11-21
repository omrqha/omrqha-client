import {Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation} from '@angular/core';
import {
  FabContainer, IonicPage, Modal, ModalController, ModalOptions, PopoverController,
  reorderArray
} from 'ionic-angular';
import { Content } from 'ionic-angular';
import {Tasks, Task, Category} from "../../models/task/tasks.interface";
import {TaskProvider} from "../../providers/task/task";


@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
  encapsulation: ViewEncapsulation.None
})
export class TasksPage implements OnInit, AfterViewInit {
  @ViewChild(Content) content: Content;
  @ViewChild('fabAdd') addFabButton: any;
  @ViewChild('fabFilter') filterFabButton: any;
  taskList: Task[] = [];
  filteredTaskList = [];
  tasksCategories: Category[] = [];
  editing: boolean = false;
  constructor(private taskProvider: TaskProvider, private modal: ModalController, private popoverCtrl: PopoverController) {
  }

  async ngOnInit(){
    this.taskProvider.getTaskList().subscribe((data: Tasks) => {
      for (let obj of data.tasksCategories) {
        this.tasksCategories.push(obj);
      }
      for (let obj of data.tasks) {
        this.taskList.push(obj);
      }
      this.filterTasks('all', null);
    });
  }

  ngAfterViewInit(): void {
    this.content.ionScroll.subscribe((d) => {
      this.filterFabButton._mainButton.setElementClass("fab-button-out", d.directionY == "down");
      this.addFabButton._mainButton.setElementClass("fab-button-out", d.directionY == "down");
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MissionPage');
  }

  filterTasks(query, fab: FabContainer){
    if(fab){
      fab.close();
    }
    this.filteredTaskList = this.taskList;
    if(query === 'all'){
      return;
    }
    if(query === 'done'){
      this.filteredTaskList = this.taskList.map((i)=>{
        return {
          order: i.order,
          categoryName: i.categoryName,
          tasks: i.tasks.filter((x) => !!x.selected)
        }
      })
    }

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
    this.updateList();
  }

  updateList (){
    console.log('going to sae the tasks');
    if(this.taskList && this.taskList.length > 0){
      this.taskProvider.updateTasks(this.taskList).subscribe((data: Tasks) => {});
    }
  }

  menuPresent(myEvent) {
    const popover = this.popoverCtrl.create('MenuPage');
    popover.present({
      ev: myEvent
    });
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

  reorderItems = (categoryName: string, indexes): void => {
    const categoryName = categoryName;
    let tasks: Task [];
    this.filteredTaskList.forEach((item) => {
      if(item.categoryName === categoryName){
        tasks = item.tasks;
      }
    });
    if(tasks){
      reorderArray(tasks, indexes);
    }
  };

  removeTask(tasks: Task[], index: number){
    tasks.splice(index, 1);
  }
  switchEditMode() {
    if(this.editing){
      this.updateList();
    }
    this.editing = !this.editing;

  }
}
