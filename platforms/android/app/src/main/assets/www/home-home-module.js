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
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content [fullscreen]=\"true\">\n  \n    <div class=\"automotive_area\">\n      <div class=\"container\">\n          <div class=\"automotive_body\">\n              <div class=\"header_area\">\n                 <button class=\"btn-back\" routerLink=\"/sidebar\" (click)=\"storePage('home')\"><img src=\"assets/images/menu.png\" alt=\"back\" title=\"\" /></button>\n                  <div class=\"logo\"><img src=\"assets/images/logo2.png\" alt=\"logo\" title=\"\"></div>\n                  <button class=\"btn-cart\"><img src=\"assets/images/cart.png\" alt=\"back\" title=\"\" /></button>\n              </div>\n              <div class=\"search_box\">\n                  <div class=\"icon\"><i class=\"zmdi zmdi-search\"></i></div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Search Products...\" />\n              </div>\n              <div class=\"product_area\">\n                <h3>\n                    Categories\n                </h3>\n                <div class=\"category_body\">\n                    <button class=\"category_box\" routerLink=\"/box-hose/1\">\n                      <div class=\"d-block\">\n                        <div class=\"img_box\" ><img src=\"assets/images/category1.png\"></div>\n                        <p>Bare Hoses</p>\n                        <i class=\"zmdi zmdi-caret-right-circle\"></i>\n                      </div>\n                    </button>\n                    <button class=\"category_box\" routerLink=\"/endfitting-hose/3\">\n                        <div class=\"d-block\">\n                        <div class=\"img_box\" ><img src=\"assets/images/category2.png\"></div>\n                        <p>End Fittings</p>\n                        <i class=\"zmdi zmdi-caret-right-circle\"></i>\n                    </div>\n                    </button>\n                    <button class=\"category_box\" routerLink=\"/assembly-hose/4\">\n                        <div class=\"d-block\">\n                        <div class=\"img_box\"><img src=\"assets/images/category3.png\"></div>\n                        <p>Hose Assembly</p>\n                        <i class=\"zmdi zmdi-caret-right-circle\"></i>\n                    </div>\n                    </button>\n                    <button class=\"category_box\" routerLink=\"/automotive/7\">\n                        <div class=\"d-block\">\n                        <div class=\"img_box\"><img src=\"assets/images/category4.png\"></div>\n                        <p>Automotive Hoses</p>\n                        <i class=\"zmdi zmdi-caret-right-circle\"></i>\n                    </div>\n                    </button>\n                    <button class=\"category_box\"  routerLink=\"/earth-moving/8\">\n                        <div class=\"d-block\">\n                        <div class=\"img_box\"><img src=\"assets/images/category5.png\"></div>\n                        <p>HEM Hoses</p>\n                        <i class=\"zmdi zmdi-caret-right-circle\"></i>\n                    </div>\n                    </button>\n                    <button class=\"category_box\" routerLink=\"/product\">\n                        <div class=\"d-block\">\n                        <div class=\"img_box\"><img src=\"assets/images/category6.png\"></div>\n                        <p>See All Products</p>\n                        <i class=\"zmdi zmdi-caret-right-circle\"></i>\n                    </div>\n                    </button>\n                </div>\n              </div>\n              <div class=\"product_area\">\n                    <h3>\n                        Trending Products\n                        <button class=\"btn-see\" routerLink=\"/product\">See All</button>\n                    </h3>\n                  <div class=\"product_box\" routerLink=\"/product-details/1\">\n                    <div class=\"img_box\"><img src=\"assets/images/product-details.png\"></div>\n                    <h4>R2AT - 20.7 MPA</h4>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n                    <h5>\n                        Size : 3/16\"\n                        <div class=\"price\">INR 50<strong>/Meter</strong></div>\n                      </h5>\n                  </div>\n                  <div class=\"product_box\" routerLink=\"/product-details/1\">\n                    <div class=\"img_box\"><img src=\"assets/images/product-details.png\"></div>\n                    <h4>R2AT - 20.7 MPA</h4>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n                    <h5>\n                        Size : 3/16\"\n                        <div class=\"price\">INR 50<strong>/Meter</strong></div>\n                      </h5>\n                  </div>\n              </div>\n          </div>\n      </div>\n    </div>\n  \n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Montserrat\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.automotive_area {\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  box-sizing: border-box;\n  overflow: scroll;\n}\n.automotive_area:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 36%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url('sape1.png');\n  z-index: 0;\n}\n.container {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 24px;\n}\n.automotive_body {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n}\n.header_area {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: center;\n  padding: 30px 0px 24px;\n  position: relative;\n}\n.header_area h1 {\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  color: #ffffff;\n  font-size: 18px;\n  font-weight: 500;\n}\n.header_area .btn-back {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 0;\n  outline: none;\n  float: left;\n  margin: 8px 0;\n  max-width: 32px;\n}\n.header_area .btn-cart {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 3px 0;\n  outline: none;\n  float: right;\n  margin: 4px 0;\n  max-width: 32px;\n  outline: none;\n  cursor: pointer;\n}\n.header_area .logo {\n  display: inline-block;\n  width: 114px;\n  margin: auto;\n}\n.header_area .logo img {\n  width: 100%;\n}\n.search_box {\n  width: 97%;\n  box-sizing: border-box;\n  overflow: hidden;\n  border-radius: 6px;\n  position: relative;\n  z-index: 1;\n  margin: 0 0 58px;\n  box-shadow: 0px 0px 7px #0000001c;\n  margin-left: auto;\n  margin-right: auto;\n}\n.search_box .form-control {\n  width: 100%;\n  height: 48px;\n  background: #ffffff;\n  border: 1px solid #ffffff;\n  font-size: 14px;\n  font-weight: 500;\n  color: #868686;\n  padding: 10px 10px 10px 45px;\n  /* box-shadow: 0 0 0px rgb(0, 0, 0); */\n  outline: none;\n}\n.search_box .form-control::placeholder {\n  font-weight: 500;\n  color: #868686;\n}\n.search_box .icon {\n  position: absolute;\n  top: 9px;\n  left: 15px;\n  font-size: 26px;\n  color: #bebebe;\n}\n.automotive_body h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 10px;\n  margin: 0 0 40px;\n  font-size: 18px;\n  font-weight: 600;\n  color: #000000;\n  border-bottom: 1px dashed #949494;\n}\n.form-group {\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  margin: 0 0 25px;\n}\nselect.form-control {\n  width: 100%;\n  height: 52px;\n  border-radius: 10px;\n  border: 1px solid #8e8e8d;\n  font-size: 14px;\n  font-weight: 400;\n  color: #616161;\n  padding: 15px 15px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: none;\n}\n.form-group .arrow {\n  position: absolute;\n  top: 17px;\n  right: 17px;\n}\nselect.form-control:focus {\n  border-color: #e9492a;\n}\n.form-group label {\n  position: absolute;\n  top: -10px;\n  left: 12px;\n  background: #ffffff;\n  font-size: 15px;\n  font-weight: 600;\n  color: #000000;\n  padding: 0 2px;\n}\n.btn {\n  width: 100%;\n  height: 52px;\n  background: #e9492a;\n  border: 1px solid #e9492a;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 500;\n  outline: none;\n  border-radius: 10px;\n  letter-spacing: 1px;\n}\n.automotive_body ul {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 15px;\n  margin: 0 0 30px;\n  border-bottom: 1px dashed #949494;\n  display: flex !important;\n  justify-content: space-between !important;\n}\n.automotive_body ul.filter li {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 10px;\n  margin: 0 5px 0 0;\n  font-size: 15px;\n  font-weight: 500;\n  color: #000000;\n  list-style: none;\n  text-align: center;\n  position: relative;\n}\n.automotive_body ul.filter li:last-child {\n  margin: 0 0 0 0;\n}\n.automotive_body ul.filter li:after {\n  content: \"\";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #e85a42;\n  opacity: 0;\n}\n.automotive_body ul.filter li.active {\n  color: #e85a42;\n}\n.automotive_body ul.filter li.active:after {\n  opacity: 1;\n}\n.product_select {\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0 0 20px;\n  display: flex !important;\n  justify-content: space-between !important;\n}\n.check_box {\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.check_box input[type=radio] {\n  display: none;\n}\n.check_box span {\n  font-size: 12px;\n  width: 100%;\n  box-sizing: border-box;\n  display: block;\n  text-align: center;\n  border: 1px solid #000;\n  padding: 7px 10px;\n  border-radius: 30px;\n  transition: 0.5s;\n}\n.check_box input[type=radio]:checked ~ span {\n  color: #e85a42;\n  border-color: #e85a42;\n}\n.form-group.form-radio label.radio-inline {\n  position: relative;\n  left: auto;\n  top: auto;\n  font-size: 14px;\n  text-transform: capitalize;\n  font-weight: 500;\n}\n.product_area {\n  width: 100%;\n  box-sizing: border-box;\n  margin-top: 18px;\n}\n.product_area h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 20px;\n  color: #000000;\n  font-size: 18px;\n  font-weight: 600;\n  border: none;\n}\n.product_area h3 .btn-see {\n  outline: none;\n  padding: 0 0;\n  margin: 0 0;\n  border: none;\n  font-size: 16px;\n  font-weight: 400;\n  color: #737373;\n  float: right;\n  background-color: transparent;\n}\n.product_area h3 .btn-see:hover {\n  color: #000;\n}\n.product_box {\n  width: 100%;\n  min-height: 109px;\n  box-sizing: border-box;\n  position: relative;\n  padding-left: 110px;\n  margin: 0 0 20px;\n}\n.product_box h4 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 10px;\n  font-size: 16px;\n  font-weight: 600;\n}\n.product_box p {\n  width: 100%;\n  box-sizing: border-box;\n  color: #000;\n  font-weight: 400;\n  font-size: 14px;\n  margin: 0 0 15px;\n}\n.product_box h5 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 0;\n  font-size: 16px;\n  font-weight: 500;\n}\n.product_box h5 .price {\n  float: right;\n  font-size: 15px;\n  font-weight: 600;\n  color: #e54b25;\n}\n.product_box h5 .price strong {\n  font-weight: 500;\n  color: #8a8a8a;\n}\n.product_box .img_box {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 97px;\n  height: 109px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8ebe7;\n  border-radius: 15px;\n  overflow: hidden;\n  padding: 10px 10px;\n}\n.category_body {\n  width: 102%;\n  box-sizing: border-box;\n  margin-left: -1%;\n}\n.category_body:after, .category_body:before {\n  content: \"\";\n  display: table;\n  width: 100%;\n}\n.category_body:after {\n  clear: both;\n}\n.category_body .category_box {\n  width: 100%;\n  float: left;\n  box-sizing: border-box;\n  border: 1px solid #eaeaea57;\n  margin: auto 2% 10px;\n  max-width: 29%;\n  text-align: center;\n  border-radius: 8px;\n  padding: 10px 5px 34px 5px;\n  box-sizing: border-box;\n  box-shadow: 0px 2px 6px #0000001a;\n  outline: none;\n  background-color: #fff;\n  /* border: none; */\n  cursor: pointer;\n  min-height: 155px;\n  align-content: flex-start !important;\n  display: flex !important;\n  justify-content: center !important;\n  position: relative;\n}\n.category_body .category_box:hover {\n  background-color: #000;\n}\n.category_body .category_box:nth-of-type(3n) {\n  margin-right: 0;\n}\n.category_body .category_box i {\n  font-size: 19px;\n  position: absolute;\n  bottom: 15px;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n.category_body .category_box p {\n  width: 100%;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #1d1d1b;\n  margin: 0;\n}\n.category_body .category_box .img_box {\n  width: 64px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #eaeaea;\n  background: #ffffff;\n  border-radius: 14px;\n  margin: 0px auto 8px;\n}\n.category_body .category_box .img_box img {\n  max-width: 51px;\n  height: 40px;\n  object-fit: contain;\n}\n.category_body .category_box:hover {\n  background: #e54b25;\n  border-color: #e54b25;\n  box-shadow: 2px 3px 5px #a9a6a6;\n}\n.category_body .category_box:hover p, .category_body .category_box:hover i {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHlGQUFBO0FBQ0EsK0hBQUE7QUFDQSxxTUFBQTtBQUNSO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQUNKO0FBRUE7RUFDSSxzQkFBQTtBQUNKO0FBQ0E7RUFBd0IscUNBQUE7QUFHeEI7QUFGQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBS0o7QUFIQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBTUo7QUFKQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7QUFPRjtBQUxBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFRSjtBQU5BO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFTRjtBQVBBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFVSjtBQVJBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVdGO0FBVEE7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBWUo7QUFWQTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFD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QkFBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxvQ0FBQTtFQUVBLHdCQUFBO0VBRUEsa0NBQUE7RUFDQSxrQkFBQTtBQXlESjtBQXZEQTtFQUNJLHNCQUFBO0FBMERKO0FBeERBO0VBRUksZUFBQTtBQTBESjtBQXhEQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUEyREo7QUF6REE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQTRESjtBQTFEQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQTZESjtBQTNEQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUE4REo7QUE1REE7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7QUErREo7QUE3REE7RUFDSSxXQUFBO0FBZ0VKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE0LjAvY3NzL2FsbC5taW4uY3NzJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWF0ZXJpYWwtZGVzaWduLWljb25pYy1mb250LzIuMi4wL2Nzcy9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQubWluLmNzcycpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XG5odG1sLCBib2R5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgei1pbmRleDoxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cbn1cbiosIDo6YWZ0ZXIsIDo6YmVmb3JlIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNnsgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjt9XG5pbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG4uYXV0b21vdGl2ZV9hcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG4uYXV0b21vdGl2ZV9hcmVhOmJlZm9yZXtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNiU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvc2FwZTEucG5nKTtcbiAgei1pbmRleDogMDtcbn1cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMHB4IDI0cHg7XG59XG4uYXV0b21vdGl2ZV9ib2R5e1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuLmhlYWRlcl9hcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDMwcHggMHB4IDI0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRlcl9hcmVhIGgxe1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAgMDtcbiAgbWFyZ2luOiAwIDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uaGVhZGVyX2FyZWEgLmJ0bi1iYWNrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIG1heC13aWR0aDogMzJweDtcbn1cbi5oZWFkZXJfYXJlYSAuYnRuLWNhcnQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogM3B4IDA7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luOiA0cHggMDtcbiAgICBtYXgtd2lkdGg6IDMycHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGVhZGVyX2FyZWEgLmxvZ28ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTE0cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmhlYWRlcl9hcmVhIC5sb2dvIGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5zZWFyY2hfYm94IHtcbiAgICB3aWR0aDogOTclO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbWFyZ2luOiAwIDAgNThweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAjMDAwMDAwMWM7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnNlYXJjaF9ib3ggLmZvcm0tY29udHJvbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzg2ODY4NjtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCA0NXB4O1xuICAgIC8qIGJveC1zaGFkb3c6IDAgMCAwcHggcmdiKDAsIDAsIDApOyAqL1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4uc2VhcmNoX2JveCAuZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlcntcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM4Njg2ODY7XG59XG4uc2VhcmNoX2JveCAuaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOXB4O1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGNvbG9yOiAjYmViZWJlO1xufVxuLmF1dG9tb3RpdmVfYm9keSBoMyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwIDAgMTBweDtcbiAgbWFyZ2luOiAwIDAgNDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjOTQ5NDk0O1xufVxuLmZvcm0tZ3JvdXB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCAwIDI1cHg7XG59XG5zZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzhlOGU4ZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzYxNjE2MTtcbiAgcGFkZGluZzogMTVweCAxNXB4O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5mb3JtLWdyb3VwIC5hcnJvd3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE3cHg7XG4gIHJpZ2h0OiAxN3B4O1xufVxuc2VsZWN0LmZvcm0tY29udHJvbDpmb2N1c3tcbiAgYm9yZGVyLWNvbG9yOiAjZTk0OTJhO1xufVxuLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwcHg7XG4gIGxlZnQ6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmc6IDAgMnB4O1xufVxuLmJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUycHg7XG4gIGJhY2tncm91bmQ6ICNlOTQ5MmE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOTQ5MmE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5hdXRvbW90aXZlX2JvZHkgdWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMHB4IDE1cHg7XG4gICAgbWFyZ2luOiAwIDAgMzBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM5NDk0OTQ7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3ghaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnkhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiFpbXBvcnRhbnQ7XG59XG4uYXV0b21vdGl2ZV9ib2R5IHVsLmZpbHRlciBsaSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwIDAgMTBweDtcbiAgICBtYXJnaW46IDAgNXB4IDAgMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYXV0b21vdGl2ZV9ib2R5IHVsLmZpbHRlciBsaTpsYXN0LWNoaWxke1xuICAgIG1hcmdpbjogMCAwIDAgMDtcbn1cbi5hdXRvbW90aXZlX2JvZHkgdWwuZmlsdGVyIGxpOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZDogI2U4NWE0MjtcbiAgICBvcGFjaXR5OiAwO1xufVxuLmF1dG9tb3RpdmVfYm9keSB1bC5maWx0ZXIgbGkuYWN0aXZle1xuICAgIGNvbG9yOiAjZTg1YTQyO1xufVxuLmF1dG9tb3RpdmVfYm9keSB1bC5maWx0ZXIgbGkuYWN0aXZlOmFmdGVye1xuICAgIG9wYWNpdHk6IDE7XG59XG4ucHJvZHVjdF9zZWxlY3R7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94IWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5IWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4haW1wb3J0YW50O1xufVxuLmNoZWNrX2JveCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uY2hlY2tfYm94IGlucHV0W3R5cGU9XCJyYWRpb1wiXXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmNoZWNrX2JveCBzcGFuIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG4uY2hlY2tfYm94IGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkIH4gc3BhbntcbiAgICBjb2xvcjogI2U4NWE0MjtcbiAgICBib3JkZXItY29sb3I6ICNlODVhNDI7XG59XG4uZm9ybS1ncm91cC5mb3JtLXJhZGlve31cbi5mb3JtLWdyb3VwLmZvcm0tcmFkaW8gbGFiZWwucmFkaW8taW5saW5lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogYXV0bztcbiAgICB0b3A6IGF1dG87XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5wcm9kdWN0X2FyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbn1cbi5wcm9kdWN0X2FyZWEgaDN7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwIDA7XG4gICAgbWFyZ2luOiAwIDAgMjBweDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4ucHJvZHVjdF9hcmVhIGgzIC5idG4tc2VlIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6IDAgMDtcbiAgICBtYXJnaW46IDAgMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICM3MzczNzM7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnByb2R1Y3RfYXJlYSBoMyAuYnRuLXNlZTpob3ZlcnsgY29sb3I6ICMwMDA7IH1cbi5wcm9kdWN0X2JveHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDlweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDExMHB4O1xuICAgIG1hcmdpbjogMCAwIDIwcHg7XG59XG4ucHJvZHVjdF9ib3ggaDR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwIDA7XG4gICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5wcm9kdWN0X2JveCBwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMCAwIDE1cHg7XG59XG4ucHJvZHVjdF9ib3ggaDV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwIDA7XG4gICAgbWFyZ2luOiAwIDAgMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5wcm9kdWN0X2JveCBoNSAucHJpY2Uge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2U1NGIyNTtcbn1cbi5wcm9kdWN0X2JveCBoNSAucHJpY2Ugc3Ryb25ne1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM4YThhOGE7XG59XG4ucHJvZHVjdF9ib3ggLmltZ19ib3h7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiA5N3B4O1xuICAgIGhlaWdodDogMTA5cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNmOGViZTc7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbn1cblxuLmNhdGVnb3J5X2JvZHkge1xuICAgIHdpZHRoOiAxMDIlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luLWxlZnQ6IC0xJTtcbn1cbi5jYXRlZ29yeV9ib2R5OmFmdGVyLCAuY2F0ZWdvcnlfYm9keTpiZWZvcmV7IGNvbnRlbnQ6IFwiXCI7IGRpc3BsYXk6IHRhYmxlOyB3aWR0aDogMTAwJTsgfVxuLmNhdGVnb3J5X2JvZHk6YWZ0ZXJ7IGNsZWFyOiBib3RoOyB9XG4uY2F0ZWdvcnlfYm9keSAuY2F0ZWdvcnlfYm94IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE1NztcbiAgICBtYXJnaW46IGF1dG8gMiUgMTBweDtcbiAgICBtYXgtd2lkdGg6IDI5JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDEwcHggNXB4IDM0cHggNXB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDFhO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAvKiBib3JkZXI6IG5vbmU7ICovXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1pbi1oZWlnaHQ6IDE1NXB4O1xuICAgIC1tcy1mbGV4LWxpbmUtcGFjazogc3RhcnQgIWltcG9ydGFudDtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3ggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2F0ZWdvcnlfYm9keSAuY2F0ZWdvcnlfYm94OmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG4uY2F0ZWdvcnlfYm9keSAuY2F0ZWdvcnlfYm94Om50aC1vZi10eXBlKDNuKXtcbiAgXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLmNhdGVnb3J5X2JvZHkgLmNhdGVnb3J5X2JveCBpIHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTVweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5jYXRlZ29yeV9ib2R5IC5jYXRlZ29yeV9ib3ggcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzFkMWQxYjtcbiAgICBtYXJnaW46IDA7XG59XG4uY2F0ZWdvcnlfYm9keSAuY2F0ZWdvcnlfYm94IC5pbWdfYm94IHtcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG8gOHB4O1xufVxuLmNhdGVnb3J5X2JvZHkgLmNhdGVnb3J5X2JveCAuaW1nX2JveCBpbWcge1xuICAgIG1heC13aWR0aDogNTFweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5jYXRlZ29yeV9ib2R5IC5jYXRlZ29yeV9ib3g6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlNTRiMjU7XG4gICAgYm9yZGVyLWNvbG9yOiAjZTU0YjI1O1xuICAgIGJveC1zaGFkb3c6IDJweCAzcHggNXB4IHJnYigxNjkgMTY2IDE2Nik7XG59XG4uY2F0ZWdvcnlfYm9keSAuY2F0ZWdvcnlfYm94OmhvdmVyIHAsIC5jYXRlZ29yeV9ib2R5IC5jYXRlZ29yeV9ib3g6aG92ZXIgaXtcbiAgICBjb2xvcjogI2ZmZjtcbn0iXX0= */");

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