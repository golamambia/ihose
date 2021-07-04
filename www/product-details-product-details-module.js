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
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  \n    <div class=\"header_area\">\n        <button class=\"btn-back\" routerLink=\"/home\"><img src=\"assets/images/back2.png\" alt=\"back\" title=\"\"></button>\n        <h1>Product Details</h1>\n        <button class=\"btn-cart\"><img src=\"assets/images/cart2.png\" alt=\"back\" title=\"\"></button>\n    </div>\n    <div class=\"product_details_main_area\">\n        <div class=\"product_img_box\">\n            <img src=\"assets/images/product-details.png\" alt=\"image\" title=\"\">\n        </div>\n        <div class=\"product_body\">\n            <div class=\"container\">\n                <div class=\"product_heading\">\n                    <h1>R2AT - 20.7 MPA (AE J517)</h1>\n                    <div class=\"star\"><img src=\"assets/images/product-star.png\">4.5</div>\n                    <div class=\"size\">\n                        Size : \n                        <select class=\"form-control\">\n                            <option>3/16\"</option>\n                        </select>\n                    </div>\n                    <div class=\"price\">\n                        INR 50<span>/Meter</span>\n                        <div class=\"form-group\">\n                            <button class=\"btn-qtn btn-left\">-</button>\n                            <input type=\"text\" class=\"form-control\" value=\"1\">\n                            <button class=\"btn-qtn btn-right\">-</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"product_description_area\">\n                    <div class=\"product_description\">\n                        <img src=\"assets/images/details1.png\">\n                        <h4>Specification</h4>\n                        <p>SAE 100 R2 AT/ DIN EN853 2SN</p>\n                    </div>\n                    <div class=\"product_description\">\n                        <img src=\"assets/images/details2.png\">\n                        <h4>Construction</h4>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n                    </div>\n                    <div class=\"product_description\">\n                        <img src=\"assets/images/details3.png\">\n                        <h4>Temprature Ranges</h4>\n                        <p>-40°C to +100°C (+120°C intermittent)</p>\n                    </div>\n                    <div class=\"product_description\">\n                        <img src=\"assets/images/details4.png\">\n                        <h4>Description Usage</h4>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n                    </div>\n                </div>\n                <button class=\"btn btn2 btn3\"><img src=\"assets/images/pdf.png\"> download PDF</button>\n                <button class=\"btn\">add to cart</button>\n               \n            </div>\n        </div>\n    </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "fLsq":
/*!***********************************************************!*\
  !*** ./src/app/product-details/product-details.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Montserrat\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.container {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 30px;\n}\n.header_area {\n  width: 92%;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: center;\n  padding: 15px 0;\n  position: absolute;\n  z-index: 9;\n  box-sizing: border-box;\n  margin: auto;\n  left: 0;\n  right: 0;\n}\n.header_area h1 {\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  color: #000;\n  font-size: 18px;\n  font-weight: 500;\n}\n.header_area .btn-back {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 1px 0;\n  outline: none;\n  float: left;\n  max-width: 22px;\n}\n.header_area .btn-cart {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 0px 0;\n  outline: none;\n  float: right;\n  max-width: 28px;\n}\n.product_details_main_area {\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  box-sizing: border-box;\n}\n.product_img_box {\n  width: 100%;\n  height: 46%;\n  padding: 30px 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f7e8e5;\n}\n.product_img_box img {\n  width: 100%;\n  object-fit: contain;\n  height: 74px;\n}\n.product_body {\n  width: 100%;\n  box-sizing: border-box;\n  height: 58%;\n  background: #ffffff;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  border-top-right-radius: 30px;\n  border-top-left-radius: 30px;\n  overflow-y: scroll;\n}\n.product_body .product_heading {\n  padding: 30px 0 0;\n  background: #ffffff;\n  margin: 0 0 25px;\n}\n.product_body .product_heading h1 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 7px;\n  font-size: 20px;\n  font-weight: 500;\n  color: #1f1f1f;\n}\n.product_body .product_heading .star {\n  width: 100%;\n  box-sizing: border-box;\n  font-size: 14px;\n  font-weight: 500;\n  color: #414141;\n  border-bottom: 1px solid #e0e0e0;\n  padding-bottom: 10px;\n  margin-bottom: 15px;\n}\n.product_body .product_heading .star img {\n  margin-right: 5px;\n}\n.product_body .product_heading .size {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 15px;\n  font-size: 16px;\n  font-weight: 500;\n  color: #000000;\n}\n.product_body .product_heading select.form-control {\n  font-size: 16px;\n  font-weight: 600;\n  color: #000000;\n  border: none;\n  background-color: transparent;\n}\n.product_body .product_heading .price {\n  width: 100%;\n  box-sizing: border-box;\n  font-size: 16px;\n  font-weight: 500;\n  color: #e54b25;\n}\n.product_body .product_heading .price span {\n  color: #747474;\n}\n.product_body .product_heading .price .form-group {\n  display: inline-block;\n  margin-left: 15px;\n  position: relative;\n  width: 80px;\n}\n.product_body .product_heading .price .form-group .form-control {\n  width: 100%;\n  box-sizing: border-box;\n  height: 32px;\n  text-align: center;\n  font-size: 15px;\n  font-weight: 600;\n}\n.product_body .product_heading .price .form-group .btn-qtn {\n  position: absolute;\n  top: 4px;\n  width: 25px;\n  height: 25px;\n  background: #e54b25;\n  border: 1px solid #e54b25;\n  color: #ffffff;\n  outline: none;\n}\n.product_body .product_heading .price .form-group .btn-qtn.btn-left {\n  left: 4px;\n}\n.product_body .product_heading .price .form-group .btn-qtn.btn-right {\n  right: 4px;\n}\n.product_description_area {\n  width: 100%;\n  box-sizing: border-box;\n}\n.product_description_area .product_description {\n  width: 50%;\n  float: left;\n  margin-bottom: 20px;\n}\n.product_description_area .product_description img {\n  margin: 0 0 10px;\n}\n.product_description_area .product_description h4 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 10px;\n  color: #e54b25;\n  font-size: 16px;\n  font-weight: 500;\n}\n.product_description_area .product_description p {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  color: #000;\n  font-size: 14px;\n  font-weight: 400;\n}\n.btn {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 15px;\n  border: 1px solid #e54b25;\n  background: #e54b25;\n  text-transform: uppercase;\n  color: #fff;\n  outline: none;\n  font-size: 15px;\n  font-weight: 500;\n  border-radius: 10px;\n  margin-bottom: 15px;\n}\n.btn.btn2 {\n  border-color: #1d1d1b;\n  background: #1d1d1b;\n}\n.btn.btn2.btn3 {\n  border-color: #1d1d1b;\n  background: #ffffff;\n  color: #1d1d1b;\n}\n.btn.btn2.btn3 img {\n  position: relative;\n  margin-right: 5px;\n  top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEseUZBQUE7QUFDQSwrSEFBQTtBQUNBLHFNQUFBO0FBQ1I7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7QUFDQTtFQUF3QixxQ0FBQTtBQUd4QjtBQUZBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFLSjtBQUhBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFNRjtBQUpBO0VBQ0ksVUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQU9KO0FBTEE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUUY7QUFOQTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVNKO0FBUEE7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFVSjtBQVJBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBV0o7QUFUQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWUo7QUFWQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFhSjtBQVhBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQWNKO0FBWkE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFlSjtBQWJBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBZ0JKO0FBZEE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBaUJKO0FBZkE7RUFDSSxpQkFBQTtBQWtCSjtBQWhCQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFtQko7QUFoQkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBbUJKO0FBakJBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQW9CSjtBQWxCQTtFQUNJLGNBQUE7QUFxQko7QUFuQkE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBc0JKO0FBcEJBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBdUJKO0FBckJBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUF3Qko7QUF0QkE7RUFDSSxTQUFBO0FBeUJKO0FBdkJBO0VBQ0ksVUFBQTtBQTBCSjtBQXhCQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtBQTJCSjtBQXpCQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUE0Qko7QUExQkE7RUFDSSxnQkFBQTtBQTZCSjtBQTNCQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUE4Qko7QUE1QkE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUErQko7QUE1QkE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBK0JKO0FBN0JBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtBQWdDSjtBQTlCQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBaUNKO0FBL0JBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFFBQUE7QUFrQ0oiLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNC4wL2Nzcy9hbGwubWluLmNzcycpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWF0ZXJpYWwtZGVzaWduLWljb25pYy1mb250LzIuMi4wL2Nzcy9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQubWluLmNzcycpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcclxuaHRtbCwgYm9keSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6MTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblxyXG59XHJcbiosIDo6YWZ0ZXIsIDo6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNnsgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjt9XHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDBweCAzMHB4O1xyXG59XHJcbi5oZWFkZXJfYXJlYSB7XHJcbiAgICB3aWR0aDogOTIlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG4uaGVhZGVyX2FyZWEgaDF7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMCAwO1xyXG4gIG1hcmdpbjogMCAwO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5oZWFkZXJfYXJlYSAuYnRuLWJhY2sge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxcHggMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1heC13aWR0aDogMjJweDtcclxufVxyXG4uaGVhZGVyX2FyZWEgLmJ0bi1jYXJ0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4IDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWF4LXdpZHRoOiAyOHB4O1xyXG59XHJcbi5wcm9kdWN0X2RldGFpbHNfbWFpbl9hcmVhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4ucHJvZHVjdF9pbWdfYm94IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NiU7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZThlNTtcclxufVxyXG4ucHJvZHVjdF9pbWdfYm94IGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICBoZWlnaHQ6IDc0cHg7XHJcbn1cclxuLnByb2R1Y3RfYm9keSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IDU4JTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbi5wcm9kdWN0X2JvZHkgLnByb2R1Y3RfaGVhZGluZyB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDAgMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW46IDAgMCAyNXB4O1xyXG59XHJcbi5wcm9kdWN0X2JvZHkgLnByb2R1Y3RfaGVhZGluZyBoMXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDdweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzFmMWYxZjtcclxufVxyXG4ucHJvZHVjdF9ib2R5IC5wcm9kdWN0X2hlYWRpbmcgLnN0YXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjNDE0MTQxO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLnByb2R1Y3RfYm9keSAucHJvZHVjdF9oZWFkaW5nIC5zdGFyIGltZ3tcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi5wcm9kdWN0X2JvZHkgLnByb2R1Y3RfaGVhZGluZyAuc2l6ZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5wcm9kdWN0X2JvZHkgLnByb2R1Y3RfaGVhZGluZyBzZWxlY3QuZm9ybS1jb250cm9sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5wcm9kdWN0X2JvZHkgLnByb2R1Y3RfaGVhZGluZyAucHJpY2V7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNlNTRiMjU7XHJcbn1cclxuLnByb2R1Y3RfYm9keSAucHJvZHVjdF9oZWFkaW5nIC5wcmljZSBzcGFue1xyXG4gICAgY29sb3I6ICM3NDc0NzQ7XHJcbn1cclxuLnByb2R1Y3RfYm9keSAucHJvZHVjdF9oZWFkaW5nIC5wcmljZSAuZm9ybS1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG59XHJcbi5wcm9kdWN0X2JvZHkgLnByb2R1Y3RfaGVhZGluZyAucHJpY2UgLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5wcm9kdWN0X2JvZHkgLnByb2R1Y3RfaGVhZGluZyAucHJpY2UgLmZvcm0tZ3JvdXAgLmJ0bi1xdG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJhY2tncm91bmQ6ICNlNTRiMjU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTU0YjI1O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5wcm9kdWN0X2JvZHkgLnByb2R1Y3RfaGVhZGluZyAucHJpY2UgLmZvcm0tZ3JvdXAgLmJ0bi1xdG4uYnRuLWxlZnR7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbn1cclxuLnByb2R1Y3RfYm9keSAucHJvZHVjdF9oZWFkaW5nIC5wcmljZSAuZm9ybS1ncm91cCAuYnRuLXF0bi5idG4tcmlnaHR7XHJcbiAgICByaWdodDogNHB4O1xyXG59XHJcbi5wcm9kdWN0X2Rlc2NyaXB0aW9uX2FyZWF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLnByb2R1Y3RfZGVzY3JpcHRpb25fYXJlYSAucHJvZHVjdF9kZXNjcmlwdGlvbntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnByb2R1Y3RfZGVzY3JpcHRpb25fYXJlYSAucHJvZHVjdF9kZXNjcmlwdGlvbiBpbWd7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG59XHJcbi5wcm9kdWN0X2Rlc2NyaXB0aW9uX2FyZWEgLnByb2R1Y3RfZGVzY3JpcHRpb24gaDR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgY29sb3I6ICNlNTRiMjU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5wcm9kdWN0X2Rlc2NyaXB0aW9uX2FyZWEgLnByb2R1Y3RfZGVzY3JpcHRpb24gcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTU0YjI1O1xyXG4gICAgYmFja2dyb3VuZDogI2U1NGIyNTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLmJ0bi5idG4ye1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMWQxZDFiO1xyXG4gICAgYmFja2dyb3VuZDogIzFkMWQxYjtcclxufVxyXG4uYnRuLmJ0bjIuYnRuM3tcclxuICAgIGJvcmRlci1jb2xvcjogIzFkMWQxYjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogIzFkMWQxYjtcclxufVxyXG4uYnRuLmJ0bjIuYnRuMyBpbWcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB0b3A6IDZweDtcclxufSJdfQ== */");

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