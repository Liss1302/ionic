import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {} 
  login(){
    this.navCtrl.setRoot("CategoriasPage");
  }
<<<<<<< HEAD
=======
  loging(){
    this.navCtrl.setRoot('CategoriasPage');
  }
>>>>>>> 92a86e877bf28bdefa795c56e093bfdc9ef70126
}
