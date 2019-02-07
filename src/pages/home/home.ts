import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';

//mis import




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  componente: string = "";
  guia=[];

  constructor(public navCtrl: NavController) {
    this.getGuia();
  }

  getGuia(){
    var guiaRef= firebase.database().ref().child("monstruos");
    guiaRef.on("value",(snap) => {
      var data = snap.val();
      this.guia=[];
      for(var key in data){
        this.guia.push(data[key]);
      }
    });
  }
}
