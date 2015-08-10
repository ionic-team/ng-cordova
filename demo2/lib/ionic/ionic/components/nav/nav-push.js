"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _angular2Angular2 = require("angular2/angular2");

var _navController = require("./nav-controller");

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2:
            return decorators.reduceRight(function (o, d) {
                return d && d(o) || o;
            }, target);
        case 3:
            return decorators.reduceRight(function (o, d) {
                return (d && d(target, key), void 0);
            }, void 0);
        case 4:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key, o) || o;
            }, desc);
    }
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NavPush = (function () {
    var _class = function NavPush(nav) {
        _classCallCheck(this, _class);

        this.nav = nav;
    };

    _createClass(_class, [{
        key: "onClick",
        value: function onClick(event) {
            this.nav.push(this.navPush, this.pushData);
        }
    }]);

    return _class;
})();
exports.NavPush = NavPush;
exports.NavPush = NavPush = __decorate([(0, _angular2Angular2.Directive)({
    selector: "[nav-push]",
    properties: ["navPush", "pushData"],
    host: {
        "(^click)": "onClick($event)",
        "role": "link"
    }
}), __metadata("design:paramtypes", [typeof _navController.NavController !== "undefined" && _navController.NavController || Object])], NavPush);
var NavPop = (function () {
    var _class2 = function NavPop(nav) {
        _classCallCheck(this, _class2);

        this.nav = nav;
    };

    _createClass(_class2, [{
        key: "onClick",
        value: function onClick(event) {
            this.nav.pop();
        }
    }]);

    return _class2;
})();
exports.NavPop = NavPop;
exports.NavPop = NavPop = __decorate([(0, _angular2Angular2.Directive)({
    selector: "[nav-pop]",
    host: {
        "(^click)": "onClick($event)",
        "role": "link"
    }
}), __metadata("design:paramtypes", [typeof _navController.NavController !== "undefined" && _navController.NavController || Object])], NavPop);