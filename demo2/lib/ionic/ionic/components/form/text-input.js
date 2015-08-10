"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _angular2Angular2 = require("angular2/angular2");

var _configAnnotations = require("../../config/annotations");

var _configConfig = require("../../config/config");

var _input = require("./input");

var _appApp = require("../app/app");

var _contentContent = require("../content/content");

var _utilClickBlock = require("../../util/click-block");

var _utilDom = require("../../util/dom");

var dom = _interopRequireWildcard(_utilDom);

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
var Input = (function (_IonInputItem) {
    var _class = function Input(elementRef, ionicConfig) {
        _classCallCheck(this, _class);

        _get(Object.getPrototypeOf(_class.prototype), "constructor", this).call(this, elementRef, ionicConfig);
    };

    _inherits(_class, _IonInputItem);

    _createClass(_class, [{
        key: "focus",
        value: function focus() {
            this.input && this.input.focus();
        }
    }]);

    return _class;
})(_input.IonInputItem);
exports.Input = Input;
exports.Input = Input = __decorate([(0, _configAnnotations.IonicDirective)({
    selector: "ion-input",
    classId: "item-input",
    host: {
        "class": "item"
    }
}), __metadata("design:paramtypes", [typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object, typeof _configConfig.IonicConfig !== "undefined" && _configConfig.IonicConfig || Object])], Input);
var TextInput = (function (_IonInput) {
    var _class2 = function TextInput(container, scrollView, type, elementRef, app, config) {
        _classCallCheck(this, _class2);

        _get(Object.getPrototypeOf(_class2.prototype), "constructor", this).call(this, elementRef, app, config, scrollView);
        if (container) {
            container.registerInput(this);
            this.container = container;
        }
        this.type = type;
        this.elementRef = elementRef;
        this.tabIndex = this.tabIndex || "";
    };

    _inherits(_class2, _IonInput);

    _createClass(_class2, [{
        key: "pointerStart",
        value: function pointerStart(ev) {
            if (this.scrollAssist) {
                // remember where the touchstart/mousedown started
                this.startCoord = dom.pointerCoord(ev);
                this.pressStart = Date.now();
            }
        }
    }, {
        key: "pointerEnd",
        value: function pointerEnd(ev) {
            if (this.scrollAssist) {
                // get where the touchend/mouseup ended
                var endCoord = dom.pointerCoord(ev);
                // focus this input if the pointer hasn't moved XX pixels
                // and the input doesn't already have focus
                if (!dom.hasPointerMoved(20, this.startCoord, endCoord) && !this.hasFocus()) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    this.focus();
                }
                this.startCoord = this.pressStart = null;
            }
        }
    }, {
        key: "focus",
        value: function focus() {
            var _this = this;

            var scrollView = this.scrollView;
            if (scrollView && this.scrollAssist) {
                // this input is inside of a scroll view
                // scroll the input to the top
                var inputY = this.elementRef.nativeElement.offsetTop - SCROLL_Y_PADDING;
                // do not allow any clicks while it's scrolling
                (0, _utilClickBlock.ClickBlock)(true, SCROLL_INTO_VIEW_DURATION + 200);
                // used to put a lot of padding on the bottom of the scroll view
                scrollView.scrollPadding = true;
                // temporarily move the focus to the focus holder so the browser
                // doesn't freak out while it's trying to get the input in place
                this.setFocusHolder(this.type);
                // scroll the input into place
                scrollView.scrollTo(0, inputY, SCROLL_INTO_VIEW_DURATION, 8).then(function () {
                    // the scroll view is in the correct position now
                    // give the native input the focus
                    _this.setFocus();
                    // all good, allow clicks again
                    (0, _utilClickBlock.ClickBlock)(false);
                });
            } else {
                // not inside of a scroll view, just focus it
                this.setFocus();
            }
        }
    }, {
        key: "receivedFocus",
        value: function receivedFocus(_receivedFocus) {
            var self = this;
            var scrollView = self.scrollView;
            self.isActiveInput(_receivedFocus);
            function touchMove(ev) {
                if (!self.isPressHold()) {
                    self.setFocusHolder(self.type);
                    self.deregTouchMove();
                }
            }
            if (scrollView && this.scrollAssist) {
                if (_receivedFocus) {
                    // when the input has focus, then the focus holder
                    // should not be able to be focused
                    self.deregTouchMove = scrollView && scrollView.addTouchMoveListener(touchMove);
                } else {
                    // the input no longer has focus
                    self.deregTouchMove && self.deregTouchMove();
                }
            }
        }
    }, {
        key: "isPressHold",
        value: function isPressHold() {
            return this.pressStart && this.pressStart + 500 < Date.now();
        }
    }]);

    return _class2;
})(_input.IonInput);
exports.TextInput = TextInput;
exports.TextInput = TextInput = __decorate([(0, _angular2Angular2.Directive)({
    selector: "textarea,input[type=text],input[type=password],input[type=number],input[type=search],input[type=email],input[type=url],input[type=tel]",
    property: ["tabIndex"],
    host: {
        "[tabIndex]": "tabIndex",
        "(focus)": "receivedFocus(true)",
        "(blur)": "receivedFocus(false)",
        "(touchstart)": "pointerStart($event)",
        "(touchend)": "pointerEnd($event)",
        "(mousedown)": "pointerStart($event)",
        "(mouseup)": "pointerEnd($event)",
        "[attr.id]": "id",
        "class": "text-input input"
    }
}), __param(0, (0, _angular2Angular2.Optional)()), __param(0, (0, _angular2Angular2.Ancestor)()), __param(1, (0, _angular2Angular2.Optional)()), __param(1, (0, _angular2Angular2.Ancestor)()), __param(2, (0, _angular2Angular2.Attribute)("type")), __metadata("design:paramtypes", [Input, typeof _contentContent.Content !== "undefined" && _contentContent.Content || Object, String, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object, typeof _appApp.IonicApp !== "undefined" && _appApp.IonicApp || Object, typeof _configConfig.IonicConfig !== "undefined" && _configConfig.IonicConfig || Object])], TextInput);
var SCROLL_INTO_VIEW_DURATION = 500;
var SCROLL_Y_PADDING = 28;