import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadastroRelatorioVistoriaSimplesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-relatorio-vistoria-simples',
  templateUrl: 'cadastro-relatorio-vistoria-simples.html',
})
export class CadastroRelatorioVistoriaSimplesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroRelatorioVistoriaSimplesPage');
  }

}
