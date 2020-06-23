import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ObrasFinalizadasPage } from '../obras-finalizadas/obras-finalizadas';
import { ObraCadastroPage } from '../obra-cadastro/obra-cadastro';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  irparafinalizadas(){
    this.navCtrl.push(ObrasFinalizadasPage)
  }

  irparacadastro(){
    this.navCtrl.push(ObraCadastroPage)
  }

}
