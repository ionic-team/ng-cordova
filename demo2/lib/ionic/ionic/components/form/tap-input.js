"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _angular2Angular2 = require("angular2/angular2");

var _input = require("./input");

var _appApp = require("../app/app");

var _configConfig = require("../../config/config");

var _contentContent = require("../content/content");

var _checkboxCheckbox = require("../checkbox/checkbox");

var _radioRadio = require("../radio/radio");

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
var TapInput = (function (_IonInput) {
    var _class = function TapInput(checkboxContainer, radioContainer, scrollView, type, elementRef, app, config) {
        _classCallCheck(this, _class);

        _get(Object.getPrototypeOf(_class.prototype), "constructor", this).call(this, elementRef, app, config, scrollView);
        var container = checkboxContainer || radioContainer;
        if (container) {
            container.registerInput(this);
            this.container = container;
        }
        this.type = type;
        this.elementRef = elementRef;
        this.tabIndex = this.tabIndex || "";
    };

    _inherits(_class, _IonInput);

    return _class;
})(_input.IonInput);
exports.TapInput = TapInput;
exports.TapInput = TapInput = __decorate([(0, _angular2Angular2.Directive)({
    selector: "input[type=checkbox],input[type=radio]",
    properties: ["checked", "name", "value"],
    host: {
        "[checked]": "checked",
        "[value]": "value",
        "[attr.name]": "name",
        "class": "tap-input input"
    }
}), __param(0, (0, _angular2Angular2.Optional)()), __param(0, (0, _angular2Angular2.Ancestor)()), __param(1, (0, _angular2Angular2.Optional)()), __param(1, (0, _angular2Angular2.Ancestor)()), __param(2, (0, _angular2Angular2.Optional)()), __param(2, (0, _angular2Angular2.Ancestor)()), __param(3, (0, _angular2Angular2.Attribute)("type")), __metadata("design:paramtypes", [typeof _checkboxCheckbox.Checkbox !== "undefined" && _checkboxCheckbox.Checkbox || Object, typeof _radioRadio.RadioButton !== "undefined" && _radioRadio.RadioButton || Object, typeof _contentContent.Content !== "undefined" && _contentContent.Content || Object, String, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object, typeof _appApp.IonicApp !== "undefined" && _appApp.IonicApp || Object, typeof _configConfig.IonicConfig !== "undefined" && _configConfig.IonicConfig || Object])], TapInput);