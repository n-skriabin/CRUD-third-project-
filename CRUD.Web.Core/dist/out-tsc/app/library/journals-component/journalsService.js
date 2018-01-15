"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var READ_ACTION = 'GetAll';
var CREATE_ACTION = 'Create';
var UPDATE_ACTION = 'Update';
var DELETE_ACTION = 'Delete';
var baseUrl = 'http://' + location.host + '/';
var controller = 'Journals/';
var JournalsService = /** @class */ (function (_super) {
    __extends(JournalsService, _super);
    function JournalsService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.data = [];
        return _this;
    }
    JournalsService.prototype.readArticles = function () {
        return this.http.get(baseUrl + 'api/Articles/' + READ_ACTION);
    };
    JournalsService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch(READ_ACTION)
            .do(function (data) {
            _this.data = data;
        })
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    JournalsService.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    JournalsService.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        this.fetch(DELETE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    JournalsService.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        var originalDataItem = this.data.find(function (item) { return item.Id === dataItem.Id; });
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    JournalsService.prototype.reset = function () {
        this.data = [];
    };
    JournalsService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        if (action == READ_ACTION) {
            var url = baseUrl + 'api/' + controller + READ_ACTION;
            return this.http
                .get(url)
                .map(function (res) { return res; });
        }
        if (action == CREATE_ACTION) {
            var url = baseUrl + '/api/' + controller + CREATE_ACTION;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
        if (action == UPDATE_ACTION) {
            var url = baseUrl + '/api/' + controller + UPDATE_ACTION;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
        if (action == DELETE_ACTION) {
            var url = baseUrl + '/api/' + controller + DELETE_ACTION;
            var id = data.Id;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
    };
    JournalsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], JournalsService);
    return JournalsService;
}(BehaviorSubject_1.BehaviorSubject));
exports.JournalsService = JournalsService;
//# sourceMappingURL=journalsService.js.map