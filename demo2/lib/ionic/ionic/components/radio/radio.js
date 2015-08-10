"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _angular2Angular2 = require("angular2/angular2");

var _configAnnotations = require("../../config/annotations");

var _configConfig = require("../../config/config");

var _ion = require("../ion");

var _formForm = require("../form/form");

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

var groupName = -1;
var RadioGroup = (function (_Ion) {
    var _class = function RadioGroup(cd, renderer, elementRef, ionicConfig) {
        _classCallCheck(this, _class);

        _get(Object.getPrototypeOf(_class.prototype), "constructor", this).call(this, elementRef, ionicConfig);
        this._name = ++groupName;
        this.buttons = [];
        this.onChange = function (_) {};
        this.onTouched = function (_) {};
        this.renderer = renderer;
        this.elementRef = elementRef;
        cd.valueAccessor = this;
        this.value = "";
    };

    _inherits(_class, _Ion);

    _createClass(_class, [{
        key: "registerButton",
        value: function registerButton(radioButton) {
            this.buttons.push(radioButton);
            var inputEl = radioButton.input.elementRef.nativeElement;
            if (!inputEl.hasAttribute("name")) {
                radioButton.input.name = this._name;
            }
        }
    }, {
        key: "update",

        //from clicking the label or switching inputs with keyboard
        //view -> model (Control)
        value: function update(input) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.buttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var button = _step.value;

                    button.input.checked = false;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator["return"]) {
                        _iterator["return"]();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            input.checked = true;
            this.onChange(input.value);
        }
    }, {
        key: "writeValue",

        // Called by the model (Control) to update the view
        value: function writeValue(value) {
            this.value = value;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.buttons[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var button = _step2.value;

                    button.input.checked = button.input.value == value;
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
                        _iterator2["return"]();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
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
})(_ion.Ion);
exports.RadioGroup = RadioGroup;
exports.RadioGroup = RadioGroup = __decorate([(0, _configAnnotations.IonicDirective)({
    selector: "ion-radio-group",
    host: {
        "class": "list"
    }
}), __metadata("design:paramtypes", [typeof _angular2Angular2.NgControl !== "undefined" && _angular2Angular2.NgControl || Object, typeof _angular2Angular2.Renderer !== "undefined" && _angular2Angular2.Renderer || Object, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object, typeof _configConfig.IonicConfig !== "undefined" && _configConfig.IonicConfig || Object])], RadioGroup);
var RadioButton = (function (_IonInputItem) {
    var _class2 = function RadioButton(group, elementRef, config) {
        _classCallCheck(this, _class2);

        _get(Object.getPrototypeOf(_class2.prototype), "constructor", this).call(this, elementRef, config);
        this.group = group;
    };

    _inherits(_class2, _IonInputItem);

    _createClass(_class2, [{
        key: "registerInput",
        value: function registerInput(input) {
            this.input = input;
            this.group.registerButton(this);
        }
    }, {
        key: "toggle",

        //from clicking the label or switching inputs with keyboard
        //view -> model (Control)
        value: function toggle() {
            this.group.update(this.input);
        }
    }]);

    return _class2;
})(_formForm.IonInputItem);
exports.RadioButton = RadioButton;
exports.RadioButton = RadioButton = __decorate([(0, _configAnnotations.IonicComponent)({
    selector: "ion-radio",
    host: {
        "class": "item",
        "[attr.aria-checked]": "input.checked"
    }
}), (0, _configAnnotations.IonicView)({
    template: "<div class=\"item-content\">" + "<ng-content></ng-content>" + "</div>" + "<div class=\"item-media media-radio\">" + "<div class=\"radio-icon\"></div>" + "</div>"
}), __param(0, (0, _angular2Angular2.Ancestor)()), __metadata("design:paramtypes", [RadioGroup, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object, typeof _configConfig.IonicConfig !== "undefined" && _configConfig.IonicConfig || Object])], RadioButton);