webpackJsonp(["tables.module"],{

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

/***/ "../../../../../src/app/articles-component/articlesView.html":
/***/ (function(module, exports) {

module.exports = "<h3>Articles</h3>\r\n<p></p>\r\n<kendo-grid [data]=\"view | async\"\r\n            [height]=\"533\"\r\n            [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n            [pageable]=\"true\" [sortable]=\"true\"\r\n            (dataStateChange)=\"onStateChange($event)\"\r\n            (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\r\n            (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\r\n            (add)=\"addHandler($event)\">\r\n  <ng-template kendoGridToolbarTemplate>\r\n    <button kendoGridAddCommand>Add new</button>\r\n  </ng-template>\r\n  <kendo-grid-column field=\"Name\" title=\"Name\"></kendo-grid-column>\r\n  <kendo-grid-column field=\"Year\" title=\"Year\"></kendo-grid-column>\r\n  <kendo-grid-column field=\"AuthorId\" title=\"Author\" width=\"150\">\r\n    <ng-template kendoGridCellTemplate let-dataItem>\r\n     {{dataItem.Author.Abbreviated}}\r\n    </ng-template>\r\n    <ng-template kendoGridEditTemplate\r\n      let-dataItem=\"dataItem\"\r\n      let-formGroup=\"formGroup\">    \r\n      <kendo-dropdownlist\r\n                  [data]=\"authors\"\r\n                  textField = \"Abbreviated\"\r\n                  valueField=\"Id\"     \r\n                  [valuePrimitive]=\"true\"          \r\n                  [formControl]=\"formGroup.get('AuthorId')\">\r\n                </kendo-dropdownlist>\r\n    </ng-template>\r\n  </kendo-grid-column>\r\n  <kendo-grid-command-column title=\"Actions\" width=\"220\">\r\n    <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n      <button kendoGridEditCommand class=\"k-primary\">Edit</button>\r\n      <button kendoGridRemoveCommand>Remove</button>\r\n      <button kendoGridSaveCommand [disabled]=\"formGroup?.invalid\">{{ isNew ? 'Add' : 'Update' }}</button>\r\n      <button kendoGridCancelCommand>Cancel</button>\r\n    </ng-template>\r\n  </kendo-grid-command-column>\r\n</kendo-grid>\r\n"

/***/ }),

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
    BooksComponent.prototype.authorsView = function (authors) {
        if (authors === void 0) { authors = []; }
        this.authorAbbreviateds = " ";
        for (var i = 0; i < authors.length - 1; i++) {
            this.authorAbbreviateds += authors[i].Abbreviated + ", ";
        }
        this.authorAbbreviateds += authors[authors.length].Abbreviated + ".";
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
        var _loop_1 = function (i) {
            this_1.authorsForDefaultValue[i] = this_1.authors.find(function (item) { return item.Id === authorIds[i]; });
        };
        var this_1 = this;
        for (var i = 0; i < authorIds.length; i++) {
            _loop_1(i);
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

module.exports = "<h3>Books</h3>\n<p></p>\n<kendo-grid [data]=\"view | async\"\n            [height]=\"533\"\n            [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n            [pageable]=\"true\" [sortable]=\"true\"\n            (dataStateChange)=\"onStateChange($event)\"\n            (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\n            (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\n            (add)=\"addHandler($event)\">\n  <ng-template kendoGridToolbarTemplate>\n    <button kendoGridAddCommand>Add new</button>\n  </ng-template>\n  <kendo-grid-column field=\"Name\" title=\"Name\"></kendo-grid-column>\n  <kendo-grid-column field=\"Year\" title=\"Year\"></kendo-grid-column>\n  <kendo-grid-column field=\"AuthorIds\" title=\"Authors\" width=\"400\">\n    <ng-template kendoGridCellTemplate let-dataItem>\n      <!-- {{authorsView(dataItem.AuthorIds)}} -->  \n      {{authorsView(dataItem.Authors)}}   \n    </ng-template>\n    <ng-template kendoGridEditTemplate\n      let-dataItem=\"dataItem\"\n      let-formGroup=\"formGroup\">    \n      <kendo-multiselect \n        [data]=\"authors\"\n        textField=\"Abbreviated\"\n        valueField=\"Id\"\n        [(ngModel)]=\"selectedItems\"\n        [placeholder]=\"'Select authors...'\" >\n      </kendo-multiselect >\n    </ng-template>\n  </kendo-grid-column>\n  <kendo-grid-command-column title=\"Actions\" width=\"220\">\n    <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n      <button kendoGridEditCommand class=\"k-primary\">Edit</button>\n      <button kendoGridRemoveCommand>Remove</button>\n      <button kendoGridSaveCommand [disabled]=\"formGroup?.invalid\">{{ isNew ? 'Add' : 'Update' }}</button>\n      <button kendoGridCancelCommand>Cancel</button>\n    </ng-template>\n  </kendo-grid-command-column>\n</kendo-grid>\n"

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

/***/ "../../../../../src/app/journals-component/journalsView.html":
/***/ (function(module, exports) {

module.exports = "<h3>Journals</h3>\n<p></p>\n<kendo-grid [data]=\"view | async\"\n            [height]=\"533\"\n            [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n            [pageable]=\"true\" [sortable]=\"true\"\n            (dataStateChange)=\"onStateChange($event)\"\n            (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\n            (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\n            (add)=\"addHandler($event)\">\n  <ng-template kendoGridToolbarTemplate>\n    <button kendoGridAddCommand>Add new</button>\n  </ng-template>\n  <kendo-grid-column field=\"Name\" title=\"Name\"></kendo-grid-column>\n  <kendo-grid-column field=\"Date\" title=\"Date\"></kendo-grid-column>\n  <kendo-grid-column field=\"ArticleIds\" title=\"Articles\" width=\"400\">\n    <ng-template kendoGridCellTemplate let-dataItem>\n      {{articlesView(dataItem.ArticleIds)}}     \n    </ng-template>\n    <ng-template kendoGridEditTemplate\n      let-dataItem=\"dataItem\"\n      let-formGroup=\"formGroup\">    \n      <kendo-multiselect \n        [data]=\"articles\"\n        textField=\"Name\"\n        valueField=\"Id\"\n        [(ngModel)]=\"selectedItems\"\n        [placeholder]=\"'Select articles...'\" >\n      </kendo-multiselect >\n    </ng-template>\n  </kendo-grid-column>\n  <kendo-grid-command-column title=\"Actions\" width=\"220\">\n    <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n      <button kendoGridEditCommand class=\"k-primary\">Edit</button>\n      <button kendoGridRemoveCommand>Remove</button>\n      <button kendoGridSaveCommand [disabled]=\"formGroup?.invalid\">{{ isNew ? 'Add' : 'Update' }}</button>\n      <button kendoGridCancelCommand>Cancel</button>\n    </ng-template>\n  </kendo-grid-command-column>\n</kendo-grid>\n\n"

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

module.exports = "<h3>Publishers</h3>\n<p></p>\n<kendo-grid [data]=\"view | async\"\n            [height]=\"533\"\n            [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n            [pageable]=\"true\" [sortable]=\"true\"\n            (dataStateChange)=\"onStateChange($event)\"\n            (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\n            (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\n            (add)=\"addHandler($event)\">\n  <ng-template kendoGridToolbarTemplate>\n    <button kendoGridAddCommand>Add new</button>\n  </ng-template>\n  <kendo-grid-column field=\"Name\" title=\"Name\"></kendo-grid-column>\n  <kendo-grid-column field=\"BookIds\" title=\"Books\" width=\"400\">\n    <ng-template kendoGridCellTemplate let-dataItem>\n      {{booksView(dataItem.BookIds)}}     \n    </ng-template>\n    <ng-template kendoGridEditTemplate\n      let-dataItem=\"dataItem\"\n      let-formGroup=\"formGroup\">    \n      <kendo-multiselect \n        [data]=\"books\"\n        textField=\"Name\"\n        valueField=\"Id\"\n        [(ngModel)]=\"selectedBooksItems\"\n        [placeholder]=\"'Select books...'\" >\n      </kendo-multiselect >\n    </ng-template>\n  </kendo-grid-column>\n\n  <kendo-grid-column field=\"JournalIds\" title=\"Journals\" width=\"400\">\n    <ng-template kendoGridCellTemplate let-dataItem>\n      {{journalsView(dataItem.JournalIds)}}     \n    </ng-template>\n    <ng-template kendoGridEditTemplate\n      let-dataItem=\"dataItem\"\n      let-formGroup=\"formGroup\">    \n      <kendo-multiselect \n        [data]=\"journals\"\n        textField=\"Name\"\n        valueField=\"Id\"\n        [(ngModel)]=\"selectedJournalsItems\"\n        [placeholder]=\"'Select journals...'\" >\n      </kendo-multiselect >\n    </ng-template>\n  </kendo-grid-column>\n  <kendo-grid-command-column title=\"Actions\" width=\"220\">\n    <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n      <button kendoGridEditCommand class=\"k-primary\">Edit</button>\n      <button kendoGridRemoveCommand>Remove</button>\n      <button kendoGridSaveCommand [disabled]=\"formGroup?.invalid\">{{ isNew ? 'Add' : 'Update' }}</button>\n      <button kendoGridCancelCommand>Cancel</button>\n    </ng-template>\n  </kendo-grid-command-column>\n</kendo-grid>\n"

/***/ }),

/***/ "../../../../../src/app/tables.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid_dist_es_grid_module__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es/grid.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__articles_component_articlesComponent__ = __webpack_require__("../../../../../src/app/articles-component/articlesComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_dropdowns__ = __webpack_require__("../../../../@progress/kendo-angular-dropdowns/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authors_component_authorsComponent__ = __webpack_require__("../../../../../src/app/authors-component/authorsComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__books_component_booksComponent__ = __webpack_require__("../../../../../src/app/books-component/booksComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__journals_component_journalsComponent__ = __webpack_require__("../../../../../src/app/journals-component/journalsComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__publishers_component_publishersComponent__ = __webpack_require__("../../../../../src/app/publishers-component/publishersComponent.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: 'load-AuthorsTable', component: __WEBPACK_IMPORTED_MODULE_7__authors_component_authorsComponent__["a" /* AuthorsComponent */] },
    { path: 'load-ArticlesTable', component: __WEBPACK_IMPORTED_MODULE_4__articles_component_articlesComponent__["a" /* ArticlesComponent */] },
    { path: 'load-BooksTable', component: __WEBPACK_IMPORTED_MODULE_8__books_component_booksComponent__["a" /* BooksComponent */] },
    { path: 'load-JournalsTable', component: __WEBPACK_IMPORTED_MODULE_9__journals_component_journalsComponent__["a" /* JournalsComponent */] },
    { path: 'load-PublishersTable', component: __WEBPACK_IMPORTED_MODULE_10__publishers_component_publishersComponent__["a" /* PublishersComponent */] }
];
var TablesModule = (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid_dist_es_grid_module__["a" /* GridModule */],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_dropdowns__["c" /* DropDownsModule */],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_dropdowns__["b" /* DropDownListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__authors_component_authorsComponent__["a" /* AuthorsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__articles_component_articlesComponent__["a" /* ArticlesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__books_component_booksComponent__["a" /* BooksComponent */],
                __WEBPACK_IMPORTED_MODULE_9__journals_component_journalsComponent__["a" /* JournalsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__publishers_component_publishersComponent__["a" /* PublishersComponent */]
            ]
        })
    ], TablesModule);
    return TablesModule;
}());



/***/ })

});
//# sourceMappingURL=tables.module.chunk.js.map