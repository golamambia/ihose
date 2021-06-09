(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-online-checkout-online-module"],{

/***/ "CIu/":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout-online/checkout-online.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>checkout-online</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "THGH":
/*!***********************************************************!*\
  !*** ./src/app/checkout-online/checkout-online.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja291dC1vbmxpbmUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "de8C":
/*!*********************************************************!*\
  !*** ./src/app/checkout-online/checkout-online.page.ts ***!
  \*********************************************************/
/*! exports provided: CheckoutOnlinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutOnlinePage", function() { return CheckoutOnlinePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_checkout_online_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./checkout-online.page.html */ "CIu/");
/* harmony import */ var _checkout_online_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout-online.page.scss */ "THGH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CheckoutOnlinePage = class CheckoutOnlinePage {
    constructor() { }
    ngOnInit() {
    }
};
CheckoutOnlinePage.ctorParameters = () => [];
CheckoutOnlinePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkout-online',
        template: _raw_loader_checkout_online_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkout_online_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CheckoutOnlinePage);



/***/ }),

/***/ "e6Ab":
/*!*******************************************************************!*\
  !*** ./src/app/checkout-online/checkout-online-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CheckoutOnlinePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutOnlinePageRoutingModule", function() { return CheckoutOnlinePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _checkout_online_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout-online.page */ "de8C");




const routes = [
    {
        path: '',
        component: _checkout_online_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutOnlinePage"]
    }
];
let CheckoutOnlinePageRoutingModule = class CheckoutOnlinePageRoutingModule {
};
CheckoutOnlinePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckoutOnlinePageRoutingModule);



/***/ }),

/***/ "x41f":
/*!***********************************************************!*\
  !*** ./src/app/checkout-online/checkout-online.module.ts ***!
  \***********************************************************/
/*! exports provided: CheckoutOnlinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutOnlinePageModule", function() { return CheckoutOnlinePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _checkout_online_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout-online-routing.module */ "e6Ab");
/* harmony import */ var _checkout_online_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout-online.page */ "de8C");







let CheckoutOnlinePageModule = class CheckoutOnlinePageModule {
};
CheckoutOnlinePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkout_online_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutOnlinePageRoutingModule"]
        ],
        declarations: [_checkout_online_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutOnlinePage"]]
    })
], CheckoutOnlinePageModule);



/***/ })

}]);
//# sourceMappingURL=checkout-online-checkout-online-module.js.map