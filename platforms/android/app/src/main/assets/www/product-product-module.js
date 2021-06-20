(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"],{

/***/ "/0UB":
/*!*****************************************!*\
  !*** ./src/app/product/product.page.ts ***!
  \*****************************************/
/*! exports provided: ProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPage", function() { return ProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product.page.html */ "wono");
/* harmony import */ var _product_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.page.scss */ "OE30");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");









let ProductPage = class ProductPage {
    constructor(http, navCtrl, storage, loadingController, alertController, route, toastController) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.route = route;
        this.toastController = toastController;
        this.appUrl_product = "https://theitvibe.com/project/ihose/api/getProduct";
        this.img_url = 'https://theitvibe.com/project/ihose/uploads/product/';
        this.cart_data = [];
        this.cartcount = 0;
        this.cart = [];
        this.loader_val = true;
        this.pageNo = 1;
        this.dataMenu = [];
        this.limit = 9;
        this.count = 0;
        this.standard = '';
        this.size = '';
        this.name = '';
        this.pressure = '';
        this.part_type = '';
        this.description = '';
        this.assembly_name = '';
        this.mk_name = '';
        this.part_no = '';
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params) {
                //let queryParams = params;
                if (params.name) {
                }
                this.name = params.name;
                this.standard = params.standard;
                this.size = params.size;
                this.pressure = params.pressure;
                this.part_type = params.part_type;
                this.description = params.description;
                this.assembly_name = params.assembly_name;
                this.mk_name = params.maker;
                this.part_no = params.part_no;
                //console.log(this.size);
            }
        });
    }
    storePage(page) {
        this.storage.set("goTo", page);
    }
    back() {
        this.storage.get("goTo").then(val => {
            if (val) {
                this.page = val;
                this.navCtrl.navigateForward('' + this.page);
            }
            else {
                this.navCtrl.navigateForward('/home');
            }
        });
        //this.location.back();
    }
    doRefresh(event) {
        setTimeout(() => {
            //this.listing_menu();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
            if (!this.mainMenuId) {
                this.mainMenuId = 0;
            }
            if (!this.search_key) {
                this.search_key = '';
            }
            var dataPar = {
                "name": this.name,
                "standard": this.standard,
                "size": this.size,
                "pressure": this.pressure,
                "assembly_name": this.assembly_name,
                "part_type": this.part_type,
                "description": this.description,
                "search": this.search_key,
                "mk_name": this.mk_name,
                "part_no": this.part_no,
            };
            this.http.post(this.appUrl_product, dataPar)
                .subscribe(res => {
                this.res = res.json();
                //console.log(this.res);
                if (this.res && this.res.menu_list) {
                    // loading.dismiss();
                    event.target.complete();
                    this.loader_val = false;
                    this.menu_list = this.res.menu_list;
                    if (this.menu_list && this.menu_list.length > 0) {
                        this.dataMenu = [];
                        for (let i = 0; i < this.limit; i++) {
                            if (this.menu_list[i]) {
                                this.dataMenu.push(this.menu_list[i]);
                            }
                        }
                    }
                    else {
                        this.dataMenu = [];
                    }
                    for (let pro of this.menu_list) {
                        for (let p of this.cart_data) {
                            if (p.hp_id == pro.hp_id) {
                                pro.quantity = p.quantity;
                                //break;
                            }
                        }
                    }
                }
                else {
                    //alert("Server error");
                    // loading.dismiss();
                    this.loader_val = false;
                    event.target.complete();
                }
            }, (err) => {
                //console.log(err);
                // loading.dismiss();
                this.loader_val = false;
                event.target.complete();
            });
        }, 1500);
    }
    loadData(event) {
        //console.log(event);
        this.getScrollData(true, event);
    }
    getScrollData(isFirstLoad, event) {
        setTimeout(() => {
            this.dataMenu = [];
            this.limit = this.limit + 9;
            for (let i = 0; i < this.limit; i++) {
                if (this.menu_list[i]) {
                    this.dataMenu.push(this.menu_list[i]);
                }
            }
            this.pageNo++;
            if (isFirstLoad)
                event.target.complete();
        }, 1000);
    }
    listing() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log(this.search_key);
            const loading = yield this.loadingController.create({
                message: ''
            });
            //await loading.present();
            this.loader_val = true;
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
            if (!this.mainMenuId) {
                this.mainMenuId = 0;
            }
            if (!this.search_key) {
                this.search_key = '';
            }
            var dataPar = {
                "name": this.name,
                "standard": this.standard,
                "size": this.size,
                "pressure": this.pressure,
                "assembly_name": this.assembly_name,
                "part_type": this.part_type,
                "description": this.description,
                "search": this.search_key,
                "mk_name": this.mk_name,
                "part_no": this.part_no,
            };
            this.http.post(this.appUrl_product, dataPar)
                .subscribe(res => {
                this.res = res.json();
                // console.log(this.res);
                if (this.res && this.res.menu_list) {
                    // loading.dismiss();
                    this.loader_val = false;
                    this.menu_list = this.res.menu_list;
                    if (this.menu_list && this.menu_list.length > 0) {
                        this.dataMenu = [];
                        for (let i = 0; i < this.limit; i++) {
                            if (this.menu_list[i]) {
                                this.dataMenu.push(this.menu_list[i]);
                            }
                        }
                    }
                    else {
                        this.dataMenu = [];
                    }
                    for (let pro of this.menu_list) {
                        for (let p of this.cart_data) {
                            if (p.hp_id == pro.hp_id) {
                                pro.quantity = p.quantity;
                                //break;
                            }
                        }
                    }
                }
                else {
                    //alert("Server error");
                    // loading.dismiss();
                    this.loader_val = false;
                }
            }, (err) => {
                //console.log(err);
                // loading.dismiss();
                this.loader_val = false;
            });
        });
    }
    ionViewWillEnter() {
        // this.storage.remove("userCart");
        this.listing();
        this.storage.get("userCart").then(val => {
            if (val) {
                this.userCart = val;
                this.cart_data = val;
                //console.log(val);
            }
        });
        this.getCartItemCount();
    }
    addToCart(index, hp_id, menulist) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Added',
                duration: 1000,
                animated: true,
                //color:'success',
                position: 'middle',
                cssClass: 'my-toast-class',
            });
            let added = false;
            // var data ={
            //   "id": menu_id,
            //    "name":menu_name,
            //    "price":menu_price,
            //    "quantity":1,
            //    "image":menu_image
            // }
            this.storage.get("userCart").then(val => {
                this.abc = [];
                let added = false;
                if (val) {
                    this.cart_data = val;
                    for (let p of this.cart_data) {
                        if (p.hp_id == menulist.hp_id) {
                            this.dataMenu[index].quantity += 1;
                            //this.menu_list[index].quantity += 1;
                            p.quantity = parseInt(p.quantity) + 1;
                            added = true;
                            //this.cart_data.push(menulist);
                            this.storage.set("userCart", this.cart_data).then(val => { this.getCartItemCount(); });
                            //this.getCartItemCount();
                            toast.present();
                            break;
                        }
                    }
                    if (!added) {
                        menulist.quantity = 1;
                        this.cart_data.push(menulist);
                        this.storage.set("userCart", this.cart_data).then(val => { this.getCartItemCount(); });
                        //this.getCartItemCount();
                        toast.present();
                    }
                    //else{
                    //   this.getCartItemCount();
                    //   this.storage.set("userCart", this.cart_data);
                    // }
                }
                else {
                    menulist.quantity = 1;
                    this.cart_data.push(menulist);
                    //this.getCartItemCount();
                    this.storage.set("userCart", this.cart_data).then(val => { this.getCartItemCount(); });
                    toast.present();
                }
            });
        });
    }
    decrementQty(index, hp_id, menulist) {
        /*. if item passed then item.qty. */
        if (this.dataMenu[index].quantity - 1 <= 0) {
            this.dataMenu[index].quantity = 0;
            //this.menu_list[index].quantity = 0;
            for (let p of this.cart_data) {
                if (p.hp_id == menulist.hp_id) {
                    p.quantity = 0;
                    //console.log(this.cart_data);
                    this.storage.set("userCart", this.cart_data);
                    this.getCartItemCount();
                    break;
                }
            }
        }
        else {
            this.dataMenu[index].quantity -= 1;
            //this.menu_list[index].quantity -= 1;
            for (let p of this.cart_data) {
                if (p.hp_id == menulist.hp_id) {
                    p.quantity = parseInt(this.dataMenu[index].quantity);
                    //console.log(this.cart_data);
                    this.storage.set("userCart", this.cart_data);
                    this.getCartItemCount();
                    break;
                }
            }
            //console.log('item_2-> ' + index +  '  '+this.menu_list[index].quantity);
        }
    }
    incrementQty(index, hp_id, menulist) {
        /*. if item passed then item.qty. */
        if (this.dataMenu[index].quantity > 0) {
            this.dataMenu[index].quantity += 1;
            //this.menu_list[index].quantity += 1;
            for (let p of this.cart_data) {
                if (p.hp_id == menulist.hp_id) {
                    p.quantity = parseInt(this.dataMenu[index].quantity);
                    //console.log(this.cart_data);
                    this.storage.set("userCart", this.cart_data);
                    this.getCartItemCount();
                    break;
                }
            }
        }
        // else{
        //   this.menu_list[index].quantity = 1;
        // }
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
ProductPage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
ProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product',
        template: _raw_loader_product_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductPage);



/***/ }),

/***/ "OE30":
/*!*******************************************!*\
  !*** ./src/app/product/product.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Montserrat\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.automotive_area {\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  box-sizing: border-box;\n  overflow: scroll;\n}\n.automotive_area:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 31%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url('sape1.png');\n  z-index: 0;\n}\n.container {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 30px;\n}\n.automotive_body {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n}\n.header_area {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: center;\n  padding: 30px 0px 50px;\n}\n.header_area h1 {\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  color: #ffffff;\n  font-size: 18px;\n  font-weight: 500;\n}\n.header_area .btn-back {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 3px 0;\n  outline: none;\n  float: left;\n  margin: 11px 0;\n}\n.header_area .btn-cart {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 3px 0;\n  outline: none;\n  float: right;\n  margin: 4px 0;\n}\n.header_area .logo {\n  display: inline-block;\n  width: 35%;\n  margin: auto;\n}\n.header_area .logo img {\n  width: 100%;\n}\n.search_box {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  border-radius: 5px;\n  position: relative;\n  z-index: 1;\n  margin: 0 0 60px;\n}\n.search_box .form-control {\n  width: 100%;\n  height: 50px;\n  background: #ffffff;\n  border: 1px solid #ffffff;\n  font-size: 14px;\n  font-weight: 500;\n  color: #868686;\n  padding: 10px 10px 10px 45px;\n  box-shadow: 0 0 30px #e03b1b;\n  outline: none;\n}\n.search_box .form-control::placeholder {\n  font-weight: 500;\n  color: #868686;\n}\n.search_box .icon {\n  position: absolute;\n  top: 7px;\n  left: 15px;\n  font-size: 32px;\n  color: #868686;\n}\n.automotive_body h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 10px;\n  margin: 0 0 40px;\n  font-size: 18px;\n  font-weight: 600;\n  color: #000000;\n  border-bottom: 1px dashed #949494;\n}\n.form-group {\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  margin: 0 0 25px;\n}\nselect.form-control {\n  width: 100%;\n  height: 52px;\n  border-radius: 10px;\n  border: 1px solid #8e8e8d;\n  font-size: 14px;\n  font-weight: 400;\n  color: #616161;\n  padding: 15px 15px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: none;\n}\n.form-group .arrow {\n  position: absolute;\n  top: 17px;\n  right: 17px;\n}\nselect.form-control:focus {\n  border-color: #e9492a;\n}\n.form-group label {\n  position: absolute;\n  top: -10px;\n  left: 12px;\n  background: #ffffff;\n  font-size: 15px;\n  font-weight: 600;\n  color: #000000;\n  padding: 0 2px;\n}\n.btn {\n  width: 100%;\n  height: 52px;\n  background: #e9492a;\n  border: 1px solid #e9492a;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 500;\n  outline: none;\n  border-radius: 10px;\n  letter-spacing: 1px;\n}\n.automotive_body ul {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 15px;\n  margin: 0 0 30px;\n  border-bottom: 1px dashed #949494;\n  display: flex !important;\n  justify-content: space-between !important;\n}\n.automotive_body ul.filter li {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 10px;\n  margin: 0 5px 0 0;\n  font-size: 15px;\n  font-weight: 500;\n  color: #000000;\n  list-style: none;\n  text-align: center;\n  position: relative;\n}\n.automotive_body ul.filter li:last-child {\n  margin: 0 0 0 0;\n}\n.automotive_body ul.filter li:after {\n  content: \"\";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #e85a42;\n  opacity: 0;\n}\n.automotive_body ul.filter li.active {\n  color: #e85a42;\n}\n.automotive_body ul.filter li.active:after {\n  opacity: 1;\n}\n.product_select {\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0 0 20px;\n  display: flex !important;\n  justify-content: space-between !important;\n}\n.check_box {\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.check_box input[type=radio] {\n  display: none;\n}\n.check_box span {\n  font-size: 12px;\n  width: 100%;\n  box-sizing: border-box;\n  display: block;\n  text-align: center;\n  border: 1px solid #000;\n  padding: 7px 10px;\n  border-radius: 30px;\n  transition: 0.5s;\n}\n.check_box input[type=radio]:checked ~ span {\n  color: #e85a42;\n  border-color: #e85a42;\n}\n.form-group.form-radio label.radio-inline {\n  position: relative;\n  left: auto;\n  top: auto;\n  font-size: 14px;\n  text-transform: capitalize;\n  font-weight: 500;\n}\n.product_area {\n  width: 100%;\n  box-sizing: border-box;\n}\n.product_area h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 20px;\n  color: #000000;\n  font-size: 18px;\n  font-weight: 600;\n  border: none;\n}\n.product_area h3 .btn-see {\n  outline: none;\n  padding: 0 0;\n  margin: 0 0;\n  border: none;\n  font-size: 15px;\n  font-weight: 400;\n  color: #000000;\n  float: right;\n}\n.product_box {\n  width: 100%;\n  min-height: 109px;\n  box-sizing: border-box;\n  position: relative;\n  padding-left: 110px;\n  margin: 0 0 20px;\n}\n.product_box h4 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 10px;\n  font-size: 16px;\n  font-weight: 600;\n}\n.product_box p {\n  width: 100%;\n  box-sizing: border-box;\n  color: #000;\n  font-weight: 400;\n  font-size: 14px;\n  margin: 0 0 15px;\n}\n.product_box h5 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 0;\n  font-size: 16px;\n  font-weight: 500;\n}\n.product_box h5 .price {\n  float: right;\n  font-size: 16px;\n  font-weight: 600;\n  color: #e54b25;\n}\n.product_box h5 .price strong {\n  font-weight: 500;\n  color: #8a8a8a;\n}\n.product_box .img_box {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 97px;\n  height: 109px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8ebe7;\n  border-radius: 15px;\n  overflow: hidden;\n  padding: 10px 10px;\n}\n.category_body {\n  width: 100%;\n  box-sizing: border-box;\n  min-height: 240px;\n}\n.category_body .category_box {\n  width: 100%;\n  float: left;\n  box-sizing: border-box;\n  border: 1px solid #eaeaea;\n  margin: 0 10px 20px 0;\n  max-width: 30%;\n  text-align: center;\n  border-radius: 10px;\n  padding: 15px 12px;\n  min-height: 190px;\n}\n.category_body .category_box:nth-of-type(3n) {\n  max-width: 32%;\n  margin-right: 0;\n}\n.category_body .category_box p {\n  width: 100%;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #1d1d1b;\n  margin: 0 0 20px;\n}\n.category_body .category_box .img_box {\n  width: 67px;\n  height: 67px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #eaeaea;\n  background: #ffffff;\n  border-radius: 10px;\n  margin: 0 auto 12px;\n}\n.category_body .category_box i {\n  font-size: 20px;\n  color: #000;\n}\n.category_body .category_box:hover {\n  background: #e54b25;\n  border-color: #e54b25;\n  box-shadow: 2px 3px 5px #a9a6a6;\n}\n.category_body .category_box:hover p, .category_body .category_box:hover i {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHlGQUFBO0FBQ0EsK0hBQUE7QUFDQSxxTUFBQTtBQUNSO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQUNKO0FBRUE7RUFDSSxzQkFBQTtBQUNKO0FBQ0E7RUFBd0IscUNBQUE7QUFHeEI7QUFGQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBS0o7QUFIQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBTUo7QUFKQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7QUFPRjtBQUxBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFRRjtBQU5BO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFTRjtBQVBBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBVUY7QUFSQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFXRjtBQVRBO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBWUo7QUFWQTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQWFKO0FBWEE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7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QTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFnREo7QUE1Q0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQStDSjtBQTdDQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtBQWdESjtBQTlDQTtFQUNJLFdBQUE7QUFpREoiLCJmaWxlIjoicHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTQuMC9jc3MvYWxsLm1pbi5jc3MnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGVyaWFsLWRlc2lnbi1pY29uaWMtZm9udC8yLjIuMC9jc3MvbWF0ZXJpYWwtZGVzaWduLWljb25pYy1mb250Lm1pbi5jc3MnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XHJcbmh0bWwsIGJvZHkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OjE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxufVxyXG4qLCA6OmFmdGVyLCA6OmJlZm9yZSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDZ7IGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7fVxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5hdXRvbW90aXZlX2FyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuLmF1dG9tb3RpdmVfYXJlYTpiZWZvcmV7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzElO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvc2FwZTEucG5nKTtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwcHggMzBweDtcclxufVxyXG4uYXV0b21vdGl2ZV9ib2R5e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4uaGVhZGVyX2FyZWF7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzMHB4IDBweCA1MHB4O1xyXG59XHJcbi5oZWFkZXJfYXJlYSBoMXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwIDA7XHJcbiAgbWFyZ2luOiAwIDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmhlYWRlcl9hcmVhIC5idG4tYmFja3tcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogM3B4IDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46IDExcHggMDtcclxufVxyXG4uaGVhZGVyX2FyZWEgLmJ0bi1jYXJ0e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAzcHggMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG59XHJcbi5oZWFkZXJfYXJlYSAubG9nb3tcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmhlYWRlcl9hcmVhIC5sb2dvIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5zZWFyY2hfYm94IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIG1hcmdpbjogMCAwIDYwcHg7XHJcbn1cclxuLnNlYXJjaF9ib3ggLmZvcm0tY29udHJvbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzg2ODY4NjtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCA0NXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4IHJnYigyMjQgNTkgMjcpO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnNlYXJjaF9ib3ggLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXJ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzg2ODY4NjtcclxufVxyXG4uc2VhcmNoX2JveCAuaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogN3B4O1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGNvbG9yOiAjODY4Njg2O1xyXG59XHJcbi5hdXRvbW90aXZlX2JvZHkgaDMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMCAwIDEwcHg7XHJcbiAgbWFyZ2luOiAwIDAgNDBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM5NDk0OTQ7XHJcbn1cclxuLmZvcm0tZ3JvdXB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwIDAgMjVweDtcclxufVxyXG5zZWxlY3QuZm9ybS1jb250cm9sIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOGU4ZThkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjNjE2MTYxO1xyXG4gIHBhZGRpbmc6IDE1cHggMTVweDtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmZvcm0tZ3JvdXAgLmFycm93e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE3cHg7XHJcbiAgcmlnaHQ6IDE3cHg7XHJcbn1cclxuc2VsZWN0LmZvcm0tY29udHJvbDpmb2N1c3tcclxuICBib3JkZXItY29sb3I6ICNlOTQ5MmE7XHJcbn1cclxuLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xMHB4O1xyXG4gIGxlZnQ6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBwYWRkaW5nOiAwIDJweDtcclxufVxyXG4uYnRuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgYmFja2dyb3VuZDogI2U5NDkyYTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTk0OTJhO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5hdXRvbW90aXZlX2JvZHkgdWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICBtYXJnaW46IDAgMCAzMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjOTQ5NDk0O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3ghaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5IWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiFpbXBvcnRhbnQ7XHJcbn1cclxuLmF1dG9tb3RpdmVfYm9keSB1bC5maWx0ZXIgbGkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwIDEwcHg7XHJcbiAgICBtYXJnaW46IDAgNXB4IDAgMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmF1dG9tb3RpdmVfYm9keSB1bC5maWx0ZXIgbGk6bGFzdC1jaGlsZHtcclxuICAgIG1hcmdpbjogMCAwIDAgMDtcclxufVxyXG4uYXV0b21vdGl2ZV9ib2R5IHVsLmZpbHRlciBsaTphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTFweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U4NWE0MjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuLmF1dG9tb3RpdmVfYm9keSB1bC5maWx0ZXIgbGkuYWN0aXZle1xyXG4gICAgY29sb3I6ICNlODVhNDI7XHJcbn1cclxuLmF1dG9tb3RpdmVfYm9keSB1bC5maWx0ZXIgbGkuYWN0aXZlOmFmdGVye1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4ucHJvZHVjdF9zZWxlY3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3ghaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5IWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiFpbXBvcnRhbnQ7XHJcbn1cclxuLmNoZWNrX2JveCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5jaGVja19ib3ggaW5wdXRbdHlwZT1cInJhZGlvXCJde1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY2hlY2tfYm94IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgcGFkZGluZzogN3B4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG4uY2hlY2tfYm94IGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkIH4gc3BhbntcclxuICAgIGNvbG9yOiAjZTg1YTQyO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTg1YTQyO1xyXG59XHJcbi5mb3JtLWdyb3VwLmZvcm0tcmFkaW97fVxyXG4uZm9ybS1ncm91cC5mb3JtLXJhZGlvIGxhYmVsLnJhZGlvLWlubGluZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ucHJvZHVjdF9hcmVhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5wcm9kdWN0X2FyZWEgaDN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5wcm9kdWN0X2FyZWEgaDMgLmJ0bi1zZWV7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5wcm9kdWN0X2JveHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTA5cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMTBweDtcclxuICAgIG1hcmdpbjogMCAwIDIwcHg7XHJcbn1cclxuLnByb2R1Y3RfYm94IGg0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnByb2R1Y3RfYm94IHAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMTVweDtcclxufVxyXG4ucHJvZHVjdF9ib3ggaDV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMCAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ucHJvZHVjdF9ib3ggaDUgLnByaWNle1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjZTU0YjI1O1xyXG59XHJcbi5wcm9kdWN0X2JveCBoNSAucHJpY2Ugc3Ryb25ne1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjOGE4YThhO1xyXG59XHJcbi5wcm9kdWN0X2JveCAuaW1nX2JveHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogOTdweDtcclxuICAgIGhlaWdodDogMTA5cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZWJlNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG59XHJcblxyXG4uY2F0ZWdvcnlfYm9keSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtaW4taGVpZ2h0OiAyNDBweDtcclxufVxyXG4uY2F0ZWdvcnlfYm9keSAuY2F0ZWdvcnlfYm94IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgIG1hcmdpbjogMCAxMHB4IDIwcHggMDtcclxuICAgIG1heC13aWR0aDogMzAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMTJweDtcclxuICAgIG1pbi1oZWlnaHQ6IDE5MHB4O1xyXG59XHJcbi5jYXRlZ29yeV9ib2R5IC5jYXRlZ29yeV9ib3g6bnRoLW9mLXR5cGUoM24pe1xyXG4gICAgbWF4LXdpZHRoOiAzMiU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuLmNhdGVnb3J5X2JvZHkgLmNhdGVnb3J5X2JveCBwe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMWQxZDFiO1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweDtcclxufVxyXG4uY2F0ZWdvcnlfYm9keSAuY2F0ZWdvcnlfYm94IC5pbWdfYm94IHtcclxuICAgIHdpZHRoOiA2N3B4O1xyXG4gICAgaGVpZ2h0OiA2N3B4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDEycHg7XHJcbn1cclxuLmNhdGVnb3J5X2JvZHkgLmNhdGVnb3J5X2JveCAuaW1nX2JveCBpbWd7fVxyXG5cclxuLmNhdGVnb3J5X2JvZHkgLmNhdGVnb3J5X2JveCBpe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuLmNhdGVnb3J5X2JvZHkgLmNhdGVnb3J5X2JveDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTU0YjI1O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTU0YjI1O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDNweCA1cHggcmdiKDE2OSAxNjYgMTY2KTtcclxufVxyXG4uY2F0ZWdvcnlfYm9keSAuY2F0ZWdvcnlfYm94OmhvdmVyIHAsIC5jYXRlZ29yeV9ib2R5IC5jYXRlZ29yeV9ib3g6aG92ZXIgaXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */");

/***/ }),

/***/ "cjwk":
/*!***************************************************!*\
  !*** ./src/app/product/product-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProductPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageRoutingModule", function() { return ProductPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.page */ "/0UB");




const routes = [
    {
        path: '',
        component: _product_page__WEBPACK_IMPORTED_MODULE_3__["ProductPage"]
    }
];
let ProductPageRoutingModule = class ProductPageRoutingModule {
};
ProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductPageRoutingModule);



/***/ }),

/***/ "qvFY":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageModule", function() { return ProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-routing.module */ "cjwk");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product.page */ "/0UB");







let ProductPageModule = class ProductPageModule {
};
ProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _product_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductPageRoutingModule"]
        ],
        declarations: [_product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"]]
    })
], ProductPageModule);



/***/ }),

/***/ "wono":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content [fullscreen]=\"true\">\n  \n    <div class=\"automotive_area\">\n      <div class=\"container\">\n          <div class=\"automotive_body\">\n              <div class=\"header_area\">\n                  <button class=\"btn-back\" routerLink=\"/home\" (click)=\"storePage('home')\"><img src=\"assets/images/back.png\" alt=\"back\" title=\"\" /></button>\n                  <div class=\"logo\"><img src=\"assets/images/logo2.png\" alt=\"logo\" title=\"\"></div>\n                  <button class=\"btn-cart\"><img src=\"assets/images/cart.png\" alt=\"back\" title=\"\" /></button>\n              </div>\n              <div class=\"search_box\">\n                  <div class=\"icon\"><i class=\"zmdi zmdi-search\"></i></div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Search Products...\" />\n              </div>\n              \n              <div class=\"product_area\">\n                    <h3>\n                        Trending Products\n                        \n                    </h3>\n                  <div class=\"product_box\" routerLink=\"/product-details/1\">\n                    <div class=\"img_box\"><img src=\"assets/images/product-details.png\"></div>\n                    <h4>R2AT - 20.7 MPA</h4>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n                    <h5>\n                        Size : 3/16\"\n                        <div class=\"price\">INR 50<strong>/Meter</strong></div>\n                      </h5>\n                  </div>\n                  <div class=\"product_box\" routerLink=\"/product-details/1\">\n                    <div class=\"img_box\"><img src=\"assets/images/product-details.png\"></div>\n                    <h4>R2AT - 20.7 MPA</h4>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n                    <h5>\n                        Size : 3/16\"\n                        <div class=\"price\">INR 50<strong>/Meter</strong></div>\n                      </h5>\n                  </div>\n              </div>\n          </div>\n      </div>\n    </div>\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=product-product-module.js.map