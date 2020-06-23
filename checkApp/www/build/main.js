webpackJsonp([10],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroRelatorioVistoriaSimplesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CadastroRelatorioVistoriaSimplesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroRelatorioVistoriaSimplesPage = (function () {
    function CadastroRelatorioVistoriaSimplesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CadastroRelatorioVistoriaSimplesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroRelatorioVistoriaSimplesPage');
    };
    return CadastroRelatorioVistoriaSimplesPage;
}());
CadastroRelatorioVistoriaSimplesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cadastro-relatorio-vistoria-simples',template:/*ion-inline-start:"E:\Trabalho\Metodo\reserva\checkApp\src\pages\cadastro-relatorio-vistoria-simples\cadastro-relatorio-vistoria-simples.html"*/'\n<ion-header>     \n  <div class="icone-voltar"></div>\n  <div class="nome-contrato">Novo Relatório <div class="status-page">OFFLINE</div></div>\n  <div class="titulo-pagina">Vistoria Simples</div>\n  \n  <div class="botao">\n    <p class="agencia-cadastro">1416 - AG. PIRITUBA - SEMANA 1</p>\n    <p></p>\n  </div>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <h2 class="titulo-card">Avaliação Semanal</h2>\n    <div class="botao-avaliacao-cadastro"></div>\n\n\n\n    <div class="container-cadastro">\n      <div class="slidecontainer">\n        <p class="titulo-cadastro">ANDAMENTO DE OBRA</p>\n        <div class="porcentagem-cadastro">\n          100%\n        </div>\n        <input type="range" min="1" max="100" value="100" class="slider" id="myRange">\n        <!-- <p>Value: <span id="demo"></span></p> -->\n      </div>\n  \n      <form >\n        <p class="titulo-cadastro">USO DE EPI\'S</p>\n        <ionic3-star-rating #rating \n            activeIcon = "icone-estrela"\n            defaultIcon = "icone-estrelavazia"\n            activeColor = "#EB6607"\n            defaultColor = "#aaaaaa"\n            readonly = "false"\n            fontSize = "60px"\n           \n           >\n        </ionic3-star-rating>\n  \n        <p class="titulo-cadastro">QUALIDADE DE SERVIÇOS</p>\n        <ionic3-star-rating #rating \n            activeIcon = "icone-estrela"\n            defaultIcon = "icone-estrelavazia"\n            activeColor = "#EB6607"\n            defaultColor = "#aaaaaa"\n            readonly = "false"\n            fontSize = "60px"\n           \n           >\n        </ionic3-star-rating>\n\n        <p class="titulo-cadastro">ORGANIZAÇÃO/PLANEJAMENTO</p>\n        <ionic3-star-rating #rating \n        activeIcon = "icone-estrela"\n        defaultIcon = "icone-estrelavazia"\n        activeColor = "#EB6607"\n        defaultColor = "#aaaaaa"\n        readonly = "false"\n        fontSize = "60px"\n       \n       >\n    </ionic3-star-rating>\n\n        <p class="titulo-cadastro">LIMPEZA DE OBRA</p>\n        <ionic3-star-rating #rating \n            activeIcon = "icone-estrela"\n            defaultIcon = "icone-estrelavazia"\n            activeColor = "#EB6607"\n            defaultColor = "#aaaaaa"\n            readonly = "false"\n            fontSize = "60px"\n           \n           >\n        </ionic3-star-rating>\n\n        <p class="titulo-cadastro">PRAZO</p>\n        <ionic3-star-rating #rating \n            activeIcon = "icone-estrela"\n            defaultIcon = "icone-estrelavazia"\n            activeColor = "#EB6607"\n            defaultColor = "#aaaaaa"\n            readonly = "false"\n            fontSize = "60px"\n           \n           >\n        </ionic3-star-rating>\n\n        \n\n      </form>\n    </div>\n\n    \n\n<!-- Usar esta versão -->\n    <!-- <form [formGroup]="customForm">\n\n      <ionic3-star-rating #rating \n          activeIcon = "ios-star"\n          defaultIcon = "ios-star-outline"\n          activeColor = "#d1301a"\n          defaultColor = "#aaaaaa"\n          readonly = "false"\n          fontSize = "32px"\n          (ratingChanged)="logRatingChange($event)"\n          formControlName="starRating">\n      </ionic3-star-rating>\n\n    </form> -->\n </ion-card>\n <ion-card>\n   <h2 class="titulo-card">Descrição de Vistoria </h2>\n   <div class="botao-descricao-cadastro"></div>\n </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\Trabalho\Metodo\reserva\checkApp\src\pages\cadastro-relatorio-vistoria-simples\cadastro-relatorio-vistoria-simples.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CadastroRelatorioVistoriaSimplesPage);

//# sourceMappingURL=cadastro-relatorio-vistoria-simples.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.logar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"E:\Trabalho\Metodo\reserva\checkApp\src\pages\login\login.html"*/'<!-- -->\n<div padding  class="no-scroll">\n  \n\n    <!-- Logo -->\n    <div  text-center >\n      <div class="logo"></div>\n      <h2 ion-text class="titulo-app">\n        CheckApp\n      </h2>\n    </div>\n\n    <!-- Login form -->\n\n      <ion-item>\n          <ion-label floating>\n            <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n            Email\n          </ion-label>\n          <ion-input type="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          Password\n        </ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n\n      <button (click)="logar()" margin-top ion-button icon-start block style="background-color:#73BE46">\n        entrar\n      </button>\n\n    <p text-center ion-text style="color: aliceblue;margin-top: 30px" ><strong >esqueceu a senha?</strong></p>\n\n     \n\n\n\n    </div>\n'/*ion-inline-end:"E:\Trabalho\Metodo\reserva\checkApp\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificacoesPage = (function () {
    function NotificacoesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificacoesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificacoesPage');
    };
    return NotificacoesPage;
}());
NotificacoesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notificacoes',template:/*ion-inline-start:"E:\Trabalho\Metodo\reserva\checkApp\src\pages\notificacoes\notificacoes.html"*/'<!--\n  Generated template for the NotificacoesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n  <ion-navbar>\n    <ion-title>notificacoes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  Notificacoes\n</ion-content>\n'/*ion-inline-end:"E:\Trabalho\Metodo\reserva\checkApp\src\pages\notificacoes\notificacoes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], NotificacoesPage);

//# sourceMappingURL=notificacoes.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = (function () {
    function PerfilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    return PerfilPage;
}());
PerfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-perfil',template:/*ion-inline-start:"E:\Trabalho\Metodo\reserva\checkApp\src\pages\perfil\perfil.html"*/'<!--\n  Generated template for the PerfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>perfil</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  Perfil\n</ion-content>\n'/*ion-inline-end:"E:\Trabalho\Metodo\reserva\checkApp\src\pages\perfil\perfil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PerfilPage);

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObrasFinalizadasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ObrasFinalizadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ObrasFinalizadasPage = (function () {
    function ObrasFinalizadasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ObrasFinalizadasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ObrasFinalizadasPage');
    };
    ObrasFinalizadasPage.prototype.irparaobrasemandamento = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return ObrasFinalizadasPage;
}());
ObrasFinalizadasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-obras-finalizadas',template:/*ion-inline-start:"E:\Trabalho\Metodo\reserva\checkApp\src\pages\obras-finalizadas\obras-finalizadas.html"*/'\n\n\n<ion-header>     \n  <div class="icone-voltar"></div>\n  <div class="nome-contrato">Bradesco DI</div>\n  <div class="titulo-pagina">Obras finalizadas</div>\n  <div class="botao">\n    <div class="andamento" (click)="irparaobrasemandamento()">\n      EM ANDAMENTO\n    </div>\n    <div class="finalizadas">\n      FINALIZADAS\n    </div>\n  </div>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card class="card-estilizado">\n    1416 - Ag. Pirituba\n  </ion-card>\n  <ion-card class="card-estilizado">\n    1416 - Ag. Pirituba\n  </ion-card>\n  <ion-card class="card-estilizado">\n    1416 - Ag. Pirituba\n  </ion-card>\n  <ion-card class="card-estilizado">\n    1416 - Ag. Pirituba\n  </ion-card>\n  <ion-card class="card-estilizado">\n    1416 - Ag. Pirituba\n  </ion-card>\n  <ion-card class="card-estilizado">\n    1416 - Ag. Pirituba\n  </ion-card>\n\n\n<ion-fab right style="bottom: 18px; right: 20px;">\n  <button class="botao-adicionar" ion-fab>\n    <ion-icon name="add"></ion-icon>\n  </button>\n</ion-fab>  \n</ion-content>\n\n\n'/*ion-inline-end:"E:\Trabalho\Metodo\reserva\checkApp\src\pages\obras-finalizadas\obras-finalizadas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ObrasFinalizadasPage);

//# sourceMappingURL=obras-finalizadas.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObraCadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meus_relatorios_meus_relatorios__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ObraCadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ObraCadastroPage = (function () {
    function ObraCadastroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ObraCadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ObraCadastroPage');
    };
    ObraCadastroPage.prototype.irparameusrelatorios = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__meus_relatorios_meus_relatorios__["a" /* MeusRelatoriosPage */]);
    };
    return ObraCadastroPage;
}());
ObraCadastroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-obra-cadastro',template:/*ion-inline-start:"E:\Trabalho\Metodo\reserva\checkApp\src\pages\obra-cadastro\obra-cadastro.html"*/'\n<ion-header>     \n  <div class="icone-voltar"></div>\n  <div class="nome-contrato">Nova Obra</div>\n  <div class="titulo-pagina">Ag. Piritu</div>\n  <div class="botao">\n    \n  </div>\n</ion-header>\n\n\n<ion-content padding>\n\n  \n<ion-card class="ion-card-remover">\n  <div padding class="form">\n   \n    <div class="group -ionic">\n      <input class="field" type="text" required>\n  \n      <label class="title">NOME DA AGÊNCIA</label>\n    </div>\n\n    <div class="group -ionic">\n      <input class="field" type="text" required>\n  \n      <label class="title">JUNÇÃO</label>\n    </div>\n\n    <div class="group -ionic">\n      <input class="field" type="text" required>\n  \n      <label class="title">NOME DA CONSTRUTORA</label>\n    </div>\n\n    <div class="group -ionic">\n      <input class="field" type="text" required>\n  \n      <label class="title">N° DO PROCESSO</label>\n    </div>\n\n    <div class="group -ionic">\n      <input class="field" type="text" required>\n  \n      <label class="title">SERVIÇO</label>\n    </div>\n\n    <div class="group -ionic">\n      <input class="field" type="text" required>\n  \n      <label class="title">ENDEREÇO</label>\n    </div>\n\n    <div class="group -ionic">\n      <input class="field" type="text" required>\n  \n      <label class="title">INÍCIO DA OBRA</label>\n    </div>\n\n    <div class="group -ionic">\n      <input class="field" type="text" required>\n  \n      <label class="title">TÉRMINO DA OBRA</label>\n    </div>\n\n   \n  \n  </div>\n\n  \n</ion-card>\n\n<button (click)="irparameusrelatorios()" margin-bottom ion-button icon-start block style="background-color:#73BE46">\n  enviar\n</button>\n\n  \n\n  \n</ion-content>\n'/*ion-inline-end:"E:\Trabalho\Metodo\reserva\checkApp\src\pages\obra-cadastro\obra-cadastro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ObraCadastroPage);

//# sourceMappingURL=obra-cadastro.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeusRelatoriosFinalizadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meus_relatorios_meus_relatorios__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MeusRelatoriosFinalizadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MeusRelatoriosFinalizadosPage = (function () {
    function MeusRelatoriosFinalizadosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MeusRelatoriosFinalizadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MeusRelatoriosFinalizadosPage');
    };
    MeusRelatoriosFinalizadosPage.prototype.irparaemaberto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__meus_relatorios_meus_relatorios__["a" /* MeusRelatoriosPage */]);
    };
    return MeusRelatoriosFinalizadosPage;
}());
MeusRelatoriosFinalizadosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-meus-relatorios-finalizados',template:/*ion-inline-start:"E:\Trabalho\Metodo\reserva\checkApp\src\pages\meus-relatorios-finalizados\meus-relatorios-finalizados.html"*/'\n<ion-header>     \n  <div class="icone-voltar"></div>\n  <div class="nome-contrato">Ag. Pirituba</div>\n  <div class="titulo-pagina">Meus Relatórios</div>\n  <div class="botao">\n    <div class="relatorio-fin-andamento" (click)="irparaemaberto()">\n      EM ABERTO\n    </div>\n    <div class="relatorio-fin-finalizadas">\n      ENVIADOS\n    </div>\n  </div>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card class="card-fin-relatorio">\n    <section>\n      <div class="item-relatorio">  Ag. Pirituba</div>\n      <div class="botao">\n        <div class="andamento">\n          EM ABERTO\n        </div>\n      </div>\n      <div class="data-relatorio">\n        <div>teste</div>\n        <div>04/07</div>\n      </div>\n    </section>\n   \n  </ion-card>\n</ion-content>'/*ion-inline-end:"E:\Trabalho\Metodo\reserva\checkApp\src\pages\meus-relatorios-finalizados\meus-relatorios-finalizados.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], MeusRelatoriosFinalizadosPage);

//# sourceMappingURL=meus-relatorios-finalizados.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatorioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_relatorio_vistoria_simples_cadastro_relatorio_vistoria_simples__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RelatorioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RelatorioPage = (function () {
    function RelatorioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RelatorioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RelatorioPage');
    };
    RelatorioPage.prototype.irparavistoriasimples = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastro_relatorio_vistoria_simples_cadastro_relatorio_vistoria_simples__["a" /* CadastroRelatorioVistoriaSimplesPage */]);
    };
    return RelatorioPage;
}());
RelatorioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-relatorio',template:/*ion-inline-start:"E:\Trabalho\Metodo\reserva\checkApp\src\pages\relatorio\relatorio.html"*/'\n<ion-header>     \n  <div class="icone-voltar"></div>\n  <div class="nome-contrato">Ag. Piritu</div>\n  <div class="titulo-pagina">Nova Relatório</div>\n  \n  <div class="botao">\n    <input type="text" class="busca-relatorio" placeholder="vistoria.."/>\n    <!-- <ion-icon name="search" class="icone-search-relatorio"></ion-icon> -->\n    <div class="icone-search-relatorio"></div>\n  </div>\n \n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card (click)="irparavistoriasimples()" class="card-estilizado">\n    Vistoria Simples\n  </ion-card>\n  <ion-card class="card-estilizado">\n    Vistoria 12 itens\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\Trabalho\Metodo\reserva\checkApp\src\pages\relatorio\relatorio.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], RelatorioPage);

//# sourceMappingURL=relatorio.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro-relatorio-vistoria-simples/cadastro-relatorio-vistoria-simples.module": [
		281,
		9
	],
	"../pages/login/login.module": [
		282,
		8
	],
	"../pages/meus-relatorios-finalizados/meus-relatorios-finalizados.module": [
		283,
		7
	],
	"../pages/meus-relatorios/meus-relatorios.module": [
		284,
		6
	],
	"../pages/notificacoes/notificacoes.module": [
		285,
		5
	],
	"../pages/obra-cadastro/obra-cadastro.module": [
		286,
		4
	],
	"../pages/obras-finalizadas/obras-finalizadas.module": [
		287,
		3
	],
	"../pages/perfil/perfil.module": [
		288,
		2
	],
	"../pages/relatorio-vistoria-simples/relatorio-vistoria-simples.module": [
		289,
		1
	],
	"../pages/relatorio/relatorio.module": [
		290,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notificacoes_notificacoes__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_perfil__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabsPage = (function () {
    function TabsPage() {
        this.notificacoesPage = __WEBPACK_IMPORTED_MODULE_1__notificacoes_notificacoes__["a" /* NotificacoesPage */];
        this.perfilPage = __WEBPACK_IMPORTED_MODULE_2__perfil_perfil__["a" /* PerfilPage */];
        this.obraPage = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabs',template:/*ion-inline-start:"E:\Trabalho\Metodo\reserva\checkApp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="obraPage" tabIcon="icone-tijolo"></ion-tab>\n  <ion-tab [root]="notificacoesPage"  tabIcon="icone-notificacao"></ion-tab>\n  <ion-tab [root]="perfilPage" style="color: #EB6607;" tabIcon="contact"></ion-tab>\n  \n</ion-tabs>'/*ion-inline-end:"E:\Trabalho\Metodo\reserva\checkApp\src\pages\tabs\tabs.html"*/,
    })
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatorioVistoriaSimplesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RelatorioVistoriaSimplesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RelatorioVistoriaSimplesPage = (function () {
    function RelatorioVistoriaSimplesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RelatorioVistoriaSimplesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RelatorioVistoriaSimplesPage');
    };
    return RelatorioVistoriaSimplesPage;
}());
RelatorioVistoriaSimplesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-relatorio-vistoria-simples',template:/*ion-inline-start:"E:\Trabalho\Metodo\reserva\checkApp\src\pages\relatorio-vistoria-simples\relatorio-vistoria-simples.html"*/'\n<ion-header>     \n  <div class="icone-voltar"></div>\n  <div class="nome-contrato">Ag. Piritu</div>\n  <div class="titulo-pagina">Nova Relatório</div>\n  \n  <div class="botao">\n    \n  </div>\n</ion-header>\n\n\n<ion-content padding>\n  <h1>Teste</h1>\n</ion-content>\n'/*ion-inline-end:"E:\Trabalho\Metodo\reserva\checkApp\src\pages\relatorio-vistoria-simples\relatorio-vistoria-simples.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], RelatorioVistoriaSimplesPage);

//# sourceMappingURL=relatorio-vistoria-simples.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic3_star_rating__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_notificacoes_notificacoes__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_perfil_perfil__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_obras_finalizadas_obras_finalizadas__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_obra_cadastro_obra_cadastro__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_relatorio_relatorio__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_relatorio_vistoria_simples_relatorio_vistoria_simples__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_meus_relatorios_meus_relatorios__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_meus_relatorios_finalizados_meus_relatorios_finalizados__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_cadastro_relatorio_vistoria_simples_cadastro_relatorio_vistoria_simples__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_notificacoes_notificacoes__["a" /* NotificacoesPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_obras_finalizadas_obras_finalizadas__["a" /* ObrasFinalizadasPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_obra_cadastro_obra_cadastro__["a" /* ObraCadastroPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_relatorio_relatorio__["a" /* RelatorioPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_relatorio_vistoria_simples_relatorio_vistoria_simples__["a" /* RelatorioVistoriaSimplesPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_meus_relatorios_meus_relatorios__["a" /* MeusRelatoriosPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_meus_relatorios_finalizados_meus_relatorios_finalizados__["a" /* MeusRelatoriosFinalizadosPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_cadastro_relatorio_vistoria_simples_cadastro_relatorio_vistoria_simples__["a" /* CadastroRelatorioVistoriaSimplesPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/cadastro-relatorio-vistoria-simples/cadastro-relatorio-vistoria-simples.module#CadastroRelatorioVistoriaSimplesPageModule', name: 'CadastroRelatorioVistoriaSimplesPage', segment: 'cadastro-relatorio-vistoria-simples', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/meus-relatorios-finalizados/meus-relatorios-finalizados.module#MeusRelatoriosFinalizadosPageModule', name: 'MeusRelatoriosFinalizadosPage', segment: 'meus-relatorios-finalizados', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/meus-relatorios/meus-relatorios.module#MeusRelatoriosPageModule', name: 'MeusRelatoriosPage', segment: 'meus-relatorios', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notificacoes/notificacoes.module#NotificacoesPageModule', name: 'NotificacoesPage', segment: 'notificacoes', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/obra-cadastro/obra-cadastro.module#ObraCadastroPageModule', name: 'ObraCadastroPage', segment: 'obra-cadastro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/obras-finalizadas/obras-finalizadas.module#ObrasFinalizadasPageModule', name: 'ObrasFinalizadasPage', segment: 'obras-finalizadas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/relatorio-vistoria-simples/relatorio-vistoria-simples.module#RelatorioVistoriaSimplesPageModule', name: 'RelatorioVistoriaSimplesPage', segment: 'relatorio-vistoria-simples', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/relatorio/relatorio.module#RelatorioPageModule', name: 'RelatorioPage', segment: 'relatorio', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_5_ionic3_star_rating__["a" /* StarRatingModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_notificacoes_notificacoes__["a" /* NotificacoesPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_obras_finalizadas_obras_finalizadas__["a" /* ObrasFinalizadasPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_obra_cadastro_obra_cadastro__["a" /* ObraCadastroPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_relatorio_relatorio__["a" /* RelatorioPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_relatorio_vistoria_simples_relatorio_vistoria_simples__["a" /* RelatorioVistoriaSimplesPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_meus_relatorios_meus_relatorios__["a" /* MeusRelatoriosPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_meus_relatorios_finalizados_meus_relatorios_finalizados__["a" /* MeusRelatoriosFinalizadosPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_cadastro_relatorio_vistoria_simples_cadastro_relatorio_vistoria_simples__["a" /* CadastroRelatorioVistoriaSimplesPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { TabsPage } from '../pages/tabs/tabs';
// iniciar com a loginPage

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Trabalho\Metodo\reserva\checkApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\Trabalho\Metodo\reserva\checkApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeusRelatoriosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meus_relatorios_finalizados_meus_relatorios_finalizados__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__relatorio_relatorio__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MeusRelatoriosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MeusRelatoriosPage = (function () {
    function MeusRelatoriosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MeusRelatoriosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MeusRelatoriosPage');
    };
    MeusRelatoriosPage.prototype.irparafinalizados = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__meus_relatorios_finalizados_meus_relatorios_finalizados__["a" /* MeusRelatoriosFinalizadosPage */]);
    };
    MeusRelatoriosPage.prototype.irparaescolhaderelatorios = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__relatorio_relatorio__["a" /* RelatorioPage */]);
    };
    return MeusRelatoriosPage;
}());
MeusRelatoriosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-meus-relatorios',template:/*ion-inline-start:"E:\Trabalho\Metodo\reserva\checkApp\src\pages\meus-relatorios\meus-relatorios.html"*/'<ion-header>     \n  <div class="icone-voltar"></div>\n  <div class="nome-contrato">Ag. Pirituba</div>\n  <div class="titulo-pagina">Meus Relatórios</div>\n  <div class="botao">\n    <div class="relatorio-andamento" >\n      EM ABERTO\n    </div>\n    <div class="relatorio-finalizadas" (click)="irparafinalizados()">\n      ENVIADOS\n    </div>\n  </div>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card class="card-relatorio">\n    <section>\n      <div class="item-relatorio">  Ag. Pirituba</div>\n      <div class="botao">\n        <div class="andamento">\n          EM ABERTO\n        </div>\n      </div>\n      <div class="data-relatorio">\n        <div>teste</div>\n        <div>04/07</div>\n      </div>\n    </section>\n   \n  </ion-card>\n\n  <ion-card class="card-relatorio">\n    <section>\n      <div class="item-relatorio">  Ag. Pirituba</div>\n      <div class="botao">\n        <div class="andamento">\n          EM ABERTO\n        </div>\n      </div>\n      <div class="data-relatorio">\n        <div>teste</div>\n        <div>04/07</div>\n      </div>\n    </section>\n   \n  </ion-card>\n\n  <ion-card class="card-relatorio">\n    <section>\n      <div class="item-relatorio">  Ag. Pirituba</div>\n      <div class="botao">\n        <div class="andamento">\n          EM ABERTO\n        </div>\n      </div>\n      <div class="data-relatorio">\n        <div>teste</div>\n        <div>04/07</div>\n      </div>\n    </section>\n   \n  </ion-card>\n\n  <ion-fab right style="bottom: 18px; right: 20px;">\n    <button (click)="irparaescolhaderelatorios()" class="botao-adicionar" ion-fab>\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab> \n</ion-content>\n'/*ion-inline-end:"E:\Trabalho\Metodo\reserva\checkApp\src\pages\meus-relatorios\meus-relatorios.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], MeusRelatoriosPage);

//# sourceMappingURL=meus-relatorios.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__obras_finalizadas_obras_finalizadas__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__obra_cadastro_obra_cadastro__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.irparafinalizadas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__obras_finalizadas_obras_finalizadas__["a" /* ObrasFinalizadasPage */]);
    };
    HomePage.prototype.irparacadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__obra_cadastro_obra_cadastro__["a" /* ObraCadastroPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"E:\Trabalho\Metodo\reserva\checkApp\src\pages\home\home.html"*/'\n<ion-header>     \n    <div class="icone-voltar"></div>\n    <div class="nome-contrato">Bradesco DI</div>\n    <div class="titulo-pagina">Minhas Obras</div>\n    <div class="botao">\n      <div class="finalizadas">\n        EM ANDAMENTO\n      </div>\n      <div class="andamento" (click)="irparafinalizadas()">\n        FINALIZADAS\n      </div>\n    </div>\n</ion-header>\n\n<ion-content padding>\n \n  <ion-card class="card-estilizado">\n    1416 - Ag. Pirituba\n  </ion-card>\n  <ion-card class="card-estilizado">\n    1416 - Ag. Pirituba\n  </ion-card>\n  <ion-card class="card-estilizado">\n    1416 - Ag. Pirituba\n  </ion-card>\n  <ion-card class="card-estilizado">\n    1416 - Ag. Pirituba\n  </ion-card>\n  <ion-card class="card-estilizado">\n    1416 - Ag. Pirituba\n  </ion-card>\n  <ion-card class="card-estilizado">\n    1416 - Ag. Pirituba\n  </ion-card>\n\n \n\n  <ion-fab right style="bottom: 18px; right: 20px;">\n    <button (click)="irparacadastro()" class="botao-adicionar" ion-fab>\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>  \n</ion-content>\n\n'/*ion-inline-end:"E:\Trabalho\Metodo\reserva\checkApp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map