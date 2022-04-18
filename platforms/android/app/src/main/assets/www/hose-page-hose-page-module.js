(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hose-page-hose-page-module"],{

/***/ "CoS7":
/*!*******************************************************!*\
  !*** ./src/app/hose-page/hose-page-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: HosePagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HosePagePageRoutingModule", function() { return HosePagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _hose_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hose-page.page */ "shN+");




const routes = [
    {
        path: '',
        component: _hose_page_page__WEBPACK_IMPORTED_MODULE_3__["HosePagePage"]
    }
];
let HosePagePageRoutingModule = class HosePagePageRoutingModule {
};
HosePagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HosePagePageRoutingModule);



/***/ }),

/***/ "YdCv":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hose-page/hose-page.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content [fullscreen]=\"true\">\n \n\n    <div class=\"home_main_area\">\n      <div class=\"container\">\n        <button class=\"nav_bar\" routerLink=\"/home\" (click)=\"storePage('home')\"><i class=\"fas fa-arrow-left\"></i></button>\n        <div class=\"home_body_area\">\n          <div class=\"logo\"><img src=\"assets/images/logo.png\" alt=\"logo\" title=\"\"></div>\n          <div class=\"home_body\">\n            <h1>Select one</h1>\n            <ul>\n              <li *ngFor=\"let datalist of data_list\">\n                <button (click)=\"goTo(datalist.subhose_id)\">\n                  <div class=\"listing\">\n                    <div class=\"icon\" *ngIf=\"datalist.subhose_id==1\"><img src=\"assets/images/hoseicon1.png\" alt=\"icon\" title=\"\"></div>\n                     <div class=\"icon\" *ngIf=\"datalist.subhose_id==3\"><img src=\"assets/images/hoseicon2.png\" alt=\"icon\" title=\"\"></div>\n                      <div class=\"icon\" *ngIf=\"datalist.subhose_id==4\"><img src=\"assets/images/hoseicon3.png\" alt=\"icon\" title=\"\"></div>\n                    <h3>{{datalist.subhose_name}}<!-- <i class=\"fas fa-angle-double-right\"></i> --></h3>\n                  </div>\n                </button>\n              </li>\n             <!--  <li>\n                <button routerLink=\"/endfitting-hose\">\n                  <div class=\"listing\">\n                    <div class=\"icon\"><img src=\"assets/images/icon2.png\" alt=\"icon\" title=\"\"></div>\n                    <h3>End Fitting Hose <i class=\"fas fa-angle-double-right\"></i></h3>\n                  </div>\n                </button>\n              </li>\n              <li>\n                <button routerLink=\"/assembly-hose\">\n                  <div class=\"listing\">\n                    <div class=\"icon\"><img src=\"assets/images/icon3.png\" alt=\"icon\" title=\"\"></div>\n                    <h3>Hose assembly<i class=\"fas fa-angle-double-right\"></i></h3>\n                  </div>\n                </button>\n              </li> -->\n\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n  \n</ion-content>\n");

/***/ }),

/***/ "k0YN":
/*!***********************************************!*\
  !*** ./src/app/hose-page/hose-page.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Oswald\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.container {\n  box-sizing: border-box;\n  padding: 0px 30px;\n  width: 100%;\n}\n/*------ home css start -----*/\n.home_main_area {\n  width: 100%;\n  height: 100vh;\n  background-image: url('bg1.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  box-sizing: border-box;\n  position: relative;\n}\n.home_main_area .home_body_area {\n  width: 100%;\n  height: 100vh;\n}\n.home_main_area .home_body_area .logo {\n  width: 180px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 12%;\n  margin: auto;\n  -ms-transition: translate(0, -12%);\n  -o-transition: translate(0, -12%);\n  -moz-transition: translate(0, -12%);\n  transform: translate(0, -12%);\n}\n.home_main_area .home_body_area .logo img {\n  width: 100%;\n  object-fit: cover;\n}\n.home_main_area .home_body_area .home_body {\n  width: 100%;\n  box-sizing: border-box;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  top: 65%;\n  -ms-transition: translate(0, -50%);\n  -o-transition: translate(0, -50%);\n  -moz-transition: translate(0, -50%);\n  transform: translate(0, -50%);\n}\n.home_main_area .home_body_area .home_body h1 {\n  width: 100%;\n  box-sizing: border-box;\n  font-size: 24px;\n  font-weight: 400;\n  color: #000000;\n  text-transform: uppercase;\n  line-height: 28px;\n}\n.home_main_area .home_body_area .home_body h1 span {\n  display: block;\n  color: #eb9929;\n  font-weight: 600;\n}\n.home_main_area .home_body_area .home_body ul {\n  width: 100%;\n  max-width: 342px;\n  margin: 0 auto;\n  padding: 0 0;\n  box-sizing: border-box;\n}\n.home_main_area .home_body_area .home_body ul li {\n  width: 100%;\n  box-sizing: border-box;\n  margin-bottom: 5px;\n  list-style: none;\n}\n.home_main_area .home_body_area .home_body ul li:last-child {\n  margin-bottom: 0px;\n}\n.home_main_area .home_body_area .home_body ul li button {\n  background: transparent;\n  border: none;\n  outline: none;\n  width: 100%;\n}\n.home_main_area .home_body_area .home_body ul li button:focus {\n  outline: none;\n  box-shadow: none;\n  border: none;\n  background: transparent;\n}\n.listing {\n  width: 100%;\n  height: 60px;\n  box-sizing: border-box;\n  padding: 0 0 0 65px;\n  margin: 0 0;\n  position: relative;\n  border-radius: 30px;\n  box-shadow: 0 4px 10px rgba(171, 171, 171, 0.4);\n  text-align: left;\n  overflow: hidden;\n  cursor: pointer;\n  background-position: center;\n  transition: background 0.5s;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n}\n.listing:hover {\n  background: transparent radial-gradient(circle, transparent 1%, #fff0dc 1%) center/15000%;\n}\n.listing:active {\n  background-color: transparent;\n  background-size: 100%;\n  transition: background 0s;\n}\n.listing .icon {\n  content: \"\";\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  width: 50px;\n  height: 50px;\n  overflow: hidden;\n  box-sizing: border-box;\n  border-radius: 50%;\n}\n.listing .icon img {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n}\n.listing h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  color: #000;\n  font-size: 17px;\n  text-transform: uppercase;\n  font-weight: 500;\n  line-height: 20px;\n}\n.listing h3 i {\n  margin-left: 5px;\n}\n.listing:after {\n  content: \"\";\n  position: absolute;\n  bottom: -8px;\n  right: -20px;\n  width: 60px;\n  height: 60px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: top;\n  background-image: url('icon4.png');\n}\n/*------ home css stop -----*/\n.nav_bar {\n  float: left;\n  background: transparent;\n  color: #fff;\n  padding: 0 0;\n  margin: 0 0;\n  border: none;\n  margin-right: 12px;\n  font-size: 24px;\n  margin-top: 38px;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvc2UtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEseUZBQUE7QUFDQSwrSEFBQTtBQUNBLGtNQUFBO0FBQ0Esd0dBQUE7QUFDUjtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUVBO0VBQ0ksc0JBQUE7QUFDSjtBQUNBO0VBQXVCLGlDQUFBO0FBR3ZCO0FBRkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUtKO0FBSEE7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQU1KO0FBSEEsOEJBQUE7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFLSjtBQUhBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFNSjtBQUpBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0osaUNBQUE7RUFDQSxtQ0FBQTtFQUVJLDZCQUFBO0FBT0o7QUFMQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQVFKO0FBTkE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNFLGtDQUFBO0VBQ04saUNBQUE7RUFDQSxtQ0FBQTtFQUVJLDZCQUFBO0FBU0o7QUFQQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBVUo7QUFSQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFXSjtBQVRBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQVlKO0FBVkE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBYUo7QUFYQTtFQUNJLGtCQUFBO0FBY0o7QUFaQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBZUo7QUFiQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQWdCSjtBQWRBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBaUJKO0FBZkE7RUFDSSx5RkFBQTtBQWtCSjtBQWhCQTtFQUNFLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQW1CRjtBQWpCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFvQko7QUFsQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBcUJKO0FBbkJBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXNCSjtBQXBCQTtFQUNJLGdCQUFBO0FBdUJKO0FBckJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLGtDQUFBO0FBd0JKO0FBdEJBLDZCQUFBO0FBQ0E7RUFDUSxXQUFBO0VBQ0osdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBeUJKIiwiZmlsZSI6Imhvc2UtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTQuMC9jc3MvYWxsLm1pbi5jc3MnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGVyaWFsLWRlc2lnbi1pY29uaWMtZm9udC8yLjIuMC9jc3MvbWF0ZXJpYWwtZGVzaWduLWljb25pYy1mb250Lm1pbi5jc3MnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZDp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5odG1sLCBib2R5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgei1pbmRleDoxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbn1cclxuKiwgOjphZnRlciwgOjpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2e2ZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjt9XHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKi0tLS0tLSBob21lIGNzcyBzdGFydCAtLS0tLSovXHJcblxyXG4uaG9tZV9tYWluX2FyZWF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzEuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaG9tZV9tYWluX2FyZWEgLmhvbWVfYm9keV9hcmVhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5ob21lX21haW5fYXJlYSAuaG9tZV9ib2R5X2FyZWEgLmxvZ28ge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAxMiU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogdHJhbnNsYXRlKDAsIC0xMiUpO1xyXG4tby10cmFuc2l0aW9uOiB0cmFuc2xhdGUoMCwgLTEyJSk7XHJcbi1tb3otdHJhbnNpdGlvbjogdHJhbnNsYXRlKDAsIC0xMiUpO1xyXG4td2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMiUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEyJSk7XHJcbn1cclxuLmhvbWVfbWFpbl9hcmVhIC5ob21lX2JvZHlfYXJlYSAubG9nbyBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5ob21lX21haW5fYXJlYSAuaG9tZV9ib2R5X2FyZWEgLmhvbWVfYm9keSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6NjUlO1xyXG4gICAgICAtbXMtdHJhbnNpdGlvbjogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG4tby10cmFuc2l0aW9uOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbi1tb3otdHJhbnNpdGlvbjogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG4td2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbn1cclxuLmhvbWVfbWFpbl9hcmVhIC5ob21lX2JvZHlfYXJlYSAuaG9tZV9ib2R5IGgxIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxufVxyXG4uaG9tZV9tYWluX2FyZWEgLmhvbWVfYm9keV9hcmVhIC5ob21lX2JvZHkgaDEgc3BhbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNlYjk5Mjk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5ob21lX21haW5fYXJlYSAuaG9tZV9ib2R5X2FyZWEgLmhvbWVfYm9keSB1bHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAzNDJweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uaG9tZV9tYWluX2FyZWEgLmhvbWVfYm9keV9hcmVhIC5ob21lX2JvZHkgdWwgbGl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5ob21lX21haW5fYXJlYSAuaG9tZV9ib2R5X2FyZWEgLmhvbWVfYm9keSB1bCBsaTpsYXN0LWNoaWxke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5ob21lX21haW5fYXJlYSAuaG9tZV9ib2R5X2FyZWEgLmhvbWVfYm9keSB1bCBsaSBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uaG9tZV9tYWluX2FyZWEgLmhvbWVfYm9keV9hcmVhIC5ob21lX2JvZHkgdWwgbGkgYnV0dG9uOmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4ubGlzdGluZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCA2NXB4O1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4OyAgICBcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiKDE3MSAxNzEgMTcxIC8gNDAlKTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbn1cclxuLmxpc3Rpbmc6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB0cmFuc3BhcmVudCAxJSwgI2ZmZjBkYyAxJSkgY2VudGVyLzE1MDAwJTtcclxufVxyXG4ubGlzdGluZzphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDBzO1xyXG59XHJcbi5saXN0aW5nIC5pY29ue1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIGxlZnQ6IDVweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmxpc3RpbmcgLmljb24gaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5saXN0aW5nIGgzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi5saXN0aW5nIGgzIGl7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5saXN0aW5nOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtOHB4O1xyXG4gICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ljb240LnBuZyk7XHJcbn1cclxuLyotLS0tLS0gaG9tZSBjc3Mgc3RvcCAtLS0tLSovXHJcbi5uYXZfYmFye1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzhweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn0iXX0= */");

/***/ }),

/***/ "shN+":
/*!*********************************************!*\
  !*** ./src/app/hose-page/hose-page.page.ts ***!
  \*********************************************/
/*! exports provided: HosePagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HosePagePage", function() { return HosePagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_hose_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./hose-page.page.html */ "YdCv");
/* harmony import */ var _hose_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hose-page.page.scss */ "k0YN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "AytR");










let HosePagePage = class HosePagePage {
    constructor(http, navCtrl, storage, loadingController, alertController, route) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.route = route;
        this.appUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["host"] + "getSubHose";
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params) {
                //let queryParams = params;
                this.id = params['id'];
                // console.log(this.id);
                this.listing();
            }
        });
    }
    storePage(page) {
        this.storage.set("goTo", page);
    }
    listing() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: ''
            });
            var data = {
                "id": this.id,
            };
            yield loading.present();
            this.http.post(this.appUrl, data)
                .subscribe(res => {
                this.res = res.json();
                //console.log(this.res);
                if (this.res) {
                    loading.dismiss();
                    this.data_list = this.res;
                    //this.loading.hide();
                }
                else {
                    alert("Server error");
                    //this.loading.hide();
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
        if (id == 1) {
            this.navCtrl.navigateForward('/box-hose/' + id);
        }
        else if (id == 3) {
            this.navCtrl.navigateForward('/endfitting-hose/' + id);
        }
        else if (id == 4) {
            this.navCtrl.navigateForward('/assembly-hose/' + id);
        }
    }
};
HosePagePage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
HosePagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-hose-page',
        template: _raw_loader_hose_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_hose_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HosePagePage);



/***/ }),

/***/ "yiQq":
/*!***********************************************!*\
  !*** ./src/app/hose-page/hose-page.module.ts ***!
  \***********************************************/
/*! exports provided: HosePagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HosePagePageModule", function() { return HosePagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _hose_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hose-page-routing.module */ "CoS7");
/* harmony import */ var _hose_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hose-page.page */ "shN+");







let HosePagePageModule = class HosePagePageModule {
};
HosePagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _hose_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["HosePagePageRoutingModule"]
        ],
        declarations: [_hose_page_page__WEBPACK_IMPORTED_MODULE_6__["HosePagePage"]]
    })
], HosePagePageModule);



/***/ })

}]);
//# sourceMappingURL=hose-page-hose-page-module.js.map