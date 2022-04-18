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
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  \n    <div class=\"header_area\">\n        <button class=\"btn-back\" routerLink=\"/home\"><img src=\"assets/images/back2.png\" alt=\"back\" title=\"\"></button>\n        <h1>Product Details</h1>\n        <button class=\"btn-cart\" routerLink=\"/cart-page\"><img src=\"assets/images/cart2.png\" alt=\"back\" title=\"\"><span class=\"total_cart\" [innerHTML]=\"cartcount\"></span></button>\n    </div>\n    <div class=\"product_details_main_area\">\n        <div class=\"product_img_box\">\n            <img src=\"{{img_url}}{{product_info?.hp_image}}\" alt=\"details banner\" title=\"\">\n        </div>\n        <div class=\"product_body\">\n            <div class=\"container\">\n                <div class=\"product_heading\">\n                    <h1>{{product_info?.item_name}}{{product_info?.hp_partno}}</h1>\n                    <div class=\"star\"><img src=\"assets/images/product-star.png\">4.5</div>\n                    <div class=\"price\" style=\"margin-bottom: 10px;\" *ngIf=\"product_info?.size_name\">\n                        Size : {{product_info?.size_name}}\n                       <!--  <select class=\"form-control\">\n                            <option>{{product_info?.size_name}}</option>\n                        </select> -->\n                    </div>\n                    <div class=\"price\">\n                        INR {{product_info?.hp_price}}<span *ngIf=\"product_info?.hp_priceunit\">/Meter</span>\n                        <div class=\"form-group\" *ngIf=\"product_info?.quantity>0\">\n                            <button class=\"btn-qtn btn-left\" (click)=\"decrementQty(0,product_info?.hp_id,product_info)\">-</button>\n                            <input type=\"text\" class=\"form-control\" value=\"{{product_info?.quantity}}\">\n                            <button class=\"btn-qtn btn-right\" (click)=\"incrementQty(0,product_info?.hp_id,product_info)\">+</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"product_description_area\">\n                    <div class=\"product_description\" *ngIf=\"product_info?.hp_specification\">\n                        <img src=\"assets/images/details1.png\">\n                        <h4>Specification</h4>\n                        <p>{{product_info?.hp_specification}}</p>\n                    </div>\n                   <div class=\"product_description\" *ngIf=\"product_info?.hp_construction\">\n                        <img src=\"assets/images/details2.png\">\n                        <h4>Construction</h4>\n                        <p>{{product_info?.hp_construction}}</p>\n                    </div>\n                   <div class=\"product_description\" *ngIf=\"product_info?.hp_temperature\">\n                        <img src=\"assets/images/details3.png\">\n                        <h4>Temperature Ranges</h4>\n                        <p>{{product_info?.hp_temperature}}</p>\n                    </div>\n                   <div class=\"product_description\" *ngIf=\"product_info?.hp_description\">\n                        <img src=\"assets/images/details4.png\">\n                        <h4>Description Usage</h4>\n                        <p>{{product_info?.hp_description}}</p>\n                    </div>\n                </div>\n                <button class=\"btn btn2 btn3\"><img src=\"assets/images/pdf.png\"> download PDF</button>\n               <button class=\"btn\" (click)=\"addToCart(0,product_info?.hp_id,product_info)\" *ngIf=\"product_info?.quantity==0\">add to cart</button>\n\n            <!-- <button *ngIf=\"userDetails\" (click)=\"storePage('product-details/'+product_info?.hp_id)\" class=\"btn\" routerLink=\"/direct-buy/{{product_info?.hp_id}}\">buy now</button> -->\n               <!--  <button class=\"btn\">add to cart</button> -->\n               \n            </div>\n        </div>\n    </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "fLsq":
/*!***********************************************************!*\
  !*** ./src/app/product-details/product-details.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Montserrat\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.container {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 30px;\n}\n.header_area {\n  width: 92%;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: center;\n  padding: 15px 0;\n  position: absolute;\n  z-index: 9;\n  box-sizing: border-box;\n  margin: auto;\n  left: 0;\n  right: 0;\n}\n.header_area h1 {\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  color: #000;\n  font-size: 18px;\n  font-weight: 500;\n}\n.header_area .btn-back {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 1px 0;\n  outline: none;\n  float: left;\n  max-width: 22px;\n}\n.header_area .btn-cart {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 0px 0;\n  outline: none;\n  float: right;\n  max-width: 28px;\n}\n.header_area .btn-cart {\n  position: relative;\n}\n.header_area .btn-cart .total_cart {\n  position: absolute;\n  top: -14px;\n  right: 0px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 600;\n}\n.product_details_main_area {\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  box-sizing: border-box;\n}\n.product_img_box {\n  width: 100%;\n  height: 46%;\n  padding: 30px 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f7e8e5;\n}\n.product_img_box img {\n  width: 100%;\n  object-fit: contain;\n  height: 198px;\n}\n.product_body {\n  width: 100%;\n  box-sizing: border-box;\n  height: 58%;\n  background: #ffffff;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  border-top-right-radius: 30px;\n  border-top-left-radius: 30px;\n  overflow-y: scroll;\n}\n.product_body .product_heading {\n  padding: 30px 0 0;\n  background: #ffffff;\n  margin: 0 0 25px;\n}\n.product_body .product_heading h1 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 7px;\n  font-size: 20px;\n  font-weight: 500;\n  color: #1f1f1f;\n}\n.product_body .product_heading .star {\n  width: 100%;\n  box-sizing: border-box;\n  font-size: 14px;\n  font-weight: 500;\n  color: #414141;\n  border-bottom: 1px solid #e0e0e0;\n  padding-bottom: 10px;\n  margin-bottom: 15px;\n}\n.product_body .product_heading .star img {\n  margin-right: 5px;\n}\n.product_body .product_heading .size {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 15px;\n  font-size: 16px;\n  font-weight: 500;\n  color: #000000;\n}\n.product_body .product_heading select.form-control {\n  font-size: 16px;\n  font-weight: 600;\n  color: #000000;\n  border: none;\n  background-color: transparent;\n}\n.product_body .product_heading .price {\n  width: 100%;\n  box-sizing: border-box;\n  font-size: 16px;\n  font-weight: 500;\n  color: #e54b25;\n}\n.product_body .product_heading .price span {\n  color: #747474;\n}\n.product_body .product_heading .price .form-group {\n  display: inline-block;\n  margin-left: 15px;\n  position: relative;\n  width: 80px;\n}\n.product_body .product_heading .price .form-group .form-control {\n  width: 100%;\n  box-sizing: border-box;\n  height: 32px;\n  text-align: center;\n  font-size: 15px;\n  font-weight: 600;\n}\n.product_body .product_heading .price .form-group .btn-qtn {\n  position: absolute;\n  top: 4px;\n  width: 25px;\n  height: 25px;\n  background: #e54b25;\n  border: 1px solid #e54b25;\n  color: #ffffff;\n  outline: none;\n}\n.product_body .product_heading .price .form-group .btn-qtn.btn-left {\n  left: 4px;\n}\n.product_body .product_heading .price .form-group .btn-qtn.btn-right {\n  right: 4px;\n}\n.product_description_area {\n  width: 100%;\n  box-sizing: border-box;\n}\n.product_description_area .product_description {\n  width: 50%;\n  float: left;\n  margin-bottom: 20px;\n}\n.product_description_area .product_description img {\n  margin: 0 0 10px;\n}\n.product_description_area .product_description h4 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 10px;\n  color: #e54b25;\n  font-size: 16px;\n  font-weight: 500;\n}\n.product_description_area .product_description p {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  color: #000;\n  font-size: 14px;\n  font-weight: 400;\n}\n.btn {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 15px 15px;\n  border: 1px solid #e54b25;\n  background: #e54b25;\n  text-transform: uppercase;\n  color: #fff;\n  outline: none;\n  font-size: 15px;\n  font-weight: 500;\n  border-radius: 10px;\n  margin-bottom: 15px;\n  vertical-align: middle;\n  display: block;\n  line-height: 24px;\n}\n.btn.btn2 {\n  border-color: #1d1d1b;\n  background: #1d1d1b;\n}\n.btn.btn2.btn3 {\n  border-color: #1d1d1b;\n  background: #ffffff;\n  color: #1d1d1b;\n}\n.btn.btn2.btn3 img {\n  position: relative;\n  margin-right: 5px;\n  top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEseUZBQUE7QUFDQSwrSEFBQTtBQUNBLHFNQUFBO0FBQ1I7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7QUFDQTtFQUF3QixxQ0FBQTtBQUd4QjtBQUZBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFLSjtBQUhBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFNRjtBQUpBO0VBQ0ksVUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQU9KO0FBTEE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUUY7QUFOQTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVNKO0FBUEE7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFVSjtBQVBBO0VBRUEsa0JBQUE7QUFTQTtBQVBBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBVUo7QUFSQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQVdKO0FBVEE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVlKO0FBVkE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBYUo7QUFYQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFjSjtBQVhBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBY0o7QUFaQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWVKO0FBYkE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBZ0JKO0FBZEE7RUFDSSxpQkFBQTtBQWlCSjtBQWZBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWtCSjtBQWZBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQWtCSjtBQWhCQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFtQko7QUFqQkE7RUFDSSxjQUFBO0FBb0JKO0FBbEJBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQXFCSjtBQW5CQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXNCSjtBQXBCQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBdUJKO0FBckJBO0VBQ0ksU0FBQTtBQXdCSjtBQXRCQTtFQUNJLFVBQUE7QUF5Qko7QUF2QkE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7QUEwQko7QUF4QkE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBMkJKO0FBekJBO0VBQ0ksZ0JBQUE7QUE0Qko7QUExQkE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBNkJKO0FBM0JBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBOEJKO0FBM0JBO0VBQ0csV0FBQTtFQUNDLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQThCSjtBQTVCQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7QUErQko7QUE3QkE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQWdDSjtBQTlCQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxRQUFBO0FBaUNKIiwiZmlsZSI6InByb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTQuMC9jc3MvYWxsLm1pbi5jc3MnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGVyaWFsLWRlc2lnbi1pY29uaWMtZm9udC8yLjIuMC9jc3MvbWF0ZXJpYWwtZGVzaWduLWljb25pYy1mb250Lm1pbi5jc3MnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XHJcbmh0bWwsIGJvZHkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OjE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxufVxyXG4qLCA6OmFmdGVyLCA6OmJlZm9yZSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDZ7IGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7fVxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwcHggMzBweDtcclxufVxyXG4uaGVhZGVyX2FyZWEge1xyXG4gICAgd2lkdGg6IDkyJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuLmhlYWRlcl9hcmVhIGgxe1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDAgMDtcclxuICBtYXJnaW46IDAgMDtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uaGVhZGVyX2FyZWEgLmJ0bi1iYWNrIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMXB4IDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXgtd2lkdGg6IDIycHg7XHJcbn1cclxuLmhlYWRlcl9hcmVhIC5idG4tY2FydCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweCAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1heC13aWR0aDogMjhweDtcclxuICAgICAgXHJcbn1cclxuLmhlYWRlcl9hcmVhIC5idG4tY2FydCB7XHJcbiAgIFxyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmhlYWRlcl9hcmVhIC5idG4tY2FydCAudG90YWxfY2FydCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xNHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5wcm9kdWN0X2RldGFpbHNfbWFpbl9hcmVhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4ucHJvZHVjdF9pbWdfYm94IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NiU7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZThlNTtcclxufVxyXG4ucHJvZHVjdF9pbWdfYm94IGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICBoZWlnaHQ6IDE5OHB4O1xyXG59XHJcbi5wcm9kdWN0X2JvZHkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgaGVpZ2h0OiA1OCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLnByb2R1Y3RfYm9keSAucHJvZHVjdF9oZWFkaW5nIHtcclxuICAgIHBhZGRpbmc6IDMwcHggMCAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIG1hcmdpbjogMCAwIDI1cHg7XHJcbn1cclxuLnByb2R1Y3RfYm9keSAucHJvZHVjdF9oZWFkaW5nIGgxe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgN3B4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMWYxZjFmO1xyXG59XHJcbi5wcm9kdWN0X2JvZHkgLnByb2R1Y3RfaGVhZGluZyAuc3RhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM0MTQxNDE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4ucHJvZHVjdF9ib2R5IC5wcm9kdWN0X2hlYWRpbmcgLnN0YXIgaW1ne1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLnByb2R1Y3RfYm9keSAucHJvZHVjdF9oZWFkaW5nIC5zaXple1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLnByb2R1Y3RfYm9keSAucHJvZHVjdF9oZWFkaW5nIHNlbGVjdC5mb3JtLWNvbnRyb2wge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnByb2R1Y3RfYm9keSAucHJvZHVjdF9oZWFkaW5nIC5wcmljZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI2U1NGIyNTtcclxufVxyXG4ucHJvZHVjdF9ib2R5IC5wcm9kdWN0X2hlYWRpbmcgLnByaWNlIHNwYW57XHJcbiAgICBjb2xvcjogIzc0NzQ3NDtcclxufVxyXG4ucHJvZHVjdF9ib2R5IC5wcm9kdWN0X2hlYWRpbmcgLnByaWNlIC5mb3JtLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbn1cclxuLnByb2R1Y3RfYm9keSAucHJvZHVjdF9oZWFkaW5nIC5wcmljZSAuZm9ybS1ncm91cCAuZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnByb2R1Y3RfYm9keSAucHJvZHVjdF9oZWFkaW5nIC5wcmljZSAuZm9ybS1ncm91cCAuYnRuLXF0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDRweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U1NGIyNTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNTRiMjU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnByb2R1Y3RfYm9keSAucHJvZHVjdF9oZWFkaW5nIC5wcmljZSAuZm9ybS1ncm91cCAuYnRuLXF0bi5idG4tbGVmdHtcclxuICAgIGxlZnQ6IDRweDtcclxufVxyXG4ucHJvZHVjdF9ib2R5IC5wcm9kdWN0X2hlYWRpbmcgLnByaWNlIC5mb3JtLWdyb3VwIC5idG4tcXRuLmJ0bi1yaWdodHtcclxuICAgIHJpZ2h0OiA0cHg7XHJcbn1cclxuLnByb2R1Y3RfZGVzY3JpcHRpb25fYXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4ucHJvZHVjdF9kZXNjcmlwdGlvbl9hcmVhIC5wcm9kdWN0X2Rlc2NyaXB0aW9ue1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ucHJvZHVjdF9kZXNjcmlwdGlvbl9hcmVhIC5wcm9kdWN0X2Rlc2NyaXB0aW9uIGltZ3tcclxuICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbn1cclxuLnByb2R1Y3RfZGVzY3JpcHRpb25fYXJlYSAucHJvZHVjdF9kZXNjcmlwdGlvbiBoNHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgICBjb2xvcjogI2U1NGIyNTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnByb2R1Y3RfZGVzY3JpcHRpb25fYXJlYSAucHJvZHVjdF9kZXNjcmlwdGlvbiBwe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTU0YjI1O1xyXG4gICAgYmFja2dyb3VuZDogI2U1NGIyNTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG4uYnRuLmJ0bjJ7XHJcbiAgICBib3JkZXItY29sb3I6ICMxZDFkMWI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWQxZDFiO1xyXG59XHJcbi5idG4uYnRuMi5idG4ze1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMWQxZDFiO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjMWQxZDFiO1xyXG59XHJcbi5idG4uYnRuMi5idG4zIGltZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIHRvcDogNnB4O1xyXG59Il19 */");

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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "AytR");










let ProductDetailsPage = class ProductDetailsPage {
    constructor(http, navCtrl, storage, loadingController, alertController, route, toastController) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.route = route;
        this.toastController = toastController;
        this.appUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["host"] + "getProductDesc";
        this.img_url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["host"] + 'uploads/product/';
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
                this.navCtrl.navigateForward('/home');
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
                //console.log(this.res);
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
        if (this.dataMenu.quantity - 1 <= 0) {
            this.dataMenu.quantity = 0;
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
            this.dataMenu.quantity -= 1;
            //this.menu_list[index].quantity -= 1;
            for (let p of this.cart_data) {
                if (p.hp_id == menulist.hp_id) {
                    p.quantity = parseInt(this.dataMenu.quantity);
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
        //console.log(menulist);
        if (this.dataMenu.quantity > 0) {
            //console.log('lol');
            this.dataMenu.quantity += 1;
            //this.menu_list[index].quantity += 1;
            for (let p of this.cart_data) {
                if (p.hp_id == menulist.hp_id) {
                    p.quantity = parseInt(this.dataMenu.quantity);
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