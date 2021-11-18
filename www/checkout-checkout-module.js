(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"],{

/***/ "/6ko":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content>\n\n   \n    \n    <div class=\"header\">\n      <div class=\"top-nav\">\n        <button class=\"btn-back\" (click)=\"back()\">\n          <i class=\"fas fa-arrow-left\"></i>\n        </button>\n        <div class=\"title\">Checkout</div>\n      </div>\n    </div>\n    \n     <div class=\"delevary_address\">\n       <div class=\"container\">\n      \t<h3>Delivery Address</h3>\n        </div>\n      \t<div class=\"address_area\">\n      \t\t<button class=\"add_address\" ><i class=\"fas fa-plus\"></i></button>\n            <div class=\"address_area_inner\">\n              <ul >\n                 <li *ngFor=\"let data of address_list; let idx=index\" (click)=\"selectDeliveryAddress(data.usa_id)\"  >\n                   <button class=\"address_box\" [ngClass]=\"{'active': data.usa_id == currentSelected}\">\n                    <a href=\"javascript:void(0)\" (click)=\"edit(data.usa_id)\" class=\"add_icon\"><i class=\"zmdi zmdi-more-vert\"></i></a>\n                    <h4>{{data.usa_address}} {{data.usa_doorno}} {{data.usa_landmark}}</h4>\n                   \n                    <h5 *ngIf=\"data.usa_id == currentSelected\">Delivery Here <i class=\"fas fa-check-circle\"></i></h5>\n                    <h5 *ngIf=\"data.usa_id != currentSelected\">Delivery Address </h5>\n                  </button>\n                </li>\n                \n              </ul>\n      \t\t</div>\n      \t</div>\n      </div>\n      \n      \n    <div class=\"dtlCheckout\">\n      <div class=\"container\">\n        <h3>Order Summery</h3>\n        <div class=\"billings\">\n          <ul class=\"billDtl\">\n            <li *ngFor=\"let menulist of cartdata ; let i=index;\">\n              <span class=\"itemTitle\">{{menulist.hp_description}}</span>\n              <span class=\"itemTitle\">Qty {{menulist.quantity}}X{{(menulist.hp_price)}}</span>\n              <span class=\"itemRate\"><i class=\"fas fa-rupee-sign\"></i>{{(menulist.hp_price*menulist.quantity).toFixed(2)}}</span>\n            </li>\n            <li>\n              <span class=\"itemTitle\">Delivery charge</span>\n              <span class=\"itemTitle\"></span>\n              <span class=\"itemRate\"><i class=\"fas fa-rupee-sign\"></i>0</span>\n            </li>\n            <li class=\"amountTotal\">\n              <span class=\"itemTitle\">To Pay</span>\n              <span class=\"itemRate\"><i class=\"fas fa-rupee-sign\"></i>{{cartTotalAmount.toFixed(2)}}</span>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    \n       \n    <div class=\"billHeading\">\n     <div class=\"container\">\n              <div class=\"payOptTop\">\n          <span class=\"payTitle\">Payment Options</span>\n          <!-- <button class=\"newAdd\" href=\"#\">Add New</button> -->\n        </div>\n     \n        <ul class=\"payOpt\" (change)=\"onChangeHandler($event)\" >\n       \n          <li>\n            <label class=\"dtl\">\n              <div class=\"itemImgWra\">\n                <img src=\"assets/cod.png\" alt=\"\" class=\"itemImg\">\n              </div>\n              <div class=\"desc\">\n                <span class=\"itaemName\">Cash on delivery</span>\n              </div>\n            </label>\n            <div class=\"price\">\n              <input type=\"radio\"  value=\"cod\" [checked]=\"this.datap.paytyp==='cod'\">\n            </div>\n          </li>\n          <li>\n            <label class=\"dtl\">\n              <div class=\"itemImgWra\">\n                <img src=\"assets/cod.png\" alt=\"\" class=\"itemImg\">\n              </div>\n              <div class=\"desc\">\n                <span class=\"itaemName\">Online Pay</span>\n              </div>\n            </label>\n            <div class=\"price\">\n              <input value=\"online\" [checked]=\"this.datap.paytyp==='online'\" type=\"radio\" >\n            </div>\n          </li>\n\n\n        </ul>\n\n        </div>\n      </div>\n    \n    \n    \n      \n      \n<div class=\"bottom-actionWrapper\">\n        <div class=\"btn-action\">\n          <span class=\"total\">Total: <i class=\"fas fa-rupee-sign\"></i>{{cartTotalAmount.toFixed(2)}}</span>\n          <button class=\"btn-default\" (click)=\"book_order()\">PROCEED <i class=\"fas fa-long-arrow-alt-right\"></i></button>\n        </div>\n        \n      </div>\n      \n   \n\n    \n  \n</ion-content>\n");

/***/ }),

/***/ "8y03":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout-routing.module */ "v3IU");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.page */ "E2Rb");







let CheckoutPageModule = class CheckoutPageModule {
};
CheckoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutPageRoutingModule"]
        ],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
    })
], CheckoutPageModule);



/***/ }),

/***/ "E2Rb":
/*!*******************************************!*\
  !*** ./src/app/checkout/checkout.page.ts ***!
  \*******************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_checkout_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./checkout.page.html */ "/6ko");
/* harmony import */ var _checkout_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout.page.scss */ "pA2R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "e8h1");








//declare module '*';
//declare var RazorpayCheckout:any;
//declare module '*';
//declare var Razorpay: any;

let CheckoutPage = class CheckoutPage {
    constructor(http, navCtrl, storage, loadingController, alertController, toastController, platform) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.platform = platform;
        this.appUrl = "https://theitvibe.com/project/ihose/api/getAddress";
        this.bookUrl = "https://theitvibe.com/project/ihose/api/place_order";
        this.cart_data = [];
        this.cartTotalAmount = 0;
        this.count = 0;
        this.cart = [];
        this.cartdata = [];
        this.currentSelected = null;
        this.datap = {
            paytyp: ''
        };
        this.dtime = {
            paytyp: 'soon'
        };
        this.voucher_amt = 0;
        this.use_voucher = '';
        this.use_voucher_check = 0;
        this.storage.get("userDetails").then(val => {
            if (val) {
                this.userDetails = val;
                this.name = val.name;
                this.email = val.email;
                this.phone = val.phone;
                this.user = val.user_id;
                //console.log(val);
            }
        });
    }
    ngOnInit() {
    }
    onChangeHandler($event) {
        this.datap.paytyp = $event.target.value;
        this.paymentmode = $event.target.value;
        //console.log(this.paymentmode);
    }
    onChangeHandler2($event) {
        this.dtime.paytyp = $event.target.value;
        this.pickup_delivery = $event.target.value;
        //console.log(this.paymentmode);
    }
    onChangeHandler3($event) {
        //console.log(this.use_voucher);
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
                        this.cartTotalAmount += p.hp_price * p.quantity;
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
        this.storage.get("userDetails").then(val => {
            if (val) {
                this.userDetails = val;
                var data = {
                    "userId": this.userDetails.user_id,
                };
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
                //console.log(this.userDetails.user_id);
                this.http.post(this.appUrl + '/' + this.userDetails.user_id, { data: '' })
                    .subscribe(res => {
                    this.res = res.json();
                    //console.log(this.res);
                    //this.voucher_amt=this.res.voucher_amount;
                    if (this.res) {
                        this.address_list = this.res;
                    }
                    else {
                        //alert("Server error");
                        //loading.dismiss();
                    }
                }, (err) => {
                    console.log(err);
                    //loading.dismiss();
                });
            }
        });
    }
    selectDeliveryAddress(idx) {
        this.currentSelected = idx;
    }
    book_order() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log(this.voucher_amt);
            const loading = yield this.loadingController.create({
                message: 'Processing...'
            });
            const alert = yield this.alertController.create({
                message: 'Something is wrong',
                buttons: ['OK']
            });
            const addrsalert = yield this.alertController.create({
                message: 'Please select address',
                buttons: ['OK']
            });
            const useralert = yield this.alertController.create({
                message: 'Please login',
                buttons: ['OK']
            });
            const paymodealert = yield this.alertController.create({
                message: 'Please select payment type',
                buttons: ['OK']
            });
            const deldatealert = yield this.alertController.create({
                message: 'Please select delivery date',
                buttons: ['OK']
            });
            const timealert = yield this.alertController.create({
                message: 'Please select delivery time',
                buttons: ['OK']
            });
            if (this.pickup_delivery == 'later') {
                this.uba_delivery_date = this.uba_delivery_date2;
                this.uba_delivery_time = this.uba_delivery_time2;
            }
            else {
                this.uba_delivery_date = '';
                this.uba_delivery_time = '';
            }
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
            if (this.currentSelected == null) {
                loading.dismiss();
                addrsalert.present();
            }
            else if (this.userDetails == '' || this.userDetails == null) {
                loading.dismiss();
                useralert.present();
            }
            else if (this.paymentmode == '' || this.paymentmode == null) {
                //console.log(2);
                loading.dismiss();
                paymodealert.present();
            }
            else {
                yield loading.present();
                if (this.paymentmode == 'online') {
                    //this.navCtrl.navigateForward('checkout-online?address='+this.currentSelected);
                    const options = {
                        description: 'Credits towards consultation',
                        image: 'assets/images/razor_logo.png',
                        currency: 'INR',
                        key: 'rzp_test_Z2LSUDpWE6L9Yg',
                        amount: 10 * 100,
                        name: this.userDetails.user.name,
                        //"callback_url": 'https://www.google.com',
                        "handler": function (response) {
                            if (typeof response.razorpay_payment_id == 'undefined' || response.razorpay_payment_id < 1) {
                                this.redirect_url = '/order-failed';
                                loading.dismiss();
                                //this.navCtrl.navigateForward('order-failed');
                            }
                            else {
                                this.redirect_url = '/order-success';
                                //this.navCtrl.navigateForward('order-success');
                                // location.href = this.redirect_url;   
                                var data = {
                                    "cartTotalAmount": this.cartTotalAmount,
                                    "userid": this.user,
                                    "name": this.name,
                                    "order_method": 'delivery',
                                    "paymod": this.paymentmode,
                                    "deliver_address": this.currentSelected,
                                    "phone": this.phone,
                                    "uba_transaction": response.razorpay_payment_id,
                                    "uba_payStatus": 'success',
                                    //"uba_delivery_time":this.uba_delivery_time,
                                    //"use_voucher":this.use_voucher,
                                    "cart_data": this.cart_data,
                                };
                                //console.log(data);
                                //callApi(1, options.amount);
                                //  var callApi = (data) => {
                                // console.log(data);
                                //  }
                            }
                        },
                        prefill: {
                            email: this.userDetails.user.email,
                            contact: this.userDetails.user.phone,
                            name: this.userDetails.user.name
                        },
                        theme: {
                            color: '#eb9929'
                        },
                        modal: {
                            ondismiss: function () {
                                console.log('dismissed');
                            }
                        }
                    };
                    const successCallback = paymentId => {
                        console.log(121);
                        console.log(paymentId);
                        // alert('payment_id: ' + payment_id);
                    };
                    const cancelCallback = error => {
                        console.log(error);
                        // alert(error.description + ' (Error ' + error.code + ')');
                    };
                    Razorpay.open(options, successCallback, cancelCallback);
                    // Razorpay.on('payment.success', successCallback);
                    // Razorpay.on('payment.cancel', cancelCallback);
                    // Razorpay.open(options);
                    loading.dismiss();
                }
                else {
                    var data = {
                        "cartTotalAmount": this.cartTotalAmount,
                        "userid": this.userDetails.user_id,
                        "name": this.userDetails.user.name,
                        "order_method": 'delivery',
                        "paymod": this.paymentmode,
                        "deliver_address": this.currentSelected,
                        "phone": this.userDetails.user.phone,
                        //"pickup_delivery":this.dtime.paytyp,
                        //"uba_delivery_date":this.uba_delivery_date,
                        //"uba_delivery_time":this.uba_delivery_time,
                        //"use_voucher":this.use_voucher,
                        "cart_data": this.cart_data,
                    };
                    this.http.post(this.bookUrl, data)
                        .subscribe(res => {
                        //console.log(res.json());
                        this.res = res.json();
                        if (this.res.status == 0) {
                            loading.dismiss();
                            this.navCtrl.navigateForward('order-failed');
                        }
                        else if (this.res.status == 1) {
                            this.storage.remove("userCart");
                            this.currentSelected = null;
                            this.use_voucher = '';
                            this.navCtrl.navigateForward('order-success');
                            loading.dismiss();
                        }
                        else {
                            //alert("Server error");
                            loading.dismiss();
                        }
                    }, (err) => {
                        console.log(err);
                        loading.dismiss();
                    });
                }
            }
        });
    }
    online_pay(res) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Processing...'
            });
            this.http.post(this.bookUrl, res)
                .subscribe(res => {
                console.log(res.json());
                this.res = res.json();
                if (this.res.status == 0) {
                    loading.dismiss();
                    this.navCtrl.navigateForward('order-failed');
                }
                else if (this.res.status == 1) {
                    this.storage.remove("userCart");
                    this.currentSelected = null;
                    this.use_voucher = '';
                    this.navCtrl.navigateForward('order-success');
                    loading.dismiss();
                }
                else {
                    //alert("Server error");
                    loading.dismiss();
                }
            }, (err) => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
    edit(id) {
        this.navCtrl.navigateForward('/checkout-addressedit?edit=' + id);
    }
    back() {
        this.navCtrl.navigateForward('cart-page');
    }
    callPaymentMethod() {
        var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_Z2LSUDpWE6L9Yg',
            amount: 10 * 100,
            name: 'test',
            "callback_url": 'https://www.google.com',
            "handler": function (response) {
                console.log(response);
                alert(response.razorpay_payment_id);
            },
            prefill: {
                email: 'wtm.golam@gmail.com',
                contact: '7003832809',
                name: 'Test'
            },
            theme: {
                color: '#eb9929'
            },
        };
        var successCallback = (payment_id) => {
            console.log(payment_id);
            alert('payment_id: ' + payment_id);
            // this.navCtrl.push("ThankyouPage",{
            //         status: this.status
            //     });
        };
        var cancelCallback = (error) => {
            alert(error.description + ' (Error ' + error.code + ')');
        };
        // this.platform.ready().then(() => {
        //       Razorpay.open(options, successCallback, cancelCallback);
        //     })
        Razorpay.open(options, successCallback, cancelCallback);
        // var callApi = function(payment_id, amount) {
        //   let data = {
        //     'payment_id' : payment_id,
        //     'amount' : amount
        //   };
        //   console.log(data);
        //   // api to capture the payment
        //   this.webService.callPost('paymentCapture',data).then((response) => {
        //     console.log("Response is",response);
        //   }).catch((error) => {
        //     console.log(error);
        //    })
        // };
    }
};
CheckoutPage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
CheckoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkout',
        template: _raw_loader_checkout_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkout_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CheckoutPage);



/***/ }),

/***/ "pA2R":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.top-nav {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 15px 1em;\n  margin-top: 0;\n  margin-bottom: 0;\n  background-color: #eb9929;\n  position: fixed;\n  z-index: 1;\n}\n.top-nav .btn-back {\n  font-size: 2em;\n  color: #fff;\n  cursor: pointer;\n  outline: none;\n  background-color: transparent;\n  border: none;\n  position: absolute;\n}\n.top-nav .title {\n  color: #fff;\n  font-size: 1.2em;\n  font-weight: 500;\n  margin: 0 auto;\n  text-transform: uppercase;\n  letter-spacing: normal;\n}\n.header {\n  background-color: #fe5632;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.24);\n}\n.full-screen.cart {\n  flex-direction: column;\n}\n.container {\n  padding: 0 1em;\n}\n.delevary_address h3 {\n  width: 100%;\n  box-sizing: border-box;\n  margin: 15px 0 15px;\n  padding: 0 0;\n  color: #000000;\n  font-size: 18px;\n}\n.delevary_address .address_area {\n  width: 100%;\n  box-sizing: border-box;\n  display: block;\n  padding-left: 70px;\n  position: relative;\n}\n.address_area_inner {\n  overflow: scroll;\n  box-sizing: border-box;\n  padding: 10px;\n}\n.address_area_inner ul li:nth-of-type(2n) .address_box {\n  background-color: #FFF;\n}\n.address_area_inner ul li:nth-of-type(2n) .address_box .add_icon {\n  color: #000000;\n}\n.address_area_inner ul li:nth-of-type(2n) .address_box h4 {\n  color: #000000;\n}\n.address_area_inner ul li:nth-of-type(2n) .address_box h5 {\n  color: #000000;\n}\n.address_area_inner ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: table;\n  width: 100%;\n}\n.address_area_inner ul li {\n  display: table-cell;\n  vertical-align: top;\n}\n.delevary_address .address_area .add_address {\n  /* display: inline-block; */\n  min-height: 120px;\n  background: #ff0000;\n  padding: 20px 15px;\n  border: 1px solid #ff0000;\n  color: #fff;\n  box-sizing: border-box;\n  font-size: 28px;\n  border-radius: 24px;\n  cursor: pointer;\n  vertical-align: top;\n  position: absolute;\n  left: 16px;\n  box-shadow: 0px 0px 10px #0000003d;\n  margin: 10px 0;\n  cursor: pointer;\n  outline: none;\n}\n.delevary_address .address_area .add_address:hover {\n  background-color: #000;\n  color: #fff;\n}\n.delevary_address .address_area .address_box {\n  width: 240px;\n  height: 120px;\n  box-sizing: border-box;\n  padding: 20px 50px 20px 20px;\n  border-radius: 20px;\n  background: #000;\n  margin-right: 12px;\n  position: relative;\n  box-shadow: 0px 0px 20px #0000002e;\n  border: none;\n  text-align: left;\n  vertical-align: text-top;\n  display: block;\n  margin-right: 24px;\n  outline: none;\n}\n.delevary_address .address_area .address_box .add_icon {\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  right: 15px;\n  color: #ffffff;\n  font-size: 22px;\n}\n.delevary_address .address_area .address_box h4 {\n  width: 100%;\n  margin: 0 0 0;\n  padding: 0 0;\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 400;\n  margin-top: -44px;\n  line-height: 24px;\n}\n.delevary_address .address_area .address_box h5 {\n  float: right;\n  margin: 0 0;\n  padding: 0 0;\n  color: #ffffff;\n  font-size: 12px;\n  position: absolute;\n  bottom: 15px;\n  right: 15px;\n}\n.delevary_address .address_area .address_box h5 i {\n  color: #52ca0f;\n}\n.delevary_address {\n  margin-top: 70px;\n}\n.delevary_address h3 {\n  margin: 0;\n  font-weight: normal;\n  font-size: 18px;\n  margin-bottom: 10px;\n  font-family: \"Poppins\", sans-serif;\n}\n/*------- checkout area css stop --------*/\n.dtlCheckout .billings {\n  background-color: #ece8e8;\n  padding: 1em;\n}\n.dtlCheckout .billings .billDtl {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.dtlCheckout .billings .billDtl li {\n  display: flex !important;\n  justify-content: space-between !important;\n  padding-top: 0.5em;\n  padding-bottom: 0.5em;\n}\n.dtlCheckout .billings .billDtl li span:first-child {\n  max-width: 40%;\n  width: 100%;\n}\n.dtlCheckout .billings .billDtl li:not(.amountTotal) {\n  color: #000;\n}\n.dtlCheckout .billings .billDtl li.amountTotal {\n  border-top: 1px dashed #6e7faa4d;\n  margin-top: 0.5em;\n  padding-top: 1em;\n}\n.dtlCheckout .billings .billDtl li.amountTotal .itemTitle, .dtlCheckout .billings .billDtl li.amountTotal .itemRate {\n  font-size: 1.2em;\n  font-weight: bold;\n  color: #000;\n}\n.dtlCheckout {\n  margin-top: 20px;\n}\n.dtlCheckout h3 {\n  margin: 0;\n  font-weight: normal;\n  font-size: 18px;\n  margin-bottom: 10px;\n  font-family: \"Poppins\", sans-serif;\n}\n.billHeading {\n  padding-bottom: 55px;\n}\n.billHeading .payOptTop {\n  display: flex !important;\n  justify-content: space-between !important;\n  padding-top: 1.1em;\n  align-items: center;\n}\n.billHeading .payOptTop .payTitle, .billHeading .payOptTop .newAdd {\n  font-weight: normal;\n  font-size: 18px;\n  margin-bottom: 10px;\n  font-family: \"Poppins\", sans-serif;\n}\n.billHeading .payOptTop .newAdd {\n  padding: 3px 7px;\n  font-size: 14px;\n  border: 1px solid #ff0000;\n  text-transform: capitalize;\n  background-color: transparent;\n  color: #ff0000;\n  cursor: pointer;\n  outline: none;\n  font-family: \"Poppins\", sans-serif;\n}\n.billHeading .payOptTop .newAdd:hover {\n  background-color: #fe5632;\n  color: #fff;\n}\n.billHeading .payOpt {\n  list-style: none;\n  padding: 0;\n}\n.billHeading .payOpt li:first-child {\n  padding-top: 0;\n}\n.billHeading .payOpt li {\n  display: flex !important;\n  padding-top: 0.2em;\n  padding-bottom: 0.2em;\n  justify-content: center !important;\n  align-items: center;\n}\n.billHeading .payOpt li .dtl {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center;\n}\n.billHeading .payOpt li .price {\n  margin-left: auto;\n}\n.billHeading .payOpt li .dtl .itemImgWra {\n  height: 3em;\n  width: 3em;\n  justify-content: center !important;\n  align-items: center;\n  margin-right: 1em;\n}\n.bottom-actionWrapper {\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n}\n.bottom-actionWrapper .btn-action {\n  display: flex !important;\n  background-color: #ffffff;\n  align-items: center;\n  padding: 10px 1em;\n}\n.bottom-actionWrapper .btn-action .total {\n  font-size: 1.4em;\n  font-weight: bold;\n  color: #000;\n}\n.bottom-actionWrapper .btn-action .btn-default {\n  margin-left: auto;\n  background: #ff0000;\n  cursor: pointer;\n  color: #ffffff;\n  padding: 1em 1.5em;\n  font-size: 15px;\n  border-radius: 0;\n  letter-spacing: 1.3px;\n  text-transform: uppercase;\n  border: none;\n  outline: none;\n}\n.active {\n  background: red !important;\n}\n/*------- new css start ---------*/\n.delevary_time_area {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 6px 0px;\n}\n.delevary_time_area .delevary_time_body {\n  width: 100%;\n  box-sizing: border-box;\n}\n.delevary_time_area .delevary_time_body h3 {\n  width: 100%;\n  box-sizing: border-box;\n  font-weight: normal;\n  font-size: 18px;\n  margin-bottom: 10px;\n  font-family: \"Poppins\", sans-serif;\n  color: #000;\n  text-transform: capitalize;\n}\n.delevary_time_area .delevary_time_body .delivery_box {\n  width: 100%;\n  background-color: #ece8e8;\n  padding: 1em;\n}\n.delevary_time_area .delevary_time_body .delivery_box ul {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 10px;\n}\n.delevary_time_area .delevary_time_body .delivery_box ul li {\n  display: inline-block;\n  list-style: none;\n  margin-right: 10px !important;\n}\n.delevary_time_area .delevary_time_body .delivery_box ul li:last-child {\n  margin-right: 3px !important;\n}\n.delevary_time_area .delevary_time_body .delivery_box label {\n  font-weight: 600;\n  text-transform: capitalize;\n  font-size: 15px;\n}\n.delevary_time_area .delevary_time_body .delivery_box .delivery {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n}\n.delevary_time_area .delevary_time_body .delivery_box .delivery .form-group {\n  display: inline-block;\n  width: 49%;\n}\n.delevary_time_area .delevary_time_body .delivery_box .delivery .form-group .form-control {\n  width: 100%;\n  box-sizing: border-box;\n  height: 38px;\n  padding: 8px 10px;\n  border: 1px solid #adadad;\n}\n/*------- new css stop ---------*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoZWNrb3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpSEFBQTtBQUNBLHlGQUFBO0FBQ1I7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBQ0E7QUFDQTtFQUNBLHNCQUFBO0FBRUE7QUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBR0E7QUFEQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNJLFVBQUE7QUFJSjtBQUZBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBS0E7QUFIQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFNQTtBQUpBO0VBQ0EseUJBQUE7RUFDQSwyQ0FBQTtBQU9BO0FBTEE7RUFDQSxzQkFBQTtBQVFBO0FBTkE7RUFDQSxjQUFBO0FBU0E7QUFQQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBVUE7QUFSQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBV0E7QUFSQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBV0E7QUFUQTtFQUF5RCxzQkFBQTtBQWF6RDtBQVpBO0VBQ0EsY0FBQTtBQWVBO0FBYkE7RUFDQSxjQUFBO0FBZ0JBO0FBZEE7RUFFQSxjQUFBO0FBZ0JBO0FBYkE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFnQkE7QUFkQTtF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QStEQTtBQTdEQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBZ0VBO0FBOURBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFpRUE7QUE5REE7RUFDQywwQkFBQTtBQWlFRDtBQTdEQSxrQ0FBQTtBQUNBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFnRUo7QUE5REE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7QUFpRUo7QUEvREE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBa0VKO0FBaEVBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQW1FSjtBQWpFQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQW9FSjtBQWxFQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQXFFSjtBQW5FQTtFQUNJLDRCQUFBO0FBc0VKO0FBcEVBO0VBQ0ksZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUF1RUo7QUFyRUE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXdFSjtBQXRFQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtBQXlFSjtBQXZFQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBMEVKO0FBeEVBLGlDQUFBIiwiZmlsZSI6ImNoZWNrb3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTQuMC9jc3MvYWxsLm1pbi5jc3MnKTtcclxuaHRtbCwgYm9keSB7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbm1hcmdpbjogMDtcclxuZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbnotaW5kZXg6MTtcclxuYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG4qLCA6OmFmdGVyLCA6OmJlZm9yZSB7XHJcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuaW1nIHtcclxubWF4LXdpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IGF1dG87XHJcbn1cclxuLnRvcC1uYXYge1xyXG53aWR0aDogMTAwJTtcclxuZGlzcGxheTogZmxleDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxucGFkZGluZzogMTVweCAxZW07XHJcbm1hcmdpbi10b3A6IDA7XHJcbm1hcmdpbi1ib3R0b206IDA7XHJcbmJhY2tncm91bmQtY29sb3I6ICNlYjk5Mjk7XHJcbnBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuLnRvcC1uYXYgLmJ0bi1iYWNrIHtcclxuZm9udC1zaXplOiAyZW07XHJcbmNvbG9yOiAjZmZmO1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbm91dGxpbmU6IG5vbmU7XHJcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5ib3JkZXI6IG5vbmU7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4udG9wLW5hdiAudGl0bGUge1xyXG5jb2xvcjogI2ZmZjtcclxuZm9udC1zaXplOiAxLjJlbTtcclxuZm9udC13ZWlnaHQ6IDUwMDtcclxubWFyZ2luOiAwIGF1dG87XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbn1cclxuLmhlYWRlciB7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmZTU2MzI7XHJcbmJveC1zaGFkb3c6IDBweCAycHggNXB4IHJnYigwIDAgMCAvIDI0JSk7XHJcbn1cclxuLmZ1bGwtc2NyZWVuLmNhcnQge1xyXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5jb250YWluZXIge1xyXG5wYWRkaW5nOiAwIDFlbTtcclxufVxyXG4uZGVsZXZhcnlfYWRkcmVzcyBoM3tcclxud2lkdGg6IDEwMCU7XHJcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbm1hcmdpbjogMTVweCAwIDE1cHg7XHJcbnBhZGRpbmc6IDAgMDtcclxuY29sb3I6ICMwMDAwMDA7XHJcbmZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uZGVsZXZhcnlfYWRkcmVzcyAuYWRkcmVzc19hcmVhIHtcclxud2lkdGg6IDEwMCU7XHJcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5wYWRkaW5nLWxlZnQ6IDcwcHg7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbn1cclxuLmFkZHJlc3NfYXJlYV9pbm5lciB7XHJcbm92ZXJmbG93OiBzY3JvbGw7XHJcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbnBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmFkZHJlc3NfYXJlYV9pbm5lciB1bCBsaTpudGgtb2YtdHlwZSgybikgLmFkZHJlc3NfYm94IHsgYmFja2dyb3VuZC1jb2xvcjojRkZGO31cclxuLmFkZHJlc3NfYXJlYV9pbm5lciB1bCBsaTpudGgtb2YtdHlwZSgybikgLmFkZHJlc3NfYm94IC5hZGRfaWNvbiB7XHJcbmNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5hZGRyZXNzX2FyZWFfaW5uZXIgdWwgbGk6bnRoLW9mLXR5cGUoMm4pIC5hZGRyZXNzX2JveCBoNCB7XHJcbmNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5hZGRyZXNzX2FyZWFfaW5uZXIgdWwgbGk6bnRoLW9mLXR5cGUoMm4pIC5hZGRyZXNzX2JveCBoNSB7XHJcblxyXG5jb2xvcjogIzAwMDAwMDtcclxuXHJcbn1cclxuLmFkZHJlc3NfYXJlYV9pbm5lciB1bHtcclxubWFyZ2luOiAwO1xyXG5wYWRkaW5nOiAwO1xyXG5saXN0LXN0eWxlOiBub25lO1xyXG5kaXNwbGF5OiB0YWJsZTtcclxud2lkdGg6IDEwMCU7XHJcbn1cclxuLmFkZHJlc3NfYXJlYV9pbm5lciB1bCBsaSB7XHJcbmRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbnZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuLmRlbGV2YXJ5X2FkZHJlc3MgLmFkZHJlc3NfYXJlYSAuYWRkX2FkZHJlc3Mge1xyXG4vKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXHJcbm1pbi1oZWlnaHQ6IDEyMHB4O1xyXG5iYWNrZ3JvdW5kOiAjZmYwMDAwO1xyXG5wYWRkaW5nOiAyMHB4IDE1cHg7XHJcbmJvcmRlcjogMXB4IHNvbGlkICNmZjAwMDA7XHJcbmNvbG9yOiAjZmZmO1xyXG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5mb250LXNpemU6IDI4cHg7XHJcbmJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxudmVydGljYWwtYWxpZ246IHRvcDtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5sZWZ0OiAxNnB4O1xyXG5ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDNkO1xyXG5tYXJnaW46IDEwcHggMDtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbm91dGxpbmU6bm9uZTtcclxufVxyXG4uZGVsZXZhcnlfYWRkcmVzcyAuYWRkcmVzc19hcmVhIC5hZGRfYWRkcmVzczpob3ZlcnsgYmFja2dyb3VuZC1jb2xvcjojMDAwOyBjb2xvcjojZmZmO31cclxuLmRlbGV2YXJ5X2FkZHJlc3MgLmFkZHJlc3NfYXJlYSAuYWRkcmVzc19ib3gge1xyXG53aWR0aDogMjQwcHg7XHJcbmhlaWdodDogMTIwcHg7XHJcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbnBhZGRpbmc6IDIwcHggNTBweCAyMHB4IDIwcHg7XHJcbmJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbmJhY2tncm91bmQ6ICMwMDA7XHJcbm1hcmdpbi1yaWdodDogMTJweDtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggIzAwMDAwMDJlO1xyXG5ib3JkZXI6IG5vbmU7XHJcbnRleHQtYWxpZ246IGxlZnQ7XHJcbnZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuZGlzcGxheTogYmxvY2s7XHJcbm1hcmdpbi1yaWdodDogMjRweDtcclxub3V0bGluZTpub25lO1xyXG59XHJcbi5kZWxldmFyeV9hZGRyZXNzIC5hZGRyZXNzX2FyZWEgLmFkZHJlc3NfYm94IC5hZGRfaWNvbiB7XHJcbmNvbnRlbnQ6ICcnO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRvcDogMjBweDtcclxucmlnaHQ6IDE1cHg7XHJcbmNvbG9yOiAjZmZmZmZmO1xyXG5mb250LXNpemU6IDIycHg7XHJcbn1cclxuLmRlbGV2YXJ5X2FkZHJlc3MgLmFkZHJlc3NfYXJlYSAuYWRkcmVzc19ib3ggaDQge1xyXG53aWR0aDogMTAwJTtcclxubWFyZ2luOiAwIDAgMDtcclxucGFkZGluZzogMCAwO1xyXG5jb2xvcjogI2ZmZmZmZjtcclxuZm9udC1zaXplOiAxNnB4O1xyXG5mb250LXdlaWdodDogNDAwO1xyXG5tYXJnaW4tdG9wOiAtNDRweDtcclxubGluZS1oZWlnaHQ6IDI0cHg7XHJcbn1cclxuLmRlbGV2YXJ5X2FkZHJlc3MgLmFkZHJlc3NfYXJlYSAuYWRkcmVzc19ib3ggaDUge1xyXG5mbG9hdDogcmlnaHQ7XHJcbm1hcmdpbjogMCAwO1xyXG5wYWRkaW5nOiAwIDA7XHJcbmNvbG9yOiAjZmZmZmZmO1xyXG5mb250LXNpemU6IDEycHg7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuYm90dG9tOiAxNXB4O1xyXG5yaWdodDogMTVweDtcclxufVxyXG4uZGVsZXZhcnlfYWRkcmVzcyAuYWRkcmVzc19hcmVhIC5hZGRyZXNzX2JveCBoNSBpIHtcclxuY29sb3I6ICM1MmNhMGY7XHJcbn1cclxuLmRlbGV2YXJ5X2FkZHJlc3N7IG1hcmdpbi10b3A6NzBweH1cclxuLmRlbGV2YXJ5X2FkZHJlc3MgaDMge1xyXG5tYXJnaW46IDA7XHJcbmZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbmZvbnQtc2l6ZToxOHB4O1xyXG5tYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5mb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi8qLS0tLS0tLSBjaGVja291dCBhcmVhIGNzcyBzdG9wIC0tLS0tLS0tKi9cclxuLmR0bENoZWNrb3V0IC5iaWxsaW5ncyB7XHJcbmJhY2tncm91bmQtY29sb3I6ICNlY2U4ZTg7XHJcbnBhZGRpbmc6IDFlbTtcclxufVxyXG4uZHRsQ2hlY2tvdXQgLmJpbGxpbmdzIC5iaWxsRHRsIHtcclxubWFyZ2luOiAwO1xyXG5wYWRkaW5nOiAwO1xyXG5saXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5kdGxDaGVja291dCAuYmlsbGluZ3MgLmJpbGxEdGwgbGkge1xyXG5kaXNwbGF5OiAtbXMtZmxleGJveCFpbXBvcnRhbnQ7XHJcbmRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xyXG4tbXMtZmxleC1wYWNrOiBqdXN0aWZ5IWltcG9ydGFudDtcclxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuIWltcG9ydGFudDtcclxucGFkZGluZy10b3A6IC41ZW07XHJcbnBhZGRpbmctYm90dG9tOiAuNWVtO1xyXG59XHJcbi5kdGxDaGVja291dCAuYmlsbGluZ3MgLmJpbGxEdGwgbGkgc3BhbjpmaXJzdC1jaGlsZHsgbWF4LXdpZHRoOjQwJTsgd2lkdGg6MTAwJTt9XHJcbi5kdGxDaGVja291dCAuYmlsbGluZ3MgLmJpbGxEdGwgbGk6bm90KC5hbW91bnRUb3RhbCkge1xyXG5jb2xvcjogIzAwMDtcclxufVxyXG4uZHRsQ2hlY2tvdXQgLmJpbGxpbmdzIC5iaWxsRHRsIGxpLmFtb3VudFRvdGFsIHtcclxuYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjNmU3ZmFhNGQ7XHJcbm1hcmdpbi10b3A6IC41ZW07XHJcbnBhZGRpbmctdG9wOiAxZW07XHJcbn1cclxuLmR0bENoZWNrb3V0IC5iaWxsaW5ncyAuYmlsbER0bCBsaS5hbW91bnRUb3RhbCAuaXRlbVRpdGxlLCAuZHRsQ2hlY2tvdXQgLmJpbGxpbmdzIC5iaWxsRHRsIGxpLmFtb3VudFRvdGFsIC5pdGVtUmF0ZSB7XHJcbmZvbnQtc2l6ZTogMS4yZW07XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5jb2xvcjogIzAwMDtcclxufVxyXG4uZHRsQ2hlY2tvdXR7IG1hcmdpbi10b3A6MjBweH1cclxuLmR0bENoZWNrb3V0IGgzIHtcclxubWFyZ2luOiAwO1xyXG5mb250LXdlaWdodDogbm9ybWFsO1xyXG5mb250LXNpemU6IDE4cHg7XHJcbm1hcmdpbi1ib3R0b206IDEwcHg7XHJcbmZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmJpbGxIZWFkaW5neyBwYWRkaW5nLWJvdHRvbTo1NXB4O31cclxuLmJpbGxIZWFkaW5nIC5wYXlPcHRUb3Age1xyXG5kaXNwbGF5OiAtbXMtZmxleGJveCFpbXBvcnRhbnQ7XHJcbmRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xyXG4tbXMtZmxleC1wYWNrOiBqdXN0aWZ5IWltcG9ydGFudDtcclxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuIWltcG9ydGFudDtcclxucGFkZGluZy10b3A6IDEuMWVtO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5iaWxsSGVhZGluZyAucGF5T3B0VG9wIC5wYXlUaXRsZSwgIC5iaWxsSGVhZGluZyAucGF5T3B0VG9wIC5uZXdBZGQge1xyXG5mb250LXdlaWdodDogbm9ybWFsO1xyXG5mb250LXNpemU6IDE4cHg7XHJcbm1hcmdpbi1ib3R0b206IDEwcHg7XHJcbmZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmJpbGxIZWFkaW5nIC5wYXlPcHRUb3AgLm5ld0FkZCB7XHJcbnBhZGRpbmc6IDNweCA3cHg7XHJcbmZvbnQtc2l6ZTogMTRweDtcclxuYm9yZGVyOiAxcHggc29saWQgI2ZmMDAwMDtcclxudGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5jb2xvcjogI2ZmMDAwMDtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG5vdXRsaW5lOiBub25lO1xyXG5mb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5iaWxsSGVhZGluZyAucGF5T3B0VG9wIC5uZXdBZGQ6aG92ZXJ7IGJhY2tncm91bmQtY29sb3I6I2ZlNTYzMjsgY29sb3I6I2ZmZjt9XHJcbi5iaWxsSGVhZGluZyAucGF5T3B0IHtcclxubGlzdC1zdHlsZTogbm9uZTtcclxucGFkZGluZzogMDtcclxufVxyXG4uYmlsbEhlYWRpbmcgLnBheU9wdCBsaTpmaXJzdC1jaGlsZCB7XHJcbnBhZGRpbmctdG9wOiAwO1xyXG59XHJcbi5iaWxsSGVhZGluZyAucGF5T3B0IGxpIHtcclxuZGlzcGxheTogLW1zLWZsZXhib3ghaW1wb3J0YW50O1xyXG5kaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcclxucGFkZGluZy10b3A6IC4yZW07XHJcbnBhZGRpbmctYm90dG9tOiAuMmVtO1xyXG4tbXMtZmxleC1wYWNrOiBjZW50ZXIhaW1wb3J0YW50O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciFpbXBvcnRhbnQ7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmJpbGxIZWFkaW5nIC5wYXlPcHQgbGkgLmR0bCB7XHJcbmRpc3BsYXk6IC1tcy1mbGV4Ym94IWltcG9ydGFudDtcclxuZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XHJcbi1tcy1mbGV4LXBhY2s6IGNlbnRlciFpbXBvcnRhbnQ7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyIWltcG9ydGFudDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYmlsbEhlYWRpbmcgLnBheU9wdCBsaSAucHJpY2Uge1xyXG5tYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4uYmlsbEhlYWRpbmcgLnBheU9wdCBsaSAuZHRsIC5pdGVtSW1nV3JhIHtcclxuaGVpZ2h0OiAzZW07XHJcbndpZHRoOiAzZW07XHJcbi1tcy1mbGV4LXBhY2s6IGNlbnRlciFpbXBvcnRhbnQ7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyIWltcG9ydGFudDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxubWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuLmJvdHRvbS1hY3Rpb25XcmFwcGVyIHtcclxucG9zaXRpb246IGZpeGVkO1xyXG53aWR0aDogMTAwJTtcclxuYm90dG9tOiAwO1xyXG59XHJcbi5ib3R0b20tYWN0aW9uV3JhcHBlciAuYnRuLWFjdGlvbiB7XHJcbmRpc3BsYXk6IC1tcy1mbGV4Ym94IWltcG9ydGFudDtcclxuZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbnBhZGRpbmc6IDEwcHggMWVtO1xyXG59XHJcbi5ib3R0b20tYWN0aW9uV3JhcHBlciAuYnRuLWFjdGlvbiAudG90YWwge1xyXG5mb250LXNpemU6IDEuNGVtO1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuY29sb3I6ICMwMDA7XHJcbn1cclxuLmJvdHRvbS1hY3Rpb25XcmFwcGVyIC5idG4tYWN0aW9uIC5idG4tZGVmYXVsdCB7XHJcbm1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5iYWNrZ3JvdW5kOiAjZmYwMDAwO1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbmNvbG9yOiAjZmZmZmZmO1xyXG5wYWRkaW5nOiAxZW0gMS41ZW07XHJcbmZvbnQtc2l6ZTogMTVweDtcclxuYm9yZGVyLXJhZGl1czogMDtcclxubGV0dGVyLXNwYWNpbmc6IDEuM3B4O1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5ib3JkZXI6IG5vbmU7XHJcbm91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5hY3RpdmV7XHJcblx0YmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0gbmV3IGNzcyBzdGFydCAtLS0tLS0tLS0qL1xyXG4uZGVsZXZhcnlfdGltZV9hcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDZweCAwcHg7XHJcbn1cclxuLmRlbGV2YXJ5X3RpbWVfYXJlYSAuZGVsZXZhcnlfdGltZV9ib2R5e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5kZWxldmFyeV90aW1lX2FyZWEgLmRlbGV2YXJ5X3RpbWVfYm9keSBoM3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLmRlbGV2YXJ5X3RpbWVfYXJlYSAuZGVsZXZhcnlfdGltZV9ib2R5IC5kZWxpdmVyeV9ib3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlOGU4O1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG59XHJcbi5kZWxldmFyeV90aW1lX2FyZWEgLmRlbGV2YXJ5X3RpbWVfYm9keSAuZGVsaXZlcnlfYm94IHVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbn1cclxuLmRlbGV2YXJ5X3RpbWVfYXJlYSAuZGVsZXZhcnlfdGltZV9ib2R5IC5kZWxpdmVyeV9ib3ggdWwgbGl7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRlbGV2YXJ5X3RpbWVfYXJlYSAuZGVsZXZhcnlfdGltZV9ib2R5IC5kZWxpdmVyeV9ib3ggdWwgbGk6bGFzdC1jaGlsZHtcclxuICAgIG1hcmdpbi1yaWdodDogM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRlbGV2YXJ5X3RpbWVfYXJlYSAuZGVsZXZhcnlfdGltZV9ib2R5IC5kZWxpdmVyeV9ib3ggbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5kZWxldmFyeV90aW1lX2FyZWEgLmRlbGV2YXJ5X3RpbWVfYm9keSAuZGVsaXZlcnlfYm94IC5kZWxpdmVyeXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwO1xyXG59XHJcbi5kZWxldmFyeV90aW1lX2FyZWEgLmRlbGV2YXJ5X3RpbWVfYm9keSAuZGVsaXZlcnlfYm94IC5kZWxpdmVyeSAuZm9ybS1ncm91cHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA0OSU7XHJcbn1cclxuLmRlbGV2YXJ5X3RpbWVfYXJlYSAuZGVsZXZhcnlfdGltZV9ib2R5IC5kZWxpdmVyeV9ib3ggLmRlbGl2ZXJ5IC5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWRhZGFkO1xyXG59XHJcbi8qLS0tLS0tLSBuZXcgY3NzIHN0b3AgLS0tLS0tLS0tKi8iXX0= */");

/***/ }),

/***/ "v3IU":
/*!*****************************************************!*\
  !*** ./src/app/checkout/checkout-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CheckoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageRoutingModule", function() { return CheckoutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout.page */ "E2Rb");




const routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutPage"]
    }
];
let CheckoutPageRoutingModule = class CheckoutPageRoutingModule {
};
CheckoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckoutPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=checkout-checkout-module.js.map