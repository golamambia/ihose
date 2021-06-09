(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "2t07":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "b0Bx");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "UgDh":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n\n\n    <div class=\"login_main_area\">\n      <div class=\"container\">\n        <button class=\"nav_bar\" (click)=\"back()\"><i class='fas fa-arrow-left'></i></button>\n        <div class=\"login_body_area\">\n          <div class=\"logo\"><img src=\"assets/images/logo.png\" alt=\"logo\" title=\"\"></div>\n          <div class=\"login_body\">\n            <h1>Fill the Below information to Sign In</h1>\n            <div class=\"login_box\">\n              <h2>Create account</h2>\n              <div class=\"form-group\">\n                <div class=\"icon\"><img src=\"assets/images/icon5.png\" alt=\"icon\" title=\"\"></div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n              <div class=\"form-group\">\n                <div class=\"icon\"><img src=\"assets/images/icon5.png\" alt=\"icon\" title=\"\"></div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Phone\" [(ngModel)]=\"phone\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n              <div class=\"form-group\">\n                <div class=\"icon\"><img src=\"assets/images/icon5.png\" alt=\"icon\" title=\"\"></div>\n                <input type=\"text\" placeholder=\"Email\" class=\"form-control\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n              <div class=\"form-group\">\n                <div class=\"icon\"><img src=\"assets/images/icon6.png\" alt=\"icon\" title=\"\"></div>\n                <input type=\"text\" class=\"form-control\" type=\"password\" placeholder=\"Password\" [(ngModel)]=\"pass\" [ngModelOptions]=\"{standalone: true}\">\n               \n              </div>\n              <div class=\"form-group\">\n                <div class=\"icon\"><img src=\"assets/images/icon6.png\" alt=\"icon\" title=\"\"></div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Confirm Password\" [(ngModel)]=\"confirmPassword\" [ngModelOptions]=\"{standalone: true}\">\n                \n              </div>\n              <div class=\"form-group\">\n                <div class=\"icon\"><img src=\"assets/images/icon5.png\" alt=\"icon\" title=\"\"></div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Address\" [(ngModel)]=\"address\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n\n                            <button class=\"btn\" (click)=\"register()\"> Sign up</button>\n              <h4><span>or</span></h4>\n              <ul>\n                <li><a href=\"#\"><img src=\"assets/images/facebook.png\" alt=\"facebook\" title=\"\"></a></li>\n                <li><a href=\"#\"><img src=\"assets/images/google-plus.png\" alt=\"google plus\" title=\"\"></a></li>\n              </ul>\n            </div>\n            <div class=\"register_box\">\n              <h5>Already have an account? </h5>\n              <button class=\"btn-link\" routerLink=\"/login\">Login</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n  \n</ion-content>\n");

/***/ }),

/***/ "b0Bx":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "UgDh");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "x/mg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "e8h1");









let RegisterPage = class RegisterPage {
    constructor(http, navCtrl, storage, loadingController, alertController) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.appUrl = "https://theitvibe.com/project/ihose/api/registration";
    }
    ngOnInit() {
    }
    back() {
        this.storage.get("goTo").then(val => {
            if (val) {
                this.page = val;
                this.navCtrl.navigateForward('' + this.page);
            }
            else {
                this.navCtrl.navigateForward('/');
            }
        });
        //this.location.back();
    }
    register() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Checking...'
            });
            const alert = yield this.alertController.create({
                message: 'Username and Password is wrong',
                buttons: ['OK']
            });
            const namealrt = yield this.alertController.create({
                message: 'Please enter name',
                buttons: ['OK']
            });
            const passalrt = yield this.alertController.create({
                message: 'Please enter password',
                buttons: ['OK']
            });
            const emailalrt = yield this.alertController.create({
                message: 'Please enter email',
                buttons: ['OK']
            });
            const conpassalrt = yield this.alertController.create({
                message: 'Please enter confirm password',
                buttons: ['OK']
            });
            const phonealrt = yield this.alertController.create({
                message: 'Please enter phone no',
                buttons: ['OK']
            });
            const addressalrt = yield this.alertController.create({
                message: 'Please enter address',
                buttons: ['OK']
            });
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
            if (this.name == '' || this.name == null) {
                loading.dismiss();
                namealrt.present();
            }
            else if (this.phone == '' || this.phone == null) {
                loading.dismiss();
                phonealrt.present();
            }
            else if (this.email == '' || this.email == null) {
                loading.dismiss();
                emailalrt.present();
            }
            else if (this.pass == '' || this.pass == null) {
                loading.dismiss();
                passalrt.present();
            }
            else if (this.confirmPassword == '' || this.confirmPassword == null) {
                loading.dismiss();
                conpassalrt.present();
            }
            else if (this.address == '' || this.address == null) {
                loading.dismiss();
                addressalrt.present();
            }
            else {
                yield loading.present();
                var data = {
                    "name": this.name,
                    "email": this.email,
                    "phone": this.phone,
                    "address": this.address,
                    "pass": this.pass,
                    "confirmPassword": this.confirmPassword,
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
                        this.navCtrl.navigateForward('login');
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
RegisterPage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPage);



/***/ }),

/***/ "x/mg":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Oswald\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.container {\n  box-sizing: border-box;\n  padding: 0px 30px;\n  width: 100%;\n}\n.w-100 {\n  width: 100%;\n  box-sizing: border-box;\n}\n/*------ login css start -----*/\n.login_main_area {\n  width: 100%;\n  height: 100vh;\n  box-sizing: border-box;\n  position: relative;\n}\n.login_main_area:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 524px;\n  background-image: url('bg2.png');\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: top;\n}\n.login_main_area .login_body_area {\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 9;\n  padding: 60px 0 50px;\n}\n.login_main_area .login_body_area .logo {\n  width: 100%;\n  box-sizing: border-box;\n  max-width: 180px;\n  margin: 0 auto 0;\n}\n.login_main_area .login_body_area .logo img {\n  width: 100%;\n  box-sizing: border-box;\n  object-fit: cover;\n}\n.login_main_area .login_body_area .login_body {\n  width: 100%;\n  box-sizing: border-box;\n}\n.login_main_area .login_body_area .login_body h1 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 20px;\n  color: #fff;\n  text-align: center;\n  font-size: 16px;\n  font-weight: 400;\n}\n.login_main_area .login_body_area .login_body .login_box {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 25px 25px;\n  background: #fff;\n  border-radius: 30px;\n  box-shadow: 0 8px 10px rgba(158, 158, 158, 0.3);\n  margin-bottom: 20px;\n}\n.login_main_area .login_body_area .login_body .login_box h2 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 15px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #000;\n  font-size: 24px;\n  font-weight: 400;\n}\n.login_main_area .login_body_area .login_body .login_box .form-group {\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  margin-bottom: 15px;\n}\n.login_main_area .login_body_area .login_body .login_box .form-group .icon {\n  content: \"\";\n  position: absolute;\n  top: 8px;\n  left: 15px;\n  width: 16px;\n}\n.login_main_area .login_body_area .login_body .login_box .form-group .icon img {\n  width: 100%;\n  object-fit: cover;\n}\n.login_main_area .login_body_area .login_body .login_box .form-control {\n  width: 100%;\n  height: 40px;\n  border: 1px solid #000;\n  background: transparent;\n  color: #000;\n  font-size: 14px;\n  padding: 10px 10px 10px 38px;\n  border-radius: 30px;\n  outline: none;\n}\n.login_main_area .login_body_area .login_body .login_box .form-group .btn-password {\n  content: \"\";\n  position: absolute;\n  top: 9px;\n  right: 15px;\n  color: #383737;\n  font-size: 20px;\n  background: transparent;\n  border: none;\n  padding: 0 0;\n}\n.login_main_area .login_body_area .login_body .login_box .btn-forgot-password {\n  background: transparent;\n  outline: none;\n  border: none;\n  padding: 0 0;\n  color: #114fc2;\n  font-size: 18px;\n  cursor: pointer;\n  font-family: \"Oswald\", sans-serif;\n  margin-bottom: 15px;\n}\n.login_main_area .login_body_area .login_body .login_box .btn {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 20px;\n  font-size: 17px;\n  font-weight: 600;\n  text-transform: uppercase;\n  border: 1px solid #eb9929;\n  background: #eb9929;\n  color: #fff;\n  border-radius: 30px;\n  outline: none;\n  background-position: center;\n  transition: background 0.8s;\n}\n.login_main_area .login_body_area .login_body .login_box .btn:hover {\n  background: #eb9929 radial-gradient(circle, transparent 1%, #ffbd64 1%) center/15000%;\n}\n.login_main_area .login_body_area .login_body .login_box .btn:active {\n  background-color: #eb9929;\n  background-size: 100%;\n  transition: background 0s;\n}\n.login_main_area .login_body_area .login_body .login_box h4 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 40px 0;\n  border-top: 1px solid #d4d4d4;\n  position: relative;\n}\n.login_main_area .login_body_area .login_body .login_box h4 span {\n  content: \"\";\n  position: absolute;\n  top: -15px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  background: #dedede;\n  color: #000;\n  display: inline-block;\n  width: 32px;\n  text-align: center;\n  padding: 2px 0px;\n  height: 28px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  border-radius: 5px;\n}\n.login_main_area .login_body_area .login_body .login_box ul {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  list-style: none;\n  text-align: center;\n}\n.login_main_area .login_body_area .login_body .login_box ul li {\n  display: inline-block;\n  margin-right: 8px;\n}\n.login_main_area .login_body_area .login_body .login_box ul li:last-child {\n  margin-right: 0px;\n}\n.login_main_area .login_body_area .login_body .login_box ul li a {\n  display: inline-block;\n}\n.login_main_area .login_body_area .login_body .register_box {\n  width: 100%;\n  box-sizing: border-box;\n  text-align: center;\n}\n.login_main_area .login_body_area .login_body .register_box h5 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 0px;\n  color: #000;\n  font-size: 20px;\n  font-weight: 500;\n}\n.login_main_area .login_body_area .login_body .register_box .btn-link {\n  border: none;\n  background: transparent;\n  outline: none;\n  color: #114fc2;\n  font-size: 18px;\n  text-transform: uppercase;\n  font-family: \"Oswald\", sans-serif;\n}\n/*------ login css stop -----*/\n.nav_bar {\n  float: left;\n  background: transparent;\n  color: #fff;\n  padding: 0 0;\n  margin: 0 0;\n  border: none;\n  margin-right: 12px;\n  font-size: 24px;\n  margin-top: 3px;\n  outline: none;\n  margin-top: 30px;\n  position: relative;\n  z-index: 91;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx5RkFBQTtBQUNBLCtIQUFBO0FBQ0Esa01BQUE7QUFDQSx3R0FBQTtBQUNSO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDSCxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQUNEO0FBRUE7RUFDSSxzQkFBQTtBQUNKO0FBQ0E7RUFBdUIsaUNBQUE7QUFHdkI7QUFGQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBS0o7QUFIQTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBTUo7QUFKQTtFQUFPLFdBQUE7RUFBWSxzQkFBQTtBQVNuQjtBQVJBLCtCQUFBO0FBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFVSjtBQVJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0FBV0o7QUFUQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBWUo7QUFWQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFhSjtBQVhBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFjSjtBQVpBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0FBZUo7QUFiQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWdCSjtBQWRBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtBQWlCSjtBQWZBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFrQko7QUFoQkE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBbUJKO0FBakJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBb0JKO0FBbEJBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBcUJKO0FBbkJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQXNCSjtBQXBCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBdUJKO0FBckJBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0FBd0JKO0FBdEJBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQXlCSjtBQXZCQTtFQUNFLHFGQUFBO0FBMEJGO0FBeEJBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBMkJGO0FBekJBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBNEJKO0FBMUJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQTZCSjtBQTNCQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQThCSjtBQTVCQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUErQko7QUE3QkE7RUFDSSxpQkFBQTtBQWdDSjtBQTlCQTtFQUNJLHFCQUFBO0FBaUNKO0FBL0JBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFrQ0o7QUFoQ0E7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFtQ0o7QUFqQ0E7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0FBb0NKO0FBbENBLDhCQUFBO0FBQ0E7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQXFDSiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTQuMC9jc3MvYWxsLm1pbi5jc3MnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGVyaWFsLWRlc2lnbi1pY29uaWMtZm9udC8yLjIuMC9jc3MvbWF0ZXJpYWwtZGVzaWduLWljb25pYy1mb250Lm1pbi5jc3MnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZDp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5odG1sLCBib2R5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHR6LWluZGV4OjE7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbn1cclxuKiwgOjphZnRlciwgOjpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2e2ZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjt9XHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi53LTEwMHt3aWR0aDogMTAwJTtib3gtc2l6aW5nOiBib3JkZXItYm94O31cclxuLyotLS0tLS0gbG9naW4gY3NzIHN0YXJ0IC0tLS0tKi9cclxuXHJcbi5sb2dpbl9tYWluX2FyZWF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5sb2dpbl9tYWluX2FyZWE6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MjRweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2JnMi5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxufVxyXG4ubG9naW5fbWFpbl9hcmVhIC5sb2dpbl9ib2R5X2FyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIHBhZGRpbmc6IDYwcHggMCA1MHB4O1xyXG59XHJcbi5sb2dpbl9tYWluX2FyZWEgLmxvZ2luX2JvZHlfYXJlYSAubG9nb3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1heC13aWR0aDogMTgwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAwO1xyXG59XHJcbi5sb2dpbl9tYWluX2FyZWEgLmxvZ2luX2JvZHlfYXJlYSAubG9nbyBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4ubG9naW5fbWFpbl9hcmVhIC5sb2dpbl9ib2R5X2FyZWEgLmxvZ2luX2JvZHl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmxvZ2luX21haW5fYXJlYSAubG9naW5fYm9keV9hcmVhIC5sb2dpbl9ib2R5IGgxIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLmxvZ2luX21haW5fYXJlYSAubG9naW5fYm9keV9hcmVhIC5sb2dpbl9ib2R5IC5sb2dpbl9ib3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMjVweCAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxMHB4IHJnYigxNTggMTU4IDE1OCAvIDMwJSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5sb2dpbl9tYWluX2FyZWEgLmxvZ2luX2JvZHlfYXJlYSAubG9naW5fYm9keSAubG9naW5fYm94IGgyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5sb2dpbl9tYWluX2FyZWEgLmxvZ2luX2JvZHlfYXJlYSAubG9naW5fYm9keSAubG9naW5fYm94IC5mb3JtLWdyb3Vwe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4ubG9naW5fbWFpbl9hcmVhIC5sb2dpbl9ib2R5X2FyZWEgLmxvZ2luX2JvZHkgLmxvZ2luX2JveCAuZm9ybS1ncm91cCAuaWNvbntcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbn1cclxuLmxvZ2luX21haW5fYXJlYSAubG9naW5fYm9keV9hcmVhIC5sb2dpbl9ib2R5IC5sb2dpbl9ib3ggLmZvcm0tZ3JvdXAgLmljb24gaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4ubG9naW5fbWFpbl9hcmVhIC5sb2dpbl9ib2R5X2FyZWEgLmxvZ2luX2JvZHkgLmxvZ2luX2JveCAuZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAzOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmxvZ2luX21haW5fYXJlYSAubG9naW5fYm9keV9hcmVhIC5sb2dpbl9ib2R5IC5sb2dpbl9ib3ggLmZvcm0tZ3JvdXAgLmJ0bi1wYXNzd29yZCB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBjb2xvcjogIzM4MzczNztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG59XHJcbi5sb2dpbl9tYWluX2FyZWEgLmxvZ2luX2JvZHlfYXJlYSAubG9naW5fYm9keSAubG9naW5fYm94IC5idG4tZm9yZ290LXBhc3N3b3JkIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIGNvbG9yOiAjMTE0ZmMyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4ubG9naW5fbWFpbl9hcmVhIC5sb2dpbl9ib2R5X2FyZWEgLmxvZ2luX2JvZHkgLmxvZ2luX2JveCAuYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ViOTkyOTtcclxuICAgIGJhY2tncm91bmQ6ICNlYjk5Mjk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjhzO1xyXG59XHJcbi5sb2dpbl9tYWluX2FyZWEgLmxvZ2luX2JvZHlfYXJlYSAubG9naW5fYm9keSAubG9naW5fYm94IC5idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlYjk5MjkgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgdHJhbnNwYXJlbnQgMSUsICNmZmJkNjQgMSUpIGNlbnRlci8xNTAwMCU7XHJcbn1cclxuLmxvZ2luX21haW5fYXJlYSAubG9naW5fYm9keV9hcmVhIC5sb2dpbl9ib2R5IC5sb2dpbl9ib3ggLmJ0bjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYjk5Mjk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMHM7XHJcbn1cclxuLmxvZ2luX21haW5fYXJlYSAubG9naW5fYm9keV9hcmVhIC5sb2dpbl9ib2R5IC5sb2dpbl9ib3ggaDQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiA0MHB4IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q0ZDRkNDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubG9naW5fbWFpbl9hcmVhIC5sb2dpbl9ib2R5X2FyZWEgLmxvZ2luX2JvZHkgLmxvZ2luX2JveCBoNCBzcGFuIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTVweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogI2RlZGVkZTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAycHggMHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmxvZ2luX21haW5fYXJlYSAubG9naW5fYm9keV9hcmVhIC5sb2dpbl9ib2R5IC5sb2dpbl9ib3ggdWx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxvZ2luX21haW5fYXJlYSAubG9naW5fYm9keV9hcmVhIC5sb2dpbl9ib2R5IC5sb2dpbl9ib3ggdWwgbGl7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG4ubG9naW5fbWFpbl9hcmVhIC5sb2dpbl9ib2R5X2FyZWEgLmxvZ2luX2JvZHkgLmxvZ2luX2JveCB1bCBsaTpsYXN0LWNoaWxke1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLmxvZ2luX21haW5fYXJlYSAubG9naW5fYm9keV9hcmVhIC5sb2dpbl9ib2R5IC5sb2dpbl9ib3ggdWwgbGkgYXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubG9naW5fbWFpbl9hcmVhIC5sb2dpbl9ib2R5X2FyZWEgLmxvZ2luX2JvZHkgLnJlZ2lzdGVyX2JveHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubG9naW5fbWFpbl9hcmVhIC5sb2dpbl9ib2R5X2FyZWEgLmxvZ2luX2JvZHkgLnJlZ2lzdGVyX2JveCBoNXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDBweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ubG9naW5fbWFpbl9hcmVhIC5sb2dpbl9ib2R5X2FyZWEgLmxvZ2luX2JvZHkgLnJlZ2lzdGVyX2JveCAuYnRuLWxpbmt7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzExNGZjMjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuLyotLS0tLS0gbG9naW4gY3NzIHN0b3AgLS0tLS0qL1xyXG4ubmF2X2JhciB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogOTE7XHJcbn0iXX0= */");

/***/ }),

/***/ "x5bZ":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "2t07");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "b0Bx");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map