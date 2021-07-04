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
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n\n    <div class=\"login_area\">\n      <div class=\"container\">\n         <button  routerLink=\"/sidebar\" class=\"nav_bar\" (click)=\"back()\"><i class='fas fa-arrow-left'></i></button>\n          <div class=\"header_area\">\n              <h1>login</h1>\n          </div>\n          <div class=\"login_body\">\n              <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"E-mail\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n              <div class=\"form-group\">\n                 <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n              <div class=\"form-group\">\n                  <button class=\"btn-link\">Forgot Password?</button>\n              </div>\n              <div class=\"submit_button_box\">\n                  <button class=\"btn\" (click)=\"login()\"><i class=\"zmdi zmdi-long-arrow-right\"></i></button>\n              </div>\n          </div>\n          <div class=\"login_with\">\n              <div class=\"or\"><strong>or</strong></div>\n              <h3>Login with social media</h3>\n              <ul>\n                  <li><img src=\"assets/images/facebook.png\" alt=\"facebook\" title=\"\" /></li>\n                \n                  <li><img src=\"assets/images/google.png\" alt=\"google\" title=\"\" /></li>\n              </ul>\n              <p>Don’t have an account? <button class=\"btn-link\" routerLink=\"/register\">Register</button></p>\n          </div>\n      </div>\n    </div>\n  \n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Montserrat\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.login_area {\n  width: 100%;\n  height: auto;\n  box-sizing: border-box;\n  overflow: scroll;\n  padding-bottom: 30px;\n}\n.login_area::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url('login-bg1.png');\n  z-index: 0;\n}\n.container {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 24px;\n}\n.header_area {\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 91;\n  padding: 60px 0 20px;\n  margin: 0px 0 0px;\n}\n.header_area h1 {\n  width: 100%;\n  margin: 0 0 0;\n  color: #ffffff;\n  text-transform: capitalize;\n  font-size: 30px;\n  font-weight: 500;\n  text-align: center;\n}\n.login_body {\n  width: 90%;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n  margin: 68px 0 30px;\n}\n.form-group {\n  width: 100%;\n  box-sizing: border-box;\n  margin-bottom: 15px;\n}\n.form-group.phone {\n  width: 83%;\n}\n.form-group.Password {\n  width: 53%;\n}\n.form-group.Confirm {\n  width: 72%;\n}\n.form-control {\n  width: 100%;\n  height: 42px;\n  border: none;\n  border-bottom: 1px solid #8e8e8d82;\n  color: #000000;\n  font-size: 15px;\n  font-weight: 500;\n  outline: none;\n  background: transparent;\n  background-color: transparent;\n}\n.form-control::placeholder {\n  font-weight: 500;\n}\ninput:focus {\n  border-color: none;\n  box-shadow: none;\n  outline: 0 none;\n  background-color: transparent;\n}\n.btn-link {\n  padding: 0 0;\n  margin: 0px 0;\n  color: #737373;\n  font-size: 15px;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  background-color: transparent;\n}\n.btn-link:hover {\n  color: #000;\n}\n.submit_button_box {\n  position: absolute;\n  top: 66%;\n  right: 9%;\n  box-sizing: border-box;\n}\n.btn {\n  padding: 6px 25px;\n  font-size: 30px;\n  box-sizing: border-box;\n  border: 1px solid #fff;\n  background: #ffffff;\n  color: #dc4824;\n  outline: none;\n  border-radius: 30px;\n  cursor: pointer;\n  border: none;\n}\n.btn:hover {\n  background-color: #000;\n  border: none;\n  color: #fff;\n}\n.login_with {\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  margin-top: 66px;\n}\n.login_with .or {\n  width: 83%;\n  position: relative;\n  box-sizing: border-box;\n  text-align: center;\n  margin: auto auto 15px auto;\n}\n.login_with .or strong {\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 500;\n  color: #000000;\n  padding: 0 5px;\n  background: #ffffff;\n  position: relative;\n  z-index: 1;\n}\n.login_with .or:before {\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: #bfbfbf;\n}\n.login_with h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 20px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #797979;\n  text-align: center;\n}\n.login_with ul {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 15px;\n  text-align: center;\n}\n.login_with ul li {\n  display: inline-block;\n  padding: 0 0;\n  margin: 0 2px;\n  vertical-align: middle;\n  max-width: 34px;\n}\n.login_with p {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  font-size: 13px;\n  font-weight: 500;\n  color: #000000;\n  text-align: center;\n}\n.login_with .btn-link {\n  color: #e54b25;\n  text-decoration: underline;\n}\n@media (max-width: 479px) {\n  .submit_button_box {\n    position: absolute;\n    top: 77%;\n    right: 9%;\n    box-sizing: border-box;\n  }\n\n  .login_area {\n    width: 100%;\n    height: 100%;\n  }\n\n  .form-group.phone {\n    width: 83%;\n  }\n\n  .form-group.Password {\n    width: 53%;\n  }\n\n  .form-group.Confirm {\n    width: 61%;\n  }\n\n  .login_body {\n    margin: 113px 0 30px;\n  }\n}\n@media (max-width: 414px) {\n  .header_area {\n    width: 100%;\n    box-sizing: border-box;\n    z-index: 91;\n    padding: 34px 0 20px;\n    margin: 0px 0 0px;\n  }\n\n  .login_area {\n    width: 100%;\n    height: 100%;\n  }\n\n  .submit_button_box {\n    top: 180%;\n    right: 9%;\n  }\n\n  .login_with {\n    width: 100%;\n    margin-top: 213px;\n  }\n\n  .login_with .or:before {\n    width: 80%;\n  }\n}\n@media (max-width: 411px) {\n  .login_with {\n    margin-top: 180px;\n  }\n\n  .login_with .or {\n    width: 90%;\n    position: relative;\n    box-sizing: border-box;\n    text-align: center;\n    margin: auto auto 8px auto;\n  }\n\n  .login_with .or:before {\n    content: \"\";\n    position: absolute;\n    top: 10px;\n    left: 0;\n    width: 78%;\n    height: 1px;\n    background: #bfbfbf;\n  }\n\n  .submit_button_box {\n    position: absolute;\n    top: 154%;\n    right: 9%;\n    box-sizing: border-box;\n  }\n\n  .header_area {\n    padding: 64px 0 20px;\n  }\n}\n@media (max-width: 410px) {\n  .submit_button_box {\n    position: absolute;\n    top: 72%;\n    right: 9%;\n    box-sizing: border-box;\n  }\n\n  .login_area {\n    width: 100%;\n    height: auto;\n  }\n\n  .login_body {\n    margin: 68px 0 30px;\n  }\n}\n@media (max-width: 375px) {\n  .submit_button_box {\n    position: absolute;\n    top: 160%;\n    right: 9%;\n    box-sizing: border-box;\n  }\n\n  .login_area {\n    width: 100%;\n    height: 100vh;\n  }\n\n  .login_body {\n    margin: 68px 0 30px;\n  }\n\n  .login_area::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-position: top right;\n  }\n\n  .header_area {\n    padding: 62px 0 20px;\n  }\n}\n@media (max-width: 360px) {\n  .login_area {\n    width: 100%;\n    height: 100vh;\n  }\n\n  .submit_button_box {\n    top: 148%;\n    right: 9%;\n  }\n\n  .login_with {\n    margin-top: 150px;\n  }\n\n  .login_with .or {\n    width: 90%;\n    position: relative;\n    box-sizing: border-box;\n    text-align: center;\n    margin: auto auto 8px auto;\n  }\n\n  .login_with .or:before {\n    content: \"\";\n    position: absolute;\n    top: 10px;\n    left: 0;\n    width: 74%;\n    height: 1px;\n    background: #bfbfbf;\n  }\n}\n@media (max-width: 320px) {\n  .header_area {\n    width: 100%;\n    box-sizing: border-box;\n    z-index: 91;\n    padding: 34px 0 20px;\n    margin: 0px 0 0px;\n  }\n\n  .login_area {\n    width: 100%;\n    height: auto;\n  }\n\n  .submit_button_box {\n    top: 134%;\n    right: 9%;\n  }\n\n  .login_with .or:before {\n    content: \"\";\n    position: absolute;\n    top: 10px;\n    left: 0;\n    width: 88%;\n    height: 1px;\n    background: #bfbfbf;\n  }\n}\n.nav_bar {\n  float: left;\n  background: transparent;\n  color: #fff;\n  padding: 0 0;\n  margin: 0 0;\n  border: none;\n  /*margin-right: 12px;*/\n  font-size: 24px;\n  margin-top: 3px;\n  outline: none;\n  margin-top: 30px;\n  position: relative;\n  z-index: 99;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx5RkFBQTtBQUNBLCtIQUFBO0FBQ0EscU1BQUE7QUFDUjtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUVBO0VBQ0ksc0JBQUE7QUFDSjtBQUNBO0VBQXdCLHFDQUFBO0FBR3hCO0FBRkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUtKO0FBSEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUtKO0FBSEE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxVQUFBO0FBTUY7QUFKQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBT0Y7QUFMQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFRSjtBQU5BO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVNGO0FBUEE7RUFDRSxVQUFBO0VBQ0Esc0JBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQVNGO0FBUEE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVVGO0FBUkE7RUFDRSxVQUFBO0FBV0Y7QUFUQTtFQUNFLFVBQUE7QUFZRjtBQVZBO0VBQ0UsVUFBQTtBQWFGO0FBWEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFD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ZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQWlDSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTQuMC9jc3MvYWxsLm1pbi5jc3MnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGVyaWFsLWRlc2lnbi1pY29uaWMtZm9udC8yLjIuMC9jc3MvbWF0ZXJpYWwtZGVzaWduLWljb25pYy1mb250Lm1pbi5jc3MnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XHJcbmh0bWwsIGJvZHkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OjE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxufVxyXG4qLCA6OmFmdGVyLCA6OmJlZm9yZSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDZ7IGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7fVxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5sb2dpbl9hcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcbi5sb2dpbl9hcmVhOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbi1iZzEucG5nKTtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMHB4IDI0cHg7XHJcbn1cclxuLmhlYWRlcl9hcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDkxO1xyXG4gICAgcGFkZGluZzogNjBweCAwIDIwcHg7XHJcbiAgICBtYXJnaW46IDBweCAwIDBweDtcclxufVxyXG4uaGVhZGVyX2FyZWEgaDF7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIDAgMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxvZ2luX2JvZHkge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuIFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIG1hcmdpbjogNjhweCAwIDMwcHg7XHJcbn1cclxuLmZvcm0tZ3JvdXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uZm9ybS1ncm91cC5waG9uZSB7XHJcbiAgd2lkdGg6IDgzJTtcclxufVxyXG4uZm9ybS1ncm91cC5QYXNzd29yZCB7XHJcbiAgd2lkdGg6IDUzJTtcclxufVxyXG4uZm9ybS1ncm91cC5Db25maXJtIHtcclxuICB3aWR0aDogNzIlO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDJweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ZThlOGQ4MjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXJ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5pbnB1dDpmb2N1cyB7ICAgXHJcbiAgYm9yZGVyLWNvbG9yOiBub25lO1xyXG4gIGJveC1zaGFkb3c6bm9uZTtcclxuICBvdXRsaW5lOiAwIG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmJ0bi1saW5rIHtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMHB4IDA7XHJcbiAgICBjb2xvcjogIzczNzM3MztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmJ0bi1saW5rOmhvdmVyeyBjb2xvcjogIzAwMDsgfVxyXG4uc3VibWl0X2J1dHRvbl9ib3gge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDY2JTtcclxuICByaWdodDogOSU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uYnRuIHtcclxuICBwYWRkaW5nOiA2cHggMjVweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgY29sb3I6ICNkYzQ4MjQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmxvZ2luX3dpdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBtYXJnaW4tdG9wOiA2NnB4O1xyXG59XHJcbi5sb2dpbl93aXRoIC5vciB7XHJcbiAgICB3aWR0aDogODMlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0byBhdXRvIDE1cHggYXV0bztcclxufVxyXG4ubG9naW5fd2l0aCAub3Igc3Ryb25ne1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO3otaW5kZXg6IDE7XHJcbn1cclxuLmxvZ2luX3dpdGggLm9yOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2JmYmZiZjtcclxufVxyXG4ubG9naW5fd2l0aCBoMyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjNzk3OTc5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sb2dpbl93aXRoIHVse1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMCAwO1xyXG4gIG1hcmdpbjogMCAwIDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sb2dpbl93aXRoIHVsIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAycHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWF4LXdpZHRoOiAzNHB4O1xyXG59XHJcbi5sb2dpbl93aXRoIHB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwIDA7XHJcbiAgbWFyZ2luOiAwIDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sb2dpbl93aXRoIC5idG4tbGlua3tcclxuICBjb2xvcjogI2U1NGIyNTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDQ3OXB4KSB7XHJcbi5zdWJtaXRfYnV0dG9uX2JveCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDc3JTtcclxuICAgIHJpZ2h0OiA5JTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmxvZ2luX2FyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgIFxyXG59XHJcbi5mb3JtLWdyb3VwLnBob25lIHtcclxuICB3aWR0aDogODMlO1xyXG59XHJcbi5mb3JtLWdyb3VwLlBhc3N3b3JkIHtcclxuICB3aWR0aDogNTMlO1xyXG59XHJcbi5mb3JtLWdyb3VwLkNvbmZpcm0ge1xyXG4gICAgd2lkdGg6IDYxJTtcclxufVxyXG4ubG9naW5fYm9keSB7XHJcbiAgICBcclxuICAgIG1hcmdpbjogMTEzcHggMCAzMHB4O1xyXG59XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo0MTRweCkge1xyXG4uaGVhZGVyX2FyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICBcclxuICAgIHotaW5kZXg6IDkxO1xyXG4gICAgcGFkZGluZzogMzRweCAwIDIwcHg7XHJcbiAgICBtYXJnaW46IDBweCAwIDBweDtcclxufVxyXG4ubG9naW5fYXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uc3VibWl0X2J1dHRvbl9ib3gge1xyXG4gICAgdG9wOiAxODAlO1xyXG4gICAgcmlnaHQ6IDklO1xyXG59XHJcbi5sb2dpbl93aXRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICBcclxuICAgIG1hcmdpbi10b3A6IDIxM3B4O1xyXG59XHJcbi5sb2dpbl93aXRoIC5vcjpiZWZvcmUge1xyXG4gICBcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgIFxyXG59XHJcblxyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6NDExcHgpIHtcclxuXHJcbi5sb2dpbl93aXRoIHtcclxuICAgIFxyXG4gICAgbWFyZ2luLXRvcDogMTgwcHg7XHJcbn1cclxuLmxvZ2luX3dpdGggLm9yIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvIGF1dG8gOHB4IGF1dG87XHJcbn1cclxuLmxvZ2luX3dpdGggLm9yOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNzglO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYmZiZmJmO1xyXG59XHJcbi5zdWJtaXRfYnV0dG9uX2JveCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1NCU7XHJcbiAgICByaWdodDogOSU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5oZWFkZXJfYXJlYSB7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDY0cHggMCAyMHB4O1xyXG4gICBcclxufVxyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6NDEwcHgpIHtcclxuLnN1Ym1pdF9idXR0b25fYm94IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3MiU7XHJcbiAgcmlnaHQ6IDklO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmxvZ2luX2FyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgIFxyXG59XHJcbi5sb2dpbl9ib2R5IHtcclxuIFxyXG4gIG1hcmdpbjogNjhweCAwIDMwcHg7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDozNzVweCkge1xyXG4uc3VibWl0X2J1dHRvbl9ib3gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNjAlO1xyXG4gICAgcmlnaHQ6IDklO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4ubG9naW5fYXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLmxvZ2luX2JvZHkge1xyXG4gXHJcbiAgbWFyZ2luOiA2OHB4IDAgMzBweDtcclxufVxyXG5cclxuLmxvZ2luX2FyZWE6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcclxuICAgXHJcbn1cclxuLmhlYWRlcl9hcmVhIHtcclxuICAgXHJcbiAgICBwYWRkaW5nOiA2MnB4IDAgMjBweDtcclxuICAgXHJcbn1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDozNjBweCkge1xyXG4ubG9naW5fYXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDoxMDB2aDtcclxufVxyXG4uc3VibWl0X2J1dHRvbl9ib3gge1xyXG4gICAgdG9wOiAxNDglO1xyXG4gICAgcmlnaHQ6IDklO1xyXG59XHJcbi5sb2dpbl93aXRoIHtcclxuICAgIFxyXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbn1cclxuLmxvZ2luX3dpdGggLm9yIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvIGF1dG8gOHB4IGF1dG87XHJcbn1cclxuLmxvZ2luX3dpdGggLm9yOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNzQlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYmZiZmJmO1xyXG59XHJcblxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjMyMHB4KSB7XHJcbi5oZWFkZXJfYXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBcclxuICAgIHotaW5kZXg6IDkxO1xyXG4gICAgcGFkZGluZzogMzRweCAwIDIwcHg7XHJcbiAgICBtYXJnaW46IDBweCAwIDBweDtcclxufVxyXG4ubG9naW5fYXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4uc3VibWl0X2J1dHRvbl9ib3gge1xyXG4gICAgdG9wOiAxMzQlO1xyXG4gICAgcmlnaHQ6IDklO1xyXG59XHJcbi5sb2dpbl93aXRoIC5vcjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDg4JTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2JmYmZiZjtcclxufVxyXG59XHJcblxyXG4ubmF2X2JhciB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIC8qbWFyZ2luLXJpZ2h0OiAxMnB4OyovXHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map