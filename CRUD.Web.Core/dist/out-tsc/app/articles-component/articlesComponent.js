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
var articlesService_1 = require("./articlesService");
var authorsService_1 = require("../authors-component/authorsService");
var formGroup = function (dataItem) { return new forms_1.FormGroup({
    'Id': new forms_1.FormControl(dataItem.Id),
    'Name': new forms_1.FormControl(dataItem.Name, forms_1.Validators.required),
    'Year': new forms_1.FormControl(dataItem.Year, forms_1.Validators.required),
    'AuthorId': new forms_1.FormControl(dataItem.AuthorId, forms_1.Validators.required),
}); };
var ArticlesComponent = /** @class */ (function () {
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
        this.view = this.editServiceArticle.map(function (data) { return kendo_data_query_1.process(data, _this.gridState); });
        this.editServiceArticle.readAuthors().subscribe(function (data) { _this.authors = data; });
        this.editServiceArticle.read();
    };
    ArticlesComponent.prototype.addHandler = function (_a) {
        var sender = _a.sender;
        this.closeEditor(sender);
        this.formGroup = new forms_1.FormGroup({
            'Id': new forms_1.FormControl(),
            'Name': new forms_1.FormControl('', forms_1.Validators.required),
            'Year': new forms_1.FormControl('', forms_1.Validators.required),
            'AuthorId': new forms_1.FormControl(forms_1.Validators.required),
        });
        sender.addRow(this.formGroup);
    };
    ArticlesComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.formGroup = new forms_1.FormGroup({
            'Id': new forms_1.FormControl(dataItem.Id),
            'Name': new forms_1.FormControl(dataItem.Name, forms_1.Validators.required),
            'Year': new forms_1.FormControl(dataItem.Year, forms_1.Validators.required),
            'AuthorId': new forms_1.FormControl(dataItem.AuthorId),
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
        core_1.Component({
            selector: 'app-articles',
            templateUrl: './articlesView.html'
        }),
        __param(0, core_1.Inject(articlesService_1.ArticlesService)), __param(1, core_1.Inject(authorsService_1.AuthorsService)),
        __metadata("design:paramtypes", [Object, Object, platform_browser_1.Title])
    ], ArticlesComponent);
    return ArticlesComponent;
}());
exports.ArticlesComponent = ArticlesComponent;
//# sourceMappingURL=articlesComponent.js.map