import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { StarRatingModule } from 'ionic3-star-rating';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NotificacoesPage } from '../pages/notificacoes/notificacoes';
import { PerfilPage } from '../pages/perfil/perfil';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import {HttpClientModule} from '@angular/common/http';
import { ObrasFinalizadasPage } from '../pages/obras-finalizadas/obras-finalizadas';
import { ObraCadastroPage } from '../pages/obra-cadastro/obra-cadastro';
import { RelatorioPage } from '../pages/relatorio/relatorio';
import { RelatorioVistoriaSimplesPage } from '../pages/relatorio-vistoria-simples/relatorio-vistoria-simples';
import { MeusRelatoriosPage } from '../pages/meus-relatorios/meus-relatorios';
import { MeusRelatoriosFinalizadosPage } from '../pages/meus-relatorios-finalizados/meus-relatorios-finalizados';
import { CadastroRelatorioVistoriaSimplesPage } from '../pages/cadastro-relatorio-vistoria-simples/cadastro-relatorio-vistoria-simples';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    NotificacoesPage,
    PerfilPage,
    TabsPage,
    ObrasFinalizadasPage,
    ObraCadastroPage,
    RelatorioPage,
    RelatorioVistoriaSimplesPage,
    MeusRelatoriosPage,
    MeusRelatoriosFinalizadosPage,
    CadastroRelatorioVistoriaSimplesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    StarRatingModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    NotificacoesPage,
    PerfilPage,
    TabsPage,
    ObrasFinalizadasPage,
    ObraCadastroPage,
    RelatorioPage,
    RelatorioVistoriaSimplesPage,
    MeusRelatoriosPage,
    MeusRelatoriosFinalizadosPage,
    CadastroRelatorioVistoriaSimplesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
