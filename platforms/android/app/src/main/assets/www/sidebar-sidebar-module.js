(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sidebar-sidebar-module"],{

/***/ "+dj4":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n    <div class=\"menu_area\">\n        <div class=\"menu_heading\">\n            <button routerLink=\"/home\" class=\"btn-back\"><img src=\"assets/images/back.png\" alt=\"back\" title=\"\" /></button>\n            <h6>Menu</h6>\n        </div>\n        <div class=\"menu_body\">\n            <ul>\n                <li routerLink=\"/home\" (click)=\"storePage('sidebar')\">\n                    <a href=\"#\" class=\"active\">\n                        <div class=\"menu_icon\"><img src=\"assets/images/menu1.png\"></div>\n                        Home\n                    </a>\n                </li>\n                <li *ngIf=\"!userDetails\" routerLink=\"/login\" (click)=\"storePage('sidebar')\">\n                    <a href=\"#\">\n                        <div class=\"menu_icon\"><img src=\"assets/images/menu2.png\"></div>\n                        Login\n                    </a>\n                </li>\n                 <li *ngIf=\"!userDetails\" routerLink=\"/register\" (click)=\"storePage('sidebar')\">\n                    <a href=\"#\">\n                        <div class=\"menu_icon\"><img src=\"assets/images/menu2.png\"></div>\n                        Registration\n                    </a>\n                </li>\n                 <li *ngIf=\"userDetails\" routerLink=\"/order-list\" (click)=\"storePage('sidebar')\">\n                    <a href=\"#\">\n                        <div class=\"menu_icon\"><img src=\"assets/images/menu6.png\"></div>\n                       My Order\n                    </a>\n                </li>\n                 <li *ngIf=\"userDetails\" routerLink=\"/address-list\" (click)=\"storePage('sidebar')\">\n                    <a href=\"#\">\n                        <div class=\"menu_icon\"><img src=\"assets/images/menu6.png\"></div>\n                        Address\n                    </a>\n                </li>\n                  <!-- <li *ngIf=\"userDetails\" routerLink=\"/profile\" (click)=\"storePage('sidebar')\">\n                    <a href=\"#\">\n                        <div class=\"menu_icon\"><img src=\"assets/images/menu2.png\"></div>\n                        Profile\n                    </a>\n                </li> -->\n                 <!-- <li *ngIf=\"userDetails\">\n                    <a href=\"#\" routerLink=\"/change-password\" (click)=\"storePage('sidebar')\">\n                        <div class=\"menu_icon\"><img src=\"assets/images/menu2.png\"></div>\n                        Change Password\n                    </a>\n                </li> -->\n               <li routerLink=\"/about\" (click)=\"storePage('sidebar')\">\n                    <a href=\"#\">\n                        <div class=\"menu_icon\"><img src=\"assets/images/menu3.png\"></div>\n                        About\n                    </a>\n                </li>\n                <li routerLink=\"/contact\" (click)=\"storePage('sidebar')\">\n                    <a href=\"#\">\n                        <div class=\"menu_icon\"><img src=\"assets/images/menu4.png\"></div>\n                        Contact Us\n                    </a>\n                </li>\n                 <li routerLink=\"/privacy-policy\" (click)=\"storePage('sidebar')\">\n                    <a href=\"#\">\n                        <div class=\"menu_icon\"><img src=\"assets/images/menu5.png\"></div>\n                        Privacy Policy\n                    </a>\n                </li>\n                <li routerLink=\"/term-condition\" (click)=\"storePage('sidebar')\">\n                    <a href=\"#\">\n                        <div class=\"menu_icon\"><img src=\"assets/images/menu6.png\"></div>\n                        Terms & Conditions\n                    </a>\n                </li>\n                 <li *ngIf=\"userDetails\" class=\"logout\"  (click)=\"logout()\">\n                    <a href=\"#\">\n                        <div class=\"menu_icon\"><img src=\"assets/images/menu7.png\"></div>\n                        Log Out\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"automotive_area\">\n      <div class=\"container\">\n          <div class=\"automotive_body\">\n              <div class=\"header_area\">\n                  <button class=\"btn-back\"><img src=\"assets/images/back.png\" alt=\"back\" title=\"\" /></button>\n                  <h1>Hose Assembly - Add On</h1>\n                  <button class=\"btn-cart\"><img src=\"assets/images/cart.png\" alt=\"back\" title=\"\" /></button>\n              </div>\n              <div class=\"search_box\">\n                  <div class=\"icon\"><i class=\"zmdi zmdi-search\"></i></div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Search Products...\" />\n              </div>\n              <ul class=\"filter\">\n                <li>Bare Hoses</li>\n                <li>End Fittings</li>\n                <li class=\"active\">Add On</li>\n              </ul>\n              <div class=\"form-group\">\n                  <label>Type of Add on</label>\n                  <select class=\"form-control\">\n                      <option>Pyrojacket</option>\n                  </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <button class=\"btn\">send query</button>\n          </div>\n      </div>\n    </div>\n  </ion-content>\n");

/***/ }),

/***/ "/YCN":
/*!***************************************************!*\
  !*** ./src/app/sidebar/sidebar-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SidebarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarPageRoutingModule", function() { return SidebarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sidebar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.page */ "qK2e");




const routes = [
    {
        path: '',
        component: _sidebar_page__WEBPACK_IMPORTED_MODULE_3__["SidebarPage"]
    }
];
let SidebarPageRoutingModule = class SidebarPageRoutingModule {
};
SidebarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SidebarPageRoutingModule);



/***/ }),

/***/ "hbLJ":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Montserrat\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.automotive_area {\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.automotive_area:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 31%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url('sape1.png');\n  z-index: 0;\n}\n.container {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 30px;\n}\n.automotive_body {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n}\n.header_area {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: center;\n  padding: 30px 0px 50px;\n}\n.header_area h1 {\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  color: #ffffff;\n  font-size: 18px;\n  font-weight: 500;\n}\n.header_area .btn-back {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 3px 0;\n  outline: none;\n  float: left;\n}\n.header_area .btn-cart {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 3px 0;\n  outline: none;\n  float: right;\n}\n.search_box {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  border-radius: 5px;\n  position: relative;\n  z-index: 1;\n  margin: 0 0 60px;\n}\n.search_box .form-control {\n  width: 100%;\n  height: 50px;\n  background: #ffffff;\n  border: 1px solid #ffffff;\n  font-size: 14px;\n  font-weight: 500;\n  color: #868686;\n  padding: 10px 10px 10px 45px;\n  box-shadow: 0 0 30px #e03b1b;\n  outline: none;\n}\n.search_box .form-control::placeholder {\n  font-weight: 500;\n  color: #868686;\n}\n.search_box .icon {\n  position: absolute;\n  top: 7px;\n  left: 15px;\n  font-size: 32px;\n  color: #868686;\n}\n.automotive_body h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 10px;\n  margin: 0 0 40px;\n  font-size: 18px;\n  font-weight: 600;\n  color: #000000;\n  border-bottom: 1px dashed #949494;\n}\n.form-group {\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  margin: 0 0 25px;\n}\nselect.form-control {\n  width: 100%;\n  height: 52px;\n  border-radius: 10px;\n  border: 1px solid #8e8e8d;\n  font-size: 14px;\n  font-weight: 400;\n  color: #616161;\n  padding: 15px 15px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: none;\n}\n.form-group .arrow {\n  position: absolute;\n  top: 17px;\n  right: 17px;\n}\nselect.form-control:focus {\n  border-color: #e9492a;\n}\n.form-group label {\n  position: absolute;\n  top: -10px;\n  left: 12px;\n  background: #ffffff;\n  font-size: 15px;\n  font-weight: 600;\n  color: #000000;\n  padding: 0 2px;\n}\n.btn {\n  width: 100%;\n  height: 52px;\n  background: #e9492a;\n  border: 1px solid #e9492a;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 500;\n  outline: none;\n  border-radius: 10px;\n  letter-spacing: 1px;\n}\n.automotive_body ul {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 15px;\n  margin: 0 0 30px;\n  border-bottom: 1px dashed #949494;\n  display: flex !important;\n  justify-content: space-between !important;\n}\n.automotive_body ul.filter li {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 10px;\n  margin: 0 5px 0 0;\n  font-size: 15px;\n  font-weight: 500;\n  color: #000000;\n  list-style: none;\n  text-align: center;\n  position: relative;\n}\n.automotive_body ul.filter li:last-child {\n  margin: 0 0 0 0;\n}\n.automotive_body ul.filter li:after {\n  content: \"\";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #e85a42;\n  opacity: 0;\n}\n.automotive_body ul.filter li.active {\n  color: #e85a42;\n}\n.automotive_body ul.filter li.active:after {\n  opacity: 1;\n}\n.product_select {\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0 0 20px;\n  display: flex !important;\n  justify-content: space-between !important;\n}\n.check_box {\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.check_box input[type=radio] {\n  display: none;\n}\n.check_box span {\n  font-size: 12px;\n  width: 100%;\n  box-sizing: border-box;\n  display: block;\n  text-align: center;\n  border: 1px solid #000;\n  padding: 7px 10px;\n  border-radius: 30px;\n  transition: 0.5s;\n}\n.check_box input[type=radio]:checked ~ span {\n  color: #e85a42;\n  border-color: #e85a42;\n}\n.form-group.form-radio label.radio-inline {\n  position: relative;\n  left: auto;\n  top: auto;\n  font-size: 14px;\n  text-transform: capitalize;\n  font-weight: 500;\n}\n/*----------- menu area start ----------*/\n.menu_area {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background: #cb4228;\n  z-index: 91;\n  max-width: 75%;\n  box-shadow: 5px 0px 0px rgba(203, 66, 40, 0.16);\n}\n.menu_area .menu_heading {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 30px 30px;\n  text-align: center;\n}\n.menu_area .menu_heading h6 {\n  display: inline-block;\n  padding: 0 0;\n  margin: 0 0;\n  color: #ffffff;\n  font-size: 18px;\n  font-weight: 500;\n}\n.menu_area .menu_heading .btn-back {\n  padding: 0;\n  margin: 0 0;\n  outline: none;\n  border: none;\n  background: transparent;\n  float: left;\n  max-width: 24px;\n}\n.menu_area .menu_body {\n  width: 100%;\n  box-sizing: border-box;\n  height: 500px;\n  overflow: auto;\n}\n.menu_area .menu_body ul {\n  width: 100%;\n  max-width: 85%;\n  padding: 0 0;\n  margin: 0 0;\n  list-style: none;\n}\n.menu_area .menu_body ul li {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0 0;\n  margin: 0 0 8px;\n}\n.menu_area .menu_body ul li a {\n  width: 100%;\n  box-sizing: border-box;\n  font-size: 15px;\n  font-weight: 500;\n  color: #f8dee0;\n  transition: 0.5s;\n  display: block;\n  text-decoration: none;\n  padding: 15px 15px 15px 55px;\n  border-top-right-radius: 30px;\n  border-bottom-right-radius: 30px;\n  position: relative;\n}\n.menu_area .menu_body ul li a.active {\n  background: #cf684e;\n}\n.menu_area .menu_body ul li a:after {\n  content: \">\";\n  position: absolute;\n  top: 9px;\n  right: 15px;\n  font-size: 24px;\n}\n.menu_area .menu_body ul li a .menu_icon {\n  position: absolute;\n  top: 15px;\n  left: 30px;\n}\n.menu_area .menu_body ul li.logout {\n  border-top: 1px dashed #f5d3ca;\n  padding-top: 15px;\n  margin-top: 30px;\n}\n.menu_area .menu_body ul li.logout a:after {\n  display: none;\n}\n/*----------- menu area stop ----------*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpZGViYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHlGQUFBO0FBQ0EsK0hBQUE7QUFDQSxxTUFBQTtBQUNSO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQUNKO0FBRUE7RUFDSSxzQkFBQTtBQUNKO0FBQ0E7RUFBd0IscUNBQUE7QUFHeEI7QUFGQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBS0o7QUFIQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBTUY7QUFKQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7QUFPRjtBQUxBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFRRjtBQU5BO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFTRjtBQVBBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBVUY7QUFSQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFXRjtBQVRBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFZRjtBQVZBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFhRjtBQVhBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFB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O0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFxQ0o7QUFuQ0E7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQXNDSjtBQXBDQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQXVDSjtBQXJDQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXdDSjtBQXRDQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FBeUNKO0FBdkNBO0VBQ0ksbUJBQUE7QUEwQ0o7QUF4Q0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUEyQ0o7QUF6Q0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBNENKO0FBekNBO0VBQ0ksOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBNENKO0FBMUNBO0VBQ0ksYUFBQTtBQTZDSjtBQTNDQSx3Q0FBQSIsImZpbGUiOiJzaWRlYmFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNC4wL2Nzcy9hbGwubWluLmNzcycpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWF0ZXJpYWwtZGVzaWduLWljb25pYy1mb250LzIuMi4wL2Nzcy9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQubWluLmNzcycpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcclxuaHRtbCwgYm9keSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6MTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblxyXG59XHJcbiosIDo6YWZ0ZXIsIDo6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNnsgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjt9XHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmF1dG9tb3RpdmVfYXJlYXtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmF1dG9tb3RpdmVfYXJlYTpiZWZvcmV7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzElO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvc2FwZTEucG5nKTtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwcHggMzBweDtcclxufVxyXG4uYXV0b21vdGl2ZV9ib2R5e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4uaGVhZGVyX2FyZWF7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzMHB4IDBweCA1MHB4O1xyXG59XHJcbi5oZWFkZXJfYXJlYSBoMXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwIDA7XHJcbiAgbWFyZ2luOiAwIDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmhlYWRlcl9hcmVhIC5idG4tYmFja3tcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDNweCAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmhlYWRlcl9hcmVhIC5idG4tY2FydHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDNweCAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5zZWFyY2hfYm94IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIG1hcmdpbjogMCAwIDYwcHg7XHJcbn1cclxuLnNlYXJjaF9ib3ggLmZvcm0tY29udHJvbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzg2ODY4NjtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCA0NXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4IHJnYigyMjQgNTkgMjcpO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnNlYXJjaF9ib3ggLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXJ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzg2ODY4NjtcclxufVxyXG4uc2VhcmNoX2JveCAuaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogN3B4O1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGNvbG9yOiAjODY4Njg2O1xyXG59XHJcbi5hdXRvbW90aXZlX2JvZHkgaDMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMCAwIDEwcHg7XHJcbiAgbWFyZ2luOiAwIDAgNDBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM5NDk0OTQ7XHJcbn1cclxuLmZvcm0tZ3JvdXB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwIDAgMjVweDtcclxufVxyXG5zZWxlY3QuZm9ybS1jb250cm9sIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOGU4ZThkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjNjE2MTYxO1xyXG4gIHBhZGRpbmc6IDE1cHggMTVweDtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmZvcm0tZ3JvdXAgLmFycm93e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE3cHg7XHJcbiAgcmlnaHQ6IDE3cHg7XHJcbn1cclxuc2VsZWN0LmZvcm0tY29udHJvbDpmb2N1c3tcclxuICBib3JkZXItY29sb3I6ICNlOTQ5MmE7XHJcbn1cclxuLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xMHB4O1xyXG4gIGxlZnQ6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBwYWRkaW5nOiAwIDJweDtcclxufVxyXG4uYnRuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgYmFja2dyb3VuZDogI2U5NDkyYTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTk0OTJhO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5hdXRvbW90aXZlX2JvZHkgdWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICBtYXJnaW46IDAgMCAzMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjOTQ5NDk0O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3ghaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5IWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiFpbXBvcnRhbnQ7XHJcbn1cclxuLmF1dG9tb3RpdmVfYm9keSB1bC5maWx0ZXIgbGkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwIDEwcHg7XHJcbiAgICBtYXJnaW46IDAgNXB4IDAgMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmF1dG9tb3RpdmVfYm9keSB1bC5maWx0ZXIgbGk6bGFzdC1jaGlsZHtcclxuICAgIG1hcmdpbjogMCAwIDAgMDtcclxufVxyXG4uYXV0b21vdGl2ZV9ib2R5IHVsLmZpbHRlciBsaTphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTFweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U4NWE0MjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuLmF1dG9tb3RpdmVfYm9keSB1bC5maWx0ZXIgbGkuYWN0aXZle1xyXG4gICAgY29sb3I6ICNlODVhNDI7XHJcbn1cclxuLmF1dG9tb3RpdmVfYm9keSB1bC5maWx0ZXIgbGkuYWN0aXZlOmFmdGVye1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4ucHJvZHVjdF9zZWxlY3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3ghaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5IWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiFpbXBvcnRhbnQ7XHJcbn1cclxuLmNoZWNrX2JveCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5jaGVja19ib3ggaW5wdXRbdHlwZT1cInJhZGlvXCJde1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY2hlY2tfYm94IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgcGFkZGluZzogN3B4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG4uY2hlY2tfYm94IGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkIH4gc3BhbntcclxuICAgIGNvbG9yOiAjZTg1YTQyO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTg1YTQyO1xyXG59XHJcbi5mb3JtLWdyb3VwLmZvcm0tcmFkaW97fVxyXG4uZm9ybS1ncm91cC5mb3JtLXJhZGlvIGxhYmVsLnJhZGlvLWlubGluZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tIG1lbnUgYXJlYSBzdGFydCAtLS0tLS0tLS0tKi9cclxuLm1lbnVfYXJlYSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogI2NiNDIyODtcclxuICAgIHotaW5kZXg6IDkxO1xyXG4gICAgbWF4LXdpZHRoOiA3NSU7XHJcbiAgICBib3gtc2hhZG93OiA1cHggMHB4IDBweCByZ2IoMjAzIDY2IDQwIC8gMTYlKTtcclxufVxyXG4ubWVudV9hcmVhIC5tZW51X2hlYWRpbmd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1lbnVfYXJlYSAubWVudV9oZWFkaW5nIGg2IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5tZW51X2FyZWEgLm1lbnVfaGVhZGluZyAuYnRuLWJhY2sge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXgtd2lkdGg6IDI0cHg7XHJcbn1cclxuLm1lbnVfYXJlYSAubWVudV9ib2R5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4ubWVudV9hcmVhIC5tZW51X2JvZHkgdWx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogODUlO1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5tZW51X2FyZWEgLm1lbnVfYm9keSB1bCBsaXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDA7XHJcbiAgICBtYXJnaW46IDAgMCA4cHg7XHJcbn1cclxuLm1lbnVfYXJlYSAubWVudV9ib2R5IHVsIGxpIGEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjZjhkZWUwO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNTVweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm1lbnVfYXJlYSAubWVudV9ib2R5IHVsIGxpIGEuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZDogI2NmNjg0ZTtcclxufVxyXG4ubWVudV9hcmVhIC5tZW51X2JvZHkgdWwgbGkgYTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIj5cIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuLm1lbnVfYXJlYSAubWVudV9ib2R5IHVsIGxpIGEgLm1lbnVfaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG59XHJcbi5tZW51X2FyZWEgLm1lbnVfYm9keSB1bCBsaSBhIC5tZW51X2ljb24gaW1ne31cclxuLm1lbnVfYXJlYSAubWVudV9ib2R5IHVsIGxpLmxvZ291dCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkICNmNWQzY2E7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLm1lbnVfYXJlYSAubWVudV9ib2R5IHVsIGxpLmxvZ291dCBhOmFmdGVye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vKi0tLS0tLS0tLS0tIG1lbnUgYXJlYSBzdG9wIC0tLS0tLS0tLS0qLyJdfQ== */");

/***/ }),

/***/ "qK2e":
/*!*****************************************!*\
  !*** ./src/app/sidebar/sidebar.page.ts ***!
  \*****************************************/
/*! exports provided: SidebarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarPage", function() { return SidebarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sidebar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sidebar.page.html */ "+dj4");
/* harmony import */ var _sidebar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.page.scss */ "hbLJ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");





//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';




let SidebarPage = class SidebarPage {
    constructor(platform, 
    //private splashScreen: SplashScreen,
    //private statusBar: StatusBar,
    menu, navCtrl, storage, location) {
        this.platform = platform;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.location = location;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        // this.storage.remove("userCart");
        this.storage.get("userDetails").then(val => {
            if (val) {
                this.userDetails = val;
            }
        });
    }
    logout() {
        this.storage.remove("userDetails");
        this.userDetails = null;
        this.navCtrl.navigateForward('/login');
        //this.menu.close();
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
    storePage(page) {
        this.storage.set("goTo", page);
    }
};
SidebarPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
];
SidebarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-sidebar',
        template: _raw_loader_sidebar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sidebar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SidebarPage);



/***/ }),

/***/ "wCP4":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/*! exports provided: SidebarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarPageModule", function() { return SidebarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sidebar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar-routing.module */ "/YCN");
/* harmony import */ var _sidebar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar.page */ "qK2e");







let SidebarPageModule = class SidebarPageModule {
};
SidebarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sidebar_routing_module__WEBPACK_IMPORTED_MODULE_5__["SidebarPageRoutingModule"]
        ],
        declarations: [_sidebar_page__WEBPACK_IMPORTED_MODULE_6__["SidebarPage"]]
    })
], SidebarPageModule);



/***/ })

}]);
//# sourceMappingURL=sidebar-sidebar-module.js.map