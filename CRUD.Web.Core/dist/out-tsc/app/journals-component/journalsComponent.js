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
var journalsService_1 = require("./journalsService");
var formGroup = function (dataItem) { return new forms_1.FormGroup({
    'Id': new forms_1.FormControl(dataItem.Id),
    'Name': new forms_1.FormControl(dataItem.Name, forms_1.Validators.required),
    'Date': new forms_1.FormControl(dataItem.Date, forms_1.Validators.required),
    'ArticleIds': new forms_1.FormControl(dataItem.ArticleIds, forms_1.Validators.required),
}); };
var JournalsComponent = /** @class */ (function () {
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
        this.view = this.editServiceJournal.map(function (data) { return kendo_data_query_1.process(data, _this.gridState); });
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
        this.formGroup = new forms_1.FormGroup({
            'Id': new forms_1.FormControl(),
            'Name': new forms_1.FormControl('', forms_1.Validators.required),
            'Date': new forms_1.FormControl('', forms_1.Validators.required),
            'ArticleIds': new forms_1.FormControl(forms_1.Validators.required),
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
        this.formGroup = new forms_1.FormGroup({
            'Id': new forms_1.FormControl(dataItem.Id),
            'Name': new forms_1.FormControl(dataItem.Name, forms_1.Validators.required),
            'Date': new forms_1.FormControl(dataItem.Date, forms_1.Validators.required),
            'ArticleIds': new forms_1.FormControl(dataItem.ArticleIds, forms_1.Validators.required),
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
        core_1.Component({
            selector: 'app-journals',
            templateUrl: './journalsView.html',
        }),
        __param(0, core_1.Inject(journalsService_1.JournalsService)),
        __metadata("design:paramtypes", [Object, platform_browser_1.Title])
    ], JournalsComponent);
    return JournalsComponent;
}());
exports.JournalsComponent = JournalsComponent;
//# sourceMappingURL=journalsComponent.js.map