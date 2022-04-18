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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n\n    <div class=\"automotive_area\">\n      <div class=\"container\">\n          <div class=\"automotive_body\">\n              <div class=\"header_area\">\n                  <button class=\"btn-back\" routerLink=\"/home\"><img src=\"assets/images/back.png\" alt=\"back\" title=\"\" /></button>\n                  <h1 *ngIf=\"tab_val == 'bare'\">Hose Assembly - Bare Hoses</h1>\n                  <h1 *ngIf=\"tab_val == 'endfit'\">Hose Assembly - End Fittings</h1>\n                  <h1 *ngIf=\"tab_val == 'addon'\">Hose Assembly - Add On</h1>\n                     <button class=\"btn-cart\" routerLink=\"/cart-page\"><img src=\"assets/images/cart.png\" alt=\"back\" title=\"\" /><span class=\"total_cart\" [innerHTML]=\"cartcount\" ></span></button>\n              </div>\n              <div class=\"search_box\">\n                 <div class=\"icon\" (click)=\"gotoProductserch()\"><i class=\"zmdi zmdi-search\" ></i></div>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"text_search\" placeholder=\"Search Products...\" />\n              </div>\n               <div class=\"filter\">\n                <button (click)=\"tab_click('bare')\" [ngClass]=\"{'active': tab_val == 'bare'}\">Bare Hoses</button>\n                <button (click)=\"tab_click('endfit')\" [ngClass]=\"{'active': tab_val == 'endfit'}\">End Fittings</button>\n                <button (click)=\"tab_click('addon')\" [ngClass]=\"{'active': tab_val == 'addon'}\">Add On</button>\n              </div>\n             \n               <div class=\"product_select\" *ngIf=\"tab_val == 'endfit'\">\n                <label class=\"check_box\">\n                    <input type=\"radio\" name=\"\" [checked]=\"endfittab_val == 'endfitA'\" (change)=\"onChangeHandler('endfitA')\" />  \n                    <span>End-A</span>\n                </label>\n                <label class=\"check_box\">\n                    <input type=\"radio\" name=\"\" [checked]=\"endfittab_val == 'endfitB'\" (change)=\"onChangeHandler('endfitB')\" />  \n                    <span>End-B</span>\n                </label>\n                <label class=\"check_box\">\n                    <input type=\"radio\" name=\"\" [checked]=\"endfittab_val == 'endfitAngel'\" (change)=\"onChangeHandler('endfitAngel')\"/>  \n                    <span>Angle of Orientation</span>\n                </label>\n                <label class=\"check_box\">\n                    <input type=\"radio\" name=\"\" [checked]=\"endfittab_val == 'endfitAdapter'\" (change)=\"onChangeHandler('endfitAdapter')\"/>  \n                    <span>Adapter</span>\n                </label>\n              </div>\n\n              <div *ngIf=\"tab_val == 'bare'\">\n              <div class=\"form-group\">\n                  <label>Standard</label>\n                  <select class=\"form-control\" [(ngModel)]=\"standard\" [ngModelOptions]=\"{standalone: true}\">\n                      <option value=\"\">Select Standard</option>\n                       <option *ngFor=\"let data_liststandard of data_list_standard\" value=\"{{data_liststandard.standard_id}}\">{{data_liststandard.standard_name}}</option>\n                  </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <div class=\"form-group\">\n                  <label>Size</label>\n  <ionic-selectable\n    class=\"form-control\"\n    item-content\n    [(ngModel)]=\"port\"\n    [items]=\"data_list_size\"\n    itemValueField=\"size_id\"\n    itemTextField=\"size_name\"\n    [canSearch]=\"true\"\n    placeholder=\"Select size\"\n    (onChange)=\"portChange($event)\" >\n      </ionic-selectable>\n</div>\n             \n              <div class=\"form-group\">\n                  <label>Name</label>\n                  <select class=\"form-control\" (change)=\"getPressure($event.target.value)\"  [(ngModel)]=\"productName\" [ngModelOptions]=\"{standalone: true}\">\n                      <option value=\"\">Select Name</option>\n                       <option *ngFor=\"let data_listproductnm of data_list_productnm\" value=\"{{data_listproductnm.item_id}}\">{{data_listproductnm.item_name}}</option>\n                  </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <div class=\"form-group\">\n                  <label>Pressure</label>\n                  <select class=\"form-control\" [(ngModel)]=\"pressure\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" selected=\"selected\" >Select</option>\n                   <option *ngFor=\"let pressure_list of pressureList\" value=\"{{pressure_list.hp_id}}\">{{pressure_list.hp_pressure}}</option>\n                </select> \n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <div class=\"form-group form-radio\" >\n                <label class=\"radio-inline\">\n                    <input type=\"radio\" [(ngModel)]=\"hose_lengthtype\" [ngModelOptions]=\"{standalone: true}\"   value=\"Hose Length\" [checked]=\"hose_lengthtype==='Hose Length'\">Hose Length\n                </label>\n                <label class=\"radio-inline\">\n                    <input type=\"radio\" [(ngModel)]=\"hose_lengthtype\" [ngModelOptions]=\"{standalone: true}\"  value=\"Overall Length\" [checked]=\"hose_lengthtype==='Overall Length'\">Overall Length\n                </label>\n              </div>\n             <!--  <div class=\"form-group\" *ngIf=\"hose_lengthtype == 'Hose Length'\"> -->\n              <div class=\"form-group\">\n                  <label>Hose Length</label>\n                  <input type=\"text\" [(ngModel)]=\"hose_length\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control form-control1\" placeholder=\"Text input\" />\n              </div>\n              <button class=\"btn\" (click)=\"tab_click('endfit')\" >SELECT END FITTINGS</button>\n            </div>\n             <div *ngIf=\"tab_val == 'endfit'\">\n\n\n              <div *ngIf=\"endfittab_val == 'endfitA'\">\n              <div class=\"form-group\">\n                  <label>Part Type</label>\n                  <select class=\"form-control\"  #p1 (change)=\"listing_size_ptype(p1.value,1)\" [(ngModel)]=\"part_type\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" >Select part type</option>\n                 <option *ngFor=\"let part_list of partList\" value=\"{{part_list.part_id}}\">{{part_list.part_name}}</option>\n                </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <div class=\"form-group\">\n                  <label>Size</label>\n  <ionic-selectable\n    class=\"form-control\"\n    item-content\n    [(ngModel)]=\"port2\"\n    [items]=\"data_list_size\"\n    itemValueField=\"size_id\"\n    itemTextField=\"size_name\"\n    [canSearch]=\"true\"\n    placeholder=\"Select size\"\n    (onChange)=\"portChange2($event)\" >\n      </ionic-selectable>\n</div>\n               \n               <div class=\"form-group\">\n                  <label>Part Type</label>\n                  <select class=\"form-control\"  #p2 (change)=\"listing_size_ptype(p2.value,2)\" [(ngModel)]=\"part_type2\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" >Select part type</option>\n                 <option *ngFor=\"let part_list of partList\" value=\"{{part_list.part_id}}\">{{part_list.part_name}}</option>\n                </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <div class=\"form-group\">\n                  <label>Size</label>\n  <ionic-selectable\n    class=\"form-control\"\n    item-content\n    [(ngModel)]=\"port3\"\n    [items]=\"data_list_size\"\n    itemValueField=\"size_id\"\n    itemTextField=\"size_name\"\n    [canSearch]=\"true\"\n    placeholder=\"Select size\"\n    (onChange)=\"portChange3($event)\" >\n      </ionic-selectable>\n</div>\n               <div class=\"form-group\">\n                  <label>Part Type</label>\n                  <select class=\"form-control\"  #p3 (change)=\"listing_size_ptype(p3.value,3)\" [(ngModel)]=\"part_type3\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" >Select part type</option>\n                 <option *ngFor=\"let part_list of partList\" value=\"{{part_list.part_id}}\">{{part_list.part_name}}</option>\n                </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <div class=\"form-group\">\n                  <label>Size</label>\n  <ionic-selectable\n    class=\"form-control\"\n    item-content\n    [(ngModel)]=\"port4\"\n    [items]=\"data_list_size\"\n    itemValueField=\"size_id\"\n    itemTextField=\"size_name\"\n    [canSearch]=\"true\"\n    placeholder=\"Select size\"\n    (onChange)=\"portChange4($event)\" >\n      </ionic-selectable>\n</div>\n              <button class=\"btn\" (click)=\"onChangeHandler('endfitB')\">select end-b</button>\n\n            </div>\n            <div *ngIf=\"endfittab_val == 'endfitB'\">\n               <div class=\"form-group\">\n                  <label>Part Type</label>\n                  <select class=\"form-control\"  #p4 (change)=\"listing_size_ptype(p4.value,4)\" [(ngModel)]=\"endbpart_type\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" >Select part type</option>\n                 <option *ngFor=\"let part_list of partList\" value=\"{{part_list.part_id}}\">{{part_list.part_name}}</option>\n                </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <div class=\"form-group\">\n                  <label>Size</label>\n  <ionic-selectable\n    class=\"form-control\"\n    item-content\n    [(ngModel)]=\"port5\"\n    [items]=\"data_list_size\"\n    itemValueField=\"size_id\"\n    itemTextField=\"size_name\"\n    [canSearch]=\"true\"\n    placeholder=\"Select size\"\n    (onChange)=\"portChange5($event)\" >\n      </ionic-selectable>\n</div>\n               <div class=\"form-group\">\n                  <label>Part Type</label>\n                  <select class=\"form-control\"  #p5 (change)=\"listing_size_ptype(p5.value,5)\" [(ngModel)]=\"endbpart_type2\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" >Select part type</option>\n                 <option *ngFor=\"let part_list of partList\" value=\"{{part_list.part_id}}\">{{part_list.part_name}}</option>\n                </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <div class=\"form-group\">\n                  <label>Size</label>\n  <ionic-selectable\n    class=\"form-control\"\n    item-content\n    [(ngModel)]=\"port6\"\n    [items]=\"data_list_size\"\n    itemValueField=\"size_id\"\n    itemTextField=\"size_name\"\n    [canSearch]=\"true\"\n    placeholder=\"Select size\"\n    (onChange)=\"portChange6($event)\" >\n      </ionic-selectable>\n</div>\n               <div class=\"form-group\">\n                  <label>Part Type</label>\n                  <select class=\"form-control\"  #p6 (change)=\"listing_size_ptype(p6.value,6)\" [(ngModel)]=\"endbpart_type3\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" >Select part type</option>\n                 <option *ngFor=\"let part_list of partList\" value=\"{{part_list.part_id}}\">{{part_list.part_name}}</option>\n                </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <div class=\"form-group\">\n                  <label>Size</label>\n  <ionic-selectable\n    class=\"form-control\"\n    item-content\n    [(ngModel)]=\"port7\"\n    [items]=\"data_list_size\"\n    itemValueField=\"size_id\"\n    itemTextField=\"size_name\"\n    [canSearch]=\"true\"\n    placeholder=\"Select size\"\n    (onChange)=\"portChange7($event)\" >\n      </ionic-selectable>\n</div>\n              <button class=\"btn\" (click)=\"onChangeHandler('endfitAngel')\">select Angle of Orientation</button>\n            </div>\n            <div *ngIf=\"endfittab_val == 'endfitAngel'\">\n                  <div class=\"form-group\">\n                  <label>Degree</label>\n                  <select class=\"form-control\" [(ngModel)]=\"angeldegree\" [ngModelOptions]=\"{standalone: true}\">\n                    <option value=\"\">Select Degree</option>\n                    <option value=\"0\">0</option>\n                      <option *ngFor=\"let item of [].constructor(180); let i = index\" value=\"{{i+1}}\">{{i+1}}</option>\n                      <option value=\"275\">275</option>\n                      <option value=\"360\">360</option>\n                  </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <button class=\"btn\" (click)=\"onChangeHandler('endfitAdapter')\">select adapter</button>\n            </div>\n            <div *ngIf=\"endfittab_val == 'endfitAdapter'\">\n               <div class=\"form-group form-radio\">\n                <label class=\"radio-inline\">\n                    <input type=\"radio\" [(ngModel)]=\"adapterradio\" [ngModelOptions]=\"{standalone: true}\" value=\"yes\"  [checked]=\"adapterradio==='yes'\">yes\n                </label>\n                <label class=\"radio-inline\">\n                    <input type=\"radio\" [(ngModel)]=\"adapterradio\" [ngModelOptions]=\"{standalone: true}\" value=\"no\"  [checked]=\"adapterradio==='no'\">no\n                </label>\n              </div>\n              <!-- <div class=\"form-group\" *ngIf=\"adapterradio=='yes'\">\n                  <label>Size</label>\n                  <select class=\"form-control\"  [(ngModel)]=\"adaptersize\" [ngModelOptions]=\"{standalone: true}\">\n                      <option value=\"\">Select Size</option>\n                       <option *ngFor=\"let data_listsize of data_list_size\" value=\"{{data_listsize.size_id}}\">{{data_listsize.size_name}}</option>\n                  </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <div class=\"form-group\" *ngIf=\"adapterradio=='yes'\">\n                  <label>Angle</label>\n                  <select class=\"form-control\" [(ngModel)]=\"adapterangel\" [ngModelOptions]=\"{standalone: true}\">\n                      <option value=\"\">Select Angle</option>\n                      <option *ngFor=\"let item of [].constructor(180); let i = index\" value=\"{{i+1}}\">{{i+1}}</option>\n                  </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div> -->\n              <div class=\"form-group\" *ngIf=\"adapterradio=='yes'\">\n                  <label>Part Type</label>\n                  <select class=\"form-control\"  #p7 (change)=\"listing_size_ptype(p7.value,7)\" [(ngModel)]=\"adapterpart_type\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" >Select part type</option>\n                 <option *ngFor=\"let part_list of partList\" value=\"{{part_list.part_id}}\">{{part_list.part_name}}</option>\n                </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <div class=\"form-group\">\n                  <label>Size</label>\n  <ionic-selectable\n    class=\"form-control\"\n    item-content\n    [(ngModel)]=\"port8\"\n    [items]=\"data_list_size\"\n    itemValueField=\"size_id\"\n    itemTextField=\"size_name\"\n    [canSearch]=\"true\"\n    placeholder=\"Select size\"\n    (onChange)=\"portChange8($event)\" >\n      </ionic-selectable>\n</div>\n               <div class=\"form-group\" *ngIf=\"adapterradio=='yes'\">\n                  <label>Part Type</label>\n                  <select class=\"form-control\"  #p8 (change)=\"listing_size_ptype(p8.value,8)\" [(ngModel)]=\"adapterpart_type2\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" >Select part type</option>\n                 <option *ngFor=\"let part_list of partList\" value=\"{{part_list.part_id}}\">{{part_list.part_name}}</option>\n                </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <div class=\"form-group\">\n                  <label>Size</label>\n  <ionic-selectable\n    class=\"form-control\"\n    item-content\n    [(ngModel)]=\"port9\"\n    [items]=\"data_list_size\"\n    itemValueField=\"size_id\"\n    itemTextField=\"size_name\"\n    [canSearch]=\"true\"\n    placeholder=\"Select size\"\n    (onChange)=\"portChange9($event)\" >\n      </ionic-selectable>\n</div>\n              <button class=\"btn\" (click)=\"tab_click('addon')\">Select ADD ON</button>\n            </div>\n          \n\n             </div>\n\n              <div *ngIf=\"tab_val == 'addon'\">\n                 <div class=\"form-group\">\n                  <label>Type of Add on</label>\n                  <!-- <select class=\"form-control\" [(ngModel)]=\"\" [ngModelOptions]=\"{standalone: true}\">\n                    <option value=\"\">Select type</option>\n                      <option value=\"demo\">Demo </option>\n                  </select> -->\n                  <input type=\"text\" [(ngModel)]=\"addon_type\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Type of Add on\" />\n                  <!-- <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div> -->\n              </div>\n              <button class=\"btn\"  (click)=\"send_query('addon_type')\">send query</button>\n              </div> \n\n\n\n\n\n\n          </div>\n      </div>\n    </div>\n  \n</ion-content>");

/***/ }),

/***/ "NxbW":
/*!*******************************************************!*\
  !*** ./src/app/assembly-hose/assembly-hose.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Montserrat\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n--ionic-selectable.ionic-selectable-value {\n  margin-top: -15px !important;\n  margin-left: -15px !important;\n}\n.automotive_area {\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  box-sizing: border-box;\n  overflow: auto;\n  padding-bottom: 30px;\n}\n.automotive_area:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 36%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url('sape1.png');\n  z-index: 0;\n}\n.container {\n  width: 90%;\n  box-sizing: border-box;\n  padding: 0;\n  margin: auto;\n}\n.automotive_body {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n}\n.header_area {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: center;\n  padding: 30px 0px 50px;\n}\n.header_area h1 {\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  color: #ffffff;\n  font-size: 18px;\n  font-weight: 500;\n}\n.header_area .btn-back {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 1px 0;\n  outline: none;\n  float: left;\n  max-width: 22px;\n}\n.header_area .btn-cart {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 0px 0;\n  outline: none;\n  float: right;\n  max-width: 28px;\n}\n.header_area .btn-cart {\n  position: relative;\n}\n.header_area .btn-cart .total_cart {\n  position: absolute;\n  top: -14px;\n  right: 0px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 600;\n}\n.search_box {\n  width: 97%;\n  box-sizing: border-box;\n  overflow: hidden;\n  border-radius: 6px;\n  position: relative;\n  z-index: 1;\n  margin: 0 0 40px;\n  box-shadow: 0px 0px 7px #0000001c;\n  margin-left: auto;\n  margin-right: auto;\n}\n.search_box .form-control {\n  width: 100%;\n  height: 48px;\n  background: #ffffff;\n  border: 1px solid #ffffff;\n  font-size: 14px;\n  font-weight: 500;\n  color: #868686;\n  padding: 10px 45px 10px 10px;\n  /* box-shadow: 0 0 0px rgb(0, 0, 0); */\n  outline: none;\n}\n.search_box .form-control::placeholder {\n  font-weight: 500;\n  color: #868686;\n}\n.search_box .icon {\n  position: absolute;\n  top: 9px;\n  right: 15px;\n  font-size: 26px;\n  color: #bebebe;\n}\n.automotive_body h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 10px;\n  margin: 0 0 40px;\n  font-size: 18px;\n  font-weight: 600;\n  color: #000000;\n  border-bottom: 1px dashed #949494;\n}\n.form-group {\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  margin: 0 0 25px;\n}\nselect.form-control {\n  width: 100%;\n  height: 52px;\n  border-radius: 10px;\n  border: 1px solid #8e8e8d;\n  font-size: 14px;\n  font-weight: 400;\n  color: #616161;\n  padding: 15px 15px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: none;\n  background-color: transparent;\n  background: transparent;\n}\nselect.form-control:focus {\n  border-color: #e9492a;\n  background-color: transparent;\n  background: transparent;\n}\n.form-control {\n  width: 100%;\n  height: 52px;\n  border-radius: 10px;\n  border: 1px solid #8e8e8d;\n  font-size: 14px;\n  font-weight: 400;\n  color: #616161;\n  padding: 15px 15px;\n}\n.form-group .arrow {\n  position: absolute;\n  top: 17px;\n  right: 17px;\n}\nselect.form-control:focus {\n  border-color: #e9492a;\n}\n.form-group label {\n  position: absolute;\n  top: -10px;\n  left: 12px;\n  background: #ffffff;\n  font-size: 15px;\n  font-weight: 600;\n  color: #000000;\n  padding: 0 2px;\n}\n.btn {\n  width: 100%;\n  height: 52px;\n  background: #e9492a;\n  border: 1px solid #e9492a;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 500;\n  outline: none;\n  border-radius: 10px;\n  letter-spacing: 1px;\n}\n.automotive_body .filter {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0 0 20px;\n  border-bottom: 1px dashed #949494;\n  display: flex !important;\n  justify-content: space-between !important;\n}\n.automotive_body .filter button {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 10px;\n  margin: 0 5px 0 0;\n  font-size: 15px;\n  font-weight: 500;\n  color: #000000;\n  list-style: none;\n  text-align: center;\n  position: relative;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  cursor: pointer;\n}\n.automotive_body .filter button:last-child {\n  margin: 0 0 0 0;\n}\n.automotive_body .filter button:after {\n  content: \"\";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #e85a42;\n  opacity: 0;\n}\n.automotive_body .filter button.active {\n  color: #e85a42;\n}\n.automotive_body .filter button.active:after {\n  opacity: 1;\n}\n.product_select {\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0 0 20px;\n  display: flex !important;\n  justify-content: space-between !important;\n}\n.check_box {\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.check_box input[type=radio] {\n  display: none;\n}\n.check_box span {\n  font-size: 12px;\n  width: 100%;\n  box-sizing: border-box;\n  display: block;\n  text-align: center;\n  border: 1px solid #000;\n  padding: 6px 8px;\n  border-radius: 30px;\n  transition: 0.5s;\n}\n.check_box input[type=radio]:checked ~ span {\n  color: #e85a42;\n  border-color: #e85a42;\n}\n.form-group.form-radio label.radio-inline {\n  position: relative;\n  left: auto;\n  top: auto;\n  font-size: 14px;\n  text-transform: capitalize;\n  font-weight: 500;\n}\n@media (max-width: 320px) {\n  .header_area h1 {\n    font-size: 15px;\n  }\n\n  .check_box span {\n    font-size: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFzc2VtYmx5LWhvc2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHlGQUFBO0FBQ0EsK0hBQUE7QUFDQSxxTUFBQTtBQUNSO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQUNKO0FBRUE7RUFDSSxzQkFBQTtBQUNKO0FBQ0E7RUFBd0IscUNBQUE7QUFHeEI7QUFGQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBS0o7QUFIQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUFNRjtBQUpBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBT0o7QUFMQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7QUFRRjtBQU5BO0VBQ0ksVUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFTSjtBQVBBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFVRjtBQVJBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBV0Y7QUFUQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFZRjtBQVZBO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBYUo7QUFYQTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWNKO0FBWkE7RUFFQSxrQkFBQTtBQWNBO0FBWkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFlSjtBQWJBO0VBQ0ksVUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBZ0JKO0FBZEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGFBQUE7QUFpQko7QUFmQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQWtCRjtBQWhCQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQW1CSjtBQWpCQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7QUFvQkY7QUFsQkE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBcUJGO0FBbkJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0FBc0JKO0FBcEJBO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0FBdUJKO0FBckJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBd0JGO0FBdEJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQXlCRjtBQXZCQTtFQUNFLHFCQUFBO0FBMEJGO0FBeEJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUEyQkY7QUF6QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQTRCRjtBQXpCQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBRUEsd0JBQUE7RUFFQSx5Q0FBQTtBQTRCSjtBQTFCQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUE2Qko7QUExQkE7RUFDSSxlQUFBO0FBNkJKO0FBM0JBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQThCSjtBQTVCQTtFQUNJLGNBQUE7QUErQko7QUE3QkE7RUFDSSxVQUFBO0FBZ0NKO0FBOUJBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFFQSx3QkFBQTtFQUVBLHlDQUFBO0FBaUNKO0FBL0JBO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0FBa0NKO0FBaENBO0VBQ0ksYUFBQTtBQW1DSjtBQWpDQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQW9DSjtBQWxDQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQXFDSjtBQWxDQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQXFDSjtBQWxDQTtFQUNFO0lBRUUsZUFBQTtFQW9DRjs7RUFoQ0Y7SUFDSSxlQUFBO0VBbUNGO0FBQ0YiLCJmaWxlIjoiYXNzZW1ibHktaG9zZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTQuMC9jc3MvYWxsLm1pbi5jc3MnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGVyaWFsLWRlc2lnbi1pY29uaWMtZm9udC8yLjIuMC9jc3MvbWF0ZXJpYWwtZGVzaWduLWljb25pYy1mb250Lm1pbi5jc3MnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XHJcbmh0bWwsIGJvZHkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OjE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxufVxyXG4qLCA6OmFmdGVyLCA6OmJlZm9yZSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDZ7IGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7fVxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi0taW9uaWMtc2VsZWN0YWJsZS5pb25pYy1zZWxlY3RhYmxlLXZhbHVlIHtcclxuICBtYXJnaW4tdG9wOiAtMTVweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5hdXRvbW90aXZlX2FyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuLmF1dG9tb3RpdmVfYXJlYTpiZWZvcmV7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzYlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvc2FwZTEucG5nKTtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5hdXRvbW90aXZlX2JvZHl7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5oZWFkZXJfYXJlYXtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDMwcHggMHB4IDUwcHg7XHJcbn1cclxuLmhlYWRlcl9hcmVhIGgxe1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDAgMDtcclxuICBtYXJnaW46IDAgMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uaGVhZGVyX2FyZWEgLmJ0bi1iYWNrIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMXB4IDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXgtd2lkdGg6IDIycHg7XHJcbn1cclxuLmhlYWRlcl9hcmVhIC5idG4tY2FydCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweCAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1heC13aWR0aDogMjhweDtcclxufVxyXG4uaGVhZGVyX2FyZWEgLmJ0bi1jYXJ0IHtcclxuICAgXHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaGVhZGVyX2FyZWEgLmJ0bi1jYXJ0IC50b3RhbF9jYXJ0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTE0cHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnNlYXJjaF9ib3gge1xyXG4gICAgd2lkdGg6IDk3JTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG1hcmdpbjogMCAwIDQwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAjMDAwMDAwMWM7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uc2VhcmNoX2JveCAuZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM4Njg2ODY7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDQ1cHggMTBweCAxMHB4O1xyXG4gICAgLyogYm94LXNoYWRvdzogMCAwIDBweCByZ2IoMCwgMCwgMCk7ICovXHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5zZWFyY2hfYm94IC5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVye1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICM4Njg2ODY7XHJcbn1cclxuLnNlYXJjaF9ib3ggLmljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA5cHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGNvbG9yOiAjYmViZWJlO1xyXG59XHJcbi5hdXRvbW90aXZlX2JvZHkgaDMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMCAwIDEwcHg7XHJcbiAgbWFyZ2luOiAwIDAgNDBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM5NDk0OTQ7XHJcbn1cclxuLmZvcm0tZ3JvdXB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwIDAgMjVweDtcclxufVxyXG5zZWxlY3QuZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ZThlOGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM2MTYxNjE7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHg7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5zZWxlY3QuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2U5NDkyYTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzhlOGU4ZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIzYxNjE2MTtcclxuICBwYWRkaW5nOiAxNXB4IDE1cHg7XHJcbn1cclxuLmZvcm0tZ3JvdXAgLmFycm93e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE3cHg7XHJcbiAgcmlnaHQ6IDE3cHg7XHJcbn1cclxuc2VsZWN0LmZvcm0tY29udHJvbDpmb2N1c3tcclxuICBib3JkZXItY29sb3I6ICNlOTQ5MmE7XHJcbn1cclxuLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xMHB4O1xyXG4gIGxlZnQ6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBwYWRkaW5nOiAwIDJweDtcclxufVxyXG4uYnRuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgYmFja2dyb3VuZDogI2U5NDkyYTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTk0OTJhO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5hdXRvbW90aXZlX2JvZHkgLmZpbHRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzk0OTQ5NDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94IWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeSFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4haW1wb3J0YW50O1xyXG59XHJcbi5hdXRvbW90aXZlX2JvZHkgLmZpbHRlciBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwIDEwcHg7XHJcbiAgICBtYXJnaW46IDAgNXB4IDAgMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hdXRvbW90aXZlX2JvZHkgLmZpbHRlciBidXR0b246bGFzdC1jaGlsZHtcclxuICAgIG1hcmdpbjogMCAwIDAgMDtcclxufVxyXG4uYXV0b21vdGl2ZV9ib2R5IC5maWx0ZXIgYnV0dG9uOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtMXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTg1YTQyO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG4uYXV0b21vdGl2ZV9ib2R5IC5maWx0ZXIgYnV0dG9uLmFjdGl2ZXtcclxuICAgIGNvbG9yOiAjZTg1YTQyO1xyXG59XHJcbi5hdXRvbW90aXZlX2JvZHkgLmZpbHRlciBidXR0b24uYWN0aXZlOmFmdGVye1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4ucHJvZHVjdF9zZWxlY3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3ghaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5IWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiFpbXBvcnRhbnQ7XHJcbn1cclxuLmNoZWNrX2JveCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5jaGVja19ib3ggaW5wdXRbdHlwZT1cInJhZGlvXCJde1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY2hlY2tfYm94IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgcGFkZGluZzogNnB4IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbi5jaGVja19ib3ggaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgfiBzcGFue1xyXG4gICAgY29sb3I6ICNlODVhNDI7XHJcbiAgICBib3JkZXItY29sb3I6ICNlODVhNDI7XHJcbn1cclxuLmZvcm0tZ3JvdXAuZm9ybS1yYWRpb3t9XHJcbi5mb3JtLWdyb3VwLmZvcm0tcmFkaW8gbGFiZWwucmFkaW8taW5saW5lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MzIwcHgpIHtcclxuICAuaGVhZGVyX2FyZWEgaDEge1xyXG4gICBcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICBcclxufVxyXG5cclxuLmNoZWNrX2JveCBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgXHJcbn1cclxufVxyXG4iXX0= */");

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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "AytR");










class Port {
}
let AssemblyHosePage = class AssemblyHosePage {
    constructor(http, navCtrl, storage, loadingController, alertController, route) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.route = route;
        this.appUrl_standard = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["host"] + "getStandard";
        this.appUrl_size = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["host"] + "getSize";
        this.appUrl_proname = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["host"] + "getProductName";
        this.appUrl_pressure = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["host"] + "getPressure";
        this.appUrl_part = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["host"] + "getAssemblyName";
        this.appUrl_parturl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["host"] + "getPartType";
        //standard:any='';
        this.standard = '';
        this.size = '';
        this.name = '';
        this.pressure = '';
        this.part_type = '';
        this.part_type2 = '';
        this.part_type3 = '';
        this.description = '';
        this.assembly_name = '';
        this.productName = '';
        //pressure:any='';
        this.mk_name = '';
        this.part_no = '';
        this.tab_val = 'bare';
        this.endfittab_val = 'endfitA';
        this.count = 0;
        this.cart_data = [];
        this.cartcount = 0;
        this.hose_lengthtype = 'Hose Length';
        this.endfitsize = '';
        this.endfitsize2 = '';
        this.endfitsize3 = '';
        this.endbpart_type = '';
        this.endbpart_type2 = '';
        this.endbpart_type3 = '';
        this.adapterpart_type = '';
        this.adapterpart_type2 = '';
        this.endbsize = '';
        this.endbsize2 = '';
        this.endbsize3 = '';
        this.angeldegree = '';
        this.adapterradio = 'yes';
        this.adaptersize = '';
        this.adaptersize2 = '';
        this.adapterangel = '';
        this.addon_type = '';
        this.text_search = '';
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
        this.listing_standard();
        this.listing_size();
        this.listing_productname();
        this.listing_part();
        this.storage.get("userDetails").then(val => {
            if (val) {
                this.userDetails = val;
                //console.log(this.userDetails);
            }
        });
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
    portChange(event) {
        this.size = event.value.size_id;
        //console.log('port:', event.value.size_id);
    }
    portChange2(event) {
        this.endfitsize = event.value.size_id;
        //console.log('port:', event.value.size_id);
    }
    portChange3(event) {
        this.endfitsize2 = event.value.size_id;
        //console.log('port:', event.value.size_id);
    }
    portChange4(event) {
        this.endfitsize3 = event.value.size_id;
        //console.log('port:', event.value.size_id);
    }
    portChange5(event) {
        this.endbsize = event.value.size_id;
        //console.log('port:', event.value.size_id);
    }
    portChange6(event) {
        this.endbsize2 = event.value.size_id;
        //console.log('port:', event.value.size_id);
    }
    portChange7(event) {
        this.endbsize3 = event.value.size_id;
        //console.log('port:', event.value.size_id);
    }
    portChange8(event) {
        this.adaptersize = event.value.size_id;
        //console.log('port:', event.value.size_id);
    }
    portChange9(event) {
        this.adaptersize2 = event.value.size_id;
        //console.log('port:', event.value.size_id);
    }
    gotoProductserch() {
        //console.log(this.text_search);
        this.storage.set("goTo", 'box-hose/1');
        this.navCtrl.navigateForward('product?text_search=' + this.text_search);
    }
    tab_click(val) {
        if (val == 'endfit') {
            if (!this.standard) {
                this.alertController.create({
                    message: 'Please select standard',
                    buttons: ['OK']
                }).then(resalert => {
                    resalert.present();
                });
            }
            else if (!this.size) {
                this.alertController.create({
                    message: 'Please select size',
                    buttons: ['OK']
                }).then(resalert => {
                    resalert.present();
                });
            }
            else if (!this.productName) {
                this.alertController.create({
                    message: 'Please select product',
                    buttons: ['OK']
                }).then(resalert => {
                    resalert.present();
                });
            }
            else if (!this.pressure) {
                this.alertController.create({
                    message: 'Please select pressure',
                    buttons: ['OK']
                }).then(resalert => {
                    resalert.present();
                });
            }
            else if (this.hose_lengthtype == 'Hose Length' && !this.hose_length) {
                this.alertController.create({
                    message: 'Please enter hose length',
                    buttons: ['OK']
                }).then(resalert => {
                    resalert.present();
                });
            }
            else {
                this.tab_val = val;
            }
            //console.log(this.hose_lengthtype);
            // this.tab_val=val;
        }
        else if (val == 'addon' && this.adapterradio == 'yes') {
            // alert(val);
            if (!this.adapterpart_type) {
                this.alertController.create({
                    message: 'Please select part type',
                    buttons: ['OK']
                }).then(resalert => {
                    resalert.present();
                });
            }
            else if (!this.adaptersize) {
                this.alertController.create({
                    message: 'Please select size',
                    buttons: ['OK']
                }).then(resalert => {
                    resalert.present();
                });
            }
            else {
                this.tab_val = val;
            }
        }
        else if (val == 'addon' && this.adapterradio == 'no') {
            this.tab_val = val;
            this.adapterpart_type = '';
            this.adapterpart_type2 = '';
            this.adaptersize = '';
            this.adaptersize2 = '';
        }
        // else{
        //    this.tab_val=val;
        // }
    }
    onChangeHandler(val) {
        if (val == 'endfitB') {
            if (!this.part_type) {
                this.alertController.create({
                    message: 'Please select part type',
                    buttons: ['OK']
                }).then(resalert => {
                    resalert.present();
                });
            }
            else if (!this.endfitsize) {
                this.alertController.create({
                    message: 'Please select size',
                    buttons: ['OK']
                }).then(resalert => {
                    resalert.present();
                });
            }
            else {
                this.endfittab_val = val;
            }
        }
        else if (val == 'endfitAngel') {
            if (!this.endbpart_type) {
                this.alertController.create({
                    message: 'Please select part type',
                    buttons: ['OK']
                }).then(resalert => {
                    resalert.present();
                });
            }
            else if (!this.endbsize) {
                this.alertController.create({
                    message: 'Please select size',
                    buttons: ['OK']
                }).then(resalert => {
                    resalert.present();
                });
            }
            else {
                this.endfittab_val = val;
            }
        }
        else if (val == 'endfitAdapter') {
            if (!this.angeldegree) {
                this.alertController.create({
                    message: 'Please select degree',
                    buttons: ['OK']
                }).then(resalert => {
                    resalert.present();
                });
            }
            else {
                this.endfittab_val = val;
            }
        }
        else {
            this.endfittab_val = val;
        }
        //console.log($event);
    }
    send_query(val) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: ''
            });
            if (val == 'addon_type') {
                yield loading.present();
                var data = {
                    "standard": this.standard,
                    "size": this.size,
                    "productName": this.productName,
                    "pressure": this.pressure,
                    "hose_lengthtype": this.hose_lengthtype,
                    "hose_length": this.hose_length,
                    "endfitsize": this.endfitsize,
                    "endfitsize2": this.endfitsize2,
                    "endfitsize3": this.endfitsize3,
                    "part_type": this.part_type,
                    "part_type2": this.part_type2,
                    "part_type3": this.part_type3,
                    "endbpart_type": this.endbpart_type,
                    "endbpart_type2": this.endbpart_type2,
                    "endbpart_type3": this.endbpart_type3,
                    "endbsize": this.endbsize,
                    "endbsize2": this.endbsize2,
                    "endbsize3": this.endbsize3,
                    "angeldegree": this.angeldegree,
                    "adapterradio": this.adapterradio,
                    "adaptersize": this.adaptersize,
                    "adaptersize2": this.adaptersize2,
                    "adapterangel": this.adapterangel,
                    "adapterpart_type": this.adapterpart_type,
                    "adapterpart_type2": this.adapterpart_type2,
                    "addon_type": this.addon_type,
                    "user_id": this.userDetails.user_id
                };
                this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["host"] + 'queryMailsend', data)
                    .subscribe(res => {
                    this.res = res.json();
                    console.log(this.res);
                    if (this.res.response) {
                        loading.dismiss();
                        this.alertController.create({
                            message: 'Thank you, Your query has been send',
                            buttons: ['OK']
                        }).then(resalert => {
                            resalert.present();
                        });
                        this.navCtrl.navigateForward('/home');
                        this.standard = '';
                        this.size = '';
                        this.productName = '';
                        this.pressure = '';
                        this.hose_lengthtype = '';
                        this.hose_length = '';
                        this.endfitsize = '';
                        this.endfitsize2 = '';
                        this.endfitsize3 = '';
                        this.part_type = '';
                        this.part_type2 = '';
                        this.part_type3 = '';
                        this.endbpart_type = '';
                        this.endbpart_type2 = '';
                        this.endbpart_type3 = '';
                        this.endbsize = '';
                        this.endbsize2 = '';
                        this.endbsize3 = '';
                        this.angeldegree = '';
                        this.adapterradio = '';
                        this.adapterpart_type = '';
                        this.adapterpart_type2 = '';
                        this.adaptersize = '';
                        this.adaptersize2 = '';
                        this.adapterangel = '';
                        this.addon_type = '';
                    }
                    else {
                        loading.dismiss();
                        this.alertController.create({
                            message: 'Something went wrong try again',
                            buttons: ['OK']
                        }).then(resalert => {
                            resalert.present();
                        });
                    }
                }, (err) => {
                    //this.loading.hide();
                    // console.log(err);
                });
                //this.navCtrl.navigateForward('product');
            }
            //   else{
            //   this.navCtrl.navigateForward('product');
            // }
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
            // console.log(err);
        });
    }
    gotoProduct() {
        this.storage.set("goTo", 'assembly-hose/4');
        this.navCtrl.navigateForward('product?assembly_name=' + this.assembly_name + '&part_type=' + this.part_type +
            '&standard=' + this.standard + '&size=' + this.size + '&name=' + this.productName + '&pressure=' + this.pressure +
            '&description=' + this.description + '&maker=' + this.mk_name + '&part_no=' + this.part_no + '&hp_subcat=' + this.id);
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
    listing_standard() {
        var data = {
            "id": this.id,
        };
        this.http.post(this.appUrl_standard, data)
            .subscribe(res => {
            this.res = res.json();
            //console.log(this.res);
            if (this.res) {
                this.data_list_standard = this.res;
                //this.loading.hide();
            }
            else {
                alert("Server error");
                //this.loading.hide();
            }
        }, (err) => {
            //this.loading.hide();
            //console.log(err);
        });
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
            //console.log(err);
        });
    }
    listing_size_ptype(id, no) {
        var data = {
            "part_type": id,
        };
        //console.log(id);
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["host"] + 'getSize2', data)
            .subscribe(res => {
            this.res = res.json();
            // console.log(this.res);
            if (this.res) {
                if (no == 2) {
                    this.data_list_size_ptype2 = this.res;
                }
                else if (no == 3) {
                    this.data_list_size_ptype3 = this.res;
                }
                else if (no == 4) {
                    this.data_list_size_ptype4 = this.res;
                }
                else if (no == 5) {
                    this.data_list_size_ptype5 = this.res;
                }
                else if (no == 6) {
                    this.data_list_size_ptype6 = this.res;
                }
                else if (no == 7) {
                    this.data_list_size_ptype7 = this.res;
                }
                else if (no == 8) {
                    this.data_list_size_ptype8 = this.res;
                }
                else {
                    this.data_list_size_ptype = this.res;
                }
                //this.loading.hide();
            }
            else {
                if (no == 2) {
                    this.data_list_size_ptype2 = [];
                }
                else if (no == 3) {
                    this.data_list_size_ptype3 = [];
                }
                else if (no == 4) {
                    this.data_list_size_ptype4 = [];
                }
                else if (no == 5) {
                    this.data_list_size_ptype5 = [];
                }
                else if (no == 6) {
                    this.data_list_size_ptype6 = [];
                }
                else if (no == 7) {
                    this.data_list_size_ptype7 = [];
                }
                else if (no == 8) {
                    this.data_list_size_ptype8 = [];
                }
                else {
                    this.data_list_size_ptype = [];
                    //alert("Server error");
                    //this.loading.hide();
                }
            }
        }, (err) => {
            //this.loading.hide();
            console.log(err);
        });
    }
    getPressure(id) {
        //console.log(id);
        var data = {
            "id": id,
        };
        this.http.post(this.appUrl_pressure, data)
            .subscribe(res => {
            this.res = res.json();
            //console.log(this.res);
            if (this.res) {
                this.pressureList = this.res;
                //this.loading.hide();
            }
            else {
                alert("Server error");
                //this.loading.hide();
            }
        }, (err) => {
            //this.loading.hide();
            // console.log(err);
        });
    }
    listing_productname() {
        var data = {
            "id": 1,
        };
        this.http.post(this.appUrl_proname, data)
            .subscribe(res => {
            this.res = res.json();
            //console.log(this.res);
            if (this.res) {
                this.data_list_productnm = this.res;
                //this.loading.hide();
            }
            else {
                alert("Server error");
                //this.loading.hide();
            }
        }, (err) => {
            //this.loading.hide();
            // console.log(err);
        });
    }
    listing_part() {
        var data = {
            "id": this.id,
        };
        this.http.post(this.appUrl_parturl, data)
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
            //console.log(err);
        });
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
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "8xsl");








let AssemblyHosePageModule = class AssemblyHosePageModule {
};
AssemblyHosePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _assembly_hose_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssemblyHosePageRoutingModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"]
        ],
        declarations: [_assembly_hose_page__WEBPACK_IMPORTED_MODULE_6__["AssemblyHosePage"]]
    })
], AssemblyHosePageModule);



/***/ })

}]);
//# sourceMappingURL=assembly-hose-assembly-hose-module.js.map