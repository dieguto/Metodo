import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MeusRelatoriosPage } from '../meus-relatorios/meus-relatorios';

/**
 * Generated class for the ObraCadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-obra-cadastro',
  templateUrl: 'obra-cadastro.html',
})
export class ObraCadastroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObraCadastroPage');
  }

  irparameusrelatorios(){
    this.navCtrl.push(MeusRelatoriosPage)
  }

}
