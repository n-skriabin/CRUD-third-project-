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
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var kendo_data_query_1 = require("@progress/kendo-data-query");
var authorsService_1 = require("../authors-component/authorsService");
var AuthorsComponent = /** @class */ (function () {
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
        this.view = this.editService.map(function (data) { return kendo_data_query_1.process(data, _this.gridState); });
        this.titleService.setTitle('Authors Page');
        this.editService.read();
        console.log('data:');
        console.log(this.view);
    };
    AuthorsComponent.prototype.addHandler = function (_a) {
        var sender = _a.sender;
        this.closeEditor(sender);
        this.formGroup = new forms_1.FormGroup({
            'Id': new forms_1.FormControl(),
            'FirstName': new forms_1.FormControl('', forms_1.Validators.required),
            'LastName': new forms_1.FormControl('', forms_1.Validators.required),
            'Patronymic': new forms_1.FormControl(),
        });
        sender.addRow(this.formGroup);
    };
    AuthorsComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.formGroup = new forms_1.FormGroup({
            'Id': new forms_1.FormControl(dataItem.Id),
            'FirstName': new forms_1.FormControl(dataItem.FirstName, forms_1.Validators.required),
            'LastName': new forms_1.FormControl(dataItem.LastName, forms_1.Validators.required),
            'Patronymic': new forms_1.FormControl(dataItem.Patronymic),
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
        core_1.Component({
            selector: 'app-authors',
            templateUrl: './authorsView.html',
        }),
        __param(0, core_1.Inject(authorsService_1.AuthorsService)),
        __metadata("design:paramtypes", [Object, platform_browser_1.Title])
    ], AuthorsComponent);
    return AuthorsComponent;
}());
exports.AuthorsComponent = AuthorsComponent;
//# sourceMappingURL=authorsComponent.js.map