webpackJsonp(["books.module"],{

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

/***/ "../../../../../src/app/books-component/booksView.html":
/***/ (function(module, exports) {

module.exports = "<h3>Books</h3>\n<p></p>\n<kendo-grid [data]=\"view | async\"\n            [height]=\"533\"\n            [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n            [pageable]=\"true\" [sortable]=\"true\"\n            (dataStateChange)=\"onStateChange($event)\"\n            (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\n            (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\n            (add)=\"addHandler($event)\">\n  <ng-template kendoGridToolbarTemplate>\n    <button kendoGridAddCommand>Add new</button>\n  </ng-template>\n  <kendo-grid-column field=\"Name\" title=\"Name\"></kendo-grid-column>\n  <kendo-grid-column field=\"Year\" title=\"Year\"></kendo-grid-column>\n  <kendo-grid-column field=\"AuthorIds\" title=\"Authors\" width=\"400\">\n    <ng-template kendoGridCellTemplate let-dataItem>\n      {{authorsView(dataItem.AuthorIds)}}     \n    </ng-template>\n    <ng-template kendoGridEditTemplate\n      let-dataItem=\"dataItem\"\n      let-formGroup=\"formGroup\">    \n      <kendo-multiselect \n        [data]=\"authors\"\n        textField=\"Abbreviated\"\n        valueField=\"Id\"\n        [(ngModel)]=\"selectedItems\"\n        [placeholder]=\"'Select authors...'\" >\n      </kendo-multiselect >\n    </ng-template>\n  </kendo-grid-column>\n  <kendo-grid-command-column title=\"Actions\" width=\"220\">\n    <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n      <button kendoGridEditCommand class=\"k-primary\">Edit</button>\n      <button kendoGridRemoveCommand>Remove</button>\n      <button kendoGridSaveCommand [disabled]=\"formGroup?.invalid\">{{ isNew ? 'Add' : 'Update' }}</button>\n      <button kendoGridCancelCommand>Cancel</button>\n    </ng-template>\n  </kendo-grid-command-column>\n</kendo-grid>\n"

/***/ }),

/***/ "../../../../../src/app/lazy/books.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksModule", function() { return BooksModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid_dist_es_grid_module__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es/grid.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__books_component_booksComponent__ = __webpack_require__("../../../../../src/app/books-component/booksComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dropdowns__ = __webpack_require__("../../../../@progress/kendo-angular-dropdowns/dist/es/main.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'load-BooksTable', component: __WEBPACK_IMPORTED_MODULE_4__books_component_booksComponent__["a" /* BooksComponent */] }
];
var BooksModule = (function () {
    function BooksModule() {
    }
    BooksModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes), __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid_dist_es_grid_module__["a" /* GridModule */], __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dropdowns__["c" /* DropDownsModule */], __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dropdowns__["b" /* DropDownListModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__books_component_booksComponent__["a" /* BooksComponent */]]
        })
    ], BooksModule);
    return BooksModule;
}());



/***/ })

});
//# sourceMappingURL=books.module.chunk.js.map