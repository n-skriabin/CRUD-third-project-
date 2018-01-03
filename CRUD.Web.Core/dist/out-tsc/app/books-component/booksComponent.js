"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var kendo_data_query_1 = require("@progress/kendo-data-query");
var booksService_1 = require("./booksService");
var formGroup = function (dataItem) { return new forms_1.FormGroup({
    'Id': new forms_1.FormControl(dataItem.Id),
    'Name': new forms_1.FormControl(dataItem.Name, forms_1.Validators.required),
    'Year': new forms_1.FormControl(dataItem.Year, forms_1.Validators.required),
    'AuthorIds': new forms_1.FormControl(dataItem.AuthorIds, forms_1.Validators.required),
}); };
var BooksComponent = /** @class */ (function () {
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
        this.view = this.editServiceBook.map(function (data) { return kendo_data_query_1.process(data, _this.gridState); });
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
        this.formGroup = new forms_1.FormGroup({
            'Id': new forms_1.FormControl(),
            'Name': new forms_1.FormControl('', forms_1.Validators.required),
            'Year': new forms_1.FormControl('', forms_1.Validators.required),
            'AuthorIds': new forms_1.FormControl(forms_1.Validators.required),
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
        this.formGroup = new forms_1.FormGroup({
            'Id': new forms_1.FormControl(dataItem.Id),
            'Name': new forms_1.FormControl(dataItem.Name, forms_1.Validators.required),
            'Year': new forms_1.FormControl(dataItem.Year, forms_1.Validators.required),
            'AuthorIds': new forms_1.FormControl(dataItem.AuthorIds, forms_1.Validators.required),
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
        core_1.Component({
            selector: 'app-books',
            templateUrl: './booksView.html',
        }),
        __param(0, core_1.Inject(booksService_1.BooksService)),
        __metadata("design:paramtypes", [Object, platform_browser_1.Title])
    ], BooksComponent);
    return BooksComponent;
}());
exports.BooksComponent = BooksComponent;
//# sourceMappingURL=booksComponent.js.map