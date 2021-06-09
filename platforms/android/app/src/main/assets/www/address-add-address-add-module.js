(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-add-address-add-module"],{

/***/ "8rMN":
/*!*************************************************!*\
  !*** ./src/app/address-add/address-add.page.ts ***!
  \*************************************************/
/*! exports provided: AddressAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressAddPage", function() { return AddressAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_address_add_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./address-add.page.html */ "M7G4");
/* harmony import */ var _address_add_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address-add.page.scss */ "YtXN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "e8h1");









let AddressAddPage = class AddressAddPage {
    constructor(http, navCtrl, storage, loadingController, alertController) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.appUrl = "https://theitvibe.com/project/ihose/api/saveAddress";
        this.storage.get("userDetails").then(val => {
            if (val) {
                this.userDetails = val;
            }
        });
    }
    ngOnInit() {
    }
    saveAddress() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Saving...'
            });
            const alert = yield this.alertController.create({
                message: 'Something is wrong',
                buttons: ['OK']
            });
            const addrsalert = yield this.alertController.create({
                message: 'Please enter address',
                buttons: ['OK']
            });
            const dooralert = yield this.alertController.create({
                message: 'Please enter door/flat no',
                buttons: ['OK']
            });
            const landalert = yield this.alertController.create({
                message: 'Please enter landmark',
                buttons: ['OK']
            });
            const successalrt = yield this.alertController.create({
                message: 'Address successfully saved',
                buttons: ['OK']
            });
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
            if (this.usa_address == '' || this.usa_address == null) {
                loading.dismiss();
                addrsalert.present();
            }
            else if (this.usa_doorno == '' || this.usa_doorno == null) {
                loading.dismiss();
                dooralert.present();
            }
            else if (this.usa_landmark == '' || this.usa_landmark == null) {
                loading.dismiss();
                landalert.present();
            }
            else {
                yield loading.present();
                var data = {
                    "usa_address": this.usa_address,
                    "usa_doorno": this.usa_doorno,
                    "usa_landmark": this.usa_landmark,
                    "usa_user": this.userDetails.user_id,
                };
                this.http.post(this.appUrl, data, { headers: headers })
                    .subscribe(res => {
                    console.log(res.json());
                    this.res = res.json();
                    if (this.res.status == 0) {
                        loading.dismiss();
                        this.alertController.create({
                            message: this.res.msg,
                            buttons: ['OK']
                        }).then(resalert => {
                            resalert.present();
                        });
                    }
                    else if (this.res.status == 1) {
                        successalrt.present();
                        this.navCtrl.navigateForward('address-list');
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
        });
    }
    back() {
        this.navCtrl.navigateForward('address-list');
    }
};
AddressAddPage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
AddressAddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-address-add',
        template: _raw_loader_address_add_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_address_add_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddressAddPage);



/***/ }),

/***/ "GSDr":
/*!***********************************************************!*\
  !*** ./src/app/address-add/address-add-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddressAddPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressAddPageRoutingModule", function() { return AddressAddPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _address_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./address-add.page */ "8rMN");




const routes = [
    {
        path: '',
        component: _address_add_page__WEBPACK_IMPORTED_MODULE_3__["AddressAddPage"]
    }
];
let AddressAddPageRoutingModule = class AddressAddPageRoutingModule {
};
AddressAddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddressAddPageRoutingModule);



/***/ }),

/***/ "M7G4":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/address-add/address-add.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n\n   \n    \n    <div class=\"header\">\n      <div class=\"top-nav\">\n        <button class=\"btn-back\" (click)=\"back()\">\n         <i class=\"fas fa-arrow-left\"></i>\n        </button>\n        <div class=\"title\">Add Address</div>\n      </div>\n    </div>\n    \n    <div class=\"delevary_address\">\n      <div class=\"container\">\n      \t<div class=\"form-group\">\n          <label>Full Address</label>\n          <textarea class=\"form-control\" [(ngModel)]=\"usa_address\"  placeholder=\"Full Address\"></textarea>\n        </div>\n        <!-- <div class=\"form-group\">\n          <label>Pincode.</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone:true}\" placeholder=\"Pincode.\">\n          <div class=\"icon\"><i class=\"fas fa-map-marked-alt\"></i></div>\n        </div> -->\n        <div class=\"form-group\">\n          <label>Door / Flat no</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"usa_doorno\" placeholder=\"Door / Flat no\">\n          <div class=\"icon\"><i class=\"fas fa-street-view\"></i></div>\n        </div>\n        <div class=\"form-group\">\n          <label>Landmark</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"usa_landmark\" placeholder=\"Landmark\">\n          <div class=\"icon\"><i class=\"fas fa-street-view\"></i></div>\n        </div>\n        \n        \n        <button class=\"btn\" (click)=\"saveAddress()\">Save</button>\n      </div>\n    </div>\n    \n      \n   \n\n    \n  \n</ion-content>\n");

/***/ }),

/***/ "YtXN":
/*!***************************************************!*\
  !*** ./src/app/address-add/address-add.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.top-nav {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 15px 1em;\n  margin-top: 0;\n  margin-bottom: 0;\n  background-color: #eb9929;\n}\n.top-nav .btn-back {\n  font-size: 2em;\n  color: #fff;\n  cursor: pointer;\n  outline: none;\n  background-color: transparent;\n  border: none;\n  position: absolute;\n}\n.top-nav .title {\n  color: #fff;\n  font-size: 1.2em;\n  font-weight: 500;\n  margin: 0 auto;\n  text-transform: uppercase;\n  letter-spacing: normal;\n}\n.header {\n  background-color: #fe5632;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.24);\n}\n.full-screen.cart {\n  flex-direction: column;\n}\n.container {\n  padding: 0 1em;\n}\n.delevary_address {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px 0px;\n}\n.delevary_address h3 {\n  width: 100%;\n  box-sizing: border-box;\n  margin: 15px 0 4px;\n  padding: 0 0;\n  color: #000000;\n  font-size: 20px;\n  font-weight: 400;\n}\n.delevary_address p {\n  width: 100%;\n  display: block;\n  box-sizing: border-box;\n  padding: 0 0 0;\n  margin: 0 0 30px;\n  font-size: 15px;\n  font-weight: 400;\n  color: #868686;\n}\n.form-group {\n  position: relative;\n  margin-bottom: 1em;\n}\n.form-control {\n  width: -webkit-fill-available;\n  border: none;\n  font-size: 0.9em;\n  letter-spacing: 0.6px;\n  background-color: #fff;\n  color: #4a4a4a;\n  padding: 0.1em 3em 0.1em 1em;\n  border-radius: 2.6px;\n  height: 46px;\n  box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.78);\n  border: 1px solid rgba(0, 0, 0, 0);\n  box-sizing: border-box;\n}\ntextarea.form-control {\n  width: -webkit-fill-available;\n  border: none;\n  font-size: 15px;\n  letter-spacing: 0.6px;\n  background-color: #fff;\n  color: #4a4a4a;\n  border-radius: 2.6px;\n  box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.78);\n  border: 1px solid rgba(0, 0, 0, 0);\n  box-sizing: border-box;\n  height: 120px;\n  padding: 15px;\n}\n.form-group .icon {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  font-size: 20px;\n}\n.form-group label {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  text-transform: capitalize;\n  display: block;\n  margin-bottom: 12px;\n  color: #000;\n}\n.delevary_address .btn {\n  width: 100%;\n  background: #ff0000;\n  border: 1px solid #ff0000;\n  color: #fff;\n  padding: 10px 10px;\n  text-transform: capitalize;\n  font-size: 17px;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkZHJlc3MtYWRkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpSEFBQTtBQUNBLHlGQUFBO0FBRVI7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBQUo7QUFHQTtFQUNJLHNCQUFBO0FBQUo7QUFHQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBQUo7QUFLQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBRko7QUFJQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURKO0FBSUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBREo7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsMkNBQUE7QUFBSjtBQUlBO0VBQ0ksc0JBQUE7QUFESjtBQU9BO0VBQ0ksY0FBQTtBQUpKO0FBT0E7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUpKO0FBT0E7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSko7QUFPQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSko7QUFNQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFISjtBQUtBO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0FBRko7QUFJQTtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFESjtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBSjtBQUVBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDSjtBQUNBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0FBRUoiLCJmaWxlIjoiYWRkcmVzcy1hZGQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNC4wL2Nzcy9hbGwubWluLmNzcycpO1xyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6MTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblxyXG59XHJcbiosIDo6YWZ0ZXIsIDo6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG5cclxuLnRvcC1uYXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWI5OTI5O1xyXG59XHJcbi50b3AtbmF2IC5idG4tYmFjayB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4udG9wLW5hdiAudGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU1NjMyO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggcmdiKDAgMCAwIC8gMjQlKTtcclxufVxyXG5cclxuXHJcbi5mdWxsLXNjcmVlbi5jYXJ0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMCAxZW07XHJcbn1cclxuXHJcbi5kZWxldmFyeV9hZGRyZXNze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMjBweCAwcHg7XHJcbn1cclxuXHJcbi5kZWxldmFyeV9hZGRyZXNzIGgzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMTVweCAwIDRweDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmRlbGV2YXJ5X2FkZHJlc3MgcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzg2ODY4NjtcclxufVxyXG4uZm9ybS1ncm91cHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogIzRhNGE0YTtcclxuICAgIHBhZGRpbmc6IDAuMWVtIDNlbSAwLjFlbSAxZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyLjZweDtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IC01cHggaHNsKDBkZWcgMCUgMCUgLyA3OCUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgaHNsKDBkZWcgMCUgMCUgLyAwJSk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogIzRhNGE0YTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIuNnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggLTVweCBoc2woMGRlZyAwJSAwJSAvIDc4JSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBoc2woMGRlZyAwJSAwJSAvIDAlKTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG4uZm9ybS1ncm91cCAuaWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5mb3JtLWdyb3VwIGxhYmVse1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5kZWxldmFyeV9hZGRyZXNzIC5idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmMDAwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufSJdfQ== */");

/***/ }),

/***/ "zmq8":
/*!***************************************************!*\
  !*** ./src/app/address-add/address-add.module.ts ***!
  \***************************************************/
/*! exports provided: AddressAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressAddPageModule", function() { return AddressAddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _address_add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./address-add-routing.module */ "GSDr");
/* harmony import */ var _address_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./address-add.page */ "8rMN");







let AddressAddPageModule = class AddressAddPageModule {
};
AddressAddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _address_add_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddressAddPageRoutingModule"]
        ],
        declarations: [_address_add_page__WEBPACK_IMPORTED_MODULE_6__["AddressAddPage"]]
    })
], AddressAddPageModule);



/***/ })

}]);
//# sourceMappingURL=address-add-address-add-module.js.map