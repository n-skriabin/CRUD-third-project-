webpackJsonp(["home.module"],{

/***/ "../../../../../src/app/home-component/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\r\n  <ul>\r\n    <li><a routerLink='Home/load-Home'>Home</a></li>\r\n    <li><a routerLink='Authors/load-AuthorsTable'>Authors</a></li>\r\n    <li><a routerLink='Articles/load-ArticlesTable'>Articles</a></li>\r\n    <li><a routerLink='Books/load-BooksTable'>Books</a></li>\r\n    <li><a routerLink='Journals/load-JournalsTable'>Journals</a></li>\r\n    <li><a routerLink='Publishers/load-PublishersTable'>Publishers</a></li>\r\n  </ul>\r\n\r\n<router-outlet>\r\n<div>\r\n  <h2>Home page</h2>\r\n  <div>\r\n    <p>However engaging wherever growled much methodic shamefully more human agreeable gracefully and less equitable insistent gasped that when wasp baboon rebuilt more slept stingily along knew llama.</p>\r\n    <p>Prim crud far healthy wholesomely more far chortled ouch in adroitly gawked affably reasonably manfully reindeer mysteriously overpaid considering far far until.</p>\r\n    <p>Red-handed off thickly save aboard mawkishly that amidst moth pending jerkily monogamous some much or creatively indecent neat far jeepers up spoiled about.</p>\r\n    <p>Owing desperate like one shark or bit yikes up so thus grumbled gosh more bawled much and regardless hey far bought through crud well staunchly hysteric inside incorrect the closed.</p>\r\n    <p>Industrious jubilant blanched bestially yet that less far far a wow the militant preparatory crudely acrimonious under a towards lemur wedded that while decorously this peered darn a much.</p>\r\n    <p>Dizzy boundless hence but because moodily and alas a truculently less hardheaded so on ambiguously incompetently less moaned hilarious until one jeepers amid heinously.</p>\r\n    <p>Where beneath less misspelled across artistically spiteful jeepers much more that when blushed a much a this groundhog therefore far arduous dependent much satanic where dear goodness hummingbird.</p>\r\n  </div>\r\n</div>\r\n</router-outlet>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home-component/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
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
    function HomeComponent(titleService) {
        this.titleService = titleService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Home Page');
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-home',
            styles: [__webpack_require__("../../../../../src/app/home-component/styles.css")],
            template: __webpack_require__("../../../../../src/app/home-component/home.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home-component/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid_dist_es_grid_module__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es/grid.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_dropdowns__ = __webpack_require__("../../../../@progress/kendo-angular-dropdowns/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_component__ = __webpack_require__("../../../../../src/app/home-component/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */] },
    { path: 'load-Home', component: __WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */] },
    { path: 'Authors', loadChildren: '../library/library.module#LibraryModule' },
    { path: 'Articles', loadChildren: '../library/library.module#LibraryModule' },
    { path: 'Books', loadChildren: '../library/library.module#LibraryModule' },
    { path: 'Journals', loadChildren: '../library/library.module#LibraryModule' },
    { path: 'Publishers', loadChildren: '../library/library.module#LibraryModule' }
];
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                /* HomeRoutingModule, */
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid_dist_es_grid_module__["a" /* GridModule */],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_dropdowns__["c" /* DropDownsModule */],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_dropdowns__["b" /* DropDownListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/home-component/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333;\r\n    border-radius: 10px 10px 10px 10px;\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nli a:hover {\r\n    background-color: rgb(255, 104, 88);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map