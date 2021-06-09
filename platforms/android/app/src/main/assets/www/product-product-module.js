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
                this.navCtrl.navigateForward('/');
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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Oswald\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.container {\n  box-sizing: border-box;\n  padding: 0px 30px;\n  width: 100%;\n}\n.w-100 {\n  width: 100%;\n  box-sizing: border-box;\n}\n/*------ login css start -----*/\n.product_main_area {\n  width: 100%;\n  height: 100vh;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  position: relative;\n}\n.product_main_area:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 190px;\n  box-sizing: border-box;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: top center;\n  background-image: url('bg3.png');\n}\n.product_main_area .product_body_area {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 30px 0px;\n  margin: 0 0;\n  position: relative;\n}\n.product_main_area .product_body_area .header_area {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  min-height: 52px;\n}\n.product_main_area .product_body_area .header_area .logo {\n  width: 116px;\n  box-sizing: border-box;\n  float: left;\n}\n.product_main_area .product_body_area .header_area .logo img {\n  width: 100%;\n  object-fit: cover;\n}\n.product_main_area .product_body_area .header_area button.btn-cart {\n  float: right;\n  color: #fff;\n  background: transparent;\n  border: none;\n  padding: 0 0;\n  outline: none;\n  font-size: 26px;\n  margin: 6px 0 0;\n  position: relative;\n}\n.product_main_area .product_body_area .header_area button.btn-cart .total_cart {\n  content: \"\";\n  position: absolute;\n  top: -8px;\n  right: -10px;\n  width: 20px;\n  height: 20px;\n  background: #000;\n  font-size: 12px;\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.product_main_area .product_body_area .search_box_area {\n  width: 100%;\n  box-sizing: border-box;\n  margin-bottom: 25px;\n}\n.product_main_area .product_body_area .search_box_area h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 6px;\n  font-size: 22px;\n  color: #fff;\n  font-weight: 400;\n  text-transform: capitalize;\n  letter-spacing: 1px;\n}\n.product_main_area .product_body_area .search_box_area .form-group {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  position: relative;\n}\n.product_main_area .product_body_area .search_box_area .form-control {\n  width: 100%;\n  height: 50px;\n  padding: 10px 10px 10px 40px;\n  border: none;\n  border-radius: 30px;\n  box-sizing: border-box;\n  box-shadow: 0 2px 6px rgba(197, 197, 197, 0.7);\n  color: #000;\n  outline: none;\n}\n.product_main_area .product_body_area .search_box_area .form-group .search-icon {\n  content: \"\";\n  position: absolute;\n  top: 8px;\n  left: 15px;\n  font-size: 26px;\n  color: #696969;\n}\n.product_main_area .product_body_area .product_list_area {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n}\n.product_main_area .product_body_area .product_list_area h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 15px;\n  font-size: 20px;\n  text-transform: capitalize;\n  font-weight: 500;\n}\n.product_main_area .product_body_area .product_list_area h3 .view_all {\n  float: right;\n  background: transparent;\n  border: none;\n  padding: 0 0;\n  font-size: 14px;\n  color: #3e3e3e;\n  font-weight: 500;\n  text-transform: capitalize;\n  margin-top: 8px;\n  font-family: \"Poppins\", sans-serif;\n}\n.product_main_area .product_body_area .product_list_area ul {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 0;\n}\n.product_main_area .product_body_area .product_list_area ul li {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 15px;\n  margin: 0 0 15px;\n  list-style: none;\n  border-bottom: 1px solid #d0d0d0;\n}\n.product_main_area .product_body_area .product_list_area ul li:last-child {\n  padding: 0 0 0;\n  margin: 0 0 0;\n  border-bottom: 0px;\n}\n.product_box {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 4px 15px 10px 112px;\n  background: #fff;\n  border-radius: 5px;\n  box-shadow: 0 2px 5px rgba(173, 173, 173, 0.57);\n  position: relative;\n  min-height: 128px;\n}\n.product_box h4 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 4px;\n  color: #000;\n  font-size: 17px;\n  font-weight: 500;\n}\n.product_box p {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 5px;\n  font-size: 12px;\n  font-weight: 400;\n  color: #000;\n}\n.product_box .btn {\n  text-transform: uppercase;\n  font-size: 11px;\n  padding: 5px 15px;\n  box-sizing: border-box;\n  border-radius: 30px;\n  border: 2px solid #eb9929;\n  background: #fff;\n  font-weight: 700;\n  color: #333;\n  outline: none;\n}\n.product_box .select_number {\n  width: 50px;\n  display: inline-block;\n  height: 25px;\n  margin-right: 8px;\n  position: relative;\n  border-radius: 30px;\n  box-sizing: border-box;\n}\n.product_box .select_number .form-control {\n  width: 100%;\n  height: 25px;\n  text-align: center;\n  font-size: 13px;\n  border: 1px solid #cacaca;\n  padding: 0 12px;\n}\n.product_box .select_number .btn {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  width: 14px;\n  height: 100%;\n  text-align: center;\n  font-size: 10px;\n  padding: 0 3px;\n  display: inline-block;\n  border: none;\n  border-radius: 0;\n  background: #000;\n  outline: none;\n}\n.product_box .select_number .btn.btn-plus {\n  left: 0;\n}\n.product_box .select_number .btn.btn-minus {\n  right: 0;\n}\n.product_box .btn.btn-shop {\n  background: #eb9929;\n  color: #fff;\n}\n.product_box .btn i {\n  color: #eb9929;\n}\n.product_box .product_image {\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  left: 6px;\n  width: 100px;\n  height: 110px;\n  box-sizing: border-box;\n  overflow: hidden;\n  border-radius: 10px;\n}\n.product_box .product_image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.product_main_area .product_body_area .category_list_area {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n}\n.product_main_area .product_body_area .category_list_area h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 15px;\n  font-size: 20px;\n  text-transform: capitalize;\n  font-weight: 500;\n}\n.product_main_area .product_body_area .category_list_area .category_list_body {\n  overflow: scroll;\n  padding-bottom: 14px;\n  margin-left: 0;\n  box-sizing: border-box;\n}\n.product_main_area .product_body_area .category_list_area .category_list_body ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: table;\n  width: 100%;\n}\n.product_main_area .product_body_area .category_list_area .category_list_body ul li {\n  display: table-cell;\n  vertical-align: top;\n}\n.category_list_box {\n  width: 92px;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 8px 0 0;\n}\n.category_list_box img {\n  width: 100%;\n  height: 70px;\n  margin-bottom: 5px;\n  border-radius: 5px;\n}\n.category_list_box h3 {\n  text-align: center;\n  font-weight: 500 !important;\n  margin: 0 0 !important;\n  font-size: 14px !important;\n}\n.nav_bar {\n  float: left;\n  background: transparent;\n  color: #fff;\n  padding: 0 0;\n  margin: 0 0;\n  border: none;\n  margin-right: 12px;\n  font-size: 24px;\n  margin-top: 3px;\n  outline: none;\n}\n/*------ login css stop -----*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHlGQUFBO0FBQ0EsK0hBQUE7QUFDQSxrTUFBQTtBQUNBLHdHQUFBO0FBQ1I7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7QUFDQTtFQUF1QixpQ0FBQTtBQUd2QjtBQUZBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFLSjtBQUhBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFNSjtBQUpBO0VBQU8sV0FBQTtFQUFZLHNCQUFBO0FBU25CO0FBUkEsK0JBQUE7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBVUo7QUFSQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FBV0o7QUFUQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBWUo7QUFWQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFhSjtBQVhBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQWNKO0FBWkE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFlSjtBQWJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFnQko7QUFkQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7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O0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQXVDSjtBQXJDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUF3Q0o7QUF0Q0E7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXlDSjtBQXZDQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FBMENKO0FBeENBO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQTJDSjtBQXpDQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQTRDSjtBQTFDQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7QUE2Q0o7QUEzQ0E7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUE4Q0o7QUEzQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUE4Q0o7QUE1Q0E7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQStDSjtBQTdDQTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQWdESjtBQTlDQSw4QkFBQSIsImZpbGUiOiJwcm9kdWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNC4wL2Nzcy9hbGwubWluLmNzcycpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWF0ZXJpYWwtZGVzaWduLWljb25pYy1mb250LzIuMi4wL2Nzcy9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQubWluLmNzcycpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcbmh0bWwsIGJvZHkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OjE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxufVxyXG4qLCA6OmFmdGVyLCA6OmJlZm9yZSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDZ7Zm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO31cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDBweCAzMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnctMTAwe3dpZHRoOiAxMDAlO2JveC1zaXppbmc6IGJvcmRlci1ib3g7fVxyXG4vKi0tLS0tLSBsb2dpbiBjc3Mgc3RhcnQgLS0tLS0qL1xyXG5cclxuLnByb2R1Y3RfbWFpbl9hcmVhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5wcm9kdWN0X21haW5fYXJlYTpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTkwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzMucG5nKTtcclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuaGVhZGVyX2FyZWF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIG1pbi1oZWlnaHQ6IDUycHg7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuaGVhZGVyX2FyZWEgLmxvZ297XHJcbiAgICB3aWR0aDogMTE2cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuaGVhZGVyX2FyZWEgLmxvZ28gaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5oZWFkZXJfYXJlYSBidXR0b24uYnRuLWNhcnQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBtYXJnaW46IDZweCAwIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuaGVhZGVyX2FyZWEgYnV0dG9uLmJ0bi1jYXJ0IC50b3RhbF9jYXJ0IHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtOHB4O1xyXG4gICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEgLnNlYXJjaF9ib3hfYXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuc2VhcmNoX2JveF9hcmVhIGgzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDZweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5zZWFyY2hfYm94X2FyZWEgLmZvcm0tZ3JvdXB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5zZWFyY2hfYm94X2FyZWEgLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDQwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2IoMTk3IDE5NyAxOTcgLyA3MCUpO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEgLnNlYXJjaF9ib3hfYXJlYSAuZm9ybS1ncm91cCAuc2VhcmNoLWljb24ge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBjb2xvcjogIzY5Njk2OTtcclxufVxyXG5cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAucHJvZHVjdF9saXN0X2FyZWF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMDtcclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5wcm9kdWN0X2xpc3RfYXJlYSBoMyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEgLnByb2R1Y3RfbGlzdF9hcmVhIGgzIC52aWV3X2FsbCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjM2UzZTNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5wcm9kdWN0X2xpc3RfYXJlYSB1bHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMDtcclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5wcm9kdWN0X2xpc3RfYXJlYSB1bCBsaSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDAgMTVweDtcclxuICAgIG1hcmdpbjogMCAwIDE1cHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMGQwZDA7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAucHJvZHVjdF9saXN0X2FyZWEgdWwgbGk6bGFzdC1jaGlsZHtcclxuICAgIHBhZGRpbmc6IDAgMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMDtcclxuICAgIGJvcmRlci1ib3R0b206IDBweDtcclxufVxyXG4ucHJvZHVjdF9ib3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogNHB4IDE1cHggMTBweCAxMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiKDE3MyAxNzMgMTczIC8gNTclKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDEyOHB4O1xyXG59XHJcbi5wcm9kdWN0X2JveCBoNCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMCA0cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnByb2R1Y3RfYm94IHB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4ucHJvZHVjdF9ib3ggLmJ0biB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlYjk5Mjk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4ucHJvZHVjdF9ib3ggLnNlbGVjdF9udW1iZXJ7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLnByb2R1Y3RfYm94IC5zZWxlY3RfbnVtYmVyIC5mb3JtLWNvbnRyb2x7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XHJcbiAgICBwYWRkaW5nOiAwIDEycHg7XHJcbn1cclxuLnByb2R1Y3RfYm94IC5zZWxlY3RfbnVtYmVyIC5idG57XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMCAzcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnByb2R1Y3RfYm94IC5zZWxlY3RfbnVtYmVyIC5idG4uYnRuLXBsdXN7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcbi5wcm9kdWN0X2JveCAuc2VsZWN0X251bWJlciAuYnRuLmJ0bi1taW51c3tcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcbi5wcm9kdWN0X2JveCAuYnRuLmJ0bi1zaG9we1xyXG4gICAgYmFja2dyb3VuZDogI2ViOTkyOTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5wcm9kdWN0X2JveCAuYnRuIGl7XHJcbiAgICBjb2xvcjogI2ViOTkyOTtcclxufVxyXG4ucHJvZHVjdF9ib3ggLnByb2R1Y3RfaW1hZ2Uge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiA2cHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5wcm9kdWN0X2JveCAucHJvZHVjdF9pbWFnZSBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEgLmNhdGVnb3J5X2xpc3RfYXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwO1xyXG59XHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEgLmNhdGVnb3J5X2xpc3RfYXJlYSBoM3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDE1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuY2F0ZWdvcnlfbGlzdF9hcmVhIC5jYXRlZ29yeV9saXN0X2JvZHl7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuY2F0ZWdvcnlfbGlzdF9hcmVhIC5jYXRlZ29yeV9saXN0X2JvZHkgdWx7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuY2F0ZWdvcnlfbGlzdF9hcmVhIC5jYXRlZ29yeV9saXN0X2JvZHkgdWwgbGl7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG4uY2F0ZWdvcnlfbGlzdF9ib3h7XHJcbiAgICB3aWR0aDogOTJweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgOHB4IDAgMDtcclxufVxyXG5cclxuLmNhdGVnb3J5X2xpc3RfYm94IGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5jYXRlZ29yeV9saXN0X2JveCBoM3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxufVxyXG4ubmF2X2JhcntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4vKi0tLS0tLSBsb2dpbiBjc3Mgc3RvcCAtLS0tLSovIl19 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n<ion-refresher (ionRefresh)=\"doRefresh($event)\" slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\">\n    <ion-refresher-content style=\"margin-top: 150px;\"></ion-refresher-content>\n  </ion-refresher>\n\n    <div class=\"product_main_area\">\n      <div class=\"container\">\n        <div class=\"product_body_area\">\n          <div class=\"header_area\">\n            <button class=\"nav_bar\" (click)=\"back()\"><i class=\"fas fa-arrow-left\"></i></button>\n            <div class=\"logo\"><img src=\"assets/images/logo.png\" alt=\"logo\" title=\"\"></div>\n            <button class=\"btn-cart\" routerLink=\"/cart-page\">\n              <i class=\"zmdi zmdi-shopping-cart\"></i>\n              <span class=\"total_cart\" [innerHTML]=\"cartcount\"></span>\n            </button>\n          </div>\n          <div class=\"search_box_area\">\n            <h3>find your product</h3>\n            <div class=\"form-group\">\n              <span class=\"search-icon\"><i class=\"zmdi zmdi-search\"></i></span>\n              <input type=\"text\" (keyup)=\"listing($event)\" [(ngModel)]=\"search_key\" [ngModelOptions]=\"{standalone:true}\" class=\"form-control\" placeholder=\"Search Products...\">\n            </div>\n          </div>\n\n          <div class=\"category_list_area\">\n            <h3>categories</h3>\n            <div class=\"category_list_body\">\n              <ul>\n                <li routerLink=\"/box-hose/1\">\n                  <div class=\"category_list_box\">\n                    <img src=\"assets/images/img3.jpg\">\n                    <h3>Bare Hoses</h3>\n                  </div>\n                </li>\n                <li routerLink=\"/endfitting-hose/3\">\n                  <div class=\"category_list_box\">\n                    <img src=\"assets/images/img4.jpg\">\n                    <h3>End Fittings</h3>\n                  </div>\n                </li>\n                <li routerLink=\"/assembly-hose/4\">\n                  <div class=\"category_list_box\">\n                    <img src=\"assets/images/img5.jpg\">\n                    <h3>Hose Assemblies</h3>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n\n          <div class=\"product_list_area\" *ngIf=\"dataMenu && loader_val == false\">\n            <h3>products <!-- <button class=\"view_all\">view all >></button> --></h3>\n            <ul>\n\n              <li *ngFor=\"let menulist of dataMenu; let i=index\">\n                <div class=\"product_box\">\n                  <div class=\"product_image\">\n                    <img src=\"{{img_url}}{{menulist.hp_image}}\" alt=\"product image\" title=\"\">\n                  </div>\n                  <h4 *ngIf=\"menulist.hp_subcat==1\">{{menulist.item_name}}</h4>\n                  <h4 *ngIf=\"menulist.hp_subcat==5 || menulist.hp_subcat==6\">{{menulist.hp_partno}}</h4>\n                   <h4 *ngIf=\"menulist.hp_subcat==3 || menulist.hp_subcat==4\">{{menulist.hp_description}}</h4>\n                  <p *ngIf=\"menulist.hp_subcat!=3 && menulist.hp_subcat!=4\">{{menulist.hp_description}}</p>\n                  <div class=\"select_number\" *ngIf=\"menulist.quantity>0\">\n                    <input type=\"text\" readonly class=\"form-control\" value=\"{{menulist.quantity}}\">                 \n                    \n                   <button class=\"btn btn-minus\" (click)=\"decrementQty(i,menulist.hp_id,menulist)\"><i class=\"zmdi zmdi-minus\"></i></button>\n                      <button class=\"btn btn-plus\" (click)=\"incrementQty(i,menulist.hp_id,menulist)\"><i class=\"zmdi zmdi-plus\"></i></button>\n                  </div>\n                  <button class=\"btn\" (click)=\"addToCart(i,menulist.hp_id,menulist)\" *ngIf=\"menulist.quantity==0\">add <i class=\"zmdi zmdi-plus\"></i></button>\n                  <button class=\"btn btn-shop\" routerLink=\"/product-details/{{menulist.hp_id}}\" (click)=\"storePage('/product')\">shop now</button>\n                </div>\n              </li>\n              \n\n            </ul>\n          </div>\n\n          <div class=\"product_list_area\" *ngIf=\"loader_val\">\n  \n           <div class=\"loader_box\">\n<img src=\"assets/loader.gif\">\n</div>\n\n</div>\n\n<div class=\"product_list_area\" *ngIf=\"menu_list && menu_list.length==0 && loader_val == false\">\n <div class=\"empty_menu\">\n           Not available\n         </div>\n  </div>\n\n\n        </div>\n      </div>\n    </div>\n    <ion-infinite-scroll #infiniteScroll (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=product-product-module.js.map