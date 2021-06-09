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
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content [fullscreen]=\"true\">\n \n\n    <div class=\"home_main_area\">\n      <div class=\"container\">\n        <button class=\"nav_bar\" routerLink=\"/sidebar\" (click)=\"storePage('home')\"><i class=\"fas fa-bars\"></i></button>\n        <div class=\"home_body_area\">\n          <div class=\"logo\"><img src=\"assets/images/logo.png\" alt=\"logo\" title=\"\"></div>\n          <div class=\"home_body \">\n            <h1>welcome to<span>Soni</span></h1>\n            <ul>\n              <li *ngFor=\"let datalist of data_list\">\n                <button  (click)=\"goTo(datalist.service_id)\">\n                  <div class=\"listing\">\n                    <div class=\"icon\" *ngIf=\"datalist.service_id==4\"><img src=\"assets/images/icon1.png\" alt=\"icon\" title=\"\"></div>\n                     <div class=\"icon\" *ngIf=\"datalist.service_id==7\"><img src=\"assets/images/icon2.png\" alt=\"icon\" title=\"\"></div>\n                      <div class=\"icon\"*ngIf=\"datalist.service_id==8\"><img src=\"assets/images/icon3.png\" alt=\"icon\" title=\"\"></div>\n                    <h3>{{datalist.service_name}} <!-- <i class=\"fas fa-angle-double-right\"></i> --></h3>\n                  </div>\n                </button>\n              </li>\n\n             <!--  <li>\n                <button>\n                  <div class=\"listing\">\n                    <div class=\"icon\"><img src=\"assets/images/icon2.png\" alt=\"icon\" title=\"\"></div>\n                    <h3>automotive Hose <i class=\"fas fa-angle-double-right\"></i></h3>\n                  </div>\n                </button>\n              </li>\n              <li>\n                <button>\n                  <div class=\"listing\">\n                    <div class=\"icon\"><img src=\"assets/images/icon3.png\" alt=\"icon\" title=\"\"></div>\n                    <h3>heavy earthmoving equipment hose <i class=\"fas fa-angle-double-right\"></i></h3>\n                  </div>\n                </button>\n              </li> -->\n\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n  \n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Oswald\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.container {\n  box-sizing: border-box;\n  padding: 0px 30px;\n  width: 100%;\n}\n/*------ home css start -----*/\n.home_main_area {\n  width: 100%;\n  height: 100vh;\n  background-image: url('bg1.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  box-sizing: border-box;\n  position: relative;\n}\n.home_main_area .home_body_area {\n  width: 100%;\n  height: 100vh;\n}\n.home_main_area .home_body_area .logo {\n  width: 180px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 12%;\n  margin: auto;\n  -ms-transition: translate(0, -12%);\n  -o-transition: translate(0, -12%);\n  -moz-transition: translate(0, -12%);\n  transform: translate(0, -12%);\n}\n.home_main_area .home_body_area .logo img {\n  width: 100%;\n  object-fit: cover;\n}\n.home_main_area .home_body_area .home_body {\n  width: 100%;\n  box-sizing: border-box;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  top: 65%;\n  -ms-transition: translate(0, -50%);\n  -o-transition: translate(0, -50%);\n  -moz-transition: translate(0, -50%);\n  transform: translate(0, -50%);\n}\n.home_main_area .home_body_area .home_body h1 {\n  width: 100%;\n  box-sizing: border-box;\n  font-size: 24px;\n  font-weight: 400;\n  color: #000000;\n  text-transform: uppercase;\n  line-height: 28px;\n}\n.home_main_area .home_body_area .home_body h1 span {\n  display: block;\n  color: #eb9929;\n  font-weight: 600;\n}\n.home_main_area .home_body_area .home_body ul {\n  width: 100%;\n  max-width: 342px;\n  margin: 0 auto;\n  padding: 0 0;\n  box-sizing: border-box;\n}\n.home_main_area .home_body_area .home_body ul li {\n  width: 100%;\n  box-sizing: border-box;\n  margin-bottom: 5px;\n  list-style: none;\n}\n.home_main_area .home_body_area .home_body ul li:last-child {\n  margin-bottom: 0px;\n}\n.home_main_area .home_body_area .home_body ul li button {\n  background: transparent;\n  border: none;\n  outline: none;\n  width: 100%;\n}\n.home_main_area .home_body_area .home_body ul li button:focus {\n  outline: none;\n  box-shadow: none;\n  border: none;\n  background: transparent;\n}\n.listing {\n  width: 100%;\n  height: 60px;\n  box-sizing: border-box;\n  padding: 0 0 0 65px;\n  margin: 0 0;\n  position: relative;\n  border-radius: 30px;\n  box-shadow: 0 4px 10px rgba(171, 171, 171, 0.4);\n  text-align: left;\n  overflow: hidden;\n  cursor: pointer;\n  background-position: center;\n  transition: background 0.5s;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n}\n.listing:hover {\n  background: transparent radial-gradient(circle, transparent 1%, #fff0dc 1%) center/15000%;\n}\n.listing:active {\n  background-color: transparent;\n  background-size: 100%;\n  transition: background 0s;\n}\n.listing .icon {\n  content: \"\";\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  width: 50px;\n  height: 50px;\n  overflow: hidden;\n  box-sizing: border-box;\n  border-radius: 50%;\n}\n.listing .icon img {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n}\n.listing h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  color: #000;\n  font-size: 17px;\n  text-transform: uppercase;\n  font-weight: 500;\n  line-height: 20px;\n}\n.listing h3 i {\n  margin-left: 5px;\n}\n.listing:after {\n  content: \"\";\n  position: absolute;\n  bottom: -8px;\n  right: -20px;\n  width: 60px;\n  height: 60px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: top;\n  background-image: url('icon4.png');\n}\n/*------ home css stop -----*/\nbutton.nav_bar {\n  content: \"\";\n  position: absolute;\n  left: 30px;\n  top: 30px;\n  font-size: 28px;\n  background: transparent;\n  border: none;\n  outline: none;\n  color: #fff;\n}\n/*------ home css stop -----*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHlGQUFBO0FBQ0EsK0hBQUE7QUFDQSxrTUFBQTtBQUNBLHdHQUFBO0FBQ1I7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7QUFDQTtFQUF1QixpQ0FBQTtBQUd2QjtBQUZBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFLSjtBQUhBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFNSjtBQUhBLDhCQUFBO0FBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBS0o7QUFIQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBTUo7QUFKQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNKLGlDQUFBO0VBQ0EsbUNBQUE7RUFFSSw2QkFBQTtBQU9KO0FBTEE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFRSjtBQU5BO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDRSxrQ0FBQTtFQUNOLGlDQUFBO0VBQ0EsbUNBQUE7RUFFSSw2QkFBQTtBQVNKO0FBUEE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQVVKO0FBUkE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBV0o7QUFUQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFZSjtBQVZBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWFKO0FBWEE7RUFDSSxrQkFBQTtBQWNKO0FBWkE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQWVKO0FBYkE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFnQko7QUFkQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQWlCSjtBQWZBO0VBQ0kseUZBQUE7QUFrQko7QUFoQkE7RUFDRSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFtQkY7QUFqQkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBb0JKO0FBbEJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQXFCSjtBQW5CQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFzQko7QUFwQkE7RUFDSSxnQkFBQTtBQXVCSjtBQXJCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQ0FBQTtBQXdCSjtBQXRCQSw2QkFBQTtBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUF5Qko7QUF2QkEsNkJBQUEiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTQuMC9jc3MvYWxsLm1pbi5jc3MnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQvMi4yLjAvY3NzL21hdGVyaWFsLWRlc2lnbi1pY29uaWMtZm9udC5taW4uY3NzJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZDp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xuaHRtbCwgYm9keSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHotaW5kZXg6MTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXG59XG4qLCA6OmFmdGVyLCA6OmJlZm9yZSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDZ7Zm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO31cbmltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbn1cbi5jb250YWluZXJ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwcHggMzBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLyotLS0tLS0gaG9tZSBjc3Mgc3RhcnQgLS0tLS0qL1xuXG4uaG9tZV9tYWluX2FyZWF7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzEuanBnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ob21lX21haW5fYXJlYSAuaG9tZV9ib2R5X2FyZWF7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5ob21lX21haW5fYXJlYSAuaG9tZV9ib2R5X2FyZWEgLmxvZ28ge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDEyJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgLW1zLXRyYW5zaXRpb246IHRyYW5zbGF0ZSgwLCAtMTIlKTtcbi1vLXRyYW5zaXRpb246IHRyYW5zbGF0ZSgwLCAtMTIlKTtcbi1tb3otdHJhbnNpdGlvbjogdHJhbnNsYXRlKDAsIC0xMiUpO1xuLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTIlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTIlKTtcbn1cbi5ob21lX21haW5fYXJlYSAuaG9tZV9ib2R5X2FyZWEgLmxvZ28gaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmhvbWVfbWFpbl9hcmVhIC5ob21lX2JvZHlfYXJlYSAuaG9tZV9ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdG9wOjY1JTtcbiAgICAgIC1tcy10cmFuc2l0aW9uOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4tby10cmFuc2l0aW9uOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4tbW96LXRyYW5zaXRpb246IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbi13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG4uaG9tZV9tYWluX2FyZWEgLmhvbWVfYm9keV9hcmVhIC5ob21lX2JvZHkgaDEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbn1cbi5ob21lX21haW5fYXJlYSAuaG9tZV9ib2R5X2FyZWEgLmhvbWVfYm9keSBoMSBzcGFue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjZWI5OTI5O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaG9tZV9tYWluX2FyZWEgLmhvbWVfYm9keV9hcmVhIC5ob21lX2JvZHkgdWx7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzNDJweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAwIDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5ob21lX21haW5fYXJlYSAuaG9tZV9ib2R5X2FyZWEgLmhvbWVfYm9keSB1bCBsaXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmhvbWVfbWFpbl9hcmVhIC5ob21lX2JvZHlfYXJlYSAuaG9tZV9ib2R5IHVsIGxpOmxhc3QtY2hpbGR7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLmhvbWVfbWFpbl9hcmVhIC5ob21lX2JvZHlfYXJlYSAuaG9tZV9ib2R5IHVsIGxpIGJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5ob21lX21haW5fYXJlYSAuaG9tZV9ib2R5X2FyZWEgLmhvbWVfYm9keSB1bCBsaSBidXR0b246Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5saXN0aW5nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwIDAgMCA2NXB4O1xuICAgIG1hcmdpbjogMCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4OyAgICBcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IHJnYigxNzEgMTcxIDE3MSAvIDQwJSk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG4ubGlzdGluZzpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB0cmFuc3BhcmVudCAxJSwgI2ZmZjBkYyAxJSkgY2VudGVyLzE1MDAwJTtcbn1cbi5saXN0aW5nOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMHM7XG59XG4ubGlzdGluZyAuaWNvbntcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgbGVmdDogNXB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmxpc3RpbmcgLmljb24gaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmxpc3RpbmcgaDMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMCAwO1xuICAgIG1hcmdpbjogMCAwO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4ubGlzdGluZyBoMyBpe1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4ubGlzdGluZzphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLThweDtcbiAgICByaWdodDogLTIwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbjQucG5nKTtcbn1cbi8qLS0tLS0tIGhvbWUgY3NzIHN0b3AgLS0tLS0qL1xuYnV0dG9uLm5hdl9iYXJ7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgdG9wOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi8qLS0tLS0tIGhvbWUgY3NzIHN0b3AgLS0tLS0qLyJdfQ== */");

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