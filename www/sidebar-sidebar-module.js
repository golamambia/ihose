(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sidebar-sidebar-module"],{

/***/ "+dj4":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n\n \n  \n  <div class=\"menubox\">\n        \t<div class=\"menu_head\">\n             <button class=\"btn-back\" (click)=\"back()\"> <i class=\"zmdi zmdi-arrow-left\"></i> </button>\n             <h1>settings</h1>\n       \t    </div>\n            <div class=\"menu_body\">\n            \t<ul>\n                    <li><button routerLink=\"/\" (click)=\"storePage('sidebar')\"><span><img src=\"assets/images/menuicon1.png\"  alt=\"\"></span> Home<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n                    <li *ngIf=\"userDetails\"><button routerLink=\"/order-list\"><span><img src=\"assets/images/menuicon1.png\"  alt=\"\"></span> My Order<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n                    <li *ngIf=\"userDetails\"><button routerLink=\"/address-list\"><span><img src=\"assets/images/menuicon2.png\"  alt=\"\"></span> Address<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n      <li *ngIf=\"userDetails\"><button routerLink=\"/profile\" (click)=\"storePage('sidebar')\"><span><img src=\"assets/images/menuicon2.png\"  alt=\"\"></span> profile<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n      \n      <li *ngIf=\"!userDetails\"><button routerLink=\"/login\" (click)=\"storePage('sidebar')\"><span><img src=\"assets/images/menuicon2.png\"  alt=\"\"></span> Login<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n      <li *ngIf=\"!userDetails\"><button routerLink=\"/register\" (click)=\"storePage('sidebar')\"><span><img src=\"assets/images/menuicon2.png\"  alt=\"\"></span> Registration<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n      <li *ngIf=\"userDetails\"><button routerLink=\"/change-password\" (click)=\"storePage('sidebar')\"><span><img src=\"assets/images/menuicon2.png\"  alt=\"\"></span> Change Password<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n\n      <li><button routerLink=\"/contact\" (click)=\"storePage('sidebar')\"><span><img src=\"assets/images/menuicon1.png\"  alt=\"\"></span> Contact us<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n      <li><button routerLink=\"/about\" (click)=\"storePage('sidebar')\"><span><img src=\"assets/images/menuicon1.png\"  alt=\"\"></span> About<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n      <li><button routerLink=\"/privacy-policy\" (click)=\"storePage('sidebar')\"><span><img src=\"assets/images/menuicon1.png\"  alt=\"\"></span> Privacy Policy<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n      <li><button routerLink=\"/term-condition\" (click)=\"storePage('sidebar')\"><span><img src=\"assets/images/menuicon1.png\"  alt=\"\"></span> Terms & Conditions<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n      <li *ngIf=\"userDetails\" (click)=\"logout()\" ><button><span><img src=\"assets/images/menuicon7.png\"  alt=\"\"></span>Logout<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n                     <!-- <li><button><span><img src=\"assets/images/menuicon2.png\"  alt=\"\"></span> profile<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n                \t<li><button><span><img src=\"assets/images/menuicon.png\"  alt=\"\"></span> Notification<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n                    <li><button><span><img src=\"assets/images/menuicon1.png\"  alt=\"\"></span> My Order<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n                   \n                    \n                    <li><button><span><img src=\"assets/images/menuicon4.png\"  alt=\"\"></span>Settings<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n                    <li><button><span><img src=\"assets/images/menuicon5.png\"  alt=\"\"></span>Payment<i class=\"zmdi zmdi-chevron-right\"></i></button></li>\n                    <li><button><span><img src=\"assets/images/menuicon6.png\"  alt=\"\"></span>Help<i class=\"zmdi zmdi-chevron-right\"></i></button></li> -->\n                   <!--  <li><button><span><img src=\"assets/images/menuicon7.png\"  alt=\"\"></span>Logout<i class=\"zmdi zmdi-chevron-right\"></i></button></li> -->\n                </ul>\n            </div>\n        </div>\n  \n    \n\n</ion-content>\n");

/***/ }),

/***/ "/YCN":
/*!***************************************************!*\
  !*** ./src/app/sidebar/sidebar-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SidebarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarPageRoutingModule", function() { return SidebarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sidebar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.page */ "qK2e");




const routes = [
    {
        path: '',
        component: _sidebar_page__WEBPACK_IMPORTED_MODULE_3__["SidebarPage"]
    }
];
let SidebarPageRoutingModule = class SidebarPageRoutingModule {
};
SidebarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SidebarPageRoutingModule);



/***/ }),

/***/ "hbLJ":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  background-color: #ffffff;\n  font-family: \"Poppins\", sans-serif;\n}\n.menubox {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  box-shadow: none;\n  box-sizing: border-box;\n  z-index: 9999;\n  background-color: #000;\n}\n.menu_head:after, .menu_head:before {\n  content: \"\";\n  display: table;\n}\n.menu_head:after {\n  clear: both;\n}\n.menu_head {\n  position: relative;\n  padding: 15px 30px;\n  box-sizing: border-box;\n}\n.menu_head button.btn-back {\n  font-size: 30px;\n  padding: 0;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  line-height: 30px;\n  color: #fff;\n}\n.menu_head h1 {\n  margin: 0;\n  padding: 0;\n  font-size: 24px;\n  text-transform: capitalize;\n  margin-top: 10px;\n  color: #fff;\n  letter-spacing: 1px;\n}\n.menu_body {\n  padding: 15px 15px 15px 30px;\n  overflow-y: auto;\n  height: 78%;\n}\n.menu_body ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.menu_body ul li {\n  display: block;\n  margin-bottom: 8px;\n}\n.menu_body ul li button {\n  width: 90%;\n  text-align: left;\n  border: none;\n  background-color: transparent;\n  padding: 4px 0;\n  text-transform: capitalize;\n  font-size: 18px;\n  color: #fff;\n  cursor: pointer;\n  outline: none;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n}\n.menu_body ul li button:hover {\n  color: #eb9929;\n}\n.menu_body ul li button i {\n  /* margin-right: 6px; */\n  opacity: 0.9;\n  font-size: 30px;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  -ms-transition: translate(0%, -50%);\n  -o-transition: translate(0%, -50%);\n  -moz-transition: translate(0%, -50%);\n  transform: translate(0%, -50%);\n}\n.menu_body ul li button span {\n  width: 45px;\n  height: 45px;\n  display: inline-block;\n  vertical-align: middle;\n  background-color: #ffffff;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 45px;\n  margin-right: 10px;\n  position: relative;\n}\n.menu_body ul li button img {\n  width: 100%;\n  max-width: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -ms-transition: translate(-50%, -50%);\n  -o-transition: translate(-50%, -50%);\n  -moz-transition: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  /* display: inline-block; */\n  /* vertical-align: 0; */\n}\n.recomendedvideo_area {\n  width: 100%;\n}\n.recomendedvideo_area ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: table;\n  width: 100%;\n}\n.recomendedvideo_area ul li {\n  display: table-cell;\n  vertical-align: top;\n}\n.recomendedvideo_area ul li button {\n  width: 106px;\n  margin-right: 4px;\n  height: auto;\n  background-color: transparent;\n  border: 1px solid #000;\n  border: none;\n  border-radius: 0;\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  display: block;\n  padding: 3px 5px;\n  cursor: pointer;\n  text-align: left;\n  color: rgba(255, 255, 255, 0.66);\n  font-size: 10px;\n}\n.recomendedvideo_area ul li button:hover {\n  opacity: 0.8;\n}\n.recomendedvideo_area ul li button img {\n  width: 100%;\n  overflow: hidden;\n  border-radius: 6px;\n  display: flex;\n  height: 130px;\n  object-fit: cover;\n  margin-bottom: 10px;\n}\n.recomendedvideo_area ul li button strong {\n  display: block;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: normal;\n  margin-bottom: 5px;\n  color: #fff;\n}\nbutton.popupicon {\n  position: fixed;\n  bottom: 30px;\n  right: 15px;\n  background-color: #ffc930;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 40px;\n  border: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpZGViYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGlIQUFBO0FBQ0EseUZBQUE7QUFFUjtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7QUFBSjtBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQUo7QUFFQTtFQUFxQyxXQUFBO0VBQVksY0FBQTtBQUdqRDtBQUZBO0VBQWtCLFdBQUE7QUFNbEI7QUFMQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQVFKO0FBTkE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBU0o7QUFQQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFVSjtBQUZBO0VBQ0ksNEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFLSjtBQUZBO0VBQWUsU0FBQTtFQUFVLFVBQUE7RUFBVyxnQkFBQTtBQVFwQztBQVBBO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0FBVUQ7QUFSQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNILGFBQUE7RUFDRyxrQ0FBQTtFQUNILGtCQUFBO0FBV0Q7QUFUQTtFQUErQixjQUFBO0FBYS9CO0FBVkE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNILG1DQUFBO0VBQ0Qsa0NBQUE7RUFDQSxvQ0FBQTtFQUVDLDhCQUFBO0FBYUQ7QUFYQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQWNKO0FBWkE7RUFFSSxXQUFBO0VBQ0EsZUFBQTtFQUNILGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtFQUNELG9DQUFBO0VBQ0Esc0NBQUE7RUFFQyxnQ0FBQTtFQUNHLDJCQUFBO0VBQ0EsdUJBQUE7QUFjSjtBQUxBO0VBQXVCLFdBQUE7QUFTdkI7QUFSQTtFQUEwQixTQUFBO0VBQVUsVUFBQTtFQUFXLGdCQUFBO0VBQWlCLGNBQUE7RUFBZSxXQUFBO0FBZ0IvRTtBQWZBO0VBQTRCLG1CQUFBO0VBQXFCLG1CQUFBO0FBb0JqRDtBQW5CQTtFQUNDLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQXNCRDtBQXBCQTtFQUEwQyxZQUFBO0FBd0IxQztBQXZCQTtFQUNDLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBS0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBMEJEO0FBeEJBO0VBQTJDLGNBQUE7RUFBZSxrQ0FBQTtFQUFvQyxlQUFBO0VBQWdCLG1CQUFBO0VBQW9CLGtCQUFBO0VBQW1CLFdBQUE7QUFpQ3JKO0FBOUJBO0VBQ0MsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBaUNEIiwiZmlsZSI6InNpZGViYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNC4wL2Nzcy9hbGwubWluLmNzcycpO1xyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubWVudWJveCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcbi5tZW51X2hlYWQ6YWZ0ZXIsIC5tZW51X2hlYWQ6YmVmb3JleyBjb250ZW50OlwiXCI7IGRpc3BsYXk6dGFibGU7fVxyXG4ubWVudV9oZWFkOmFmdGVyeyBjbGVhcjpib3RoO31cclxuLm1lbnVfaGVhZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5tZW51X2hlYWQgYnV0dG9uLmJ0bi1iYWNrIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5tZW51X2hlYWQgaDEge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4ubWVudV9ib2R5IHtcclxuICAgIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDMwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA3OCU7XHJcbn1cclxuXHJcbi5tZW51X2JvZHkgdWx7IG1hcmdpbjowOyBwYWRkaW5nOjA7IGxpc3Qtc3R5bGU6bm9uZTt9XHJcbi5tZW51X2JvZHkgdWwgbGkge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG1hcmdpbi1ib3R0b206OHB4O1xyXG59XHJcbi5tZW51X2JvZHkgdWwgbGkgYnV0dG9uIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblx0b3V0bGluZTpub25lO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG4ubWVudV9ib2R5IHVsIGxpIGJ1dHRvbjpob3ZlcnsgY29sb3I6I2ViOTkyOTt9XHJcblxyXG5cclxuLm1lbnVfYm9keSB1bCBsaSBidXR0b24gaSB7XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDZweDsgKi9cclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcblx0LW1zLXRyYW5zaXRpb246IHRyYW5zbGF0ZSgtMCUsIC01MCUpO1xyXG4tby10cmFuc2l0aW9uOiB0cmFuc2xhdGUoLTAlLCAtNTAlKTtcclxuLW1vei10cmFuc2l0aW9uOiB0cmFuc2xhdGUoLTAlLCAtNTAlKTtcclxuLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMCUsIC01MCUpO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC0wJSwgLTUwJSk7XHJcbn1cclxuLm1lbnVfYm9keSB1bCBsaSBidXR0b24gc3BhbiB7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm1lbnVfYm9keSB1bCBsaSBidXR0b24gaW1nIHtcclxuICAgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDIwcHg7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0dG9wOjUwJTtcclxuXHRsZWZ0OjUwJTtcclxuXHQtbXMtdHJhbnNpdGlvbjogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4tby10cmFuc2l0aW9uOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbi1tb3otdHJhbnNpdGlvbjogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4td2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xyXG4gICAgLyogdmVydGljYWwtYWxpZ246IDA7ICovXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5yZWNvbWVuZGVkdmlkZW9fYXJlYXsgd2lkdGg6MTAwJTt9XHJcbi5yZWNvbWVuZGVkdmlkZW9fYXJlYSB1bHsgbWFyZ2luOjA7IHBhZGRpbmc6MDsgbGlzdC1zdHlsZTpub25lOyBkaXNwbGF5OnRhYmxlOyB3aWR0aDoxMDAlO31cclxuLnJlY29tZW5kZWR2aWRlb19hcmVhIHVsIGxpe2Rpc3BsYXk6IHRhYmxlLWNlbGw7IHZlcnRpY2FsLWFsaWduOiB0b3A7fVxyXG4ucmVjb21lbmRlZHZpZGVvX2FyZWEgdWwgbGkgYnV0dG9uIHtcclxuXHR3aWR0aDogMTA2cHg7XHJcblx0bWFyZ2luLXJpZ2h0OiA0cHg7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDA7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cGFkZGluZzogM3B4IDVweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjYpO1xyXG5cdGZvbnQtc2l6ZToxMHB4O1xyXG59XHJcbi5yZWNvbWVuZGVkdmlkZW9fYXJlYSB1bCBsaSBidXR0b246aG92ZXJ7IG9wYWNpdHk6MC44O31cclxuLnJlY29tZW5kZWR2aWRlb19hcmVhIHVsIGxpIGJ1dHRvbiBpbWcge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGhlaWdodDogMTMwcHg7XHJcblx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0bWFyZ2luLWJvdHRvbToxMHB4O1xyXG59XHJcbi5yZWNvbWVuZGVkdmlkZW9fYXJlYSB1bCBsaSBidXR0b24gc3Ryb25neyBkaXNwbGF5OmJsb2NrOyBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmOyBmb250LXNpemU6MTJweDsgZm9udC13ZWlnaHQ6bm9ybWFsOyBtYXJnaW4tYm90dG9tOjVweDsgY29sb3I6I2ZmZjt9XHJcblxyXG5cclxuYnV0dG9uLnBvcHVwaWNvbiB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGJvdHRvbTogMzBweDtcclxuXHRyaWdodDogMTVweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjOTMwO1xyXG5cdHdpZHRoOiA0MHB4O1xyXG5cdGhlaWdodDogNDBweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "qK2e":
/*!*****************************************!*\
  !*** ./src/app/sidebar/sidebar.page.ts ***!
  \*****************************************/
/*! exports provided: SidebarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarPage", function() { return SidebarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sidebar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sidebar.page.html */ "+dj4");
/* harmony import */ var _sidebar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.page.scss */ "hbLJ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");





//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';




let SidebarPage = class SidebarPage {
    constructor(platform, 
    //private splashScreen: SplashScreen,
    //private statusBar: StatusBar,
    menu, navCtrl, storage, location) {
        this.platform = platform;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.location = location;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        // this.storage.remove("userCart");
        this.storage.get("userDetails").then(val => {
            if (val) {
                this.userDetails = val;
            }
        });
    }
    logout() {
        this.storage.remove("userDetails");
        this.userDetails = null;
        this.navCtrl.navigateForward('home');
        //this.menu.close();
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
    storePage(page) {
        this.storage.set("goTo", page);
    }
};
SidebarPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
];
SidebarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-sidebar',
        template: _raw_loader_sidebar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sidebar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SidebarPage);



/***/ }),

/***/ "wCP4":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/*! exports provided: SidebarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarPageModule", function() { return SidebarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sidebar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar-routing.module */ "/YCN");
/* harmony import */ var _sidebar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar.page */ "qK2e");







let SidebarPageModule = class SidebarPageModule {
};
SidebarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sidebar_routing_module__WEBPACK_IMPORTED_MODULE_5__["SidebarPageRoutingModule"]
        ],
        declarations: [_sidebar_page__WEBPACK_IMPORTED_MODULE_6__["SidebarPage"]]
    })
], SidebarPageModule);



/***/ })

}]);
//# sourceMappingURL=sidebar-sidebar-module.js.map