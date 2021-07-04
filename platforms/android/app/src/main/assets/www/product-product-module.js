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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Montserrat\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.automotive_area {\n  width: 100%;\n  height: auto;\n  position: relative;\n  box-sizing: border-box;\n  overflow: scroll;\n}\n.automotive_area:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 40%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url('sape1.png');\n  z-index: 0;\n}\n.container {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 30px;\n}\n.automotive_body {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n}\n.header_area {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: center;\n  padding: 18px 0px 24px;\n}\n.header_area h1 {\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  color: #ffffff;\n  font-size: 18px;\n  font-weight: 500;\n}\n.header_area .btn-back {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 1px 0;\n  outline: none;\n  float: left;\n  max-width: 22px;\n}\n.header_area .btn-cart {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 0px 0;\n  outline: none;\n  float: right;\n  max-width: 32px;\n}\n.header_area .logo {\n  display: inline-block;\n  width: 100%;\n  margin: auto;\n  max-width: 100px;\n}\n.header_area .logo img {\n  width: 100%;\n}\n.search_box {\n  width: 97%;\n  box-sizing: border-box;\n  overflow: hidden;\n  border-radius: 6px;\n  position: relative;\n  z-index: 1;\n  margin: 0 0 58px;\n  box-shadow: 0px 0px 7px #0000001c;\n  margin-left: auto;\n  margin-right: auto;\n}\n.search_box .form-control {\n  width: 100%;\n  height: 48px;\n  background: #ffffff;\n  border: 1px solid #ffffff;\n  font-size: 14px;\n  font-weight: 500;\n  color: #868686;\n  padding: 10px 10px 10px 45px;\n  /* box-shadow: 0 0 0px rgb(0, 0, 0); */\n  outline: none;\n}\n.search_box .form-control::placeholder {\n  font-weight: 500;\n  color: #868686;\n}\n.search_box .icon {\n  position: absolute;\n  top: 9px;\n  left: 15px;\n  font-size: 26px;\n  color: #bebebe;\n}\n.form-group {\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  margin: 0 0 25px;\n}\nselect.form-control {\n  width: 100%;\n  height: 52px;\n  border-radius: 10px;\n  border: 1px solid #8e8e8d;\n  font-size: 14px;\n  font-weight: 400;\n  color: #616161;\n  padding: 15px 15px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: none;\n}\n.form-group .arrow {\n  position: absolute;\n  top: 17px;\n  right: 17px;\n}\nselect.form-control:focus {\n  border-color: #e9492a;\n}\n.form-group label {\n  position: absolute;\n  top: -10px;\n  left: 12px;\n  background: #ffffff;\n  font-size: 15px;\n  font-weight: 600;\n  color: #000000;\n  padding: 0 2px;\n}\n.btn {\n  width: 100%;\n  height: 52px;\n  background: #e9492a;\n  border: 1px solid #e9492a;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 500;\n  outline: none;\n  border-radius: 10px;\n  letter-spacing: 1px;\n}\n.automotive_body ul {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 15px;\n  margin: 0 0 30px;\n  border-bottom: 1px dashed #949494;\n  display: flex !important;\n  justify-content: space-between !important;\n}\n.automotive_body ul.filter li {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 10px;\n  margin: 0 5px 0 0;\n  font-size: 15px;\n  font-weight: 500;\n  color: #000000;\n  list-style: none;\n  text-align: center;\n  position: relative;\n}\n.automotive_body ul.filter li:last-child {\n  margin: 0 0 0 0;\n}\n.automotive_body ul.filter li:after {\n  content: \"\";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #e85a42;\n  opacity: 0;\n}\n.automotive_body ul.filter li.active {\n  color: #e85a42;\n}\n.automotive_body ul.filter li.active:after {\n  opacity: 1;\n}\n.product_select {\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0 0 20px;\n  display: flex !important;\n  justify-content: space-between !important;\n}\n.check_box {\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.check_box input[type=radio] {\n  display: none;\n}\n.check_box span {\n  font-size: 12px;\n  width: 100%;\n  box-sizing: border-box;\n  display: block;\n  text-align: center;\n  border: 1px solid #000;\n  padding: 7px 10px;\n  border-radius: 30px;\n  transition: 0.5s;\n}\n.check_box input[type=radio]:checked ~ span {\n  color: #e85a42;\n  border-color: #e85a42;\n}\n.form-group.form-radio label.radio-inline {\n  position: relative;\n  left: auto;\n  top: auto;\n  font-size: 14px;\n  text-transform: capitalize;\n  font-weight: 500;\n}\n.product_area {\n  width: 100%;\n  box-sizing: border-box;\n}\n.product_area h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 20px;\n  color: #000000;\n  font-size: 18px;\n  font-weight: 600;\n  border: none;\n}\n.product_area h3 .btn-see {\n  outline: none;\n  padding: 0 0;\n  margin: 0 0;\n  border: none;\n  font-size: 15px;\n  font-weight: 400;\n  color: #000000;\n  float: right;\n}\n.product_box {\n  width: 100%;\n  min-height: 109px;\n  box-sizing: border-box;\n  position: relative;\n  padding-left: 110px;\n  margin: 0 0 20px;\n}\n.product_box h4 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 10px;\n  font-size: 16px;\n  font-weight: 600;\n}\n.product_box p {\n  width: 100%;\n  box-sizing: border-box;\n  color: #000;\n  font-weight: 400;\n  font-size: 14px;\n  margin: 0 0 15px;\n}\n.product_box h5 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 0;\n  font-size: 16px;\n  font-weight: 500;\n}\n.product_box h5 .price {\n  float: right;\n  font-size: 16px;\n  font-weight: 600;\n  color: #e54b25;\n}\n.product_box h5 .price strong {\n  font-weight: 500;\n  color: #8a8a8a;\n}\n.product_box .img_box {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 97px;\n  height: 109px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8ebe7;\n  border-radius: 15px;\n  overflow: hidden;\n  padding: 10px 10px;\n}\n.category_body {\n  width: 100%;\n  box-sizing: border-box;\n  min-height: 240px;\n}\n.category_body .category_box {\n  width: 100%;\n  float: left;\n  box-sizing: border-box;\n  border: 1px solid #eaeaea;\n  margin: 0 10px 20px 0;\n  max-width: 30%;\n  text-align: center;\n  border-radius: 10px;\n  padding: 15px 12px;\n  min-height: 190px;\n}\n.category_body .category_box:nth-of-type(3n) {\n  max-width: 32%;\n  margin-right: 0;\n}\n.category_body .category_box p {\n  width: 100%;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #1d1d1b;\n  margin: 0 0 20px;\n}\n.category_body .category_box .img_box {\n  width: 67px;\n  height: 67px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #eaeaea;\n  background: #ffffff;\n  border-radius: 10px;\n  margin: 0 auto 12px;\n}\n.category_body .category_box i {\n  font-size: 20px;\n  color: #000;\n}\n.category_body .category_box:hover {\n  background: #e54b25;\n  border-color: #e54b25;\n  box-shadow: 2px 3px 5px #a9a6a6;\n}\n.category_body .category_box:hover p, .category_body .category_box:hover i {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHlGQUFBO0FBQ0EsK0hBQUE7QUFDQSxxTUFBQTtBQUNSO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQUNKO0FBRUE7RUFDSSxzQkFBQTtBQUNKO0FBQ0E7RUFBd0IscUNBQUE7QUFHeEI7QUFGQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBS0o7QUFIQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBTUo7QUFKQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7QUFPRjtBQUxBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFRRjtBQU5BO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFTRjtBQVBBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBVUo7QUFSQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFXRjtBQVRBO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBWUo7QUFWQTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWFKO0FBWEE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFjSjtBQVpBO0VBQ0ksV0FBQTtBQWVKO0FBYkE7RUFDSSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFnQko7QUFkQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsYUFBQTtBQWlCSjtBQWZBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBa0JGO0FBaEJBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBbUJKO0FBakJBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQW9CRjtBQWxCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBcUJGO0FBbkJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQXNCRjtBQXBCQTtFQUNFLHFCQUFBO0FBdUJGO0FBckJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUF3QkY7QUF0QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQXlCRjtBQXRCQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUVBLHdCQUFBO0VBRUEseUNBQUE7QUF5Qko7QUF2QkE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQTBCSjtBQXhCQTtFQUNJLGVBQUE7QUEyQko7QUF6QkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBNEJKO0FBMUJBO0VBQ0ksY0FBQTtBQTZCSjtBQTNCQTtFQUNJLFVBQUE7QUE4Qko7QUE1QkE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUVBLHdCQUFBO0VBRUEseUNBQUE7QUErQko7QUE3QkE7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7QUFnQ0o7QUE5QkE7RUFDSSxhQUFBO0FBaUNKO0FBL0JBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBa0NKO0FBaENBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBbUNKO0FBaENBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FBbUNKO0FBaENBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0FBbUNKO0FBakNBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFvQ0o7QUFsQ0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFxQ0o7QUFsQ0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXFDSjtBQW5DQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXNDSjtBQXBDQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXVDSjtBQXJDQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBd0NKO0FBdENBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUF5Q0o7QUF2Q0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUEwQ0o7QUF4Q0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBMkNKO0FBeENBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUEyQ0o7QUF6Q0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQTRDSjtBQTFDQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBNkNKO0FBM0NBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBOENKO0FBNUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBK0NKO0FBM0NBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUE4Q0o7QUE1Q0E7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7QUErQ0o7QUE3Q0E7RUFDSSxXQUFBO0FBZ0RKIiwiZmlsZSI6InByb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE0LjAvY3NzL2FsbC5taW4uY3NzJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQvMi4yLjAvY3NzL21hdGVyaWFsLWRlc2lnbi1pY29uaWMtZm9udC5taW4uY3NzJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5odG1sLCBib2R5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgei1pbmRleDoxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbn1cclxuKiwgOjphZnRlciwgOjpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2eyBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO31cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4uYXV0b21vdGl2ZV9hcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuLmF1dG9tb3RpdmVfYXJlYTpiZWZvcmV7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvc2FwZTEucG5nKTtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwcHggMzBweDtcclxufVxyXG4uYXV0b21vdGl2ZV9ib2R5e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4uaGVhZGVyX2FyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE4cHggMHB4IDI0cHg7XHJcbn1cclxuLmhlYWRlcl9hcmVhIGgxe1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDAgMDtcclxuICBtYXJnaW46IDAgMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uaGVhZGVyX2FyZWEgLmJ0bi1iYWNrIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMXB4IDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXgtd2lkdGg6IDIycHg7XHJcbn1cclxuLmhlYWRlcl9hcmVhIC5idG4tY2FydCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweCAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1heC13aWR0aDogMzJweDtcclxufVxyXG4uaGVhZGVyX2FyZWEgLmxvZ297XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbn1cclxuLmhlYWRlcl9hcmVhIC5sb2dvIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5zZWFyY2hfYm94IHtcclxuICAgIHdpZHRoOiA5NyU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBtYXJnaW46IDAgMCA1OHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggIzAwMDAwMDFjO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLnNlYXJjaF9ib3ggLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjODY4Njg2O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNDVweDtcclxuICAgIC8qIGJveC1zaGFkb3c6IDAgMCAwcHggcmdiKDAsIDAsIDApOyAqL1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uc2VhcmNoX2JveCAuZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlcntcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjODY4Njg2O1xyXG59XHJcbi5zZWFyY2hfYm94IC5pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOXB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGNvbG9yOiAjYmViZWJlO1xyXG59XHJcbi5mb3JtLWdyb3Vwe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMCAwIDI1cHg7XHJcbn1cclxuc2VsZWN0LmZvcm0tY29udHJvbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzhlOGU4ZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIzYxNjE2MTtcclxuICBwYWRkaW5nOiAxNXB4IDE1cHg7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5mb3JtLWdyb3VwIC5hcnJvd3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxN3B4O1xyXG4gIHJpZ2h0OiAxN3B4O1xyXG59XHJcbnNlbGVjdC5mb3JtLWNvbnRyb2w6Zm9jdXN7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZTk0OTJhO1xyXG59XHJcbi5mb3JtLWdyb3VwIGxhYmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTBweDtcclxuICBsZWZ0OiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgcGFkZGluZzogMCAycHg7XHJcbn1cclxuLmJ0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOTQ5MmE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5NDkyYTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4uYXV0b21vdGl2ZV9ib2R5IHVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMzBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzk0OTQ5NDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94IWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeSFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4haW1wb3J0YW50O1xyXG59XHJcbi5hdXRvbW90aXZlX2JvZHkgdWwuZmlsdGVyIGxpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMCAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIDVweCAwIDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5hdXRvbW90aXZlX2JvZHkgdWwuZmlsdGVyIGxpOmxhc3QtY2hpbGR7XHJcbiAgICBtYXJnaW46IDAgMCAwIDA7XHJcbn1cclxuLmF1dG9tb3RpdmVfYm9keSB1bC5maWx0ZXIgbGk6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0xcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQ6ICNlODVhNDI7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcbi5hdXRvbW90aXZlX2JvZHkgdWwuZmlsdGVyIGxpLmFjdGl2ZXtcclxuICAgIGNvbG9yOiAjZTg1YTQyO1xyXG59XHJcbi5hdXRvbW90aXZlX2JvZHkgdWwuZmlsdGVyIGxpLmFjdGl2ZTphZnRlcntcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuLnByb2R1Y3Rfc2VsZWN0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94IWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeSFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4haW1wb3J0YW50O1xyXG59XHJcbi5jaGVja19ib3gge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uY2hlY2tfYm94IGlucHV0W3R5cGU9XCJyYWRpb1wiXXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmNoZWNrX2JveCBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgIHBhZGRpbmc6IDdweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuLmNoZWNrX2JveCBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB+IHNwYW57XHJcbiAgICBjb2xvcjogI2U4NWE0MjtcclxuICAgIGJvcmRlci1jb2xvcjogI2U4NWE0MjtcclxufVxyXG4uZm9ybS1ncm91cC5mb3JtLXJhZGlve31cclxuLmZvcm0tZ3JvdXAuZm9ybS1yYWRpbyBsYWJlbC5yYWRpby1pbmxpbmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHRvcDogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnByb2R1Y3RfYXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4ucHJvZHVjdF9hcmVhIGgze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4ucHJvZHVjdF9hcmVhIGgzIC5idG4tc2Vle1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ucHJvZHVjdF9ib3h7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwOXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTEwcHg7XHJcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xyXG59XHJcbi5wcm9kdWN0X2JveCBoNHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5wcm9kdWN0X2JveCBwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogMCAwIDE1cHg7XHJcbn1cclxuLnByb2R1Y3RfYm94IGg1e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnByb2R1Y3RfYm94IGg1IC5wcmljZXtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogI2U1NGIyNTtcclxufVxyXG4ucHJvZHVjdF9ib3ggaDUgLnByaWNlIHN0cm9uZ3tcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzhhOGE4YTtcclxufVxyXG4ucHJvZHVjdF9ib3ggLmltZ19ib3h7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDk3cHg7XHJcbiAgICBoZWlnaHQ6IDEwOXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmOGViZTc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxufVxyXG5cclxuLmNhdGVnb3J5X2JvZHkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWluLWhlaWdodDogMjQwcHg7XHJcbn1cclxuLmNhdGVnb3J5X2JvZHkgLmNhdGVnb3J5X2JveCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICBtYXJnaW46IDAgMTBweCAyMHB4IDA7XHJcbiAgICBtYXgtd2lkdGg6IDMwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEycHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxOTBweDtcclxufVxyXG4uY2F0ZWdvcnlfYm9keSAuY2F0ZWdvcnlfYm94Om50aC1vZi10eXBlKDNuKXtcclxuICAgIG1heC13aWR0aDogMzIlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcbi5jYXRlZ29yeV9ib2R5IC5jYXRlZ29yeV9ib3ggcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzFkMWQxYjtcclxuICAgIG1hcmdpbjogMCAwIDIwcHg7XHJcbn1cclxuLmNhdGVnb3J5X2JvZHkgLmNhdGVnb3J5X2JveCAuaW1nX2JveCB7XHJcbiAgICB3aWR0aDogNjdweDtcclxuICAgIGhlaWdodDogNjdweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAxMnB4O1xyXG59XHJcbi5jYXRlZ29yeV9ib2R5IC5jYXRlZ29yeV9ib3ggLmltZ19ib3ggaW1ne31cclxuXHJcbi5jYXRlZ29yeV9ib2R5IC5jYXRlZ29yeV9ib3ggaXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5jYXRlZ29yeV9ib2R5IC5jYXRlZ29yeV9ib3g6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2U1NGIyNTtcclxuICAgIGJvcmRlci1jb2xvcjogI2U1NGIyNTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAzcHggNXB4IHJnYigxNjkgMTY2IDE2Nik7XHJcbn1cclxuLmNhdGVnb3J5X2JvZHkgLmNhdGVnb3J5X2JveDpob3ZlciBwLCAuY2F0ZWdvcnlfYm9keSAuY2F0ZWdvcnlfYm94OmhvdmVyIGl7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content [fullscreen]=\"true\">\n  \n    <div class=\"automotive_area\">\n      <div class=\"container\">\n          <div class=\"automotive_body\">\n              <div class=\"header_area\">\n                  <button class=\"btn-back\" routerLink=\"/home\" (click)=\"storePage('home')\"><img src=\"assets/images/back.png\" alt=\"back\" title=\"\" /></button>\n                  <div class=\"logo\"><img src=\"assets/images/logo2.png\" alt=\"logo\" title=\"\"></div>\n                  <button class=\"btn-cart\"><img src=\"assets/images/cart.png\" alt=\"back\" title=\"\" /></button>\n              </div>\n              <div class=\"search_box\">\n                  <div class=\"icon\"><i class=\"zmdi zmdi-search\"></i></div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Search Products...\" />\n              </div>\n              \n              <div class=\"product_area\">\n                    <!-- <h3>\n                        Trending Products\n                        \n                    </h3> -->\n                  <div class=\"product_box\" routerLink=\"/product-details/1\">\n                    <div class=\"img_box\"><img src=\"assets/images/product-details.png\"></div>\n                    <h4>R2AT - 20.7 MPA</h4>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n                    <h5>\n                        Size : 3/16\"\n                        <div class=\"price\">INR 50<strong>/Meter</strong></div>\n                      </h5>\n                  </div>\n                  <div class=\"product_box\" routerLink=\"/product-details/1\">\n                    <div class=\"img_box\"><img src=\"assets/images/product-details.png\"></div>\n                    <h4>R2AT - 20.7 MPA</h4>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n                    <h5>\n                        Size : 3/16\"\n                        <div class=\"price\">INR 50<strong>/Meter</strong></div>\n                      </h5>\n                  </div>\n              </div>\n          </div>\n      </div>\n    </div>\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=product-product-module.js.map