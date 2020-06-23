import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MeusRelatoriosFinalizadosPage } from '../meus-relatorios-finalizados/meus-relatorios-finalizados';
import { RelatorioPage } from '../relatorio/relatorio';
import { CadastroRelatorioVistoriaSimplesPage } from '../cadastro-relatorio-vistoria-simples/cadastro-relatorio-vistoria-simples';

/**
 * Generated class for the MeusRelatoriosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meus-relatorios',
  templateUrl: 'meus-relatorios.html',
})
export class MeusRelatoriosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeusRelatoriosPage');
  }

  irparafinalizados(){
    this.navCtrl.push(MeusRelatoriosFinalizadosPage)
  }

  irparaescolhaderelatorios(){
    this.navCtrl.push(RelatorioPage)
  }

}
