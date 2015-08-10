"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _angular2Angular2 = require("angular2/angular2");

var _formInput = require("../form/input");

var _configConfig = require("../../config/config");

var _configAnnotations = require("../../config/annotations");

var _buttonButton = require("../button/button");

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
var Checkbox = (function (_IonInputItem) {
    var _class = function Checkbox(cd, elementRef, config, tapClick) {
        _classCallCheck(this, _class);

        _get(Object.getPrototypeOf(_class.prototype), "constructor", this).call(this, elementRef, config);
        this.tapClick = tapClick;
        this.onChange = function (_) {};
        this.onTouched = function (_) {};
        this.cd = cd;
        if (cd) cd.valueAccessor = this;
    };

    _inherits(_class, _IonInputItem);

    _createClass(_class, [{
        key: "onInit",
        value: function onInit() {
            _get(Object.getPrototypeOf(_class.prototype), "onInit", this).call(this);
            this.labelId = "label-" + this.id;
        }
    }, {
        key: "onAllChangesDone",
        value: function onAllChangesDone() {
            this.input.checked = this.checked;
            this.input.disabled = this.disabled;
            this.input.value = this.value;
        }
    }, {
        key: "toggle",
        value: function toggle() {
            this.input.checked = this.checked = !this.input.checked;
            this.onChange(this.checked);
        }
    }, {
        key: "click",
        value: function click(ev) {
            if (this.tapClick.allowClick(ev)) {
                ev.preventDefault();
                ev.stopPropagation();
                this.toggle();
            }
        }
    }, {
        key: "writeValue",

        // Called by the model (Control) to update the view
        value: function writeValue(modelValue) {
            this.input.checked = modelValue;
        }
    }, {
        key: "registerOnChange",

        // Used by the view to update the model (Control)
        // Up to us to call it in update()
        value: function registerOnChange(fn) {
            this.onChange = fn;
        }
    }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
            this.onTouched = fn;
        }
    }]);

    return _class;
})(_formInput.IonInputItem);
exports.Checkbox = Checkbox;
exports.Checkbox = Checkbox = __decorate([(0, _configAnnotations.IonicComponent)({
    selector: "ion-checkbox",
    properties: ["value", "checked", "disabled"],
    host: {
        "class": "item",
        "role": "checkbox",
        "[attr.aria-checked]": "input.checked",
        "[attr.aria-disabled]": "input.disabled",
        "[attr.aria-labelledby]": "labelId",
        "(^click)": "click($event)"
    },
    exportAs: "checkbox"
}), (0, _configAnnotations.IonicView)({
    template: "<div class=\"item-media media-checkbox\">" + "<input type=\"checkbox\" aria-hidden=\"true\">" + "<div class=\"checkbox-icon\"></div>" + "</div>" + "<div class=\"item-content\" id=\"{{labelId}}\">" + "<ng-content></ng-content>" + "</div>"
}), __param(0, (0, _angular2Angular2.Optional)()), __metadata("design:paramtypes", [typeof _angular2Angular2.NgControl !== "undefined" && _angular2Angular2.NgControl || Object, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object, typeof _configConfig.IonicConfig !== "undefined" && _configConfig.IonicConfig || Object, typeof _buttonButton.TapClick !== "undefined" && _buttonButton.TapClick || Object])], Checkbox);