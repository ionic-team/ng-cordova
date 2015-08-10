"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _angular2Angular2 = require("angular2/angular2");

var _platformPlatform = require("../../platform/platform");

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
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};

var DisplayWhen = (function () {
    function DisplayWhen(conditions, ngZone) {
        var _this = this;

        _classCallCheck(this, DisplayWhen);

        this.isMatch = false;
        if (!conditions) return;
        this.conditions = conditions.split(",");
        // check if its one of the matching platforms first
        // a platform does not change during the life of an app
        for (var i = 0; i < this.conditions.length; i++) {
            if (this.conditions[i] && _platformPlatform.Platform.is(this.conditions[i])) {
                this.isMatch = true;
                return;
            }
        }
        if (this.orientation()) {
            // add window resize listener
            _platformPlatform.Platform.onResize(function () {
                ngZone.run(function () {
                    _this.orientation();
                });
            });
            return;
        }
    }

    _createClass(DisplayWhen, [{
        key: "orientation",
        value: function orientation() {
            for (var i = 0; i < this.conditions.length; i++) {
                var condition = this.conditions[i];
                if (condition == "portrait") {
                    this.isMatch = _platformPlatform.Platform.isPortrait();
                    return true;
                }
                if (condition == "landscape") {
                    this.isMatch = _platformPlatform.Platform.isLandscape();
                    return true;
                }
            }
        }
    }]);

    return DisplayWhen;
})();

var ShowWhen = (function (_DisplayWhen) {
    var _class = function ShowWhen(showWhen, ngZone) {
        _classCallCheck(this, _class);

        _get(Object.getPrototypeOf(_class.prototype), "constructor", this).call(this, showWhen, ngZone);
    };

    _inherits(_class, _DisplayWhen);

    _createClass(_class, [{
        key: "hidden",
        get: function get() {
            return !this.isMatch;
        }
    }]);

    return _class;
})(DisplayWhen);
exports.ShowWhen = ShowWhen;
exports.ShowWhen = ShowWhen = __decorate([(0, _angular2Angular2.Directive)({
    selector: "[show-when]",
    host: {
        "[hidden]": "hidden"
    }
}), __param(0, (0, _angular2Angular2.Attribute)("show-when")), __metadata("design:paramtypes", [String, typeof _angular2Angular2.NgZone !== "undefined" && _angular2Angular2.NgZone || Object])], ShowWhen);
var HideWhen = (function (_DisplayWhen2) {
    var _class2 = function HideWhen(hideWhen, ngZone) {
        _classCallCheck(this, _class2);

        _get(Object.getPrototypeOf(_class2.prototype), "constructor", this).call(this, hideWhen, ngZone);
    };

    _inherits(_class2, _DisplayWhen2);

    _createClass(_class2, [{
        key: "hidden",
        get: function get() {
            return this.isMatch;
        }
    }]);

    return _class2;
})(DisplayWhen);
exports.HideWhen = HideWhen;
exports.HideWhen = HideWhen = __decorate([(0, _angular2Angular2.Directive)({
    selector: "[hide-when]",
    host: {
        "[hidden]": "hidden"
    }
}), __param(0, (0, _angular2Angular2.Attribute)("hide-when")), __metadata("design:paramtypes", [String, typeof _angular2Angular2.NgZone !== "undefined" && _angular2Angular2.NgZone || Object])], HideWhen);