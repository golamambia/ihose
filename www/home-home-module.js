(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content [fullscreen]=\"true\">\n  \n    <div class=\"automotive_area\">\n      <div class=\"container\">\n          <div class=\"automotive_body\">\n              <div class=\"header_area\">\n                  <button class=\"btn-back\" routerLink=\"/sidebar\" (click)=\"storePage('home')\"><img src=\"assets/images/menu.png\" alt=\"back\" title=\"\" /></button>\n                  <div class=\"logo\"><img src=\"assets/images/logo2.png\" alt=\"logo\" title=\"\"></div>\n                  <button class=\"btn-cart\"><img src=\"assets/images/cart.png\" alt=\"back\" title=\"\" /></button>\n              </div>\n              <div class=\"search_box\">\n                  <div class=\"icon\"><i class=\"zmdi zmdi-search\"></i></div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Search Products...\" />\n              </div>\n              <div class=\"product_area\">\n                <h3>\n                    Categories\n                </h3>\n                <div class=\"category_body\">\n                    <div class=\"category_box\" routerLink=\"/box-hose/1\">\n                        <div class=\"img_box\"><img src=\"assets/images/category1.png\"></div>\n                        <p>Bare Hoses</p>\n                        <i class=\"zmdi zmdi-caret-right-circle\"></i>\n                    </div>\n                    <div class=\"category_box\" routerLink=\"/endfitting-hose/3\">\n                        <div class=\"img_box\"><img src=\"assets/images/category2.png\"></div>\n                        <p>End Fittings</p>\n                        <i class=\"zmdi zmdi-caret-right-circle\"></i>\n                    </div>\n                    <div class=\"category_box\" routerLink=\"/assembly-hose/4\">\n                        <div class=\"img_box\"><img src=\"assets/images/category3.png\"></div>\n                        <p>Hose Assembly</p>\n                        <i class=\"zmdi zmdi-caret-right-circle\"></i>\n                    </div>\n                    <div class=\"category_box\" routerLink=\"/automotive/7\">\n                        <div class=\"img_box\"><img src=\"assets/images/category4.png\"></div>\n                        <p>Automotive Hoses</p>\n                        <i class=\"zmdi zmdi-caret-right-circle\"></i>\n                    </div>\n                    <div class=\"category_box\" routerLink=\"/earth-moving/8\">\n                        <div class=\"img_box\"><img src=\"assets/images/category5.png\"></div>\n                        <p>HEM Hoses</p>\n                        <i class=\"zmdi zmdi-caret-right-circle\"></i>\n                    </div>\n                    <div class=\"category_box\" routerLink=\"/product\">\n                        <div class=\"img_box\"><img src=\"assets/images/category6.png\"></div>\n                        <p>See All Products</p>\n                        <i class=\"zmdi zmdi-caret-right-circle\"></i>\n                    </div>\n                </div>\n              </div>\n              <div class=\"product_area\">\n                    <h3>\n                        Trending Products\n                        <button class=\"btn-see\">See All</button>\n                    </h3>\n                  <div class=\"product_box\" routerLink=\"/product-details/1\">\n                    <div class=\"img_box\"><img src=\"assets/images/product-details.png\"></div>\n                    <h4>R2AT - 20.7 MPA</h4>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n                    <h5>\n                        Size : 3/16\"\n                        <div class=\"price\">INR 50<strong>/Meter</strong></div>\n                      </h5>\n                  </div>\n                  <div class=\"product_box\" routerLink=\"/product-details/1\">\n                    <div class=\"img_box\"><img src=\"assets/images/product-details.png\"></div>\n                    <h4>R2AT - 20.7 MPA</h4>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n                    <h5>\n                        Size : 3/16\"\n                        <div class=\"price\">INR 50<strong>/Meter</strong></div>\n                      </h5>\n                  </div>\n              </div>\n          </div>\n      </div>\n    </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Montserrat\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.automotive_area {\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  box-sizing: border-box;\n  overflow: scroll;\n}\n.automotive_area:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 31%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url('sape1.png');\n  z-index: 0;\n}\n.container {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 30px;\n}\n.automotive_body {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n}\n.header_area {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: center;\n  padding: 30px 0px 50px;\n}\n.header_area h1 {\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  color: #ffffff;\n  font-size: 18px;\n  font-weight: 500;\n}\n.header_area .btn-back {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 3px 0;\n  outline: none;\n  float: left;\n  margin: 11px 0;\n}\n.header_area .btn-cart {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 3px 0;\n  outline: none;\n  float: right;\n  margin: 4px 0;\n}\n.header_area .logo {\n  display: inline-block;\n  width: 35%;\n  margin: auto;\n}\n.header_area .logo img {\n  width: 100%;\n}\n.search_box {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  border-radius: 5px;\n  position: relative;\n  z-index: 1;\n  margin: 0 0 60px;\n}\n.search_box .form-control {\n  width: 100%;\n  height: 50px;\n  background: #ffffff;\n  border: 1px solid #ffffff;\n  font-size: 14px;\n  font-weight: 500;\n  color: #868686;\n  padding: 10px 10px 10px 45px;\n  box-shadow: 0 0 30px #e03b1b;\n  outline: none;\n}\n.search_box .form-control::placeholder {\n  font-weight: 500;\n  color: #868686;\n}\n.search_box .icon {\n  position: absolute;\n  top: 7px;\n  left: 15px;\n  font-size: 32px;\n  color: #868686;\n}\n.automotive_body h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 10px;\n  margin: 0 0 40px;\n  font-size: 18px;\n  font-weight: 600;\n  color: #000000;\n  border-bottom: 1px dashed #949494;\n}\n.form-group {\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  margin: 0 0 25px;\n}\nselect.form-control {\n  width: 100%;\n  height: 52px;\n  border-radius: 10px;\n  border: 1px solid #8e8e8d;\n  font-size: 14px;\n  font-weight: 400;\n  color: #616161;\n  padding: 15px 15px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: none;\n}\n.form-group .arrow {\n  position: absolute;\n  top: 17px;\n  right: 17px;\n}\nselect.form-control:focus {\n  border-color: #e9492a;\n}\n.form-group label {\n  position: absolute;\n  top: -10px;\n  left: 12px;\n  background: #ffffff;\n  font-size: 15px;\n  font-weight: 600;\n  color: #000000;\n  padding: 0 2px;\n}\n.btn {\n  width: 100%;\n  height: 52px;\n  background: #e9492a;\n  border: 1px solid #e9492a;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 500;\n  outline: none;\n  border-radius: 10px;\n  letter-spacing: 1px;\n}\n.automotive_body ul {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 15px;\n  margin: 0 0 30px;\n  border-bottom: 1px dashed #949494;\n  display: flex !important;\n  justify-content: space-between !important;\n}\n.automotive_body ul.filter li {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 10px;\n  margin: 0 5px 0 0;\n  font-size: 15px;\n  font-weight: 500;\n  color: #000000;\n  list-style: none;\n  text-align: center;\n  position: relative;\n}\n.automotive_body ul.filter li:last-child {\n  margin: 0 0 0 0;\n}\n.automotive_body ul.filter li:after {\n  content: \"\";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #e85a42;\n  opacity: 0;\n}\n.automotive_body ul.filter li.active {\n  color: #e85a42;\n}\n.automotive_body ul.filter li.active:after {\n  opacity: 1;\n}\n.product_select {\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0 0 20px;\n  display: flex !important;\n  justify-content: space-between !important;\n}\n.check_box {\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.check_box input[type=radio] {\n  display: none;\n}\n.check_box span {\n  font-size: 12px;\n  width: 100%;\n  box-sizing: border-box;\n  display: block;\n  text-align: center;\n  border: 1px solid #000;\n  padding: 7px 10px;\n  border-radius: 30px;\n  transition: 0.5s;\n}\n.check_box input[type=radio]:checked ~ span {\n  color: #e85a42;\n  border-color: #e85a42;\n}\n.form-group.form-radio label.radio-inline {\n  position: relative;\n  left: auto;\n  top: auto;\n  font-size: 14px;\n  text-transform: capitalize;\n  font-weight: 500;\n}\n.product_area {\n  width: 100%;\n  box-sizing: border-box;\n}\n.product_area h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 20px;\n  color: #000000;\n  font-size: 18px;\n  font-weight: 600;\n  border: none;\n}\n.product_area h3 .btn-see {\n  outline: none;\n  padding: 0 0;\n  margin: 0 0;\n  border: none;\n  font-size: 15px;\n  font-weight: 400;\n  color: #000000;\n  float: right;\n}\n.product_box {\n  width: 100%;\n  min-height: 109px;\n  box-sizing: border-box;\n  position: relative;\n  padding-left: 110px;\n  margin: 0 0 20px;\n}\n.product_box h4 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 10px;\n  font-size: 16px;\n  font-weight: 600;\n}\n.product_box p {\n  width: 100%;\n  box-sizing: border-box;\n  color: #000;\n  font-weight: 400;\n  font-size: 14px;\n  margin: 0 0 15px;\n}\n.product_box h5 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 0;\n  font-size: 16px;\n  font-weight: 500;\n}\n.product_box h5 .price {\n  float: right;\n  font-size: 16px;\n  font-weight: 600;\n  color: #e54b25;\n}\n.product_box h5 .price strong {\n  font-weight: 500;\n  color: #8a8a8a;\n}\n.product_box .img_box {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 97px;\n  height: 109px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8ebe7;\n  border-radius: 15px;\n  overflow: hidden;\n  padding: 10px 10px;\n}\n.category_body {\n  width: 100%;\n  box-sizing: border-box;\n  min-height: 240px;\n}\n.category_body .category_box {\n  width: 100%;\n  float: left;\n  box-sizing: border-box;\n  border: 1px solid #eaeaea;\n  margin: 0 10px 20px 0;\n  max-width: 30%;\n  text-align: center;\n  border-radius: 10px;\n  padding: 15px 12px;\n  min-height: 190px;\n}\n.category_body .category_box:nth-of-type(3n) {\n  max-width: 32%;\n  margin-right: 0;\n}\n.category_body .category_box p {\n  width: 100%;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #1d1d1b;\n  margin: 0 0 20px;\n}\n.category_body .category_box .img_box {\n  width: 67px;\n  height: 67px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #eaeaea;\n  background: #ffffff;\n  border-radius: 10px;\n  margin: 0 auto 12px;\n}\n.category_body .category_box i {\n  font-size: 20px;\n  color: #000;\n}\n.category_body .category_box:hover {\n  background: #e54b25;\n  border-color: #e54b25;\n  box-shadow: 2px 3px 5px #a9a6a6;\n}\n.category_body .category_box:hover p, .category_body .category_box:hover i {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHlGQUFBO0FBQ0EsK0hBQUE7QUFDQSxxTUFBQTtBQUNSO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQUNKO0FBRUE7RUFDSSxzQkFBQTtBQUNKO0FBQ0E7RUFBd0IscUNBQUE7QUFHeEI7QUFGQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBS0o7QUFIQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBTUo7QUFKQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7QUFPRjtBQUxBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFRRjtBQU5BO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFTRjtBQVBBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBVUY7QUFSQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFXRjtBQVRBO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBWUo7QUFWQTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQWFKO0FBWEE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFD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QUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFnREo7QUE1Q0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQStDSjtBQTdDQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtBQWdESjtBQTlDQTtFQUNJLFdBQUE7QUFpREoiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTQuMC9jc3MvYWxsLm1pbi5jc3MnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQvMi4yLjAvY3NzL21hdGVyaWFsLWRlc2lnbi1pY29uaWMtZm9udC5taW4uY3NzJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcbmh0bWwsIGJvZHkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB6LWluZGV4OjE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblxufVxuKiwgOjphZnRlciwgOjpiZWZvcmUge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2eyBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO31cbmltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbn1cbi5hdXRvbW90aXZlX2FyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbi5hdXRvbW90aXZlX2FyZWE6YmVmb3Jle1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMxJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9zYXBlMS5wbmcpO1xuICB6LWluZGV4OiAwO1xufVxuLmNvbnRhaW5lcntcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDBweCAzMHB4O1xufVxuLmF1dG9tb3RpdmVfYm9keXtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi5oZWFkZXJfYXJlYXtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweCAwcHggNTBweDtcbn1cbi5oZWFkZXJfYXJlYSBoMXtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwIDA7XG4gIG1hcmdpbjogMCAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmhlYWRlcl9hcmVhIC5idG4tYmFja3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDNweCAwO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAxMXB4IDA7XG59XG4uaGVhZGVyX2FyZWEgLmJ0bi1jYXJ0e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogM3B4IDA7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luOiA0cHggMDtcbn1cbi5oZWFkZXJfYXJlYSAubG9nb3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG4uaGVhZGVyX2FyZWEgLmxvZ28gaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnNlYXJjaF9ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbjogMCAwIDYwcHg7XG59XG4uc2VhcmNoX2JveCAuZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzg2ODY4NjtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNDVweDtcbiAgYm94LXNoYWRvdzogMCAwIDMwcHggcmdiKDIyNCA1OSAyNyk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc2VhcmNoX2JveCAuZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlcntcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM4Njg2ODY7XG59XG4uc2VhcmNoX2JveCAuaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3cHg7XG4gIGxlZnQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6ICM4Njg2ODY7XG59XG4uYXV0b21vdGl2ZV9ib2R5IGgzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAgMCAxMHB4O1xuICBtYXJnaW46IDAgMCA0MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM5NDk0OTQ7XG59XG4uZm9ybS1ncm91cHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIDAgMjVweDtcbn1cbnNlbGVjdC5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOGU4ZThkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNjE2MTYxO1xuICBwYWRkaW5nOiAxNXB4IDE1cHg7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmZvcm0tZ3JvdXAgLmFycm93e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTdweDtcbiAgcmlnaHQ6IDE3cHg7XG59XG5zZWxlY3QuZm9ybS1jb250cm9sOmZvY3Vze1xuICBib3JkZXItY29sb3I6ICNlOTQ5MmE7XG59XG4uZm9ybS1ncm91cCBsYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgbGVmdDogMTJweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgcGFkZGluZzogMCAycHg7XG59XG4uYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTJweDtcbiAgYmFja2dyb3VuZDogI2U5NDkyYTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5NDkyYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLmF1dG9tb3RpdmVfYm9keSB1bCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcbiAgICBtYXJnaW46IDAgMCAzMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzk0OTQ5NDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveCFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeSFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuIWltcG9ydGFudDtcbn1cbi5hdXRvbW90aXZlX2JvZHkgdWwuZmlsdGVyIGxpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDAgMCAxMHB4O1xuICAgIG1hcmdpbjogMCA1cHggMCAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hdXRvbW90aXZlX2JvZHkgdWwuZmlsdGVyIGxpOmxhc3QtY2hpbGR7XG4gICAgbWFyZ2luOiAwIDAgMCAwO1xufVxuLmF1dG9tb3RpdmVfYm9keSB1bC5maWx0ZXIgbGk6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0xcHg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZTg1YTQyO1xuICAgIG9wYWNpdHk6IDA7XG59XG4uYXV0b21vdGl2ZV9ib2R5IHVsLmZpbHRlciBsaS5hY3RpdmV7XG4gICAgY29sb3I6ICNlODVhNDI7XG59XG4uYXV0b21vdGl2ZV9ib2R5IHVsLmZpbHRlciBsaS5hY3RpdmU6YWZ0ZXJ7XG4gICAgb3BhY2l0eTogMTtcbn1cbi5wcm9kdWN0X3NlbGVjdHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMCAwIDIwcHg7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3ghaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnkhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiFpbXBvcnRhbnQ7XG59XG4uY2hlY2tfYm94IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5jaGVja19ib3ggaW5wdXRbdHlwZT1cInJhZGlvXCJde1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4uY2hlY2tfYm94IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbn1cbi5jaGVja19ib3ggaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgfiBzcGFue1xuICAgIGNvbG9yOiAjZTg1YTQyO1xuICAgIGJvcmRlci1jb2xvcjogI2U4NWE0Mjtcbn1cbi5mb3JtLWdyb3VwLmZvcm0tcmFkaW97fVxuLmZvcm0tZ3JvdXAuZm9ybS1yYWRpbyBsYWJlbC5yYWRpby1pbmxpbmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHRvcDogYXV0bztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnByb2R1Y3RfYXJlYXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLnByb2R1Y3RfYXJlYSBoM3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDAgMDtcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbi5wcm9kdWN0X2FyZWEgaDMgLmJ0bi1zZWV7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwIDA7XG4gICAgbWFyZ2luOiAwIDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLnByb2R1Y3RfYm94e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwOXB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogMTEwcHg7XG4gICAgbWFyZ2luOiAwIDAgMjBweDtcbn1cbi5wcm9kdWN0X2JveCBoNHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDAgMDtcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLnByb2R1Y3RfYm94IHAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luOiAwIDAgMTVweDtcbn1cbi5wcm9kdWN0X2JveCBoNXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDAgMDtcbiAgICBtYXJnaW46IDAgMCAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLnByb2R1Y3RfYm94IGg1IC5wcmljZXtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNlNTRiMjU7XG59XG4ucHJvZHVjdF9ib3ggaDUgLnByaWNlIHN0cm9uZ3tcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjOGE4YThhO1xufVxuLnByb2R1Y3RfYm94IC5pbWdfYm94e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogOTdweDtcbiAgICBoZWlnaHQ6IDEwOXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZjhlYmU3O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG59XG5cbi5jYXRlZ29yeV9ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1pbi1oZWlnaHQ6IDI0MHB4O1xufVxuLmNhdGVnb3J5X2JvZHkgLmNhdGVnb3J5X2JveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgIG1hcmdpbjogMCAxMHB4IDIwcHggMDtcbiAgICBtYXgtd2lkdGg6IDMwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxNXB4IDEycHg7XG4gICAgbWluLWhlaWdodDogMTkwcHg7XG59XG4uY2F0ZWdvcnlfYm9keSAuY2F0ZWdvcnlfYm94Om50aC1vZi10eXBlKDNuKXtcbiAgICBtYXgtd2lkdGg6IDMyJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4uY2F0ZWdvcnlfYm9keSAuY2F0ZWdvcnlfYm94IHB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzFkMWQxYjtcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xufVxuLmNhdGVnb3J5X2JvZHkgLmNhdGVnb3J5X2JveCAuaW1nX2JveCB7XG4gICAgd2lkdGg6IDY3cHg7XG4gICAgaGVpZ2h0OiA2N3B4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW46IDAgYXV0byAxMnB4O1xufVxuLmNhdGVnb3J5X2JvZHkgLmNhdGVnb3J5X2JveCAuaW1nX2JveCBpbWd7fVxuXG4uY2F0ZWdvcnlfYm9keSAuY2F0ZWdvcnlfYm94IGl7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjMDAwO1xufVxuLmNhdGVnb3J5X2JvZHkgLmNhdGVnb3J5X2JveDpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2U1NGIyNTtcbiAgICBib3JkZXItY29sb3I6ICNlNTRiMjU7XG4gICAgYm94LXNoYWRvdzogMnB4IDNweCA1cHggcmdiKDE2OSAxNjYgMTY2KTtcbn1cbi5jYXRlZ29yeV9ib2R5IC5jYXRlZ29yeV9ib3g6aG92ZXIgcCwgLmNhdGVnb3J5X2JvZHkgLmNhdGVnb3J5X2JveDpob3ZlciBpe1xuICAgIGNvbG9yOiAjZmZmO1xufSJdfQ== */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "e8h1");








let HomePage = class HomePage {
    constructor(http, navCtrl, storage, loadingController, alertController) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.appUrl = "https://theitvibe.com/project/ihose/api/getHose";
    }
    storePage(page) {
        this.storage.set("goTo", page);
    }
    ngOnInit() {
        this.listing();
    }
    listing() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: ''
            });
            yield loading.present();
            this.http.get(this.appUrl)
                .subscribe(res => {
                //console.log(res);
                this.res = res.json();
                // console.log(this.res);
                if (this.res) {
                    loading.dismiss();
                    this.data_list = this.res;
                    //this.loading.hide();
                }
                else {
                    alert("Server error");
                    loading.dismiss();
                }
            }, (err) => {
                loading.dismiss();
                console.log(err);
            });
        });
    }
    goTo(id) {
        //console.log(id);
        if (id == 4) {
            this.navCtrl.navigateForward('/hose-page/' + id);
        }
        else if (id == 7) {
            this.navCtrl.navigateForward('/automotive/' + id);
        }
        else {
            this.navCtrl.navigateForward('/earth-moving/' + id);
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map