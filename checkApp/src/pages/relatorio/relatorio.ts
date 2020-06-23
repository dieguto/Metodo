import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroRelatorioVistoriaSimplesPage } from '../cadastro-relatorio-vistoria-simples/cadastro-relatorio-vistoria-simples';

/**
 * Generated class for the RelatorioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-relatorio',
  templateUrl: 'relatorio.html',
})
export class RelatorioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RelatorioPage');
  }

  irparavistoriasimples(){
    this.navCtrl.push(CadastroRelatorioVistoriaSimplesPage)
  }

}
