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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Montserrat\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.automotive_area {\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.automotive_area:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 31%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url('sape1.png');\n  z-index: 0;\n}\n.container {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 30px;\n}\n.automotive_body {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n}\n.header_area {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: center;\n  padding: 30px 0px 50px;\n}\n.header_area h1 {\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  color: #ffffff;\n  font-size: 18px;\n  font-weight: 500;\n}\n.header_area .btn-back {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 3px 0;\n  outline: none;\n  float: left;\n}\n.header_area .btn-cart {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 3px 0;\n  outline: none;\n  float: right;\n}\n.search_box {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  border-radius: 5px;\n  position: relative;\n  z-index: 1;\n  margin: 0 0 60px;\n}\n.search_box .form-control {\n  width: 100%;\n  height: 50px;\n  background: #ffffff;\n  border: 1px solid #ffffff;\n  font-size: 14px;\n  font-weight: 500;\n  color: #868686;\n  padding: 10px 10px 10px 45px;\n  box-shadow: 0 0 30px #e03b1b;\n  outline: none;\n}\n.search_box .form-control::placeholder {\n  font-weight: 500;\n  color: #868686;\n}\n.search_box .icon {\n  position: absolute;\n  top: 7px;\n  left: 15px;\n  font-size: 32px;\n  color: #868686;\n}\n.automotive_body h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 10px;\n  margin: 0 0 40px;\n  font-size: 18px;\n  font-weight: 600;\n  color: #000000;\n  border-bottom: 1px dashed #949494;\n}\n.form-group {\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  margin: 0 0 25px;\n}\nselect.form-control {\n  width: 100%;\n  height: 52px;\n  border-radius: 10px;\n  border: 1px solid #8e8e8d;\n  font-size: 14px;\n  font-weight: 400;\n  color: #616161;\n  padding: 15px 15px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: none;\n}\n.form-group .arrow {\n  position: absolute;\n  top: 17px;\n  right: 17px;\n}\nselect.form-control:focus {\n  border-color: #e9492a;\n}\n.form-group label {\n  position: absolute;\n  top: -10px;\n  left: 12px;\n  background: #ffffff;\n  font-size: 15px;\n  font-weight: 600;\n  color: #000000;\n  padding: 0 2px;\n}\n.btn {\n  width: 100%;\n  height: 52px;\n  background: #e9492a;\n  border: 1px solid #e9492a;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 500;\n  outline: none;\n  border-radius: 10px;\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVuZGZpdHRpbmctaG9zZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEseUZBQUE7QUFDQSwrSEFBQTtBQUNBLHFNQUFBO0FBQ1I7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7QUFDQTtFQUF3QixxQ0FBQTtBQUd4QjtBQUZBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFLSjtBQUhBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFNRjtBQUpBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtBQU9GO0FBTEE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQVFGO0FBTkE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVNGO0FBUEE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFVRjtBQVJBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVdGO0FBVEE7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQVlGO0FBVkE7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQWFGO0FBWEE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFjRjtBQVpBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBZUY7QUFiQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQWdCRjtBQWRBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBaUJGO0FBZkE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FBa0JGO0FBaEJBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQW1CRjtBQWpCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBb0JGO0FBbEJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQXFCRjtBQW5CQTtFQUNFLHFCQUFBO0FBc0JGO0FBcEJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUF1QkY7QUFyQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQXdCRiIsImZpbGUiOiJlbmRmaXR0aW5nLWhvc2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE0LjAvY3NzL2FsbC5taW4uY3NzJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQvMi4yLjAvY3NzL21hdGVyaWFsLWRlc2lnbi1pY29uaWMtZm9udC5taW4uY3NzJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5odG1sLCBib2R5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgei1pbmRleDoxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbn1cclxuKiwgOjphZnRlciwgOjpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2eyBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO31cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4uYXV0b21vdGl2ZV9hcmVhe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uYXV0b21vdGl2ZV9hcmVhOmJlZm9yZXtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMSU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9zYXBlMS5wbmcpO1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDBweCAzMHB4O1xyXG59XHJcbi5hdXRvbW90aXZlX2JvZHl7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5oZWFkZXJfYXJlYXtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDMwcHggMHB4IDUwcHg7XHJcbn1cclxuLmhlYWRlcl9hcmVhIGgxe1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDAgMDtcclxuICBtYXJnaW46IDAgMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uaGVhZGVyX2FyZWEgLmJ0bi1iYWNre1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogM3B4IDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uaGVhZGVyX2FyZWEgLmJ0bi1jYXJ0e1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogM3B4IDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnNlYXJjaF9ib3gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbWFyZ2luOiAwIDAgNjBweDtcclxufVxyXG4uc2VhcmNoX2JveCAuZm9ybS1jb250cm9sIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjODY4Njg2O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDQ1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDMwcHggcmdiKDIyNCA1OSAyNyk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uc2VhcmNoX2JveCAuZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlcntcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjODY4Njg2O1xyXG59XHJcbi5zZWFyY2hfYm94IC5pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3cHg7XHJcbiAgbGVmdDogMTVweDtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgY29sb3I6ICM4Njg2ODY7XHJcbn1cclxuLmF1dG9tb3RpdmVfYm9keSBoMyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwIDAgMTBweDtcclxuICBtYXJnaW46IDAgMCA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzk0OTQ5NDtcclxufVxyXG4uZm9ybS1ncm91cHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDAgMCAyNXB4O1xyXG59XHJcbnNlbGVjdC5mb3JtLWNvbnRyb2wge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ZThlOGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICM2MTYxNjE7XHJcbiAgcGFkZGluZzogMTVweCAxNXB4O1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uZm9ybS1ncm91cCAuYXJyb3d7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTdweDtcclxuICByaWdodDogMTdweDtcclxufVxyXG5zZWxlY3QuZm9ybS1jb250cm9sOmZvY3Vze1xyXG4gIGJvcmRlci1jb2xvcjogI2U5NDkyYTtcclxufVxyXG4uZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTEwcHg7XHJcbiAgbGVmdDogMTJweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHBhZGRpbmc6IDAgMnB4O1xyXG59XHJcbi5idG4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTJweDtcclxuICBiYWNrZ3JvdW5kOiAjZTk0OTJhO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOTQ5MmE7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "KMtW":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/endfitting-hose/endfitting-hose.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"automotive_area\">\n      <div class=\"container\">\n          <div class=\"automotive_body\">\n              <div class=\"header_area\">\n                  <button class=\"btn-back\" routerLink=\"/\" (click)=\"storePage('/hose-page/4')\"><img src=\"assets/images/back.png\" alt=\"back\" title=\"\" /></button>\n                  <h1>End Fittings</h1>\n                  <button class=\"btn-cart\"><img src=\"assets/images/cart.png\" alt=\"back\" title=\"\" /></button>\n              </div>\n              <div class=\"search_box\">\n                  <div class=\"icon\"><i class=\"zmdi zmdi-search\"></i></div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Search Products...\" />\n              </div>\n              <h3>Search End Fittings</h3>\n              <div class=\"form-group\">\n                  <label>Part Type</label>\n                 <select class=\"form-control\" [(ngModel)]=\"part_type\" (change)=\"getDescription()\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" selected=\"selected\">Select part type</option>\n                 <option *ngFor=\"let part_list of partList\" value=\"{{part_list.part_id}}\">{{part_list.part_name}}</option>\n                </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <div class=\"form-group\">\n                  <label>Size</label>\n                  <select class=\"form-control\" (change)=\"getDescription()\" [(ngModel)]=\"size\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" selected=\"selected\">Select size</option>\n                 <option *ngFor=\"let data_listsize of data_list_size\" value=\"{{data_listsize.size_id}}\">{{data_listsize.size_name}}</option>\n                </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n               <!--  <div class=\"form-group\">\n                  <label>Description</label>\n                  <select class=\"form-control\" [(ngModel)]=\"description\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" selected=\"selected\">Select one</option>\n                   <option *ngFor=\"let desce_list of desceList\" value=\"{{desce_list.hp_id}}\">{{desce_list.hp_description}}</option>\n                </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div> -->\n              <button class=\"btn\" (click)=\"gotoProduct1()\" routerLink=\"/product\">search</button>\n          </div>\n      </div>\n    </div>\n  ");

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