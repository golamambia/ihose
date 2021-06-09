(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["box-hose-box-hose-module"],{

/***/ "8uJE":
/*!*********************************************!*\
  !*** ./src/app/box-hose/box-hose.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Oswald\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.container {\n  box-sizing: border-box;\n  padding: 0px 30px;\n  width: 100%;\n}\n.w-100 {\n  width: 100%;\n  box-sizing: border-box;\n}\n/*------ login css start -----*/\n.product_main_area {\n  width: 100%;\n  height: 100vh;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  position: relative;\n  z-index: 1;\n}\n.product_main_area:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 190px;\n  box-sizing: border-box;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: top center;\n  background-image: url('bg3.png');\n  z-index: -1;\n}\n.product_main_area:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 140px;\n  box-sizing: border-box;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: top center;\n  background-image: url('beforeimg.jpg');\n  z-index: -1;\n}\n.product_main_area .product_body_area {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 30px 0px;\n  margin: 0 0;\n  position: relative;\n}\n.product_main_area .product_body_area .header_area {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  min-height: 52px;\n}\n.product_main_area .product_body_area .header_area .logo {\n  width: 90px;\n  box-sizing: border-box;\n  float: left;\n}\n.product_main_area .product_body_area .header_area .logo img {\n  width: 100%;\n  object-fit: cover;\n}\n.product_main_area .product_body_area .search_box_area {\n  width: 100%;\n  box-sizing: border-box;\n  margin-bottom: 25px;\n}\n.product_main_area .product_body_area .search_box_area h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 6px;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 400;\n  text-transform: capitalize;\n  letter-spacing: 1px;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 15px 15px 5px 15px;\n  background: #783968;\n  background: linear-gradient(0deg, rgba(120, 57, 104, 0) 0%, white 100%);\n  border-radius: 5px;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box .form-group {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0 15px;\n  position: relative;\n  opacity: 0.6;\n}\n.form-group.active {\n  opacity: 1 !important;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box .form-group span.iconbox {\n  position: absolute;\n  z-index: 1;\n  left: 9px;\n  top: 35px;\n  border-right: 1px solid rgba(235, 153, 41, 0.52);\n  padding-right: 6px;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box .form-control {\n  width: 100%;\n  height: 45px;\n  box-sizing: border-box;\n  border-radius: 0;\n  padding: 0 15px 0 50px;\n  outline: none;\n  border-color: #eb9929;\n  background-color: #ffffff;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box textarea.form-control {\n  height: 110px;\n  border-radius: 10px;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box .btn {\n  width: 100%;\n  padding: 15px 20px;\n  text-transform: uppercase;\n  color: #fff;\n  background: #eb9929;\n  border: 1px solid #eb9929;\n  border-radius: 0;\n  outline: none;\n  max-width: 90%;\n  margin: auto 5%;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box .form-group label {\n  width: 100%;\n  display: block;\n  margin-bottom: 5px;\n  font-size: 16px;\n  position: relative;\n  padding-left: 0;\n  font-family: \"Oswald\", sans-serif;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box .form-group label .icon {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 10px;\n  width: 20px;\n  height: 20px;\n  overflow: hidden;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box .form-group label .icon img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.nav_bar {\n  float: left;\n  background: transparent;\n  color: #fff;\n  padding: 0 0;\n  margin: 0 0;\n  border: none;\n  margin-right: 12px;\n  font-size: 24px;\n  margin-top: 3px;\n  outline: none;\n}\n.product_main_area .product_body_area .search_box_area .product_type_box h3 {\n  width: 100%;\n  display: block;\n  margin-bottom: 12px;\n  text-transform: capitalize;\n  color: #eb9929;\n  position: relative;\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.13);\n}\n.product_main_area .product_body_area .search_box_area .product_type_box img.user_icon {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 0;\n  width: 28px;\n  height: 28px;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJveC1ob3NlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx5RkFBQTtBQUNBLCtIQUFBO0FBQ0Esa01BQUE7QUFDQSx3R0FBQTtBQUNSO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQUNKO0FBRUE7RUFDSSxzQkFBQTtBQUNKO0FBQ0E7RUFBdUIsaUNBQUE7QUFHdkI7QUFGQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBS0o7QUFIQTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBTUo7QUFKQTtFQUFPLFdBQUE7RUFBWSxzQkFBQTtBQVNuQjtBQVJBLCtCQUFBO0FBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFVSjtBQVJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FBV0o7QUFUQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0MsV0FBQTtBQVlMO0FBVkE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQWFKO0FBWEE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBY0o7QUFaQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFlSjtBQWJBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBZ0JKO0FBYkE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQWdCSjtBQWRBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQWlCSjtBQWRBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHVFQUFBO0VBQ0Esa0JBQUE7QUFpQko7QUFmQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQWtCSjtBQWhCQTtFQUFvQixxQkFBQTtBQW9CcEI7QUFuQkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGdEQUFBO0VBQ0Esa0JBQUE7QUFzQko7QUFwQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBdUJKO0FBcEJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBdUJKO0FBckJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBd0JKO0FBdEJBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQXlCSjtBQXZCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQTBCSjtBQXhCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUEyQko7QUF4QkE7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUEyQko7QUF4QkE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDRDQUFBO0FBMkJKO0FBekJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBNEJKIiwiZmlsZSI6ImJveC1ob3NlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNC4wL2Nzcy9hbGwubWluLmNzcycpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWF0ZXJpYWwtZGVzaWduLWljb25pYy1mb250LzIuMi4wL2Nzcy9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQubWluLmNzcycpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcbmh0bWwsIGJvZHkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OjE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxufVxyXG4qLCA6OmFmdGVyLCA6OmJlZm9yZSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDZ7Zm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO31cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDBweCAzMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnctMTAwe3dpZHRoOiAxMDAlO2JveC1zaXppbmc6IGJvcmRlci1ib3g7fVxyXG4vKi0tLS0tLSBsb2dpbiBjc3Mgc3RhcnQgLS0tLS0qL1xyXG5cclxuLnByb2R1Y3RfbWFpbl9hcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhOmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxOTBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2JnMy5wbmcpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9iZWZvcmVpbWcuanBnKTtcclxuICAgICB6LWluZGV4OiAtMTtcclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuaGVhZGVyX2FyZWF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIG1pbi1oZWlnaHQ6IDUycHg7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuaGVhZGVyX2FyZWEgLmxvZ297XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5oZWFkZXJfYXJlYSAubG9nbyBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5zZWFyY2hfYm94X2FyZWF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEgLnNlYXJjaF9ib3hfYXJlYSBoMyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDAgMCA2cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEgLnNlYXJjaF9ib3hfYXJlYSAucHJvZHVjdF90eXBlX2JveCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggNXB4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTIwLDU3LDEwNCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxMjAsNTcsMTA0LDApIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEgLnNlYXJjaF9ib3hfYXJlYSAucHJvZHVjdF90eXBlX2JveCAuZm9ybS1ncm91cHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuLmZvcm0tZ3JvdXAuYWN0aXZleyBvcGFjaXR5OiAxIWltcG9ydGFudDsgfVxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5zZWFyY2hfYm94X2FyZWEgLnByb2R1Y3RfdHlwZV9ib3ggLmZvcm0tZ3JvdXAgc3Bhbi5pY29uYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiA5cHg7XHJcbiAgICB0b3A6IDM1cHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMjM1IDE1MyA0MSAvIDUyJSk7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuc2VhcmNoX2JveF9hcmVhIC5wcm9kdWN0X3R5cGVfYm94IC5mb3JtLWNvbnRyb2wge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHBhZGRpbmc6IDAgMTVweCAwIDUwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZWI5OTI5OyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblxyXG59XHJcbi5wcm9kdWN0X21haW5fYXJlYSAucHJvZHVjdF9ib2R5X2FyZWEgLnNlYXJjaF9ib3hfYXJlYSAucHJvZHVjdF90eXBlX2JveCB0ZXh0YXJlYS5mb3JtLWNvbnRyb2x7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5zZWFyY2hfYm94X2FyZWEgLnByb2R1Y3RfdHlwZV9ib3ggLmJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNlYjk5Mjk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWI5OTI5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogYXV0byA1JTtcclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5zZWFyY2hfYm94X2FyZWEgLnByb2R1Y3RfdHlwZV9ib3ggLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5zZWFyY2hfYm94X2FyZWEgLnByb2R1Y3RfdHlwZV9ib3ggLmZvcm0tZ3JvdXAgbGFiZWwgLmljb24ge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnByb2R1Y3RfbWFpbl9hcmVhIC5wcm9kdWN0X2JvZHlfYXJlYSAuc2VhcmNoX2JveF9hcmVhIC5wcm9kdWN0X3R5cGVfYm94IC5mb3JtLWdyb3VwIGxhYmVsIC5pY29uIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5uYXZfYmFye1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5zZWFyY2hfYm94X2FyZWEgLnByb2R1Y3RfdHlwZV9ib3ggaDMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGNvbG9yOiAjZWI5OTI5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDAgMCAwIC8gMTMlKTtcclxufVxyXG4ucHJvZHVjdF9tYWluX2FyZWEgLnByb2R1Y3RfYm9keV9hcmVhIC5zZWFyY2hfYm94X2FyZWEgLnByb2R1Y3RfdHlwZV9ib3ggaW1nLnVzZXJfaWNvbntcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAycHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "M9Ge":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/box-hose/box-hose.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n    <div class=\"product_main_area\">\n      <div class=\"container\">\n        <div class=\"product_body_area\">\n          <div class=\"header_area\">\n            <button class=\"nav_bar\"  routerLink=\"/hose-page/4\" (click)=\"storePage('/hose-page/4')\"><i class=\"fas fa-arrow-left\"></i></button>\n            <div class=\"logo\"><img src=\"assets/images/logo.png\" alt=\"logo\" title=\"\"></div>\n          </div>\n          <div class=\"search_box_area\">\n            <h3>bare hoses</h3>\n            <div class=\"product_type_box\">\n              <h3>\n               Search Bare Hose\n              </h3>\n              <div class=\"form-group active\">\n                <label>\n                 Standard\n                </label>\n                <select class=\"form-control\" [(ngModel)]=\"standard\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" selected=\"selected\">Select standard</option>\n                  <option *ngFor=\"let data_liststandard of data_list_standard\" value=\"{{data_liststandard.standard_id}}\">{{data_liststandard.standard_name}}</option>\n                </select>\n                <span class=\"iconbox\"><img src=\"assets/images/hoseformicon1.png\" alt=\"#\"></span>\n              </div>\n              <div class=\"form-group active\">\n                <label>Size</label>\n                <select class=\"form-control\" [(ngModel)]=\"size\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" selected=\"selected\">Select size</option>\n                 <option *ngFor=\"let data_listsize of data_list_size\" value=\"{{data_listsize.size_id}}\">{{data_listsize.size_name}}</option>\n                </select>\n                <span class=\"iconbox\"><img src=\"assets/images/size.png\" alt=\"#\"></span>\n              </div>\n              <div class=\"form-group active\">\n                <label> Name </label>\n                <select class=\"form-control\" (change)=\"getPressure($event.target.value)\"  [(ngModel)]=\"productName\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" selected=\"selected\">Select name</option>\n                  <option *ngFor=\"let data_listproductnm of data_list_productnm\" value=\"{{data_listproductnm.item_id}}\">{{data_listproductnm.item_name}}</option>\n                </select>\n                <span class=\"iconbox\"><img src=\"assets/images/hoseformicon3.png\" alt=\"#\"></span>\n              </div>\n              <div class=\"form-group active\">\n                <label>Pressure</label>\n                <select class=\"form-control\" [(ngModel)]=\"pressure\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" selected=\"selected\" >Select</option>\n                   <option *ngFor=\"let pressure_list of pressureList\" value=\"{{pressure_list.hp_id}}\">{{pressure_list.hp_pressure}}</option>\n                </select>\n                <span class=\"iconbox\"><img src=\"assets/images/hoseformicon4.png\" alt=\"#\"></span>\n              </div>\n              <button class=\"btn\" (click)=\"gotoProduct()\">search</button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    \n  ");

/***/ }),

/***/ "Z9Yf":
/*!*****************************************************!*\
  !*** ./src/app/box-hose/box-hose-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BoxHosePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxHosePageRoutingModule", function() { return BoxHosePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _box_hose_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./box-hose.page */ "dXEO");




const routes = [
    {
        path: '',
        component: _box_hose_page__WEBPACK_IMPORTED_MODULE_3__["BoxHosePage"]
    }
];
let BoxHosePageRoutingModule = class BoxHosePageRoutingModule {
};
BoxHosePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BoxHosePageRoutingModule);



/***/ }),

/***/ "c1C2":
/*!*********************************************!*\
  !*** ./src/app/box-hose/box-hose.module.ts ***!
  \*********************************************/
/*! exports provided: BoxHosePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxHosePageModule", function() { return BoxHosePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _box_hose_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./box-hose-routing.module */ "Z9Yf");
/* harmony import */ var _box_hose_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./box-hose.page */ "dXEO");







let BoxHosePageModule = class BoxHosePageModule {
};
BoxHosePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _box_hose_routing_module__WEBPACK_IMPORTED_MODULE_5__["BoxHosePageRoutingModule"]
        ],
        declarations: [_box_hose_page__WEBPACK_IMPORTED_MODULE_6__["BoxHosePage"]]
    })
], BoxHosePageModule);



/***/ }),

/***/ "dXEO":
/*!*******************************************!*\
  !*** ./src/app/box-hose/box-hose.page.ts ***!
  \*******************************************/
/*! exports provided: BoxHosePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxHosePage", function() { return BoxHosePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_box_hose_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./box-hose.page.html */ "M9Ge");
/* harmony import */ var _box_hose_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./box-hose.page.scss */ "8uJE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");









let BoxHosePage = class BoxHosePage {
    constructor(http, navCtrl, storage, loadingController, alertController, route) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.route = route;
        this.appUrl_standard = "https://theitvibe.com/project/ihose/api/getStandard";
        this.appUrl_size = "https://theitvibe.com/project/ihose/api/getSize";
        this.appUrl_proname = "https://theitvibe.com/project/ihose/api/getProductName";
        this.appUrl_pressure = "https://theitvibe.com/project/ihose/api/getPressure";
        this.standard = '';
        this.size = '';
        this.productName = '';
        this.pressure = '';
        this.part_type = '';
        this.description = '';
        this.assembly_name = '';
        this.mk_name = '';
        this.part_no = '';
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params) {
                //let queryParams = params;
                this.id = params['id'];
                // console.log(this.id);
                this.listing_standard();
                this.listing_size();
                this.listing_productname();
            }
        });
    }
    storePage(page) {
        this.storage.set("goTo", page);
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
            console.log(err);
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
            console.log(err);
        });
    }
    listing_productname() {
        var data = {
            "id": this.id,
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
            console.log(err);
        });
    }
    gotoProduct() {
        this.storage.set("goTo", 'box-hose/1');
        this.navCtrl.navigateForward('product?assembly_name=' + this.assembly_name + '&part_type=' + this.part_type + '&standard=' + this.standard + '&size=' + this.size + '&name=' + this.productName + '&pressure=' + this.pressure + '&description=' + this.description + '&maker=' + this.mk_name + '&part_no=' + this.part_no);
    }
};
BoxHosePage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
BoxHosePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-box-hose',
        template: _raw_loader_box_hose_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_box_hose_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BoxHosePage);



/***/ })

}]);
//# sourceMappingURL=box-hose-box-hose-module.js.map