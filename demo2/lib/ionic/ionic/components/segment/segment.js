"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _angular2Angular2 = require("angular2/angular2");

var _angular2Forms = require("angular2/forms");

var _ion = require("../ion");

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
var Segment = (function (_Ion) {
    var _class = function Segment(cd, elementRef, ionicConfig, renderer) {
        _classCallCheck(this, _class);

        _get(Object.getPrototypeOf(_class.prototype), "constructor", this).call(this, elementRef, ionicConfig);
        this.ele = elementRef.nativeElement;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.change = new _angular2Angular2.EventEmitter("change");
        this.input = new _angular2Angular2.EventEmitter("input");
        this.cd = cd;
        this.buttons = [];
    };

    _inherits(_class, _Ion);

    _createClass(_class, [{
        key: "register",

        /**
         * Called by child SegmentButtons to bind themselves to
         * the Segment.
         */
        value: function register(segmentButton) {
            this.buttons.push(segmentButton);
            // If this button is registered and matches our value,
            // make sure to select it
            if (this.value == segmentButton.value) {
                this.selected(segmentButton);
            }
        }
    }, {
        key: "selectFromValue",

        /**
         * Select the button with the given value.
         */
        value: function selectFromValue(value) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.buttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var button = _step.value;

                    if (button.value === value) {
                        button.isActive = true;
                    }
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
        }
    }, {
        key: "selected",

        /**
         * Indicate a button should be selected.
         */
        value: function selected(segmentButton) {
            var _this = this;

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.buttons[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var button = _step2.value;

                    button.isActive = false;
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

            segmentButton.isActive = true;
            //this.onChange();
            setTimeout(function () {
                _this.value = segmentButton.value;
                _this.cd.valueAccessor.writeValue(segmentButton.value);
                _this.selectFromValue(segmentButton.value);
                _this.cd.control.updateValue(segmentButton.value);
                // Trigger on change
                _this.change.next();
            });
            //this.ngControl.control().updateValue(this.value);
            // TODO: Better way to do this?
            //this.controlDirective._control().updateValue(this.value);
        }
    }]);

    return _class;
})(_ion.Ion);
exports.Segment = Segment;
exports.Segment = Segment = __decorate([(0, _configAnnotations.IonicComponent)({
    selector: "ion-segment",
    appInjector: [_angular2Forms.NgControl],
    properties: ["value"],
    host: {
        "(click)": "buttonClicked($event)",
        "(change)": "onChange($event)"
    }
}), (0, _angular2Angular2.View)({
    template: "<div class=\"ion-segment\"><ng-content></ng-content></div>",
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return SegmentButton;
    })]
}), __metadata("design:paramtypes", [typeof _angular2Forms.NgControl !== "undefined" && _angular2Forms.NgControl || Object, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object, typeof _configConfig.IonicConfig !== "undefined" && _configConfig.IonicConfig || Object, typeof _angular2Angular2.Renderer !== "undefined" && _angular2Angular2.Renderer || Object])], Segment);
var SegmentControlValueAccessor = (function () {
    var _class2 = function SegmentControlValueAccessor(cd, renderer, elementRef, segment) {
        _classCallCheck(this, _class2);

        this.onChange = function (_) {};
        this.onTouched = function (_) {};
        this.cd = cd;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.segment = segment;
        cd.valueAccessor = this;
    };

    _createClass(_class2, [{
        key: "writeValue",
        value: function writeValue(value) {
            // both this.value and setProperty are required at the moment
            // remove when a proper imperative API is provided
            this.value = !value ? "" : value;
            this.renderer.setElementProperty(this.elementRef, "value", this.value);
            this.segment.value = this.value;
            this.segment.selectFromValue(value);
        }
    }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
            this.onChange = fn;
        }
    }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
            this.onTouched = fn;
        }
    }]);

    return _class2;
})();
exports.SegmentControlValueAccessor = SegmentControlValueAccessor;
exports.SegmentControlValueAccessor = SegmentControlValueAccessor = __decorate([(0, _configAnnotations.IonicDirective)({
    selector: "ion-segment",
    //properties: ['value'],
    host: {
        "(change)": "onChange($event.target.value)",
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
    }
}), __metadata("design:paramtypes", [typeof _angular2Forms.NgControl !== "undefined" && _angular2Forms.NgControl || Object, typeof _angular2Angular2.Renderer !== "undefined" && _angular2Angular2.Renderer || Object, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object, Segment])], SegmentControlValueAccessor);
var SegmentButton = (function () {
    var _class3 = function SegmentButton(segment, elementRef) {
        _classCallCheck(this, _class3);

        this.ele = elementRef.ele;
        this.segment = segment;
    };

    _createClass(_class3, [{
        key: "onInit",
        value: function onInit() {
            this.segment.register(this);
        }
    }, {
        key: "buttonClicked",
        value: function buttonClicked(event) {
            this.segment.selected(this, event);
            event.preventDefault();
        }
    }]);

    return _class3;
})();
exports.SegmentButton = SegmentButton;
exports.SegmentButton = SegmentButton = __decorate([(0, _configAnnotations.IonicDirective)({
    selector: "ion-segment-button",
    properties: ["value"],
    host: {
        "(click)": "buttonClicked($event)",
        "[class.active]": "isActive"
    }
}), __param(0, (0, _angular2Angular2.Ancestor)()), __metadata("design:paramtypes", [Segment, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object])], SegmentButton);