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
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n    <div class=\"login_area\">\n      <div class=\"container\">\n       <!--  <button class=\"btn-back\"  routerLink=\"/home\" (click)=\"storePage('/hose-page/4')\"><img src=\"assets/images/back.png\" alt=\"back\" title=\"\" /></button> -->\n         <button routerLink=\"/sidebar\" class=\"nav_bar\" (click)=\"back()\"><i class='fas fa-arrow-left'></i></button>\n          <div class=\"header_area\">\n              <h1>register</h1>\n          </div>\n          <div class=\"login_body\">\n              <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n              <div class=\"form-group\">\n                   <input type=\"text\" placeholder=\"Email\" class=\"form-control\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n              <div class=\"form-group phone\">\n                 <input type=\"text\" class=\"form-control\" placeholder=\"Phone\" [(ngModel)]=\"phone\" [ngModelOptions]=\"{standalone: true}\" maxlength=\"10\" (keypress)=\"onlyNumberKey($event)\" maxlength=\"12\">\n              </div>\n              <div class=\"form-group Password\">\n                  <input type=\"text\" class=\"form-control\" type=\"password\" placeholder=\"Password\" [(ngModel)]=\"pass\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n              <div class=\"form-group Confirm\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Confirm Password\" [(ngModel)]=\"confirmPassword\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n              <div class=\"submit_button_box\">\n                  <button class=\"btn\" (click)=\"register()\"><i class=\"zmdi zmdi-long-arrow-right\"></i></button>\n              </div>\n          </div>\n          <div class=\"login_with\">\n              <div class=\"or\"><strong>or</strong></div>\n              <h3>Login with social media</h3>\n              <ul>\n                  <li><img src=\"assets/images/facebook.png\" alt=\"facebook\" title=\"\" /></li>\n                  \n                  <li><img src=\"assets/images/google.png\" alt=\"google\" title=\"\" /></li>\n              </ul>\n              <p>Already have an account? <button class=\"btn-link\" routerLink=\"/login\">Login</button></p>\n          </div>\n      </div>\n    </div>\n  </ion-content>\n");

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
                this.navCtrl.navigateForward('/home');
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
            //  else if(this.address == '' || this.address == null){
            // loading.dismiss();
            // addressalrt.present();
            // }
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
    onlyNumberKey(event) {
        return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Montserrat\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.login_area {\n  width: 100%;\n  height: auto;\n  position: relative;\n  box-sizing: border-box;\n  overflow: scroll;\n  padding-bottom: 30px;\n}\n.login_area::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url('login-bg1.png');\n  z-index: 0;\n}\n.container {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 24px;\n}\n.header_area {\n  width: 100%;\n  box-sizing: border-box;\n  z-index: 91;\n  padding: 60px 0 20px;\n  margin: 0px 0 0px;\n}\n.header_area h1 {\n  width: 100%;\n  margin: 0 0 0;\n  color: #ffffff;\n  text-transform: capitalize;\n  font-size: 30px;\n  font-weight: 500;\n  text-align: center;\n}\n.login_body {\n  width: 90%;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n  margin: 68px 0 30px;\n}\n.form-group {\n  width: 100%;\n  box-sizing: border-box;\n  margin-bottom: 15px;\n}\n.form-group.phone {\n  width: 83%;\n}\n.form-group.Password {\n  width: 53%;\n}\n.form-group.Confirm {\n  width: 72%;\n}\n.form-control {\n  width: 100%;\n  height: 42px;\n  border: none;\n  border-bottom: 1px solid #8e8e8d82;\n  color: #000000;\n  font-size: 15px;\n  font-weight: 500;\n  outline: none;\n  background: transparent;\n  background-color: transparent;\n}\n.form-control::placeholder {\n  font-weight: 500;\n}\ninput:focus {\n  border-color: none;\n  box-shadow: none;\n  outline: 0 none;\n  background-color: transparent;\n}\n.btn-link {\n  padding: 0 0;\n  margin: 0 0;\n  color: #000000;\n  font-size: 15px;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  background-color: transparent;\n}\n.submit_button_box {\n  position: absolute;\n  top: 66%;\n  right: 9%;\n  box-sizing: border-box;\n}\n.btn {\n  padding: 6px 25px;\n  font-size: 30px;\n  box-sizing: border-box;\n  border: 1px solid #fff;\n  background: #ffffff;\n  color: #dc4824;\n  outline: none;\n  border-radius: 30px;\n  cursor: pointer;\n  border: none;\n}\n.btn:hover {\n  background-color: #000;\n  border: none;\n  color: #fff;\n}\n.login_with {\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  margin-top: 66px;\n}\n.login_with .or {\n  width: 83%;\n  position: relative;\n  box-sizing: border-box;\n  text-align: center;\n  margin: auto auto 15px auto;\n}\n.login_with .or strong {\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 500;\n  color: #000000;\n  padding: 0 5px;\n  background: #ffffff;\n  position: relative;\n  z-index: 1;\n}\n.login_with .or:before {\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: #bfbfbf;\n}\n.login_with h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 20px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #797979;\n  text-align: center;\n}\n.login_with ul {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 15px;\n  text-align: center;\n}\n.login_with ul li {\n  display: inline-block;\n  padding: 0 0;\n  margin: 0 2px;\n  vertical-align: middle;\n  max-width: 34px;\n}\n.login_with p {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  font-size: 13px;\n  font-weight: 500;\n  color: #000000;\n  text-align: center;\n}\n.login_with .btn-link {\n  color: #e54b25;\n  text-decoration: underline;\n}\n@media (max-width: 479px) {\n  .submit_button_box {\n    position: absolute;\n    top: 77%;\n    right: 9%;\n    box-sizing: border-box;\n  }\n\n  .login_area {\n    width: 100%;\n    height: 100%;\n  }\n\n  .form-group.phone {\n    width: 83%;\n  }\n\n  .form-group.Password {\n    width: 53%;\n  }\n\n  .form-group.Confirm {\n    width: 61%;\n  }\n\n  .login_body {\n    margin: 113px 0 30px;\n  }\n}\n@media (max-width: 414px) {\n  .login_with .or {\n    width: 63%;\n    position: relative;\n    box-sizing: border-box;\n    text-align: center;\n    margin: auto auto 8px auto;\n  }\n}\n@media (max-width: 411px) {\n  .login_with .or {\n    width: 66%;\n    position: relative;\n    box-sizing: border-box;\n    text-align: center;\n    margin: auto auto 8px auto;\n  }\n}\n@media (max-width: 410px) {\n  .submit_button_box {\n    position: absolute;\n    top: 72%;\n    right: 9%;\n    box-sizing: border-box;\n  }\n\n  .login_area {\n    width: 100%;\n    height: auto;\n  }\n\n  .login_body {\n    margin: 68px 0 30px;\n  }\n}\n@media (max-width: 375px) {\n  .submit_button_box {\n    position: absolute;\n    top: 77%;\n    right: 9%;\n    box-sizing: border-box;\n  }\n\n  .login_area {\n    width: 100%;\n    height: auto;\n  }\n\n  .login_body {\n    margin: 68px 0 30px;\n  }\n\n  .form-group.Confirm {\n    width: 60%;\n  }\n\n  .login_area::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-position: top right;\n  }\n}\n@media (max-width: 360px) {\n  .login_area {\n    width: 100%;\n    height: auto;\n  }\n\n  .submit_button_box {\n    top: 72%;\n    right: 9%;\n  }\n\n  .form-group.Confirm {\n    width: 70%;\n  }\n\n  .login_with .or {\n    width: 83%;\n    position: relative;\n    box-sizing: border-box;\n    text-align: center;\n    margin: auto auto 8px auto;\n  }\n}\n.nav_bar {\n  float: left;\n  background: transparent;\n  color: #fff;\n  padding: 0 0;\n  margin: 0 0;\n  border: none;\n  margin-right: 12px;\n  font-size: 24px;\n  margin-top: 3px;\n  outline: none;\n  margin-top: 30px;\n  position: relative;\n  z-index: 91;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx5RkFBQTtBQUNBLCtIQUFBO0FBQ0EscU1BQUE7QUFDUjtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUVBO0VBQ0ksc0JBQUE7QUFDSjtBQUNBO0VBQXdCLHFDQUFBO0FBR3hCO0FBRkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUtKO0FBSEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBTUo7QUFKQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLFVBQUE7QUFPRjtBQUxBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFRRjtBQU5BO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBRUEsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFRSjtBQU5BO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVNGO0FBUEE7RUFDRSxVQUFBO0VBQ0Esc0JBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQVNGO0FBUEE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVVGO0FBUkE7RUFDRSxVQUFBO0FBV0Y7QUFUQTtFQUNFLFVBQUE7QUFZRjtBQVZBO0VBQ0UsVUFBQTtBQWFGO0FBWEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7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NUJBO0VBQ0E7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQThCRjs7RUE1QkY7SUFFSSxRQUFBO0lBQ0EsU0FBQTtFQThCRjs7RUEzQkY7SUFDSSxVQUFBO0VBOEJGOztFQTVCRjtJQUNJLFVBQUE7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSwwQkFBQTtFQStCRjtBQUNGO0FBM0JBO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUE2QkoiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE0LjAvY3NzL2FsbC5taW4uY3NzJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQvMi4yLjAvY3NzL21hdGVyaWFsLWRlc2lnbi1pY29uaWMtZm9udC5taW4uY3NzJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5odG1sLCBib2R5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgei1pbmRleDoxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbn1cclxuKiwgOjphZnRlciwgOjpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2eyBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO31cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4ubG9naW5fYXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuLmxvZ2luX2FyZWE6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luLWJnMS5wbmcpO1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwcHggMjRweDtcclxufVxyXG4uaGVhZGVyX2FyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIFxyXG4gICAgei1pbmRleDogOTE7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDAgMjBweDtcclxuICAgIG1hcmdpbjogMHB4IDAgMHB4O1xyXG59XHJcbi5oZWFkZXJfYXJlYSBoMXtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgMCAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubG9naW5fYm9keSB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbWFyZ2luOiA2OHB4IDAgMzBweDtcclxufVxyXG4uZm9ybS1ncm91cCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5mb3JtLWdyb3VwLnBob25lIHtcclxuICB3aWR0aDogODMlO1xyXG59XHJcbi5mb3JtLWdyb3VwLlBhc3N3b3JkIHtcclxuICB3aWR0aDogNTMlO1xyXG59XHJcbi5mb3JtLWdyb3VwLkNvbmZpcm0ge1xyXG4gIHdpZHRoOiA3MiU7XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzhlOGU4ZDgyO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlcntcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbmlucHV0OmZvY3VzIHsgICBcclxuICBib3JkZXItY29sb3I6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzpub25lO1xyXG4gIG91dGxpbmU6IDAgbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uYnRuLWxpbmsge1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnN1Ym1pdF9idXR0b25fYm94IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA2NiU7XHJcbiAgcmlnaHQ6IDklO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmJ0biB7XHJcbiAgcGFkZGluZzogNnB4IDI1cHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGNvbG9yOiAjZGM0ODI0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5sb2dpbl93aXRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luLXRvcDogNjZweDtcclxufVxyXG4ubG9naW5fd2l0aCAub3Ige1xyXG4gICAgd2lkdGg6IDgzJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG8gYXV0byAxNXB4IGF1dG87XHJcbn1cclxuLmxvZ2luX3dpdGggLm9yIHN0cm9uZ3tcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTt6LWluZGV4OiAxO1xyXG59XHJcbi5sb2dpbl93aXRoIC5vcjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcbn1cclxuLmxvZ2luX3dpdGggaDMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzc5Nzk3OTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubG9naW5fd2l0aCB1bHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDAgMDtcclxuICBtYXJnaW46IDAgMCAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubG9naW5fd2l0aCB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1heC13aWR0aDogMzRweDtcclxufVxyXG4ubG9naW5fd2l0aCBwe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMCAwO1xyXG4gIG1hcmdpbjogMCAwO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubG9naW5fd2l0aCAuYnRuLWxpbmt7XHJcbiAgY29sb3I6ICNlNTRiMjU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA0NzlweCkge1xyXG4uc3VibWl0X2J1dHRvbl9ib3gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3NyU7XHJcbiAgICByaWdodDogOSU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5sb2dpbl9hcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICBcclxufVxyXG4uZm9ybS1ncm91cC5waG9uZSB7XHJcbiAgd2lkdGg6IDgzJTtcclxufVxyXG4uZm9ybS1ncm91cC5QYXNzd29yZCB7XHJcbiAgd2lkdGg6IDUzJTtcclxufVxyXG4uZm9ybS1ncm91cC5Db25maXJtIHtcclxuICAgIHdpZHRoOiA2MSU7XHJcbn1cclxuLmxvZ2luX2JvZHkge1xyXG4gICAgXHJcbiAgICBtYXJnaW46IDExM3B4IDAgMzBweDtcclxufVxyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6NDE0cHgpIHtcclxuXHJcbi5sb2dpbl93aXRoIC5vciB7XHJcbiAgICB3aWR0aDogNjMlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0byBhdXRvIDhweCBhdXRvO1xyXG59XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo0MTFweCkge1xyXG5cclxuLmxvZ2luX3dpdGggLm9yIHtcclxuICAgIHdpZHRoOiA2NiU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvIGF1dG8gOHB4IGF1dG87XHJcbn1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjQxMHB4KSB7XHJcbi5zdWJtaXRfYnV0dG9uX2JveCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNzIlO1xyXG4gIHJpZ2h0OiA5JTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5sb2dpbl9hcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICBcclxufVxyXG4ubG9naW5fYm9keSB7XHJcbiBcclxuICBtYXJnaW46IDY4cHggMCAzMHB4O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6Mzc1cHgpIHtcclxuLnN1Ym1pdF9idXR0b25fYm94IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3NyU7XHJcbiAgcmlnaHQ6IDklO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmxvZ2luX2FyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmxvZ2luX2JvZHkge1xyXG4gXHJcbiAgbWFyZ2luOiA2OHB4IDAgMzBweDtcclxufVxyXG4uZm9ybS1ncm91cC5Db25maXJtIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuLmxvZ2luX2FyZWE6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcclxuICAgXHJcbn1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDozNjBweCkge1xyXG4ubG9naW5fYXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDphdXRvO1xyXG59XHJcbi5zdWJtaXRfYnV0dG9uX2JveCB7XHJcbiAgICBcclxuICAgIHRvcDogNzIlO1xyXG4gICAgcmlnaHQ6IDklO1xyXG4gIFxyXG59XHJcbi5mb3JtLWdyb3VwLkNvbmZpcm0ge1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG4ubG9naW5fd2l0aCAub3Ige1xyXG4gICAgd2lkdGg6IDgzJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG8gYXV0byA4cHggYXV0bztcclxufVxyXG59XHJcblxyXG5cclxuLm5hdl9iYXIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDkxO1xyXG59Il19 */");

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