(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "34Y5":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "V6Ie");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "r67e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "e8h1");









let LoginPage = class LoginPage {
    constructor(http, navCtrl, storage, loadingController, alertController) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.appUrl = "https://theitvibe.com/project/ihose/api/login";
    }
    ngOnInit() {
        //this.storage.set("get_started", 0);
    }
    back() {
        this.storage.get("goTo").then(val => {
            if (val) {
                this.page = val;
                this.navCtrl.navigateForward('' + this.page);
            }
            else {
                this.navCtrl.navigateForward('/home');
            }
        });
        //this.location.back();
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Checking...'
            });
            const alert = yield this.alertController.create({
                message: 'Username and Password is wrong',
                buttons: ['OK']
            });
            const usernamealrt = yield this.alertController.create({
                message: 'Please enter email',
                buttons: ['OK']
            });
            const passalrt = yield this.alertController.create({
                message: 'Please enter password',
                buttons: ['OK']
            });
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
            if (this.email == '' || this.email == null) {
                loading.dismiss();
                usernamealrt.present();
            }
            else if (this.password == '' || this.password == null) {
                loading.dismiss();
                passalrt.present();
            }
            else {
                yield loading.present();
                var data = {
                    "email": this.email,
                    "password": this.password
                };
                this.http.post(this.appUrl, data, { headers: headers })
                    .subscribe(res => {
                    //console.log(res.json());
                    this.res = res.json();
                    if (this.res.status == 0) {
                        loading.dismiss();
                        this.alertController.create({
                            message: this.res.msg,
                            buttons: ['OK']
                        }).then(resalert => {
                            resalert.present();
                        });
                    }
                    else if (this.res.status == 1) {
                        this.storage.set("userDetails", this.res);
                        this.navCtrl.navigateForward('home');
                        loading.dismiss();
                    }
                    else {
                        //alert("Server error");
                        loading.dismiss();
                    }
                }, (err) => {
                    console.log(err);
                    loading.dismiss();
                });
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "V6Ie":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n\n    <div class=\"login_area\">\n      <div class=\"container\">\n         <!-- <button class=\"nav_bar\" (click)=\"back()\"><i class='fas fa-arrow-left'></i></button> -->\n          <div class=\"header_area\">\n              <h1>login</h1>\n          </div>\n          <div class=\"login_body\">\n              <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"E-mail\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n              <div class=\"form-group\">\n                 <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n              <div class=\"form-group\">\n                  <button class=\"btn-link\">Forgot Password?</button>\n              </div>\n              <div class=\"submit_button_box\">\n                  <button class=\"btn\" (click)=\"login()\"><i class=\"zmdi zmdi-long-arrow-right\"></i></button>\n              </div>\n          </div>\n          <div class=\"login_with\">\n              <div class=\"or\"><strong>or</strong></div>\n              <h3>Login with social media</h3>\n              <ul>\n                  <li><img src=\"assets/images/facebook.png\" alt=\"facebook\" title=\"\" /></li>\n                  <li><img src=\"assets/images/twitter.png\" alt=\"twitter\" title=\"\" /></li>\n                  <li><img src=\"assets/images/google.png\" alt=\"google\" title=\"\" /></li>\n              </ul>\n              <p>Don’t have an account? <button class=\"btn-link\" routerLink=\"/register\">Register</button></p>\n          </div>\n      </div>\n    </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "34Y5");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "34Y5");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "r67e":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Montserrat\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.login_area {\n  width: 100%;\n  height: auto;\n  position: relative;\n  box-sizing: border-box;\n  overflow: scroll;\n  padding-bottom: 30px;\n}\n.login_area::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url('login-bg1.png');\n  z-index: 0;\n}\n.container {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 24px;\n}\n.header_area {\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 91;\n  padding: 60px 0 20px;\n  margin: 0px 0 0px;\n}\n.header_area h1 {\n  width: 100%;\n  margin: 0 0 0;\n  color: #ffffff;\n  text-transform: capitalize;\n  font-size: 30px;\n  font-weight: 500;\n  text-align: center;\n}\n.login_body {\n  width: 90%;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n  margin: 68px 0 30px;\n}\n.form-group {\n  width: 100%;\n  box-sizing: border-box;\n  margin-bottom: 15px;\n}\n.form-group.phone {\n  width: 83%;\n}\n.form-group.Password {\n  width: 53%;\n}\n.form-group.Confirm {\n  width: 72%;\n}\n.form-control {\n  width: 100%;\n  height: 42px;\n  border: none;\n  border-bottom: 1px solid #8e8e8d82;\n  color: #000000;\n  font-size: 15px;\n  font-weight: 500;\n  outline: none;\n  background: transparent;\n  background-color: transparent;\n}\n.form-control::placeholder {\n  font-weight: 500;\n}\ninput:focus {\n  border-color: none;\n  box-shadow: none;\n  outline: 0 none;\n  background-color: transparent;\n}\n.btn-link {\n  padding: 0 0;\n  margin: 0px 0;\n  color: #737373;\n  font-size: 15px;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  background-color: transparent;\n}\n.btn-link:hover {\n  color: #000;\n}\n.submit_button_box {\n  position: absolute;\n  top: 66%;\n  right: 9%;\n  box-sizing: border-box;\n}\n.btn {\n  padding: 6px 25px;\n  font-size: 30px;\n  box-sizing: border-box;\n  border: 1px solid #fff;\n  background: #ffffff;\n  color: #dc4824;\n  outline: none;\n  border-radius: 30px;\n  cursor: pointer;\n  border: none;\n}\n.btn:hover {\n  background-color: #000;\n  border: none;\n  color: #fff;\n}\n.login_with {\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  margin-top: 66px;\n}\n.login_with .or {\n  width: 83%;\n  position: relative;\n  box-sizing: border-box;\n  text-align: center;\n  margin: auto auto 15px auto;\n}\n.login_with .or strong {\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 500;\n  color: #000000;\n  padding: 0 5px;\n  background: #ffffff;\n  position: relative;\n  z-index: 1;\n}\n.login_with .or:before {\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: #bfbfbf;\n}\n.login_with h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 20px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #797979;\n  text-align: center;\n}\n.login_with ul {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 15px;\n  text-align: center;\n}\n.login_with ul li {\n  display: inline-block;\n  padding: 0 0;\n  margin: 0 2px;\n  vertical-align: middle;\n  max-width: 34px;\n}\n.login_with p {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  font-size: 13px;\n  font-weight: 500;\n  color: #000000;\n  text-align: center;\n}\n.login_with .btn-link {\n  color: #e54b25;\n  text-decoration: underline;\n}\n@media (max-width: 479px) {\n  .submit_button_box {\n    position: absolute;\n    top: 77%;\n    right: 9%;\n    box-sizing: border-box;\n  }\n\n  .login_area {\n    width: 100%;\n    height: 100%;\n  }\n\n  .form-group.phone {\n    width: 83%;\n  }\n\n  .form-group.Password {\n    width: 53%;\n  }\n\n  .form-group.Confirm {\n    width: 61%;\n  }\n\n  .login_body {\n    margin: 113px 0 30px;\n  }\n}\n@media (max-width: 414px) {\n  .header_area {\n    width: 100%;\n    box-sizing: border-box;\n    position: relative;\n    z-index: 91;\n    padding: 34px 0 20px;\n    margin: 0px 0 0px;\n  }\n\n  .login_area {\n    width: 100%;\n    height: 100%;\n  }\n\n  .submit_button_box {\n    top: 180%;\n    right: 9%;\n  }\n\n  .login_with {\n    width: 100%;\n    margin-top: 213px;\n  }\n\n  .login_with .or:before {\n    width: 80%;\n  }\n}\n@media (max-width: 411px) {\n  .login_with {\n    margin-top: 180px;\n  }\n\n  .login_with .or {\n    width: 90%;\n    position: relative;\n    box-sizing: border-box;\n    text-align: center;\n    margin: auto auto 8px auto;\n  }\n\n  .login_with .or:before {\n    content: \"\";\n    position: absolute;\n    top: 10px;\n    left: 0;\n    width: 78%;\n    height: 1px;\n    background: #bfbfbf;\n  }\n\n  .submit_button_box {\n    position: absolute;\n    top: 154%;\n    right: 9%;\n    box-sizing: border-box;\n  }\n\n  .header_area {\n    padding: 64px 0 20px;\n  }\n}\n@media (max-width: 410px) {\n  .submit_button_box {\n    position: absolute;\n    top: 72%;\n    right: 9%;\n    box-sizing: border-box;\n  }\n\n  .login_area {\n    width: 100%;\n    height: auto;\n  }\n\n  .login_body {\n    margin: 68px 0 30px;\n  }\n}\n@media (max-width: 375px) {\n  .submit_button_box {\n    position: absolute;\n    top: 160%;\n    right: 9%;\n    box-sizing: border-box;\n  }\n\n  .login_area {\n    width: 100%;\n    height: 100%;\n  }\n\n  .login_body {\n    margin: 68px 0 30px;\n  }\n\n  .login_area::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-position: top right;\n  }\n\n  .header_area {\n    padding: 62px 0 20px;\n  }\n}\n@media (max-width: 360px) {\n  .login_area {\n    width: 100%;\n    height: 100%;\n  }\n\n  .submit_button_box {\n    top: 148%;\n    right: 9%;\n  }\n\n  .login_with {\n    margin-top: 150px;\n  }\n\n  .login_with .or {\n    width: 90%;\n    position: relative;\n    box-sizing: border-box;\n    text-align: center;\n    margin: auto auto 8px auto;\n  }\n\n  .login_with .or:before {\n    content: \"\";\n    position: absolute;\n    top: 10px;\n    left: 0;\n    width: 74%;\n    height: 1px;\n    background: #bfbfbf;\n  }\n}\n@media (max-width: 320px) {\n  .header_area {\n    width: 100%;\n    box-sizing: border-box;\n    position: relative;\n    z-index: 91;\n    padding: 34px 0 20px;\n    margin: 0px 0 0px;\n  }\n\n  .login_area {\n    width: 100%;\n    height: auto;\n  }\n\n  .submit_button_box {\n    top: 134%;\n    right: 9%;\n  }\n\n  .login_with .or:before {\n    content: \"\";\n    position: absolute;\n    top: 10px;\n    left: 0;\n    width: 88%;\n    height: 1px;\n    background: #bfbfbf;\n  }\n}\n.nav_bar {\n  float: left;\n  background: transparent;\n  color: #fff;\n  padding: 0 0;\n  margin: 0 0;\n  border: none;\n  /*margin-right: 12px;*/\n  font-size: 24px;\n  margin-top: 3px;\n  outline: none;\n  margin-top: 30px;\n  position: relative;\n  z-index: 91;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx5RkFBQTtBQUNBLCtIQUFBO0FBQ0EscU1BQUE7QUFDUjtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUVBO0VBQ0ksc0JBQUE7QUFDSjtBQUNBO0VBQXdCLHFDQUFBO0FBR3hCO0FBRkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUtKO0FBSEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBTUo7QUFKQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLFVBQUE7QUFPRjtBQUxBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFRRjtBQU5BO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQVNKO0FBUEE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBVUY7QUFSQTtFQUNFLFVBQUE7RUFDQSxzQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBVUY7QUFSQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBV0Y7QUFUQTtFQUNFLFVBQUE7QUFZRjtBQVZBO0VBQ0UsVUFBQTtBQWFGO0FBWEE7RUFDRSxVQUFBO0FBY0Y7QUFaQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FBZUY7QUFiQTtFQUNFLGdCQUFBO0FBZ0JGO0FBZEE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBaUJGO0FBZkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBa0JKO0FBaEJBO0VBQWlCLFdBQUE7QUFvQmpCO0FBbkJBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBc0JGO0FBcEJBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBdUJGO0FBckJBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXdCRjtBQXRCQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUF5Qko7QUF2QkE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUEwQko7QUF4QkE7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQW1CLFVBQUE7QUE0QnJCO0FBMUJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBNkJKO0FBM0JBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBOEJKO0FBNUJBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUErQkY7QUE3QkE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBZ0NKO0FBOUJBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFpQ0Y7QUEvQkE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7QUFrQ0Y7QUE5QkE7RUFDQTtJQUNJLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxzQkFBQTtFQWlDRjs7RUEvQkY7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQWtDRjs7RUEvQkY7SUFDRSxVQUFBO0VBa0NBOztFQWhDRjtJQUNFLFVBQUE7RUFtQ0E7O0VBakNGO0lBQ0ksVUFBQTtFQW9DRjs7RUFsQ0Y7SUFFSSxvQkFBQTtFQW9DRjtBQUNGO0FBbENBO0VBQ0E7SUFDSSxXQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxvQkFBQTtJQUNBLGlCQUFBO0VBb0NGOztFQWxDRjtJQUNJLFdBQUE7SUFDQSxZQUFBO0VBcUNGOztFQW5DRjtJQUNJLFNBQUE7SUFDQSxTQUFBO0VBc0NGOztFQXBDRjtJQUNJLFdBQUE7SUFFQSxpQkFBQTtFQXNDRjs7RUFwQ0Y7SUFFSSxVQUFBO0VBc0NGO0FBQ0Y7QUFsQ0E7RUFFQTtJQUVJLGlCQUFBO0VBa0NGOztFQWhDRjtJQUNJLFVBQUE7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSwwQkFBQTtFQW1DRjs7RUFqQ0Y7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsT0FBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUFvQ0Y7O0VBbENGO0lBQ0ksa0JBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtJQUNBLHNCQUFBO0VBcUNGOztFQW5DRjtJQUVJLG9CQUFBO0VBcUNGO0FBQ0Y7QUFsQ0E7RUFDQTtJQUNFLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxzQkFBQTtFQW9DQTs7RUFsQ0Y7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQXFDRjs7RUFsQ0Y7SUFFRSxtQkFBQTtFQW9DQTtBQUNGO0FBakNBO0VBQ0E7SUFDSSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0lBQ0Esc0JBQUE7RUFtQ0Y7O0VBakNGO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUFvQ0Y7O0VBbENGO0lBRUUsbUJBQUE7RUFvQ0E7O0VBakNGO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLDhCQUFBO0VBb0NGOztFQWpDRjtJQUVJLG9CQUFBO0VBbUNGO0FBQ0Y7QUEvQkE7RUFDQTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VBaUNGOztFQS9CRjtJQUNJLFNBQUE7SUFDQSxTQUFBO0VBa0NGOztFQWhDRjtJQUVJLGlCQUFBO0VBa0NGOztFQWhDRjtJQUNJLFVBQUE7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSwwQkFBQTtFQW1DRjs7RUFqQ0Y7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsT0FBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUFvQ0Y7QUFDRjtBQWhDQTtFQUNBO0lBQ0ksV0FBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0Esb0JBQUE7SUFDQSxpQkFBQTtFQWtDRjs7RUFoQ0Y7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQW1DRjs7RUFqQ0Y7SUFDSSxTQUFBO0lBQ0EsU0FBQTtFQW9DRjs7RUFsQ0Y7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsT0FBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUFxQ0Y7QUFDRjtBQWxDQTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBb0NKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNC4wL2Nzcy9hbGwubWluLmNzcycpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWF0ZXJpYWwtZGVzaWduLWljb25pYy1mb250LzIuMi4wL2Nzcy9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQubWluLmNzcycpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcclxuaHRtbCwgYm9keSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6MTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblxyXG59XHJcbiosIDo6YWZ0ZXIsIDo6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNnsgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjt9XHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmxvZ2luX2FyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcbi5sb2dpbl9hcmVhOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbi1iZzEucG5nKTtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMHB4IDI0cHg7XHJcbn1cclxuLmhlYWRlcl9hcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDkxO1xyXG4gICAgcGFkZGluZzogNjBweCAwIDIwcHg7XHJcbiAgICBtYXJnaW46IDBweCAwIDBweDtcclxufVxyXG4uaGVhZGVyX2FyZWEgaDF7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIDAgMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxvZ2luX2JvZHkge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuIFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIG1hcmdpbjogNjhweCAwIDMwcHg7XHJcbn1cclxuLmZvcm0tZ3JvdXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uZm9ybS1ncm91cC5waG9uZSB7XHJcbiAgd2lkdGg6IDgzJTtcclxufVxyXG4uZm9ybS1ncm91cC5QYXNzd29yZCB7XHJcbiAgd2lkdGg6IDUzJTtcclxufVxyXG4uZm9ybS1ncm91cC5Db25maXJtIHtcclxuICB3aWR0aDogNzIlO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDJweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ZThlOGQ4MjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXJ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5pbnB1dDpmb2N1cyB7ICAgXHJcbiAgYm9yZGVyLWNvbG9yOiBub25lO1xyXG4gIGJveC1zaGFkb3c6bm9uZTtcclxuICBvdXRsaW5lOiAwIG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmJ0bi1saW5rIHtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMHB4IDA7XHJcbiAgICBjb2xvcjogIzczNzM3MztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmJ0bi1saW5rOmhvdmVyeyBjb2xvcjogIzAwMDsgfVxyXG4uc3VibWl0X2J1dHRvbl9ib3gge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDY2JTtcclxuICByaWdodDogOSU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uYnRuIHtcclxuICBwYWRkaW5nOiA2cHggMjVweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgY29sb3I6ICNkYzQ4MjQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmxvZ2luX3dpdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBtYXJnaW4tdG9wOiA2NnB4O1xyXG59XHJcbi5sb2dpbl93aXRoIC5vciB7XHJcbiAgICB3aWR0aDogODMlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0byBhdXRvIDE1cHggYXV0bztcclxufVxyXG4ubG9naW5fd2l0aCAub3Igc3Ryb25ne1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO3otaW5kZXg6IDE7XHJcbn1cclxuLmxvZ2luX3dpdGggLm9yOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2JmYmZiZjtcclxufVxyXG4ubG9naW5fd2l0aCBoMyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjNzk3OTc5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sb2dpbl93aXRoIHVse1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMCAwO1xyXG4gIG1hcmdpbjogMCAwIDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sb2dpbl93aXRoIHVsIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAycHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWF4LXdpZHRoOiAzNHB4O1xyXG59XHJcbi5sb2dpbl93aXRoIHB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwIDA7XHJcbiAgbWFyZ2luOiAwIDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sb2dpbl93aXRoIC5idG4tbGlua3tcclxuICBjb2xvcjogI2U1NGIyNTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDQ3OXB4KSB7XHJcbi5zdWJtaXRfYnV0dG9uX2JveCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDc3JTtcclxuICAgIHJpZ2h0OiA5JTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmxvZ2luX2FyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgIFxyXG59XHJcbi5mb3JtLWdyb3VwLnBob25lIHtcclxuICB3aWR0aDogODMlO1xyXG59XHJcbi5mb3JtLWdyb3VwLlBhc3N3b3JkIHtcclxuICB3aWR0aDogNTMlO1xyXG59XHJcbi5mb3JtLWdyb3VwLkNvbmZpcm0ge1xyXG4gICAgd2lkdGg6IDYxJTtcclxufVxyXG4ubG9naW5fYm9keSB7XHJcbiAgICBcclxuICAgIG1hcmdpbjogMTEzcHggMCAzMHB4O1xyXG59XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo0MTRweCkge1xyXG4uaGVhZGVyX2FyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogOTE7XHJcbiAgICBwYWRkaW5nOiAzNHB4IDAgMjBweDtcclxuICAgIG1hcmdpbjogMHB4IDAgMHB4O1xyXG59XHJcbi5sb2dpbl9hcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5zdWJtaXRfYnV0dG9uX2JveCB7XHJcbiAgICB0b3A6IDE4MCU7XHJcbiAgICByaWdodDogOSU7XHJcbn1cclxuLmxvZ2luX3dpdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgIFxyXG4gICAgbWFyZ2luLXRvcDogMjEzcHg7XHJcbn1cclxuLmxvZ2luX3dpdGggLm9yOmJlZm9yZSB7XHJcbiAgIFxyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgXHJcbn1cclxuXHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo0MTFweCkge1xyXG5cclxuLmxvZ2luX3dpdGgge1xyXG4gICAgXHJcbiAgICBtYXJnaW4tdG9wOiAxODBweDtcclxufVxyXG4ubG9naW5fd2l0aCAub3Ige1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG8gYXV0byA4cHggYXV0bztcclxufVxyXG4ubG9naW5fd2l0aCAub3I6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiA3OCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcbn1cclxuLnN1Ym1pdF9idXR0b25fYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTU0JTtcclxuICAgIHJpZ2h0OiA5JTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmhlYWRlcl9hcmVhIHtcclxuICAgIFxyXG4gICAgcGFkZGluZzogNjRweCAwIDIwcHg7XHJcbiAgIFxyXG59XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo0MTBweCkge1xyXG4uc3VibWl0X2J1dHRvbl9ib3gge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDcyJTtcclxuICByaWdodDogOSU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4ubG9naW5fYXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgXHJcbn1cclxuLmxvZ2luX2JvZHkge1xyXG4gXHJcbiAgbWFyZ2luOiA2OHB4IDAgMzBweDtcclxufVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjM3NXB4KSB7XHJcbi5zdWJtaXRfYnV0dG9uX2JveCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE2MCU7XHJcbiAgICByaWdodDogOSU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5sb2dpbl9hcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5sb2dpbl9ib2R5IHtcclxuIFxyXG4gIG1hcmdpbjogNjhweCAwIDMwcHg7XHJcbn1cclxuXHJcbi5sb2dpbl9hcmVhOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XHJcbiAgIFxyXG59XHJcbi5oZWFkZXJfYXJlYSB7XHJcbiAgIFxyXG4gICAgcGFkZGluZzogNjJweCAwIDIwcHg7XHJcbiAgIFxyXG59XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MzYwcHgpIHtcclxuLmxvZ2luX2FyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxufVxyXG4uc3VibWl0X2J1dHRvbl9ib3gge1xyXG4gICAgdG9wOiAxNDglO1xyXG4gICAgcmlnaHQ6IDklO1xyXG59XHJcbi5sb2dpbl93aXRoIHtcclxuICAgIFxyXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbn1cclxuLmxvZ2luX3dpdGggLm9yIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvIGF1dG8gOHB4IGF1dG87XHJcbn1cclxuLmxvZ2luX3dpdGggLm9yOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNzQlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYmZiZmJmO1xyXG59XHJcblxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjMyMHB4KSB7XHJcbi5oZWFkZXJfYXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA5MTtcclxuICAgIHBhZGRpbmc6IDM0cHggMCAyMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggMCAwcHg7XHJcbn1cclxuLmxvZ2luX2FyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLnN1Ym1pdF9idXR0b25fYm94IHtcclxuICAgIHRvcDogMTM0JTtcclxuICAgIHJpZ2h0OiA5JTtcclxufVxyXG4ubG9naW5fd2l0aCAub3I6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiA4OCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcbn1cclxufVxyXG5cclxuLm5hdl9iYXIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAvKm1hcmdpbi1yaWdodDogMTJweDsqL1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA5MTtcclxufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map