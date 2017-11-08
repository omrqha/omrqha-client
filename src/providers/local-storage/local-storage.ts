import { Injectable } from '@angular/core';

import {Platform} from "ionic-angular";

import { Task } from "../../models/task/task.interface"


/*
  Generated class for the LocalStorageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LocalStorageProvider {



  constructor(public _platform: Platform) {
    this._platform.ready().then(() => {

 /*     if(!this.isOpen) {
        this.localStorage = new SQLite();
        this.localStorage.create({name: "omrqha.db", location: "default"}).then((db: SQLiteObject) => {
          db.executeSql('CREATE TABLE IF NOT EXISTS tasks (taskId TEXT, categoryName TEXT,selected INTEGER, order INTEGER)', {})
            .then(() => console.log('Executed SQL - tasks'))
            .catch(e => console.log(e));
        })
          .catch(e => console.log(e));
      }

*/
    });
  }

  saveTasksToLocalStorage(DataArray: Task[]){
/*    this.localStorage.create({
      name: 'omrqha.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('INSERT INTO tasks (taskId, categoryName, taskName, selected, order) VALUES (' + DataArray + ')', {}).then((data) => {
          console.log("INSERTED: " + JSON.stringify(data));
        }, (error) => {
          console.log("ERROR kod inserta: " + JSON.stringify(error.err));
        });
      })
      .catch(e => console.log(e));*/
  }

  saveTaskToLocalStorage(data: Task){
/*    this.localStorage.create({
      name: 'omrqha.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('INSERT INTO tasks (taskId, categoryName, taskName, selected, order) VALUES (?,?,?,?,?)', [data.taskId, data.categoryName, data.taskName, data.selected,  data.order]).then((data) => {
          console.log("INSERTED: " + JSON.stringify(data));
        }, (error) => {
          console.log("ERROR kod inserta: " + JSON.stringify(error.err));
        });
      })
      .catch(e => console.log(e));*/
  }



  deleteTablicaMyOfflineData(){
/*    this.localStorage.create({
      name: 'omrqha.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql("DELETE FROM tasks",[]).then((data) => {
          console.log("DELETED: " + JSON.stringify(data));
        }, (error) => {
          console.log("ERROR kod brisanja: " + JSON.stringify(error.err));
        });
      })
      .catch(e => console.log(e));*/
  }

}
