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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Montserrat\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.automotive_area {\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.automotive_area:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 32%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url('sape1.png');\n  z-index: 0;\n}\n.container {\n  width: 90%;\n  box-sizing: border-box;\n  padding: 0;\n  margin: auto;\n}\n.automotive_body {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n}\n.header_area {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: center;\n  padding: 18px 0px 24px;\n}\n.header_area h1 {\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  color: #ffffff;\n  font-size: 18px;\n  font-weight: 500;\n}\n.header_area .btn-back {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 1px 0;\n  outline: none;\n  float: left;\n  max-width: 22px;\n}\n.header_area .btn-cart {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 0px 0;\n  outline: none;\n  float: right;\n  max-width: 28px;\n}\n.search_box {\n  width: 97%;\n  box-sizing: border-box;\n  overflow: hidden;\n  border-radius: 6px;\n  position: relative;\n  z-index: 1;\n  margin: 0 0 58px;\n  box-shadow: 0px 0px 7px #0000001c;\n  margin-left: auto;\n  margin-right: auto;\n}\n.search_box .form-control {\n  width: 100%;\n  height: 48px;\n  background: #ffffff;\n  border: 1px solid #ffffff;\n  font-size: 14px;\n  font-weight: 500;\n  color: #868686;\n  padding: 10px 10px 10px 45px;\n  /* box-shadow: 0 0 0px rgb(0, 0, 0); */\n  outline: none;\n}\n.search_box .form-control::placeholder {\n  font-weight: 500;\n  color: #868686;\n}\n.search_box .icon {\n  position: absolute;\n  top: 9px;\n  left: 15px;\n  font-size: 26px;\n  color: #bebebe;\n}\n.automotive_body h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 15px;\n  margin: 0 0 30px;\n  font-size: 18px;\n  font-weight: 600;\n  color: #000000;\n  border-bottom: 1px dashed #949494;\n}\n.form-group {\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  margin: 0 0 25px;\n}\nselect.form-control {\n  width: 100%;\n  height: 52px;\n  border-radius: 10px;\n  border: 1px solid #8e8e8d;\n  font-size: 14px;\n  font-weight: 400;\n  color: #616161;\n  padding: 15px 15px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: none;\n  background-color: transparent;\n  background: transparent;\n}\n.form-group .arrow {\n  position: absolute;\n  top: 17px;\n  right: 17px;\n}\nselect.form-control:focus {\n  border-color: #e9492a;\n  background-color: transparent;\n  background: transparent;\n}\n.form-group label {\n  position: absolute;\n  top: -10px;\n  left: 12px;\n  background: #ffffff;\n  font-size: 15px;\n  font-weight: 600;\n  color: #000000;\n  padding: 0 2px;\n}\n.btn {\n  width: 100%;\n  height: 52px;\n  background: #e9492a;\n  border: 1px solid #e9492a;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 500;\n  outline: none;\n  border-radius: 10px;\n  letter-spacing: 1px;\n}\n@media (max-width: 414px) {\n  .search_box {\n    margin: 36px 0 58px;\n  }\n}\n@media (max-width: 411px) {\n  .search_box {\n    margin: 40px 0 58px;\n  }\n}\n@media (max-width: 375px) {\n  .search_box {\n    margin: 14px 0 58px;\n  }\n}\n@media (max-width: 360px) {\n  .search_box {\n    margin: 4px 0 58px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVuZGZpdHRpbmctaG9zZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEseUZBQUE7QUFDQSwrSEFBQTtBQUNBLHFNQUFBO0FBQ1I7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7QUFDQTtFQUF3QixxQ0FBQTtBQUd4QjtBQUZBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFLSjtBQUhBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFNRjtBQUpBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtBQU9KO0FBTEE7RUFDSSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQVFKO0FBTkE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVNGO0FBUEE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFVSjtBQVJBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVdGO0FBVEE7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFZSjtBQVZBO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBYUo7QUFYQTtFQUNJLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWNKO0FBWkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGFBQUE7QUFlSjtBQWJBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBZ0JGO0FBZEE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFpQko7QUFmQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7QUFrQko7QUFoQkE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBbUJGO0FBakJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0FBb0JKO0FBbEJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQXFCRjtBQW5CQTtFQUNJLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtBQXNCSjtBQXBCQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBdUJGO0FBckJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUF3QkY7QUFsQkE7RUFDQTtJQUNJLG1CQUFBO0VBcUJGO0FBQ0Y7QUFuQkE7RUFFQTtJQUVJLG1CQUFBO0VBbUJGO0FBQ0Y7QUFaQTtFQUNBO0lBQ0ksbUJBQUE7RUFjRjtBQUNGO0FBWEE7RUFDQTtJQUNJLGtCQUFBO0VBYUY7QUFDRiIsImZpbGUiOiJlbmRmaXR0aW5nLWhvc2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE0LjAvY3NzL2FsbC5taW4uY3NzJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQvMi4yLjAvY3NzL21hdGVyaWFsLWRlc2lnbi1pY29uaWMtZm9udC5taW4uY3NzJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5odG1sLCBib2R5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgei1pbmRleDoxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbn1cclxuKiwgOjphZnRlciwgOjpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2eyBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO31cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4uYXV0b21vdGl2ZV9hcmVhe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uYXV0b21vdGl2ZV9hcmVhOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzIlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3NhcGUxLnBuZyk7XHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5hdXRvbW90aXZlX2JvZHl7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5oZWFkZXJfYXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMThweCAwcHggMjRweDtcclxufVxyXG4uaGVhZGVyX2FyZWEgaDF7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMCAwO1xyXG4gIG1hcmdpbjogMCAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5oZWFkZXJfYXJlYSAuYnRuLWJhY2sge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxcHggMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1heC13aWR0aDogMjJweDtcclxufVxyXG4uaGVhZGVyX2FyZWEgLmJ0bi1jYXJ0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4IDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWF4LXdpZHRoOiAyOHB4O1xyXG59XHJcbi5zZWFyY2hfYm94IHtcclxuICAgIHdpZHRoOiA5NyU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBtYXJnaW46IDAgMCA1OHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggIzAwMDAwMDFjO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLnNlYXJjaF9ib3ggLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjODY4Njg2O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNDVweDtcclxuICAgIC8qIGJveC1zaGFkb3c6IDAgMCAwcHggcmdiKDAsIDAsIDApOyAqL1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uc2VhcmNoX2JveCAuZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlcntcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjODY4Njg2O1xyXG59XHJcbi5zZWFyY2hfYm94IC5pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOXB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGNvbG9yOiAjYmViZWJlO1xyXG59XHJcbi5hdXRvbW90aXZlX2JvZHkgaDMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwIDE1cHg7XHJcbiAgICBtYXJnaW46IDAgMCAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjOTQ5NDk0O1xyXG59XHJcbi5mb3JtLWdyb3Vwe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMCAwIDI1cHg7XHJcbn1cclxuc2VsZWN0LmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOGU4ZThkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjNjE2MTYxO1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmZvcm0tZ3JvdXAgLmFycm93e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE3cHg7XHJcbiAgcmlnaHQ6IDE3cHg7XHJcbn1cclxuc2VsZWN0LmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICNlOTQ5MmE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5mb3JtLWdyb3VwIGxhYmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTBweDtcclxuICBsZWZ0OiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgcGFkZGluZzogMCAycHg7XHJcbn1cclxuLmJ0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOTQ5MmE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5NDkyYTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjQxNHB4KSB7XHJcbi5zZWFyY2hfYm94IHtcclxuICAgIG1hcmdpbjogMzZweCAwIDU4cHg7XHJcbn1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjQxMXB4KSB7XHJcblxyXG4uc2VhcmNoX2JveCB7XHJcbiAgIFxyXG4gICAgbWFyZ2luOiA0MHB4IDAgNThweDtcclxuICAgIFxyXG59XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo0MTBweCkge1xyXG5cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDozNzVweCkge1xyXG4uc2VhcmNoX2JveCB7XHJcbiAgICBtYXJnaW46IDE0cHggMCA1OHB4O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MzYwcHgpIHtcclxuLnNlYXJjaF9ib3gge1xyXG4gICAgbWFyZ2luOiA0cHggMCA1OHB4O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MzIwcHgpIHtcclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "KMtW":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/endfitting-hose/endfitting-hose.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"automotive_area\">\n      <div class=\"container\">\n          <div class=\"automotive_body\">\n              <div class=\"header_area\">\n                  <button class=\"btn-back\" routerLink=\"/home\" (click)=\"storePage('/hose-page/4')\"><img src=\"assets/images/back.png\" alt=\"back\" title=\"\" /></button>\n                  <h1>End Fittings</h1>\n                     <button class=\"btn-cart\" routerLink=\"/cart-page\"><img src=\"assets/images/cart.png\" alt=\"back\" title=\"\" /><span class=\"total_cart\" [innerHTML]=\"cartcount\" ></span></button>\n              </div>\n              <div class=\"search_box\">\n                  <div class=\"icon\"><i class=\"zmdi zmdi-search\"></i></div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Search Products...\" />\n              </div>\n              <h3>Search End Fittings</h3>\n              <div class=\"form-group\">\n                  <label>Part Type</label>\n                 <select class=\"form-control\" [(ngModel)]=\"part_type\" (change)=\"getDescription()\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" selected=\"selected\">Select part type</option>\n                 <option *ngFor=\"let part_list of partList\" value=\"{{part_list.part_id}}\">{{part_list.part_name}}</option>\n                </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <div class=\"form-group\">\n                  <label>Size</label>\n                  <select class=\"form-control\" (change)=\"getDescription()\" [(ngModel)]=\"size\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" selected=\"selected\">Select size</option>\n                 <option *ngFor=\"let data_listsize of data_list_size\" value=\"{{data_listsize.size_id}}\">{{data_listsize.size_name}}</option>\n                </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n               <!--  <div class=\"form-group\">\n                  <label>Description</label>\n                  <select class=\"form-control\" [(ngModel)]=\"description\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" selected=\"selected\">Select one</option>\n                   <option *ngFor=\"let desce_list of desceList\" value=\"{{desce_list.hp_id}}\">{{desce_list.hp_description}}</option>\n                </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div> -->\n              <button class=\"btn\" (click)=\"gotoProduct()\" routerLink=\"/product\">search</button>\n          </div>\n      </div>\n    </div>\n  ");

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
        this.count = 0;
        this.cart_data = [];
        this.cartcount = 0;
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
        this.navCtrl.navigateForward('product?part_type=' + this.part_type + '&size=' + this.size);
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