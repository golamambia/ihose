(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-addressadd-checkout-addressadd-module"],{

/***/ "+VNR":
/*!*******************************************************************!*\
  !*** ./src/app/checkout-addressadd/checkout-addressadd.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja291dC1hZGRyZXNzYWRkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "Tj8S":
/*!***************************************************************************!*\
  !*** ./src/app/checkout-addressadd/checkout-addressadd-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: CheckoutAddressaddPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutAddressaddPageRoutingModule", function() { return CheckoutAddressaddPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _checkout_addressadd_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout-addressadd.page */ "sZf+");




const routes = [
    {
        path: '',
        component: _checkout_addressadd_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutAddressaddPage"]
    }
];
let CheckoutAddressaddPageRoutingModule = class CheckoutAddressaddPageRoutingModule {
};
CheckoutAddressaddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckoutAddressaddPageRoutingModule);



/***/ }),

/***/ "U0wM":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout-addressadd/checkout-addressadd.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>checkout-addressadd</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "sZf+":
/*!*****************************************************************!*\
  !*** ./src/app/checkout-addressadd/checkout-addressadd.page.ts ***!
  \*****************************************************************/
/*! exports provided: CheckoutAddressaddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutAddressaddPage", function() { return CheckoutAddressaddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_checkout_addressadd_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./checkout-addressadd.page.html */ "U0wM");
/* harmony import */ var _checkout_addressadd_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout-addressadd.page.scss */ "+VNR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CheckoutAddressaddPage = class CheckoutAddressaddPage {
    constructor() { }
    ngOnInit() {
    }
};
CheckoutAddressaddPage.ctorParameters = () => [];
CheckoutAddressaddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkout-addressadd',
        template: _raw_loader_checkout_addressadd_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkout_addressadd_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CheckoutAddressaddPage);



/***/ }),

/***/ "xA6h":
/*!*******************************************************************!*\
  !*** ./src/app/checkout-addressadd/checkout-addressadd.module.ts ***!
  \*******************************************************************/
/*! exports provided: CheckoutAddressaddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutAddressaddPageModule", function() { return CheckoutAddressaddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _checkout_addressadd_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout-addressadd-routing.module */ "Tj8S");
/* harmony import */ var _checkout_addressadd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout-addressadd.page */ "sZf+");







let CheckoutAddressaddPageModule = class CheckoutAddressaddPageModule {
};
CheckoutAddressaddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkout_addressadd_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutAddressaddPageRoutingModule"]
        ],
        declarations: [_checkout_addressadd_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutAddressaddPage"]]
    })
], CheckoutAddressaddPageModule);



/***/ })

}]);
//# sourceMappingURL=checkout-addressadd-checkout-addressadd-module.js.map