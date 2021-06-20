(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-success-order-success-module"],{

/***/ "60ou":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-success/order-success.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n <div class=\"success_message_area\">\n      <div class=\"container\">\n        <div class=\"success_logo\"><img src=\"assets/check.png\" alt=\"check\" title=\"\"></div>\n        <h1>Order Successful</h1>\n        <h2>Thank you!</h2>\n        <!-- <p>On my way to your table</p> -->\n        <button class=\"btn-success\" routerLink=\"/home\">go to home</button>\n      </div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "cp09":
/*!*******************************************************!*\
  !*** ./src/app/order-success/order-success.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.container {\n  padding: 0 1em;\n}\n.success_message_area {\n  width: 100%;\n  height: 100vh;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.success_message_area .success_logo {\n  width: 100%;\n  max-width: 100px;\n  margin: 0 auto 5px;\n  overflow: hidden;\n  border-radius: 50%;\n}\n.success_message_area .success_logo img {\n  width: 100%;\n  object-fit: cover;\n}\n.success_message_area h1 {\n  width: 100%;\n  margin: 0 0 20px;\n  padding: 0 0;\n  font-size: 22px;\n  color: #000;\n}\n.success_message_area h2 {\n  width: 100%;\n  margin: 0 0 5px;\n  padding: 0 0 0;\n  color: #000;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 600;\n}\n.success_message_area p {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 10px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #000;\n  text-align: center;\n}\n.success_message_area .btn-success {\n  content: \"\";\n  position: absolute;\n  bottom: 20px;\n  left: 0;\n  margin: 0 auto;\n  width: 300px;\n  border: 1px solid #ff0000;\n  background: #ff0000;\n  color: #fff;\n  padding: 13px;\n  font-size: 13px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9yZGVyLXN1Y2Nlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGlIQUFBO0FBQ0EseUZBQUE7QUFFUjtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0gsa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFBRDtBQUdBO0VBQ0ksc0JBQUE7QUFBSjtBQUdBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFBSjtBQUdBO0VBQ0ksY0FBQTtBQUFKO0FBS0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBRko7QUFJQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQURKO0FBR0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQUE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFHSjtBQURBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBSUoiLCJmaWxlIjoib3JkZXItc3VjY2Vzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE0LjAvY3NzL2FsbC5taW4uY3NzJyk7XHJcblxyXG5odG1sLCBib2R5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHR6LWluZGV4OjE7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbn1cclxuKiwgOjphZnRlciwgOjpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwIDFlbTtcclxufVxyXG5cclxuXHJcblxyXG4uc3VjY2Vzc19tZXNzYWdlX2FyZWF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zdWNjZXNzX21lc3NhZ2VfYXJlYSAuc3VjY2Vzc19sb2dve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uc3VjY2Vzc19tZXNzYWdlX2FyZWEgLnN1Y2Nlc3NfbG9nbyBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5zdWNjZXNzX21lc3NhZ2VfYXJlYSBoMSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCAwIDIwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4uc3VjY2Vzc19tZXNzYWdlX2FyZWEgaDIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgMCA1cHg7XHJcbiAgICBwYWRkaW5nOiAwIDAgMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uc3VjY2Vzc19tZXNzYWdlX2FyZWEgcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnN1Y2Nlc3NfbWVzc2FnZV9hcmVhIC5idG4tc3VjY2VzcyB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjAwMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxM3B4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbn0iXX0= */");

/***/ }),

/***/ "gc0W":
/*!*****************************************************!*\
  !*** ./src/app/order-success/order-success.page.ts ***!
  \*****************************************************/
/*! exports provided: OrderSuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessPage", function() { return OrderSuccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_success_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-success.page.html */ "60ou");
/* harmony import */ var _order_success_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-success.page.scss */ "cp09");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let OrderSuccessPage = class OrderSuccessPage {
    constructor() { }
    ngOnInit() {
    }
};
OrderSuccessPage.ctorParameters = () => [];
OrderSuccessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-success',
        template: _raw_loader_order_success_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_success_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderSuccessPage);



/***/ }),

/***/ "sYBs":
/*!*******************************************************!*\
  !*** ./src/app/order-success/order-success.module.ts ***!
  \*******************************************************/
/*! exports provided: OrderSuccessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessPageModule", function() { return OrderSuccessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _order_success_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-success-routing.module */ "zZWP");
/* harmony import */ var _order_success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-success.page */ "gc0W");







let OrderSuccessPageModule = class OrderSuccessPageModule {
};
OrderSuccessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_success_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderSuccessPageRoutingModule"]
        ],
        declarations: [_order_success_page__WEBPACK_IMPORTED_MODULE_6__["OrderSuccessPage"]]
    })
], OrderSuccessPageModule);



/***/ }),

/***/ "zZWP":
/*!***************************************************************!*\
  !*** ./src/app/order-success/order-success-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: OrderSuccessPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessPageRoutingModule", function() { return OrderSuccessPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _order_success_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-success.page */ "gc0W");




const routes = [
    {
        path: '',
        component: _order_success_page__WEBPACK_IMPORTED_MODULE_3__["OrderSuccessPage"]
    }
];
let OrderSuccessPageRoutingModule = class OrderSuccessPageRoutingModule {
};
OrderSuccessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderSuccessPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=order-success-order-success-module.js.map