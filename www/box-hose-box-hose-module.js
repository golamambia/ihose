(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["box-hose-box-hose-module"],{

/***/ "8uJE":
/*!*********************************************!*\
  !*** ./src/app/box-hose/box-hose.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\nhtml, body {\n  display: block;\n  height: 100%;\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n  position: relative;\n  z-index: 1;\n  background-color: #ffffff;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Montserrat\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.automotive_area {\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.automotive_area:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 32%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url('sape1.png');\n  z-index: 0;\n}\n.container {\n  width: 90%;\n  box-sizing: border-box;\n  padding: 0;\n  margin: auto;\n}\n.automotive_body {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n}\n.header_area {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: center;\n  padding: 18px 0px 24px;\n}\n.header_area h1 {\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0 0;\n  margin: 0 0;\n  color: #ffffff;\n  font-size: 18px;\n  font-weight: 500;\n}\n.header_area .btn-back {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 1px 0;\n  outline: none;\n  float: left;\n  max-width: 22px;\n}\n.header_area .btn-cart {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  padding: 0px 0;\n  outline: none;\n  float: right;\n  max-width: 28px;\n}\n.search_box {\n  width: 97%;\n  box-sizing: border-box;\n  overflow: hidden;\n  border-radius: 6px;\n  position: relative;\n  z-index: 1;\n  margin: 0 0 58px;\n  box-shadow: 0px 0px 7px #0000001c;\n  margin-left: auto;\n  margin-right: auto;\n}\n.search_box .form-control {\n  width: 100%;\n  height: 48px;\n  background: #ffffff;\n  border: 1px solid #ffffff;\n  font-size: 14px;\n  font-weight: 500;\n  color: #868686;\n  padding: 10px 45px 10px 10px;\n  /* box-shadow: 0 0 0px rgb(0, 0, 0); */\n  outline: none;\n}\n.search_box .form-control::placeholder {\n  font-weight: 500;\n  color: #868686;\n}\n.search_box .icon {\n  position: absolute;\n  top: 9px;\n  font-size: 26px;\n  color: #bebebe;\n  right: 15px;\n}\n.automotive_body h3 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0 15px;\n  margin: 0 0 30px;\n  font-size: 18px;\n  font-weight: 600;\n  color: #000000;\n  border-bottom: 1px dashed #949494;\n}\n.form-group {\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  margin: 0 0 25px;\n}\nselect.form-control {\n  width: 100%;\n  height: 52px;\n  border-radius: 10px;\n  border: 1px solid #8e8e8d;\n  font-size: 14px;\n  font-weight: 400;\n  color: #616161;\n  padding: 15px 15px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: none;\n  background-color: transparent;\n  background: transparent;\n}\n.form-group .arrow {\n  position: absolute;\n  top: 17px;\n  right: 17px;\n}\nselect.form-control:focus {\n  border-color: #e9492a;\n  background-color: transparent;\n  background: transparent;\n}\n.form-group label {\n  position: absolute;\n  top: -10px;\n  left: 12px;\n  background: #ffffff;\n  font-size: 15px;\n  font-weight: 600;\n  color: #000000;\n  padding: 0 2px;\n}\n.btn {\n  width: 100%;\n  height: 52px;\n  background: #e9492a;\n  border: 1px solid #e9492a;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 500;\n  outline: none;\n  border-radius: 10px;\n  letter-spacing: 1px;\n}\n@media (max-width: 414px) {\n  .search_box {\n    margin: 36px 0 58px;\n  }\n}\n@media (max-width: 411px) {\n  .search_box {\n    margin: 40px 0 58px;\n  }\n}\n@media (max-width: 375px) {\n  .search_box {\n    margin: 14px 0 58px;\n  }\n}\n@media (max-width: 360px) {\n  .search_box {\n    margin: 4px 0 58px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJveC1ob3NlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx5RkFBQTtBQUNBLCtIQUFBO0FBQ0EscU1BQUE7QUFDUjtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUVBO0VBQ0ksc0JBQUE7QUFDSjtBQUNBO0VBQXdCLHFDQUFBO0FBR3hCO0FBRkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUtKO0FBSEE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQU1GO0FBSkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0FBT0o7QUFMQTtFQUNJLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBUUo7QUFOQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBU0Y7QUFQQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQVVKO0FBUkE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBV0Y7QUFUQTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVlKO0FBVkE7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFhSjtBQVhBO0VBQ0ksVUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBY0o7QUFaQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsYUFBQTtBQWVKO0FBYkE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFnQkY7QUFkQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUVBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQWdCSjtBQWJBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtBQWdCSjtBQWRBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWlCRjtBQWZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0FBa0JKO0FBaEJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQW1CRjtBQWpCQTtFQUNJLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtBQW9CSjtBQWxCQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBcUJGO0FBbkJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFzQkY7QUFoQkE7RUFDQTtJQUNJLG1CQUFBO0VBbUJGO0FBQ0Y7QUFqQkE7RUFFQTtJQUVJLG1CQUFBO0VBaUJGO0FBQ0Y7QUFWQTtFQUNBO0lBQ0ksbUJBQUE7RUFZRjtBQUNGO0FBVEE7RUFDQTtJQUNJLGtCQUFBO0VBV0Y7QUFDRiIsImZpbGUiOiJib3gtaG9zZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTQuMC9jc3MvYWxsLm1pbi5jc3MnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGVyaWFsLWRlc2lnbi1pY29uaWMtZm9udC8yLjIuMC9jc3MvbWF0ZXJpYWwtZGVzaWduLWljb25pYy1mb250Lm1pbi5jc3MnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XHJcbmh0bWwsIGJvZHkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OjE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxufVxyXG4qLCA6OmFmdGVyLCA6OmJlZm9yZSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDZ7IGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7fVxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5hdXRvbW90aXZlX2FyZWF7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5hdXRvbW90aXZlX2FyZWE6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMiU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvc2FwZTEucG5nKTtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmF1dG9tb3RpdmVfYm9keXtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLmhlYWRlcl9hcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDBweCAyNHB4O1xyXG59XHJcbi5oZWFkZXJfYXJlYSBoMXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwIDA7XHJcbiAgbWFyZ2luOiAwIDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmhlYWRlcl9hcmVhIC5idG4tYmFjayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDFweCAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWF4LXdpZHRoOiAyMnB4O1xyXG59XHJcbi5oZWFkZXJfYXJlYSAuYnRuLWNhcnQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwcHggMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXgtd2lkdGg6IDI4cHg7XHJcbn1cclxuLnNlYXJjaF9ib3gge1xyXG4gICAgd2lkdGg6IDk3JTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG1hcmdpbjogMCAwIDU4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAjMDAwMDAwMWM7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uc2VhcmNoX2JveCAuZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM4Njg2ODY7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDQ1cHggMTBweCAxMHB4O1xyXG4gICAgLyogYm94LXNoYWRvdzogMCAwIDBweCByZ2IoMCwgMCwgMCk7ICovXHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5zZWFyY2hfYm94IC5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVye1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICM4Njg2ODY7XHJcbn1cclxuLnNlYXJjaF9ib3ggLmljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA5cHg7XHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGNvbG9yOiAjYmViZWJlO1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcblxyXG59XHJcbi5hdXRvbW90aXZlX2JvZHkgaDMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAwIDE1cHg7XHJcbiAgICBtYXJnaW46IDAgMCAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjOTQ5NDk0O1xyXG59XHJcbi5mb3JtLWdyb3Vwe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMCAwIDI1cHg7XHJcbn1cclxuc2VsZWN0LmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOGU4ZThkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjNjE2MTYxO1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmZvcm0tZ3JvdXAgLmFycm93e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE3cHg7XHJcbiAgcmlnaHQ6IDE3cHg7XHJcbn1cclxuc2VsZWN0LmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICNlOTQ5MmE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5mb3JtLWdyb3VwIGxhYmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTBweDtcclxuICBsZWZ0OiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgcGFkZGluZzogMCAycHg7XHJcbn1cclxuLmJ0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOTQ5MmE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5NDkyYTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjQxNHB4KSB7XHJcbi5zZWFyY2hfYm94IHtcclxuICAgIG1hcmdpbjogMzZweCAwIDU4cHg7XHJcbn1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjQxMXB4KSB7XHJcblxyXG4uc2VhcmNoX2JveCB7XHJcbiAgIFxyXG4gICAgbWFyZ2luOiA0MHB4IDAgNThweDtcclxuICAgIFxyXG59XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo0MTBweCkge1xyXG5cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDozNzVweCkge1xyXG4uc2VhcmNoX2JveCB7XHJcbiAgICBtYXJnaW46IDE0cHggMCA1OHB4O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MzYwcHgpIHtcclxuLnNlYXJjaF9ib3gge1xyXG4gICAgbWFyZ2luOiA0cHggMCA1OHB4O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MzIwcHgpIHtcclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "M9Ge":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/box-hose/box-hose.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--  <ion-header >\n  <ion-toolbar class=\"toolbar-background\">\n  <ion-buttons slot=\"start\" >\n   <ion-back-button class=\"button-native\"></ion-back-button>\n</ion-buttons>\n<ion-title class=\"toolbar-title\">Bare Hoses</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-content>\n  \n    <div class=\"automotive_area\">\n      <div class=\"container\">\n          <div class=\"automotive_body\">\n              <div class=\"header_area\">\n                  <button class=\"btn-back\"  routerLink=\"/home\" (click)=\"storePage('/hose-page/4')\"><img src=\"assets/images/back.png\" alt=\"back\" title=\"\" /></button>\n                  <h1>Bare Hoses</h1>\n                  <button class=\"btn-cart\" routerLink=\"/cart-page\"><img src=\"assets/images/cart.png\" alt=\"back\" title=\"\" /><span class=\"total_cart\" [innerHTML]=\"cartcount\" ></span></button>\n              </div>\n              <div class=\"search_box\">\n                  <div class=\"icon\" (click)=\"gotoProductserch()\"><i class=\"zmdi zmdi-search\" ></i></div>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"text_search\" placeholder=\"Search Products...\" />\n              </div>\n              <h3>Search Bare Hoses</h3>\n              <div class=\"form-group\">\n                  <label>Standard</label>\n                   <select class=\"form-control\" [(ngModel)]=\"standard\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" selected=\"selected\">Select standard</option>\n                  <option *ngFor=\"let data_liststandard of data_list_standard\" value=\"{{data_liststandard.standard_id}}\">{{data_liststandard.standard_name}}</option>\n                </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <div class=\"form-group\">\n                  <label>Size</label>\n                  <select class=\"form-control\" [(ngModel)]=\"size\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" selected=\"selected\">Select size</option>\n                 <option *ngFor=\"let data_listsize of data_list_size\" value=\"{{data_listsize.size_id}}\">{{data_listsize.size_name}}</option>\n                </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <div class=\"form-group\">\n                  <label>Name</label>\n                  <select class=\"form-control\" (change)=\"getPressure($event.target.value)\"  [(ngModel)]=\"productName\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" selected=\"selected\">Select name</option>\n                  <option *ngFor=\"let data_listproductnm of data_list_productnm\" value=\"{{data_listproductnm.item_id}}\">{{data_listproductnm.item_name}}</option>\n                </select>\n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <div class=\"form-group\">\n                  <label>Pressure</label>\n                  <select class=\"form-control\" [(ngModel)]=\"pressure\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"\" selected=\"selected\" >Select</option>\n                   <option *ngFor=\"let pressure_list of pressureList\" value=\"{{pressure_list.hp_id}}\">{{pressure_list.hp_pressure}}</option>\n                </select> \n                  <div class=\"arrow\"><img src=\"assets/images/select-arrow.png\" alt=\"select arrow\" title=\"\" /></div>\n              </div>\n              <button class=\"btn\" (click)=\"gotoProduct()\" routerLink=\"/product\">search</button>\n          </div>\n      </div>\n    </div>\n  </ion-content>\n");

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
        this.count = 0;
        this.cart_data = [];
        this.cartcount = 0;
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
    gotoProductserch() {
        //console.log(this.text_search);
        this.storage.set("goTo", 'box-hose/1');
        this.navCtrl.navigateForward('product?text_search=' + this.text_search);
    }
    gotoProduct() {
        this.storage.set("goTo", 'box-hose/1');
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