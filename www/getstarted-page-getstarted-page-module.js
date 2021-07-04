(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["getstarted-page-getstarted-page-module"],{

/***/ "6Znp":
/*!***********************************************************!*\
  !*** ./src/app/getstarted-page/getstarted-page.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Montserrat\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.splash_area {\n  width: 100%;\n  height: 100vh;\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n}\n.splash_area:before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 62%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url('splash1.png');\n  z-index: 0;\n}\n.splash_area .splash_body {\n  width: 100%;\n  height: 100vh;\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  padding: 30px 30px;\n  z-index: 1;\n}\n.splash_area .splash_body .logo {\n  width: 190px;\n  box-sizing: border-box;\n  overflow: hidden;\n  margin: auto;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  top: 22%;\n  -ms-transition: translate(0, -22%);\n  -o-transition: translate(0, -22%);\n  -moz-transition: translate(0, -22%);\n  transform: translate(0, -22%);\n}\n.splash_area .splash_body .logo img {\n  width: 100%;\n  object-fit: contain;\n}\n.splash_area .splash_body .btn {\n  position: absolute;\n  bottom: 5%;\n  left: 0;\n  width: 85%;\n  padding: 15px 15px;\n  border-radius: 5px;\n  border: 1px solid #ffffff;\n  background: #ffffff;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 600;\n  color: #000000;\n  outline: none;\n  box-sizing: border-box;\n  margin: auto;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGdldHN0YXJ0ZWQtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEseUZBQUE7QUFDQSwrSEFBQTtBQUNBLHFNQUFBO0FBQ1I7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7QUFDQTtFQUF3QixxQ0FBQTtBQUd4QjtBQUZBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFLSjtBQUhBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFNRjtBQUpBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtBQU9KO0FBTEE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVFGO0FBTkE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxrQ0FBQTtFQUNKLGlDQUFBO0VBQ0EsbUNBQUE7RUFFRSw2QkFBQTtBQVNGO0FBUEE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFVSjtBQVJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBV0YiLCJmaWxlIjoiZ2V0c3RhcnRlZC1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNC4wL2Nzcy9hbGwubWluLmNzcycpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWF0ZXJpYWwtZGVzaWduLWljb25pYy1mb250LzIuMi4wL2Nzcy9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQubWluLmNzcycpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcclxuaHRtbCwgYm9keSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6MTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblxyXG59XHJcbiosIDo6YWZ0ZXIsIDo6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNnsgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjt9XHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLnNwbGFzaF9hcmVhe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc3BsYXNoX2FyZWE6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MiU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3NwbGFzaDEucG5nKTtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuLnNwbGFzaF9hcmVhIC5zcGxhc2hfYm9keXtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMzBweCAzMHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLnNwbGFzaF9hcmVhIC5zcGxhc2hfYm9keSAubG9nbyB7XHJcbiAgICB3aWR0aDogMTkwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRvcDogMjIlO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IHRyYW5zbGF0ZSgwLCAtMjIlKTtcclxuLW8tdHJhbnNpdGlvbjogdHJhbnNsYXRlKDAsIC0yMiUpO1xyXG4tbW96LXRyYW5zaXRpb246IHRyYW5zbGF0ZSgwLCAtMjIlKTtcclxuLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjIlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjIlKTtcclxufVxyXG4uc3BsYXNoX2FyZWEgLnNwbGFzaF9ib2R5IC5sb2dvIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuLnNwbGFzaF9hcmVhIC5zcGxhc2hfYm9keSAuYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA1JTtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgcGFkZGluZzogMTVweCAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "GfV6":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/getstarted-page/getstarted-page.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n <div *ngIf=\"get_started==1\" class=\"splash_area\">\n        <div class=\"splash_body\">\n            <div class=\"logo\"><img src=\"assets/images/logo.png\" alt=\"logo\" title=\"\" /></div>\n            <button class=\"btn\" (click)=\"goToscreen()\">Get Started</button>\n        </div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "XdA5":
/*!*******************************************************************!*\
  !*** ./src/app/getstarted-page/getstarted-page-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: GetstartedPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetstartedPagePageRoutingModule", function() { return GetstartedPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _getstarted_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getstarted-page.page */ "w0dm");




const routes = [
    {
        path: '',
        component: _getstarted_page_page__WEBPACK_IMPORTED_MODULE_3__["GetstartedPagePage"]
    }
];
let GetstartedPagePageRoutingModule = class GetstartedPagePageRoutingModule {
};
GetstartedPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GetstartedPagePageRoutingModule);



/***/ }),

/***/ "l+nA":
/*!***********************************************************!*\
  !*** ./src/app/getstarted-page/getstarted-page.module.ts ***!
  \***********************************************************/
/*! exports provided: GetstartedPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetstartedPagePageModule", function() { return GetstartedPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _getstarted_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getstarted-page-routing.module */ "XdA5");
/* harmony import */ var _getstarted_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getstarted-page.page */ "w0dm");







let GetstartedPagePageModule = class GetstartedPagePageModule {
};
GetstartedPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _getstarted_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["GetstartedPagePageRoutingModule"]
        ],
        declarations: [_getstarted_page_page__WEBPACK_IMPORTED_MODULE_6__["GetstartedPagePage"]]
    })
], GetstartedPagePageModule);



/***/ }),

/***/ "w0dm":
/*!*********************************************************!*\
  !*** ./src/app/getstarted-page/getstarted-page.page.ts ***!
  \*********************************************************/
/*! exports provided: GetstartedPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetstartedPagePage", function() { return GetstartedPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_getstarted_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./getstarted-page.page.html */ "GfV6");
/* harmony import */ var _getstarted_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getstarted-page.page.scss */ "6Znp");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");





//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';




let GetstartedPagePage = class GetstartedPagePage {
    constructor(platform, 
    //private splashScreen: SplashScreen,
    //private statusBar: StatusBar,
    menu, navCtrl, storage, location) {
        this.platform = platform;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.location = location;
        this.get_started = 0;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.storage.get("get_started").then(val => {
            if (val) {
                this.get_started = 0;
                //	this.get_started=val;
                //  if(this.userDetails){
                //  this.navCtrl.navigateForward('/home');
                // }else{
                // 	this.navCtrl.navigateForward('/login');
                // }
            }
            else {
                this.get_started = 1;
            }
        });
    }
    goToscreen() {
        this.storage.set("get_started", 1);
        this.navCtrl.navigateForward('/home');
    }
};
GetstartedPagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
];
GetstartedPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-getstarted-page',
        template: _raw_loader_getstarted_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_getstarted_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GetstartedPagePage);



/***/ })

}]);
//# sourceMappingURL=getstarted-page-getstarted-page-module.js.map