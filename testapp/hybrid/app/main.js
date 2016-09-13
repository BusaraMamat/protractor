"use strict";
var myApp_1 = require('./myApp');
var upgrader_1 = require('./upgrader');
var ng1module = angular.module('hybridApp', []);
ng1module.directive('myApp', myApp_1.myApp);
// ng1module.directive('ng2', ng2);
// ng1module.directive('ng1', ng1);
upgrader_1.adapter.bootstrap(document.body, ['hybridApp']);
//# sourceMappingURL=main.js.map