webpackJsonp(["publishers.module"],{

/***/ "../../../../../src/app/lazy/publishers.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishersModule", function() { return PublishersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid_dist_es_grid_module__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es/grid.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__publishers_component_publishersComponent__ = __webpack_require__("../../../../../src/app/publishers-component/publishersComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dropdowns__ = __webpack_require__("../../../../@progress/kendo-angular-dropdowns/dist/es/main.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'load-PublishersTable', component: __WEBPACK_IMPORTED_MODULE_4__publishers_component_publishersComponent__["a" /* PublishersComponent */] }
];
var PublishersModule = (function () {
    function PublishersModule() {
    }
    PublishersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes), __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid_dist_es_grid_module__["a" /* GridModule */], __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dropdowns__["c" /* DropDownsModule */], __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dropdowns__["b" /* DropDownListModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__publishers_component_publishersComponent__["a" /* PublishersComponent */]]
        })
    ], PublishersModule);
    return PublishersModule;
}());



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

/***/ "../../../../../src/app/publishers-component/publishersView.html":
/***/ (function(module, exports) {

module.exports = "<h3>Publishers</h3>\n<p></p>\n<kendo-grid [data]=\"view | async\"\n            [height]=\"533\"\n            [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n            [pageable]=\"true\" [sortable]=\"true\"\n            (dataStateChange)=\"onStateChange($event)\"\n            (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\n            (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\n            (add)=\"addHandler($event)\">\n  <ng-template kendoGridToolbarTemplate>\n    <button kendoGridAddCommand>Add new</button>\n  </ng-template>\n  <kendo-grid-column field=\"Name\" title=\"Name\"></kendo-grid-column>\n\n  <kendo-grid-column field=\"BookIds\" title=\"Books\" width=\"200\">\n    <ng-template kendoGridCellTemplate let-dataItem>\n      {{booksView(dataItem.BookIds)}}     \n    </ng-template>\n    <ng-template kendoGridEditTemplate\n      let-dataItem=\"dataItem\"\n      let-formGroup=\"formGroup\">    \n      <kendo-multiselect \n        [data]=\"books\"\n        textField=\"Name\"\n        valueField=\"Id\"\n        [(ngModel)]=\"selectedBooksItems\"\n        [placeholder]=\"'Select books...'\" >\n      </kendo-multiselect >\n    </ng-template>\n  </kendo-grid-column>\n\n  <kendo-grid-column field=\"JournalIds\" title=\"Journals\" width=\"200\">\n    <ng-template kendoGridCellTemplate let-dataItem>\n      {{journalsView(dataItem.JournalIds)}}     \n    </ng-template>\n    <ng-template kendoGridEditTemplate\n      let-dataItem=\"dataItem\"\n      let-formGroup=\"formGroup\">    \n      <kendo-multiselect \n        [data]=\"journals\"\n        textField=\"Name\"\n        valueField=\"Id\"\n        [(ngModel)]=\"selectedJournalsItems\"\n        [placeholder]=\"'Select journals...'\" >\n      </kendo-multiselect >\n    </ng-template>\n  </kendo-grid-column>\n  <kendo-grid-command-column title=\"Actions\" width=\"220\">\n    <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n      <button kendoGridEditCommand class=\"k-primary\">Edit</button>\n      <button kendoGridRemoveCommand>Remove</button>\n      <button kendoGridSaveCommand [disabled]=\"formGroup?.invalid\">{{ isNew ? 'Add' : 'Update' }}</button>\n      <button kendoGridCancelCommand>Cancel</button>\n    </ng-template>\n  </kendo-grid-command-column>\n</kendo-grid>\n"

/***/ })

});
//# sourceMappingURL=publishers.module.chunk.js.map