(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["endfitting-hose-endfitting-hose-module"],{

/***/ "+bjA":
/*!***********************************************************!*\
  !*** ./src/app/endfitting-hose/endfitting-hose.module.ts ***!
  \***********************************************************/
/*! exports provided: EndfittingHosePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndfittingHosePageModule", function() { return EndfittingHosePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _endfitting_hose_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./endfitting-hose-routing.module */ "0zFD");
/* harmony import */ var _endfitting_hose_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./endfitting-hose.page */ "sGfl");







let EndfittingHosePageModule = class EndfittingHosePageModule {
};
EndfittingHosePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _endfitting_hose_routing_module__WEBPACK_IMPORTED_MODULE_5__["EndfittingHosePageRoutingModule"]
        ],
        declarations: [_endfitting_hose_page__WEBPACK_IMPORTED_MODULE_6__["EndfittingHosePage"]]
    })
], EndfittingHosePageModule);



/***/ }),

/***/ "0zFD":
/*!*******************************************************************!*\
  !*** ./src/app/endfitting-hose/endfitting-hose-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: EndfittingHosePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndfittingHosePageRoutingModule", function() { return EndfittingHosePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _endfitting_hose_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./endfitting-hose.page */ "sGfl");




const routes = [
    {
        path: '',
        component: _endfitting_hose_page__WEBPACK_IMPORTED_MODULE_3__["EndfittingHosePage"]
    }
];
let EndfittingHosePageRoutingModule = class EndfittingHosePageRoutingModule {
};
EndfittingHosePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EndfittingHosePageRoutingModule);



/***/ }),

/***/ "3m8f":
/*!***********************************************************!*\
  !*** ./src/app/endfitting-hose/endfitting-hose.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Oswald\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.container {\n  box-sizing: border-box;\n  padding: 0px 30px;\n  width: 100%;\n}\n.w-100 {\n  width: 100%;\n  box-sizing: border-box;\n}\n/*------ login css start -----*/\n.product_main_area {\n  width: 100%;\n  height: 100vh;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  position: relative;\n  z-index: 1;\n}\n.product_main_area:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 190px;\n  box-sizing: border-box;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: top center;\n  background-image: url('bg3.png');\n  z-index: -1;\n}\n.product_main_area:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 140px;\n  box-sizing: border-box;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: top center;\n  background-image: url('beforeimg.jpg');\n  z-index: -1;\n}\n.product_main_area .product_body_area {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 30px 0px;\n  margin: 0 0;\n  position: relative;\n}\n.product_main_area .product_body_area .header_area {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  min-height: 52px;\n}\n.product_main_area .product_body_area .header_area .logo {\n  width: 90px;\n  box-sizing: border-box;\n  float: left;\n}\n.product_main_area .product_body_area .header_area .logo img {\n  width: 100%;\n  object-fit: cover;\n}\n.product_main_area .product_body_area .search_box_area {\n  width: 100%;\n  box-sizing: border-box;\n  margin-bottom: 25px;\n}\n.product_main_area .product_body_area .search_box_area h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 6px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 400;\n  text-transform: capitalize;\n  letter-spacing: 1px;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 15px 15px 5px 15px;\n  background: #783968;\n  background: linear-gradient(0deg, rgba(120, 57, 104, 0) 0%, white 100%);\n  border-radius: 5px;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box .form-group {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 15px;\n  position: relative;\n  opacity: 0.6;\n}\n.form-group.active {\n  opacity: 1 !important;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box .form-group span.iconbox {\n  position: absolute;\n  z-index: 1;\n  left: 9px;\n  top: 35px;\n  border-right: 1px solid rgba(235, 153, 41, 0.52);\n  padding-right: 6px;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box .form-control {\n  width: 100%;\n  height: 45px;\n  box-sizing: border-box;\n  border-radius: 0;\n  padding: 0 15px 0 50px;\n  outline: none;\n  border-color: #eb9929;\n  background-color: #ffffff;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box textarea.form-control {\n  height: 110px;\n  border-radius: 10px;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box .btn {\n  width: 100%;\n  padding: 15px 20px;\n  text-transform: uppercase;\n  color: #fff;\n  background: #eb9929;\n  border: 1px solid #eb9929;\n  border-radius: 0;\n  outline: none;\n  max-width: 90%;\n  margin: auto 5%;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box .form-group label {\n  width: 100%;\n  display: block;\n  margin-bottom: 5px;\n  font-size: 16px;\n  position: relative;\n  padding-left: 0;\n  font-family: \"Oswald\", sans-serif;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box .form-group label .icon {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 10px;\n  width: 20px;\n  height: 20px;\n  overflow: hidden;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box .form-group label .icon img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.nav_bar {\n  float: left;\n  background: transparent;\n  color: #fff;\n  padding: 0 0;\n  margin: 0 0;\n  border: none;\n  margin-right: 12px;\n  font-size: 24px;\n  margin-top: 3px;\n  outline: none;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box h3 {\n  width: 100%;\n  display: block;\n  margin-bottom: 12px;\n  text-transform: capitalize;\n  color: #eb9929;\n  position: relative;\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.13);\n}\n.product_main_area .product_body_area .search_box_area .product_type_box img.user_icon {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 0;\n  width: 28px;\n  height: 28px;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVuZGZpdHRpbmctaG9zZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEseUZBQUE7QUFDQSwrSEFBQTtBQUNBLGtNQUFBO0FBQ0Esd0dBQUE7QUFDUjtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUVBO0VBQ0ksc0JBQUE7QUFDSjtBQUNBO0VBQXVCLGlDQUFBO0FBR3ZCO0FBRkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUtKO0FBSEE7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQU1KO0FBSkE7RUFBTyxXQUFBO0VBQVksc0JBQUE7QUFTbkI7QUFSQSwrQkFBQTtBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBVUo7QUFSQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtBQVdKO0FBVEE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNDLFdBQUE7QUFZTDtBQVZBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFhSjtBQVhBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQWNKO0FBWkE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBZUo7QUFiQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQWdCSjtBQWJBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFnQko7QUFkQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUFpQko7QUFkQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1RUFBQTtFQUNBLGtCQUFBO0FBaUJKO0FBZkE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFrQko7QUFoQkE7RUFBb0IscUJBQUE7QUFvQnBCO0FBbkJBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0FBc0JKO0FBcEJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQXVCSjtBQXBCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQXVCSjtBQXJCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQXdCSjtBQXRCQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUF5Qko7QUF2QkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUEwQko7QUF4QkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBMkJKO0FBeEJBO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBMkJKO0FBeEJBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0Q0FBQTtBQTJCSjtBQXpCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQTRCSiIsImZpbGUiOiJlbmRmaXR0aW5nLWhvc2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE0LjAvY3NzL2FsbC5taW4uY3NzJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQvMi4yLjAvY3NzL21hdGVyaWFsLWRlc2lnbi1pY29uaWMtZm9udC5taW4uY3NzJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pc3dhbGQ6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuaHRtbCwgYm9keSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6MTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblxyXG59XHJcbiosIDo6YWZ0ZXIsIDo6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNntmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7fVxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udy0xMDB7d2lkdGg6IDEwMCU7Ym94LXNpemluZzogYm9yZGVyLWJveDt9XHJcbi8qLS0tLS0tIGxvZ2luIGNzcyBzdGFydCAtLS0tLSovXHJcblxyXG4ucHJvZHVjdF9tYWluX2FyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWE6YmVmb3Jle1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYmczLnBuZyk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWE6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2JlZm9yZWltZy5qcGcpO1xyXG4gICAgIHotaW5kZXg6IC0xO1xyXG59XHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMzBweCAwcHg7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5oZWFkZXJfYXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gICAgbWluLWhlaWdodDogNTJweDtcclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5oZWFkZXJfYXJlYSAubG9nb3tcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEgLmhlYWRlcl9hcmVhIC5sb2dvIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEgLnNlYXJjaF9ib3hfYXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuc2VhcmNoX2JveF9hcmVhIGgzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDZweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuc2VhcmNoX2JveF9hcmVhIC5wcm9kdWN0X3R5cGVfYm94IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDE1cHggMTVweCA1cHggMTVweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxMjAsNTcsMTA0KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDEyMCw1NywxMDQsMCkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuc2VhcmNoX2JveF9hcmVhIC5wcm9kdWN0X3R5cGVfYm94IC5mb3JtLWdyb3Vwe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufVxyXG4uZm9ybS1ncm91cC5hY3RpdmV7IG9wYWNpdHk6IDEhaW1wb3J0YW50OyB9XHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEgLnNlYXJjaF9ib3hfYXJlYSAucHJvZHVjdF90eXBlX2JveCAuZm9ybS1ncm91cCBzcGFuLmljb25ib3gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDlweDtcclxuICAgIHRvcDogMzVweDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigyMzUgMTUzIDQxIC8gNTIlKTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5zZWFyY2hfYm94X2FyZWEgLnByb2R1Y3RfdHlwZV9ib3ggLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgcGFkZGluZzogMCAxNXB4IDAgNTBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICNlYjk5Mjk7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuc2VhcmNoX2JveF9hcmVhIC5wcm9kdWN0X3R5cGVfYm94IHRleHRhcmVhLmZvcm0tY29udHJvbHtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEgLnNlYXJjaF9ib3hfYXJlYSAucHJvZHVjdF90eXBlX2JveCAuYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogI2ViOTkyOTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYjk5Mjk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvIDUlO1xyXG59XHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEgLnNlYXJjaF9ib3hfYXJlYSAucHJvZHVjdF90eXBlX2JveCAuZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEgLnNlYXJjaF9ib3hfYXJlYSAucHJvZHVjdF90eXBlX2JveCAuZm9ybS1ncm91cCBsYWJlbCAuaWNvbiB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5zZWFyY2hfYm94X2FyZWEgLnByb2R1Y3RfdHlwZV9ib3ggLmZvcm0tZ3JvdXAgbGFiZWwgLmljb24gaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLm5hdl9iYXJ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEgLnNlYXJjaF9ib3hfYXJlYSAucHJvZHVjdF90eXBlX2JveCBoMyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgY29sb3I6ICNlYjk5Mjk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMCAwIDAgLyAxMyUpO1xyXG59XHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEgLnNlYXJjaF9ib3hfYXJlYSAucHJvZHVjdF90eXBlX2JveCBpbWcudXNlcl9pY29ue1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59Il19 */");

/***/ }),

/***/ "KMtW":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/endfitting-hose/endfitting-hose.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n    <div class=\"product_main_area\">\n      <div class=\"container\">\n        <div class=\"product_body_area\">\n          <div class=\"header_area\">\n            <button class=\"nav_bar\" routerLink=\"/hose-page/4\" (click)=\"storePage('/hose-page/4')\"><i class=\"fas fa-arrow-left\"></i></button>\n            <div class=\"logo\"><img src=\"assets/images/logo.png\" alt=\"logo\" title=\"\"></div>\n          </div>\n          <div class=\"search_box_area\">\n            <h3>Endfitting hoses</h3>\n            <div class=\"product_type_box\">\n              <h3>\n               Search Endfitting Hose\n              </h3>\n              <div class=\"form-group active\">\n                <label>\n                 Part Type</label>\n                <select class=\"form-control\" [(ngModel)]=\"part_type\" (change)=\"getDescription()\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" selected=\"selected\">Select part type</option>\n                 <option *ngFor=\"let part_list of partList\" value=\"{{part_list.part_id}}\">{{part_list.part_name}}</option>\n                </select>\n                <span class=\"iconbox\"><img src=\"assets/images/hoseformicon5.jpg\" alt=\"#\"></span>\n              </div>\n              <div class=\"form-group active\">\n                <label> Size</label>\n                <select class=\"form-control\" (change)=\"getDescription()\" [(ngModel)]=\"size\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" selected=\"selected\">Select size</option>\n                 <option *ngFor=\"let data_listsize of data_list_size\" value=\"{{data_listsize.size_id}}\">{{data_listsize.size_name}}</option>\n                </select>\n                <span class=\"iconbox\"><img src=\"assets/images/size.png\" alt=\"#\"></span>\n              </div>\n              <div class=\"form-group active\">\n                <label> Description</label>\n                <select class=\"form-control\" [(ngModel)]=\"description\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" selected=\"selected\">Select one</option>\n                   <option *ngFor=\"let desce_list of desceList\" value=\"{{desce_list.hp_id}}\">{{desce_list.hp_description}}</option>\n                </select>\n                <span class=\"iconbox\"><img src=\"assets/images/hoseformicon6.jpg\" alt=\"#\"></span>\n              </div>\n          \n             <button class=\"btn\" (click)=\"gotoProduct()\">search</button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    \n  ");

/***/ }),

/***/ "sGfl":
/*!*********************************************************!*\
  !*** ./src/app/endfitting-hose/endfitting-hose.page.ts ***!
  \*********************************************************/
/*! exports provided: EndfittingHosePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndfittingHosePage", function() { return EndfittingHosePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_endfitting_hose_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./endfitting-hose.page.html */ "KMtW");
/* harmony import */ var _endfitting_hose_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endfitting-hose.page.scss */ "3m8f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");









let EndfittingHosePage = class EndfittingHosePage {
    constructor(http, navCtrl, storage, loadingController, alertController, route) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.route = route;
        this.appUrl_size = "https://theitvibe.com/project/ihose/api/getSize";
        this.appUrl_part = "https://theitvibe.com/project/ihose/api/getPartType";
        this.appUrl_description = "https://theitvibe.com/project/ihose/api/getDescription";
        //standard:any='';
        this.standard = '';
        this.size = '';
        this.name = '';
        this.pressure = '';
        this.part_type = '';
        this.description = '';
        this.assembly_name = '';
        this.productName = '';
        this.mk_name = '';
        this.part_no = '';
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params) {
                //let queryParams = params;
                this.id = params['id'];
                // console.log(this.id);
                //this.listing_standard();
                this.listing_size();
                this.listing_part();
                this.storePage('endfitting-hose/3');
                this.getDescription();
            }
        });
    }
    storePage(page) {
        this.storage.set("goTo", page);
    }
    listing_size() {
        var data = {
            "id": this.id,
        };
        this.http.post(this.appUrl_size, data)
            .subscribe(res => {
            this.res = res.json();
            //console.log(this.res);
            if (this.res) {
                this.data_list_size = this.res;
                //this.loading.hide();
            }
            else {
                alert("Server error");
                //this.loading.hide();
            }
        }, (err) => {
            //this.loading.hide();
            console.log(err);
        });
    }
    listing_part() {
        var data = {
            "id": this.id,
        };
        this.http.post(this.appUrl_part, data)
            .subscribe(res => {
            this.res = res.json();
            //console.log(this.res);
            if (this.res) {
                this.partList = this.res;
                //this.loading.hide();
            }
            else {
                alert("Server error");
                //this.loading.hide();
            }
        }, (err) => {
            //this.loading.hide();
            console.log(err);
        });
    }
    gotoProduct() {
        this.storage.set("goTo", 'endfitting-hose/3');
        this.navCtrl.navigateForward('product?assembly_name=' + this.assembly_name + '&part_type=' + this.part_type + '&standard=' + this.standard + '&size=' + this.size + '&name=' + this.productName + '&pressure=' + this.pressure + '&description=' + this.description + '&maker=' + this.mk_name + '&part_no=' + this.part_no);
    }
    getDescription() {
        //console.log(this.id);
        var data = {
            "id": this.id,
            "hp_size": this.size,
            "hp_parttype": this.part_type,
        };
        this.http.post(this.appUrl_description, data)
            .subscribe(res => {
            this.res = res.json();
            //console.log(this.res);
            if (this.res) {
                this.desceList = this.res;
                //this.loading.hide();
            }
            else {
                alert("Server error");
                //this.loading.hide();
            }
        }, (err) => {
            //this.loading.hide();
            console.log(err);
        });
    }
};
EndfittingHosePage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
EndfittingHosePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-endfitting-hose',
        template: _raw_loader_endfitting_hose_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_endfitting_hose_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EndfittingHosePage);



/***/ })

}]);
//# sourceMappingURL=endfitting-hose-endfitting-hose-module.js.map