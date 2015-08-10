"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _angular2Angular2 = require("angular2/angular2");

var _ion = require("../ion");

var _configConfig = require("../../config/config");

var _animationsScrollTo = require("../../animations/scroll-to");

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
var Content = (function (_Ion) {
    var _class = function Content(elementRef, config) {
        _classCallCheck(this, _class);

        _get(Object.getPrototypeOf(_class.prototype), "constructor", this).call(this, elementRef, config);
        this.scrollPadding = config.setting("keyboardScrollAssist");
    };

    _inherits(_class, _Ion);

    _createClass(_class, [{
        key: "onIonInit",
        value: function onIonInit() {
            this.scrollElement = this.getNativeElement().children[0];
        }
    }, {
        key: "addScrollEventListener",
        value: function addScrollEventListener(handler) {
            var _this = this;

            if (!this.scrollElement) {
                return;
            }
            this.scrollElement.addEventListener("scroll", handler);
            return function () {
                _this.scrollElement.removeEventListener("scroll", handler);
            };
        }
    }, {
        key: "addTouchMoveListener",
        value: function addTouchMoveListener(handler) {
            var _this2 = this;

            if (!this.scrollElement) {
                return;
            }
            this.scrollElement.addEventListener("touchmove", handler);
            return function () {
                _this2.scrollElement.removeEventListener("touchmove", handler);
            };
        }
    }, {
        key: "scrollTo",
        value: function scrollTo(x, y, duration, tolerance) {
            if (this._scrollTo) {
                this._scrollTo.dispose();
            }
            this._scrollTo = new _animationsScrollTo.ScrollTo(this.scrollElement);
            return this._scrollTo.start(x, y, duration, tolerance);
        }
    }, {
        key: "scrollPadding",
        get: function get() {
            return this._sp;
        },
        set: function set(val) {
            this._sp = val;
        }
    }]);

    return _class;
})(_ion.Ion);
exports.Content = Content;
exports.Content = Content = __decorate([(0, _angular2Angular2.Component)({
    selector: "ion-content",
    properties: ["parallax"],
    host: _defineProperty({}, "[class.scroll-padding]", "scrollPadding")
}), (0, _angular2Angular2.View)({
    template: "<div class=\"scroll-content\"><ng-content></ng-content></div>"
}), __metadata("design:paramtypes", [typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object, typeof _configConfig.IonicConfig !== "undefined" && _configConfig.IonicConfig || Object])], Content);