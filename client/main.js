(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.component.css":
/*!***********************************************!*\
  !*** ./src/app/account/account.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".accountdetails {\n    margin: auto;\n    width: 400px;\n    padding: 10px;\n}\n\ninput {\n    display: block;\n    margin: 5px 0;\n    width: 300px;\n    text-align: center;\n}\n\nbutton {\n    background-color: slategray;\n    color: white;\n    padding: 5px 10px;\n    margin: 8px 0;\n}\n\nbutton:hover {\n    opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnRkZXRhaWxzIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbmlucHV0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDVweCAwO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBtYXJnaW46IDhweCAwO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/account/account.component.html":
/*!************************************************!*\
  !*** ./src/app/account/account.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"accountdetails\">\n    <h1>Account Details</h1>\n    <div>\n      <img src=\"images\\{{profilepic}}\" height=\"256\" width=\"256\">\n      <h2>{{username}}</h2>\n    </div>\n    <div>\n      <h2> Update Password </h2>\n      <form ngNativeValidate (submit)=\"updatePassword()\">\n        <input type=\"password\" [(ngModel)]=\"currentpassword\" name=\"currentpassword\" placeholder=\"Current Password\" required>\n        <input type=\"password\" [(ngModel)]=\"newpassword\" name=\"newpassword\" placeholder=\"New Password\" required>\n        <input type=\"password\" [(ngModel)]=\"confirmpassword\" name=\"confirmpassword\" placeholder=\"Confirm New Password\" required>\n        <button type=\"submit\">Update Password</button>\n      </form>\n    </div>\n    <div>\n      <h2>Profile Picture</h2>\n      <h3>File Upload</h3>\n      <form>\n        <input type=\"file\" (change)=\"onFileSelected($event)\" name=\"uploadfile\" id=\"uploadfile\"/>\n        <button type=\"button\" (click)=\"onUpload()\">Upload</button>\n      </form>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountComponent = /** @class */ (function () {
    function AccountComponent(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        // NG Bindings for Account Details
        this.username = sessionStorage.getItem('username');
        this.profilepic = "";
        // NG Bindings for Updating Passwords
        this.currentpassword = '';
        this.newpassword = '';
        this.confirmpassword = '';
        // NG Bindings for Uploading a Profile Image
        this.selectedfile = null;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        // User is logged in Check
        if (!sessionStorage.getItem('username')) {
            sessionStorage.clear();
            alert('User is not logged in');
            this.router.navigateByUrl('login');
        }
        else {
            // Call Account Service to Recieve Account Details
            this.accountService.getaccountdetails(this.username).subscribe(function (data) {
                // Display Current Account Profile Picture
                _this.profilepic = data.profilepic;
            });
        }
    };
    // Sends request to server to update Account Password
    AccountComponent.prototype.updatePassword = function () {
        // Checks if User has successfully confirm new password input
        if (this.newpassword !== this.confirmpassword) {
            alert("Cannot Confirm New Password, Please try again");
            // Reset NG Fields
            this.newpassword = '';
            this.confirmpassword = '';
        }
        // Sends Password Inputs to Server to validate if Account Password can be Updated
        else {
            // Call Account Service to Send and Update Account Password
            this.accountService.updatepassword(this.username, this.currentpassword, this.newpassword).subscribe(function (data) {
                // Perform Response Data Checks
                if (data.success == true) {
                    alert("Successfully Updated Account Password");
                }
                else if (data.success == false) {
                    alert("Current Password does not match Account Password");
                }
            });
            // Reset NG Fields
            this.currentpassword = '';
            this.newpassword = '';
            this.confirmpassword = '';
        }
    };
    // Store the Selected Profile Picture File to Variable
    AccountComponent.prototype.onFileSelected = function (event) {
        console.log(event);
        this.selectedfile = event.target.files[0];
    };
    // Perform Upload and Update of Account Profile Picture to Server Database
    AccountComponent.prototype.onUpload = function () {
        var _this = this;
        // Construct new Form to Upload Image
        var fd = new FormData();
        fd.append('image', this.selectedfile, this.selectedfile.name);
        // Call Account Service to Upload Selected Image to Database
        this.accountService.imgupload(fd).subscribe(function (res) {
            console.log(res.data.filename + " , " + res.data.size);
            // Call Account Service that Updates the Account's Profile Picture with Uploaded Image
            _this.accountService.updateprofilepic(_this.username, res.data.filename).subscribe(function (res) {
                // Update Current Profile Picture
                _this.profilepic = res.profilepic;
            });
        });
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"] },
    { path: 'account', component: _account_account_component__WEBPACK_IMPORTED_MODULE_4__["AccountComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <app-menu></app-menu>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Chat-App';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_10__["ChatComponent"],
                _account_account_component__WEBPACK_IMPORTED_MODULE_11__["AccountComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ],
            providers: [_services_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    width: 100%;\n    height: 100%;\n}\n.chat {\n    float: left;\n    padding: 10px;\n    height: 100vh;\n}\n.chat.middle {\n    width: 55%;\n    min-width: 600px;\n    height: auto;\n    display: inline-block;\n    height: 100%;\n    background-color: #23272a;\n}\n#userprofile {\n    width: 99%;\n    height: 280px;\n    border-style: inset;\n    border-width: 10px;\n}\n#profilepic {\n    margin-left: 10px;\n    margin-top: 10px;\n    float: left;\n}\n#profiledetails {\n    float: left;\n    margin-left: 20px;\n    margin-top: 50px;\n}\n.chat.side {\n    width: 20%;\n    min-width: 300px;\n    height: auto;\n    display: inline-block;\n}\n.channels {\n    width: 100%;\n    height: 40px;\n    cursor: pointer;\n    text-align: left;\n    background-color: #23272a;\n    color: white;\n    border: none;\n    outline: none;\n}\n.chat.side h2 {\n    text-decoration: underline;\n}\n.chat.side form input[type=\"text\"] {\n    display: block;\n    height: 20px; \n    width: 90%;\n}\n.chat.side form select {\n    display: block;\n    height: 20px;\n    width: 90%;\n}\n.chat.side form button {\n    background-color: slategray;\n    color: white;\n    padding: 5px 10px;\n    margin: 8px 0;\n}\n.chat.middle button {\n    background-color: slategray;\n    color: white;\n    padding: 10px 20px;\n    margin: 8px 0;\n}\nbutton:hover {\n    opacity: 0.7;\n}\n.chat.side li {\n    color: white;\n    padding: 10px;\n    text-decoration: none;\n    display: block;\n}\n.chat.side li:hover {\n    background-color: palegrey;\n}\n#ChatLog {\n    width: 100%;\n    height: 600px;\n    overflow: auto;\n}\n#ChatLogMessages {\n    padding: 7px 10px;\n    font-size: 16;\n}\n#ChatMessage {\n    width: 90%;\n    min-width: 500px;\n    padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixVQUFVO0FBQ2Q7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osVUFBVTtBQUNkO0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCO0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztBQUNsQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLmNoYXQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNoYXQubWlkZGxlIHtcbiAgICB3aWR0aDogNTUlO1xuICAgIG1pbi13aWR0aDogNjAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjcyYTtcbn1cblxuI3VzZXJwcm9maWxlIHtcbiAgICB3aWR0aDogOTklO1xuICAgIGhlaWdodDogMjgwcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcbiAgICBib3JkZXItd2lkdGg6IDEwcHg7XG59XG5cbiNwcm9maWxlcGljIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4jcHJvZmlsZWRldGFpbHMge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5jaGF0LnNpZGUge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY2hhbm5lbHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyNzJhO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNoYXQuc2lkZSBoMiB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5jaGF0LnNpZGUgZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAyMHB4OyBcbiAgICB3aWR0aDogOTAlO1xufVxuXG4uY2hhdC5zaWRlIGZvcm0gc2VsZWN0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDkwJTtcbn1cblxuLmNoYXQuc2lkZSBmb3JtIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBtYXJnaW46IDhweCAwO1xufVxuXG4uY2hhdC5taWRkbGUgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBtYXJnaW46IDhweCAwO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNztcbn1cblxuLmNoYXQuc2lkZSBsaSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY2hhdC5zaWRlIGxpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxlZ3JleTtcbn1cblxuI0NoYXRMb2cge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbiNDaGF0TG9nTWVzc2FnZXMge1xuICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTY7XG59XG5cbiNDaGF0TWVzc2FnZSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"chat side\">\n        <div *ngIf=\"role == 'Super Admin' || role == 'Group Admin'\">\n            <h2>Create Group</h2>\n            <form ngNativeValidate (submit)=\"createGroup()\">\n                <input type=\"text\" [(ngModel)]=\"newgroup\" placeholder=\"Group Name\" name=\"groupname\" required>\n                <button type=\"submit\">Create Group</button>\n            </form>\n            <h2>Create Channel</h2>\n            <form ngNativeValidate (submit)=\"createChannel()\">\n                <select [(ngModel)]=\"selectedgroup\" name=\"selectedgroupname\" required>\n                    <ng-container *ngFor=\"let group of groups\">\n                        <ng-container *ngIf=\"group.groupname != 'Default' && group.groupname != 'Admin Group'\">\n                            <option value=\"{{group.groupname}}\">{{group.groupname}}</option>\n                        </ng-container>\n                    </ng-container>\n                </select>\n                <input type=\"text\" [(ngModel)]=\"newchannel\" placeholder=\"Channel Name\" name=\"channelname\" required>\n                <button type=\"submit\">Create Channel</button>\n            </form>\n        </div>\n        <div>\n            <h2>Groups:</h2>\n            <div *ngFor=\"let group of groups\">\n                <h3>{{group.groupname}}</h3>\n                <div *ngFor=\"let channel of group.channels\"><button (click)=\"joinChannel(group.groupname, channel.channelname)\" class=\"channels\">{{channel.channelname}}</button></div>\n            </div>\n        </div>\n        <div *ngIf=\"role == 'Super Admin' || role == 'Group Admin'\">\n            <h2>Delete Group</h2>\n            <form ngNativeValidate (submit)=\"deleteGroup()\">\n                <select [(ngModel)]=\"deletegroup\" name=\"deletegroupname\" required>\n                    <ng-container *ngFor=\"let group of groups\">\n                        <ng-container *ngIf=\"group.groupname != 'Default' && group.groupname != 'Admin Group'\">\n                            <option value=\"{{group.groupname}}\">{{group.groupname}}</option>\n                        </ng-container>\n                    </ng-container>\n                </select>\n                <button type=\"submit\">Delete Group</button>\n            </form>\n            <h2>Delete Channel</h2>\n            <form ngNativeValidate (submit)=\"deleteChannel()\">\n                <select [(ngModel)]=\"deletechannelgroup\" name=\"deletechannelgroupname\" required>\n                    <ng-container *ngFor=\"let group of groups\">\n                        <ng-container *ngIf=\"group.groupname != 'Default' && group.groupname != 'Admin Group'\">\n                            <option value=\"{{group.groupname}}\">{{group.groupname}}</option>\n                        </ng-container>\n                    </ng-container>\n                </select>\n                <input type=\"text\" [(ngModel)]=\"deletechannel\" placeholder=\"Channel Name\" name=\"deletechannelname\" required>\n                <button type=\"submit\">Delete Channel</button>\n            </form>\n        </div>\n    </div>\n\n    <div class=\"chat middle\">\n        <div id=\"userprofile\">\n            <div id=\"profilepic\" *ngIf=\"profilepic != null\">\n                    <img src=\"images\\{{profilepic}}\" height=\"256\" width=\"256\">\n            </div>\n            <div id=\"profiledetails\">\n                <h2>Username: {{username}}</h2>\n                <h3>Role: {{role}}</h3>\n            </div>\n        </div>\n        <h3>{{currentgroup}} ({{currentchannel}})</h3>\n        <div>\n            <h2>Chat Messages</h2>\n            <div id=\"ChatLog\">\n                <div *ngFor=\"let message of messages\" id=\"ChatLogMessages\">{{message}}</div>\n            </div>\n            <input [(ngModel)]=\"message\" id=\"ChatMessage\" placeholder=\"Enter Chat Message\">\n            <button (click)=\"sendMessage()\">Send</button>\n        </div>\n    </div>\n\n    <div class=\"chat side\">\n        <div *ngIf=\"role == 'Super Admin' || role == 'Group Admin'\">\n            <div>\n                <h2>Invite User</h2>\n                <form ngNativeValidate (submit)=\"registerUser()\">\n                    <input type=\"text\" placeholder=\"username\" [(ngModel)]='newuser' name=\"newusername\" required>\n                    <button type=\"submit\">Invite User</button>\n                </form>\n            </div>\n            <div>\n                <h2>Update User Role</h2>\n                <form ngNativeValidate (submit)=\"updateRole()\">\n                    <select [(ngModel)]=\"selecteduser\" name=\"selectedusername\" required>\n                        <ng-container *ngFor=\"let user of users\">\n                            <option *ngIf=\"role == 'Super Admin' && user.username != username\" value=\"{{user.username}}\">{{user.username}}</option>\n                            <option *ngIf=\"role == 'Group Admin' && user.username != username && user.role != 'Super Admin'\" value=\"{{user.username}}\">{{user.username}}</option>\n                        </ng-container>\n                    </select>\n                    <select [(ngModel)]=\"newrole\" name=\"selectedrole\" required>\n                        <option value=\"Super Admin\" *ngIf=\"role == 'Super Admin'\">Super Admin</option>\n                        <option value=\"Group Admin\">Group Admin</option>\n                        <option value=\"Member\">Member</option>\n                    </select>\n                    <button type=\"submit\">Update Role</button>\n                </form>\n            </div>\n        </div>\n        <div>\n            <h2>Users:</h2>\n            <h3>Super Admins</h3>\n            <ul>\n                <ng-container *ngFor=\"let user of users\">\n                    <li *ngIf=\"user.role == 'Super Admin'\">\n                        <ng-container *ngIf=\"user.profilepic != null\"><img src=\"images\\{{user.profilepic}}\" height=\"60\" width=\"60\"></ng-container>\n                        {{user.username}}\n                    </li>\n                </ng-container>\n            </ul>\n            <h3>Group Admins</h3>\n            <ul>\n                <ng-container *ngFor=\"let user of users\">\n                    <li *ngIf=\"user.role == 'Group Admin'\">\n                        <ng-container *ngIf=\"user.profilepic != null\"><img src=\"images\\{{user.profilepic}}\" height=\"60\" width=\"60\"></ng-container>\n                        {{user.username}}\n                    </li>\n                </ng-container>\n            </ul>\n            <h3>Members</h3>\n            <ul>\n                <ng-container *ngFor=\"let user of users\">\n                    <li *ngIf=\"user.role == 'Member'\">\n                        <ng-container *ngIf=\"user.profilepic != null\"><img src=\"images\\{{user.profilepic}}\" height=\"60\" width=\"60\"></ng-container>\n                        {{user.username}}\n                    </li>\n                </ng-container>\n            </ul>\n        </div>\n        <div *ngIf=\"role == 'Super Admin'\">\n            <h2>Delete User</h2>\n            <form ngNativeValidate (submit)=\"deleteUser()\">\n                <select [(ngModel)]=\"deleteuser\" name=\"deleteusername\" required>\n                    <ng-container *ngFor=\"let user of users\">\n                        <option *ngIf=\"role == 'Super Admin' && user.username != username\" value=\"{{user.username}}\">{{user.username}}</option>\n                        <option *ngIf=\"role == 'Group Admin' && user.username != username && user.role != 'Super Admin'\" value=\"{{user.username}}\">{{user.username}}</option>\n                    </ng-container>\n                </select>\n                <button type=\"submit\">Delete User</button>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatComponent = /** @class */ (function () {
    function ChatComponent(socketService, adminService, accountService, router) {
        this.socketService = socketService;
        this.adminService = adminService;
        this.accountService = accountService;
        this.router = router;
        this.messages = []; // Stores collection of chat messages
        // NG Binds for Account Details
        this.username = sessionStorage.getItem('username');
        this.currentgroup = sessionStorage.getItem('currentgroup');
        this.currentchannel = sessionStorage.getItem('currentchannel');
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        // User is logged in Check
        if (!sessionStorage.getItem('username')) {
            sessionStorage.clear();
            alert('User is not logged in');
            this.router.navigateByUrl('login');
        }
        // If Login confirmed, subsribe to socket.
        else {
            // Refresh Observable Subscriptions every Second
            var obtimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(1000, 1000);
            this.obrefresh = obtimer.subscribe(function (data) {
                // Subscribe to Account Feed to retrieve Observable data of Account Details
                _this.accountfeed = _this.accountService.getaccountdetails(_this.username).subscribe(function (data) {
                    // Display Account Details
                    _this.role = data.role;
                    _this.profilepic = data.profilepic;
                });
                // Subscribe to Channel Feed to retrieve Observable Data of Stored Users
                _this.userfeed = _this.adminService.fetchUsers().subscribe(function (data) {
                    // Display User List
                    _this.users = data;
                });
                // Subscribe to Channel Feed to retrieve Observable Data of Stored Groups
                _this.groupfeed = _this.adminService.fetchGroups().subscribe(function (data) {
                    // Display Groups and Channels
                    _this.groups = data;
                });
            });
            // Subscribes to Message Feed with chat messages sent / recieved.
            this.messagefeed = this.socketService.getMessages().subscribe(function (message) {
                // Update Messages
                _this.messages.push(message);
                _this.message = '';
            });
            // Join Default Channel Upon Entering Chat
            this.socketService.defaultChannel(this.username);
        }
    };
    // Register a New User to the Chat-Application
    ChatComponent.prototype.registerUser = function () {
        var _this = this;
        this.adminService.registeruser(this.newuser).subscribe(function (data) {
            // Perform Respone Data Checks
            if (data.success == true) {
                alert("User " + data.username + " has been successfully created");
            }
            else if (data.success == false) {
                alert("User " + data.username + " already exists");
            }
            _this.newuser = '';
        }, function (error) { alert("Error: " + error); });
    };
    // Update an Existing User's Role
    ChatComponent.prototype.updateRole = function () {
        var _this = this;
        this.adminService.updaterole(this.selecteduser, this.newrole).subscribe(function (data) {
            // Perform Response Data Checks
            if (data.success == true) {
                alert("User '" + data.username + "' has been changed to '" + data.role + "'");
            }
            else if (data.success == false) {
                alert(data.username + " has not changed role");
            }
            _this.selecteduser = '';
            _this.newrole = '';
        });
    };
    // Delete a User from Chat-App
    ChatComponent.prototype.deleteUser = function () {
        var _this = this;
        this.adminService.deleteuser(this.deleteuser).subscribe(function (data) {
            // Perform Response Data Checks
            if (data.success == true) {
                alert("User '" + data.username + "' has been deleted");
            }
            else if (data.success == false) {
                alert("Failed to delete User");
            }
            _this.deleteuser = '';
        });
    };
    // Create a new Group
    ChatComponent.prototype.createGroup = function () {
        var _this = this;
        this.adminService.creategroup(this.newgroup).subscribe(function (data) {
            // Perform Response Data Checks
            if (data.success == true) {
                alert("Group '" + data.groupname + "' has been created");
            }
            else if (data.success == false) {
                alert("Group '" + data.groupname + "' already exists");
            }
            _this.newgroup = '';
        });
    };
    // Delete an Existing Group
    ChatComponent.prototype.deleteGroup = function () {
        var _this = this;
        this.adminService.deletegroup(this.deletegroup).subscribe(function (data) {
            // Perform Response Data Checks
            if (data.success == true) {
                alert("Group '" + data.groupname + "' has been deleted");
            }
            else if (data.success == false) {
                alert("Error: Group Not Found");
            }
            _this.deletegroup = '';
        });
    };
    // Create a new Channel for Chat-Application
    ChatComponent.prototype.createChannel = function () {
        var _this = this;
        console.log("Creating Channel");
        this.adminService.createchannel(this.selectedgroup, this.newchannel).subscribe(function (data) {
            // Perform Response Data Checks
            if (data.success == true) {
                alert("Channel '" + data.channelname + " ' has been created");
            }
            else if (data.success == false) {
                alert("Channel '" + data.channelname + " ' already exists in Group '" + data.groupname + "'");
            }
            _this.newchannel = '';
        });
    };
    // Delete a Channel from Group
    ChatComponent.prototype.deleteChannel = function () {
        var _this = this;
        this.adminService.deletechannel(this.deletechannelgroup, this.deletechannel).subscribe(function (data) {
            // Perform Response Data Checks
            if (data.success == true) {
                alert("Channel " + data.channelname + " has been deleted from " + data.groupname);
            }
            else if (data.success == false) {
                alert("Channel doesn't exist in " + data.groupname);
            }
            _this.deletechannelgroup = '';
            _this.deletechannel = '';
        });
    };
    // Join a new chat channel
    ChatComponent.prototype.joinChannel = function (group, channel) {
        if (group !== this.currentgroup && channel !== this.currentchannel) {
            var leavechannel = (this.currentgroup + " " + this.currentchannel); // Store Current Channel
            var leavemessage = (this.username + " has left the channel"); // Create a Message to Broadcast to Old Channel
            var joinchannel = (group + " " + channel); // Store Selected Channel
            var joinmessage = (this.username + " has joined " + channel); // Create a Message to Broadcast to New Channel
            this.messages = []; // Reset Chat Messages
            // Disconnect from Current Channel and Join New Channel
            this.socketService.leaveChannel(leavechannel, leavemessage);
            this.socketService.joinChannel(joinchannel, joinmessage);
            // Update Current Channel when joining New Channel
            this.currentgroup = group;
            this.currentchannel = channel;
        }
    };
    // Sends message to all connected chat members in channel
    ChatComponent.prototype.sendMessage = function () {
        var channel = (this.currentgroup + " " + this.currentchannel); // Store Current Channel
        var message = ('(' + this.username + '): ' + this.message); // Create message to send to Current Channel
        this.socketService.sendMessage(channel, message);
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from Feeds
        if (this.obrefresh) {
            this.obrefresh.unsubscribe();
            console.log("Unsubscribed from OB Refresh");
        }
        if (this.accountfeed) {
            this.accountfeed.unsubscribe();
            console.log("Unsubscribed from Account Feed");
        }
        if (this.userfeed) {
            this.userfeed.unsubscribe();
            console.log("Unsubscribed from UserFeed");
        }
        if (this.groupfeed) {
            this.groupfeed.unsubscribe();
            console.log("Unsubscribed from GroupFeed");
        }
        if (this.messagefeed) {
            this.messagefeed.unsubscribe();
            console.log("Unsubscribed from MessageFeed");
        }
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [_services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"], _services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginform {\n    margin: auto;\n    width: 400px;\n    padding: 10px;\n}\n\n\ninput[type=email], input[type=password] {\n    display: block;\n    width: 300px;\n    padding: 5px;\n    border: 1px solid black;\n    box-sizing: border-box;\n}\n\n\nbutton {\n    background-color: slategray;\n    color: white;\n    padding: 10px 20px;\n    margin: 8px 0;\n}\n\n\nbutton:hover {\n    opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7OztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5mb3JtIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cblxuaW5wdXRbdHlwZT1lbWFpbF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containter\">\n  <div class=\"loginform\">\n    <h2>Chat-App Login</h2>\n    <form (submit)=\"userLogin()\">\n    <input type=\"email\" placeholder=\"Username\" [(ngModel)]='username' name=\"username\" id=\"username\">\n    <input type=\"password\" placeholder=\"Password\" [(ngModel)]='password' name=\"password\" id=\"password\">\n    <button type=\"submit\">Login</button>\n  </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, form, authservice) {
        this.router = router;
        this.form = form;
        this.authservice = authservice;
        this.username = '';
        this.password = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // Responds if User is already currently logged in. Redirect to Chat.
        if (sessionStorage.getItem('username')) {
            alert("User is already logged in as: " + sessionStorage.getItem('username'));
            this.router.navigateByUrl('chat');
        }
    };
    // Login Function when login form is submitted to Auth Service.
    LoginComponent.prototype.userLogin = function () {
        var _this = this;
        this.authservice.login(this.username, this.password).subscribe(function (data) {
            // Assign returned Auth Data to Session Storage
            sessionStorage.setItem('username', data.username);
            sessionStorage.setItem('currentgroup', 'Default');
            sessionStorage.setItem('currentchannel', 'Welcome to Chat App');
            _this.router.navigateByUrl('chat');
        }, function (error) {
            // Notify User upon return of Authentication Error
            alert('Username and Password were incorrect');
            _this.username = '';
            _this.password = '';
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n    list-style-type: none;\n    margin: 0%;\n    padding: 0%;\n    overflow: hidden;\n    background-color: dimgray;\n}\n\nli {\n    float: left;\n}\n\na {\n    display: block;\n    color: white;\n    text-align: center;\n    text-decoration: none;\n    padding: 14px 16px;\n}\n\na:hover {\n    background-color: slategray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDAlO1xuICAgIHBhZGRpbmc6IDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGltZ3JheTtcbn1cblxubGkge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG5hIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG59XG5cbmE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JheTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul>\n    <li><a routerLink=\"login\">Login</a></li>\n    <li><a routerLink=\"chat\">Chat</a></li>\n    <li><a routerLink=\"account\">Account</a></li>\n    <li style=\"float:right\"><a (click)=\"logout()\">Logout</a></li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(router) {
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.logout = function () {
        if (sessionStorage.getItem('username')) {
            sessionStorage.clear();
            this.router.navigateByUrl('login');
        }
        else {
            alert("User has already been logged out");
        }
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/services/account.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountService = /** @class */ (function () {
    function AccountService(http) {
        this.http = http;
    }
    // Server Retrieve Account Details HTTP
    AccountService.prototype.getaccountdetails = function (username) {
        return this.http.post('/api/accounts/users/getdetails', { username: username });
    };
    // Server Update Account Password HTTP
    AccountService.prototype.updatepassword = function (username, currentpassword, newpassword) {
        return this.http.post('/api/accounts/users/updatepassword', { username: username, password: currentpassword, newpassword: newpassword });
    };
    // Upload Profile Picture HTTP
    AccountService.prototype.imgupload = function (fd) {
        return this.http.post('/api/accounts/users/imgupload', fd);
    };
    // Server Update Account Profile Picture HTTP
    AccountService.prototype.updateprofilepic = function (username, profilepic) {
        return this.http.post('/api/accounts/users/updateprofilepic', { username: username, profilepic: profilepic });
    };
    AccountService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/services/admin.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
    }
    // Server User Registration HTTP
    AdminService.prototype.registeruser = function (username) {
        return this.http.post('api/admin/reg', { username: username });
    };
    // Server Update User Role HTTP
    AdminService.prototype.updaterole = function (username, role) {
        return this.http.post('/api/admin/users/updaterole', { username: username, role: role });
    };
    // Server Delete User HTTP
    AdminService.prototype.deleteuser = function (username) {
        return this.http.post('/api/admin/users/deleteuser', { username: username });
    };
    // Server Create Group HTTP
    AdminService.prototype.creategroup = function (groupname) {
        return this.http.post('/api/admin/groups/creategroup', { groupname: groupname });
    };
    // Server Delete Group HTTP
    AdminService.prototype.deletegroup = function (groupname) {
        return this.http.post('/api/admin/groups/deletegroup', { groupname: groupname });
    };
    // Server Create Channel HTTP
    AdminService.prototype.createchannel = function (groupname, channelname) {
        return this.http.post('/api/admin/groups/createchannel', { groupname: groupname, channelname: channelname });
    };
    // Server Delete Channel HTTP
    AdminService.prototype.deletechannel = function (groupname, channelname) {
        return this.http.post('/api/admin/groups/deletechannel', { groupname: groupname, channelname: channelname });
    };
    // Server Fetch User List
    AdminService.prototype.fetchUsers = function () {
        return this.http.post('/api/admin/users/fetchdata', {});
    };
    // Server Fetch Group Data
    AdminService.prototype.fetchGroups = function () {
        return this.http.post('/api/admin/groups/fetchdata', {});
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    // POST Login data to Server Authentication
    AuthService.prototype.login = function (username, password) {
        return this.http.post('/api/auth', { username: username, password: password });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/socket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketService = /** @class */ (function () {
    function SocketService() {
        this.url = 'http://localhost:3000';
    }
    // Default Chatroom
    SocketService.prototype.defaultChannel = function (username) {
        this.socket.emit('default-channel', username);
    };
    // Join Chatroom Channel
    SocketService.prototype.joinChannel = function (joinchannel, joinmessage) {
        this.socket.emit('join-channel', joinchannel, joinmessage);
    };
    // Leave Chatroom Channel
    SocketService.prototype.leaveChannel = function (leavechannel, leavemessage) {
        this.socket.emit('leave-channel', leavechannel, leavemessage);
    };
    // Send Message to server to be transmitted over chat.
    SocketService.prototype.sendMessage = function (channel, message) {
        this.socket.emit('add-message', channel, message);
    };
    // Retrieve stream of messages from server that were transmitted over chat.
    SocketService.prototype.getMessages = function () {
        var _this = this;
        var obmessages = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__();
            _this.socket.on('message', function (message) { observer.next(message); });
            return function () { _this.socket.disconnect(); };
        });
        return obmessages;
    };
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Kaha Mason\Desktop\Chat-App-master\client\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map