(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-details-product-details-module"],{

/***/ "Oez0":
/*!*******************************************************************!*\
  !*** ./src/app/product-details/product-details-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProductDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageRoutingModule", function() { return ProductDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-details.page */ "iSGO");




const routes = [
    {
        path: '',
        component: _product_details_page__WEBPACK_IMPORTED_MODULE_3__["ProductDetailsPage"]
    }
];
let ProductDetailsPageRoutingModule = class ProductDetailsPageRoutingModule {
};
ProductDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductDetailsPageRoutingModule);



/***/ }),

/***/ "SqMz":
/*!***********************************************************!*\
  !*** ./src/app/product-details/product-details.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _product_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-details-routing.module */ "Oez0");
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-details.page */ "iSGO");







let ProductDetailsPageModule = class ProductDetailsPageModule {
};
ProductDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _product_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsPageRoutingModule"]
        ],
        declarations: [_product_details_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"]]
    })
], ProductDetailsPageModule);



/***/ }),

/***/ "dmuU":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/product-details.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n\n\n    <div class=\"product_main_area\">\n      <div class=\"container\">\n        <div class=\"product_body_area\">\n          <div class=\"header_area\">\n            <button class=\"nav_bar\" (click)=\"back()\"> <i class=\"zmdi zmdi-arrow-left\"></i></button>\n            <div class=\"logo\"><img src=\"assets/images/logo.png\" alt=\"logo\" title=\"\"></div>\n            <div class=\"header_right\">\n            \t<button class=\"btn-cart\"><i class=\"fas fa-share-alt\"></i></button>\n            \t<!-- <button class=\"btn-cart\"><i class=\"fas fa-heart\"></i></button> -->\n            \t<button class=\"btn-cart\" routerLink=\"/cart-page\"><i class=\"fas fa-shopping-cart\"></i><span class=\"total_cart\" [innerHTML]=\"cartcount\"></span></button>\n            </div>\n          </div>\n          <div class=\"search_box_area\">\n            <h3>product details</h3>\n            <!-- <div class=\"product_type_box\">\n            \t<h4>Type of Hoses</h4>\n            \t<select class=\"form-control\">\n            \t\t<option>SAE J517</option>\n            \t</select>\n            </div> -->\n          </div>\n\n          <!----- banner area start ----->\n          <div class=\"banner_area\">\n          \t<div class=\"banner_image\">\n          \t\t<img src=\"{{img_url}}{{product_info?.hp_image}}\" alt=\"details banner\" title=\"\">\n          \t</div>\n          \t<!-- <div class=\"banner_nav\">\n          \t\t<button class=\"btn-nav active\"></button>\n          \t\t<button class=\"btn-nav\"></button>\n          \t\t<button class=\"btn-nav\"></button>\n          \t</div> -->\n          </div>\n          <!----- banner area stop ----->\n\n          <!------ details area start ----->\n          <div class=\"product_details\">\n          \t<div class=\"heading\">\n          \t\t<h1>{{product_info?.item_name}}{{product_info?.hp_partno}}</h1>\n          \t\t<div class=\"admin\" *ngIf=\"product_info?.hp_subcat==1\">\n          \t\t\t<h3>by {{product_info?.standard_name}}</h3>\n          \t\t</div>\n          \t\t<div class=\"admin\">\n          \t\t\t<h3><span>4.5</span><span class=\"star\"><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"far fa-star\"></i></span></h3>\n          \t\t</div>\n          \t</div>\n          \t<div class=\"product_type\">\n          \t\t<h4>Type of Product : <strong>{{product_info?.service_name}}</strong></h4>\n          \t\t<div class=\"product_size\" *ngIf=\"product_info?.hp_subcat==1 || product_info?.hp_subcat==3\">\n          \t\t\tSize : <strong>{{product_info?.size_name}}\"</strong>\n          \t\t</div>\n          \t\t<div class=\"product_size\">\n          \t\t\tPrice : <strong>INR {{product_info?.hp_price}}</strong><!-- <div class=\"cut_price\">INR 60</div> -->\n          \t\t</div>\n          \t</div>\n          \t<div class=\"product_description\">\n          \t\t<h5>Description :</h5>\n          \t\t<p>{{product_info?.hp_description}}</p>\n          \t</div>\n          \t<button class=\"btn btn-cart\" (click)=\"addToCart(0,product_info?.hp_id,product_info)\" *ngIf=\"product_info?.quantity==0\">add to cart</button>\n\n          \t<button *ngIf=\"userDetails\" (click)=\"storePage('product-details/'+product_info?.hp_id)\" class=\"btn\" routerLink=\"/direct-buy/{{product_info?.hp_id}}\">buy now</button>\n                <button *ngIf=\"!userDetails\"  class=\"btn\" routerLink=\"/login\">buy now</button>\n            \n          </div>\n\n          <div class=\"recomended_area\">\n          \t<h6>Recommended Applications :</h6>\n          \t<div class=\"recomended_body\">\n          \t\t<p>{{product_info?.hp_recom_app}}</p>\n          \t</div>\n          </div>\n\n          <!------ details area stop ----->\n\n\n        </div>\n      </div>\n    </div>\n    \n  \n</ion-content>\n");

/***/ }),

/***/ "fLsq":
/*!***********************************************************!*\
  !*** ./src/app/product-details/product-details.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Oswald\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.container {\n  box-sizing: border-box;\n  padding: 0px 30px;\n  width: 100%;\n}\n.w-100 {\n  width: 100%;\n  box-sizing: border-box;\n}\n/*------ login css start -----*/\n.product_main_area {\n  width: 100%;\n  height: 100vh;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  position: relative;\n}\n.product_main_area:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 190px;\n  box-sizing: border-box;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: top center;\n  background-image: url('bg3.png');\n}\n.product_main_area .product_body_area {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 30px 0px;\n  margin: 0 0;\n  position: relative;\n}\n.product_main_area .product_body_area .header_area {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  min-height: 52px;\n}\n.product_main_area .product_body_area .header_area .logo {\n  width: 90px;\n  box-sizing: border-box;\n  float: left;\n}\n.product_main_area .product_body_area .header_area .logo img {\n  width: 100%;\n  object-fit: cover;\n}\n.product_main_area .product_body_area .search_box_area {\n  width: 100%;\n  box-sizing: border-box;\n  margin-bottom: 25px;\n}\n.product_main_area .product_body_area .search_box_area h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 6px;\n  font-size: 22px;\n  color: #fff;\n  font-weight: 400;\n  text-transform: capitalize;\n  letter-spacing: 1px;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 15px 15px;\n  background: #fff;\n  box-shadow: 0 0 5px rgba(158, 158, 158, 0.72);\n  border-radius: 10px;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box h4 {\n  width: 100%;\n  margin: 0 0 3px;\n  color: #eb9929;\n  font-size: 20px;\n  font-weight: 600;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box select.form-control {\n  width: 100%;\n  height: 30px;\n  border: none;\n  outline: none;\n  font-size: 17px;\n  font-weight: 600;\n  color: #000;\n}\n.banner_area {\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n  margin-bottom: 15px;\n}\n.banner_area .banner_image {\n  width: 100%;\n  height: 200px;\n}\n.banner_area .banner_image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.banner_area .banner_nav {\n  position: absolute;\n  bottom: 5px;\n  left: 0;\n  width: 100%;\n  box-sizing: border-box;\n  text-align: center;\n}\n.banner_area .banner_nav button.btn-nav {\n  display: inline-block;\n  height: 12px;\n  width: 7px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  background: #c1c1c1;\n  margin-right: 2px;\n  cursor: pointer;\n  border: none;\n  outline: none;\n}\n.banner_area .banner_nav button.btn-nav.active {\n  background: #eb9929;\n}\n.banner_area .banner_nav button.btn-nav:last-child {\n  margin-right: 0px;\n}\n.product_details {\n  width: 100%;\n  box-sizing: border-box;\n  margin-bottom: 25px;\n}\n.product_details .heading {\n  width: 100%;\n  box-sizing: border-box;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #c5c5c5;\n  margin-bottom: 10px;\n}\n.product_details .heading h1 {\n  width: 100%;\n  margin: 0 0 0;\n  color: #000;\n  text-transform: uppercase;\n  font-size: 24px;\n  font-weight: 600;\n}\n.product_details .heading .admin {\n  box-sizing: border-box;\n  display: inline-block;\n  margin-right: 6px;\n  padding-top: 3px;\n}\n.product_details .heading .admin h3 {\n  display: inline-block;\n  margin: 0 0;\n  padding: 0 0;\n  font-weight: 500;\n  font-size: 17px;\n  color: #eb9929;\n}\n.product_details .heading .admin h3 span {\n  color: #000;\n}\n.product_details .heading .admin h3 .star {\n  color: #eb9929;\n  font-size: 12px;\n  letter-spacing: 2px;\n  margin-left: 5px;\n}\n.product_details .product_type {\n  width: 100%;\n  box-sizing: border-box;\n  margin-bottom: 10px;\n}\n.product_details .product_type h4 {\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0 0 5px;\n  color: #666666;\n  font-size: 18px;\n  font-weight: 500;\n}\n.product_details .product_type h4 strong {\n  color: #000;\n}\n.product_details .product_type .product_size {\n  display: inline-block;\n  color: #666666;\n  font-size: 17px;\n  font-weight: 500;\n  margin-right: 8px;\n}\n.product_details .product_type .product_size:last-child {\n  margin-right: 0px;\n}\n.product_details .product_type .product_size strong {\n  color: #000;\n}\n.product_details .product_type .product_size .cut_price {\n  color: #666666;\n  font-size: 17px;\n  margin-right: 8px;\n  display: inline-block;\n  margin-left: 6px;\n  text-decoration: line-through;\n  font-weight: 600;\n}\n.product_details .product_description {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 0;\n}\n.product_details .product_description h5 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 0;\n  font-size: 20px;\n  color: #eb9929;\n  font-weight: 500;\n}\n.product_details .product_description p {\n  width: 100%;\n  box-sizing: border-box;\n  font-size: 15px;\n  color: #3d3d3d;\n  margin: 0 0 20px;\n  padding: 0 0;\n  line-height: 22px;\n}\n.product_details .btn {\n  width: 100%;\n  border: 1px solid #000;\n  background: #fff;\n  text-transform: uppercase;\n  font-size: 14px;\n  letter-spacing: 1px;\n  font-weight: 700;\n  padding: 14px 10px;\n  box-sizing: border-box;\n  border-radius: 30px;\n  outline: none;\n  margin-bottom: 13px;\n}\n.product_details .btn:last-child {\n  margin-bottom: 0px;\n}\n.product_details .btn.btn-cart {\n  background: #eb9929;\n  border-color: #eb9929;\n  color: #fff;\n}\n.recomended_area {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px 0 0;\n  margin: 0 0;\n  border-top: 1px solid #c5c5c5;\n}\n.recomended_area h6 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 10px;\n  text-transform: uppercase;\n  color: #000;\n  font-size: 20px;\n}\n.recomended_area .recomended_body {\n  padding: 0px 15px;\n  border: 1px solid #c5c5c5;\n  box-sizing: border-box;\n  border-radius: 10px;\n}\n.recomended_area .recomended_body p {\n  width: 100%;\n  box-sizing: border-box;\n  font-size: 13px;\n  color: #000;\n}\n.recomended_area .recomended_body p span {\n  font-weight: 600;\n  color: #eb9929;\n}\n.product_main_area .product_body_area .header_area .header_right {\n  float: right;\n}\n.product_main_area .product_body_area .header_area .header_right .btn-cart {\n  background: transparent;\n  color: #fff;\n  border: 1px solid #fff;\n  width: 30px;\n  height: 30px;\n  display: inline-block;\n  border-radius: 50%;\n  font-size: 14px;\n  margin-right: 0px;\n  outline: none;\n  cursor: pointer;\n  position: relative;\n}\n.product_main_area .product_body_area .header_area .header_right .btn-cart .total_cart {\n  content: \"\";\n  position: absolute;\n  top: -8px;\n  right: -10px;\n  width: 20px;\n  height: 20px;\n  background: #000;\n  font-size: 12px;\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.product_main_area .product_body_area .header_area .header_right .btn-cart:last-child {\n  margin-right: 0px;\n}\n.nav_bar {\n  float: left;\n  background: transparent;\n  color: #fff;\n  padding: 0 0;\n  margin: 0 0;\n  border: none;\n  margin-right: 12px;\n  font-size: 24px;\n  margin-top: 3px;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEseUZBQUE7QUFDQSwrSEFBQTtBQUNBLGtNQUFBO0FBQ0Esd0dBQUE7QUFDUjtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUVBO0VBQ0ksc0JBQUE7QUFDSjtBQUNBO0VBQXVCLGlDQUFBO0FBR3ZCO0FBRkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUtKO0FBSEE7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQU1KO0FBSkE7RUFBTyxXQUFBO0VBQVksc0JBQUE7QUFTbkI7QUFSQSwrQkFBQTtBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFVSjtBQVJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUFXSjtBQVRBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFZSjtBQVZBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQWFKO0FBWEE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBY0o7QUFaQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQWVKO0FBWkE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQWVKO0FBYkE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtF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Q0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQTBDSjtBQXhDQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUEyQ0o7QUF6Q0E7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQTRDSjtBQTFDQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBNkNKO0FBM0NBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBOENKO0FBM0NBO0VBQ0ksWUFBQTtBQThDSjtBQTVDQTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQStDSjtBQTdDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWdESjtBQTlDQTtFQUNJLGlCQUFBO0FBaURKO0FBL0NBO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBa0RKIiwiZmlsZSI6InByb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTQuMC9jc3MvYWxsLm1pbi5jc3MnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGVyaWFsLWRlc2lnbi1pY29uaWMtZm9udC8yLjIuMC9jc3MvbWF0ZXJpYWwtZGVzaWduLWljb25pYy1mb250Lm1pbi5jc3MnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZDp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5odG1sLCBib2R5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgei1pbmRleDoxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbn1cclxuKiwgOjphZnRlciwgOjpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2e2ZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjt9XHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi53LTEwMHt3aWR0aDogMTAwJTtib3gtc2l6aW5nOiBib3JkZXItYm94O31cclxuLyotLS0tLS0gbG9naW4gY3NzIHN0YXJ0IC0tLS0tKi9cclxuXHJcbi5wcm9kdWN0X21haW5fYXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWE6YmVmb3Jle1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYmczLnBuZyk7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDBweDtcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEgLmhlYWRlcl9hcmVhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBtaW4taGVpZ2h0OiA1MnB4O1xyXG59XHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEgLmhlYWRlcl9hcmVhIC5sb2dve1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuaGVhZGVyX2FyZWEgLmxvZ28gaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuc2VhcmNoX2JveF9hcmVhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5zZWFyY2hfYm94X2FyZWEgaDMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgNnB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5zZWFyY2hfYm94X2FyZWEgLnByb2R1Y3RfdHlwZV9ib3h7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2IoMTU4IDE1OCAxNTggLyA3MiUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5zZWFyY2hfYm94X2FyZWEgLnByb2R1Y3RfdHlwZV9ib3ggaDR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCAwIDNweDtcclxuICAgIGNvbG9yOiAjZWI5OTI5O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5zZWFyY2hfYm94X2FyZWEgLnByb2R1Y3RfdHlwZV9ib3ggc2VsZWN0LmZvcm0tY29udHJvbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmJhbm5lcl9hcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uYmFubmVyX2FyZWEgLmJhbm5lcl9pbWFnZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4uYmFubmVyX2FyZWEgLmJhbm5lcl9pbWFnZSBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5iYW5uZXJfYXJlYSAuYmFubmVyX25hdntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYmFubmVyX2FyZWEgLmJhbm5lcl9uYXYgYnV0dG9uLmJ0bi1uYXZ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICB3aWR0aDogN3B4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNjMWMxYzE7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmJhbm5lcl9hcmVhIC5iYW5uZXJfbmF2IGJ1dHRvbi5idG4tbmF2LmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQ6ICNlYjk5Mjk7XHJcbn1cclxuLmJhbm5lcl9hcmVhIC5iYW5uZXJfbmF2IGJ1dHRvbi5idG4tbmF2Omxhc3QtY2hpbGR7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLnByb2R1Y3RfZGV0YWlsc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuLnByb2R1Y3RfZGV0YWlscyAuaGVhZGluZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNWM1YzU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5wcm9kdWN0X2RldGFpbHMgLmhlYWRpbmcgaDF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCAwIDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5wcm9kdWN0X2RldGFpbHMgLmhlYWRpbmcgLmFkbWlue1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxufVxyXG4ucHJvZHVjdF9kZXRhaWxzIC5oZWFkaW5nIC5hZG1pbiBoM3tcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjZWI5OTI5O1xyXG59XHJcbi5wcm9kdWN0X2RldGFpbHMgLmhlYWRpbmcgLmFkbWluIGgzIHNwYW57XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4ucHJvZHVjdF9kZXRhaWxzIC5oZWFkaW5nIC5hZG1pbiBoMyAuc3RhcntcclxuICAgIGNvbG9yOiAjZWI5OTI5O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0X2RldGFpbHMgLnByb2R1Y3RfdHlwZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnByb2R1Y3RfZGV0YWlscyAucHJvZHVjdF90eXBlIGg0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwIDAgNXB4O1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5wcm9kdWN0X2RldGFpbHMgLnByb2R1Y3RfdHlwZSBoNCBzdHJvbmd7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4ucHJvZHVjdF9kZXRhaWxzIC5wcm9kdWN0X3R5cGUgLnByb2R1Y3Rfc2l6ZXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbi5wcm9kdWN0X2RldGFpbHMgLnByb2R1Y3RfdHlwZSAucHJvZHVjdF9zaXplOmxhc3QtY2hpbGR7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG4ucHJvZHVjdF9kZXRhaWxzIC5wcm9kdWN0X3R5cGUgLnByb2R1Y3Rfc2l6ZSBzdHJvbmd7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4ucHJvZHVjdF9kZXRhaWxzIC5wcm9kdWN0X3R5cGUgLnByb2R1Y3Rfc2l6ZSAuY3V0X3ByaWNle1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5wcm9kdWN0X2RldGFpbHMgLnByb2R1Y3RfZGVzY3JpcHRpb257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMCAwO1xyXG59XHJcbi5wcm9kdWN0X2RldGFpbHMgLnByb2R1Y3RfZGVzY3JpcHRpb24gaDV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMCAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNlYjk5Mjk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5wcm9kdWN0X2RldGFpbHMgLnByb2R1Y3RfZGVzY3JpcHRpb24gcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjM2QzZDNkO1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG59XHJcbi5wcm9kdWN0X2RldGFpbHMgLmJ0bntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDEwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xyXG59XHJcbi5wcm9kdWN0X2RldGFpbHMgLmJ0bjpsYXN0LWNoaWxke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5wcm9kdWN0X2RldGFpbHMgLmJ0bi5idG4tY2FydHtcclxuICAgIGJhY2tncm91bmQ6ICNlYjk5Mjk7XHJcbiAgICBib3JkZXItY29sb3I6ICNlYjk5Mjk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4ucmVjb21lbmRlZF9hcmVhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMjBweCAwIDA7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzVjNWM1O1xyXG59XHJcbi5yZWNvbWVuZGVkX2FyZWEgaDZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5yZWNvbWVuZGVkX2FyZWEgLnJlY29tZW5kZWRfYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNWM1YzU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4ucmVjb21lbmRlZF9hcmVhIC5yZWNvbWVuZGVkX2JvZHkgcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5yZWNvbWVuZGVkX2FyZWEgLnJlY29tZW5kZWRfYm9keSBwIHNwYW57XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNlYjk5Mjk7XHJcbn1cclxuXHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEgLmhlYWRlcl9hcmVhIC5oZWFkZXJfcmlnaHR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuaGVhZGVyX2FyZWEgLmhlYWRlcl9yaWdodCAuYnRuLWNhcnR7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEgLmhlYWRlcl9hcmVhIC5oZWFkZXJfcmlnaHQgLmJ0bi1jYXJ0IC50b3RhbF9jYXJ0e1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC04cHg7XHJcbiAgICByaWdodDogLTEwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuaGVhZGVyX2FyZWEgLmhlYWRlcl9yaWdodCAuYnRuLWNhcnQ6bGFzdC1jaGlsZHtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcbi5uYXZfYmFye1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "iSGO":
/*!*********************************************************!*\
  !*** ./src/app/product-details/product-details.page.ts ***!
  \*********************************************************/
/*! exports provided: ProductDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPage", function() { return ProductDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-details.page.html */ "dmuU");
/* harmony import */ var _product_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details.page.scss */ "fLsq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");









let ProductDetailsPage = class ProductDetailsPage {
    constructor(http, navCtrl, storage, loadingController, alertController, route, toastController) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.route = route;
        this.toastController = toastController;
        this.appUrl = "https://theitvibe.com/project/ihose/api/getProductDesc";
        this.img_url = 'https://theitvibe.com/project/ihose/uploads/product/';
        this.cart_data = [];
        this.cartcount = 0;
        this.cart = [];
        this.loader_val = true;
        this.pageNo = 1;
        this.dataMenu = [];
        this.limit = 9;
        this.count = 0;
        this.storage.get("userDetails").then(val => {
            if (val) {
                this.userDetails = val;
                this.name = val.name;
                this.email = val.email;
                this.phone = val.phone;
                this.user = val.user_id;
                //console.log(val);
            }
        });
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params) {
                //let queryParams = params;
                this.id = params['id'];
                //console.log(this.id);
                //this.getProduct();
            }
        });
    }
    storePage(page) {
        this.storage.set("goTo", page);
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
    ionViewWillEnter() {
        // this.storage.remove("userCart");
        this.storage.get("userCart").then(val => {
            if (val) {
                this.userCart = val;
                this.cart_data = val;
                // console.log(val);
            }
        });
        this.getProduct();
        this.getCartItemCount();
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
    getProduct() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: ''
            });
            var data = {
                "id": this.id,
            };
            this.http.post(this.appUrl, data)
                .subscribe(res => {
                this.res = res.json();
                // console.log(this.res);
                if (this.res) {
                    this.storage.get("userCart").then(val => {
                        if (val) {
                            this.userCart = val;
                            this.cart_data = val;
                            for (let p of this.cart_data) {
                                if (p.hp_id == this.res[0].hp_id) {
                                    this.res[0].quantity = p.quantity;
                                    //break;
                                }
                            }
                        }
                    });
                    // console.log(this.cart_data);     
                    this.product_info = this.res[0];
                    this.dataMenu = this.product_info;
                    loading.dismiss();
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
    addToCart(index, hp_id, menulist) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Added',
                duration: 1000,
                animated: true,
                //color:'success',
                position: 'middle',
                cssClass: 'my-toast-class',
            });
            let added = false;
            // var data ={
            //   "id": menu_id,
            //    "name":menu_name,
            //    "price":menu_price,
            //    "quantity":1,
            //    "image":menu_image
            // }
            this.storage.get("userCart").then(val => {
                this.abc = [];
                let added = false;
                if (val) {
                    this.cart_data = val;
                    for (let p of this.cart_data) {
                        if (p.hp_id == menulist.hp_id) {
                            this.dataMenu.quantity += 1;
                            //this.menu_list[index].quantity += 1;
                            p.quantity = parseInt(p.quantity) + 1;
                            added = true;
                            //this.cart_data.push(menulist);
                            this.storage.set("userCart", this.cart_data).then(val => { this.getCartItemCount(); });
                            //this.getCartItemCount();
                            toast.present();
                            break;
                        }
                    }
                    if (!added) {
                        menulist.quantity = 1;
                        this.cart_data.push(menulist);
                        this.storage.set("userCart", this.cart_data).then(val => { this.getCartItemCount(); });
                        //this.getCartItemCount();
                        toast.present();
                    }
                    //else{
                    //   this.getCartItemCount();
                    //   this.storage.set("userCart", this.cart_data);
                    // }
                }
                else {
                    menulist.quantity = 1;
                    this.cart_data.push(menulist);
                    //this.getCartItemCount();
                    this.storage.set("userCart", this.cart_data).then(val => { this.getCartItemCount(); });
                    toast.present();
                }
            });
        });
    }
    decrementQty(index, hp_id, menulist) {
        /*. if item passed then item.qty. */
        if (this.dataMenu[index].quantity - 1 <= 0) {
            this.dataMenu[index].quantity = 0;
            //this.menu_list[index].quantity = 0;
            for (let p of this.cart_data) {
                if (p.hp_id == menulist.hp_id) {
                    p.quantity = 0;
                    //console.log(this.cart_data);
                    this.storage.set("userCart", this.cart_data);
                    this.getCartItemCount();
                    break;
                }
            }
        }
        else {
            this.dataMenu[index].quantity -= 1;
            //this.menu_list[index].quantity -= 1;
            for (let p of this.cart_data) {
                if (p.hp_id == menulist.hp_id) {
                    p.quantity = parseInt(this.dataMenu[index].quantity);
                    //console.log(this.cart_data);
                    this.storage.set("userCart", this.cart_data);
                    this.getCartItemCount();
                    break;
                }
            }
            //console.log('item_2-> ' + index +  '  '+this.menu_list[index].quantity);
        }
    }
    incrementQty(index, hp_id, menulist) {
        /*. if item passed then item.qty. */
        if (this.dataMenu[index].quantity > 0) {
            this.dataMenu[index].quantity += 1;
            //this.menu_list[index].quantity += 1;
            for (let p of this.cart_data) {
                if (p.hp_id == menulist.hp_id) {
                    p.quantity = parseInt(this.dataMenu[index].quantity);
                    //console.log(this.cart_data);
                    this.storage.set("userCart", this.cart_data);
                    this.getCartItemCount();
                    break;
                }
            }
        }
        // else{
        //   this.menu_list[index].quantity = 1;
        // }
    }
};
ProductDetailsPage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
ProductDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-details',
        template: _raw_loader_product_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductDetailsPage);



/***/ })

}]);
//# sourceMappingURL=product-details-product-details-module.js.map