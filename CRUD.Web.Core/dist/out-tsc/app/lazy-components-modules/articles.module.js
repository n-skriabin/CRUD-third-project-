"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var grid_module_1 = require("@progress/kendo-angular-grid/dist/es/grid.module");
var articlesComponent_1 = require("../articles-component/articlesComponent");
var kendo_angular_dropdowns_1 = require("@progress/kendo-angular-dropdowns");
var forms_1 = require("@angular/forms");
var routes = [
    { path: 'load-ArticlesTable', component: articlesComponent_1.ArticlesComponent }
];
var ArticlesModule = /** @class */ (function () {
    function ArticlesModule() {
    }
    ArticlesModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes), common_1.CommonModule, grid_module_1.GridModule, kendo_angular_dropdowns_1.DropDownsModule, kendo_angular_dropdowns_1.DropDownListModule, forms_1.ReactiveFormsModule, forms_1.FormsModule],
            declarations: [articlesComponent_1.ArticlesComponent]
        })
    ], ArticlesModule);
    return ArticlesModule;
}());
exports.ArticlesModule = ArticlesModule;
//# sourceMappingURL=articles.module.js.map