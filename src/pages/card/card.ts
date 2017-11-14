import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {

  cards = [
      {
          "imgPath": "tunnel.jpg",
          "title": "Zoom",
          "desc": "This is a tunnel."
      },
      {
          "imgPath": "ocean.jpg",
          "title": "Swim",
          "desc": "This is a tunnel."
      }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPage');
  }

}
