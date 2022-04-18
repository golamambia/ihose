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
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content [fullscreen]=\"true\">\n  \n    <div class=\"automotive_area\">\n      <div class=\"container\">\n          <div class=\"automotive_body\">\n              <div class=\"header_area\">\n                 <button class=\"btn-back\" routerLink=\"/sidebar\" (click)=\"storePage('home')\"><img src=\"assets/images/menu.png\" alt=\"back\" title=\"\" /></button>\n                  <div class=\"logo\"><img src=\"assets/images/logo2.png\" alt=\"logo\" title=\"\"></div>\n                  <button class=\"btn-cart\" routerLink=\"/cart-page\"><img src=\"assets/images/cart.png\" alt=\"back\" title=\"\" /><span class=\"total_cart\" [innerHTML]=\"cartcount\" ></span></button>\n              </div>\n              <div class=\"search_box\">\n                 <div class=\"icon\" (click)=\"gotoProductserch()\"><i class=\"zmdi zmdi-search\" ></i></div>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"text_search\" placeholder=\"Search Products...\" />\n              </div>\n              <div class=\"product_area\">\n                <h3>\n                    Categories\n                </h3>\n                <div class=\"category_body\">\n                    <button class=\"category_box\" routerLink=\"/box-hose/1\">\n                      <div class=\"d-block\">\n                        <div class=\"img_box\" ><img src=\"assets/images/category1.png\"></div>\n                        <p>Bare Hoses</p>\n                        <i class=\"zmdi zmdi-caret-right-circle\"></i>\n                      </div>\n                    </button>\n                    <button class=\"category_box\" routerLink=\"/endfitting-hose/3\">\n                        <div class=\"d-block\">\n                        <div class=\"img_box\" ><img src=\"assets/images/category2.png\"></div>\n                        <p>End Fittings</p>\n                        <i class=\"zmdi zmdi-caret-right-circle\"></i>\n                    </div>\n                    </button>\n                    <button class=\"category_box\" routerLink=\"/assembly-hose/4\">\n                        <div class=\"d-block\">\n                        <div class=\"img_box\"><img src=\"assets/images/category3.png\"></div>\n                        <p>Hose Assembly</p>\n                        <i class=\"zmdi zmdi-caret-right-circle\"></i>\n                    </div>\n                    </button>\n                    <button class=\"category_box\" routerLink=\"/automotive/5\">\n                        <div class=\"d-block\">\n                        <div class=\"img_box\"><img src=\"assets/images/category4.png\"></div>\n                        <p>Automotive Parts</p>\n                        <i class=\"zmdi zmdi-caret-right-circle\"></i>\n                    </div>\n                    </button>\n                   <!--  routerLink=\"/earth-moving/6\" -->\n                    <button class=\"category_box\" >\n                        <div class=\"d-block\">\n                        <div class=\"img_box\"><img src=\"assets/images/category5.png\"></div>\n                        <p>HEM Hoses</p>\n                        <i class=\"zmdi zmdi-caret-right-circle\"></i>\n                    </div>\n                    </button>\n                     <!-- routerLink=\"/product\" -->\n                    <button class=\"category_box\" routerLink=\"/earth-moving/6\">\n                        <div class=\"d-block\">\n                        <div class=\"img_box\"><img src=\"assets/images/category6.png\"></div>\n                        <p> HEM Parts</p>\n                        <i class=\"zmdi zmdi-caret-right-circle\"></i>\n                    </div>\n                    </button>\n                </div>\n              </div>\n              <div class=\"product_area\">\n                    <h3>\n                        Trending Products\n                        <button class=\"btn-see\" routerLink=\"/product\">See All</button>\n                    </h3>\n\n                  <div class=\"product_box\"  *ngFor=\"let menulist of dataMenu; let i=index\" routerLink=\"/product-details/{{menulist.hp_id}}\">\n                    <div class=\"img_box\">\n                       <img *ngIf=\"menulist.hp_image\" src=\"{{img_url}}{{menulist.hp_image}}\" alt=\"product image\" title=\"\">\n                       <img *ngIf=\"!menulist.hp_image\" src=\"assets/images/noimage.png\" alt=\"product image\" title=\"\">\n                    </div>\n                    <h4 *ngIf=\"menulist.hp_subcat==1\">{{menulist.item_name}}</h4>\n                  <h4 *ngIf=\"menulist.hp_subcat==5 || menulist.hp_subcat==6\">{{menulist.hp_partno}}</h4>\n                   <h4 *ngIf=\"menulist.hp_subcat==3 || menulist.hp_subcat==4\">{{menulist.hp_description}}</h4>\n                  <p *ngIf=\"menulist.hp_subcat!=3 && menulist.hp_subcat!=4\">{{menulist.hp_description}}</p>\n                    <h5>\n                       <span *ngIf=\"menulist.size_name\">\n                        Size : {{menulist.size_name}}</span>\n                        <div class=\"price\">INR {{menulist.hp_price}}<!-- <strong>/Meter</strong> --></div>\n                      </h5>\n                  </div>\n\n                  \n\n\n\n              </div>\n\n\n\n          </div>\n      </div>\n    </div>\n  \n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Montserrat\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.automotive_area {\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  box-sizing: border-box;\n  overflow: scroll;\n}\n.automotive_area:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 36%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url('sape1.png');\n  z-index: 0;\n}\n.container {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 24px;\n}\n.automotive_body {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n}\n.header_area {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: center;\n  padding: 30px 0px 24px;\n  position: relative;\n}\n.header_area h1 {\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  color: #ffffff;\n  font-size: 18px;\n  font-weight: 500;\n}\n.header_area .btn-back {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 0;\n  outline: none;\n  float: left;\n  margin: 8px 0;\n  max-width: 32px;\n}\n.header_area .btn-cart {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 3px 0;\n  outline: none;\n  float: right;\n  margin: 4px 0;\n  max-width: 32px;\n  outline: none;\n  cursor: pointer;\n  position: relative;\n}\n.header_area .btn-cart .total_cart {\n  position: absolute;\n  top: -10px;\n  right: 2px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 600;\n}\n.header_area .logo {\n  display: inline-block;\n  width: 114px;\n  margin: auto;\n}\n.header_area .logo img {\n  width: 100%;\n}\n.search_box {\n  width: 97%;\n  box-sizing: border-box;\n  overflow: hidden;\n  border-radius: 6px;\n  position: relative;\n  z-index: 1;\n  margin: 0 0 58px;\n  box-shadow: 0px 0px 7px #0000001c;\n  margin-left: auto;\n  margin-right: auto;\n}\n.search_box .form-control {\n  width: 100%;\n  height: 48px;\n  background: #ffffff;\n  border: 1px solid #ffffff;\n  font-size: 14px;\n  font-weight: 500;\n  color: #868686;\n  padding: 10px 45px 10px 10px;\n  /* box-shadow: 0 0 0px rgb(0, 0, 0); */\n  outline: none;\n}\n.search_box .form-control::placeholder {\n  font-weight: 500;\n  color: #868686;\n}\n.search_box .icon {\n  position: absolute;\n  top: 9px;\n  right: 15px;\n  font-size: 26px;\n  color: #bebebe;\n}\n.automotive_body h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 10px;\n  margin: 0 0 40px;\n  font-size: 18px;\n  font-weight: 600;\n  color: #000000;\n  border-bottom: 1px dashed #949494;\n}\n.form-group {\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  margin: 0 0 25px;\n}\nselect.form-control {\n  width: 100%;\n  height: 52px;\n  border-radius: 10px;\n  border: 1px solid #8e8e8d;\n  font-size: 14px;\n  font-weight: 400;\n  color: #616161;\n  padding: 15px 15px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: none;\n}\n.form-group .arrow {\n  position: absolute;\n  top: 17px;\n  right: 17px;\n}\nselect.form-control:focus {\n  border-color: #e9492a;\n}\n.form-group label {\n  position: absolute;\n  top: -10px;\n  left: 12px;\n  background: #ffffff;\n  font-size: 15px;\n  font-weight: 600;\n  color: #000000;\n  padding: 0 2px;\n}\n.btn {\n  width: 100%;\n  height: 52px;\n  background: #e9492a;\n  border: 1px solid #e9492a;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 500;\n  outline: none;\n  border-radius: 10px;\n  letter-spacing: 1px;\n}\n.automotive_body ul {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 15px;\n  margin: 0 0 30px;\n  border-bottom: 1px dashed #949494;\n  display: flex !important;\n  justify-content: space-between !important;\n}\n.automotive_body ul.filter li {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 10px;\n  margin: 0 5px 0 0;\n  font-size: 15px;\n  font-weight: 500;\n  color: #000000;\n  list-style: none;\n  text-align: center;\n  position: relative;\n}\n.automotive_body ul.filter li:last-child {\n  margin: 0 0 0 0;\n}\n.automotive_body ul.filter li:after {\n  content: \"\";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #e85a42;\n  opacity: 0;\n}\n.automotive_body ul.filter li.active {\n  color: #e85a42;\n}\n.automotive_body ul.filter li.active:after {\n  opacity: 1;\n}\n.product_select {\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0 0 20px;\n  display: flex !important;\n  justify-content: space-between !important;\n}\n.check_box {\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.check_box input[type=radio] {\n  display: none;\n}\n.check_box span {\n  font-size: 12px;\n  width: 100%;\n  box-sizing: border-box;\n  display: block;\n  text-align: center;\n  border: 1px solid #000;\n  padding: 7px 10px;\n  border-radius: 30px;\n  transition: 0.5s;\n}\n.check_box input[type=radio]:checked ~ span {\n  color: #e85a42;\n  border-color: #e85a42;\n}\n.form-group.form-radio label.radio-inline {\n  position: relative;\n  left: auto;\n  top: auto;\n  font-size: 14px;\n  text-transform: capitalize;\n  font-weight: 500;\n}\n.product_area {\n  width: 100%;\n  box-sizing: border-box;\n  margin-top: 18px;\n}\n.product_area h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 20px;\n  color: #000000;\n  font-size: 18px;\n  font-weight: 600;\n  border: none;\n}\n.product_area h3 .btn-see {\n  outline: none;\n  padding: 0 0;\n  margin: 0 0;\n  border: none;\n  font-size: 16px;\n  font-weight: 400;\n  color: #737373;\n  float: right;\n  background-color: transparent;\n}\n.product_area h3 .btn-see:hover {\n  color: #000;\n}\n.product_box {\n  width: 100%;\n  min-height: 109px;\n  box-sizing: border-box;\n  position: relative;\n  padding-left: 110px;\n  margin: 0 0 20px;\n}\n.product_box h4 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 10px;\n  font-size: 16px;\n  font-weight: 600;\n}\n.product_box p {\n  width: 100%;\n  box-sizing: border-box;\n  color: #000;\n  font-weight: 400;\n  font-size: 14px;\n  margin: 0 0 15px;\n}\n.product_box h5 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 0;\n  font-size: 16px;\n  font-weight: 500;\n}\n.product_box h5 .price {\n  float: right;\n  font-size: 15px;\n  font-weight: 600;\n  color: #e54b25;\n}\n.product_box h5 .price strong {\n  font-weight: 500;\n  color: #8a8a8a;\n}\n.product_box .img_box {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 97px;\n  height: 109px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8ebe7;\n  border-radius: 15px;\n  overflow: hidden;\n  padding: 10px 10px;\n}\n.category_body {\n  width: 102%;\n  box-sizing: border-box;\n  margin-left: -1%;\n}\n.category_body:after, .category_body:before {\n  content: \"\";\n  display: table;\n  width: 100%;\n}\n.category_body:after {\n  clear: both;\n}\n.category_body .category_box {\n  width: 100%;\n  float: left;\n  box-sizing: border-box;\n  border: 1px solid #eaeaea57;\n  margin: auto 2% 10px;\n  max-width: 29%;\n  text-align: center;\n  border-radius: 8px;\n  padding: 10px 5px 34px 5px;\n  box-sizing: border-box;\n  box-shadow: 0px 2px 6px #0000001a;\n  outline: none;\n  background-color: #fff;\n  /* border: none; */\n  cursor: pointer;\n  min-height: 155px;\n  align-content: flex-start !important;\n  display: flex !important;\n  justify-content: center !important;\n  position: relative;\n}\n.category_body .category_box:hover {\n  background-color: #000;\n}\n.category_body .category_box:nth-of-type(3n) {\n  margin-right: 0;\n}\n.category_body .category_box i {\n  font-size: 19px;\n  position: absolute;\n  bottom: 15px;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n.category_body .category_box p {\n  width: 100%;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #1d1d1b;\n  margin: 0;\n}\n.category_body .category_box .img_box {\n  width: 64px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #eaeaea;\n  background: #ffffff;\n  border-radius: 14px;\n  margin: 0px auto 8px;\n}\n.category_body .category_box .img_box img {\n  max-width: 51px;\n  height: 40px;\n  object-fit: contain;\n}\n.category_body .category_box:hover {\n  background: #e54b25;\n  border-color: #e54b25;\n  box-shadow: 2px 3px 5px #a9a6a6;\n}\n.category_body .category_box:hover p, .category_body .category_box:hover i {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHlGQUFBO0FBQ0EsK0hBQUE7QUFDQSxxTUFBQTtBQUNSO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQUNKO0FBRUE7RUFDSSxzQkFBQTtBQUNKO0FBQ0E7RUFBd0IscUNBQUE7QUFHeEI7QUFGQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBS0o7QUFIQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBTUo7QUFKQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7QUFPRjtBQUxBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFRSjtBQU5BO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFTRjtBQVBBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFVSjtBQVJBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVdGO0FBVEE7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBWUo7QUFWQTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFD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QUFnQixXQUFBO0FBcUQxRTtBQXBEQTtFQUFzQixXQUFBO0FBd0R0QjtBQXZEQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLG9DQUFBO0VBRUEsd0JBQUE7RUFFQSxrQ0FBQTtFQUNBLGtCQUFBO0FBMERKO0FBeERBO0VBQ0ksc0JBQUE7QUEyREo7QUF6REE7RUFFSSxlQUFBO0FBMkRKO0FBekRBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQTRESjtBQTFEQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBNkRKO0FBM0RBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBOERKO0FBNURBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQStESjtBQTdEQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtBQWdFSjtBQTlEQTtFQUNJLFdBQUE7QUFpRUoiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTQuMC9jc3MvYWxsLm1pbi5jc3MnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQvMi4yLjAvY3NzL21hdGVyaWFsLWRlc2lnbi1pY29uaWMtZm9udC5taW4uY3NzJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcbmh0bWwsIGJvZHkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB6LWluZGV4OjE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblxufVxuKiwgOjphZnRlciwgOjpiZWZvcmUge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2eyBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO31cbmltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbn1cbi5hdXRvbW90aXZlX2FyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbi5hdXRvbW90aXZlX2FyZWE6YmVmb3Jle1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM2JTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9zYXBlMS5wbmcpO1xuICB6LWluZGV4OiAwO1xufVxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwcHggMjRweDtcbn1cbi5hdXRvbW90aXZlX2JvZHl7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4uaGVhZGVyX2FyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMzBweCAwcHggMjRweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyX2FyZWEgaDF7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMCAwO1xuICBtYXJnaW46IDAgMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5oZWFkZXJfYXJlYSAuYnRuLWJhY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgbWF4LXdpZHRoOiAzMnB4O1xufVxuLmhlYWRlcl9hcmVhIC5idG4tY2FydCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAzcHggMDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW46IDRweCAwO1xuICAgIG1heC13aWR0aDogMzJweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyX2FyZWEgLmJ0bi1jYXJ0IC50b3RhbF9jYXJ0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTBweDtcbiAgICByaWdodDogMnB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaGVhZGVyX2FyZWEgLmxvZ28ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTE0cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmhlYWRlcl9hcmVhIC5sb2dvIGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5zZWFyY2hfYm94IHtcbiAgICB3aWR0aDogOTclO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbWFyZ2luOiAwIDAgNThweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAjMDAwMDAwMWM7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnNlYXJjaF9ib3ggLmZvcm0tY29udHJvbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzg2ODY4NjtcbiAgICBwYWRkaW5nOiAxMHB4IDQ1cHggMTBweCAxMHB4O1xuICAgIC8qIGJveC1zaGFkb3c6IDAgMCAwcHggcmdiKDAsIDAsIDApOyAqL1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4uc2VhcmNoX2JveCAuZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlcntcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM4Njg2ODY7XG59XG4uc2VhcmNoX2JveCAuaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOXB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBjb2xvcjogI2JlYmViZTtcbn1cbi5hdXRvbW90aXZlX2JvZHkgaDMge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMCAwIDEwcHg7XG4gIG1hcmdpbjogMCAwIDQwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzk0OTQ5NDtcbn1cbi5mb3JtLWdyb3Vwe1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgMCAyNXB4O1xufVxuc2VsZWN0LmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ZThlOGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM2MTYxNjE7XG4gIHBhZGRpbmc6IDE1cHggMTVweDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZm9ybS1ncm91cCAuYXJyb3d7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxN3B4O1xuICByaWdodDogMTdweDtcbn1cbnNlbGVjdC5mb3JtLWNvbnRyb2w6Zm9jdXN7XG4gIGJvcmRlci1jb2xvcjogI2U5NDkyYTtcbn1cbi5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICBsZWZ0OiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBwYWRkaW5nOiAwIDJweDtcbn1cbi5idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MnB4O1xuICBiYWNrZ3JvdW5kOiAjZTk0OTJhO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTk0OTJhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uYXV0b21vdGl2ZV9ib2R5IHVsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xuICAgIG1hcmdpbjogMCAwIDMwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjOTQ5NDk0O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94IWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5IWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4haW1wb3J0YW50O1xufVxuLmF1dG9tb3RpdmVfYm9keSB1bC5maWx0ZXIgbGkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMCAwIDEwcHg7XG4gICAgbWFyZ2luOiAwIDVweCAwIDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmF1dG9tb3RpdmVfYm9keSB1bC5maWx0ZXIgbGk6bGFzdC1jaGlsZHtcbiAgICBtYXJnaW46IDAgMCAwIDA7XG59XG4uYXV0b21vdGl2ZV9ib2R5IHVsLmZpbHRlciBsaTphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTFweDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6ICNlODVhNDI7XG4gICAgb3BhY2l0eTogMDtcbn1cbi5hdXRvbW90aXZlX2JvZHkgdWwuZmlsdGVyIGxpLmFjdGl2ZXtcbiAgICBjb2xvcjogI2U4NWE0Mjtcbn1cbi5hdXRvbW90aXZlX2JvZHkgdWwuZmlsdGVyIGxpLmFjdGl2ZTphZnRlcntcbiAgICBvcGFjaXR5OiAxO1xufVxuLnByb2R1Y3Rfc2VsZWN0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwIDAgMjBweDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveCFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeSFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuIWltcG9ydGFudDtcbn1cbi5jaGVja19ib3gge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmNoZWNrX2JveCBpbnB1dFt0eXBlPVwicmFkaW9cIl17XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5jaGVja19ib3ggc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgcGFkZGluZzogN3B4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLmNoZWNrX2JveCBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB+IHNwYW57XG4gICAgY29sb3I6ICNlODVhNDI7XG4gICAgYm9yZGVyLWNvbG9yOiAjZTg1YTQyO1xufVxuLmZvcm0tZ3JvdXAuZm9ybS1yYWRpb3t9XG4uZm9ybS1ncm91cC5mb3JtLXJhZGlvIGxhYmVsLnJhZGlvLWlubGluZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgdG9wOiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucHJvZHVjdF9hcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbi10b3A6IDE4cHg7XG59XG4ucHJvZHVjdF9hcmVhIGgze1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMCAwO1xuICAgIG1hcmdpbjogMCAwIDIwcHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLnByb2R1Y3RfYXJlYSBoMyAuYnRuLXNlZSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwIDA7XG4gICAgbWFyZ2luOiAwIDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjNzM3MzczO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5wcm9kdWN0X2FyZWEgaDMgLmJ0bi1zZWU6aG92ZXJ7IGNvbG9yOiAjMDAwOyB9XG4ucHJvZHVjdF9ib3h7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTA5cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMTBweDtcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xufVxuLnByb2R1Y3RfYm94IGg0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMCAwO1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ucHJvZHVjdF9ib3ggcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xufVxuLnByb2R1Y3RfYm94IGg1e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMCAwO1xuICAgIG1hcmdpbjogMCAwIDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ucHJvZHVjdF9ib3ggaDUgLnByaWNlIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNlNTRiMjU7XG59XG4ucHJvZHVjdF9ib3ggaDUgLnByaWNlIHN0cm9uZ3tcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjOGE4YThhO1xufVxuLnByb2R1Y3RfYm94IC5pbWdfYm94e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogOTdweDtcbiAgICBoZWlnaHQ6IDEwOXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZjhlYmU3O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG59XG5cbi5jYXRlZ29yeV9ib2R5IHtcbiAgICB3aWR0aDogMTAyJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbi1sZWZ0OiAtMSU7XG59XG4uY2F0ZWdvcnlfYm9keTphZnRlciwgLmNhdGVnb3J5X2JvZHk6YmVmb3JleyBjb250ZW50OiBcIlwiOyBkaXNwbGF5OiB0YWJsZTsgd2lkdGg6IDEwMCU7IH1cbi5jYXRlZ29yeV9ib2R5OmFmdGVyeyBjbGVhcjogYm90aDsgfVxuLmNhdGVnb3J5X2JvZHkgLmNhdGVnb3J5X2JveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhNTc7XG4gICAgbWFyZ2luOiBhdXRvIDIlIDEwcHg7XG4gICAgbWF4LXdpZHRoOiAyOSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiAxMHB4IDVweCAzNHB4IDVweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxYTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLyogYm9yZGVyOiBub25lOyAqL1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAxNTVweDtcbiAgICAtbXMtZmxleC1saW5lLXBhY2s6IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNhdGVnb3J5X2JvZHkgLmNhdGVnb3J5X2JveDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuLmNhdGVnb3J5X2JvZHkgLmNhdGVnb3J5X2JveDpudGgtb2YtdHlwZSgzbil7XG4gIFxuICAgIG1hcmdpbi1yaWdodDogMDtcbn1cbi5jYXRlZ29yeV9ib2R5IC5jYXRlZ29yeV9ib3ggaSB7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDE1cHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IGF1dG87XG59XG4uY2F0ZWdvcnlfYm9keSAuY2F0ZWdvcnlfYm94IHAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMxZDFkMWI7XG4gICAgbWFyZ2luOiAwO1xufVxuLmNhdGVnb3J5X2JvZHkgLmNhdGVnb3J5X2JveCAuaW1nX2JveCB7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICBtYXJnaW46IDBweCBhdXRvIDhweDtcbn1cbi5jYXRlZ29yeV9ib2R5IC5jYXRlZ29yeV9ib3ggLmltZ19ib3ggaW1nIHtcbiAgICBtYXgtd2lkdGg6IDUxcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4uY2F0ZWdvcnlfYm9keSAuY2F0ZWdvcnlfYm94OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTU0YjI1O1xuICAgIGJvcmRlci1jb2xvcjogI2U1NGIyNTtcbiAgICBib3gtc2hhZG93OiAycHggM3B4IDVweCByZ2IoMTY5IDE2NiAxNjYpO1xufVxuLmNhdGVnb3J5X2JvZHkgLmNhdGVnb3J5X2JveDpob3ZlciBwLCAuY2F0ZWdvcnlfYm9keSAuY2F0ZWdvcnlfYm94OmhvdmVyIGl7XG4gICAgY29sb3I6ICNmZmY7XG59Il19 */");

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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "AytR");










let HomePage = class HomePage {
    constructor(http, navCtrl, storage, loadingController, alertController) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.imag_path = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["image_path"];
        this.appUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["host"] + "getHose";
        this.appUrl_product = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["host"] + "getProduct";
        this.img_url = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["image_path"] + 'product/';
        this.cart_data = [];
        this.cartcount = 0;
        this.text_search = '';
        this.cart = [];
        this.loader_val = true;
        this.pageNo = 1;
        this.dataMenu = [];
        this.limit = 9;
        this.count = 0;
        this.standard = '';
        this.size = '';
        this.name = '';
        this.pressure = '';
        this.part_type = '';
        this.description = '';
        this.assembly_name = '';
        this.mk_name = '';
        this.part_no = '';
        this.model_no = '';
        this.hp_subcat = '';
    }
    storePage(page) {
        this.storage.set("goTo", page);
    }
    ngOnInit() {
        //this.listing(); 
    }
    listing1() {
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
    gotoProductserch() {
        //console.log(this.text_search);
        //this.storage.set("goTo", 'endfitting-hose/3');
        this.navCtrl.navigateForward('product?text_search=' + this.text_search);
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
    ionViewWillEnter() {
        // this.storage.remove("userCart");
        this.storage.get("userCart").then(val => {
            if (val) {
                this.userCart = val;
                this.cart_data = val;
                // console.log(val);
            }
        });
        this.getCartItemCount();
        this.listing();
    }
    listing() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log(this.search_key);
            const loading = yield this.loadingController.create({
                message: ''
            });
            //await loading.present();
            this.loader_val = true;
            this.storage.get("userDetails").then(val => {
                if (val) {
                    this.userDetails = val;
                    var data = {
                        "userId": this.userDetails.user_id,
                    };
                }
            });
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
            //console.log(this.userDetails.user_id);
            if (!this.mainMenuId) {
                this.mainMenuId = 0;
            }
            if (!this.search_key) {
                this.search_key = '';
            }
            var dataPar = {
                "name": this.name,
                "standard": this.standard,
                "size": this.size,
                "pressure": this.pressure,
                "assembly_name": this.assembly_name,
                "part_type": this.part_type,
                "description": this.description,
                "search": this.search_key,
                "mk_name": this.mk_name,
                "part_no": this.part_no,
                "model_no": this.model_no,
                "hp_subcat": this.hp_subcat
            };
            this.http.post(this.appUrl_product, dataPar)
                .subscribe(res => {
                this.res = res.json();
                // console.log(this.res);
                if (this.res && this.res.menu_list) {
                    // loading.dismiss();
                    this.loader_val = false;
                    this.menu_list = this.res.menu_list;
                    if (this.menu_list && this.menu_list.length > 0) {
                        this.dataMenu = [];
                        for (let i = 0; i < this.limit; i++) {
                            if (this.menu_list[i]) {
                                this.dataMenu.push(this.menu_list[i]);
                            }
                        }
                    }
                    else {
                        this.dataMenu = [];
                    }
                    //console.log(this.dataMenu);
                    for (let pro of this.menu_list) {
                        for (let p of this.cart_data) {
                            if (p.hp_id == pro.hp_id) {
                                pro.quantity = p.quantity;
                                //break;
                            }
                        }
                    }
                }
                else {
                    //alert("Server error");
                    // loading.dismiss();
                    this.loader_val = false;
                }
            }, (err) => {
                //console.log(err);
                // loading.dismiss();
                this.loader_val = false;
            });
        });
    }
    getCartItemCount() {
        this.count = 0;
        this.storage.get("userCart").then(val => {
            if (val) {
                for (let p of this.cart_data) {
                    if (p.quantity > 0) {
                        this.count += 1;
                    }
                }
                this.cartTotal = this.count;
                this.cartcount = this.count;
            }
            else {
                this.cartTotal = this.count;
            }
        });
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