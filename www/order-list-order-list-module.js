(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-list-order-list-module"],{

/***/ "I83N":
/*!*********************************************************!*\
  !*** ./src/app/order-list/order-list-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: OrderListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListPageRoutingModule", function() { return OrderListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _order_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-list.page */ "UCYp");




const routes = [
    {
        path: '',
        component: _order_list_page__WEBPACK_IMPORTED_MODULE_3__["OrderListPage"]
    }
];
let OrderListPageRoutingModule = class OrderListPageRoutingModule {
};
OrderListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderListPageRoutingModule);



/***/ }),

/***/ "MOQ1":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-list/order-list.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n   \n    \n    <div class=\"header\">\n      <div class=\"top-nav\">\n        <button class=\"btn-back\" (click)=\"back()\">\n          <i class=\"fas fa-arrow-left\"></i>\n        </button>\n        <div class=\"title\">Order History</div>\n      </div>\n    </div>\n    \n    <div class=\"order_history_main_area\">\n      <div class=\"container\">\n        \n        <div class=\"order_history_body\" *ngIf=\"order_list\">\n          \n          <div class=\"order_history\" *ngFor=\"let orderlist of order_list\">\n            <h3>{{orderlist.billing_list.orderDate}}<span class=\"{{orderlist.billing_list.orderStatusColor}}\">{{orderlist.billing_list.orderStatus}}</span> <span class=\"arrow\"><i class=\"fas fa-chevron-up\"></i></span></h3>\n            <div class=\"order_history_contain\">\n              <h4>order details</h4>\n              <div class=\"w-100\">\n                <div class=\"d-flex justify-content-between\" *ngFor=\"let orderlist_item of orderlist.item\">\n                  <div class=\"order_item\">\n                   <!--  <div class=\"item\"><img src=\"assets/addimg1.jpg\" alt=\"image\" title=\"\"></div> -->\n                    <h5>{{orderlist_item.up_item}}</h5>\n                  </div>\n                  <div class=\"price\"><i class=\"fas fa-rupee-sign\"></i>{{orderlist_item.up_price}}X{{orderlist_item.up_qty}}</div>\n                </div>\n              </div>\n              <div class=\"w-100\">\n                <div class=\"d-flex justify-content-between\">\n                  <div class=\"price\">Extra Price</div>\n                  <div class=\"price\"><i class=\"fas fa-rupee-sign\"></i>{{orderlist.billing_list.delivery_amt}}</div>\n                </div>\n              </div>\n              <div class=\"total_price_area\">\n                <div class=\"d-flex justify-content-between\">\n                  <div class=\"price\">Total</div>\n                  <div class=\"price\"><i class=\"fas fa-rupee-sign\"></i>{{orderlist.billing_list.uba_alltotal}}</div>\n                </div>\n              </div>\n              <h6>order Status</h6>\n              <p>{{orderlist.billing_list.orderStatus}}</p>\n            </div>\n          </div>\n\n          <!--<div class=\"order_history\">\n            <h3>20 august 2020<span class=\"ontheway\">on the way</span> <span class=\"arrow\"><i class=\"fas fa-chevron-down\"></i></span></h3>\n\n          </div>\n           <div class=\"order_history\">\n            <h3>25 august 2020<span class=\"canceled\">cancel</span> <span class=\"arrow\"><i class=\"fas fa-chevron-down\"></i></span></h3>\n          </div>\n          <div class=\"order_history\">\n            <h3>26 august 2020<span class=\"ontheway\">on the way</span> <span class=\"arrow\"><i class=\"fas fa-chevron-down\"></i></span></h3>\n          </div>\n          <div class=\"order_history\">\n            <h3>28 august 2020<span class=\"canceled\">cancel</span> <span class=\"arrow\"><i class=\"fas fa-chevron-down\"></i></span></h3>\n          </div> -->\n\n        </div>\n\n        <div class=\"order_empty_area\" *ngIf=\"!order_list\">\n          <div class=\"w-100\">\n            <div class=\"order_empty_img\">\n              <img src=\"assets/images/note.png\">\n            </div>\n            <div class=\"order_empty_contain\">\n              <h1>Your order list is empty</h1>\n              <p>Your order list is empty</p>\n              <button class=\"btn-browse-menu\">go to home page</button>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n   \n  \n</ion-content>\n");

/***/ }),

/***/ "UCYp":
/*!***********************************************!*\
  !*** ./src/app/order-list/order-list.page.ts ***!
  \***********************************************/
/*! exports provided: OrderListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListPage", function() { return OrderListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-list.page.html */ "MOQ1");
/* harmony import */ var _order_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-list.page.scss */ "ub8B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









let OrderListPage = class OrderListPage {
    constructor(http, navCtrl, storage, loadingController, alertController, toastController, location) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.location = location;
        this.appUrl = "https://theitvibe.com/project/ihose/api/getOrder";
        this.cart_data = [];
        this.cartTotalAmount = 0;
        this.count = 0;
        this.cart = [];
        this.cartdata = [];
        this.storage.get("userDetails").then(val => {
            if (val) {
                this.userDetails = val;
                //console.log(val);
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        // this.storage.remove("userCart");
        this.storage.get("userCart").then(val => {
            if (val) {
                this.userCart = val;
                //this.cart_data = val;
                //console.log(val);
            }
        });
        this.getCartItemCount();
        this.listing();
    }
    getCartItemCount() {
        //let count=0;
        this.cartdata = [];
        this.cartTotalAmount = 0;
        this.count = 0;
        this.storage.get("userCart").then(val => {
            if (val) {
                for (let p of this.userCart) {
                    if (p.quantity > 0) {
                        this.count += 1;
                        this.cartTotalAmount += p.menu_price * p.quantity;
                        this.cartdata.push(p);
                    }
                }
                this.cart_data = this.cartdata;
                this.cartTotal = this.count;
                this.cartcount = this.count;
                this.menu_list = this.cartdata;
                //console.log(this.cartdata);
            }
            else {
                this.cartTotal = this.count;
                this.menu_list = this.cartdata;
            }
        });
    }
    listing() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...'
            });
            yield loading.present();
            this.storage.get("userDetails").then(val => {
                if (val) {
                    this.userDetails = val;
                    var data = {
                        "userId": this.userDetails.user_id,
                    };
                }
            });
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
            //console.log(this.userDetails.user_id);
            this.http.post(this.appUrl + '/' + this.userDetails.user_id, { data: '' }, { headers: headers })
                .subscribe(res => {
                this.res = res.json();
                //console.log(this.res);
                if (this.res.order_hist) {
                    this.order_list = this.res.order_hist;
                    loading.dismiss();
                }
                else {
                    this.order_list = '';
                    //alert("Server error");
                    loading.dismiss();
                }
            }, (err) => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
    back() {
        this.location.back();
    }
};
OrderListPage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }
];
OrderListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-list',
        template: _raw_loader_order_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderListPage);



/***/ }),

/***/ "b+of":
/*!*************************************************!*\
  !*** ./src/app/order-list/order-list.module.ts ***!
  \*************************************************/
/*! exports provided: OrderListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListPageModule", function() { return OrderListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _order_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-list-routing.module */ "I83N");
/* harmony import */ var _order_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-list.page */ "UCYp");







let OrderListPageModule = class OrderListPageModule {
};
OrderListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderListPageRoutingModule"]
        ],
        declarations: [_order_list_page__WEBPACK_IMPORTED_MODULE_6__["OrderListPage"]]
    })
], OrderListPageModule);



/***/ }),

/***/ "ub8B":
/*!*************************************************!*\
  !*** ./src/app/order-list/order-list.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.top-nav {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 15px 1em;\n  margin-top: 0;\n  margin-bottom: 0;\n  background-color: #eb9929;\n  position: fixed;\n  z-index: 1;\n}\n.top-nav .btn-back {\n  font-size: 2em;\n  color: #fff;\n  cursor: pointer;\n  outline: none;\n  background-color: transparent;\n  border: none;\n  position: absolute;\n}\n.top-nav .title {\n  color: #fff;\n  font-size: 1.2em;\n  font-weight: 500;\n  margin: 0 auto;\n  text-transform: uppercase;\n  letter-spacing: normal;\n}\n.header {\n  background-color: #fe5632;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.24);\n}\n.container {\n  padding: 0 1em;\n}\n.w-100 {\n  width: 100%;\n  box-sizing: border-box;\n}\n.justify-content-between {\n  justify-content: space-between !important;\n}\n.d-flex {\n  display: flex !important;\n}\n.order_history_main_area {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 30px 0 0 0;\n  margin: 0 0 70px 0;\n}\n.order_history_main_area .order_history_body {\n  width: 100%;\n  padding: 0 0 0;\n  margin: 40px 0 0;\n  box-sizing: border-box;\n}\n.order_history {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 10px;\n}\n.order_history h3 {\n  width: 100%;\n  box-sizing: border-box;\n  box-shadow: 0 -5px 10px rgba(185, 185, 185, 0.5);\n  padding: 12px 15px;\n  margin: 0 0 0 0;\n  position: relative;\n  font-size: 16px;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n  line-height: 30px;\n}\n.order_history h3 .delivered, .order_history h3 .canceled, .order_history h3 .ontheway {\n  display: inline-block;\n  box-sizing: border-box;\n  margin-left: 10px;\n  background: #058200;\n  color: #fff;\n  border-radius: 30px;\n  font-size: 10px;\n  font-weight: 500;\n  padding: 4px 8px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  line-height: 20px;\n}\n.order_history h3 .canceled {\n  background: #ff0000;\n}\n.order_history h3 .ontheway {\n  background: #e88a00;\n}\n.order_history h3 .arrow {\n  content: \"\";\n  position: absolute;\n  top: 14px;\n  right: 15px;\n  color: #000;\n}\n.order_history .order_history_contain {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 12px 15px;\n  box-shadow: 0 7px 10px rgba(185, 185, 185, 0.5);\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  margin-bottom: 25px;\n}\n.order_history .order_history_contain h4 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 12px;\n  font-size: 13px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.order_history .order_history_contain .order_item {\n  display: inline-block;\n  padding-left: 0px;\n  position: relative;\n  min-height: 60px;\n}\n.order_history .order_history_contain .order_item .item {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 60px;\n  height: 60px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.order_history .order_history_contain .order_item .item img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.order_history .order_history_contain .order_item h5 {\n  padding: 0 0;\n  margin: 0 0;\n  line-height: 60px;\n  font-size: 16px;\n  color: #000;\n}\n.order_history .order_history_contain .price {\n  line-height: 60px;\n  font-size: 16px;\n  font-weight: 700;\n}\n.order_history .order_history_contain .total_price_area {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  border-top: 1px solid #cfcfcf;\n}\n.order_history .order_history_contain h6 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 2px;\n  font-size: 13px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.order_history .order_history_contain p {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  color: #000;\n  font-size: 16px;\n  font-weight: 600;\n}\n.container {\n  padding: 0 1em;\n}\n.sticky_footer {\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  background-color: #000;\n  z-index: 99;\n  padding: 5px 0;\n  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.22);\n}\n.sticky_footer p {\n  margin: 0;\n  padding: 0;\n  line-height: 0;\n}\n.sticky_footer p button {\n  background-color: transparent;\n  border: none;\n  padding: 3px 0;\n  cursor: pointer;\n  color: #fff;\n  text-transform: capitalize;\n  font-weight: 500;\n  position: relative;\n  border: none;\n  outline: none;\n}\n.sticky_footer p button.active i {\n  color: #ff0000;\n}\n.sticky_footer p button small {\n  position: absolute;\n  right: -7px;\n  width: 20px;\n  height: 20px;\n  background-color: #ff0000;\n  top: 0;\n  text-align: center;\n  line-height: 20px;\n  border-radius: 50px;\n  color: #fff;\n  font-size: 13px;\n}\n.sticky_footer p button i {\n  display: block;\n  font-size: 28px;\n  color: #fff;\n}\n.sticky_footer p button img {\n  max-width: 24px;\n  margin: 0;\n  padding: 0;\n  height: 22px;\n}\n.sticky_footer .container {\n  display: flex !important;\n  justify-content: space-between !important;\n  padding: 6px 1em;\n}\n.sticky_footer img {\n  width: 100%;\n  max-width: 100%;\n}\n/*--------- order empty css start --------*/\n.order_empty_area {\n  width: 100%;\n  height: 80vh;\n  padding: 0 0;\n  margin: 0 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.order_empty_area .order_empty_img {\n  width: 100px;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 auto 8px;\n}\n.order_empty_area .order_empty_img img {\n  width: 100%;\n  object-fit: cover;\n}\n.order_empty_area .order_empty_contain {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 0;\n  text-align: center;\n}\n.order_empty_area .order_empty_contain h1 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 4px;\n  font-size: 18px;\n  font-weight: 600;\n  color: #000;\n  text-align: center;\n}\n.order_empty_area .order_empty_contain p {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 10px;\n  text-align: center;\n  font-size: 14px;\n}\n.btn-browse-menu {\n  text-transform: uppercase;\n  font-size: 11px;\n  font-weight: 600;\n  color: #000;\n  background: transparent;\n  border: 1px solid #000;\n  padding: 8px 10px;\n}\n/*--------- order empty css stop --------*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9yZGVyLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGlIQUFBO0FBQ0EseUZBQUE7QUFFUjtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0gsa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFBRDtBQUdBO0VBQ0ksc0JBQUE7QUFBSjtBQUdBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFBSjtBQUtBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUZKO0FBSUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUlBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQURKO0FBR0E7RUFDSSx5QkFBQTtFQUNBLDJDQUFBO0FBQUo7QUFFQTtFQUNJLGNBQUE7QUFDSjtBQUNBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0FBRUo7QUFBQTtFQUVJLHlDQUFBO0FBR0o7QUFEQTtFQUVJLHdCQUFBO0FBSUo7QUFGQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFLSjtBQUhBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBTUo7QUFKQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQU9KO0FBTEE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQVFKO0FB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Q0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQWdDSjtBQTlCQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBaUNKO0FBL0JBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBa0NKO0FBaENBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBbUNKO0FBakNBLDBDQUFBIiwiZmlsZSI6Im9yZGVyLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNC4wL2Nzcy9hbGwubWluLmNzcycpO1xyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcblx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0ei1pbmRleDoxO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblxyXG59XHJcbiosIDo6YWZ0ZXIsIDo6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG5cclxuLnRvcC1uYXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWI5OTI5O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4udG9wLW5hdiAuYnRuLWJhY2sge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnRvcC1uYXYgLnRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNTYzMjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IHJnYigwIDAgMCAvIDI0JSk7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwIDFlbTtcclxufVxyXG4udy0xMDB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnkhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuIWltcG9ydGFudDtcclxufVxyXG4uZC1mbGV4IHtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94IWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xyXG59XHJcbi5vcmRlcl9oaXN0b3J5X21haW5fYXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDMwcHggMCAwIDA7XHJcbiAgICBtYXJnaW46IDAgMCA3MHB4IDA7XHJcbn1cclxuLm9yZGVyX2hpc3RvcnlfbWFpbl9hcmVhIC5vcmRlcl9oaXN0b3J5X2JvZHl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAgMCAwO1xyXG4gICAgbWFyZ2luOiA0MHB4IDAgMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLm9yZGVyX2hpc3Rvcnl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbn1cclxuLm9yZGVyX2hpc3RvcnkgaDMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogMCAtNXB4IDEwcHggcmdiKDE4NSAxODUgMTg1IC8gNTAlKTtcclxuICAgIHBhZGRpbmc6IDEycHggMTVweDtcclxuICAgIG1hcmdpbjogMCAwIDAgMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5vcmRlcl9oaXN0b3J5IGgzIC5kZWxpdmVyZWQsIC5vcmRlcl9oaXN0b3J5IGgzIC5jYW5jZWxlZCwgLm9yZGVyX2hpc3RvcnkgaDMgLm9udGhld2F5IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwNTgyMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuLm9yZGVyX2hpc3RvcnkgaDMgLmNhbmNlbGVke1xyXG4gICAgYmFja2dyb3VuZDogI2ZmMDAwMDtcclxufVxyXG4ub3JkZXJfaGlzdG9yeSBoMyAub250aGV3YXl7XHJcbiAgICBiYWNrZ3JvdW5kOiNlODhhMDA7XHJcbn1cclxuLm9yZGVyX2hpc3RvcnkgaDMgLmFycm93IHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNHB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4ub3JkZXJfaGlzdG9yeSAub3JkZXJfaGlzdG9yeV9jb250YWluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDEycHggMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgN3B4IDEwcHggcmdiKDE4NSAxODUgMTg1IC8gNTAlKTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuLm9yZGVyX2hpc3RvcnkgLm9yZGVyX2hpc3RvcnlfY29udGFpbiBoNCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDEycHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuLm9yZGVyX2hpc3RvcnkgLm9yZGVyX2hpc3RvcnlfY29udGFpbiAub3JkZXJfaXRlbXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDogNjBweDtcclxufVxyXG4ub3JkZXJfaGlzdG9yeSAub3JkZXJfaGlzdG9yeV9jb250YWluIC5vcmRlcl9pdGVtIC5pdGVte1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ub3JkZXJfaGlzdG9yeSAub3JkZXJfaGlzdG9yeV9jb250YWluIC5vcmRlcl9pdGVtIC5pdGVtIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLm9yZGVyX2hpc3RvcnkgLm9yZGVyX2hpc3RvcnlfY29udGFpbiAub3JkZXJfaXRlbSBoNXtcclxuICAgIHBhZGRpbmc6MCAwO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5vcmRlcl9oaXN0b3J5IC5vcmRlcl9oaXN0b3J5X2NvbnRhaW4gLnByaWNlIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4ub3JkZXJfaGlzdG9yeSAub3JkZXJfaGlzdG9yeV9jb250YWluIC50b3RhbF9wcmljZV9hcmVhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NmY2ZjZjtcclxufVxyXG4ub3JkZXJfaGlzdG9yeSAub3JkZXJfaGlzdG9yeV9jb250YWluIGg2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMnB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcbi5vcmRlcl9oaXN0b3J5IC5vcmRlcl9oaXN0b3J5X2NvbnRhaW4gcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwIDFlbTtcclxufVxyXG5cclxuXHJcbi5zdGlja3lfZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIC0xcHggMTBweCByZ2IoMCAwIDAgLyAyMiUpO1xyXG59XHJcblxyXG4uc3RpY2t5X2Zvb3RlciBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxufVxyXG4uc3RpY2t5X2Zvb3RlciBwIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDNweCAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnN0aWNreV9mb290ZXIgcCBidXR0b24uYWN0aXZlIGkge1xyXG4gICAgY29sb3I6ICNmZjAwMDA7XHJcbn1cclxuLnN0aWNreV9mb290ZXIgcCBidXR0b24gc21hbGwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC03cHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4uc3RpY2t5X2Zvb3RlciBwIGJ1dHRvbiBpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnN0aWNreV9mb290ZXIgcCBidXR0b24gaW1nIHtcclxuICAgIG1heC13aWR0aDogMjRweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi5zdGlja3lfZm9vdGVyIC5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveCFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDstbXMtZmxleC1wYWNrOiBqdXN0aWZ5IWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA2cHggMWVtO1xyXG59XHJcblxyXG4uc3RpY2t5X2Zvb3RlciBpbWd7IHdpZHRoOjEwMCU7IG1heC13aWR0aDoxMDAlOyBcclxuICAgIH1cclxuXHJcbi8qLS0tLS0tLS0tIG9yZGVyIGVtcHR5IGNzcyBzdGFydCAtLS0tLS0tLSovXHJcbi5vcmRlcl9lbXB0eV9hcmVhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLm9yZGVyX2VtcHR5X2FyZWEgLm9yZGVyX2VtcHR5X2ltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gOHB4O1xyXG59XHJcbi5vcmRlcl9lbXB0eV9hcmVhIC5vcmRlcl9lbXB0eV9pbWcgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4ub3JkZXJfZW1wdHlfYXJlYSAub3JkZXJfZW1wdHlfY29udGFpbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ub3JkZXJfZW1wdHlfYXJlYSAub3JkZXJfZW1wdHlfY29udGFpbiBoMXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgNHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5vcmRlcl9lbXB0eV9hcmVhIC5vcmRlcl9lbXB0eV9jb250YWluIHAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uYnRuLWJyb3dzZS1tZW51IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcclxufVxyXG4vKi0tLS0tLS0tLSBvcmRlciBlbXB0eSBjc3Mgc3RvcCAtLS0tLS0tLSovIl19 */");

/***/ })

}]);
//# sourceMappingURL=order-list-order-list-module.js.map