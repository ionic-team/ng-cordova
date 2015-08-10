"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x8, _x9, _x10) { var _again = true; _function: while (_again) { var object = _x8, property = _x9, receiver = _x10; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x8 = parent; _x9 = property; _x10 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _angular2Angular2 = require("angular2/angular2");

var _overlayOverlay = require("../overlay/overlay");

var _animationsAnimation = require("../../animations/animation");

var _ionicUtil = require("ionic/util");

var util = _interopRequireWildcard(_ionicUtil);

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
var Popup = (function (_Overlay) {
    var _class = function Popup() {
        _classCallCheck(this, _class);

        _get(Object.getPrototypeOf(_class.prototype), "constructor", this).apply(this, arguments);
    };

    _inherits(_class, _Overlay);

    _createClass(_class, [{
        key: "popup",
        value: function popup(context) {
            var _this = this;

            var opts = arguments[1] === undefined ? {} : arguments[1];

            return new Promise(function (resolve, reject) {
                var defaults = {
                    enterAnimation: "popup-pop-in",
                    leaveAnimation: "popup-pop-out"
                };
                context.promiseResolve = resolve;
                context.promiseReject = reject;
                return _this.create(OVERLAY_TYPE, StandardPopup, util.extend(defaults, opts), context);
            });
        }
    }, {
        key: "alert",
        value: function alert() {
            var context = arguments[0] === undefined ? {} : arguments[0];
            var opts = arguments[1] === undefined ? {} : arguments[1];

            if (typeof context === "string") {
                context = {
                    title: context
                };
            }
            var button = {
                text: "OK",
                onTap: function onTap(event, popupRef) {}
            };
            context = util.extend({
                cancel: function cancel() {},
                buttons: [button]
            }, context);
            return this.popup(context, opts);
        }
    }, {
        key: "confirm",
        value: function confirm() {
            var context = arguments[0] === undefined ? {} : arguments[0];
            var opts = arguments[1] === undefined ? {} : arguments[1];

            if (typeof context === "string") {
                context = {
                    title: context
                };
            }
            var okButton = {
                text: "OK",
                onTap: function onTap(event, popupRef) {}
            };
            var cancelButton = {
                text: "Cancel",
                isCancel: true,
                onTap: function onTap(event, popupRef) {}
            };
            context = util.extend({
                cancel: function cancel() {},
                buttons: [cancelButton, okButton]
            }, context);
            return this.popup(context, opts);
        }
    }, {
        key: "prompt",
        value: function prompt() {
            var context = arguments[0] === undefined ? {} : arguments[0];
            var opts = arguments[1] === undefined ? {} : arguments[1];

            if (typeof context === "string") {
                context = {
                    title: context
                };
            }
            var okButton = {
                text: "Ok",
                onTap: function onTap(event, popupRef) {}
            };
            var cancelButton = {
                text: "Cancel",
                isCancel: true,
                onTap: function onTap(event, popupRef) {}
            };
            context = util.extend({
                showPrompt: true,
                promptPlaceholder: "",
                cancel: function cancel() {},
                buttons: [cancelButton, okButton]
            }, context);
            return this.popup(context, opts);
        }
    }, {
        key: "get",
        value: function get(handle) {
            if (handle) {
                return this.getByHandle(handle, OVERLAY_TYPE);
            }
            return this.getByType(OVERLAY_TYPE);
        }
    }]);

    return _class;
})(_overlayOverlay.Overlay);
exports.Popup = Popup;
exports.Popup = Popup = __decorate([(0, _angular2Angular2.Injectable)(), __metadata("design:paramtypes", [])], Popup);
var OVERLAY_TYPE = "popup";
var StandardPopup = (function () {
    var _class2 = function StandardPopup(popup) {
        _classCallCheck(this, _class2);

        this.popup = popup;
    };

    _createClass(_class2, [{
        key: "onInit",
        value: function onInit() {
            var _this2 = this;

            setTimeout(function () {
                _this2.element = _this2.overlayRef.getElementRef().nativeElement;
                _this2.promptInput = _this2.element.querySelector("input");
                if (_this2.promptInput) {
                    _this2.promptInput.value = "";
                }
            });
        }
    }, {
        key: "buttonTapped",
        value: function buttonTapped(button, event) {
            var promptValue = this.promptInput && this.promptInput.value;
            var retVal = button.onTap && button.onTap(event, this, {
                promptValue: promptValue
            });
            // If the event.preventDefault() wasn't called, close
            if (!event.defaultPrevented) {
                // If this is a cancel button, reject the promise
                if (button.isCancel) {
                    this.promiseReject();
                } else {
                    // Resolve with the prompt value
                    this.promiseResolve(promptValue);
                }
                return this.overlayRef.close();
            }
        }
    }, {
        key: "_cancel",
        value: function _cancel(event) {
            this.cancel && this.cancel(event);
            if (!event.defaultPrevented) {
                this.promiseReject();
                return this.overlayRef.close();
            }
        }
    }]);

    return _class2;
})();
StandardPopup = __decorate([(0, _angular2Angular2.Component)({
    selector: "ion-popup-default"
}), (0, _angular2Angular2.View)({
    template: "<backdrop (click)=\"_cancel($event)\" tappable></backdrop>" + "<popup-wrapper>" + "<div class=\"popup-head\">" + "<h3 class=\"popup-title\" [inner-html]=\"title\"></h3>" + "<h5 class=\"popup-sub-title\" [inner-html]=\"subTitle\" *ng-if=\"subTitle\"></h5>" + "</div>" + "<div class=\"popup-body\">" + "<input type=\"text\" *ng-if=\"showPrompt\" placeholder=\"{{promptPlaceholder}}\">" + "</div>" + "<div class=\"popup-buttons\" *ng-if=\"buttons.length\">" + "<button *ng-for=\"#button of buttons\" (click)=\"buttonTapped(button, $event)\" class=\"button\" [class]=\"button.type || 'button-default'\" [inner-html]=\"button.text\"></button>" + "</div>" + "</popup-wrapper>",
    directives: [_angular2Angular2.formDirectives, _angular2Angular2.CSSClass, _angular2Angular2.NgIf, _angular2Angular2.NgFor]
}), __metadata("design:paramtypes", [Popup])], StandardPopup);

var PopupAnimation = (function (_Animation) {
    function PopupAnimation(element) {
        _classCallCheck(this, PopupAnimation);

        _get(Object.getPrototypeOf(PopupAnimation.prototype), "constructor", this).call(this, element);
        this.easing("ease-in-out").duration(200);
        this.backdrop = new _animationsAnimation.Animation(element.querySelector("backdrop"));
        this.wrapper = new _animationsAnimation.Animation(element.querySelector("popup-wrapper"));
        this.add(this.backdrop, this.wrapper);
    }

    _inherits(PopupAnimation, _Animation);

    return PopupAnimation;
})(_animationsAnimation.Animation);

/**
 * Animations for modals
 */

var PopupPopIn = (function (_PopupAnimation) {
    function PopupPopIn(element) {
        _classCallCheck(this, PopupPopIn);

        _get(Object.getPrototypeOf(PopupPopIn.prototype), "constructor", this).call(this, element);
        this.wrapper.fromTo("opacity", "0", "1");
        this.wrapper.fromTo("scale", "1.1", "1");
        this.backdrop.fromTo("opacity", "0", "0.3");
    }

    _inherits(PopupPopIn, _PopupAnimation);

    return PopupPopIn;
})(PopupAnimation);

_animationsAnimation.Animation.register("popup-pop-in", PopupPopIn);

var PopupPopOut = (function (_PopupAnimation2) {
    function PopupPopOut(element) {
        _classCallCheck(this, PopupPopOut);

        _get(Object.getPrototypeOf(PopupPopOut.prototype), "constructor", this).call(this, element);
        this.wrapper.fromTo("opacity", "1", "0");
        this.wrapper.fromTo("scale", "1", "0.9");
        this.backdrop.fromTo("opacity", "0.3", "0");
    }

    _inherits(PopupPopOut, _PopupAnimation2);

    return PopupPopOut;
})(PopupAnimation);

_animationsAnimation.Animation.register("popup-pop-out", PopupPopOut);

// Allow it to close
//resolve();

//reject();

// Allow it to close

// Allow it to close

// Allow it to close

// Allow it to close