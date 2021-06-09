(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assembly-hose-assembly-hose-module"],{

/***/ "0kqV":
/*!***************************************************************!*\
  !*** ./src/app/assembly-hose/assembly-hose-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AssemblyHosePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssemblyHosePageRoutingModule", function() { return AssemblyHosePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _assembly_hose_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assembly-hose.page */ "YsJg");




const routes = [
    {
        path: '',
        component: _assembly_hose_page__WEBPACK_IMPORTED_MODULE_3__["AssemblyHosePage"]
    }
];
let AssemblyHosePageRoutingModule = class AssemblyHosePageRoutingModule {
};
AssemblyHosePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AssemblyHosePageRoutingModule);



/***/ }),

/***/ "3c2T":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assembly-hose/assembly-hose.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n    <div class=\"product_main_area\">\n      <div class=\"container\">\n        <div class=\"product_body_area\">\n          <div class=\"header_area\">\n            <button class=\"nav_bar\" routerLink=\"/hose-page/4\" (click)=\"storePage('/hose-page/4')\"><i class=\"fas fa-arrow-left\"></i></button>\n            <div class=\"logo\"><img src=\"assets/images/logo.png\" alt=\"logo\" title=\"\"></div>\n          </div>\n          <div class=\"search_box_area\">\n             <h3>Assemblies Hose</h3>\n            <div class=\"product_type_box\">\n              <h3>\n               Search Assemblies Hose\n              </h3>\n              <div class=\"form-group active\">\n                <label>\n                Assesmbly Name</label>\n                <select class=\"form-control\" [(ngModel)]=\"assembly_name\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" selected=\"selected\">Select name</option>\n                 <option *ngFor=\"let assembly_ist of assemblyList\" value=\"{{assembly_ist.assembly_id}}\">{{assembly_ist.assembly_name}}</option>\n                </select>\n                <span class=\"iconbox\"><img src=\"assets/images/icon8.jpg\" alt=\"#\"></span>\n              </div>\n              \n             <button class=\"btn\" (click)=\"gotoProduct()\">search</button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    \n  ");

/***/ }),

/***/ "NxbW":
/*!*******************************************************!*\
  !*** ./src/app/assembly-hose/assembly-hose.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Oswald\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.container {\n  box-sizing: border-box;\n  padding: 0px 30px;\n  width: 100%;\n}\n.w-100 {\n  width: 100%;\n  box-sizing: border-box;\n}\n/*------ login css start -----*/\n.product_main_area {\n  width: 100%;\n  height: 100vh;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  position: relative;\n  z-index: 1;\n}\n.product_main_area:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 190px;\n  box-sizing: border-box;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: top center;\n  background-image: url('bg3.png');\n  z-index: -1;\n}\n.product_main_area:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 140px;\n  box-sizing: border-box;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: top center;\n  background-image: url('beforeimg.jpg');\n  z-index: -1;\n}\n.product_main_area .product_body_area {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 30px 0px;\n  margin: 0 0;\n  position: relative;\n}\n.product_main_area .product_body_area .header_area {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  min-height: 52px;\n}\n.product_main_area .product_body_area .header_area .logo {\n  width: 90px;\n  box-sizing: border-box;\n  float: left;\n}\n.product_main_area .product_body_area .header_area .logo img {\n  width: 100%;\n  object-fit: cover;\n}\n.product_main_area .product_body_area .search_box_area {\n  width: 100%;\n  box-sizing: border-box;\n  margin-bottom: 25px;\n}\n.product_main_area .product_body_area .search_box_area h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 6px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 400;\n  text-transform: capitalize;\n  letter-spacing: 1px;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 15px 15px 5px 15px;\n  background: #783968;\n  background: linear-gradient(0deg, rgba(120, 57, 104, 0) 0%, white 100%);\n  border-radius: 5px;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box .form-group {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 15px;\n  position: relative;\n  opacity: 0.6;\n}\n.form-group.active {\n  opacity: 1 !important;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box .form-group span.iconbox {\n  position: absolute;\n  z-index: 1;\n  left: 9px;\n  top: 35px;\n  border-right: 1px solid rgba(235, 153, 41, 0.52);\n  padding-right: 6px;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box .form-control {\n  width: 100%;\n  height: 45px;\n  box-sizing: border-box;\n  border-radius: 0;\n  padding: 0 15px 0 50px;\n  outline: none;\n  border-color: #eb9929;\n  background-color: #ffffff;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box textarea.form-control {\n  height: 110px;\n  border-radius: 10px;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box .btn {\n  width: 100%;\n  padding: 15px 20px;\n  text-transform: uppercase;\n  color: #fff;\n  background: #eb9929;\n  border: 1px solid #eb9929;\n  border-radius: 0;\n  outline: none;\n  max-width: 90%;\n  margin: auto 5%;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box .form-group label {\n  width: 100%;\n  display: block;\n  margin-bottom: 5px;\n  font-size: 16px;\n  position: relative;\n  padding-left: 0;\n  font-family: \"Oswald\", sans-serif;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box .form-group label .icon {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 10px;\n  width: 20px;\n  height: 20px;\n  overflow: hidden;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box .form-group label .icon img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.nav_bar {\n  float: left;\n  background: transparent;\n  color: #fff;\n  padding: 0 0;\n  margin: 0 0;\n  border: none;\n  margin-right: 12px;\n  font-size: 24px;\n  margin-top: 3px;\n  outline: none;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box h3 {\n  width: 100%;\n  display: block;\n  margin-bottom: 12px;\n  text-transform: capitalize;\n  color: #eb9929;\n  position: relative;\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.13);\n}\n.product_main_area .product_body_area .search_box_area .product_type_box img.user_icon {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 0;\n  width: 28px;\n  height: 28px;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFzc2VtYmx5LWhvc2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHlGQUFBO0FBQ0EsK0hBQUE7QUFDQSxrTUFBQTtBQUNBLHdHQUFBO0FBQ1I7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7QUFDQTtFQUF1QixpQ0FBQTtBQUd2QjtBQUZBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFLSjtBQUhBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFNSjtBQUpBO0VBQU8sV0FBQTtFQUFZLHNCQUFBO0FBU25CO0FBUkEsK0JBQUE7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVVKO0FBUkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUFXSjtBQVRBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7RUFDQyxXQUFBO0FBWUw7QUFWQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBYUo7QUFYQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFjSjtBQVpBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQWVKO0FBYkE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFnQko7QUFiQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBZ0JKO0FBZEE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBaUJKO0FBZEE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUVBQUE7RUFDQSxrQkFBQTtBQWlCSjtBQWZBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBa0JKO0FBaEJBO0VBQW9CLHFCQUFBO0FBb0JwQjtBQW5CQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrQkFBQTtBQXNCSjtBQXBCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUF1Qko7QUFwQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUF1Qko7QUFyQkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUF3Qko7QUF0QkE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBeUJKO0FBdkJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBMEJKO0FBeEJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQTJCSjtBQXhCQTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQTJCSjtBQXhCQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNENBQUE7QUEyQko7QUF6QkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUE0QkoiLCJmaWxlIjoiYXNzZW1ibHktaG9zZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTQuMC9jc3MvYWxsLm1pbi5jc3MnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGVyaWFsLWRlc2lnbi1pY29uaWMtZm9udC8yLjIuMC9jc3MvbWF0ZXJpYWwtZGVzaWduLWljb25pYy1mb250Lm1pbi5jc3MnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZDp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5odG1sLCBib2R5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgei1pbmRleDoxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbn1cclxuKiwgOjphZnRlciwgOjpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2e2ZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjt9XHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi53LTEwMHt3aWR0aDogMTAwJTtib3gtc2l6aW5nOiBib3JkZXItYm94O31cclxuLyotLS0tLS0gbG9naW4gY3NzIHN0YXJ0IC0tLS0tKi9cclxuXHJcbi5wcm9kdWN0X21haW5fYXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcbi5wcm9kdWN0X21haW5fYXJlYTpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTkwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzMucG5nKTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcbi5wcm9kdWN0X21haW5fYXJlYTphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYmVmb3JlaW1nLmpwZyk7XHJcbiAgICAgei1pbmRleDogLTE7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDBweDtcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEgLmhlYWRlcl9hcmVhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBtaW4taGVpZ2h0OiA1MnB4O1xyXG59XHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEgLmhlYWRlcl9hcmVhIC5sb2dve1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuaGVhZGVyX2FyZWEgLmxvZ28gaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuc2VhcmNoX2JveF9hcmVhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5zZWFyY2hfYm94X2FyZWEgaDMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgNnB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5zZWFyY2hfYm94X2FyZWEgLnByb2R1Y3RfdHlwZV9ib3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4IDVweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDEyMCw1NywxMDQpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTIwLDU3LDEwNCwwKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5zZWFyY2hfYm94X2FyZWEgLnByb2R1Y3RfdHlwZV9ib3ggLmZvcm0tZ3JvdXB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG59XHJcbi5mb3JtLWdyb3VwLmFjdGl2ZXsgb3BhY2l0eTogMSFpbXBvcnRhbnQ7IH1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuc2VhcmNoX2JveF9hcmVhIC5wcm9kdWN0X3R5cGVfYm94IC5mb3JtLWdyb3VwIHNwYW4uaWNvbmJveCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbGVmdDogOXB4O1xyXG4gICAgdG9wOiAzNXB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDIzNSAxNTMgNDEgLyA1MiUpO1xyXG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG59XHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEgLnNlYXJjaF9ib3hfYXJlYSAucHJvZHVjdF90eXBlX2JveCAuZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHggMCA1MHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogI2ViOTkyOTsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5zZWFyY2hfYm94X2FyZWEgLnByb2R1Y3RfdHlwZV9ib3ggdGV4dGFyZWEuZm9ybS1jb250cm9se1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuc2VhcmNoX2JveF9hcmVhIC5wcm9kdWN0X3R5cGVfYm94IC5idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWI5OTI5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ViOTkyOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG8gNSU7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuc2VhcmNoX2JveF9hcmVhIC5wcm9kdWN0X3R5cGVfYm94IC5mb3JtLWdyb3VwIGxhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuc2VhcmNoX2JveF9hcmVhIC5wcm9kdWN0X3R5cGVfYm94IC5mb3JtLWdyb3VwIGxhYmVsIC5pY29uIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAycHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEgLnNlYXJjaF9ib3hfYXJlYSAucHJvZHVjdF90eXBlX2JveCAuZm9ybS1ncm91cCBsYWJlbCAuaWNvbiBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4ubmF2X2JhcntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuc2VhcmNoX2JveF9hcmVhIC5wcm9kdWN0X3R5cGVfYm94IGgzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBjb2xvcjogI2ViOTkyOTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigwIDAgMCAvIDEzJSk7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuc2VhcmNoX2JveF9hcmVhIC5wcm9kdWN0X3R5cGVfYm94IGltZy51c2VyX2ljb257XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "YsJg":
/*!*****************************************************!*\
  !*** ./src/app/assembly-hose/assembly-hose.page.ts ***!
  \*****************************************************/
/*! exports provided: AssemblyHosePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssemblyHosePage", function() { return AssemblyHosePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_assembly_hose_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./assembly-hose.page.html */ "3c2T");
/* harmony import */ var _assembly_hose_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assembly-hose.page.scss */ "NxbW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");









let AssemblyHosePage = class AssemblyHosePage {
    constructor(http, navCtrl, storage, loadingController, alertController, route) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.route = route;
        this.appUrl_part = "https://theitvibe.com/project/ihose/api/getAssemblyName";
        //standard:any='';
        this.standard = '';
        this.size = '';
        this.name = '';
        this.pressure = '';
        this.part_type = '';
        this.description = '';
        this.assembly_name = '';
        this.productName = '';
        //pressure:any='';
        this.mk_name = '';
        this.part_no = '';
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params) {
                //let queryParams = params;
                this.id = params['id'];
                // console.log(this.id);
                this.storePage('assembly-hose/4');
                this.listing_assembly();
            }
        });
    }
    storePage(page) {
        this.storage.set("goTo", page);
    }
    listing_assembly() {
        var data = {
            "id": this.id,
        };
        this.http.post(this.appUrl_part, data)
            .subscribe(res => {
            this.res = res.json();
            //console.log(this.res);
            if (this.res) {
                this.assemblyList = this.res;
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
        this.storage.set("goTo", 'assembly-hose/4');
        this.navCtrl.navigateForward('product?assembly_name=' + this.assembly_name + '&part_type=' + this.part_type + '&standard=' + this.standard + '&size=' + this.size + '&name=' + this.productName + '&pressure=' + this.pressure + '&description=' + this.description + '&maker=' + this.mk_name + '&part_no=' + this.part_no);
    }
};
AssemblyHosePage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
AssemblyHosePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-assembly-hose',
        template: _raw_loader_assembly_hose_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assembly_hose_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AssemblyHosePage);



/***/ }),

/***/ "lHP4":
/*!*******************************************************!*\
  !*** ./src/app/assembly-hose/assembly-hose.module.ts ***!
  \*******************************************************/
/*! exports provided: AssemblyHosePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssemblyHosePageModule", function() { return AssemblyHosePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _assembly_hose_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assembly-hose-routing.module */ "0kqV");
/* harmony import */ var _assembly_hose_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assembly-hose.page */ "YsJg");







let AssemblyHosePageModule = class AssemblyHosePageModule {
};
AssemblyHosePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _assembly_hose_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssemblyHosePageRoutingModule"]
        ],
        declarations: [_assembly_hose_page__WEBPACK_IMPORTED_MODULE_6__["AssemblyHosePage"]]
    })
], AssemblyHosePageModule);



/***/ })

}]);
//# sourceMappingURL=assembly-hose-assembly-hose-module.js.map