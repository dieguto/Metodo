import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MeusRelatoriosPage } from '../meus-relatorios/meus-relatorios';

/**
 * Generated class for the MeusRelatoriosFinalizadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meus-relatorios-finalizados',
  templateUrl: 'meus-relatorios-finalizados.html',
})
export class MeusRelatoriosFinalizadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeusRelatoriosFinalizadosPage');
  }

  irparaemaberto(){
    this.navCtrl.push(MeusRelatoriosPage)
  }

}
