// import {myApp} from './myApp'
// import {ng2} from './ng2'
// import {ng1} from './ng1'
// import {adapter} from './upgrader';
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
// declare var angular;
// var ng1module = angular.module('hybridApp', []);
// ng1module.directive('myApp', myApp);
// ng1module.directive('ng2', ng2);
// ng1module.directive('ng1', ng1);
// adapter.bootstrap(document.body, ['hybridApp'], {strictDi: true});
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var upgrade_1 = require('@angular/upgrade');
var styles = ["\n    .border {\n      border: solid 2px DodgerBlue;\n    }\n    .title {\n      background-color: LightSkyBlue;\n      padding: .2em 1em;\n      font-size: 1.2em;\n    }\n    .content {\n      padding: 1em;\n    }\n  "];
var adapter = new upgrade_1.UpgradeAdapter(core_1.forwardRef(function () { return Ng2AppModule; }));
var ng1module = angular.module('myExample', []);
ng1module.controller('Index', function ($scope /** TODO #9100 */) { $scope.name = 'World'; });
ng1module.directive('ng1User', function () {
    return {
        scope: { handle: '@', reset: '&' },
        template: "\n      User: {{handle}}\n      <hr>\n      <button ng-click=\"reset()\">clear</button>"
    };
});
var Pane = (function () {
    function Pane() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Pane.prototype, "title", void 0);
    Pane = __decorate([
        core_1.Component({
            selector: 'pane',
            template: "<div class=\"border\">\n    <div class=\"title\">{{title}}</div>\n    <div class=\"content\"><ng-content></ng-content></div>\n    </div>",
            styles: styles
        }), 
        __metadata('design:paramtypes', [])
    ], Pane);
    return Pane;
}());
var UpgradeApp = (function () {
    function UpgradeApp() {
        this.reset = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], UpgradeApp.prototype, "user", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UpgradeApp.prototype, "reset", void 0);
    UpgradeApp = __decorate([
        core_1.Component({
            selector: 'upgrade-app',
            template: "<div class=\"border\">\n      <pane title=\"Title: {{user}}\">\n        <table cellpadding=\"3\">\n          <tr>\n            <td><ng-content></ng-content></td>\n            <td><ng1-user [handle]=\"user\" (reset)=\"reset.emit()\"></ng1-user></td>\n          </tr>\n        </table>\n      </pane>\n    </div>",
            styles: styles
        }), 
        __metadata('design:paramtypes', [])
    ], UpgradeApp);
    return UpgradeApp;
}());
var Ng2AppModule = (function () {
    function Ng2AppModule() {
    }
    Ng2AppModule = __decorate([
        core_1.NgModule({
            declarations: [Pane, UpgradeApp, adapter.upgradeNg1Component('ng1User')],
            imports: [platform_browser_1.BrowserModule]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2AppModule);
    return Ng2AppModule;
}());
ng1module.directive('upgradeApp', adapter.downgradeNg2Component(UpgradeApp));
function main() {
    adapter.bootstrap(document.body, ['myExample']);
}
exports.main = main;
//# sourceMappingURL=main.js.map