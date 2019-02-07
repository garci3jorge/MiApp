import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase'; 
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  componente: string = "";
  guia=[];

  constructor(public navCtrl: NavController) {
    this.getGuia();
  }

  getGuia(){
    var guiaRef= firebase.database().ref().child("armas");
    guiaRef.on("value",(snap) => {
      var data = snap.val();
      this.guia=[];
      for(var key in data){
        this.guia.push(data[key]);
      }
    });
  }
}
