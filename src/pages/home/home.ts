import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CardPage} from "../card/card";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

    //shows/makes card page visible
    showCardPage (){
    this.navCtrl.push(CardPage);
    }
}
