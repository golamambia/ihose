(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-addressedit-checkout-addressedit-module"],{

/***/ "AdEf":
/*!*********************************************************************!*\
  !*** ./src/app/checkout-addressedit/checkout-addressedit.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja291dC1hZGRyZXNzZWRpdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "LYe5":
/*!*******************************************************************!*\
  !*** ./src/app/checkout-addressedit/checkout-addressedit.page.ts ***!
  \*******************************************************************/
/*! exports provided: CheckoutAddresseditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutAddresseditPage", function() { return CheckoutAddresseditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_checkout_addressedit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./checkout-addressedit.page.html */ "yebl");
/* harmony import */ var _checkout_addressedit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout-addressedit.page.scss */ "AdEf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CheckoutAddresseditPage = class CheckoutAddresseditPage {
    constructor() { }
    ngOnInit() {
    }
};
CheckoutAddresseditPage.ctorParameters = () => [];
CheckoutAddresseditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkout-addressedit',
        template: _raw_loader_checkout_addressedit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkout_addressedit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CheckoutAddresseditPage);



/***/ }),

/***/ "bKIM":
/*!*****************************************************************************!*\
  !*** ./src/app/checkout-addressedit/checkout-addressedit-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CheckoutAddresseditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutAddresseditPageRoutingModule", function() { return CheckoutAddresseditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _checkout_addressedit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout-addressedit.page */ "LYe5");




const routes = [
    {
        path: '',
        component: _checkout_addressedit_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutAddresseditPage"]
    }
];
let CheckoutAddresseditPageRoutingModule = class CheckoutAddresseditPageRoutingModule {
};
CheckoutAddresseditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckoutAddresseditPageRoutingModule);



/***/ }),

/***/ "mB13":
/*!*********************************************************************!*\
  !*** ./src/app/checkout-addressedit/checkout-addressedit.module.ts ***!
  \*********************************************************************/
/*! exports provided: CheckoutAddresseditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutAddresseditPageModule", function() { return CheckoutAddresseditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _checkout_addressedit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout-addressedit-routing.module */ "bKIM");
/* harmony import */ var _checkout_addressedit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout-addressedit.page */ "LYe5");







let CheckoutAddresseditPageModule = class CheckoutAddresseditPageModule {
};
CheckoutAddresseditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkout_addressedit_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutAddresseditPageRoutingModule"]
        ],
        declarations: [_checkout_addressedit_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutAddresseditPage"]]
    })
], CheckoutAddresseditPageModule);



/***/ }),

/***/ "yebl":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout-addressedit/checkout-addressedit.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>checkout-addressedit</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=checkout-addressedit-checkout-addressedit-module.js.map