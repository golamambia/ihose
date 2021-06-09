(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-failed-order-failed-module"],{

/***/ "SQ0v":
/*!*************************************************************!*\
  !*** ./src/app/order-failed/order-failed-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderFailedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFailedPageRoutingModule", function() { return OrderFailedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _order_failed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-failed.page */ "e8SF");




const routes = [
    {
        path: '',
        component: _order_failed_page__WEBPACK_IMPORTED_MODULE_3__["OrderFailedPage"]
    }
];
let OrderFailedPageRoutingModule = class OrderFailedPageRoutingModule {
};
OrderFailedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderFailedPageRoutingModule);



/***/ }),

/***/ "e8SF":
/*!***************************************************!*\
  !*** ./src/app/order-failed/order-failed.page.ts ***!
  \***************************************************/
/*! exports provided: OrderFailedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFailedPage", function() { return OrderFailedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_failed_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-failed.page.html */ "hvRn");
/* harmony import */ var _order_failed_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-failed.page.scss */ "gBJv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let OrderFailedPage = class OrderFailedPage {
    constructor() { }
    ngOnInit() {
    }
};
OrderFailedPage.ctorParameters = () => [];
OrderFailedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-failed',
        template: _raw_loader_order_failed_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_failed_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderFailedPage);



/***/ }),

/***/ "gBJv":
/*!*****************************************************!*\
  !*** ./src/app/order-failed/order-failed.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.container {\n  padding: 0 1em;\n}\n.success_message_area {\n  width: 100%;\n  height: 100vh;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.success_message_area .success_logo {\n  width: 100%;\n  max-width: 100px;\n  margin: 0 auto 5px;\n  overflow: hidden;\n  border-radius: 50%;\n}\n.success_message_area .success_logo img {\n  width: 100%;\n  object-fit: cover;\n}\n.success_message_area h1 {\n  width: 100%;\n  margin: 0 0 20px;\n  padding: 0 0;\n  font-size: 22px;\n  color: #000;\n  text-align: center;\n}\n.success_message_area h2 {\n  width: 100%;\n  margin: 0 0 5px;\n  padding: 0 0 0;\n  color: #000;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 600;\n}\n.success_message_area p {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 10px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #000;\n  text-align: center;\n}\n.success_message_area .btn-success {\n  content: \"\";\n  position: absolute;\n  bottom: 20px;\n  left: 0;\n  margin: 0 auto;\n  width: 300px;\n  border: 1px solid #ff0000;\n  background: #ff0000;\n  color: #fff;\n  padding: 13px;\n  font-size: 13px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9yZGVyLWZhaWxlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsaUhBQUE7QUFDQSx5RkFBQTtBQUVSO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDSCxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQUFEO0FBR0E7RUFDSSxzQkFBQTtBQUFKO0FBR0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUFKO0FBR0E7RUFDSSxjQUFBO0FBQUo7QUFLQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUlBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBREo7QUFHQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUFKO0FBRUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQUFBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBR0o7QUFEQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQUlKIiwiZmlsZSI6Im9yZGVyLWZhaWxlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE0LjAvY3NzL2FsbC5taW4uY3NzJyk7XHJcblxyXG5odG1sLCBib2R5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHR6LWluZGV4OjE7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbn1cclxuKiwgOjphZnRlciwgOjpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwIDFlbTtcclxufVxyXG5cclxuXHJcblxyXG4uc3VjY2Vzc19tZXNzYWdlX2FyZWF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zdWNjZXNzX21lc3NhZ2VfYXJlYSAuc3VjY2Vzc19sb2dve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uc3VjY2Vzc19tZXNzYWdlX2FyZWEgLnN1Y2Nlc3NfbG9nbyBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5zdWNjZXNzX21lc3NhZ2VfYXJlYSBoMSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCAwIDIwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc3VjY2Vzc19tZXNzYWdlX2FyZWEgaDIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgMCA1cHg7XHJcbiAgICBwYWRkaW5nOiAwIDAgMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uc3VjY2Vzc19tZXNzYWdlX2FyZWEgcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnN1Y2Nlc3NfbWVzc2FnZV9hcmVhIC5idG4tc3VjY2VzcyB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjAwMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxM3B4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbn0iXX0= */");

/***/ }),

/***/ "hvRn":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-failed/order-failed.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n<div class=\"success_message_area\">\n      <div class=\"container\">\n        <div class=\"success_logo\"><img src=\"assets/remove.png\" alt=\"remove\" title=\"\"></div>\n        <h1>Order Failed</h1>\n        <h2>Oops !</h2>\n        <p>Something went wrong, try again</p>\n        <button class=\"btn-success\" routerLink=\"/\">go to home</button>\n      </div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "oK0y":
/*!*****************************************************!*\
  !*** ./src/app/order-failed/order-failed.module.ts ***!
  \*****************************************************/
/*! exports provided: OrderFailedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFailedPageModule", function() { return OrderFailedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _order_failed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-failed-routing.module */ "SQ0v");
/* harmony import */ var _order_failed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-failed.page */ "e8SF");







let OrderFailedPageModule = class OrderFailedPageModule {
};
OrderFailedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_failed_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderFailedPageRoutingModule"]
        ],
        declarations: [_order_failed_page__WEBPACK_IMPORTED_MODULE_6__["OrderFailedPage"]]
    })
], OrderFailedPageModule);



/***/ })

}]);
//# sourceMappingURL=order-failed-order-failed-module.js.map