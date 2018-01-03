webpackJsonp(["journals.module"],{

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

/***/ "../../../../../src/app/journals-component/journalsView.html":
/***/ (function(module, exports) {

module.exports = "<h3>Journals</h3>\n<p></p>\n<kendo-grid [data]=\"view | async\"\n            [height]=\"533\"\n            [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n            [pageable]=\"true\" [sortable]=\"true\"\n            (dataStateChange)=\"onStateChange($event)\"\n            (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\n            (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\n            (add)=\"addHandler($event)\">\n  <ng-template kendoGridToolbarTemplate>\n    <button kendoGridAddCommand>Add new</button>\n  </ng-template>\n  <kendo-grid-column field=\"Name\" title=\"Name\"></kendo-grid-column>\n  <kendo-grid-column field=\"Date\" title=\"Date\"></kendo-grid-column>\n  <kendo-grid-column field=\"ArticleIds\" title=\"Articles\" width=\"400\">\n    <ng-template kendoGridCellTemplate let-dataItem>\n      {{articlesView(dataItem.ArticleIds)}}     \n    </ng-template>\n    <ng-template kendoGridEditTemplate\n      let-dataItem=\"dataItem\"\n      let-formGroup=\"formGroup\">    \n      <kendo-multiselect \n        [data]=\"articles\"\n        textField=\"Name\"\n        valueField=\"Id\"\n        [(ngModel)]=\"selectedItems\"\n        [placeholder]=\"'Select authors...'\" >\n      </kendo-multiselect >\n    </ng-template>\n  </kendo-grid-column>\n  <kendo-grid-command-column title=\"Actions\" width=\"220\">\n    <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n      <button kendoGridEditCommand class=\"k-primary\">Edit</button>\n      <button kendoGridRemoveCommand>Remove</button>\n      <button kendoGridSaveCommand [disabled]=\"formGroup?.invalid\">{{ isNew ? 'Add' : 'Update' }}</button>\n      <button kendoGridCancelCommand>Cancel</button>\n    </ng-template>\n  </kendo-grid-command-column>\n</kendo-grid>\n\n"

/***/ }),

/***/ "../../../../../src/app/lazy/journals.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalsModule", function() { return JournalsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid_dist_es_grid_module__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es/grid.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__journals_component_journalsComponent__ = __webpack_require__("../../../../../src/app/journals-component/journalsComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dropdowns__ = __webpack_require__("../../../../@progress/kendo-angular-dropdowns/dist/es/main.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'load-JournalsTable', component: __WEBPACK_IMPORTED_MODULE_4__journals_component_journalsComponent__["a" /* JournalsComponent */] }
];
var JournalsModule = (function () {
    function JournalsModule() {
    }
    JournalsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes), __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid_dist_es_grid_module__["a" /* GridModule */], __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dropdowns__["c" /* DropDownsModule */], __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dropdowns__["b" /* DropDownListModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__journals_component_journalsComponent__["a" /* JournalsComponent */]]
        })
    ], JournalsModule);
    return JournalsModule;
}());



/***/ })

});
//# sourceMappingURL=journals.module.chunk.js.map