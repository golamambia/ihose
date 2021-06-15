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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n\n    <div class=\"automotive_area\">\n      <div class=\"container\">\n          <div class=\"automotive_body\">\n              <div class=\"header_area\">\n                  <button class=\"btn-back\" routerLink=\"/home\"><img src=\"assets/images/back.png\" alt=\"back\" title=\"\" /></button>\n                  <h1 *ngIf=\"tab_val == 'bare'\">Hose Assembly - Bare Hoses</h1>\n                  <h1 *ngIf=\"tab_val == 'endfit'\">Hose Assembly - End Fittings</h1>\n                  <h1 *ngIf=\"tab_val == 'addon'\">Hose Assembly - Add On</h1>\n                  <button class=\"btn-cart\"><img src=\"assets/images/cart.png\" alt=\"back\" title=\"\" /></button>\n              </div>\n              <div class=\"search_box\">\n                  <div class=\"icon\"><i class=\"zmdi zmdi-search\"></i></div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Search Products...\" />\n              </div>\n              <ul class=\"filter\">\n                <li (click)=\"tab_click('bare')\" [ngClass]=\"{'active': tab_val == 'bare'}\">Bare Hoses</li>\n                <li (click)=\"tab_click('endfit')\" [ngClass]=\"{'active': tab_val == 'endfit'}\">End Fittings</li>\n                <li (click)=\"tab_click('addon')\" [ngClass]=\"{'active': tab_val == 'addon'}\">Add On</li>\n              </ul>\n               <div class=\"product_select\" *ngIf=\"tab_val == 'endfit'\">\n                <label class=\"check_box\">\n                    <input type=\"radio\" name=\"\" [checked]=\"endfittab_val == 'endfitA'\" (change)=\"onChangeHandler('endfitA')\" />  \n                    <span>End-A</span>\n                </label>\n                <label class=\"check_box\">\n                    <input type=\"radio\" name=\"\" [checked]=\"endfittab_val == 'endfitB'\" (change)=\"onChangeHandler('endfitB')\" />  \n                    <span>End-B</span>\n                </label>\n                <label class=\"check_box\">\n                    <input type=\"radio\" name=\"\" [checked]=\"endfittab_val == 'endfitAngel'\" (change)=\"onChangeHandler('endfitAngel')\"/>  \n                    <span>Angle of Orientation</span>\n                </label>\n                <label class=\"check_box\">\n                    <input type=\"radio\" name=\"\" [checked]=\"endfittab_val == 'endfitAdapter'\" (change)=\"onChangeHandler('endfitAdapter')\"/>  \n                    <span>Adapter</span>\n                </label>\n              </div>\n\n              <div *ngIf=\"tab_val == 'bare'\">\n              <div class=\"form-group\">\n                  <label>Standard</label>\n                  <select class=\"form-control\">\n                      <option>Select Standard</option>\n                  </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <div class=\"form-group\">\n                  <label>Size</label>\n                  <select class=\"form-control\">\n                      <option>Select Size</option>\n                  </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <div class=\"form-group\">\n                  <label>Name</label>\n                  <select class=\"form-control\">\n                      <option>Select Name</option>\n                  </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <div class=\"form-group\">\n                  <label>Pressure</label>\n                  <select class=\"form-control\">\n                      <option>Select Pressure</option>\n                  </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <div class=\"form-group form-radio\">\n                <label class=\"radio-inline\">\n                    <input type=\"radio\" name=\"optradio\" checked>Hose Length\n                </label>\n                <label class=\"radio-inline\">\n                    <input type=\"radio\" name=\"optradio\">Overall Length\n                </label>\n              </div>\n              <div class=\"form-group\">\n                  <label>Hose Length</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Text input\" />\n              </div>\n              <button class=\"btn\" (click)=\"tab_click('endfit')\" >SELECT END FITTINGS</button>\n            </div>\n             <div *ngIf=\"tab_val == 'endfit'\">\n\n\n              <div *ngIf=\"endfittab_val == 'endfitA'\">\n              <div class=\"form-group\">\n                  <label>Part Type</label>\n                  <select class=\"form-control\">\n                      <option>Select Part Type</option>\n                  </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <div class=\"form-group\">\n                  <label>Size</label>\n                  <select class=\"form-control\">\n                      <option>Select Size</option>\n                  </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <button class=\"btn\" (click)=\"onChangeHandler('endfitB')\">select end-b</button>\n\n            </div>\n            <div *ngIf=\"endfittab_val == 'endfitB'\">\n               <div class=\"form-group\">\n                  <label>Part Type</label>\n                  <select class=\"form-control\">\n                      <option>Select Part Type</option>\n                  </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <div class=\"form-group\">\n                  <label>Size</label>\n                  <select class=\"form-control\">\n                      <option>Select Size</option>\n                  </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <button class=\"btn\" (click)=\"onChangeHandler('endfitAngel')\">select Angle of Orientation</button>\n            </div>\n            <div *ngIf=\"endfittab_val == 'endfitAngel'\">\n                  <div class=\"form-group\">\n                  <label>Degree</label>\n                  <select class=\"form-control\">\n                      <option>0</option>\n                  </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <button class=\"btn\" (click)=\"onChangeHandler('endfitAdapter')\">select adapter</button>\n            </div>\n            <div *ngIf=\"endfittab_val == 'endfitAdapter'\">\n               <div class=\"form-group form-radio\">\n                <label class=\"radio-inline\">\n                    <input type=\"radio\" name=\"optradio\" checked>yes\n                </label>\n                <label class=\"radio-inline\">\n                    <input type=\"radio\" name=\"optradio\">no\n                </label>\n              </div>\n              <div class=\"form-group\">\n                  <label>Size</label>\n                  <select class=\"form-control\">\n                      <option>Select Size</option>\n                  </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <div class=\"form-group\">\n                  <label>Angle</label>\n                  <select class=\"form-control\">\n                      <option>Select Angle</option>\n                  </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <button class=\"btn\" (click)=\"tab_click('addon')\">Select ADD ON</button>\n            </div>\n          \n\n             </div>\n\n              <div *ngIf=\"tab_val == 'addon'\">\n                 <div class=\"form-group\">\n                  <label>Type of Add on</label>\n                  <select class=\"form-control\">\n                      <option>Pyrojacket</option>\n                  </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <button class=\"btn\" routerLink=\"/product\">send query</button>\n              </div> \n\n\n\n\n\n\n          </div>\n      </div>\n    </div>\n  \n</ion-content>");

/***/ }),

/***/ "NxbW":
/*!*******************************************************!*\
  !*** ./src/app/assembly-hose/assembly-hose.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Montserrat\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.automotive_area {\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  box-sizing: border-box;\n  /*overflow: hidden;*/\n}\n.automotive_area:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 31%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url('sape1.png');\n  z-index: 0;\n}\n.container {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 30px;\n}\n.automotive_body {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n}\n.header_area {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: center;\n  padding: 30px 0px 50px;\n}\n.header_area h1 {\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  color: #ffffff;\n  font-size: 18px;\n  font-weight: 500;\n}\n.header_area .btn-back {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 3px 0;\n  outline: none;\n  float: left;\n}\n.header_area .btn-cart {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 3px 0;\n  outline: none;\n  float: right;\n}\n.search_box {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  border-radius: 5px;\n  position: relative;\n  z-index: 1;\n  margin: 0 0 60px;\n}\n.search_box .form-control {\n  width: 100%;\n  height: 50px;\n  background: #ffffff;\n  border: 1px solid #ffffff;\n  font-size: 14px;\n  font-weight: 500;\n  color: #868686;\n  padding: 10px 10px 10px 45px;\n  box-shadow: 0 0 30px #e03b1b;\n  outline: none;\n}\n.search_box .form-control::placeholder {\n  font-weight: 500;\n  color: #868686;\n}\n.search_box .icon {\n  position: absolute;\n  top: 7px;\n  left: 15px;\n  font-size: 32px;\n  color: #868686;\n}\n.automotive_body h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 10px;\n  margin: 0 0 40px;\n  font-size: 18px;\n  font-weight: 600;\n  color: #000000;\n  border-bottom: 1px dashed #949494;\n}\n.form-group {\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  margin: 0 0 25px;\n}\nselect.form-control {\n  width: 100%;\n  height: 52px;\n  border-radius: 10px;\n  border: 1px solid #8e8e8d;\n  font-size: 14px;\n  font-weight: 400;\n  color: #616161;\n  padding: 15px 15px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: none;\n}\n.form-control {\n  width: 100%;\n  height: 52px;\n  border-radius: 10px;\n  border: 1px solid #8e8e8d;\n  font-size: 14px;\n  font-weight: 400;\n  color: #616161;\n  padding: 15px 15px;\n}\n.form-group .arrow {\n  position: absolute;\n  top: 17px;\n  right: 17px;\n}\nselect.form-control:focus {\n  border-color: #e9492a;\n}\n.form-group label {\n  position: absolute;\n  top: -10px;\n  left: 12px;\n  background: #ffffff;\n  font-size: 15px;\n  font-weight: 600;\n  color: #000000;\n  padding: 0 2px;\n}\n.btn {\n  width: 100%;\n  height: 52px;\n  background: #e9492a;\n  border: 1px solid #e9492a;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 500;\n  outline: none;\n  border-radius: 10px;\n  letter-spacing: 1px;\n}\n.automotive_body ul {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 15px;\n  margin: 0 0 30px;\n  border-bottom: 1px dashed #949494;\n  display: flex !important;\n  justify-content: space-between !important;\n}\n.automotive_body ul.filter li {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 10px;\n  margin: 0 5px 0 0;\n  font-size: 15px;\n  font-weight: 500;\n  color: #000000;\n  list-style: none;\n  text-align: center;\n  position: relative;\n}\n.automotive_body ul.filter li:last-child {\n  margin: 0 0 0 0;\n}\n.automotive_body ul.filter li:after {\n  content: \"\";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #e85a42;\n  opacity: 0;\n}\n.automotive_body ul.filter li.active {\n  color: #e85a42;\n}\n.automotive_body ul.filter li.active:after {\n  opacity: 1;\n}\n.product_select {\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0 0 20px;\n  display: flex !important;\n  justify-content: space-between !important;\n}\n.check_box {\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.check_box input[type=radio] {\n  display: none;\n}\n.check_box span {\n  font-size: 12px;\n  width: 100%;\n  box-sizing: border-box;\n  display: block;\n  text-align: center;\n  border: 1px solid #000;\n  padding: 7px 10px;\n  border-radius: 30px;\n  transition: 0.5s;\n}\n.check_box input[type=radio]:checked ~ span {\n  color: #e85a42;\n  border-color: #e85a42;\n}\n.form-group.form-radio label.radio-inline {\n  position: relative;\n  left: auto;\n  top: auto;\n  font-size: 14px;\n  text-transform: capitalize;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFzc2VtYmx5LWhvc2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHlGQUFBO0FBQ0EsK0hBQUE7QUFDQSxxTUFBQTtBQUNSO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQUNKO0FBRUE7RUFDSSxzQkFBQTtBQUNKO0FBQ0E7RUFBd0IscUNBQUE7QUFHeEI7QUFGQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBS0o7QUFIQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBTUY7QUFKQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7QUFPRjtBQUxBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFRRjtBQU5BO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFTRjtBQVBBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBVUY7QUFSQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFXRjtBQVRBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFZRjtBQVZBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFhRjtBQVhBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBY0Y7QUFaQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQWVGO0FBYkE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFnQkY7QUFkQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWlCRjtBQWZBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtBQWtCRjtBQWhCQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFtQkY7QUFqQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQW9CRjtBQWxCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQXFCRjtBQW5CQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFzQkY7QUFwQkE7RUFDRSxxQkFBQTtBQXVCRjtBQXJCQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBd0JGO0FBdEJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUF5QkY7QUF0QkE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFFQSx3QkFBQTtFQUVBLHlDQUFBO0FBeUJKO0FBdkJBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUEwQko7QUF4QkE7RUFDSSxlQUFBO0FBMkJKO0FBekJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQTRCSjtBQTFCQTtFQUNJLGNBQUE7QUE2Qko7QUEzQkE7RUFDSSxVQUFBO0FBOEJKO0FBNUJBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFFQSx3QkFBQTtFQUVBLHlDQUFBO0FBK0JKO0FBN0JBO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0FBZ0NKO0FBOUJBO0VBQ0ksYUFBQTtBQWlDSjtBQS9CQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWtDSjtBQWhDQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQW1DSjtBQWhDQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQW1DSiIsImZpbGUiOiJhc3NlbWJseS1ob3NlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNC4wL2Nzcy9hbGwubWluLmNzcycpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWF0ZXJpYWwtZGVzaWduLWljb25pYy1mb250LzIuMi4wL2Nzcy9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQubWluLmNzcycpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcclxuaHRtbCwgYm9keSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6MTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblxyXG59XHJcbiosIDo6YWZ0ZXIsIDo6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNnsgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjt9XHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmF1dG9tb3RpdmVfYXJlYXtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8qb3ZlcmZsb3c6IGhpZGRlbjsqL1xyXG59XHJcbi5hdXRvbW90aXZlX2FyZWE6YmVmb3Jle1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMxJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3NhcGUxLnBuZyk7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG4uY29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMHB4IDMwcHg7XHJcbn1cclxuLmF1dG9tb3RpdmVfYm9keXtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLmhlYWRlcl9hcmVhe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMzBweCAwcHggNTBweDtcclxufVxyXG4uaGVhZGVyX2FyZWEgaDF7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMCAwO1xyXG4gIG1hcmdpbjogMCAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5oZWFkZXJfYXJlYSAuYnRuLWJhY2t7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAzcHggMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5oZWFkZXJfYXJlYSAuYnRuLWNhcnR7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAzcHggMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG4uc2VhcmNoX2JveCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBtYXJnaW46IDAgMCA2MHB4O1xyXG59XHJcbi5zZWFyY2hfYm94IC5mb3JtLWNvbnRyb2wge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICM4Njg2ODY7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNDVweDtcclxuICBib3gtc2hhZG93OiAwIDAgMzBweCByZ2IoMjI0IDU5IDI3KTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5zZWFyY2hfYm94IC5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVye1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICM4Njg2ODY7XHJcbn1cclxuLnNlYXJjaF9ib3ggLmljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDdweDtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBjb2xvcjogIzg2ODY4NjtcclxufVxyXG4uYXV0b21vdGl2ZV9ib2R5IGgzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDAgMCAxMHB4O1xyXG4gIG1hcmdpbjogMCAwIDQwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjOTQ5NDk0O1xyXG59XHJcbi5mb3JtLWdyb3Vwe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMCAwIDI1cHg7XHJcbn1cclxuc2VsZWN0LmZvcm0tY29udHJvbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzhlOGU4ZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIzYxNjE2MTtcclxuICBwYWRkaW5nOiAxNXB4IDE1cHg7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ZThlOGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICM2MTYxNjE7XHJcbiAgcGFkZGluZzogMTVweCAxNXB4O1xyXG59XHJcbi5mb3JtLWdyb3VwIC5hcnJvd3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxN3B4O1xyXG4gIHJpZ2h0OiAxN3B4O1xyXG59XHJcbnNlbGVjdC5mb3JtLWNvbnRyb2w6Zm9jdXN7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZTk0OTJhO1xyXG59XHJcbi5mb3JtLWdyb3VwIGxhYmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTBweDtcclxuICBsZWZ0OiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgcGFkZGluZzogMCAycHg7XHJcbn1cclxuLmJ0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOTQ5MmE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5NDkyYTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4uYXV0b21vdGl2ZV9ib2R5IHVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMzBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzk0OTQ5NDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94IWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeSFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4haW1wb3J0YW50O1xyXG59XHJcbi5hdXRvbW90aXZlX2JvZHkgdWwuZmlsdGVyIGxpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMCAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIDVweCAwIDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5hdXRvbW90aXZlX2JvZHkgdWwuZmlsdGVyIGxpOmxhc3QtY2hpbGR7XHJcbiAgICBtYXJnaW46IDAgMCAwIDA7XHJcbn1cclxuLmF1dG9tb3RpdmVfYm9keSB1bC5maWx0ZXIgbGk6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0xcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQ6ICNlODVhNDI7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcbi5hdXRvbW90aXZlX2JvZHkgdWwuZmlsdGVyIGxpLmFjdGl2ZXtcclxuICAgIGNvbG9yOiAjZTg1YTQyO1xyXG59XHJcbi5hdXRvbW90aXZlX2JvZHkgdWwuZmlsdGVyIGxpLmFjdGl2ZTphZnRlcntcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuLnByb2R1Y3Rfc2VsZWN0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94IWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeSFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4haW1wb3J0YW50O1xyXG59XHJcbi5jaGVja19ib3gge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uY2hlY2tfYm94IGlucHV0W3R5cGU9XCJyYWRpb1wiXXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmNoZWNrX2JveCBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgIHBhZGRpbmc6IDdweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuLmNoZWNrX2JveCBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB+IHNwYW57XHJcbiAgICBjb2xvcjogI2U4NWE0MjtcclxuICAgIGJvcmRlci1jb2xvcjogI2U4NWE0MjtcclxufVxyXG4uZm9ybS1ncm91cC5mb3JtLXJhZGlve31cclxuLmZvcm0tZ3JvdXAuZm9ybS1yYWRpbyBsYWJlbC5yYWRpby1pbmxpbmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHRvcDogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufSJdfQ== */");

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
        this.tab_val = 'bare';
        this.endfittab_val = 'endfitA';
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
    tab_click(val) {
        this.tab_val = val;
    }
    onChangeHandler(val) {
        this.endfittab_val = val;
        //console.log($event);
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