(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-list-address-list-module"],{

/***/ "5bXr":
/*!*************************************************************!*\
  !*** ./src/app/address-list/address-list-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AddressListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressListPageRoutingModule", function() { return AddressListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _address_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./address-list.page */ "Y62P");




const routes = [
    {
        path: '',
        component: _address_list_page__WEBPACK_IMPORTED_MODULE_3__["AddressListPage"]
    }
];
let AddressListPageRoutingModule = class AddressListPageRoutingModule {
};
AddressListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddressListPageRoutingModule);



/***/ }),

/***/ "61wm":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/address-list/address-list.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content>\n\n   \n    \n    <div class=\"header\">\n      <div class=\"top-nav\">\n        <button class=\"btn-back\" (click)=\"back()\">\n           <i class=\"fas fa-arrow-left\"></i>\n        </button>\n        <div class=\"title\">Address List</div>\n        <button class=\"btn-add-address\" (click)=\"gotoAddAddress()\">\n          <i class=\"far fa-plus-square\"></i>\n        </button>\n      </div>\n    </div>\n    \n    <div class=\"delevary_address\">\n      <div class=\"container\" *ngFor=\"let data of address_list\">\n        \n\n        <div class=\"add_address_box\">\n          <p>{{data.usa_address}}<br/> {{data.usa_doorno}}<br/> {{data.usa_landmark}}</p>\n          <button class=\"btn-edit\" (click)=\"edit(data.usa_id)\"><i class=\"fas fa-pen\"></i></button>\n          <button class=\"btn-delete\" (click)=\"delete(data.usa_id)\"><i class=\"fas fa-trash-alt\"></i></button>\n        </div>\n        \n        \n\n      </div>\n    </div>\n    \n</ion-content>\n");

/***/ }),

/***/ "80Jd":
/*!*****************************************************!*\
  !*** ./src/app/address-list/address-list.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.top-nav {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 15px 1em;\n  margin-top: 0;\n  margin-bottom: 0;\n  background-color: #eb9929;\n  position: fixed;\n  z-index: 9;\n  top: 0;\n}\n.top-nav .btn-back {\n  font-size: 2em;\n  color: #fff;\n  cursor: pointer;\n  outline: none;\n  background-color: transparent;\n  border: none;\n  position: absolute;\n}\n.top-nav .btn-add-address {\n  font-size: 2em;\n  color: #fff;\n  cursor: pointer;\n  outline: none;\n  background-color: transparent;\n  border: none;\n  position: absolute;\n  top: 10px;\n  right: 15px;\n}\n.top-nav .title {\n  color: #fff;\n  font-size: 1.2em;\n  font-weight: 500;\n  margin: 0 auto;\n  text-transform: uppercase;\n  letter-spacing: normal;\n}\n.header {\n  background-color: #fe5632;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.24);\n}\n.full-screen.cart {\n  flex-direction: column;\n}\n.container {\n  padding: 0 1em;\n}\n.delevary_address {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 80px 0px 20px;\n  position: relative;\n}\n.add_address_box {\n  width: 100%;\n  padding: 30px 28px 20px;\n  position: relative;\n  box-sizing: border-box;\n  box-shadow: 0 0 4px #c7c7c7;\n  margin-bottom: 20px;\n}\n.add_address_box p {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 0;\n  font-size: 16px;\n  font-family: \"Poppins\", sans-serif;\n  line-height: 24px;\n}\n.add_address_box .btn-edit {\n  content: \"\";\n  position: absolute;\n  top: 5px;\n  right: 35px;\n  border: 1px solid #000;\n  background: #000;\n  color: #fff;\n  width: 25px;\n  height: 25px;\n  font-size: 11px;\n  cursor: pointer;\n  border-radius: 2px;\n}\n.add_address_box .btn-delete {\n  content: \"\";\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  border: 1px solid #ff0000;\n  background: #ff0000;\n  color: #fff;\n  width: 25px;\n  height: 25px;\n  font-size: 11px;\n  cursor: pointer;\n  border-radius: 2px;\n}\n.container {\n  padding: 0 1em;\n}\n.sticky_footer {\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  background-color: #000;\n  z-index: 99;\n  padding: 5px 0;\n  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.22);\n}\n.sticky_footer p {\n  margin: 0;\n  padding: 0;\n  line-height: 0;\n}\n.sticky_footer p button {\n  background-color: transparent;\n  border: none;\n  padding: 3px 0;\n  cursor: pointer;\n  color: #fff;\n  text-transform: capitalize;\n  font-weight: 500;\n  position: relative;\n  border: none;\n  outline: none;\n}\n.sticky_footer p button.active i {\n  color: #ff0000;\n}\n.sticky_footer p button small {\n  position: absolute;\n  right: -7px;\n  width: 20px;\n  height: 20px;\n  background-color: #ff0000;\n  top: 0;\n  text-align: center;\n  line-height: 20px;\n  border-radius: 50px;\n  color: #fff;\n  font-size: 13px;\n}\n.sticky_footer p button i {\n  display: block;\n  font-size: 28px;\n  color: #fff;\n}\n.sticky_footer p button img {\n  max-width: 24px;\n  margin: 0;\n  padding: 0;\n  height: 22px;\n}\n.sticky_footer .container {\n  display: flex !important;\n  justify-content: space-between !important;\n  padding: 6px 1em;\n}\n.sticky_footer img {\n  width: 100%;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkZHJlc3MtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsaUhBQUE7QUFDQSx5RkFBQTtBQUVSO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDSCxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQUFEO0FBR0E7RUFDSSxzQkFBQTtBQUFKO0FBR0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUFKO0FBS0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtBQUZKO0FBSUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUdBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFBSjtBQUVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQ0E7RUFDSSx5QkFBQTtFQUNBLDJDQUFBO0FBRUo7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7QUFLQTtFQUNJLGNBQUE7QUFGSjtBQUtBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUZKO0FBS0E7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUZKO0FBSUE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0FBREo7QUFHQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUE7RUFDSSxjQUFBO0FBQ0o7QUFHQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSwyQ0FBQTtBQUFKO0FBR0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFBSjtBQUVBO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDSjtBQUNBO0VBQ0ksY0FBQTtBQUVKO0FBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsTUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBR0o7QUFEQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUlKO0FBRkE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBS0o7QUFGQTtFQUVJLHdCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtBQU1KO0FBSEE7RUFBb0IsV0FBQTtFQUFZLGVBQUE7QUFRaEMiLCJmaWxlIjoiYWRkcmVzcy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTQuMC9jc3MvYWxsLm1pbi5jc3MnKTtcclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdHotaW5kZXg6MTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxufVxyXG4qLCA6OmFmdGVyLCA6OmJlZm9yZSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcbi50b3AtbmF2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDFlbTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViOTkyOTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuLnRvcC1uYXYgLmJ0bi1iYWNrIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLnRvcC1uYXYgLmJ0bi1hZGQtYWRkcmVzcyB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbn1cclxuLnRvcC1uYXYgLnRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNTYzMjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IHJnYigwIDAgMCAvIDI0JSk7XHJcbn1cclxuXHJcblxyXG4uZnVsbC1zY3JlZW4uY2FydCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDAgMWVtO1xyXG59XHJcblxyXG4uZGVsZXZhcnlfYWRkcmVzcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiA4MHB4IDBweCAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYWRkX2FkZHJlc3NfYm94IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMzBweCAyOHB4IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDRweCByZ2IoMTk5IDE5OSAxOTkpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uYWRkX2FkZHJlc3NfYm94IHAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwIDA7XHJcbiAgICBtYXJnaW46IDAgMCAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcbi5hZGRfYWRkcmVzc19ib3ggLmJ0bi1lZGl0IHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICByaWdodDogMzVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG4uYWRkX2FkZHJlc3NfYm94IC5idG4tZGVsZXRlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmMDAwMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZjAwMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDAgMWVtO1xyXG59XHJcblxyXG5cclxuLnN0aWNreV9mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIGJveC1zaGFkb3c6IDAgLTFweCAxMHB4IHJnYigwIDAgMCAvIDIyJSk7XHJcbn1cclxuXHJcbi5zdGlja3lfZm9vdGVyIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG59XHJcbi5zdGlja3lfZm9vdGVyIHAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogM3B4IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uc3RpY2t5X2Zvb3RlciBwIGJ1dHRvbi5hY3RpdmUgaSB7XHJcbiAgICBjb2xvcjogI2ZmMDAwMDtcclxufVxyXG4uc3RpY2t5X2Zvb3RlciBwIGJ1dHRvbiBzbWFsbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTdweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcclxuICAgIHRvcDogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5zdGlja3lfZm9vdGVyIHAgYnV0dG9uIGkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uc3RpY2t5X2Zvb3RlciBwIGJ1dHRvbiBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAyNHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogMjJweDtcclxufVxyXG5cclxuLnN0aWNreV9mb290ZXIgLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94IWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50Oy1tcy1mbGV4LXBhY2s6IGp1c3RpZnkhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDZweCAxZW07XHJcbn1cclxuXHJcbi5zdGlja3lfZm9vdGVyIGltZ3sgd2lkdGg6MTAwJTsgbWF4LXdpZHRoOjEwMCU7IFxyXG4gICAgfSJdfQ== */");

/***/ }),

/***/ "Y62P":
/*!***************************************************!*\
  !*** ./src/app/address-list/address-list.page.ts ***!
  \***************************************************/
/*! exports provided: AddressListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressListPage", function() { return AddressListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_address_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./address-list.page.html */ "61wm");
/* harmony import */ var _address_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address-list.page.scss */ "80Jd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










let AddressListPage = class AddressListPage {
    constructor(http, navCtrl, storage, loadingController, alertController, location) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.location = location;
        this.appUrl = "https://theitvibe.com/project/ihose/api/getAddress";
        this.deleteUrl = "https://theitvibe.com/project/ihose/api/deleteAddressUser";
        this.cart_data = [];
        this.cartTotalAmount = 0;
        this.count = 0;
        this.cart = [];
        this.cartdata = [];
    }
    listing() {
        this.storage.get("userDetails").then(val => {
            if (val) {
                this.userDetails = val;
                var data = {
                    "userId": this.userDetails.user_id,
                };
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
                //console.log(this.userDetails.user_id);
                this.http.post(this.appUrl + '/' + this.userDetails.user_id, { data: '' })
                    .subscribe(res => {
                    this.res = res.json();
                    ///console.log(this.res);
                    if (this.res) {
                        this.address_list = this.res;
                    }
                    else {
                        alert("Server error");
                        //loading.dismiss();
                    }
                }, (err) => {
                    console.log(err);
                    //loading.dismiss();
                });
            }
        });
    }
    ionViewWillEnter() {
        this.listing();
        this.storage.get("userCart").then(val => {
            if (val) {
                this.userCart = val;
                //this.cart_data = val;
                //console.log(val);
            }
        });
        this.getCartItemCount();
    }
    ngOnInit() {
    }
    back() {
        //this.location.back();
        this.navCtrl.navigateForward('sidebar');
    }
    getCartItemCount() {
        //let count=0;
        this.cartdata = [];
        this.cartTotalAmount = 0;
        this.count = 0;
        this.storage.get("userCart").then(val => {
            if (val) {
                for (let p of this.userCart) {
                    if (p.quantity > 0) {
                        this.count += 1;
                        this.cartTotalAmount += p.menu_price * p.quantity;
                        this.cartdata.push(p);
                    }
                }
                this.cart_data = this.cartdata;
                this.cartTotal = this.count;
                this.cartcount = this.count;
                this.menu_list = this.cartdata;
                //console.log(this.cartdata);
            }
            else {
                this.cartTotal = this.count;
                this.menu_list = this.cartdata;
            }
        });
    }
    gotoAddAddress() {
        this.navCtrl.navigateForward('address-add');
    }
    edit(id) {
        this.navCtrl.navigateForward('/address-update?edit=' + id);
    }
    delete(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Saving...'
            });
            const successalrt = yield this.alertController.create({
                message: 'Address successfully delete',
                buttons: ['OK']
            });
            const fail = yield this.alertController.create({
                message: 'Something went wrong',
                buttons: ['OK']
            });
            const alert = yield this.alertController.create({
                message: 'Are you sure to delete',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            //console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            //console.log('Confirm Okay');
                            if (id) {
                                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
                                var data = {
                                    "usa_user": this.userDetails.user_id,
                                    "editid": id,
                                };
                                this.http.post(this.deleteUrl, data, { headers: headers })
                                    .subscribe(res => {
                                    this.res = res.json();
                                    //console.log(this.res);
                                    if (this.res.status == 0) {
                                        fail.present();
                                        loading.dismiss();
                                    }
                                    else if (this.res.status == 1) {
                                        successalrt.present();
                                        //this.constructor();
                                        //this.navCtrl.navigateForward('address-list');
                                        loading.dismiss();
                                        this.listing();
                                    }
                                    else {
                                        //alert("Server error");
                                        loading.dismiss();
                                    }
                                }, (err) => {
                                    console.log(err);
                                    //loading.dismiss();
                                });
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
AddressListPage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }
];
AddressListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-address-list',
        template: _raw_loader_address_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_address_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddressListPage);



/***/ }),

/***/ "pDpY":
/*!*****************************************************!*\
  !*** ./src/app/address-list/address-list.module.ts ***!
  \*****************************************************/
/*! exports provided: AddressListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressListPageModule", function() { return AddressListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _address_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./address-list-routing.module */ "5bXr");
/* harmony import */ var _address_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./address-list.page */ "Y62P");







let AddressListPageModule = class AddressListPageModule {
};
AddressListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _address_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddressListPageRoutingModule"]
        ],
        declarations: [_address_list_page__WEBPACK_IMPORTED_MODULE_6__["AddressListPage"]]
    })
], AddressListPageModule);



/***/ })

}]);
//# sourceMappingURL=address-list-address-list-module.js.map