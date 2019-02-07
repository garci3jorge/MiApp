import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

//mi import 
import * as firebase from 'firebase';

//la conecxion con firebase
var config = {
  apiKey: "AIzaSyCI4tAdwtp4w9J_mNXDhwKGs6aDzZscF7Q",
  authDomain: "proyecto-jorge.firebaseapp.com",
  databaseURL: "https://proyecto-jorge.firebaseio.com",
  projectId: "proyecto-jorge",
  storageBucket: "proyecto-jorge.appspot.com",
  messagingSenderId: "462287249382"
};





@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    //la inicializacion
    firebase.initializeApp(config); 
  }
}
