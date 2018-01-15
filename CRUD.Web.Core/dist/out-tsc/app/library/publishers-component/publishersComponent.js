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
var publishersService_1 = require("./publishersService");
var formGroup = function (dataItem) { return new forms_1.FormGroup({
    'Id': new forms_1.FormControl(dataItem.Id),
    'Name': new forms_1.FormControl(dataItem.Name, forms_1.Validators.required),
    'BookIds': new forms_1.FormControl(dataItem.BookIds, forms_1.Validators.required),
    'JournalIds': new forms_1.FormControl(dataItem.JournalIds, forms_1.Validators.required),
}); };
var PublishersComponent = /** @class */ (function () {
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
        this.view = this.editServicePublisher.map(function (data) { return kendo_data_query_1.process(data, _this.gridState); });
        this.editServicePublisher.read();
    };
    PublishersComponent.prototype.booksView = function (books) {
        if (books === void 0) { books = []; }
        this.bookNames = "null;";
        if (books !== null && books !== undefined && books.length !== 0) {
            this.bookNames = " ";
            for (var i = 0; i < books.length; i++) {
                this.bookNames += books[i].Name + "; ";
            }
        }
        return this.bookNames;
    };
    PublishersComponent.prototype.journalsView = function (journals) {
        if (journals === void 0) { journals = []; }
        this.journalNames = "null;";
        console.log("journals:");
        console.log(journals);
        if (journals !== null && journals !== undefined && journals.length !== 0) {
            this.journalNames = " ";
            for (var i = 0; i < journals.length; i++) {
                this.journalNames += journals[i].Name + "; ";
            }
        }
        return this.journalNames;
    };
    PublishersComponent.prototype.addHandler = function (_a) {
        var sender = _a.sender;
        this.closeEditor(sender);
        this.selectedBooksItems = undefined;
        this.selectedJournalsItems = undefined;
        this.formGroup = new forms_1.FormGroup({
            'Id': new forms_1.FormControl(),
            'Name': new forms_1.FormControl('', forms_1.Validators.required),
            'BookIds': new forms_1.FormControl(forms_1.Validators.required),
            'JournalIds': new forms_1.FormControl(forms_1.Validators.required),
        });
        sender.addRow(this.formGroup);
    };
    PublishersComponent.prototype.selectFromBooks = function (bookIds) {
        if (bookIds !== undefined && bookIds !== null) {
            var _loop_1 = function (i) {
                this_1.booksForDefaultValue[i] = this_1.books.find(function (item) { return item.Id === bookIds[i]; });
            };
            var this_1 = this;
            for (var i = 0; i < bookIds.length; i++) {
                _loop_1(i);
            }
        }
        return this.booksForDefaultValue;
    };
    PublishersComponent.prototype.selectFromJournals = function (journalIds) {
        if (journalIds !== undefined && journalIds !== null) {
            var _loop_2 = function (i) {
                this_2.journalsForDefaultValue[i] = this_2.journals.find(function (item) { return item.Id === journalIds[i]; });
            };
            var this_2 = this;
            for (var i = 0; i < journalIds.length; i++) {
                _loop_2(i);
            }
        }
        return this.journalsForDefaultValue;
    };
    PublishersComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.selectedBooksItems = this.selectFromBooks(dataItem.BookIds);
        this.selectedJournalsItems = this.selectFromJournals(dataItem.JournalIds);
        this.formGroup = new forms_1.FormGroup({
            'Id': new forms_1.FormControl(dataItem.Id),
            'Name': new forms_1.FormControl(dataItem.Name, forms_1.Validators.required),
            'BookIds': new forms_1.FormControl(dataItem.BookIds, forms_1.Validators.required),
            'JournalIds': new forms_1.FormControl(dataItem.JournalIds, forms_1.Validators.required),
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
        core_1.Component({
            selector: 'app-publishers',
            templateUrl: './publishersView.html',
        }),
        __param(0, core_1.Inject(publishersService_1.PublishersService)),
        __metadata("design:paramtypes", [Object, platform_browser_1.Title])
    ], PublishersComponent);
    return PublishersComponent;
}());
exports.PublishersComponent = PublishersComponent;
//# sourceMappingURL=publishersComponent.js.map