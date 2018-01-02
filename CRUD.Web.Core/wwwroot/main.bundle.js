webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./author.module": [
		"../../../../../src/app/author.module.ts",
		"author.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PanelbarRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return panelbarRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_home_component_home_component__ = __webpack_require__("../../../../../src/app/home-component/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_articles_component_articlesComponent__ = __webpack_require__("../../../../../src/app/articles-component/articlesComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__books_component_booksComponent__ = __webpack_require__("../../../../../src/app/books-component/booksComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__journals_component_journalsComponent__ = __webpack_require__("../../../../../src/app/journals-component/journalsComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__publishers_component_publishersComponent__ = __webpack_require__("../../../../../src/app/publishers-component/publishersComponent.ts");






var PanelbarRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__app_home_component_home_component__["a" /* HomeComponent */] },
    { path: 'Authors', loadChildren: './author.module#AuthorsModule' },
    //{ path: 'Authors', component: AuthorsComponent }, 
    { path: 'Articles', component: __WEBPACK_IMPORTED_MODULE_2__app_articles_component_articlesComponent__["a" /* ArticlesComponent */] },
    { path: 'Books', component: __WEBPACK_IMPORTED_MODULE_3__books_component_booksComponent__["a" /* BooksComponent */] },
    { path: 'Journals', component: __WEBPACK_IMPORTED_MODULE_4__journals_component_journalsComponent__["a" /* JournalsComponent */] },
    { path: 'Publishers', component: __WEBPACK_IMPORTED_MODULE_5__publishers_component_publishersComponent__["a" /* PublishersComponent */] }
];
var appRoutingProviders = [];
var panelbarRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(PanelbarRoutes);


/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\r\n  <!-- <div class=\"navigation-pane\">\r\n    <kendo-panelbar>\r\n      <kendo-panelbar-item *ngFor=\"let route of router.config\"\r\n                           [id]=\"route.path\"\r\n                           [title]=\"route.path ? route.path : 'Home'\"\r\n                           [routerLink]=\"route.path\">\r\n      </kendo-panelbar-item>\r\n    </kendo-panelbar>\r\n  </div> -->\r\n  <ul>\r\n    <li><a routerLink=''>Home</a></li>\r\n    <li><a routerLink='Authors/load-AuthorsTable'>Authors</a></li>\r\n    <li><a routerLink='Articles'>Articles</a></li>\r\n    <li><a routerLink='Books'>Books</a></li>\r\n    <li><a routerLink='Journals'>Journals</a></li>\r\n    <li><a routerLink='Publishers'>Publishers</a></li>\r\n  </ul>\r\n  <!-- <div class=\"content-pane\"> -->\r\n    <router-outlet></router-outlet>\r\n  <!-- </div> -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'my-app',
            styles: [__webpack_require__("../../../../../src/app/layout-navbar/styles.css")],
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_layout__ = __webpack_require__("../../../../@progress/kendo-angular-layout/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_home_component_home_component__ = __webpack_require__("../../../../../src/app/home-component/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__progress_kendo_angular_grid__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__authors_component_authorsService__ = __webpack_require__("../../../../../src/app/authors-component/authorsService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_articles_component_articlesComponent__ = __webpack_require__("../../../../../src/app/articles-component/articlesComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__progress_kendo_angular_popup__ = __webpack_require__("../../../../@progress/kendo-angular-popup/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_articles_component_articlesService__ = __webpack_require__("../../../../../src/app/articles-component/articlesService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__progress_kendo_angular_dropdowns__ = __webpack_require__("../../../../@progress/kendo-angular-dropdowns/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__books_component_booksComponent__ = __webpack_require__("../../../../../src/app/books-component/booksComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__books_component_booksService__ = __webpack_require__("../../../../../src/app/books-component/booksService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__journals_component_journalsComponent__ = __webpack_require__("../../../../../src/app/journals-component/journalsComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__journals_component_journalsService__ = __webpack_require__("../../../../../src/app/journals-component/journalsService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__publishers_component_publishersComponent__ = __webpack_require__("../../../../../src/app/publishers-component/publishersComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__publishers_component_publishersService__ = __webpack_require__("../../../../../src/app/publishers-component/publishersService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














/* import { AuthorsComponent } from './authors-component/authorsComponent'; */










//import { AuthorsRouting } from './lazy/authors/author.routing';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__app_home_component_home_component__["a" /* HomeComponent */],
                /* AuthorsComponent, */
                __WEBPACK_IMPORTED_MODULE_13__app_articles_component_articlesComponent__["a" /* ArticlesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__books_component_booksComponent__["a" /* BooksComponent */],
                __WEBPACK_IMPORTED_MODULE_19__journals_component_journalsComponent__["a" /* JournalsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__publishers_component_publishersComponent__["a" /* PublishersComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_layout__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["b" /* panelbarRouting */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__progress_kendo_angular_grid__["a" /* GridModule */],
                __WEBPACK_IMPORTED_MODULE_14__progress_kendo_angular_popup__["a" /* PopupModule */],
                __WEBPACK_IMPORTED_MODULE_16__progress_kendo_angular_dropdowns__["c" /* DropDownsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* appRoutingProviders */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* APP_BASE_HREF */], useValue: window.location.pathname },
                {
                    deps: [__WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */]],
                    provide: __WEBPACK_IMPORTED_MODULE_12__authors_component_authorsService__["a" /* AuthorsService */],
                    useFactory: function (jsonp) { return function () { return new __WEBPACK_IMPORTED_MODULE_12__authors_component_authorsService__["a" /* AuthorsService */](jsonp); }; }
                },
                {
                    deps: [__WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */]],
                    provide: __WEBPACK_IMPORTED_MODULE_15__app_articles_component_articlesService__["a" /* ArticlesService */],
                    useFactory: function (jsonp) { return function () { return new __WEBPACK_IMPORTED_MODULE_15__app_articles_component_articlesService__["a" /* ArticlesService */](jsonp); }; }
                },
                {
                    deps: [__WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */]],
                    provide: __WEBPACK_IMPORTED_MODULE_18__books_component_booksService__["a" /* BooksService */],
                    useFactory: function (jsonp) { return function () { return new __WEBPACK_IMPORTED_MODULE_18__books_component_booksService__["a" /* BooksService */](jsonp); }; }
                },
                {
                    deps: [__WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */]],
                    provide: __WEBPACK_IMPORTED_MODULE_20__journals_component_journalsService__["a" /* JournalsService */],
                    useFactory: function (jsonp) { return function () { return new __WEBPACK_IMPORTED_MODULE_20__journals_component_journalsService__["a" /* JournalsService */](jsonp); }; }
                },
                {
                    deps: [__WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */]],
                    provide: __WEBPACK_IMPORTED_MODULE_22__publishers_component_publishersService__["a" /* PublishersService */],
                    useFactory: function (jsonp) { return function () { return new __WEBPACK_IMPORTED_MODULE_22__publishers_component_publishersService__["a" /* PublishersService */](jsonp); }; }
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/articles-component/articlesComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__ = __webpack_require__("../../../../@progress/kendo-data-query/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__articlesService__ = __webpack_require__("../../../../../src/app/articles-component/articlesService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authors_component_authorsService__ = __webpack_require__("../../../../../src/app/authors-component/authorsService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var formGroup = function (dataItem) { return new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
    'Id': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.Id),
    'Name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.Name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
    'Year': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.Year, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
    'AuthorId': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.AuthorId, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
}); };
var ArticlesComponent = (function () {
    function ArticlesComponent(editServiceFactoryArticle, editServiceFactoryAuthor, titleService) {
        this.titleService = titleService;
        this.authors = [];
        this.regexpGuid = new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$', 'i');
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.editServiceArticle = editServiceFactoryArticle();
        this.editServiceAuthor = editServiceFactoryAuthor();
    }
    ArticlesComponent.prototype.author = function (id) {
        return this.authors.find(function (x) { return x.Id === id; });
    };
    ArticlesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('Articles Page');
        this.view = this.editServiceArticle.map(function (data) { return Object(__WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__["d" /* process */])(data, _this.gridState); });
        this.editServiceArticle.readAuthors().subscribe(function (data) { _this.authors = data; });
        this.editServiceArticle.read();
    };
    ArticlesComponent.prototype.addHandler = function (_a) {
        var sender = _a.sender;
        this.closeEditor(sender);
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'Id': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            'Name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'Year': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'AuthorId': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
        });
        sender.addRow(this.formGroup);
    };
    ArticlesComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'Id': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.Id),
            'Name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.Name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'Year': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.Year, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'AuthorId': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.AuthorId),
        });
        this.editedRowIndex = rowIndex;
        sender.editRow(rowIndex, this.formGroup);
    };
    ArticlesComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
    };
    ArticlesComponent.prototype.saveHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, formGroup = _a.formGroup, isNew = _a.isNew;
        var article = formGroup.value;
        var res = this.regexpGuid.test(article.AuthorId);
        if (res) {
            this.editServiceArticle.save(article, isNew);
            sender.closeRow(rowIndex);
        }
        else {
            alert('Select a author!');
        }
    };
    ArticlesComponent.prototype.removeHandler = function (_a) {
        var dataItem = _a.dataItem;
        this.editServiceArticle.remove(dataItem);
    };
    ArticlesComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.formGroup = undefined;
    };
    ArticlesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-articles',
            template: __webpack_require__("../../../../../src/app/articles-component/articlesView.html")
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__articlesService__["a" /* ArticlesService */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__authors_component_authorsService__["a" /* AuthorsService */])),
        __metadata("design:paramtypes", [Object, Object, __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]])
    ], ArticlesComponent);
    return ArticlesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/articles-component/articlesService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var READ_ACTION = 'Read';
var CREATE_ACTION = 'Create';
var UPDATE_ACTION = 'Update';
var DELETE_ACTION = 'Delete';
var baseUrl = 'http://' + location.host + '/';
var controller = 'Articles/';
var ArticlesService = (function (_super) {
    __extends(ArticlesService, _super);
    function ArticlesService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.data = [];
        return _this;
    }
    ArticlesService.prototype.readAuthors = function () {
        return this.http.get(baseUrl + 'api/Authors/' + READ_ACTION);
    };
    ArticlesService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch(READ_ACTION)
            .do(function (data) {
            _this.data = data;
            console.log(data);
        })
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    ArticlesService.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    ArticlesService.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        this.fetch(DELETE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    ArticlesService.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        var originalDataItem = this.data.find(function (item) { return item.Id === dataItem.Id; });
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    ArticlesService.prototype.reset = function () {
        this.data = [];
    };
    ArticlesService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        if (action == 'Read') {
            var url = baseUrl + 'api/' + controller + READ_ACTION;
            return this.http
                .get(url)
                .map(function (res) { return res; });
        }
        if (action == 'Create') {
            var url = baseUrl + 'api/' + controller + CREATE_ACTION;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
        if (action == 'Update') {
            var url = baseUrl + 'api/' + controller + UPDATE_ACTION;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
        if (action == 'Delete') {
            var url = baseUrl + 'api/' + controller + DELETE_ACTION;
            var id = data.Id;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
    };
    ArticlesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ArticlesService);
    return ArticlesService;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]));



/***/ }),

/***/ "../../../../../src/app/articles-component/articlesView.html":
/***/ (function(module, exports) {

module.exports = "<h3>Articles</h3>\r\n<p></p>\r\n<kendo-grid [data]=\"view | async\"\r\n            [height]=\"533\"\r\n            [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n            [pageable]=\"true\" [sortable]=\"true\"\r\n            (dataStateChange)=\"onStateChange($event)\"\r\n            (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\r\n            (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\r\n            (add)=\"addHandler($event)\">\r\n  <ng-template kendoGridToolbarTemplate>\r\n    <button kendoGridAddCommand>Add new</button>\r\n  </ng-template>\r\n  <kendo-grid-column field=\"Name\" title=\"Name\"></kendo-grid-column>\r\n  <kendo-grid-column field=\"Year\" title=\"Year\"></kendo-grid-column>\r\n  <kendo-grid-column field=\"AuthorId\" title=\"Author\" width=\"150\">\r\n    <ng-template kendoGridCellTemplate let-dataItem>\r\n      {{author(dataItem.AuthorId)?.Abbreviated}}     \r\n    </ng-template>\r\n    <ng-template kendoGridEditTemplate\r\n      let-dataItem=\"dataItem\"\r\n      let-formGroup=\"formGroup\">    \r\n      <kendo-dropdownlist\r\n                  [data]=\"authors\"\r\n                  textField = \"Abbreviated\"\r\n                  valueField=\"Id\"     \r\n                  [valuePrimitive]=\"true\"          \r\n                  [formControl]=\"formGroup.get('AuthorId')\">\r\n                </kendo-dropdownlist>\r\n    </ng-template>\r\n  </kendo-grid-column>\r\n  <kendo-grid-command-column title=\"Actions\" width=\"220\">\r\n    <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n      <button kendoGridEditCommand class=\"k-primary\">Edit</button>\r\n      <button kendoGridRemoveCommand>Remove</button>\r\n      <button kendoGridSaveCommand [disabled]=\"formGroup?.invalid\">{{ isNew ? 'Add' : 'Update' }}</button>\r\n      <button kendoGridCancelCommand>Cancel</button>\r\n    </ng-template>\r\n  </kendo-grid-command-column>\r\n</kendo-grid>\r\n"

/***/ }),

/***/ "../../../../../src/app/authors-component/authorsService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var READ_ACTION = 'Read';
var CREATE_ACTION = 'Create';
var UPDATE_ACTION = 'Update';
var DELETE_ACTION = 'Delete';
var baseUrl = 'http://' + location.host + '/';
var controller = 'Authors/';
var AuthorsService = (function (_super) {
    __extends(AuthorsService, _super);
    function AuthorsService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.data = [];
        _this.dataAuthors = [];
        return _this;
    }
    AuthorsService.prototype.readAuthors = function () {
        var _this = this;
        this.fetch(READ_ACTION)
            .do(function (dataAuthors) {
            _this.dataAuthors = dataAuthors;
        })
            .subscribe(function (dataAuthors) {
            _super.prototype.next.call(_this, dataAuthors);
        });
        return this.dataAuthors;
    };
    AuthorsService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch(READ_ACTION)
            .do(function (data) {
            _this.data = data;
        })
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    AuthorsService.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    AuthorsService.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        this.fetch(DELETE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    AuthorsService.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        var originalDataItem = this.data.find(function (item) { return item.Id === dataItem.Id; });
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    AuthorsService.prototype.reset = function () {
        this.data = [];
    };
    AuthorsService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        if (action == 'Read') {
            var url = baseUrl + 'api/' + controller + READ_ACTION;
            return this.http
                .get(url)
                .map(function (res) { return res; });
        }
        if (action == 'Create') {
            var url = baseUrl + 'api/' + controller + CREATE_ACTION;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
        if (action == 'Update') {
            var url = baseUrl + 'api/' + controller + UPDATE_ACTION;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
        if (action == 'Delete') {
            var url = baseUrl + 'api/' + controller + DELETE_ACTION;
            var id = data.Id;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
    };
    AuthorsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthorsService);
    return AuthorsService;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]));



/***/ }),

/***/ "../../../../../src/app/books-component/booksComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__ = __webpack_require__("../../../../@progress/kendo-data-query/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__booksService__ = __webpack_require__("../../../../../src/app/books-component/booksService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var formGroup = function (dataItem) { return new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
    'Id': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.Id),
    'Name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.Name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
    'Year': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.Year, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
    'AuthorIds': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.AuthorIds, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
}); };
var BooksComponent = (function () {
    function BooksComponent(editServiceFactoryBook, titleService) {
        this.titleService = titleService;
        this.selectedItems = [];
        this.authorsForDefaultValue = [];
        this.authors = [];
        this.authorAbbreviateds = '';
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.editServiceBook = editServiceFactoryBook();
    }
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editServiceBook.readAuthors().subscribe(function (data) { _this.authors = data; });
        this.view = this.editServiceBook.map(function (data) { return Object(__WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__["d" /* process */])(data, _this.gridState); });
        this.editServiceBook.read();
        this.titleService.setTitle('Books Page');
    };
    BooksComponent.prototype.authorsView = function (id) {
        if (id === void 0) { id = []; }
        this.authorAbbreviateds = " ";
        if (id[0] !== "") {
            var _loop_1 = function (i) {
                if (this_1.authors.find(function (x) { return x.Id === id[i]; }) !== undefined) {
                    this_1.authorAbbreviateds += this_1.authors.find(function (x) { return x.Id === id[i]; }).Abbreviated + ', ';
                }
            };
            var this_1 = this;
            for (var i = 0; i <= id.length - 2; i++) {
                _loop_1(i);
            }
            if (this.authors.find(function (x) { return x.Id === id[id.length - 1]; }) !== undefined) {
                this.authorAbbreviateds += this.authors.find(function (x) { return x.Id === id[id.length - 1]; }).Abbreviated + '.';
            }
        }
        return this.authorAbbreviateds;
    };
    BooksComponent.prototype.addHandler = function (_a) {
        var sender = _a.sender;
        this.closeEditor(sender);
        this.selectedItems = undefined;
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'Id': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            'Name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'Year': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'AuthorIds': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
        });
        sender.addRow(this.formGroup);
    };
    BooksComponent.prototype.selectFromAuthors = function (authorIds) {
        var _loop_2 = function (i) {
            this_2.authorsForDefaultValue[i] = this_2.authors.find(function (item) { return item.Id === authorIds[i]; });
        };
        var this_2 = this;
        for (var i = 0; i < authorIds.length; i++) {
            _loop_2(i);
        }
        return this.authorsForDefaultValue;
    };
    BooksComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.selectedItems = this.selectFromAuthors(dataItem.AuthorIds);
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'Id': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.Id),
            'Name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.Name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'Year': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.Year, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'AuthorIds': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.AuthorIds, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
        });
        this.editedRowIndex = rowIndex;
        sender.editRow(rowIndex, this.formGroup);
    };
    BooksComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
    };
    BooksComponent.prototype.saveHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, formGroup = _a.formGroup, isNew = _a.isNew;
        var book = formGroup.value;
        console.log(this.selectedItems);
        book.AuthorIds = [];
        if (this.selectedItems !== undefined) {
            for (var i = 0; i < this.selectedItems.length; i++) {
                book.AuthorIds[i] = this.selectedItems[i].Id;
            }
        }
        if (book.AuthorIds.length !== 0) {
            this.selectedItems = undefined;
            this.editServiceBook.save(book, isNew);
            sender.closeRow(rowIndex);
        }
        else {
            alert("Select at least one author!");
        }
    };
    BooksComponent.prototype.removeHandler = function (_a) {
        var dataItem = _a.dataItem;
        this.editServiceBook.remove(dataItem);
    };
    BooksComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.formGroup = undefined;
    };
    BooksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-books',
            template: __webpack_require__("../../../../../src/app/books-component/booksView.html"),
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__booksService__["a" /* BooksService */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/books-component/booksService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var READ_ACTION = 'Read';
var CREATE_ACTION = 'Create';
var UPDATE_ACTION = 'Update';
var DELETE_ACTION = 'Delete';
var baseUrl = 'http://' + location.host + '/';
var controller = 'Books/';
var BooksService = (function (_super) {
    __extends(BooksService, _super);
    function BooksService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.data = [];
        return _this;
    }
    BooksService.prototype.readAuthors = function () {
        return this.http.get(baseUrl + 'api/Authors/' + READ_ACTION);
    };
    BooksService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch(READ_ACTION)
            .do(function (data) {
            _this.data = data;
        })
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    BooksService.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        console.log('check_SaveData:');
        console.log(data);
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    BooksService.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        this.fetch(DELETE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    BooksService.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        var originalDataItem = this.data.find(function (item) { return item.Id === dataItem.Id; });
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    BooksService.prototype.reset = function () {
        this.data = [];
    };
    BooksService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        if (action == 'Read') {
            var url = baseUrl + 'api/' + controller + READ_ACTION;
            return this.http
                .get(url)
                .map(function (res) { return res; });
        }
        if (action == 'Create') {
            var url = baseUrl + '/api/' + controller + CREATE_ACTION;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
        if (action == 'Update') {
            var url = baseUrl + '/api/' + controller + UPDATE_ACTION;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
        if (action == 'Delete') {
            var url = baseUrl + '/api/' + controller + DELETE_ACTION;
            var id = data.Id;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
    };
    BooksService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BooksService);
    return BooksService;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]));



/***/ }),

/***/ "../../../../../src/app/books-component/booksView.html":
/***/ (function(module, exports) {

module.exports = "<h3>Books</h3>\n<p></p>\n<kendo-grid [data]=\"view | async\"\n            [height]=\"533\"\n            [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n            [pageable]=\"true\" [sortable]=\"true\"\n            (dataStateChange)=\"onStateChange($event)\"\n            (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\n            (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\n            (add)=\"addHandler($event)\">\n  <ng-template kendoGridToolbarTemplate>\n    <button kendoGridAddCommand>Add new</button>\n  </ng-template>\n  <kendo-grid-column field=\"Name\" title=\"Name\"></kendo-grid-column>\n  <kendo-grid-column field=\"Year\" title=\"Year\"></kendo-grid-column>\n  <kendo-grid-column field=\"AuthorIds\" title=\"Authors\" width=\"200\">\n    <ng-template kendoGridCellTemplate let-dataItem>\n      {{authorsView(dataItem.AuthorIds)}}     \n    </ng-template>\n    <ng-template kendoGridEditTemplate\n      let-dataItem=\"dataItem\"\n      let-formGroup=\"formGroup\">    \n      <kendo-multiselect \n        [data]=\"authors\"\n        textField=\"Abbreviated\"\n        valueField=\"Id\"\n        [(ngModel)]=\"selectedItems\"\n        [placeholder]=\"'Select authors...'\" >\n      </kendo-multiselect >\n    </ng-template>\n  </kendo-grid-column>\n  <kendo-grid-command-column title=\"Actions\" width=\"220\">\n    <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n      <button kendoGridEditCommand class=\"k-primary\">Edit</button>\n      <button kendoGridRemoveCommand>Remove</button>\n      <button kendoGridSaveCommand [disabled]=\"formGroup?.invalid\">{{ isNew ? 'Add' : 'Update' }}</button>\n      <button kendoGridCancelCommand>Cancel</button>\n    </ng-template>\n  </kendo-grid-command-column>\n</kendo-grid>\n"

/***/ }),

/***/ "../../../../../src/app/home-component/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h2>Home page</h2>\r\n  <div>\r\n    <p>However engaging wherever growled much methodic shamefully more human agreeable gracefully and less equitable insistent gasped that when wasp baboon rebuilt more slept stingily along knew llama.</p>\r\n    <p>Prim crud far healthy wholesomely more far chortled ouch in adroitly gawked affably reasonably manfully reindeer mysteriously overpaid considering far far until.</p>\r\n    <p>Red-handed off thickly save aboard mawkishly that amidst moth pending jerkily monogamous some much or creatively indecent neat far jeepers up spoiled about.</p>\r\n    <p>Owing desperate like one shark or bit yikes up so thus grumbled gosh more bawled much and regardless hey far bought through crud well staunchly hysteric inside incorrect the closed.</p>\r\n    <p>Industrious jubilant blanched bestially yet that less far far a wow the militant preparatory crudely acrimonious under a towards lemur wedded that while decorously this peered darn a much.</p>\r\n    <p>Dizzy boundless hence but because moodily and alas a truculently less hardheaded so on ambiguously incompetently less moaned hilarious until one jeepers amid heinously.</p>\r\n    <p>Where beneath less misspelled across artistically spiteful jeepers much more that when blushed a much a this groundhog therefore far arduous dependent much satanic where dear goodness hummingbird.</p>\r\n  </div>\r\n</div>\r\n"

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
            template: __webpack_require__("../../../../../src/app/home-component/home.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/journals-component/journalsComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JournalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__ = __webpack_require__("../../../../@progress/kendo-data-query/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__journalsService__ = __webpack_require__("../../../../../src/app/journals-component/journalsService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var formGroup = function (dataItem) { return new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
    'Id': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.Id),
    'Name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.Name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
    'Date': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.Date, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
    'ArticleIds': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.ArticleIds, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
}); };
var JournalsComponent = (function () {
    function JournalsComponent(editServiceFactoryJournal, titleService) {
        this.titleService = titleService;
        this.selectedItems = [];
        this.articlesForDefaultValue = [];
        this.articles = [];
        this.articleNames = '';
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.editServiceJournal = editServiceFactoryJournal();
    }
    JournalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editServiceJournal.readArticles().subscribe(function (data) { _this.articles = data; });
        this.view = this.editServiceJournal.map(function (data) { return Object(__WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__["d" /* process */])(data, _this.gridState); });
        this.editServiceJournal.read();
        this.titleService.setTitle('Journals Page');
    };
    JournalsComponent.prototype.articlesView = function (id) {
        if (id === void 0) { id = []; }
        this.articleNames = " ";
        if (id[0] !== "") {
            var _loop_1 = function (i) {
                if (this_1.articles.find(function (x) { return x.Id === id[i]; }) !== undefined) {
                    this_1.articleNames += this_1.articles.find(function (x) { return x.Id === id[i]; }).Name + ', ';
                }
            };
            var this_1 = this;
            for (var i = 0; i <= id.length - 2; i++) {
                _loop_1(i);
            }
            if (this.articles.find(function (x) { return x.Id === id[id.length - 1]; }) !== undefined) {
                this.articleNames += this.articles.find(function (x) { return x.Id === id[id.length - 1]; }).Name + '.';
            }
        }
        return this.articleNames;
    };
    JournalsComponent.prototype.addHandler = function (_a) {
        var sender = _a.sender;
        this.closeEditor(sender);
        this.selectedItems = undefined;
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'Id': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            'Name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'Date': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'ArticleIds': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
        });
        sender.addRow(this.formGroup);
    };
    JournalsComponent.prototype.selectFromArticles = function (articleIds) {
        var _loop_2 = function (i) {
            this_2.articlesForDefaultValue[i] = this_2.articles.find(function (item) { return item.Id === articleIds[i]; });
        };
        var this_2 = this;
        for (var i = 0; i < articleIds.length; i++) {
            _loop_2(i);
        }
        return this.articlesForDefaultValue;
    };
    JournalsComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.selectedItems = this.selectFromArticles(dataItem.ArticleIds);
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'Id': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.Id),
            'Name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.Name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'Date': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.Date, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'ArticleIds': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.ArticleIds, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
        });
        this.editedRowIndex = rowIndex;
        sender.editRow(rowIndex, this.formGroup);
    };
    JournalsComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
    };
    JournalsComponent.prototype.saveHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, formGroup = _a.formGroup, isNew = _a.isNew;
        var journal = formGroup.value;
        journal.ArticleIds = [];
        if (this.selectedItems !== undefined) {
            for (var i = 0; i < this.selectedItems.length; i++) {
                journal.ArticleIds[i] = this.selectedItems[i].Id;
            }
        }
        if (journal.ArticleIds.length !== 0) {
            this.selectedItems = undefined;
            this.editServiceJournal.save(journal, isNew);
            sender.closeRow(rowIndex);
        }
        else {
            alert("Select at least one article!");
        }
    };
    JournalsComponent.prototype.removeHandler = function (_a) {
        var dataItem = _a.dataItem;
        this.editServiceJournal.remove(dataItem);
    };
    JournalsComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.formGroup = undefined;
    };
    JournalsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-journals',
            template: __webpack_require__("../../../../../src/app/journals-component/journalsView.html"),
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__journalsService__["a" /* JournalsService */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]])
    ], JournalsComponent);
    return JournalsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/journals-component/journalsService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JournalsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var READ_ACTION = 'Read';
var CREATE_ACTION = 'Create';
var UPDATE_ACTION = 'Update';
var DELETE_ACTION = 'Delete';
var baseUrl = 'http://' + location.host + '/';
var controller = 'Journals/';
var JournalsService = (function (_super) {
    __extends(JournalsService, _super);
    function JournalsService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.data = [];
        return _this;
    }
    JournalsService.prototype.readArticles = function () {
        return this.http.get(baseUrl + 'api/Articles/' + READ_ACTION);
    };
    JournalsService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch(READ_ACTION)
            .do(function (data) {
            _this.data = data;
        })
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    JournalsService.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    JournalsService.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        this.fetch(DELETE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    JournalsService.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        var originalDataItem = this.data.find(function (item) { return item.Id === dataItem.Id; });
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    JournalsService.prototype.reset = function () {
        this.data = [];
    };
    JournalsService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        if (action == 'Read') {
            var url = baseUrl + 'api/' + controller + READ_ACTION;
            return this.http
                .get(url)
                .map(function (res) { return res; });
        }
        if (action == 'Create') {
            var url = baseUrl + '/api/' + controller + CREATE_ACTION;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
        if (action == 'Update') {
            var url = baseUrl + '/api/' + controller + UPDATE_ACTION;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
        if (action == 'Delete') {
            var url = baseUrl + '/api/' + controller + DELETE_ACTION;
            var id = data.Id;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
    };
    JournalsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], JournalsService);
    return JournalsService;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]));



/***/ }),

/***/ "../../../../../src/app/journals-component/journalsView.html":
/***/ (function(module, exports) {

module.exports = "<h3>Journals</h3>\n<p></p>\n<kendo-grid [data]=\"view | async\"\n            [height]=\"533\"\n            [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n            [pageable]=\"true\" [sortable]=\"true\"\n            (dataStateChange)=\"onStateChange($event)\"\n            (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\n            (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\n            (add)=\"addHandler($event)\">\n  <ng-template kendoGridToolbarTemplate>\n    <button kendoGridAddCommand>Add new</button>\n  </ng-template>\n  <kendo-grid-column field=\"Name\" title=\"Name\"></kendo-grid-column>\n  <kendo-grid-column field=\"Date\" title=\"Date\"></kendo-grid-column>\n  <kendo-grid-column field=\"ArticleIds\" title=\"Articles\" width=\"200\">\n    <ng-template kendoGridCellTemplate let-dataItem>\n      {{articlesView(dataItem.ArticleIds)}}     \n    </ng-template>\n    <ng-template kendoGridEditTemplate\n      let-dataItem=\"dataItem\"\n      let-formGroup=\"formGroup\">    \n      <kendo-multiselect \n        [data]=\"articles\"\n        textField=\"Name\"\n        valueField=\"Id\"\n        [(ngModel)]=\"selectedItems\"\n        [placeholder]=\"'Select authors...'\" >\n      </kendo-multiselect >\n    </ng-template>\n  </kendo-grid-column>\n  <kendo-grid-command-column title=\"Actions\" width=\"220\">\n    <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n      <button kendoGridEditCommand class=\"k-primary\">Edit</button>\n      <button kendoGridRemoveCommand>Remove</button>\n      <button kendoGridSaveCommand [disabled]=\"formGroup?.invalid\">{{ isNew ? 'Add' : 'Update' }}</button>\n      <button kendoGridCancelCommand>Cancel</button>\n    </ng-template>\n  </kendo-grid-command-column>\n</kendo-grid>\n\n"

/***/ }),

/***/ "../../../../../src/app/layout-navbar/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333;\r\n    border-radius: 10px 10px 10px 10px;\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\n/* Change the link color to #111 (black) on hover */\r\nli a:hover {\r\n    background-color: rgb(255, 104, 88);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/publishers-component/publishersComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublishersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__ = __webpack_require__("../../../../@progress/kendo-data-query/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__publishersService__ = __webpack_require__("../../../../../src/app/publishers-component/publishersService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var formGroup = function (dataItem) { return new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
    'Id': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.Id),
    'Name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.Name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
    'BookIds': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.BookIds, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
    'JournalIds': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.JournalIds, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
}); };
var PublishersComponent = (function () {
    function PublishersComponent(editServiceFactoryPublisher, titleService) {
        this.titleService = titleService;
        this.selectedBooksItems = [];
        this.selectedJournalsItems = [];
        this.booksForDefaultValue = [];
        this.journalsForDefaultValue = [];
        this.books = [];
        this.journals = [];
        //public publishers: Publisher[] = [];
        this.bookNames = '';
        this.journalNames = '';
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.editServicePublisher = editServiceFactoryPublisher();
    }
    PublishersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('Publishers Page');
        this.editServicePublisher.readBooks().subscribe(function (data) { _this.books = data; });
        this.editServicePublisher.readJournals().subscribe(function (data) { _this.journals = data; });
        this.view = this.editServicePublisher.map(function (data) { return Object(__WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__["d" /* process */])(data, _this.gridState); });
        this.editServicePublisher.read();
    };
    PublishersComponent.prototype.booksView = function (id) {
        if (id === void 0) { id = []; }
        this.bookNames = " ";
        if (id[0] !== "") {
            var _loop_1 = function (i) {
                if (this_1.books.find(function (x) { return x.Id === id[i]; }) !== undefined) {
                    this_1.bookNames += this_1.books.find(function (x) { return x.Id === id[i]; }).Name + ', ';
                }
            };
            var this_1 = this;
            for (var i = 0; i <= id.length - 2; i++) {
                _loop_1(i);
            }
            if (this.books.find(function (x) { return x.Id === id[id.length - 1]; }) !== undefined) {
                this.bookNames += this.books.find(function (x) { return x.Id === id[id.length - 1]; }).Name + '.';
            }
        }
        return this.bookNames;
    };
    PublishersComponent.prototype.journalsView = function (id) {
        if (id === void 0) { id = []; }
        this.journalNames = " ";
        if (id[0] !== "") {
            var _loop_2 = function (i) {
                if (this_2.journals.find(function (x) { return x.Id === id[i]; }) !== undefined) {
                    this_2.journalNames += this_2.journals.find(function (x) { return x.Id === id[i]; }).Name + ', ';
                }
            };
            var this_2 = this;
            for (var i = 0; i <= id.length - 2; i++) {
                _loop_2(i);
            }
            if (this.journals.find(function (x) { return x.Id === id[id.length - 1]; }) !== undefined) {
                this.journalNames += this.journals.find(function (x) { return x.Id === id[id.length - 1]; }).Name + '.';
            }
        }
        return this.journalNames;
    };
    PublishersComponent.prototype.addHandler = function (_a) {
        var sender = _a.sender;
        this.closeEditor(sender);
        this.selectedBooksItems = undefined;
        this.selectedJournalsItems = undefined;
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'Id': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            'Name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'BookIds': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'JournalIds': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
        });
        sender.addRow(this.formGroup);
    };
    PublishersComponent.prototype.selectFromBooks = function (bookIds) {
        if (bookIds !== undefined) {
            var _loop_3 = function (i) {
                this_3.booksForDefaultValue[i] = this_3.books.find(function (item) { return item.Id === bookIds[i]; });
            };
            var this_3 = this;
            for (var i = 0; i < bookIds.length; i++) {
                _loop_3(i);
            }
        }
        return this.booksForDefaultValue;
    };
    PublishersComponent.prototype.selectFromJournals = function (journalIds) {
        if (journalIds !== undefined) {
            var _loop_4 = function (i) {
                this_4.journalsForDefaultValue[i] = this_4.journals.find(function (item) { return item.Id === journalIds[i]; });
            };
            var this_4 = this;
            for (var i = 0; i < journalIds.length; i++) {
                _loop_4(i);
            }
        }
        return this.journalsForDefaultValue;
    };
    PublishersComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.selectedBooksItems = this.selectFromBooks(dataItem.BookIds);
        this.selectedJournalsItems = this.selectFromJournals(dataItem.JournalIds);
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'Id': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.Id),
            'Name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.Name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'BookIds': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.BookIds, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'JournalIds': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](dataItem.JournalIds, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
        });
        this.editedRowIndex = rowIndex;
        sender.editRow(rowIndex, this.formGroup);
    };
    PublishersComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
    };
    PublishersComponent.prototype.saveHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, formGroup = _a.formGroup, isNew = _a.isNew;
        var publisher = formGroup.value;
        publisher.BookIds = [];
        publisher.JournalIds = [];
        if (this.selectedBooksItems !== undefined) {
            for (var i = 0; i < this.selectedBooksItems.length; i++) {
                publisher.BookIds[i] = this.selectedBooksItems[i].Id;
            }
        }
        if (this.selectedJournalsItems !== undefined) {
            for (var i = 0; i < this.selectedJournalsItems.length; i++) {
                publisher.JournalIds[i] = this.selectedJournalsItems[i].Id;
            }
        }
        if (publisher.BookIds.length !== 0 && publisher.JournalIds.length !== 0) {
            this.selectedBooksItems = undefined;
            this.selectedJournalsItems = undefined;
            this.editServicePublisher.save(publisher, isNew);
            sender.closeRow(rowIndex);
        }
        else {
            alert("Select at least one book and least one journal!");
        }
    };
    PublishersComponent.prototype.removeHandler = function (_a) {
        var dataItem = _a.dataItem;
        this.editServicePublisher.remove(dataItem);
    };
    PublishersComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.formGroup = undefined;
    };
    PublishersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-publishers',
            template: __webpack_require__("../../../../../src/app/publishers-component/publishersView.html"),
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__publishersService__["a" /* PublishersService */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]])
    ], PublishersComponent);
    return PublishersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/publishers-component/publishersService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublishersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var READ_ACTION = 'Read';
var CREATE_ACTION = 'Create';
var UPDATE_ACTION = 'Update';
var DELETE_ACTION = 'Delete';
var baseUrl = 'http://' + location.host + '/';
var controller = 'Publishers/';
var PublishersService = (function (_super) {
    __extends(PublishersService, _super);
    function PublishersService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.data = [];
        return _this;
    }
    PublishersService.prototype.readBooks = function () {
        return this.http.get(baseUrl + 'api/Books/' + READ_ACTION);
    };
    PublishersService.prototype.readJournals = function () {
        return this.http.get(baseUrl + 'api/Journals/' + READ_ACTION);
    };
    PublishersService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch(READ_ACTION)
            .do(function (data) {
            _this.data = data;
        })
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    PublishersService.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    PublishersService.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        this.fetch(DELETE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    PublishersService.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        var originalDataItem = this.data.find(function (item) { return item.Id === dataItem.Id; });
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    PublishersService.prototype.reset = function () {
        this.data = [];
    };
    PublishersService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        if (action == 'Read') {
            var url = baseUrl + 'api/' + controller + READ_ACTION;
            return this.http
                .get(url)
                .map(function (res) { return res; });
        }
        if (action == 'Create') {
            var url = baseUrl + '/api/' + controller + CREATE_ACTION;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
        if (action == 'Update') {
            var url = baseUrl + '/api/' + controller + UPDATE_ACTION;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
        if (action == 'Delete') {
            var url = baseUrl + '/api/' + controller + DELETE_ACTION;
            var id = data.Id;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
    };
    PublishersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PublishersService);
    return PublishersService;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]));



/***/ }),

/***/ "../../../../../src/app/publishers-component/publishersView.html":
/***/ (function(module, exports) {

module.exports = "<h3>Publishers</h3>\n<p></p>\n<kendo-grid [data]=\"view | async\"\n            [height]=\"533\"\n            [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n            [pageable]=\"true\" [sortable]=\"true\"\n            (dataStateChange)=\"onStateChange($event)\"\n            (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\n            (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\n            (add)=\"addHandler($event)\">\n  <ng-template kendoGridToolbarTemplate>\n    <button kendoGridAddCommand>Add new</button>\n  </ng-template>\n  <kendo-grid-column field=\"Name\" title=\"Name\"></kendo-grid-column>\n\n  <kendo-grid-column field=\"BookIds\" title=\"Books\" width=\"200\">\n    <ng-template kendoGridCellTemplate let-dataItem>\n      {{booksView(dataItem.BookIds)}}     \n    </ng-template>\n    <ng-template kendoGridEditTemplate\n      let-dataItem=\"dataItem\"\n      let-formGroup=\"formGroup\">    \n      <kendo-multiselect \n        [data]=\"books\"\n        textField=\"Name\"\n        valueField=\"Id\"\n        [(ngModel)]=\"selectedBooksItems\"\n        [placeholder]=\"'Select books...'\" >\n      </kendo-multiselect >\n    </ng-template>\n  </kendo-grid-column>\n\n  <kendo-grid-column field=\"JournalIds\" title=\"Journals\" width=\"200\">\n    <ng-template kendoGridCellTemplate let-dataItem>\n      {{journalsView(dataItem.JournalIds)}}     \n    </ng-template>\n    <ng-template kendoGridEditTemplate\n      let-dataItem=\"dataItem\"\n      let-formGroup=\"formGroup\">    \n      <kendo-multiselect \n        [data]=\"journals\"\n        textField=\"Name\"\n        valueField=\"Id\"\n        [(ngModel)]=\"selectedJournalsItems\"\n        [placeholder]=\"'Select journals...'\" >\n      </kendo-multiselect >\n    </ng-template>\n  </kendo-grid-column>\n  <kendo-grid-command-column title=\"Actions\" width=\"220\">\n    <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n      <button kendoGridEditCommand class=\"k-primary\">Edit</button>\n      <button kendoGridRemoveCommand>Remove</button>\n      <button kendoGridSaveCommand [disabled]=\"formGroup?.invalid\">{{ isNew ? 'Add' : 'Update' }}</button>\n      <button kendoGridCancelCommand>Cancel</button>\n    </ng-template>\n  </kendo-grid-command-column>\n</kendo-grid>\n"

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map