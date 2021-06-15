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
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  \n    <div class=\"login_area\">\n      <div class=\"container\">\n        <button class=\"nav_bar\" (click)=\"back()\"><i class='fas fa-arrow-left'></i></button>\n          <div class=\"header_area\">\n              <h1>register</h1>\n          </div>\n          <div class=\"login_body\">\n              <div class=\"form-group\">\n                 <input type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n              <div class=\"form-group\">\n                   <input type=\"text\" class=\"form-control\" placeholder=\"Phone\" [(ngModel)]=\"phone\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n              <div class=\"form-group\">\n                  <input type=\"text\" placeholder=\"Email\" class=\"form-control\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n              <div class=\"form-group\">\n                 <input type=\"text\" class=\"form-control\" type=\"password\" placeholder=\"Password\" [(ngModel)]=\"pass\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n              <div class=\"form-group\">\n                 <input type=\"text\" class=\"form-control\" placeholder=\"Confirm Password\" [(ngModel)]=\"confirmPassword\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n              <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Address\" [(ngModel)]=\"address\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n              <div class=\"submit_button_box\">\n                  <button class=\"btn\" (click)=\"register()\"><i class=\"zmdi zmdi-long-arrow-right\"></i></button>\n              </div>\n          </div>\n          <div class=\"login_with\">\n              <div class=\"or\"><strong>or</strong></div>\n              <h3>Login with social media</h3>\n              <ul>\n                  <li><img src=\"assets/images/facebook.png\" alt=\"facebook\" title=\"\" /></li>\n                  <li><img src=\"assets/images/twitter.png\" alt=\"twitter\" title=\"\" /></li>\n                  <li><img src=\"assets/images/google.png\" alt=\"google\" title=\"\" /></li>\n              </ul>\n              <p>Don’t have an account? <button class=\"btn-link\" routerLink=\"/login\">Register</button></p>\n          </div>\n      </div>\n    </div>\n  \n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Montserrat\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.login_area {\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.login_area:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url('login-bg1.png');\n  z-index: 0;\n}\n.container {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 30px;\n}\n.header_area {\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n  padding: 30px 0;\n  margin: 0 0 70px;\n}\n.header_area h1 {\n  width: 100%;\n  margin: 0 0 0;\n  color: #ffffff;\n  text-transform: capitalize;\n  font-size: 30px;\n  font-weight: 500;\n  text-align: center;\n}\n.login_body {\n  width: 90%;\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  margin: 0 0 80px;\n}\n.form-group {\n  width: 100%;\n  box-sizing: border-box;\n  margin-bottom: 25px;\n}\n.form-control {\n  width: 100%;\n  height: 40px;\n  border: none;\n  border-bottom: 1px solid #8e8e8d;\n  color: #000000;\n  font-size: 15px;\n  font-weight: 500;\n  outline: none;\n  background: transparent;\n}\n.form-control::placeholder {\n  font-weight: 500;\n}\n.btn-link {\n  padding: 0 0;\n  margin: 0 0;\n  color: #000000;\n  font-size: 15px;\n  font-weight: 500;\n  outline: none;\n  border: none;\n}\n.submit_button_box {\n  position: absolute;\n  top: 74%;\n  right: 15%;\n  box-sizing: border-box;\n}\n.btn {\n  padding: 6px 25px;\n  font-size: 30px;\n  box-sizing: border-box;\n  border: 1px solid #fff;\n  background: #ffffff;\n  color: #dc4824;\n  outline: none;\n  border-radius: 30px;\n}\n.login_with {\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\n.login_with .or {\n  width: 100%;\n  position: relative;\n  box-sizing: border-box;\n  text-align: center;\n  margin: 0 0 10px;\n}\n.login_with .or strong {\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 500;\n  color: #000000;\n  padding: 0 5px;\n  background: #ffffff;\n  position: relative;\n  z-index: 1;\n}\n.login_with .or:before {\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: #bfbfbf;\n}\n.login_with h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 10px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #797979;\n  text-align: center;\n}\n.login_with ul {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 15px;\n  text-align: center;\n}\n.login_with ul li {\n  display: inline-block;\n  padding: 0 0;\n  margin: 0 0 0 0;\n}\n.login_with p {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  font-size: 13px;\n  font-weight: 500;\n  color: #000000;\n  text-align: center;\n}\n.login_with .btn-link {\n  color: #e54b25;\n  text-decoration: underline;\n}\n/*------ login css stop -----*/\n.nav_bar {\n  float: left;\n  background: transparent;\n  color: #fff;\n  padding: 0 0;\n  margin: 0 0;\n  border: none;\n  margin-right: 12px;\n  font-size: 24px;\n  margin-top: 3px;\n  outline: none;\n  margin-top: 30px;\n  position: relative;\n  z-index: 91;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx5RkFBQTtBQUNBLCtIQUFBO0FBQ0EscU1BQUE7QUFDUjtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUVBO0VBQ0ksc0JBQUE7QUFDSjtBQUNBO0VBQXdCLHFDQUFBO0FBR3hCO0FBRkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUtKO0FBSEE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQU1GO0FBSkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxVQUFBO0FBT0Y7QUFMQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBUUY7QUFOQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVNGO0FBUEE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBVUY7QUFSQTtFQUNJLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFXSjtBQVRBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFZRjtBQVZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBYUY7QUFYQTtFQUNFLGdCQUFBO0FBY0Y7QUFaQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBZUY7QUFiQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQWdCSjtBQWRBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQWlCRjtBQWZBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFrQkY7QUFoQkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFtQko7QUFqQkE7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQW1CLFVBQUE7QUFxQnJCO0FBbkJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBc0JKO0FBcEJBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBdUJGO0FBckJBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF3QkY7QUF0QkE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBeUJGO0FBdkJBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUEwQkY7QUF4QkE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7QUEyQkY7QUF4QkEsOEJBQUE7QUFDQTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBMkJKIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNC4wL2Nzcy9hbGwubWluLmNzcycpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWF0ZXJpYWwtZGVzaWduLWljb25pYy1mb250LzIuMi4wL2Nzcy9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQubWluLmNzcycpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcclxuaHRtbCwgYm9keSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6MTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblxyXG59XHJcbiosIDo6YWZ0ZXIsIDo6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNnsgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjt9XHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmxvZ2luX2FyZWF7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5sb2dpbl9hcmVhOmJlZm9yZXtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luLWJnMS5wbmcpO1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDBweCAzMHB4O1xyXG59XHJcbi5oZWFkZXJfYXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgbWFyZ2luOiAwIDAgNzBweDtcclxufVxyXG4uaGVhZGVyX2FyZWEgaDF7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIDAgMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxvZ2luX2JvZHkge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG1hcmdpbjogMCAwIDgwcHg7XHJcbn1cclxuLmZvcm0tZ3JvdXB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ZThlOGQ7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4uZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlcntcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5idG4tbGlua3tcclxuICBwYWRkaW5nOiAwIDA7XHJcbiAgbWFyZ2luOiAwIDA7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLnN1Ym1pdF9idXR0b25fYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNzQlO1xyXG4gICAgcmlnaHQ6IDE1JTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmJ0biB7XHJcbiAgcGFkZGluZzogNnB4IDI1cHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGNvbG9yOiAjZGM0ODI0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufVxyXG4ubG9naW5fd2l0aHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLmxvZ2luX3dpdGggLm9yIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbn1cclxuLmxvZ2luX3dpdGggLm9yIHN0cm9uZ3tcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTt6LWluZGV4OiAxO1xyXG59XHJcbi5sb2dpbl93aXRoIC5vcjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcbn1cclxuLmxvZ2luX3dpdGggaDMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMCAwO1xyXG4gIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICM3OTc5Nzk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sb2dpbl93aXRoIHVse1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMCAwO1xyXG4gIG1hcmdpbjogMCAwIDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sb2dpbl93aXRoIHVsIGxpe1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAwIDA7XHJcbiAgbWFyZ2luOiAwIDAgMCAwO1xyXG59XHJcbi5sb2dpbl93aXRoIHB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwIDA7XHJcbiAgbWFyZ2luOiAwIDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sb2dpbl93aXRoIC5idG4tbGlua3tcclxuICBjb2xvcjogI2U1NGIyNTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLyotLS0tLS0gbG9naW4gY3NzIHN0b3AgLS0tLS0qL1xyXG4ubmF2X2JhciB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogOTE7XHJcbn0iXX0= */");

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