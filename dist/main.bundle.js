webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        // template: `<router-outlet></router-outlet>`,
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_24__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_25__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_26__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_27__services_widget_service_client__["a" /* WidgetService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/**
 * Created by Vishal Sanjiv Kotak on 10/03/3017
 */















// Array of routes describing how to navingate.
// There will be no leading slashes in the path.
var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_7__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_8__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_10__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_11__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] }
];
// Export the routes as module providers and configure routers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>\n    Angular 4 MEAN stack app\n  </h1>\n\n\n  <h3>\n    App works\n  </h3>\n\n\n  <h4>\n    <a href=\"test\">Test MongoDB</a>\n  </h4>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4\">\n      <div class=\"navbar-text pull-left\">\n        <a [routerLink]=\"['/user/:uid/website/:wid/page']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <div class=\"navbar-header pull-left hidden-xs\">\n        <a class=\"navbar-brand thick\">\n          <b>Pages</b>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right hidden-xs\">\n        <a [routerLink]=\"['/user/:uid/website/:wid/page/new']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n    </div>\n    <div class = \"col-sm-8\">\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Edit Page</b>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user/:uid/website/:wid/page']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class = \"container-fluid\">\n  <div class = \"row\">\n    <div class = \"col-sm-4 hidden-xs\">\n      <div class = \"row page-item\">\n        <div class = \"col-xs-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\">\n            <span class = \"text text-info\">Blog Post</span>\n          </a>\n        </div>\n        <div class = \"col-xs-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\">\n            <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n          </a>\n        </div>\n      </div>\n      <div class = \"row page-item\">\n        <div class = \"col-xs-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\">\n            <span class = \"text text-info\">Blogs</span>\n          </a>\n        </div>\n        <div class = \"col-xs-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\">\n            <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n          </a>\n        </div>\n      </div>\n      <div class = \"row page-item\">\n        <div class = \"col-xs-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\">\n            <span class = \"text text-info\">Home</span>\n          </a>\n        </div>\n        <div class = \"col-xs-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\">\n            <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n          </a>\n        </div>\n      </div>\n      <div class = \"row page-item\">\n        <div class = \"col-xs-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\">\n            <span class = \"text text-info\">About</span>\n          </a>\n        </div>\n        <div class = \"col-xs-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\">\n            <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n          </a>\n        </div>\n      </div>\n      <div class = \"row page-item\">\n        <div class = \"col-xs-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\">\n            <span class = \"text text-info\">Contact Us</span>\n          </a>\n        </div>\n        <div class = \"col-xs-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\">\n            <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class = \"col-sm-8 col-xs-12\">\n      <div class = \"row\">\n        <div class = \"col-sm-6\">\n          <label for = \"edit-page-name\">Page Name</label>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-sm-12\">\n          <input class = \"form-control\" value = \"Blogpost\" placeholder = \"Page Name\" type = \"text\"\n                 id = \"edit-page-name\" />\n        </div>\n      </div>\n      <div class = \"row edit-page-title-label\">\n        <div class = \"col-sm-6\">\n          <label for = \"edit-page-title\">Page Title</label>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-sm-12\">\n          <input class = \"form-control\" placeholder = \"Page Title\" id = \"edit-page-title\" type = \"text\"\n                 value = \"A Blogging application\"/>\n        </div>\n      </div>\n      <div class = \"row delete-button\">\n        <div class = \"col-sm-12\">\n          <a class = \"btn btn-danger btn-block\" [routerLink]=\"['/user/:uid/website/:wid/page']\">Delete</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<nav class = \"navbar navbar-default navbar-fixed-bottom\">\n  <div class = \"container-fluid\">\n    <p class = \"navbar-text pull-right\">\n      <a [routerLink]=\"['user/:uid']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageEditComponent = (function () {
    function PageEditComponent() {
    }
    PageEditComponent.prototype.ngOnInit = function () {
    };
    return PageEditComponent;
}());
PageEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageEditComponent);

//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user/:uid/website/:wid']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b class = \"website-nav-header\">Pages</b>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/new']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n<div class = \"container-fluid\">\n  <div class = \"row page-item\">\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\">\n        <span class = \"text text-info\">Blog Post</span>\n      </a>\n    </div>\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\">\n        <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n      </a>\n    </div>\n  </div>\n  <div class = \"row page-item\">\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\">\n        <span class = \"text text-info\">Blogs</span>\n      </a>\n    </div>\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\">\n        <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n      </a>\n    </div>\n  </div>\n  <div class = \"row page-item\">\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\">\n        <span class = \"text text-info\">Home</span>\n      </a>\n    </div>\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\">\n        <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n      </a>\n    </div>\n  </div>\n  <div class = \"row page-item\">\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\">\n        <span class = \"text text-info\">About</span>\n      </a>\n    </div>\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\">\n        <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n      </a>\n    </div>\n  </div>\n  <div class = \"row page-item\">\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\">\n        <span class = \"text text-info\">Contact Us</span>\n      </a>\n    </div>\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\">\n        <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n      </a>\n    </div>\n  </div>\n</div>\n<nav class = \"navbar navbar-default navbar-fixed-bottom\">\n  <div class = \"container-fluid\">\n    <p class = \"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/:uid']\">\n        <span class = \"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageListComponent = (function () {
    function PageListComponent() {
    }
    PageListComponent.prototype.ngOnInit = function () {
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageListComponent);

//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4\">\n      <div class=\"navbar-text pull-left\">\n        <a [routerLink]=\"['/user/:uid/website/:wid/page']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <div class=\"navbar-header pull-left hidden-xs\">\n        <a class=\"navbar-brand thick\">\n          <b class = \"website-nav-header\">Pages</b>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right hidden-xs\">\n        <a [routerLink]=\"['/user/:uid/website/:wid/page/new']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n    </div>\n    <div class = \"col-sm-8\">\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b class = \"website-nav-header\">New Page</b>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user/:uid/website/:wid/page']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class = \"container-fluid\">\n  <div class = \"row\">\n    <div class = \"col-sm-4 hidden-xs\">\n      <div class = \"row page-item\">\n        <div class = \"col-xs-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\">\n            <span class = \"text text-info\">Blog Post</span>\n          </a>\n        </div>\n        <div class = \"col-xs-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\">\n            <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n          </a>\n        </div>\n      </div>\n      <div class = \"row page-item\">\n        <div class = \"col-xs-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\">\n            <span class = \"text text-info\">Blogs</span>\n          </a>\n        </div>\n        <div class = \"col-xs-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\">\n            <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n          </a>\n        </div>\n      </div>\n      <div class = \"row page-item\">\n        <div class = \"col-xs-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\">\n            <span class = \"text text-info\">Home</span>\n          </a>\n        </div>\n        <div class = \"col-xs-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\">\n            <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n          </a>\n        </div>\n      </div>\n      <div class = \"row page-item\">\n        <div class = \"col-xs-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\">\n            <span class = \"text text-info\">About</span>\n          </a>\n        </div>\n        <div class = \"col-xs-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\">\n            <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n          </a>\n        </div>\n      </div>\n      <div class = \"row page-item\">\n        <div class = \"col-xs-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\">\n            <span class = \"text text-info\">Contact Us</span>\n          </a>\n        </div>\n        <div class = \"col-xs-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\">\n            <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class = \"col-sm-8 col-xs-12\">\n      <div class = \"row\">\n        <div class = \"col-sm-6\">\n          <label for = \"new-page-name\">Name</label>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-sm-12\">\n          <input class = \"form-control\" placeholder = \"Page Name\" type = \"text\" id = \"new-page-name\"/>\n        </div>\n      </div>\n      <div class = \"row new-page-title-label\">\n        <div class = \"col-sm-6\">\n          <label for = \"new-page-title\">Title</label>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-sm-12\">\n          <input class = \"form-control\" placeholder = \"Page Title\" type = \"text\" id = \"new-page-title\"/>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<nav class = \"navbar navbar-default navbar-fixed-bottom\">\n  <div class = \"container-fluid\">\n    <p class = \"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/:uid']\">\n        <span class = \"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNewComponent = (function () {
    function PageNewComponent() {
    }
    PageNewComponent.prototype.ngOnInit = function () {
    };
    return PageNewComponent;
}());
PageNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNewComponent);

//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>Test</h1>\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully created/deleted\"\n  </div>\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Test Message</th>\n      <th>&nbsp;</th>\n    </tr>\n\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"message\"\n               placeholder=\"message\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"createMessage()\"\n                class=\"btn btn-primary pull-right\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n\n    <tbody>\n    <tr *ngFor=\"let message of messages\">\n      <td>\n        {{message.message}}\n      </td>\n      <td>\n        <button (click)=\"deleteMessage(message._id)\"\n                class=\"btn btn-danger pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\" {{errorMsg}}>\n  ng</div>\n  <div class = \"row login-elements\">\n    <div class = \"col-sm-12\">\n      <h1>Login</h1>\n    </div>\n  </div>\n  <div class = \"row login-elements\">\n    <div class = \"col-sm-12\">\n      <input placeholder=\"username\" type=\"text\" class=\"form-control\"/>\n    </div>\n  </div>\n  <div class = \"row login-elements\">\n    <div class = \"col-sm-12\">\n      <input placeholder=\"password\" type=\"password\" class=\"form-control\"/>\n    </div>\n  </div>\n  <div class = \"row login-elements\">\n    <div class = \"col-sm-12\">\n      <a class=\"btn btn-primary btn-block\" [routerLink]=\"['/user/:uid']\">Login</a>\n    </div>\n  </div>\n  <div class = \"row login-elements\">\n    <div class = \"col-sm-12\">\n      <a class=\"btn btn-success btn-block\" [routerLink]=\"['/register']\">Register</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top website-nav-background\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b class = \"website-nav-text\">Profile</b>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/:uid']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok website-nav-text\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"username\" value = \"kotakvishal\">\n    </div>\n  </form>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"emailid\" value = \"vishal@kotak.com\">\n    </div>\n  </form>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"firstname\" value = \"Vishal\">\n    </div>\n  </form>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"lastname\" value = \"Kotak\">\n    </div>\n  </form>\n  <a class=\"btn btn-primary btn-block\" [routerLink]=\"['/user/:uid/website']\">Websites</a>\n  <a class=\"btn btn-danger btn-block\"  [routerLink]=\"['/login']\">Logout</a>\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom website-nav-background\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/:uid']\">\n        <span class=\"glyphicon glyphicon-user website-nav-text\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class = \"row regitser-elements\">\n    <div class = \"col-xs-12\">\n      <h1>Register</h1>\n    </div>\n  </div>\n  <div class = \"row regitser-elements\">\n    <div class = \"col-xs-12\">\n      <input placeholder=\"username\" type=\"text\"class=\"form-control\"/>\n    </div>\n  </div>\n  <div class = \"row regitser-elements\">\n    <div class = \"col-xs-12\">\n      <input placeholder=\"password\" type=\"password\" class=\"form-control\"/>\n    </div>\n  </div>\n  <div class = \"row regitser-elements\">\n    <div class = \"col-xs-12\">\n      <input placeholder=\"verify password\" type=\"password\" class=\"form-control\"/>\n    </div>\n  </div>\n  <div class = \"row regitser-elements\">\n    <div class = \"col-sm-12\">\n      <a class=\"btn btn-primary btn-block\" [routerLink]=\"['/user/:uid']\">Register</a>\n    </div>\n  </div>\n  <div class = \"row regitser-elements\">\n    <div class = \"col-sm-12\">\n      <a class=\"btn btn-danger btn-block\" [routerLink]=\"['/login']\">Cancel</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RegisterComponent);

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top website-nav-background\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4\">\n      <div class=\"navbar-text pull-left\">\n        <a [routerLink]=\"['/user/:uid/website']\" class=\"navbar-link\">\n          <span class=\"website-nav-text glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <div class=\"navbar-header pull-left hidden-xs\">\n        <a class=\"navbar-brand thick\">\n          <b class = \"website-nav-text website-nav-header\">Websites</b>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right hidden-xs\">\n        <a [routerLink]=\"['/user/:uid/website/new']\" class=\"navbar-link\">\n          <span class=\"website-nav-text glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n    </div>\n    <div class = \"col-sm-8\">\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b class = \"website-nav-text website-nav-header\">Edit Website</b>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user/:uid/website']\" class=\"navbar-link\">\n          <span class=\"website-nav-text glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class = \"container-fluid\">\n  <div class = \"row\">\n    <div class = \"col-sm-4 hidden-xs\">\n      <div class = \"row website-item\">\n        <div class = \"col-sm-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page']\">\n            <span class = \"text text-info\">Address Book App</span>\n          </a>\n        </div>\n        <div class = \"col-sm-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid']\">\n            <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n          </a>\n        </div>\n      </div>\n      <div class = \"row website-item\">\n        <div class = \"col-sm-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page']\">\n            <span class = \"text text-info\">Blogger</span>\n          </a>\n        </div>\n        <div class = \"col-sm-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid']\">\n            <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n          </a>\n        </div>\n      </div>\n      <div class = \"row website-item\">\n        <div class = \"col-sm-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page']\">\n            <span class = \"text text-info\">Blogging App</span>\n          </a>\n        </div>\n        <div class = \"col-sm-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid']\">\n            <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n          </a>\n        </div>\n      </div>\n      <div class = \"row website-item\">\n        <div class = \"col-sm-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page']\">\n            <span class = \"text text-info\">Script Testing App</span>\n          </a>\n        </div>\n        <div class = \"col-sm-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid']\">\n            <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class = \"col-sm-8 col-xs-12\">\n      <div class = \"row\">\n        <div class = \"col-sm-12 col-xs-12\">\n          <label for = \"website-name\">Name</label>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-sm-12 col-xs-12\">\n          <input placeholder = \"Name\" type = \"text\" class = \"form-control\" id = \"website-name\" value = \"facebook\"/>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-sm-12 col-xs-12\">\n          <label for = \"website-description\" id = \"website-description-label\">Description</label>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-sm-12 col-xs-12\">\n              <textarea class = \"form-control\" rows = \"5\" id = \"website-description\"\n                        placeholder = \"Description\">A Social Networking website to connect the world</textarea>\n        </div>\n      </div>\n      <div class = \"row delete-button\">\n        <div class = \"col-sm-12 col-xs-12\">\n          <a type = \"button\" [routerLink]=\"['/user/:uid/website']\"\n             class = \"btn btn-danger btn-block form-control\">Delete</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom website-nav-background\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/:uid']\">\n        <span class=\"website-nav-text glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebsiteEditComponent = (function () {
    function WebsiteEditComponent() {
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
    };
    return WebsiteEditComponent;
}());
WebsiteEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WebsiteEditComponent);

//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top website-nav-background\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user/:uid']\" class=\"navbar-link\">\n        <span class=\"website-nav-text glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b class = \"website-nav-text website-nav-header\">Websites</b>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/:uid/website/new']\" class=\"navbar-link\">\n        <span class=\"website-nav-text glyphicon glyphicon-plus\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n<div class = \"container-fluid\">\n  <div class = \"row website-item\">\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page']\">\n        <span class = \"text text-info\">Address Book App</span>\n      </a>\n    </div>\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid']\">\n        <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n      </a>\n    </div>\n  </div>\n  <div class = \"row website-item\">\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page']\">\n        <span class = \"text text-info\">Blogger</span>\n      </a>\n    </div>\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid']\">\n        <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n      </a>\n    </div>\n  </div>\n  <div class = \"row website-item\">\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page']\">\n        <span class = \"text text-info\">Blogging App</span>\n      </a>\n    </div>\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid']\">\n        <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n      </a>\n    </div>\n  </div>\n  <div class = \"row website-item\">\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page']\">\n        <span class = \"text text-info\">Script Testing App</span>\n      </a>\n    </div>\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid']\">\n        <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n      </a>\n    </div>\n  </div>\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom website-nav-background\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/:uid']\">\n        <span class=\"website-nav-text glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebsiteListComponent = (function () {
    function WebsiteListComponent() {
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WebsiteListComponent);

//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top website-nav-background\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4\">\n      <div class=\"navbar-text pull-left\">\n        <a [routerLink]=\"['/user/:uid/website']\" class=\"navbar-link\">\n          <span class=\"website-nav-text glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <div class=\"navbar-header pull-left hidden-xs\">\n        <a class=\"navbar-brand thick\">\n          <b class = \"website-nav-text website-nav-header\">Websites</b>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right hidden-xs\">\n        <a [routerLink]=\"['/user/:uid/website/new']\" class=\"navbar-link\">\n          <span class=\"website-nav-text glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n    </div>\n    <div class = \"col-sm-8\">\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b class = \"website-nav-text website-nav-header\">New Website</b>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user/:uid/website']\" class=\"navbar-link\">\n          <span class=\"website-nav-text glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class = \"container-fluid\">\n  <div class = \"row\">\n    <div class = \"col-sm-4 hidden-xs\">\n      <div class = \"row website-item\">\n        <div class = \"col-sm-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page']\">\n            <span class = \"text text-info\">Address Book App</span>\n          </a>\n        </div>\n        <div class = \"col-sm-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid']\">\n            <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n          </a>\n        </div>\n      </div>\n      <div class = \"row website-item\">\n        <div class = \"col-sm-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page']\">\n            <span class = \"text text-info\">Blogger</span>\n          </a>\n        </div>\n        <div class = \"col-sm-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid']\">\n            <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n          </a>\n        </div>\n      </div>\n      <div class = \"row website-item\">\n        <div class = \"col-sm-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page']\">\n            <span class = \"text text-info\">Blogging App</span>\n          </a>\n        </div>\n        <div class = \"col-sm-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid']\">\n            <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n          </a>\n        </div>\n      </div>\n      <div class = \"row website-item\">\n        <div class = \"col-sm-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page']\">\n            <span class = \"text text-info\">Script Testing App</span>\n          </a>\n        </div>\n        <div class = \"col-sm-6\">\n          <a [routerLink]=\"['/user/:uid/website/:wid']\">\n            <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class = \"col-sm-8 col-xs-12\">\n      <div class = \"row\">\n        <div class = \"col-sm-12 col-xs-12\">\n          <label for = \"website-name\">Name</label>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-sm-12 col-xs-12\">\n          <input placeholder = \"Name\" type = \"text\" class = \"form-control\" id = \"website-name\"/>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-sm-12 col-xs-12\">\n          <label for = \"website-description\" id = \"website-description-label\">Description</label>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-sm-12 col-xs-12\">\n          <textarea class = \"form-control\" rows = \"5\" id = \"website-description\" placeholder = \"Description\"></textarea>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom website-nav-background\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/:uid']\">\n        <span class=\"website-nav-text glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebsiteNewComponent = (function () {
    function WebsiteNewComponent() {
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
    };
    return WebsiteNewComponent;
}());
WebsiteNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WebsiteNewComponent);

//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b class = \"website-nav-header\">Choose Widget</b>\n      </a>\n    </div>\n  </div>\n</nav>\n<div class = \"container-fluid\">\n  <div class = \"row page-item\">\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n        <span class = \"text text-info\">Header</span>\n      </a>\n    </div>\n  </div>\n  <div class = \"row page-item\">\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n        <span class = \"text text-info\">Label</span>\n      </a>\n    </div>\n  </div>\n  <div class = \"row page-item\">\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n        <span class = \"text text-info\">HTML</span>\n      </a>\n    </div>\n  </div>\n  <div class = \"row page-item\">\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n        <span class = \"text text-info\">Text Input</span>\n      </a>\n    </div>\n  </div>\n  <div class = \"row page-item\">\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n        <span class = \"text text-info\">Link</span>\n      </a>\n    </div>\n  </div>\n  <div class = \"row page-item\">\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n        <span class = \"text text-info\">Button</span>\n      </a>\n    </div>\n  </div>\n  <div class = \"row page-item\">\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n        <span class = \"text text-info\">Image</span>\n      </a>\n    </div>\n  </div>\n  <div class = \"row page-item\">\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n        <span class = \"text text-info\">Youtube</span>\n      </a>\n    </div>\n  </div>\n  <div class = \"row page-item\">\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n        <span class = \"text text-info\">Data Table</span>\n      </a>\n    </div>\n  </div>\n  <div class = \"row page-item\">\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n        <span class = \"text text-info\">Repeater</span>\n      </a>\n    </div>\n  </div>\n</div>\n<nav class = \"navbar navbar-default navbar-fixed-bottom\">\n  <div class = \"container-fluid\">\n    <p class = \"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/:uid']\">\n        <span class = \"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetChooserComponent = (function () {
    function WidgetChooserComponent() {
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetChooserComponent);

//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b class = \"website-nav-header\">Widget Edit</b>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a href=\"widget-list.html\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n<div class = \"container-fluid\">\n  <div class = \"row widget-item\">\n    <div class = \"col-xs-6\">\n      <label for = \"widget-youtube-name\">Name</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <input class = \"form-control\" placeholder = \"Youtube Video Name\" value = \"JSP MySQL\" type = \"text\"\n             id  = \"widget-youtube-name\"/>\n    </div>\n  </div>\n  <div class = \"row widget-item\">\n    <div class = \"col-xs-6\">\n      <label for = \"widget-youtube-text\">Text</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <input  value = \"Creating a Simple Java Server Pages Web Application Connecting to MySQL\"\n              id = \"widget-youtube-text\" type = \"text\" class = \"form-control\" placeholder = \"Youtube video text\"/>\n    </div>\n  </div>\n  <div class = \"row widget-item\">\n    <div class = \"col-xs-6\">\n      <label for = \"widget-youtube-url\">URL</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <input value = \"https://www.youtube.com/watch?v=LcTi546vj_A\" type = \"text\" class = \"form-control\"\n             id = \"widget-youtube-url\" placeholder = \"Youtube video URl\"/>\n    </div>\n  </div>\n  <div class = \"row widget-item\">\n    <div class = \"col-xs-6\">\n      <label for = \"widget-youtube-width\">Width</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <input value = \"300\" type = \"text\" class = \"form-control\"\n             id = \"widget-youtube-width\" placeholder = \"Youtube video width\"/>\n    </div>\n  </div>\n  <div class = \"row delete-button\">\n    <div class = \"col-xs-12\">\n      <a class = \"btn btn-danger btn-block form-control\" href = \"widget-list.html\">Delete</a>\n    </div>\n  </div>\n</div>\n<nav class = \"navbar navbar-default navbar-fixed-bottom\">\n  <div class = \"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href = \"../user/profile.html\">\n        <span class = \"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetEditComponent = (function () {
    function WidgetEditComponent() {
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetEditComponent);

//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b class = \"website-nav-header\">Widget Edit</b>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n<div class = \"container-fluid\">\n  <div class = \"row widget-item\">\n    <div class = \"col-xs-6\">\n      <label for = \"widget-header-name\">Name</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <input class = \"form-control\" placeholder = \"Name\" id = \"widget-header-name\" type = \"text\"\n             value = \"Web Development\"/>\n    </div>\n  </div>\n  <div class = \"row widget-item\">\n    <div class = \"col-xs-6\">\n      <label for = \"widget-header-text\">Text</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <input class = \"form-control\" placeholder = \"Text\" id = \"widget-header-text\" type = \"text\" value = \"CS5610\"/>\n    </div>\n  </div>\n  <div class = \"row widget-item\">\n    <div class = \"col-xs-6\">\n      <label for = \"widget-header-size\">Size</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <input class = \"form-control\" placeholder = \"Size\" id = \"widget-header-size\" type = \"text\" value = \"3\"/>\n    </div>\n  </div>\n  <div class = \"row delete-button\">\n    <div class = \"col-xs-12\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\" class = \"btn btn-danger btn-block\">Delete</a>\n    </div>\n  </div>\n</div>\n<nav class = \"navbar navbar-default navbar-fixed-bottom\">\n  <div class = \"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/:uid']\">\n        <span class = \"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent() {
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetHeaderComponent);

//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b class = \"website-nav-header\">Widget Edit</b>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n<div class = \"container-fluid\">\n  <div class = \"row widget-item\">\n    <div class = \"col-sm-6\">\n      <label for = \"widget-image-name\">Name</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-sm-12\">\n      <input type = \"text\" placeholder = \"Name\" id = \"widget-image-name\" class = \"form-control\" value = \"HTML\" />\n    </div>\n  </div>\n  <div class = \"row widget-item\">\n    <div class = \"col-sm-6\">\n      <label for = \"widget-image-text\">Text</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-sm-12\">\n      <input class = \"form-control\" placeholder = \"Text\" id = \"widget-image-text\" type = \"text\"\n             value  = \"version 5\"/>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-sm-6 widget-item\">\n      <label for = \"widget-image-url\">URL</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-sm-12\">\n      <input class = \"form-control\" placeholder = \"Url\" id = \"widget-image-url\" type = \"text\"\n             value = \"http://www.codingdojo.com/blog/wp-content/uploads/html.png\"/>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-sm-6 widget-item\">\n      <label for = \"widget-image-width\">Width</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-sm-12\">\n      <input class = \"form-control\" placeholder = \"Width\" id = \"widget-image-width\" type = \"text\" value = \"300\"/>\n    </div>\n  </div>\n  <div class = \"row widget-item\">\n    <div class = \"col-sm-6\">\n      <label for = \"widget-image-upload\">Upload</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-sm-12\">\n      <input type = \"file\" class = \"form-control\" id = \"widget-image-upload\"/>\n    </div>\n  </div>\n  <div class = \"row widget-item\">\n    <div class = \"col-sm-12\">\n      <button class = \"btn btn-primary btn-block\"\n              [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\">Upload Image</button>\n    </div>\n  </div>\n  <div class = \"row widget-item\">\n    <div class = \"col-sm-12\">\n      <a class = \"btn btn-danger btn-block\"\n         [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\">Delete</a>\n    </div>\n  </div>\n</div>\n<nav class = \"navbar navbar-default navbar-fixed-bottom\">\n  <div class = \"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/:uid']\">\n        <span class = \"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetImageComponent = (function () {
    function WidgetImageComponent() {
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetImageComponent);

//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b class = \"website-nav-header\">Widget Edit</b>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n<div class = \"container-fluid\">\n  <div class = \"row widget-item\">\n    <div class = \"col-xs-6\">\n      <label for = \"widget-youtube-name\">Name</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <input class = \"form-control\" placeholder = \"Youtube Video Name\" value = \"JSP MySQL\" type = \"text\"\n             id  = \"widget-youtube-name\"/>\n    </div>\n  </div>\n  <div class = \"row widget-item\">\n    <div class = \"col-xs-6\">\n      <label for = \"widget-youtube-text\">Text</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <input  value = \"Creating a Simple Java Server Pages Web Application Connecting to MySQL\"\n              id = \"widget-youtube-text\" type = \"text\" class = \"form-control\" placeholder = \"Youtube video text\"/>\n    </div>\n  </div>\n  <div class = \"row widget-item\">\n    <div class = \"col-xs-6\">\n      <label for = \"widget-youtube-url\">URL</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <input value = \"https://www.youtube.com/watch?v=LcTi546vj_A\" type = \"text\" class = \"form-control\"\n             id = \"widget-youtube-url\" placeholder = \"Youtube video URl\"/>\n    </div>\n  </div>\n  <div class = \"row widget-item\">\n    <div class = \"col-xs-6\">\n      <label for = \"widget-youtube-width\">Width</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <input value = \"300\" type = \"text\" class = \"form-control\"\n             id = \"widget-youtube-width\" placeholder = \"Youtube video width\"/>\n    </div>\n  </div>\n  <div class = \"row delete-button\">\n    <div class = \"col-xs-12\">\n      <a class = \"btn btn-danger btn-block form-control\" [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\">\n        Delete</a>\n    </div>\n  </div>\n</div>\n<nav class = \"navbar navbar-default navbar-fixed-bottom\">\n  <div class = \"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/:uid']\">\n        <span class = \"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent() {
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetYoutubeComponent);

//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b class = \"website-nav-header\">Widgets</b>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget/new']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n<div class = \"container-fluid\">\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <div class = \"widget-toolbar-item\">\n        <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n        <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n          <span class = \"glyphicon glyphicon-cog settings-icon\"></span>\n        </a>\n      </div>\n      <h3 class = \"justify-text\">WEB DEVELOPMENT</h3>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <div class = \"widget-toolbar-item\">\n        <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n        <span class = \"glyphicon glyphicon-cog settings-icon\"></span>\n      </div>\n      <label class = \"justify-text\">Prof. Jose Annunziato has been a software developer for the last 20 years\n        , he has been teaching in various Universities around the Boston area for 15 years.</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <div class = \"widget-toolbar-item\">\n        <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n        <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n          <span class = \"glyphicon glyphicon-cog settings-icon\"></span>\n        </a>\n      </div>\n      <img src = \"mean.png\" class = \"img-responsive image-widget\" alt = \"MEAN Stack\"/>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <div class = \"widget-toolbar-item\">\n        <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n        <span class = \"glyphicon glyphicon-cog settings-icon\"></span>\n      </div>\n      <p class = \"justify-text\">\n        MEAN is a free and open-source <a href = \"https://en.wikipedia.org/wiki/JavaScript\">\n        JavaScript</a> <a href = \"https://en.wikipedia.org/wiki/Solution_stack\"> software stack</a>\n        for building dynamic web sites and web applications. The MEAN stack is MongoDB, Express.js, AngularJS\n        (or Angular), and Node.js. Because all components of the MEAN stack support programs are written in\n        JavaScript, MEAN applications can be written in one language for both server-side and client-side\n        execution environments.</p>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <label class = \"justify-text\">\n        <div class = \"widget-toolbar-item\">\n          <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n          <span class = \"glyphicon glyphicon-cog settings-icon\"></span>\n        </div>\n        Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network\n        applications. In this video, we will go through the steps to set up Node.js in your machine.</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <div class = \"widget-toolbar-item\">\n        <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n        <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n          <span class = \"glyphicon glyphicon-cog settings-icon\"></span>\n        </a>\n      </div>\n      <iframe class = \"video-widget\" src=\"https://www.youtube.com/embed/-u-j7uqU7sI\"\n              frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <div class = \"widget-toolbar-item\">\n        <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n        <span class = \"glyphicon glyphicon-cog settings-icon\"></span>\n      </div>\n      <p class = \"justify-text\">\n        Node.js is an <a href = \"https://en.wikipedia.org/wiki/Open-source_software\">open-source</a>,\n        cross-platform JavaScript run-time environment for executing JavaScript code\n        <a href = \"https://en.wikipedia.org/wiki/Server-side\">server-side</a>. Historically, JavaScript was used\n        primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's\n        HTML, to be run client-side by a JavaScript engine in the user's web browser.\n      </p>\n    </div>\n  </div>\n</div>\n<nav class = \"navbar navbar-default navbar-fixed-bottom\">\n  <div class = \"container-fluid\">\n    <p class = \"navbar-text pull-left\">\n      <a class = \"widget-nav-text\">\n        <span class=\"glyphicon glyphicon-triangle-right\"></span>\n      </a>\n    </p>\n    <p class = \"navbar-text pull-left\">\n      <a class = \"widget-nav-text\">\n        <span class=\"glyphicon glyphicon-eye-open\"></span>\n      </a>\n    </p>\n    <p class = \"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/:uid']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetListComponent = (function () {
    function WidgetListComponent() {
    }
    WidgetListComponent.prototype.ngOnInit = function () {
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetListComponent);

//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// injecting service into module
var PageService = (function () {
    function PageService() {
        this.pages = [
            { _id: '321', name: 'Post 1', websiteId: '456', description: 'lorem' },
            { _id: '432', name: 'Post 2', websiteId: '456', description: 'lorem' },
            { _id: '543', name: 'Post 3', websiteId: '456', description: 'lorem' }
        ];
        this.websitePages = [];
        this.api = {
            createPage: this.createPage,
            findPagebyWebsiteId: this.findPagebyWebsiteId,
            findPageById: this.findPageById,
            updatePage: this.updatePage,
            deletePage: this.deletePage
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        page._id = Math.random();
        this.pages.push(page);
        return page;
    };
    PageService.prototype.findPagebyWebsiteId = function (websiteId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x].websiteId === websiteId) {
                this.websitePages.push(this.pages[x]);
            }
        }
        return this.websitePages;
    };
    PageService.prototype.findPageById = function (pageId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                return this.pages[x];
            }
        }
    };
    PageService.prototype.updatePage = function (pageId, page) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages[x] = page;
            }
        }
    };
    PageService.prototype.deletePage = function (pageId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages.splice(x, 1);
            }
        }
    };
    return PageService;
}());
PageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PageService);

//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// injecting service into module
var UserService = (function () {
    function UserService() {
        this.users = [
            { _id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder' },
            { _id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley' },
            { _id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia' },
            { _id: '456', username: 'kotakv', password: 'kotak', firstName: 'Vishal', lastName: 'Kotak' }
        ];
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'findUserByCredentials': this.findUserByCredentials,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser
        };
    }
    UserService.prototype.createUser = function (user) {
        user._id = Math.random();
        this.users.push(user);
        return user;
    };
    UserService.prototype.findUserById = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.findUserByUsername = function (username) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username && this.users[x].password === password) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.updateUser = function (userId, user) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                this.users[x] = user;
            }
        }
    };
    UserService.prototype.deleteUser = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                this.users.splice(x, 1);
            }
        }
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// injecting service into module
var WebsiteService = (function () {
    function WebsiteService() {
        this.websites = [
            { _id: '123', name: 'Facebook', developerId: '456', description: 'Lorem' },
            { _id: '234', name: 'Twitter', developerId: '456', description: 'Lorem' },
            { _id: '456', name: 'Gizmodo', developerId: '456', description: 'Lorem' },
            { _id: '890', name: 'Go', developerId: '123', description: 'Lorem' },
            { _id: '567', name: 'Tic Tac Toe', developerId: '123', description: 'Lorem' },
            { _id: '678', name: 'Checkers', developerId: '123', description: 'Lorem' },
            { _id: '789', name: 'Chess', developerId: '234', description: 'Lorem' }
        ];
        this.userWebsites = [];
        this.api = {
            createWebsite: this.createWebsite,
            findWebsiteByUser: this.findWebsitesByUser,
            findWebsiteById: this.findWebsiteById,
            updateWebsite: this.updateWebsite,
            deleteWebsite: this.deleteWebsite
        };
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        website._id = Math.random();
        this.websites.push(website);
        return website;
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x].developerId === userId) {
                this.userWebsites.push(this.websites[x]);
            }
        }
        return this.userWebsites;
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                return this.websites[x];
            }
        }
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                this.websites[x] = website;
            }
        }
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                this.websites.splice(x, 1);
            }
        }
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WebsiteService);

//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// injecting service into module
var WidgetService = (function () {
    function WidgetService() {
        this.widgets = [
            { _id: '123', widgetType: 'HEADING', pageId: '321', size: 2, text: 'Lorem' },
            { _id: '234', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem' },
            { _id: '345', widgetType: 'IMAGE', pageId: '321', width: '100%', url: 'http://lorempixel.com/400/200/' },
            { _id: '456', widgetType: 'HTML', pageId: '321', text: 'Lorem' },
            { _id: '567', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem' },
            { _id: '678', widgetType: 'YOUTUBE', pageId: '321', width: '100%', text: 'https://youtube.com/AM2Ivdi9c4E' },
            { _id: '789', widgetType: 'HTML', pageId: '321', text: 'Lorem' }
        ];
        this.pageWidgets = [];
        this.api = {
            createWidget: this.createWidget,
            findWidgetsByPageId: this.findWidgetsByPageId,
            findWidgetById: this.findWidgetById,
            updateWidget: this.updateWidget,
            deleteWidget: this.deleteWidget
        };
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget._id = Math.random();
        this.widgets.push(widget);
        return widget;
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x].pageId === pageId) {
                this.pageWidgets.push(this.widgets[x]);
            }
        }
        return this.pageWidgets;
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                return this.widgets[x];
            }
        }
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                this.widgets[x] = widget;
            }
        }
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                this.widgets.splice(x, 1);
            }
        }
    };
    return WidgetService;
}());
WidgetService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WidgetService);

//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map