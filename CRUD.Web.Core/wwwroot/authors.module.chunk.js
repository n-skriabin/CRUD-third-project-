webpackJsonp(["authors.module"],{

/***/ "../../../../../src/app/authors-component/authorsComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__ = __webpack_require__("../../../../@progress/kendo-data-query/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authors_component_authorsService__ = __webpack_require__("../../../../../src/app/authors-component/authorsService.ts");
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





var AuthorsComponent = (function () {
    function AuthorsComponent(editServiceFactory, titleService) {
        this.titleService = titleService;
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.editService = editServiceFactory();
    }
    AuthorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.view = this.editService.map(function (data) { return Object(__WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__["d" /* process */])(data, _this.gridState); });
        this.titleService.setTitle('Authors Page');
        this.editService.read();
    };
    AuthorsComponent.prototype.addHandler = function (_a) {
        var sender = _a.sender;
        this.closeEditor(sender);
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'Id': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'FirstName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'LastName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'Patronymic': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
        });
        sender.addRow(this.formGroup);
    };
    AuthorsComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'Id': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](dataItem.Id),
            'FirstName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](dataItem.FirstName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'LastName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](dataItem.LastName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'Patronymic': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](dataItem.Patronymic),
        });
        this.editedRowIndex = rowIndex;
        sender.editRow(rowIndex, this.formGroup);
    };
    AuthorsComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
    };
    AuthorsComponent.prototype.saveHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, formGroup = _a.formGroup, isNew = _a.isNew;
        var author = formGroup.value;
        this.editService.save(author, isNew);
        sender.closeRow(rowIndex);
    };
    AuthorsComponent.prototype.removeHandler = function (_a) {
        var dataItem = _a.dataItem;
        this.editService.remove(dataItem);
    };
    AuthorsComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.formGroup = undefined;
    };
    AuthorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-authors',
            template: __webpack_require__("../../../../../src/app/authors-component/authorsView.html"),
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__authors_component_authorsService__["a" /* AuthorsService */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Title */]])
    ], AuthorsComponent);
    return AuthorsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/authors-component/authorsView.html":
/***/ (function(module, exports) {

module.exports = "<h3>Authors</h3>\r\n<p></p>\r\n<kendo-grid [data]=\"view | async\"\r\n            [height]=\"533\"\r\n            [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n            [pageable]=\"true\" [sortable]=\"true\"\r\n            (dataStateChange)=\"onStateChange($event)\"\r\n            (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\r\n            (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\r\n            (add)=\"addHandler($event)\">\r\n  <ng-template kendoGridToolbarTemplate>\r\n    <button kendoGridAddCommand>Add new</button>\r\n  </ng-template>\r\n  <kendo-grid-column field=\"FirstName\" title=\"First name\"></kendo-grid-column>\r\n  <kendo-grid-column field=\"Patronymic\" title=\"Patronymic(and/or pseudonim)\"></kendo-grid-column>\r\n  <kendo-grid-column field=\"LastName\" title=\"Last name\"></kendo-grid-column>\r\n  <kendo-grid-command-column title=\"Actions\" width=\"220\">\r\n    <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n      <button kendoGridEditCommand class=\"k-primary\">Edit</button>\r\n      <button kendoGridRemoveCommand>Remove</button>\r\n      <button kendoGridSaveCommand [disabled]=\"formGroup?.invalid\">{{ isNew ? 'Add' : 'Update' }}</button>\r\n      <button kendoGridCancelCommand>Cancel</button>\r\n    </ng-template>\r\n  </kendo-grid-command-column>\r\n</kendo-grid>\r\n"

/***/ }),

/***/ "../../../../../src/app/lazy-components-modules/authors.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorsModule", function() { return AuthorsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authors_component_authorsComponent__ = __webpack_require__("../../../../../src/app/authors-component/authorsComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_grid_dist_es_grid_module__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es/grid.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'load-AuthorsTable', component: __WEBPACK_IMPORTED_MODULE_1__authors_component_authorsComponent__["a" /* AuthorsComponent */] }
];
var AuthorsModule = (function () {
    function AuthorsModule() {
    }
    AuthorsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forChild(routes), __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_grid_dist_es_grid_module__["a" /* GridModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__authors_component_authorsComponent__["a" /* AuthorsComponent */]]
        })
    ], AuthorsModule);
    return AuthorsModule;
}());



/***/ })

});
//# sourceMappingURL=authors.module.chunk.js.map