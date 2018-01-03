"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_component_1 = require("./app.component");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var router_1 = require("@angular/router");
var kendo_angular_layout_1 = require("@progress/kendo-angular-layout");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var home_component_1 = require("../app/home-component/home.component");
var http_1 = require("@angular/common/http");
var forms_2 = require("@angular/forms");
var kendo_angular_grid_1 = require("@progress/kendo-angular-grid");
var authorsService_1 = require("./authors-component/authorsService");
var kendo_angular_popup_1 = require("@progress/kendo-angular-popup");
var articlesService_1 = require("../app/articles-component/articlesService");
var kendo_angular_dropdowns_1 = require("@progress/kendo-angular-dropdowns");
var booksService_1 = require("./books-component/booksService");
var journalsService_1 = require("./journals-component/journalsService");
var publishersService_1 = require("./publishers-component/publishersService");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                kendo_angular_layout_1.LayoutModule,
                router_1.RouterModule,
                app_routing_module_1.panelbarRouting,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_2.ReactiveFormsModule,
                kendo_angular_grid_1.GridModule,
                kendo_angular_popup_1.PopupModule,
                kendo_angular_dropdowns_1.DropDownsModule,
                http_1.HttpClientModule
            ],
            providers: [
                app_routing_module_1.appRoutingProviders,
                { provide: common_1.APP_BASE_HREF, useValue: window.location.pathname },
                {
                    deps: [http_1.HttpClient],
                    provide: authorsService_1.AuthorsService,
                    useFactory: function (jsonp) { return function () { return new authorsService_1.AuthorsService(jsonp); }; }
                },
                {
                    deps: [http_1.HttpClient],
                    provide: articlesService_1.ArticlesService,
                    useFactory: function (jsonp) { return function () { return new articlesService_1.ArticlesService(jsonp); }; }
                },
                {
                    deps: [http_1.HttpClient],
                    provide: booksService_1.BooksService,
                    useFactory: function (jsonp) { return function () { return new booksService_1.BooksService(jsonp); }; }
                },
                {
                    deps: [http_1.HttpClient],
                    provide: journalsService_1.JournalsService,
                    useFactory: function (jsonp) { return function () { return new journalsService_1.JournalsService(jsonp); }; }
                },
                {
                    deps: [http_1.HttpClient],
                    provide: publishersService_1.PublishersService,
                    useFactory: function (jsonp) { return function () { return new publishersService_1.PublishersService(jsonp); }; }
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map