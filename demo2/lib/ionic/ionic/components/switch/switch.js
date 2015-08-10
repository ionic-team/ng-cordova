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
var Switch = (function (_IonInputItem) {
    var _class = function Switch(cd, renderer, elementRef, config) {
        _classCallCheck(this, _class);

        _get(Object.getPrototypeOf(_class.prototype), "constructor", this).call(this, elementRef, config);
        this.onChange = function (_) {};
        this.onTouched = function (_) {};
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.cd = cd;
        if (cd) cd.valueAccessor = this;
    };

    _inherits(_class, _IonInputItem);

    _createClass(_class, [{
        key: "onInit",
        value: function onInit() {
            _get(Object.getPrototypeOf(_class.prototype), "onInit", this).call(this);
            console.log("switch onInit");
        }
    }, {
        key: "onAllChangesDone",
        value: function onAllChangesDone() {
            return;
            console.log("switch onAllChangesDone");
            if (this._checked !== void 0 && this.input.checked != this._checked) {
                if (this.input.checked !== void 0) {
                    console.warn("switch checked is set in view template and Control declaration.\n" + "Value: " + !!this._checked + " from Control takes precedence");
                }
                this.input.checked = !!this._checked;
            }
            if (this._value !== void 0 && this.input.value != this._value) {
                if (this.input.value !== void 0) {
                    console.warn("switch value is set in view template and Control declaration.\n" + "Value: " + this._value + " from Control takes precedence");
                }
                this.input.value = this._value;
            }
            if (this.input.value === void 0) {
                this.input.value = "on";
            }
            if (this.input.checked === void 0) {
                this.input.checked = false;
            }
            //TODO check validity
            this.cd.control._value = { "checked": !!this.input.checked, "value": this.input.value };
            //TODO only want to call this once, we want to set input.checked directly on subsequent
            // writeValue's
            this.onAllChangesDone = function () {};
            // this.onChange({"checked": this.input.checked, "value": this.input.value});
        }
    }, {
        key: "toggle",

        //from clicking the label or selecting with keyboard
        //view -> model (Control)
        value: function toggle() {
            this.input.checked = this._checked = !this.input.checked;
            this.onChange({ "checked": this.input.checked, "value": this.input.value });
        }
    }, {
        key: "writeValue",

        // Called by the model (Control) to update the view
        value: function writeValue(modelValue) {
            var type = typeof modelValue;
            switch (type) {
                case "boolean":
                    // don't set input.value here, do it in onAllChangesDone
                    // because they might have set it in the view
                    this._checked = modelValue;
                    break;
                case "object":
                    if (modelValue.checked !== void 0) this._checked = !!modelValue.checked;
                    if (modelValue.value !== void 0) this._value = modelValue.value.toString();
                    break;
                default:
                    // don't set input.checked here, do it in onAllChangesDone
                    // because they might have set it in the view
                    this._value = modelValue.toString();
            }
            //TODO we want to set input.checked directly after the first time
            console.log("writeValue, " + this.input.id + " checked: " + this._checked);
            console.log("writeValue " + this.input.id + " value: " + this._value);
            // this.cd.control._value = {"checked": this.input.checked, "value": this.input.value};
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
exports.Switch = Switch;
exports.Switch = Switch = __decorate([(0, _configAnnotations.IonicComponent)({
    selector: "ion-switch",
    host: {
        "class": "item"
    }
}), (0, _configAnnotations.IonicView)({
    template: "<div class=\"item-content\">" + "<ng-content></ng-content>" + "</div>" + "<div class=\"item-media media-switch\">" + "<div class=\"switch-track\">" + "<div class=\"switch-handle\"></div>" + "</div>" + "</div>"
}), __param(0, (0, _angular2Angular2.Optional)()), __metadata("design:paramtypes", [typeof _angular2Angular2.NgControl !== "undefined" && _angular2Angular2.NgControl || Object, typeof _angular2Angular2.Renderer !== "undefined" && _angular2Angular2.Renderer || Object, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object, typeof _configConfig.IonicConfig !== "undefined" && _configConfig.IonicConfig || Object])], Switch);