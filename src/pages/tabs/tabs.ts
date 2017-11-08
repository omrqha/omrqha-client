import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage(
  //{segment: 'home', name: 'השארה'}
  )
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  homePage = 'HomePage';
  serviceProvidersPage = 'ServiceProvidersPage';
  tasksPage = 'TasksPage';
  profilePage = 'ProfilePage';

  constructor() {

  }


}
