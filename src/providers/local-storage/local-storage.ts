import { Injectable } from '@angular/core';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import {Platform} from "ionic-angular";

import { Task } from "../../models/task/task.interface"


/*
  Generated class for the LocalStorageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LocalStorageProvider {

  private isOpen: boolean;

  constructor(public _platform: Platform, private localStorage: SQLite) {
    this._platform.ready().then(() => {

      if(!this.isOpen) {
        this.localStorage = new SQLite();
        this.localStorage.create({name: "omrqha.db", location: "default"}).then((db: SQLiteObject) => {
          db.executeSql('CREATE TABLE IF NOT EXISTS tasks (taskId TEXT, categoryName TEXT,selected INTEGER, order INTEGER)', {})
            .then(() => console.log('Executed SQL - tasks'))
            .catch(e => console.log(e));
        })
          .catch(e => console.log(e));
      }


    });
  }

  saveTasksToLocalStorage(DataArray: Task[]){
    this.localStorage.create({
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
      .catch(e => console.log(e));
  }

  saveTaskToLocalStorage(data: Task){
    this.localStorage.create({
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
      .catch(e => console.log(e));
  }

  getTasks() {
    return new Promise((resolve, reject) => {
      this.localStorage.create({
        name: 'omrqha.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          db.executeSql("SELECT * FROM tasks", []).then((data) => {
            let DataArray: Task[] = [];
            if(data.rows.length > 0) {
              for(let i = 0; i < data.rows.length; i++) {
                DataArray.push({
                  taskId: data.rows.item(i).taskId,
                  categoryName: data.rows.item(i).categoryName,
                  taskName: data.rows.item(i).taskName,
                  selected: data.rows.item(i).selected,
                  order: data.rows.item(i).order
                });
              }
            }
            resolve(DataArray);
          }, (error) => {
            reject(error);
          });
        })
        .catch(e => console.log(e));
    });
  }

  deleteTablicaMyOfflineData(){
    this.localStorage.create({
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
      .catch(e => console.log(e));
  }

}
