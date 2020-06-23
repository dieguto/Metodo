import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObraCadastroPage } from './obra-cadastro';

@NgModule({
  declarations: [
    ObraCadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(ObraCadastroPage),
  ],
})
export class ObraCadastroPageModule {}
