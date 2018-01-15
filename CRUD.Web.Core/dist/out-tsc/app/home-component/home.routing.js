"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
exports.PanelbarRoutes = [
    { path: '', loadChildren: './home.module#HomeModule' },
    { path: 'Home', loadChildren: './home.module#HomeModule' },
    { path: 'Authors', loadChildren: '../library/library.module#LibraryModule' },
    { path: 'Articles', loadChildren: '../library/library.module#LibraryModule' },
    { path: 'Books', loadChildren: '../library/library.module#LibraryModule' },
    { path: 'Journals', loadChildren: '../library/library.module#LibraryModule' },
    { path: 'Publishers', loadChildren: '../library/library.module#LibraryModule' }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(exports.PanelbarRoutes)],
            exports: [router_1.RouterModule],
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());
exports.HomeRoutingModule = HomeRoutingModule;
//# sourceMappingURL=home.routing.js.map