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
var articlesComponent_1 = require("./articles-component/articlesComponent");
var kendo_angular_dropdowns_1 = require("@progress/kendo-angular-dropdowns");
var forms_1 = require("@angular/forms");
var authorsComponent_1 = require("./authors-component/authorsComponent");
var booksComponent_1 = require("./books-component/booksComponent");
var journalsComponent_1 = require("./journals-component/journalsComponent");
var publishersComponent_1 = require("./publishers-component/publishersComponent");
var routes = [
    { path: 'load-AuthorsTable', component: authorsComponent_1.AuthorsComponent },
    { path: 'load-ArticlesTable', component: articlesComponent_1.ArticlesComponent },
    { path: 'load-BooksTable', component: booksComponent_1.BooksComponent },
    { path: 'load-JournalsTable', component: journalsComponent_1.JournalsComponent },
    { path: 'load-PublishersTable', component: publishersComponent_1.PublishersComponent }
];
var LibraryModule = /** @class */ (function () {
    function LibraryModule() {
    }
    LibraryModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(routes),
                common_1.CommonModule,
                grid_module_1.GridModule,
                kendo_angular_dropdowns_1.DropDownsModule,
                kendo_angular_dropdowns_1.DropDownListModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule
            ],
            declarations: [
                authorsComponent_1.AuthorsComponent,
                articlesComponent_1.ArticlesComponent,
                booksComponent_1.BooksComponent,
                journalsComponent_1.JournalsComponent,
                publishersComponent_1.PublishersComponent
            ]
        })
    ], LibraryModule);
    return LibraryModule;
}());
exports.LibraryModule = LibraryModule;
//# sourceMappingURL=library.module.js.map