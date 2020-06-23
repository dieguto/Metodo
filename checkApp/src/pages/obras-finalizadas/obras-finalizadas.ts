import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ObrasFinalizadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-obras-finalizadas',
  templateUrl: 'obras-finalizadas.html',
})
export class ObrasFinalizadasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObrasFinalizadasPage');
  }

  irparaobrasemandamento(){
    this.navCtrl.push(HomePage)
  }
}
