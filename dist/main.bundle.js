webpackJsonp([1],{

/***/ "../../../../../assignment/directives/sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortableDirective = (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    return SortableDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], SortableDirective.prototype, "newIndexes", void 0);
SortableDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[appSortable]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object])
], SortableDirective);

var _a;
//# sourceMappingURL=sortable.directive.js.map

/***/ }),

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_safepipe__ = __webpack_require__("../../../../../src/app/components/safepipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__assignment_directives_sortable_directive__ = __webpack_require__("../../../../../assignment/directives/sortable.directive.ts");
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
            __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_safepipe__["a" /* SafePipe */],
            __WEBPACK_IMPORTED_MODULE_33__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_36__assignment_directives_sortable_directive__["a" /* SortableDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_31_ngx_quill_editor__["a" /* QuillEditorModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_26__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_27__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_28__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_29__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_32__services_shared_service_client__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_34__services_flickr_service_client__["a" /* FlickrService */],
            __WEBPACK_IMPORTED_MODULE_35__services_auth_guard_service__["a" /* AuthGuard */]],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
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
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_7__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_8__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_list_page_list_component__["a" /* PageListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_10__components_page_page_new_page_new_component__["a" /* PageNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_11__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    {
        path: 'user/:uid/website/:wid/page/:pid/widget/new/header',
        component: __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'user/:uid/website/:wid/page/:pid/widget/new/youtube',
        component: __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'user/:uid/website/:wid/page/:pid/widget/new/image',
        component: __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]]
    },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/html', component: __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/text', component: __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/image/search',
        component: __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
];
// Export the routes as module providers and configure routers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4\">\n      <div class=\"navbar-text pull-left\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <div class=\"navbar-header pull-left hidden-xs\">\n        <a class=\"navbar-brand thick\">\n          <b>Pages</b>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right hidden-xs\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', 'new']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n    </div>\n    <div class = \"col-sm-8\">\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Edit Page</b>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a class=\"navbar-link\"\n           (click)=\"updatePage(pageName, pageDescription)\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class = \"container-fluid\">\n  <div class = \"row\">\n    <div class = \"col-sm-4 hidden-xs\">\n      <div *ngFor=\"let page of pages\" class = \"row page-item\">\n        <div class = \"col-xs-6\">\n          <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', page._id, 'widget']\">\n            <span class = \"text text-info\">{{page.name}}</span>\n          </a>\n        </div>\n        <div class = \"col-xs-6\">\n          <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', page._id]\">\n            <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class = \"col-sm-8 col-xs-12\">\n      <div class = \"row\">\n        <div class = \"col-sm-6\">\n          <label for = \"edit-page-name\">Page Name</label>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-sm-12\">\n          <input class = \"form-control\" value = \"Blogpost\" placeholder = \"Page Name\" type = \"text\"\n                 [(ngModel)]=\"pageName\" id = \"edit-page-name\" />\n        </div>\n      </div>\n      <div class = \"row edit-page-title-label\">\n        <div class = \"col-sm-6\">\n          <label for = \"edit-page-title\">Page Title</label>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-sm-12\">\n          <input class = \"form-control\" placeholder = \"Page Title\" id = \"edit-page-title\" type = \"text\"\n                 [(ngModel)]=\"pageDescription\" value = \"A Blogging application\"/>\n        </div>\n      </div>\n      <div class=\"row errorBlock\" [hidden]=\"!showError\">\n        <div class = \"col-xs-12 col-sm-9 col-sm-offset-3\">\n          <span class=\"errorMessage\">Missing Page Name/Title</span>\n        </div>\n      </div>\n      <div class = \"row delete-button\">\n        <div class = \"col-sm-12\">\n          <a class = \"btn btn-danger btn-block\" (click)=\"deletePage(page._id)\">Delete</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<nav class = \"navbar navbar-default navbar-fixed-bottom\">\n  <div class = \"container-fluid\">\n    <p class = \"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_page_model_client__ = __webpack_require__("../../../../../src/app/models/page.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
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
    function PageEditComponent(pageService, route, router) {
        this.pageService = pageService;
        this.route = route;
        this.router = router;
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.showError = false;
            _this.pageService
                .findPagebyWebsiteId(_this.userId, _this.websiteId)
                .subscribe(function (pages) {
                _this.pages = pages;
            });
            _this.pageService
                .findPageById(_this.userId, _this.websiteId, _this.pageId)
                .subscribe(function (page) {
                _this.page = page;
                _this.pageName = page.name;
                _this.pageDescription = page.description;
            });
        });
    };
    PageEditComponent.prototype.deletePage = function (pageId) {
        var _this = this;
        this.pageService
            .deletePage(this.userId, this.websiteId, pageId)
            .subscribe(function (pages) {
            _this.pages = pages;
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
        });
    };
    PageEditComponent.prototype.updatePage = function (pageName, pageTitle) {
        var _this = this;
        if (!pageName || !pageTitle) {
            this.showError = true;
            return;
        }
        var page = new __WEBPACK_IMPORTED_MODULE_1__models_page_model_client__["a" /* Page */](pageName, pageTitle, this.websiteId);
        page._id = this.pageId;
        this.pageService
            .updatePage(this.userId, this.websiteId, page)
            .subscribe(function (pages) {
            _this.pages = pages;
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
        });
    };
    return PageEditComponent;
}());
PageEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], PageEditComponent);

var _a, _b, _c;
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user' , userId, 'website']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b class = \"website-nav-header\">Pages</b>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', 'new']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n<div class = \"container-fluid\">\n  <div *ngFor=\"let page of pages\" class = \"row page-item\">\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', page._id, 'widget']\">\n        <span class = \"text text-info\">{{page.name}}</span>\n      </a>\n    </div>\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', page._id]\">\n        <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n      </a>\n    </div>\n  </div>\n</div>\n<nav class = \"navbar navbar-default navbar-fixed-bottom\">\n  <div class = \"container-fluid\">\n    <p class = \"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class = \"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
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
    function PageListComponent(pageService, route) {
        this.pageService = pageService;
        this.route = route;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageService
                .findPagebyWebsiteId(_this.userId, _this.websiteId)
                .subscribe(function (pages) {
                _this.pages = pages;
            });
        });
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], PageListComponent);

var _a, _b;
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4\">\n      <div class=\"navbar-text pull-left\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <div class=\"navbar-header pull-left hidden-xs\">\n        <a class=\"navbar-brand thick\">\n          <b class = \"website-nav-header\">Pages</b>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right hidden-xs\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', 'new']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n    </div>\n    <div class = \"col-sm-8\">\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b class = \"website-nav-header\">New Page</b>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok\" (click)=\"createPage(pageName, pageTitle, websiteId)\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class = \"container-fluid\">\n  <div class = \"row\">\n    <div class = \"col-sm-4 hidden-xs\">\n      <div *ngFor=\"let page of pages\" class = \"row page-item\">\n        <div class = \"col-xs-6\">\n          <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', page._id, 'widget']\">\n            <span class = \"text text-info\">{{page.name}}</span>\n          </a>\n        </div>\n        <div class = \"col-xs-6\">\n          <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', page._id]\">\n            <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class = \"col-sm-8 col-xs-12\">\n      <div class = \"row\">\n        <div class = \"col-sm-6\">\n          <label for = \"new-page-name\">Name</label>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-sm-12\">\n          <input class = \"form-control\" placeholder = \"Page Name\" type = \"text\" id = \"new-page-name\"\n          [(ngModel)]=\"pageName\"/>\n        </div>\n      </div>\n      <div class = \"row new-page-title-label\">\n        <div class = \"col-sm-6\">\n          <label for = \"new-page-title\">Title</label>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-sm-12\">\n          <input class = \"form-control\" placeholder = \"Page Title\" type = \"text\" id = \"new-page-title\"\n          [(ngModel)]=\"pageTitle\"/>\n        </div>\n      </div>\n      <div class=\"row errorBlock\" [hidden]=\"!showError\">\n        <div class = \"col-xs-12 col-sm-9 col-sm-offset-3\">\n          <span class=\"errorMessage\">Missing Page Name/Title</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<nav class = \"navbar navbar-default navbar-fixed-bottom\">\n  <div class = \"container-fluid\">\n    <p class = \"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class = \"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_page_model_client__ = __webpack_require__("../../../../../src/app/models/page.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
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
    function PageNewComponent(pageService, route, router) {
        this.pageService = pageService;
        this.route = route;
        this.router = router;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.showError = false;
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageService
                .findPagebyWebsiteId(_this.userId, _this.websiteId)
                .subscribe(function (pages) {
                _this.pages = pages;
            });
        });
    };
    PageNewComponent.prototype.createPage = function (pageName, pageTitle) {
        var _this = this;
        if (!pageName || !pageTitle) {
            this.showError = true;
            return;
        }
        var page = new __WEBPACK_IMPORTED_MODULE_1__models_page_model_client__["a" /* Page */](pageName, pageTitle, this.websiteId);
        this.pageService
            .createPage(this.userId, this.websiteId, page)
            .subscribe(function (pages) {
            _this.pages = pages;
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
        });
    };
    return PageNewComponent;
}());
PageNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], PageNewComponent);

var _a, _b, _c;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/safepipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return SafePipe;
}());
SafePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'safe' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipe);

var _a;
//# sourceMappingURL=safepipe.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
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
exports.push([module.i, ".login-elements {\n  margin-bottom: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <h1>Login</h1>\n  <form (ngSubmit)=\"login()\" #form=\"ngForm\">\n    <input type=\"text\" class=\"form-control login-elements\" placeholder=\"username\" name=\"username\" ngModel required\n           #username=\"ngModel\"/>\n    <span class=\"errorMessage\" *ngIf=\"!username.valid && username.touched\">\n            Please enter valid username\n    </span>\n    <input type=\"password\" class=\"form-control login-elements\" placeholder=\"password\" name=\"password\" ngModel\n           required  #password=\"ngModel\"/>\n    <span class=\"errorMessage\" *ngIf=\"!password.valid && password.touched\">\n            Please enter valid password\n    </span>\n    <button class=\"btn btn-primary btn-block login-elements\" type=\"submit\" [disabled]=\"!form.valid\">Login</button>\n    <button class=\"btn btn-success btn-block login-elements\" type=\"submit\" [routerLink]=\"['/register']\">Register</button>\n    <a href=\"/facebook/login\" class=\"btn btn-primary btn-block\">\n        <span class=\"fa fa-facebook\"></span>\n        Facebook\n      </a>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function LoginComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = 'Please enter valid username and password';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.errorFlag = false;
    };
    // Form Metod
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService
            .login(this.username, this.password)
            .subscribe(function (user) {
            if (user) {
                _this.sharedService.user = user;
                _this.router.navigate(['/profile']);
            }
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('form'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top website-nav-background\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b class = \"website-nav-text\">Profile</b>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a  class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok website-nav-text\"\n              (click)=\"updateUser(username, emailId, firstName, lastName)\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"form-group col-xs-12\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"username\" [(ngModel)]=\"username\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group col-xs-12\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"emailid\" [(ngModel)]=\"emailId\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group col-xs-12\">\n      <label for=\"first-name\">First Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"firstname\" [(ngModel)]=\"firstName\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group col-xs-12\">\n      <label for=\"last-name\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"lastname\" [(ngModel)]=\"lastName\">\n    </div>\n  </div>\n  <a class=\"btn btn-primary btn-block\"  [routerLink]=\"['/user', userId, 'website']\">Websites</a>\n  <a class=\"btn btn-danger btn-block\" (click)=\"logout()\">Logout</a>\n  <a class = \"btn btn-danger btn-block form-control\" (click)=\"deleteUser(user._id)\">Delete</a>\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom website-nav-background\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class=\"glyphicon glyphicon-user website-nav-text\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function ProfileComponent(userService, route, router, sharedService) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.user = _this.sharedService.user || _this.user;
            // console.log('Profile Page');
            // console.log(this.user);
            _this.userId = _this.user['_id'];
            _this.username = _this.user['username'];
            _this.emailId = _this.user['emailId'];
            _this.firstName = _this.user['firstName'];
            _this.lastName = _this.user['lastName'];
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    ProfileComponent.prototype.updateUser = function (userName, emailId, firstName, lastName) {
        var _this = this;
        var tempUser = new __WEBPACK_IMPORTED_MODULE_3__models_user_model_client__["a" /* User */](this.userId, userName, this.user['password']);
        tempUser.emailId = emailId;
        tempUser.firstName = firstName;
        tempUser.lastName = lastName;
        this.sharedService.user['username'] = userName;
        this.sharedService.user['emailId'] = emailId;
        this.sharedService.user['firstName'] = firstName;
        this.sharedService.user['lastName'] = lastName;
        this.userService
            .updateUser(this.userId, tempUser)
            .subscribe(function (user) {
            _this.user = user;
            _this.router.navigate(['/profile']);
        });
    };
    ProfileComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        this.userService
            .deleteUser(this.userId)
            .subscribe(function (user) {
            _this.router.navigate(['/login']);
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
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

module.exports = "<div class=\"container\">\n\n  <div class = \"row regitser-elements\">\n    <div class = \"col-xs-12\">\n      <h1>Register</h1>\n    </div>\n  </div>\n  <div class = \"row regitser-elements\">\n    <div class = \"col-xs-12\">\n      <input placeholder=\"username\" type=\"text\"class=\"form-control\" [(ngModel)]=\"username\"/>\n    </div>\n  </div>\n  <div class = \"row regitser-elements\">\n    <div class = \"col-xs-12\">\n      <input placeholder=\"password\" type=\"password\" class=\"form-control\" [(ngModel)]=\"password\"/>\n    </div>\n  </div>\n  <div class = \"row regitser-elements\">\n    <div class = \"col-xs-12\">\n      <input placeholder=\"verify password\" type=\"password\" class=\"form-control\" [(ngModel)]=\"verifyPassword\"/>\n    </div>\n  </div>\n  <div class = \"row regitser-elements\">\n    <div class = \"col-xs-12\">\n      <a class=\"btn btn-primary btn-block\" (click)=\"createUser(username, password, verifyPassword)\">Register</a>\n    </div>\n  </div>\n  <div class = \"row regitser-elements\">\n    <div class = \"col-xs-12\">\n      <a class=\"btn btn-danger btn-block\" [routerLink]=\"['/login']\">Cancel</a>\n    </div>\n  </div>\n  <div class=\"row errorBlock\" [hidden]=\"!showError\">\n    <div class = \"col-sm-8 col-xs-11 col-sm-offset-4 col-xs-offset-1\">\n      <span class=\"errorMessage\">Please enter Username and Passwords</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function RegisterComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.user = __WEBPACK_IMPORTED_MODULE_1__models_user_model_client__["a" /* User */];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.showError = false;
    };
    RegisterComponent.prototype.createUser = function (username, password, verifyPassword) {
        var _this = this;
        this.username = username;
        this.password = password;
        this.verifyPassword = verifyPassword;
        if (!username || !password || !verifyPassword) {
            this.showError = true;
            return;
        }
        if (password === verifyPassword) {
            var tempUser = new __WEBPACK_IMPORTED_MODULE_1__models_user_model_client__["a" /* User */]('', username, password);
            this.userService
                .findUserByUsername(username)
                .subscribe(function (user) {
                if (user === null) {
                    _this.userService
                        .register(username, password)
                        .subscribe(function (newUser) {
                        _this.sharedService.user = newUser;
                        console.log(_this.sharedService.user);
                        _this.router.navigate(['/profile']);
                    });
                }
                else {
                    _this.showError = true;
                    return;
                }
            });
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top website-nav-background\">\n  <div class=\"row container-fluid\">\n    <div class = \"row\">\n      <div class=\"col-sm-4\">\n        <div class=\"navbar-text pull-left\">\n          <a [routerLink]=\"['/user', userId, 'website']\" class=\"navbar-link\">\n            <span class=\" website-nav-text glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </div>\n        <div class=\"navbar-header pull-left hidden-xs\">\n          <a class=\"navbar-brand thick\">\n            <b class=\"website-nav-text website-nav-header\">Websites</b>\n          </a>\n        </div>\n        <div class=\"navbar-text pull-right hidden-xs\">\n          <a [routerLink]=\"['/user', userId, 'website' ,'new']\" class=\"navbar-link\">\n            <span class=\"website-nav-text glyphicon glyphicon-plus\"></span>\n          </a>\n        </div>\n      </div>\n      <div class = \"col-sm-8\">\n        <div class=\"navbar-header pull-left\">\n          <a class=\"navbar-brand thick\">\n            <b class=\"website-nav-text website-nav-header\">Edit Website</b>\n          </a>\n        </div>\n        <div class=\"navbar-text pull-right\">\n          <a class=\"navbar-link\"\n             (click)=\"updateWebsite(websiteName, websiteDescription)\">\n            <span class=\"website-nav-text glyphicon glyphicon-ok\"></span>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class = \"container-fluid\">\n  <div class = \"row\">\n    <div class = \"col-sm-4 hidden-xs\">\n      <div *ngFor=\"let w of websites\" class = \"row website-item\">\n        <div class = \"col-sm-6\">\n          <a a [routerLink]=\"['/user', userId, 'website' ,  w._id, 'page']\">\n            <span class = \"text text-info\">{{w.name}}</span>\n          </a>\n        </div>\n        <div class = \"col-sm-6\">\n          <a [routerLink]=\"['/user', userId, 'website', w._id]\">\n            <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class = \"col-sm-8 col-xs-12\">\n      <div class = \"row\">\n        <div class = \"col-sm-12 col-xs-12\">\n          <label for = \"website-name\">Name</label>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-sm-12 col-xs-12\">\n          <input placeholder = \"Name\" type = \"text\" class = \"form-control\" id = \"website-name\"\n                 [(ngModel)]=\"websiteName\"/>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-sm-12 col-xs-12\">\n          <label for = \"website-description\" id = \"website-description-label\">Description</label>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-sm-12 col-xs-12\">\n              <textarea class = \"form-control\" rows = \"5\" id = \"website-description\" [(ngModel)]=\"websiteDescription\"\n                        placeholder = \"Description\"></textarea>\n        </div>\n      </div>\n      <div class=\"row errorBlock\" [hidden]=\"!showError\">\n        <div class=\"col-sm-12 col-xs-12\">\n          <span class=\"errorMessage\">Missing Website Details</span>\n        </div>\n      </div>\n      <div class = \"row delete-button\">\n        <div class = \"col-sm-12 col-xs-12\">\n          <a type = \"button\"\n             class = \"btn btn-danger btn-block form-control\" (click)=\"deleteWebsite(website._id)\">Delete</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom website-nav-background\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user' , userId]\">\n        <span class=\"website-nav-text glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_website_model_client__ = __webpack_require__("../../../../../src/app/models/website.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function WebsiteEditComponent(websiteService, route, router) {
        this.websiteService = websiteService;
        this.route = route;
        this.router = router;
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.userId = params['uid'];
            _this.showError = false;
            _this.websiteService
                .findWebsiteById(_this.userId, _this.websiteId)
                .subscribe(function (website) {
                _this.website = website;
                _this.websiteName = website.name;
                _this.websiteDescription = website.description;
            });
            _this.websiteService
                .findWebsitesByUser(_this.userId)
                .subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    WebsiteEditComponent.prototype.deleteWebsite = function (websiteId) {
        var _this = this;
        this.websiteService
            .deleteWebsite(this.userId, websiteId)
            .subscribe(function (websites) {
            _this.websites = websites;
            _this.router.navigate(['/user', _this.userId, 'website']);
        });
    };
    WebsiteEditComponent.prototype.updateWebsite = function (websiteName, websiteDescription) {
        var _this = this;
        if (!websiteName || !websiteDescription) {
            this.showError = true;
            return;
        }
        var website = new __WEBPACK_IMPORTED_MODULE_2__models_website_model_client__["a" /* Website */](websiteName, this.userId, websiteDescription);
        website._id = this.websiteId;
        this.websiteService
            .updateWebsite(this.userId, website)
            .subscribe(function (websites) {
            _this.websites = websites;
            _this.router.navigate(['/user', _this.userId, 'website']);
        });
    };
    return WebsiteEditComponent;
}());
WebsiteEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], WebsiteEditComponent);

var _a, _b, _c;
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top website-nav-background\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user', userId]\" class=\"navbar-link\">\n        <span class=\"website-nav-text glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b class = \"website-nav-text website-nav-header\">Websites</b>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId, 'website', 'new']\" class=\"navbar-link\">\n        <span class=\"website-nav-text glyphicon glyphicon-plus\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n<div class = \"container-fluid\">\n  <div *ngFor=\"let website of websites\" class = \"row website-item\">\n   <div class = \"col-xs-6\">\n     <a [routerLink]=\"['/user', userId, 'website' ,  website._id, 'page']\">\n       <span class = \"text text-info\">{{website.name}}</span>\n     </a>\n   </div>\n   <div class = \"col-xs-6\">\n     <a [routerLink]=\"['/user', userId, 'website', website._id]\">\n       <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n     </a>\n   </div>\n </div>\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom website-nav-background\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class=\"website-nav-text glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function WebsiteListComponent(websiteService, route) {
        this.websiteService = websiteService;
        this.route = route;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteService
                .findWebsitesByUser(_this.userId)
                .subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], WebsiteListComponent);

var _a, _b;
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top website-nav-background\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4\">\n      <div class=\"navbar-text pull-left\">\n        <a [routerLink]=\"['/user', userId, 'website']\" class=\"navbar-link\">\n          <span class=\"website-nav-text glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <div class=\"navbar-header pull-left hidden-xs\">\n        <a class=\"navbar-brand thick\">\n          <b class = \"website-nav-text website-nav-header\">Websites</b>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right hidden-xs\">\n        <a [routerLink]=\"['/user', userId, 'website', 'new']\" class=\"navbar-link\">\n          <span class=\"website-nav-text glyphicon glyphicon-plus\"\n                (click)=\"createWebsite(websiteName, websiteDescription)\"></span>\n        </a>\n      </div>\n    </div>\n    <div class = \"col-sm-8\">\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b class = \"website-nav-text website-nav-header\">New Website</b>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a class=\"navbar-link\">\n          <span class=\"website-nav-text glyphicon glyphicon-ok\"\n                (click)=\"createWebsite(websiteName, websiteDescription, userId)\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class = \"container-fluid\">\n  <div class = \"row\">\n    <div class = \"col-sm-4 hidden-xs\">\n      <div *ngFor=\"let website of websites\" class = \"row website-item\">\n        <div class = \"col-sm-6\">\n          <a [routerLink]=\"['/user', userId, 'website', website._id, 'page']\">\n            <span class = \"text text-info\">{{website.name}}</span>\n          </a>\n        </div>\n        <div class = \"col-sm-6\">\n          <a [routerLink]=\"['/user', userId, 'website', website._id]\">\n            <span class = \"glyphicon glyphicon-cog pull-right text-info\"></span>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class = \"col-sm-8 col-xs-12\">\n      <div class = \"row\">\n        <div class = \"col-sm-12 col-xs-12\">\n          <label for = \"website-name\">Name</label>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-sm-12 col-xs-12\">\n          <input placeholder = \"Name\" type = \"text\" class = \"form-control\" id = \"website-name\"\n                 [(ngModel)]=\"websiteName\"/>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-sm-12 col-xs-12\">\n          <label for = \"website-description\" id = \"website-description-label\">Description</label>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-sm-12 col-xs-12\">\n          <textarea class = \"form-control\" rows = \"5\" id = \"website-description\"\n                    placeholder = \"Description\" [(ngModel)]=\"websiteDescription\"></textarea>\n        </div>\n      </div>\n      <div class=\"row errorBlock\" [hidden]=\"!showError\">\n        <div class=\"col-sm-12 col-xs-12\">\n          <span class=\"errorMessage\">Missing Website Details</span>\n        </div>\n      </div>\n  </div>\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom website-nav-background\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user' , userId]\">\n        <span class=\"website-nav-text glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_website_model_client__ = __webpack_require__("../../../../../src/app/models/website.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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
    function WebsiteNewComponent(websiteService, route, router) {
        this.websiteService = websiteService;
        this.route = route;
        this.router = router;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteService
                .findWebsitesByUser(_this.userId)
                .subscribe(function (websites) {
                _this.websites = websites;
            });
            _this.showError = false;
        });
    };
    WebsiteNewComponent.prototype.createWebsite = function (websiteName, websiteDescription) {
        var _this = this;
        if (!websiteName || !websiteDescription) {
            this.showError = true;
            return;
        }
        var website = new __WEBPACK_IMPORTED_MODULE_2__models_website_model_client__["a" /* Website */](websiteName, this.userId, websiteDescription);
        this.websiteService
            .createWebsite(this.userId, website)
            .subscribe(function (websites) {
            _this.websites = websites;
            _this.router.navigate(['/user', _this.userId, 'website']);
        });
    };
    return WebsiteNewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WebsiteNewComponent.prototype, "newWebsiteForm", void 0);
WebsiteNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _d || Object])
], WebsiteNewComponent);

var _a, _b, _c, _d;
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b class = \"website-nav-header\">Choose Widget</b>\n      </a>\n    </div>\n  </div>\n</nav>\n<div class = \"container-fluid\">\n  <div class = \"row page-item\">\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'header']\">\n        <span class = \"text text-info\">Header</span>\n      </a>\n    </div>\n  </div>\n  <div class = \"row page-item\">\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'html']\">\n        <span class = \"text text-info\">HTML</span>\n      </a>\n    </div>\n  </div>\n  <div class = \"row page-item\">\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'image']\">\n        <span class = \"text text-info\">Image</span>\n      </a>\n    </div>\n  </div>\n  <div class = \"row page-item\">\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'text']\">\n        <span class = \"text text-info\">Text</span>\n      </a>\n    </div>\n  </div>\n  <div class = \"row page-item\">\n    <div class = \"col-xs-6\">\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'youtube']\">\n        <span class = \"text text-info\">Youtube</span>\n      </a>\n    </div>\n  </div>\n</div>\n<nav class = \"navbar navbar-default navbar-fixed-bottom\">\n  <div class = \"container-fluid\">\n    <p class = \"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class = \"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function WidgetChooserComponent(route) {
        this.route = route;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], WidgetChooserComponent);

var _a;
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

module.exports = "<div class = \"container-fluid\">\n  <div [ngSwitch]=\"widgetType\">\n    <div *ngSwitchCase=\"'HEADING'\">\n      <app-widget-header></app-widget-header>\n    </div>\n    <div *ngSwitchCase=\"'IMAGE'\">\n      <app-widget-image></app-widget-image>\n    </div>\n    <div *ngSwitchCase=\"'YOUTUBE'\">\n      <app-widget-youtube></app-widget-youtube>\n    </div>\n    <div *ngSwitchCase=\"'HTML'\">\n      <app-widget-html></app-widget-html>\n    </div>\n    <div *ngSwitchCase=\"'TEXT'\">\n      <app-widget-text></app-widget-text>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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
    function WidgetEditComponent(route, activatedRoute, widgetService) {
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widgetService
                .findWidgetById(_this.userId, _this.websiteId, _this.pageId, _this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.widgetType = widget.type;
            });
        });
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object])
], WidgetEditComponent);

var _a, _b, _c;
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

module.exports = "<div [hidden]=\"!editFlag\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-text pull-left\">\n          <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </div>\n        <div class=\"navbar-header pull-left\">\n          <a class=\"navbar-brand thick\">\n            <b class = \"website-nav-header\">Edit Header Widget</b>\n          </a>\n        </div>\n        <div class=\"navbar-text pull-right\">\n          <a class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-ok\"\n                  (click)=\"updateWidget(widgetText, widgetSize, widget._id)\"></span>\n          </a>\n        </div>\n      </div>\n    </nav>\n</div>\n<div [hidden]=\"editFlag\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-text pull-left\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b class = \"website-nav-header\">New Header Widget</b>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok\" (click)=\"createWidget(widgetText, widgetSize)\"></span>\n        </a>\n      </div>\n    </div>\n  </nav>\n</div>\n<div class = \"container-fluid\">\n  <div class = \"row widget-item\">\n    <div class = \"col-xs-6\">\n      <label for = \"widget-header-text\">Text</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <input class = \"form-control\" placeholder = \"Text\" id = \"widget-header-text\"\n             type = \"text\" required [(ngModel)]=\"widgetText\"/>\n    </div>\n  </div>\n  <div class = \"row widget-item\">\n    <div class = \"col-xs-6\">\n      <label for = \"widget-header-size\">Size</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <input class = \"form-control\" placeholder = \"Size\" id = \"widget-header-size\"\n             type = \"number\" required [(ngModel)]=\"widgetSize\"/>\n    </div>\n  </div>\n  <div class = \"row delete-button\" [hidden]=\"!editFlag\">\n    <div class = \"col-xs-12\">\n      <a class = \"btn btn-danger btn-block\" (click)=\"deleteWidget(widget._id)\">Delete</a>\n    </div>\n  </div>\n  <div class=\"row errorBlock\" [hidden]=\"!showError\">\n    <div class = \"col-xs-12 col-sm-9 col-sm-offset-3\">\n      <span class=\"errorMessage\">Header data missing</span>\n    </div>\n  </div>\n</div>\n<nav class = \"navbar navbar-default navbar-fixed-bottom\">\n  <div class = \"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class = \"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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
    function WidgetHeaderComponent(route, widgetService, router) {
        this.route = route;
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.editFlag = false;
            _this.showError = false;
            _this.widgetService
                .findWidgetById(_this.userId, _this.websiteId, _this.pageId, _this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.widgetSize = widget.size;
                _this.widgetText = widget.text;
                _this.editFlag = true;
            });
        });
    };
    WidgetHeaderComponent.prototype.createWidget = function (text, size) {
        var _this = this;
        if (!text || !size) {
            this.showError = true;
            return;
        }
        var widget = new __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__["a" /* Widget */]('', 'HEADING', this.pageId);
        widget.text = text;
        widget.size = size;
        this.widgetService
            .createWidget(this.userId, this.websiteId, this.pageId, widget)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user', _this.userId, 'website',
                _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetHeaderComponent.prototype.deleteWidget = function (widgetId) {
        var _this = this;
        this.widgetService
            .deleteWidget(this.userId, this.websiteId, this.pageId, widgetId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetHeaderComponent.prototype.updateWidget = function (text, size, widgetId) {
        var _this = this;
        var widget = new __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__["a" /* Widget */](widgetId, 'HEADING', this.pageId);
        widget.text = text;
        widget.size = size;
        this.widgetService
            .updateWidget(this.userId, this.websiteId, this.pageId, widgetId, widget)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], WidgetHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!editFlag\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-text pull-left\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b class = \"website-nav-header\">Edit HTML Widget</b>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-ok\"\n                  (click)=\"updateWidget(widgetText, widget._id)\"></span>\n        </a>\n      </div>\n    </div>\n  </nav>\n</div>\n<div [hidden]=\"editFlag\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-text pull-left\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b class = \"website-nav-header\">New HTML Widget</b>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok\" (click)=\"createWidget(widgetText)\"></span>\n        </a>\n      </div>\n    </div>\n  </nav>\n</div>\n<div class=\"container-fluid\">\n  <div class=\"row widget-item\">\n    <div class=\"col-xs-12\">\n      <label for=\"widget-html-text\">Text</label>\n      <quill-editor [(ngModel)]=\"widgetText\"\n                    name=\"textHtml\"\n                    id=\"widget-html-text\"></quill-editor>\n    </div>\n  </div>\n  <div class = \"row delete-button\" [hidden]=\"!editFlag\">\n    <div class = \"col-xs-12\">\n      <a class = \"btn btn-danger btn-block\" (click)=\"deleteWidget(widget._id)\">Delete</a>\n    </div>\n  </div>\n</div>\n<nav class = \"navbar navbar-default navbar-fixed-bottom\">\n  <div class = \"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class = \"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHtmlComponent = (function () {
    function WidgetHtmlComponent(route, widgetService, router) {
        this.route = route;
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.showError = false;
            _this.editFlag = false;
            _this.widgetService
                .findWidgetById(_this.userId, _this.websiteId, _this.pageId, _this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.editFlag = true;
            });
        });
    };
    WidgetHtmlComponent.prototype.createWidget = function (text) {
        var _this = this;
        if (!text) {
            this.showError = true;
            return;
        }
        var widget = new __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__["a" /* Widget */]('', 'HTML', this.pageId);
        widget.text = text;
        this.widgetService
            .createWidget(this.userId, this.websiteId, this.pageId, widget)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user', _this.userId, 'website',
                _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetHtmlComponent.prototype.deleteWidget = function (widgetId) {
        var _this = this;
        this.widgetService
            .deleteWidget(this.userId, this.websiteId, this.pageId, widgetId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetHtmlComponent.prototype.updateWidget = function (text, widgetId) {
        var _this = this;
        var widget = new __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__["a" /* Widget */](widgetId, 'HTML', this.pageId);
        widget.text = text;
        this.widgetService
            .updateWidget(this.userId, this.websiteId, this.pageId, widgetId, widget)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    return WidgetHtmlComponent;
}());
WidgetHtmlComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], WidgetHtmlComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flickrImage {\n  border: 2px solid black;\n  margin: 10px 5px 10px 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b class = \"website-nav-header\">Flickr Search</b>\n      </a>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"input-group\">\n        <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\n        <span class=\"input-group-btn\">\n           <a (click)=\"searchImages()\" class=\"btn btn-default\" type=\"button\">\n               <span class=\"glyphicon glyphicon-search\"></span>\n           </a>\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div *ngFor=\"let photo of photos['photo']\"\n           class=\"col-xs-4\">\n        <img class = \"flickrImage\"\n            (click)=\"selectImage(photo)\"\n             width=\"100%\"\n             [src]=\"['https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' +   photo.id + '_' + photo.secret + '_s.jpg']\"/>\n      </div>\n    </div>\n  </div>\n</div>\n<nav class = \"navbar navbar-default navbar-fixed-bottom\">\n  <div class = \"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class = \"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrImageSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FlickrImageSearchComponent = (function () {
    function FlickrImageSearchComponent(widgetService, flickrService, activatedRoutes, router) {
        this.widgetService = widgetService;
        this.flickrService = flickrService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
        this.photos = [];
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
    };
    FlickrImageSearchComponent.prototype.searchImages = function () {
        var _this = this;
        this.flickrService
            .searchImages(this.searchText)
            .subscribe(function (data) {
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            _this.photos = val.photos;
        });
    };
    FlickrImageSearchComponent.prototype.selectImage = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        var widget = new __WEBPACK_IMPORTED_MODULE_4__models_widget_model_client__["a" /* Widget */]('', 'IMAGE', this.pageId);
        widget.name = name;
        widget.url = url;
        widget.width = '100';
        this.widgetService.createWidget(this.userId, this.websiteId, this.pageId, widget)
            .subscribe(function (data) {
            if (data) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            }
        });
    };
    return FlickrImageSearchComponent;
}());
FlickrImageSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-flickr-image-search',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_flickr_service_client__["a" /* FlickrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_flickr_service_client__["a" /* FlickrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _d || Object])
], FlickrImageSearchComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=flickr-image-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-actions {\n  margin-top: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!editFlag\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-text pull-left\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b class = \"website-nav-header\">Edit Image Widget</b>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-ok\"\n                  (click)=\"updateWidget(widgetText, widgetName, widgetWidth, widgetUrl, widget._id)\"></span>\n        </a>\n      </div>\n    </div>\n  </nav>\n</div>\n<div [hidden]=\"editFlag\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-text pull-left\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b class = \"website-nav-header\">New Image Widget</b>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok\"\n                (click)=\"createWidget(widgetText, widgetName, widgetWidth, widgetUrl)\"></span>\n        </a>\n      </div>\n    </div>\n  </nav>\n</div>\n<div class = \"container-fluid\">\n  <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n    <div class=\"form-group\">\n      <div class = \"row widget-item\">\n        <div class = \"col-xs-6\">\n          <label for = \"widget-image-name\">Name</label>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-xs-12\">\n          <input type = \"text\" placeholder = \"Name\" id = \"widget-image-name\" class = \"form-control\"\n          [(ngModel)]=\"widgetName\"/>\n        </div>\n      </div>\n      <div class = \"row widget-item\">\n        <div class = \"col-xs-6\">\n          <label for = \"widget-image-text\">Text</label>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-xs-12\">\n          <input class = \"form-control\" placeholder = \"Text\" id = \"widget-image-text\" type = \"text\"\n               [(ngModel)]=\"widgetText\"/>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-sm-6 widget-item\">\n          <label for = \"widget-image-url\">URL</label>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-xs-12\">\n          <input class = \"form-control\" placeholder = \"Url\" id = \"widget-image-url\" type = \"text\"\n                 [(ngModel)]=\"widgetUrl\">\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-xs-6 widget-item\">\n          <label for = \"widget-image-width\">Width</label>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-xs-12\">\n          <input class = \"form-control\" placeholder = \"Width\" id = \"widget-image-width\" type = \"number\"\n          [(ngModel)]=\"widgetWidth\"/>\n        </div>\n      </div>\n      <div class = \"row widget-item\">\n        <div class = \"col-xs-6\">\n          <label for = \"myFile\">Upload</label>\n        </div>\n      </div>\n      <div class = \"row\">\n        <div class = \"col-xs-12\">\n          <input type = \"file\" class = \"form-control\" id=\"myFile\" required name=\"myFile\"/>\n        </div>\n      </div>\n    </div>\n    <div class=\"row image-actions\">\n      <div class = \"col-xs-12\">\n        <input  name=\"widgetId\"  value=\"{{widgetId}}\"    style=\"display: none\"/>\n        <input  name=\"websiteId\" value=\"{{websiteId}}\"   style=\"display: none\"/>\n        <input  name=\"pageId\"    value=\"{{pageId}}\"      style=\"display: none\"/>\n        <input  name=\"userId\"    value=\"{{userId}}\"      style=\"display: none\"/>\n        <input  name=\"width\"     value=\"{{widgetWidth}}\" style=\"display: none\"/>\n        <button type=\"submit\" class=\"form-control btn btn-primary\">\n          Upload Image\n        </button>\n      </div>\n    </div>\n    <div class=\"row image-actions\">\n      <div class = \"col-xs-12\">\n        <button type=\"submit\" class=\"form-control btn btn-primary\"\n                [routerLink]=\"['/user/',userId,'website',websiteId,'page',pageId,'widget','new','image','search']\">\n          Search Image\n        </button>\n      </div>\n    </div>\n    <div class=\"row image-actions\" [hidden]=\"!editFlag\">\n      <div class = \"col-xs-12\">\n        <a class = \"btn btn-danger btn-block\" (click)=\"deleteWidget(widget._id)\">Delete</a>\n      </div>\n    </div>\n    <div class=\"row errorBlock\" [hidden]=\"!showError\">\n      <div class = \"col-xs-12 col-sm-9 col-sm-offset-3\">\n        <span class=\"errorMessage\">Image data missing</span>\n      </div>\n    </div>\n  </form>\n</div>\n<nav class = \"navbar navbar-default navbar-fixed-bottom\">\n  <div class = \"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class = \"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
    function WidgetImageComponent(route, widgetService, router) {
        this.route = route;
        this.widgetService = widgetService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.editFlag = false;
            _this.showError = false;
            _this.widgetService
                .findWidgetById(_this.userId, _this.websiteId, _this.pageId, _this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.widgetText = widget.text;
                _this.widgetName = widget.name;
                _this.widgetWidth = widget.width;
                _this.widgetUrl = widget.url;
                _this.editFlag = true;
            });
        });
    };
    WidgetImageComponent.prototype.createWidget = function (text, name, width, url) {
        var _this = this;
        var widget = new __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__["a" /* Widget */]('', 'IMAGE', this.pageId);
        widget.text = text;
        widget.name = name;
        widget.width = width;
        widget.url = url;
        this.widgetService
            .createWidget(this.userId, this.websiteId, this.pageId, widget)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user', _this.userId, 'website',
                _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetImageComponent.prototype.updateWidget = function (text, name, width, url, widgetId) {
        var _this = this;
        var widget = new __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__["a" /* Widget */](widgetId, 'IMAGE', this.pageId);
        widget.text = text;
        widget.name = name;
        widget.width = width;
        widget.url = url;
        this.widgetService
            .updateWidget(this.userId, this.websiteId, this.pageId, widgetId, widget)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetImageComponent.prototype.deleteWidget = function (widgetId) {
        var _this = this;
        this.widgetService
            .deleteWidget(this.userId, this.websiteId, this.pageId, widgetId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], WidgetImageComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!editFlag\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-text pull-left\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b class = \"website-nav-header\">Edit Text Widget</b>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-ok\"\n                  (click)=\"updateWidget(widgetFormatted, widgetName, widgetRows,\n                  widgetText, widgetPlaceholder, widget._id)\"></span>\n        </a>\n      </div>\n    </div>\n  </nav>\n</div>\n<div [hidden]=\"editFlag\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-text pull-left\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b class = \"website-nav-header\">New Text Widget</b>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok\"\n                (click)=\"createWidget(widgetFormatted, widgetName, widgetRows, widgetText, widgetPlaceholder)\"></span>\n        </a>\n      </div>\n    </div>\n  </nav>\n</div>\n<div class = \"container-fluid\">\n  <div class = \"row widget-item\">\n    <div class = \"col-xs-6\">\n      <label for = \"widget-text\">Text</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <input class = \"form-control\" placeholder = \"Text\" id = \"widget-text\"\n             type = \"text\" required [(ngModel)]=\"widgetText\"/>\n    </div>\n  </div>\n  <div class = \"row widget-item\">\n    <div class = \"col-xs-6\">\n      <label for = \"widget-text-rows\">Rows</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <input class = \"form-control\" placeholder = \"Rows\" id = \"widget-text-rows\"\n             type = \"number\" required [(ngModel)]=\"widgetRows\"/>\n    </div>\n  </div>\n  <div class = \"row widget-item\">\n    <div class = \"col-xs-6\">\n      <label for = \"widget-text-name\">Name</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <input class = \"form-control\" placeholder = \"Name\" id = \"widget-text-name\"\n             type = \"text\" [(ngModel)]=\"widgetName\"/>\n    </div>\n  </div>\n  <div class=\"row widget-item\">\n    <div class=\"col-xs-6\">\n      <label for=\"widget-text-placeholder\">Placeholder</label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <input class=\"form-control\" placeholder=\"Placeholder\" id=\"widget-text-placeholder\"\n             type=\"text\" [(ngModel)]=\"widgetPlaceholder\"/>\n    </div>\n  </div>\n  <div class=\"row widget-item\">\n    <div class = \"col-xs-12\">\n      <div class=\"input-group\">\n        <input type=\"text\" readonly value=\"Formatted\" class=\"form-control\"/>\n        <span class=\"input-group-addon\">\n              <input [(ngModel)]=\"widgetFormatted\" name=\"formatted\" type=\"checkbox\"/></span>\n      </div>\n    </div>\n  </div>\n  <div class = \"row delete-button\" [hidden]=\"!editFlag\">\n    <div class = \"col-xs-12\">\n      <a class = \"btn btn-danger btn-block\" (click)=\"deleteWidget(widget._id)\">Delete</a>\n    </div>\n  </div>\n  <div class=\"row errorBlock\" [hidden]=\"!showError\">\n    <div class = \"col-xs-12 col-sm-9 col-sm-offset-3\">\n      <span class=\"errorMessage\">Text data missing</span>\n    </div>\n  </div>\n</div>\n<nav class = \"navbar navbar-default navbar-fixed-bottom\">\n  <div class = \"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class = \"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetTextComponent = (function () {
    function WidgetTextComponent(route, widgetService, router) {
        this.route = route;
        this.widgetService = widgetService;
        this.router = router;
        this.widgetFormatted = false;
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.editFlag = false;
            _this.showError = false;
            _this.widgetService
                .findWidgetById(_this.userId, _this.websiteId, _this.pageId, _this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.widgetFormatted = _this.widget.formatted;
                _this.widgetName = _this.widget.name;
                _this.widgetRows = _this.widget.rows;
                _this.widgetText = _this.widget.text;
                _this.widgetPlaceholder = _this.widget.placeholder;
                _this.editFlag = true;
            });
        });
    };
    WidgetTextComponent.prototype.createWidget = function (widgetFormatted, widgetName, widgetRows, widgetText, widgetPlaceholder) {
        var _this = this;
        if (!widgetName || !widgetRows) {
            this.showError = true;
            return;
        }
        var widget = new __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__["a" /* Widget */]('', 'TEXT', this.pageId);
        widget.formatted = widgetFormatted;
        widget.name = widgetName;
        widget.rows = widgetRows;
        widget.text = widgetText;
        widget.placeholder = widgetPlaceholder;
        this.widgetService
            .createWidget(this.userId, this.websiteId, this.pageId, widget)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user', _this.userId, 'website',
                _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetTextComponent.prototype.deleteWidget = function (widgetId) {
        var _this = this;
        this.widgetService
            .deleteWidget(this.userId, this.websiteId, this.pageId, widgetId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user', _this.userId, 'website',
                _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetTextComponent.prototype.updateWidget = function (widgetFormatted, widgetName, widgetRows, widgetText, widgetPlaceholder, widgetId) {
        var _this = this;
        var widget = new __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__["a" /* Widget */](widgetId, 'TEXT', this.pageId);
        widget.formatted = widgetFormatted;
        widget.name = widgetName;
        widget.rows = widgetRows;
        widget.text = widgetText;
        widget.placeholder = widgetPlaceholder;
        this.widgetService
            .updateWidget(this.userId, this.websiteId, this.pageId, widgetId, widget)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user', _this.userId, 'website',
                _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    return WidgetTextComponent;
}());
WidgetTextComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-widget-text',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], WidgetTextComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-text.component.js.map

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

module.exports = "<div [hidden]=\"!editFlag\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-text pull-left\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b class = \"website-nav-header\">Edit Youtube Widget</b>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-ok\"\n                  (click)=\"updateWidget(widgetText, widgetName, widgetWidth, widgetUrl, widget._id)\"></span>\n        </a>\n      </div>\n    </div>\n  </nav>\n</div>\n<div [hidden]=\"editFlag\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-text pull-left\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b class = \"website-nav-header\">New Youtube Widget</b>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok\"\n                (click)=\"createWidget(widgetText, widgetName, widgetWidth, widgetUrl)\"></span>\n        </a>\n      </div>\n    </div>\n  </nav>\n</div>\n<div class = \"container-fluid\">\n  <div class = \"row widget-item\">\n    <div class = \"col-xs-6\">\n      <label for = \"widget-youtube-name\">Name</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <input class = \"form-control\" placeholder = \"Youtube Video Name\" type = \"text\"\n             [(ngModel)]=\"widgetName\" id  = \"widget-youtube-name\"/>\n    </div>\n  </div>\n  <div class = \"row widget-item\">\n    <div class = \"col-xs-6\">\n      <label for = \"widget-youtube-text\">Text</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <input id = \"widget-youtube-text\" type = \"text\" class = \"form-control\"\n             [(ngModel)]=\"widgetText\" placeholder = \"Youtube video text\"/>\n    </div>\n  </div>\n  <div class = \"row widget-item\">\n    <div class = \"col-xs-6\">\n      <label for = \"widget-youtube-url\">URL</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <input type = \"text\" class = \"form-control\" id = \"widget-youtube-url\"\n             [(ngModel)]=\"widgetUrl\" placeholder = \"Youtube video URl\"/>\n    </div>\n  </div>\n  <div class = \"row widget-item\">\n    <div class = \"col-xs-6\">\n      <label for = \"widget-youtube-width\">Width</label>\n    </div>\n  </div>\n  <div class = \"row\">\n    <div class = \"col-xs-12\">\n      <input type = \"number\" class = \"form-control\" id = \"widget-youtube-width\"\n             [(ngModel)]=\"widgetWidth\" placeholder = \"Youtube video width\"/>\n    </div>\n  </div>\n  <div class = \"row delete-button\"  [hidden]=\"!editFlag\">\n    <div class = \"col-xs-12\">\n      <a class = \"btn btn-danger btn-block form-control\" (click)=\"deleteWidget(widget._id)\"\n         [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">\n        <span>Delete</span>\n      </a>\n    </div>\n  </div>\n  <div class=\"row errorBlock\" [hidden]=\"!showError\">\n    <div class = \"col-xs-12 col-sm-9 col-sm-offset-3\">\n      <span class=\"errorMessage\">Youtube data missing</span>\n    </div>\n  </div>\n</div>\n<nav class = \"navbar navbar-default navbar-fixed-bottom\">\n  <div class = \"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class = \"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
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
    function WidgetYoutubeComponent(route, widgetService, router) {
        this.route = route;
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.editFlag = false;
            _this.widgetService
                .findWidgetById(_this.userId, _this.websiteId, _this.pageId, _this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.widgetText = widget.text;
                _this.widgetName = widget.name;
                _this.widgetWidth = widget.width;
                _this.widgetUrl = widget.url;
                _this.editFlag = true;
            });
        });
    };
    WidgetYoutubeComponent.prototype.createWidget = function (text, name, width, url) {
        var _this = this;
        if (!text || !name || !width || !url) {
            this.showError = true;
            return;
        }
        var widget = new __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__["a" /* Widget */]('', 'YOUTUBE', this.pageId);
        widget.text = text;
        widget.name = name;
        widget.width = width;
        widget.url = url;
        this.widgetService
            .createWidget(this.userId, this.websiteId, this.pageId, widget)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user', _this.userId, 'website',
                _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function (widgetId) {
        var _this = this;
        this.widgetService
            .deleteWidget(this.userId, this.websiteId, this.pageId, widgetId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetYoutubeComponent.prototype.updateWidget = function (text, name, width, url, widgetId) {
        var _this = this;
        var widget = new __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__["a" /* Widget */](widgetId, 'YOUTUBE', this.pageId);
        widget.text = text;
        widget.name = name;
        widget.width = width;
        widget.url = url;
        this.widgetService
            .updateWidget(this.userId, this.websiteId, this.pageId, widgetId, widget)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], WidgetYoutubeComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".widget-toolbar-item {\n  position: absolute;\n  background-color: rgb(255, 255, 255);\n  border-bottom-left-radius: 10px;\n  padding: 5px;\n  float: right;\n  right: 15px;\n  top: 0px;\n}\n.settings-icon {\n  color: \t#428bca;\n}\n.youtube-widget {\n  position: relative;\n  padding-bottom: 56.25%; /* 16:9 */\n  height: 0;\n}\n.youtube-widget iframe {\n  position: absolute;\n  top: 0;\n  left: 2%;\n  right: 2%;\n  width: 96%;\n  height: 100%;\n}\nul {\n  list-style-type: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b class = \"website-nav-header\">Widgets</b>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n<div class = \"container-fluid\">\n  <ul class=\"widget-list\" appSortable (newIndexes)=\"reorderWidgets($event)\">\n  <li *ngFor=\"let widget of widgets\">\n    <div [ngSwitch]=\"widget.type\">\n      <div *ngSwitchCase=\"'HEADING'\">\n        <div class = \"row widget-item\">\n          <div class=\"col-xs-12\">\n            <div class = \"widget-toolbar-item\">\n              <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n              <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', widget._id]\">\n                <span class = \"glyphicon glyphicon-cog settings-icon\"></span>\n              </a>\n            </div>\n            <div [ngSwitch]=\"widget.size\">\n              <div *ngSwitchCase=\"1\">\n                <h1>{{widget.text}}</h1>\n              </div>\n              <div *ngSwitchCase=\"2\">\n                <h2>{{widget.text}}</h2>\n              </div>\n              <div *ngSwitchCase=\"3\">\n                <h3>{{widget.text}}</h3>\n              </div>\n              <div *ngSwitchCase=\"4\">\n                <h4>{{widget.text}}</h4>\n              </div>\n              <div *ngSwitchCase=\"5\">\n                <h5>{{widget.text}}</h5>\n              </div>\n              <div *ngSwitchCase=\"6\">\n                <h6>{{widget.text}}</h6>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div><!-- End of Heading-->\n      <div *ngSwitchCase=\"'HTML'\">\n        <div class=\"row widget-item\">\n          <div class=\"col-xs-12\">\n            <div class = \"widget-toolbar-item\">\n              <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n              <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', widget._id]\">\n                <span class = \"glyphicon glyphicon-cog settings-icon\"></span>\n              </a>\n            </div>\n            <div [innerHTML]=\"widget['text']\">\n            </div>\n          </div>\n        </div>\n      </div><!-- End of HTML -->\n      <div *ngSwitchCase=\"'IMAGE'\">\n        <div class=\"row widget-item\">\n          <div class=\"col-xs-12\">\n            <div class = \"widget-toolbar-item\">\n              <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n              <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', widget._id]\">\n                <span class = \"glyphicon glyphicon-cog settings-icon\"></span>\n              </a>\n            </div>\n            <img [width]=\"widget.width\"\n                 height=\"350\"\n                 [src]=\"widget.url | safe\" />\n          </div>\n        </div>\n      </div><!-- End of Image -->\n      <div *ngSwitchCase=\"'TEXT'\">\n        <div class=\"row widget-item\">\n          <div class=\"col-xs-12\">\n            <div class = \"widget-toolbar-item\">\n              <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n              <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', widget._id]\">\n                <span class = \"glyphicon glyphicon-cog settings-icon\"></span>\n              </a>\n            </div>\n            <div *ngIf=\"widget['formatted']\">\n              <quill-editor [(ngModel)]=\"widget['text']\" name=\"text\"></quill-editor>\n            </div>\n            <textarea rows=\"{{widget['rows']}}\"\n                      placeholder=\"{{widget['placeholder']}}\"\n                      class=\"form-control\">{{widget['text']}}</textarea>\n          </div>\n        </div>\n      </div> <!-- End of Text -->\n      <div *ngSwitchCase=\"'YOUTUBE'\">\n        <div class=\"row widget-item\">\n          <div class=\"col-xs-12 youtube-widget\">\n            <iframe [width]=\"widget.width\"\n                    frameborder=\"0\"\n                    [src]=\"widget.url | safe\">\n            </iframe>\n            <div class = \"widget-toolbar-item\">\n              <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n              <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', widget._id]\">\n                <span class = \"glyphicon glyphicon-cog settings-icon\"></span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div><!-- End of Youtube -->\n    </div>\n  </li>\n  </ul>\n</div>\n<nav class = \"navbar navbar-default navbar-fixed-bottom\">\n  <div class = \"container-fluid\">\n    <p class = \"navbar-text pull-left\">\n      <a class = \"widget-nav-text\">\n        <span class=\"glyphicon glyphicon-triangle-right\"></span>\n      </a>\n    </p>\n    <p class = \"navbar-text pull-left\">\n      <a class = \"widget-nav-text\">\n        <span class=\"glyphicon glyphicon-eye-open\"></span>\n      </a>\n    </p>\n    <p class = \"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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
    function WidgetListComponent(route, widgetService) {
        this.route = route;
        this.widgetService = widgetService;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetService
                .findWidgetsByPageId(_this.userId, _this.websiteId, _this.pageId)
                .subscribe(function (widgets) {
                _this.widgets = widgets;
            });
        });
    };
    WidgetListComponent.prototype.reorderWidgets = function (index) {
        this.widgetService.reorderWidgets(this.pageId, this.widgets[index['initial']], index['initial'], index['final'])
            .subscribe(function (widgets) { }, function (error) { });
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object])
], WidgetListComponent);

var _a, _b;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/page.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var Page = (function () {
    function Page(name, description, websiteId) {
        this.name = name;
        this.description = description;
        this.websiteId = websiteId;
    }
    return Page;
}());

//# sourceMappingURL=page.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, username, password) {
        this._id = _id;
        this.username = username;
        this.password = password;
    }
    return User;
}());

//# sourceMappingURL=user.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/models/website.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Website; });
var Website = (function () {
    function Website(name, developerId, description) {
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());

//# sourceMappingURL=website.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/models/widget.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Widget; });
var Widget = (function () {
    function Widget(_id, type, pageId) {
        this._id = _id;
        this.type = type;
        this.pageId = pageId;
    }
    return Widget;
}());

//# sourceMappingURL=widget.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
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
var FlickrService = (function () {
    function FlickrService(_http) {
        this._http = _http;
        this.key = '425828b267f131116172d6f47ce7345c';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=' +
            'flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
    }
    FlickrService.prototype.searchImages = function (term) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', term);
        return this._http.get(url);
    };
    return FlickrService;
}());
FlickrService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FlickrService);

var _a;
//# sourceMappingURL=flickr.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
    function PageService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    PageService.prototype.createPage = function (userId, websiteId, page) {
        var url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId + '/page';
        return this.http.post(url, page)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.findPagebyWebsiteId = function (userId, websiteId) {
        var url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId + '/page';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.findPageById = function (userId, websiteId, pageId) {
        var url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId + '/page/' + pageId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.updatePage = function (userId, websiteId, page) {
        var url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId + '/page/' + page._id;
        return this.http.put(url, page)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.deletePage = function (userId, websiteId, pageId) {
        var url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId + '/page/' + pageId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return PageService;
}());
PageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PageService);

var _a;
//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
        this.user = '';
    }
    return SharedService;
}());
SharedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.client.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function UserService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
    }
    // This method is for a user registering with the application
    UserService.prototype.register = function (username, password) {
        var url = this.baseUrl + '/api/register';
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user; // setting user so as to share with all components
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/logout', '', this.options)
            .map(function (res) {
            var data = res;
        });
    };
    UserService.prototype.login = function (username, password) {
        var url = this.baseUrl + '/api/login';
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    // This method will be used by System Administrator to create users for the application
    UserService.prototype.createUser = function (user) {
        var url = this.baseUrl + '/api/user/';
        return this.http.post(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.baseUrl + '/api/user?username=' + username;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.put(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.post(url, website)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.findWebsiteById = function (userId, websiteId) {
        var url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.updateWebsite = function (userId, website) {
        var url = this.baseUrl + '/api/user/' + userId + '/website/' + website._id;
        return this.http.put(url, website)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.deleteWebsite = function (userId, websiteId) {
        var url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WebsiteService);

var _a;
//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetService.prototype.createWidget = function (userId, websiteId, pageId, widget) {
        var url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId + '/page/' + pageId + '/widget';
        return this.http.post(url, widget)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.findWidgetsByPageId = function (userId, websiteId, pageId) {
        var url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId + '/page/' + pageId + '/widget';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.findWidgetById = function (userId, websiteId, pageId, widgetId) {
        var url = this.baseUrl + '/api/user/' + userId + '/website/'
            + websiteId + '/page/' + pageId + '/widget/' + widgetId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.updateWidget = function (userId, websiteId, pageId, widgetId, widget) {
        var url = this.baseUrl + '/api/user/' + userId + '/website/'
            + websiteId + '/page/' + pageId + '/widget/' + widgetId;
        return this.http.put(url, widget)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.deleteWidget = function (userId, websiteId, pageId, widgetId) {
        var url = this.baseUrl + '/api/user/' + userId + '/website/'
            + websiteId + '/page/' + pageId + '/widget/' + widgetId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.reorderWidgets = function (pageId, widget, initial, final) {
        var body = { widget: widget };
        return this.http.put(this.baseUrl + '/' + pageId + '/widget?initial=' + initial + '&final=' + final, body)
            .map(function (res) {
            return res.json();
        });
    };
    return WidgetService;
}());
WidgetService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WidgetService);

var _a;
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