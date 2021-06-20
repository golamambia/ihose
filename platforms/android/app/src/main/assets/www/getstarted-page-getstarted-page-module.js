(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["getstarted-page-getstarted-page-module"],{

/***/ "6Znp":
/*!***********************************************************!*\
  !*** ./src/app/getstarted-page/getstarted-page.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Montserrat\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.splash_area {\n  width: 100%;\n  height: 100vh;\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n}\n.splash_area:before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 60%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url('splash1.png');\n  z-index: 0;\n}\n.splash_area .splash_body {\n  width: 100%;\n  height: 100vh;\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  padding: 30px 30px;\n  z-index: 1;\n}\n.splash_area .splash_body .logo {\n  width: 247px;\n  box-sizing: border-box;\n  overflow: hidden;\n  margin: 40% auto 0;\n}\n.splash_area .splash_body .logo img {\n  width: 100%;\n  object-fit: cover;\n}\n.splash_area .splash_body .btn {\n  position: absolute;\n  bottom: 5%;\n  left: 0;\n  width: 85%;\n  padding: 15px 15px;\n  border-radius: 5px;\n  border: 1px solid #ffffff;\n  background: #ffffff;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 600;\n  color: #000000;\n  outline: none;\n  box-sizing: border-box;\n  margin: auto;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGdldHN0YXJ0ZWQtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEseUZBQUE7QUFDQSwrSEFBQTtBQUNBLHFNQUFBO0FBQ1I7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7QUFDQTtFQUF3QixxQ0FBQTtBQUd4QjtBQUZBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFLSjtBQUhBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFNRjtBQUpBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtBQU9GO0FBTEE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVFGO0FBTkE7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBU0Y7QUFQQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQVVGO0FBUkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUFXRiIsImZpbGUiOiJnZXRzdGFydGVkLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE0LjAvY3NzL2FsbC5taW4uY3NzJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQvMi4yLjAvY3NzL21hdGVyaWFsLWRlc2lnbi1pY29uaWMtZm9udC5taW4uY3NzJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5odG1sLCBib2R5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgei1pbmRleDoxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbn1cclxuKiwgOjphZnRlciwgOjpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2eyBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO31cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4uc3BsYXNoX2FyZWF7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zcGxhc2hfYXJlYTpiZWZvcmV7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvc3BsYXNoMS5wbmcpO1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuLnNwbGFzaF9hcmVhIC5zcGxhc2hfYm9keXtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMzBweCAzMHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLnNwbGFzaF9hcmVhIC5zcGxhc2hfYm9keSAubG9nbyB7XHJcbiAgd2lkdGg6IDI0N3B4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDQwJSBhdXRvIDA7XHJcbn1cclxuLnNwbGFzaF9hcmVhIC5zcGxhc2hfYm9keSAubG9nbyBpbWd7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLnNwbGFzaF9hcmVhIC5zcGxhc2hfYm9keSAuYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA1JTtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgcGFkZGluZzogMTVweCAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbiJdfQ== */");

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
        this.navCtrl.navigateForward('/login');
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