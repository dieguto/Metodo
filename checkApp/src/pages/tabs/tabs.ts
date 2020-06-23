import { Component } from '@angular/core';
import { NotificacoesPage } from '../notificacoes/notificacoes';
import { PerfilPage } from '../perfil/perfil';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  notificacoesPage = NotificacoesPage;
  perfilPage = PerfilPage;
  obraPage = HomePage;
}
