import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase'; 
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  componente: string = "";
  guia=[];

  constructor(public navCtrl: NavController) {
    this.getGuia();
  }

  getGuia(){
    var guiaRef= firebase.database().ref().child("armaduras");
    guiaRef.on("value",(snap) => {
      var data = snap.val();
      this.guia=[];
      for(var key in data){
        this.guia.push(data[key]);
      }
    });
  }

}
