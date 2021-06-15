(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sidebar-sidebar-module"],{

/***/ "+dj4":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  \n    <div class=\"menu_area\">\n        <div class=\"menu_heading\">\n            <button class=\"btn-back\" (click)=\"back()\"><img src=\"assets/images/back.png\" alt=\"back\" title=\"\" /></button>\n            <h6>settings</h6>\n        </div>\n        <div class=\"menu_body\">\n            <ul>\n                <li routerLink=\"/\" (click)=\"storePage('sidebar')\">\n                    <a href=\"#\" class=\"active\">\n                        <div class=\"menu_icon\"><img src=\"assets/images/menu1.png\"></div>\n                        Home\n                    </a>\n                </li>\n                <li *ngIf=\"!userDetails\" routerLink=\"/login\" (click)=\"storePage('sidebar')\">\n                    <a href=\"#\">\n                        <div class=\"menu_icon\"><img src=\"assets/images/menu2.png\"></div>\n                        Login\n                    </a>\n                </li>\n                <li *ngIf=\"!userDetails\" routerLink=\"/register\" (click)=\"storePage('sidebar')\">\n                    <a href=\"#\">\n                        <div class=\"menu_icon\"><img src=\"assets/images/menu2.png\"></div>\n                        Registration\n                    </a>\n                </li>\n                 <li *ngIf=\"userDetails\" routerLink=\"/order-list\" (click)=\"storePage('sidebar')\">\n                    <a href=\"#\">\n                        <div class=\"menu_icon\"><img src=\"assets/images/menu6.png\"></div>\n                       My Order\n                    </a>\n                </li>\n                 <li *ngIf=\"userDetails\" routerLink=\"/address-list\" (click)=\"storePage('sidebar')\">\n                    <a href=\"#\">\n                        <div class=\"menu_icon\"><img src=\"assets/images/menu6.png\"></div>\n                        Address\n                    </a>\n                </li>\n                  <li *ngIf=\"userDetails\" routerLink=\"/profile\" (click)=\"storePage('sidebar')\">\n                    <a href=\"#\">\n                        <div class=\"menu_icon\"><img src=\"assets/images/menu2.png\"></div>\n                        Profile\n                    </a>\n                </li>\n                 <li *ngIf=\"userDetails\">\n                    <a href=\"#\" routerLink=\"/change-password\" (click)=\"storePage('sidebar')\">\n                        <div class=\"menu_icon\"><img src=\"assets/images/menu2.png\"></div>\n                        Change Password\n                    </a>\n                </li>\n                <li routerLink=\"/about\" (click)=\"storePage('sidebar')\">\n                    <a href=\"#\">\n                        <div class=\"menu_icon\"><img src=\"assets/images/menu3.png\"></div>\n                        About\n                    </a>\n                </li>\n                <li routerLink=\"/contact\" (click)=\"storePage('sidebar')\">\n                    <a href=\"#\">\n                        <div class=\"menu_icon\"><img src=\"assets/images/menu4.png\"></div>\n                        Contact Us\n                    </a>\n                </li>\n                <li routerLink=\"/privacy-policy\" (click)=\"storePage('sidebar')\">\n                    <a href=\"#\">\n                        <div class=\"menu_icon\"><img src=\"assets/images/menu5.png\"></div>\n                        Privacy Policy\n                    </a>\n                </li>\n                <li routerLink=\"/term-condition\" (click)=\"storePage('sidebar')\">\n                    <a href=\"#\">\n                        <div class=\"menu_icon\"><img src=\"assets/images/menu6.png\"></div>\n                        Terms & Conditions\n                    </a>\n                </li>\n                <li class=\"logout\"  *ngIf=\"userDetails\" (click)=\"logout()\">\n                    <a href=\"#\">\n                        <div class=\"menu_icon\"><img src=\"assets/images/menu7.png\"></div>\n                        Log Out\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"automotive_area\">\n      <div class=\"container\">\n          <div class=\"automotive_body\">\n              <div class=\"header_area\">\n                  <button class=\"btn-back\"><img src=\"assets/images/back.png\" alt=\"back\" title=\"\" /></button>\n                  <h1>Hose Assembly - Add On</h1>\n                  <button class=\"btn-cart\"><img src=\"assets/images/cart.png\" alt=\"back\" title=\"\" /></button>\n              </div>\n              <div class=\"search_box\">\n                  <div class=\"icon\"><i class=\"zmdi zmdi-search\"></i></div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Search Products...\" />\n              </div>\n              <ul class=\"filter\">\n                <li>Bare Hoses</li>\n                <li>End Fittings</li>\n                <li class=\"active\">Add On</li>\n              </ul>\n              <div class=\"form-group\">\n                  <label>Type of Add on</label>\n                  <select class=\"form-control\">\n                      <option>Pyrojacket</option>\n                  </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <button class=\"btn\">send query</button>\n          </div>\n      </div>\n    </div>\n  \n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Montserrat\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.automotive_area {\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.automotive_area:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 31%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url('sape1.png');\n  z-index: 0;\n}\n.container {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 30px;\n}\n.automotive_body {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n}\n.header_area {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: center;\n  padding: 30px 0px 50px;\n}\n.header_area h1 {\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  color: #ffffff;\n  font-size: 18px;\n  font-weight: 500;\n}\n.header_area .btn-back {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 3px 0;\n  outline: none;\n  float: left;\n}\n.header_area .btn-cart {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 3px 0;\n  outline: none;\n  float: right;\n}\n.search_box {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  border-radius: 5px;\n  position: relative;\n  z-index: 1;\n  margin: 0 0 60px;\n}\n.search_box .form-control {\n  width: 100%;\n  height: 50px;\n  background: #ffffff;\n  border: 1px solid #ffffff;\n  font-size: 14px;\n  font-weight: 500;\n  color: #868686;\n  padding: 10px 10px 10px 45px;\n  box-shadow: 0 0 30px #e03b1b;\n  outline: none;\n}\n.search_box .form-control::placeholder {\n  font-weight: 500;\n  color: #868686;\n}\n.search_box .icon {\n  position: absolute;\n  top: 7px;\n  left: 15px;\n  font-size: 32px;\n  color: #868686;\n}\n.automotive_body h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 10px;\n  margin: 0 0 40px;\n  font-size: 18px;\n  font-weight: 600;\n  color: #000000;\n  border-bottom: 1px dashed #949494;\n}\n.form-group {\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  margin: 0 0 25px;\n}\nselect.form-control {\n  width: 100%;\n  height: 52px;\n  border-radius: 10px;\n  border: 1px solid #8e8e8d;\n  font-size: 14px;\n  font-weight: 400;\n  color: #616161;\n  padding: 15px 15px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: none;\n}\n.form-group .arrow {\n  position: absolute;\n  top: 17px;\n  right: 17px;\n}\nselect.form-control:focus {\n  border-color: #e9492a;\n}\n.form-group label {\n  position: absolute;\n  top: -10px;\n  left: 12px;\n  background: #ffffff;\n  font-size: 15px;\n  font-weight: 600;\n  color: #000000;\n  padding: 0 2px;\n}\n.btn {\n  width: 100%;\n  height: 52px;\n  background: #e9492a;\n  border: 1px solid #e9492a;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 500;\n  outline: none;\n  border-radius: 10px;\n  letter-spacing: 1px;\n}\n.automotive_body ul {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 15px;\n  margin: 0 0 30px;\n  border-bottom: 1px dashed #949494;\n  display: flex !important;\n  justify-content: space-between !important;\n}\n.automotive_body ul.filter li {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 10px;\n  margin: 0 5px 0 0;\n  font-size: 15px;\n  font-weight: 500;\n  color: #000000;\n  list-style: none;\n  text-align: center;\n  position: relative;\n}\n.automotive_body ul.filter li:last-child {\n  margin: 0 0 0 0;\n}\n.automotive_body ul.filter li:after {\n  content: \"\";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #e85a42;\n  opacity: 0;\n}\n.automotive_body ul.filter li.active {\n  color: #e85a42;\n}\n.automotive_body ul.filter li.active:after {\n  opacity: 1;\n}\n.product_select {\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0 0 20px;\n  display: flex !important;\n  justify-content: space-between !important;\n}\n.check_box {\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.check_box input[type=radio] {\n  display: none;\n}\n.check_box span {\n  font-size: 12px;\n  width: 100%;\n  box-sizing: border-box;\n  display: block;\n  text-align: center;\n  border: 1px solid #000;\n  padding: 7px 10px;\n  border-radius: 30px;\n  transition: 0.5s;\n}\n.check_box input[type=radio]:checked ~ span {\n  color: #e85a42;\n  border-color: #e85a42;\n}\n.form-group.form-radio label.radio-inline {\n  position: relative;\n  left: auto;\n  top: auto;\n  font-size: 14px;\n  text-transform: capitalize;\n  font-weight: 500;\n}\n/*----------- menu area start ----------*/\n.menu_area {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background: #cb4228;\n  z-index: 91;\n  max-width: 75%;\n}\n.menu_area .menu_heading {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 30px 30px;\n  text-align: center;\n}\n.menu_area .menu_heading h6 {\n  display: inline-block;\n  padding: 0 0;\n  margin: 0 0;\n  color: #ffffff;\n  font-size: 18px;\n  font-weight: 500;\n}\n.menu_area .menu_heading .btn-back {\n  padding: 4px 0;\n  margin: 0 0;\n  outline: none;\n  border: none;\n  background: transparent;\n  float: left;\n}\n.menu_area .menu_body {\n  width: 100%;\n  box-sizing: border-box;\n}\n.menu_area .menu_body ul {\n  width: 100%;\n  max-width: 85%;\n  padding: 0 0;\n  margin: 0 0;\n  list-style: none;\n}\n.menu_area .menu_body ul li {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0 0;\n  margin: 0 0 8px;\n}\n.menu_area .menu_body ul li a {\n  width: 100%;\n  box-sizing: border-box;\n  font-size: 15px;\n  font-weight: 500;\n  color: #f8dee0;\n  transition: 0.5s;\n  display: block;\n  text-decoration: none;\n  padding: 15px 15px 15px 55px;\n  border-top-right-radius: 30px;\n  border-bottom-right-radius: 30px;\n  position: relative;\n}\n.menu_area .menu_body ul li a.active {\n  background: #cf684e;\n}\n.menu_area .menu_body ul li a:after {\n  content: \">\";\n  position: absolute;\n  top: 9px;\n  right: 15px;\n  font-size: 24px;\n}\n.menu_area .menu_body ul li a .menu_icon {\n  position: absolute;\n  top: 15px;\n  left: 30px;\n}\n.menu_area .menu_body ul li.logout {\n  border-top: 1px dashed #f5d3ca;\n  padding-top: 15px;\n  margin-top: 30px;\n}\n.menu_area .menu_body ul li.logout a:after {\n  display: none;\n}\n/*----------- menu area stop ----------*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpZGViYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHlGQUFBO0FBQ0EsK0hBQUE7QUFDQSxxTUFBQTtBQUNSO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQUNKO0FBRUE7RUFDSSxzQkFBQTtBQUNKO0FBQ0E7RUFBd0IscUNBQUE7QUFHeEI7QUFGQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBS0o7QUFIQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBTUY7QUFKQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7QUFPRjtBQUxBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFRRjtBQU5BO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFTRjtBQVBBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBVUY7QUFSQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFXRjtBQVRBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFZRjtBQVZBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFhRjtBQVhBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFB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RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFxQ0o7QUFuQ0E7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7QUFzQ0o7QUFwQ0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUF1Q0o7QUFyQ0E7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUF3Q0o7QUF0Q0E7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQXlDSjtBQXZDQTtFQUNJLG1CQUFBO0FBMENKO0FBeENBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBMkNKO0FBekNBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQTRDSjtBQXpDQTtFQUNJLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQTRDSjtBQTFDQTtFQUNJLGFBQUE7QUE2Q0o7QUEzQ0Esd0NBQUEiLCJmaWxlIjoic2lkZWJhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTQuMC9jc3MvYWxsLm1pbi5jc3MnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGVyaWFsLWRlc2lnbi1pY29uaWMtZm9udC8yLjIuMC9jc3MvbWF0ZXJpYWwtZGVzaWduLWljb25pYy1mb250Lm1pbi5jc3MnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XHJcbmh0bWwsIGJvZHkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OjE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxufVxyXG4qLCA6OmFmdGVyLCA6OmJlZm9yZSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDZ7IGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7fVxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5hdXRvbW90aXZlX2FyZWF7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5hdXRvbW90aXZlX2FyZWE6YmVmb3Jle1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMxJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3NhcGUxLnBuZyk7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG4uY29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMHB4IDMwcHg7XHJcbn1cclxuLmF1dG9tb3RpdmVfYm9keXtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLmhlYWRlcl9hcmVhe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMzBweCAwcHggNTBweDtcclxufVxyXG4uaGVhZGVyX2FyZWEgaDF7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMCAwO1xyXG4gIG1hcmdpbjogMCAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5oZWFkZXJfYXJlYSAuYnRuLWJhY2t7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAzcHggMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5oZWFkZXJfYXJlYSAuYnRuLWNhcnR7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAzcHggMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG4uc2VhcmNoX2JveCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBtYXJnaW46IDAgMCA2MHB4O1xyXG59XHJcbi5zZWFyY2hfYm94IC5mb3JtLWNvbnRyb2wge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICM4Njg2ODY7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNDVweDtcclxuICBib3gtc2hhZG93OiAwIDAgMzBweCByZ2IoMjI0IDU5IDI3KTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5zZWFyY2hfYm94IC5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVye1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICM4Njg2ODY7XHJcbn1cclxuLnNlYXJjaF9ib3ggLmljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDdweDtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBjb2xvcjogIzg2ODY4NjtcclxufVxyXG4uYXV0b21vdGl2ZV9ib2R5IGgzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDAgMCAxMHB4O1xyXG4gIG1hcmdpbjogMCAwIDQwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjOTQ5NDk0O1xyXG59XHJcbi5mb3JtLWdyb3Vwe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMCAwIDI1cHg7XHJcbn1cclxuc2VsZWN0LmZvcm0tY29udHJvbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzhlOGU4ZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIzYxNjE2MTtcclxuICBwYWRkaW5nOiAxNXB4IDE1cHg7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5mb3JtLWdyb3VwIC5hcnJvd3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxN3B4O1xyXG4gIHJpZ2h0OiAxN3B4O1xyXG59XHJcbnNlbGVjdC5mb3JtLWNvbnRyb2w6Zm9jdXN7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZTk0OTJhO1xyXG59XHJcbi5mb3JtLWdyb3VwIGxhYmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTBweDtcclxuICBsZWZ0OiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgcGFkZGluZzogMCAycHg7XHJcbn1cclxuLmJ0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOTQ5MmE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5NDkyYTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4uYXV0b21vdGl2ZV9ib2R5IHVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMzBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzk0OTQ5NDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94IWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeSFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4haW1wb3J0YW50O1xyXG59XHJcbi5hdXRvbW90aXZlX2JvZHkgdWwuZmlsdGVyIGxpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMCAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIDVweCAwIDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5hdXRvbW90aXZlX2JvZHkgdWwuZmlsdGVyIGxpOmxhc3QtY2hpbGR7XHJcbiAgICBtYXJnaW46IDAgMCAwIDA7XHJcbn1cclxuLmF1dG9tb3RpdmVfYm9keSB1bC5maWx0ZXIgbGk6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0xcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQ6ICNlODVhNDI7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcbi5hdXRvbW90aXZlX2JvZHkgdWwuZmlsdGVyIGxpLmFjdGl2ZXtcclxuICAgIGNvbG9yOiAjZTg1YTQyO1xyXG59XHJcbi5hdXRvbW90aXZlX2JvZHkgdWwuZmlsdGVyIGxpLmFjdGl2ZTphZnRlcntcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuLnByb2R1Y3Rfc2VsZWN0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94IWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeSFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4haW1wb3J0YW50O1xyXG59XHJcbi5jaGVja19ib3gge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uY2hlY2tfYm94IGlucHV0W3R5cGU9XCJyYWRpb1wiXXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmNoZWNrX2JveCBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgIHBhZGRpbmc6IDdweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuLmNoZWNrX2JveCBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB+IHNwYW57XHJcbiAgICBjb2xvcjogI2U4NWE0MjtcclxuICAgIGJvcmRlci1jb2xvcjogI2U4NWE0MjtcclxufVxyXG4uZm9ybS1ncm91cC5mb3JtLXJhZGlve31cclxuLmZvcm0tZ3JvdXAuZm9ybS1yYWRpbyBsYWJlbC5yYWRpby1pbmxpbmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHRvcDogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLSBtZW51IGFyZWEgc3RhcnQgLS0tLS0tLS0tLSovXHJcbi5tZW51X2FyZWEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6ICNjYjQyMjg7XHJcbiAgICB6LWluZGV4OiA5MTtcclxuICAgIG1heC13aWR0aDogNzUlO1xyXG59XHJcbi5tZW51X2FyZWEgLm1lbnVfaGVhZGluZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDMwcHggMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubWVudV9hcmVhIC5tZW51X2hlYWRpbmcgaDYge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLm1lbnVfYXJlYSAubWVudV9oZWFkaW5nIC5idG4tYmFjayB7XHJcbiAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLm1lbnVfYXJlYSAubWVudV9ib2R5e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5tZW51X2FyZWEgLm1lbnVfYm9keSB1bHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA4NSU7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLm1lbnVfYXJlYSAubWVudV9ib2R5IHVsIGxpe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwIDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDhweDtcclxufVxyXG4ubWVudV9hcmVhIC5tZW51X2JvZHkgdWwgbGkgYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNmOGRlZTA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1NXB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubWVudV9hcmVhIC5tZW51X2JvZHkgdWwgbGkgYS5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2Y2ODRlO1xyXG59XHJcbi5tZW51X2FyZWEgLm1lbnVfYm9keSB1bCBsaSBhOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiPlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA5cHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4ubWVudV9hcmVhIC5tZW51X2JvZHkgdWwgbGkgYSAubWVudV9pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbn1cclxuLm1lbnVfYXJlYSAubWVudV9ib2R5IHVsIGxpIGEgLm1lbnVfaWNvbiBpbWd7fVxyXG4ubWVudV9hcmVhIC5tZW51X2JvZHkgdWwgbGkubG9nb3V0IHtcclxuICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgI2Y1ZDNjYTtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4ubWVudV9hcmVhIC5tZW51X2JvZHkgdWwgbGkubG9nb3V0IGE6YWZ0ZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi8qLS0tLS0tLS0tLS0gbWVudSBhcmVhIHN0b3AgLS0tLS0tLS0tLSovIl19 */");

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
        this.navCtrl.navigateForward('home');
        //this.menu.close();
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