/**
* @ngdoc service
* @name ActionMenu
* @module ionic
* @description
* The ActionMenu is a modal menu with options to select based on an action.
*/
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _angular2Angular2 = require("angular2/angular2");

var _buttonButton = require("../button/button");

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

var ActionMenuDirective = (function () {
    var _class = function ActionMenuDirective() {
        _classCallCheck(this, _class);
    };

    _createClass(_class, [{
        key: "_cancel",
        value: function _cancel() {
            this.cancel && this.cancel();
            return this.overlayRef.close();
        }
    }, {
        key: "_destructive",
        value: function _destructive() {
            var shouldClose = this.destructiveButtonClicked();
            if (shouldClose === true) {
                return this.overlayRef.close();
            }
        }
    }, {
        key: "_buttonClicked",
        value: function _buttonClicked(index) {
            var shouldClose = this.buttonClicked(index);
            if (shouldClose === true) {
                return this.overlayRef.close();
            }
        }
    }]);

    return _class;
})();
ActionMenuDirective = __decorate([(0, _angular2Angular2.View)({
    template: "<backdrop (click)=\"_cancel()\" tappable></backdrop>" + "<action-menu-wrapper>" + "<div class=\"action-menu-container\">" + "<div class=\"action-menu-group action-menu-options\">" + "<div class=\"action-menu-title\" *ng-if=\"titleText\">{{titleText}}</div>" + "<button (^click)=\"_buttonClicked(index)\" *ng-for=\"#b of buttons; #index = index\" class=\"action-menu-option\">" + "<i class=\"icon\" [class]=\"b.icon\" *ng-if=\"b.icon\"></i> " + "{{b.text}}" + "</button>" + "<button *ng-if=\"destructiveText\" (click)=\"_destructive()\" class=\"destructive action-menu-destructive\">" + "<i class=\"icon\" [class]=\"destructiveIcon\" *ng-if=\"destructiveIcon\"></i> " + "{{destructiveText}}</button>" + "</div>" + "<div class=\"action-menu-group action-menu-cancel\" *ng-if=\"cancelText\">" + "<button (click)=\"_cancel()\"><i class=\"icon\" [class]=\"cancelIcon\"></i> {{cancelText}}</button>" + "</div>" + "</div>" + "</action-menu-wrapper>",
    directives: [_angular2Angular2.NgFor, _angular2Angular2.NgIf, _angular2Angular2.CSSClass, _buttonButton.TapClick]
}), __metadata("design:paramtypes", [])], ActionMenuDirective);
var ActionMenu = (function (_Overlay) {
    var _class2 = function ActionMenu() {
        _classCallCheck(this, _class2);

        _get(Object.getPrototypeOf(_class2.prototype), "constructor", this).apply(this, arguments);
    };

    _inherits(_class2, _Overlay);

    _createClass(_class2, [{
        key: "open",

        /**
         * Create and open a new Action Menu. This is the
         * public API, and most often you will only use ActionMenu.open()
         *
         * @return Promise that resolves when the action menu is open.
         */
        value: function open() {
            var opts = arguments[0] === undefined ? {} : arguments[0];

            var defaults = {
                enterAnimation: "action-menu-slide-in",
                leaveAnimation: "action-menu-slide-out"
            };
            var contextDefaults = {
                cancelIcon: "ion-close",
                destructiveIcon: "ion-trash-a"
            };
            var context = util.extend(contextDefaults, opts);
            return this.create(OVERLAY_TYPE, ActionMenuDirective, util.extend(defaults, opts), context);
        }
    }, {
        key: "get",
        value: function get() {
            return Modal.getByType(OVERLAY_TYPE);
        }
    }]);

    return _class2;
})(_overlayOverlay.Overlay);
exports.ActionMenu = ActionMenu;
exports.ActionMenu = ActionMenu = __decorate([(0, _angular2Angular2.Injectable)(), __metadata("design:paramtypes", [])], ActionMenu);
var OVERLAY_TYPE = "action-menu";
/**
 * Animations for action sheet
 */

var ActionMenuAnimation = (function (_Animation) {
    function ActionMenuAnimation(element) {
        _classCallCheck(this, ActionMenuAnimation);

        _get(Object.getPrototypeOf(ActionMenuAnimation.prototype), "constructor", this).call(this, element);
        this.easing("cubic-bezier(.36, .66, .04, 1)").duration(400);
        this.backdrop = new _animationsAnimation.Animation(element.querySelector("backdrop"));
        this.wrapper = new _animationsAnimation.Animation(element.querySelector("action-menu-wrapper"));
        this.add(this.backdrop, this.wrapper);
    }

    _inherits(ActionMenuAnimation, _Animation);

    return ActionMenuAnimation;
})(_animationsAnimation.Animation);

var ActionMenuSlideIn = (function (_ActionMenuAnimation) {
    function ActionMenuSlideIn(element) {
        _classCallCheck(this, ActionMenuSlideIn);

        _get(Object.getPrototypeOf(ActionMenuSlideIn.prototype), "constructor", this).call(this, element);
        this.backdrop.fromTo("opacity", 0, 0.4);
        this.wrapper.fromTo("translateY", "100%", "0%");
    }

    _inherits(ActionMenuSlideIn, _ActionMenuAnimation);

    return ActionMenuSlideIn;
})(ActionMenuAnimation);

_animationsAnimation.Animation.register("action-menu-slide-in", ActionMenuSlideIn);

var ActionMenuSlideOut = (function (_ActionMenuAnimation2) {
    function ActionMenuSlideOut(element) {
        _classCallCheck(this, ActionMenuSlideOut);

        _get(Object.getPrototypeOf(ActionMenuSlideOut.prototype), "constructor", this).call(this, element);
        this.backdrop.fromTo("opacity", 0.4, 0);
        this.wrapper.fromTo("translateY", "0%", "100%");
    }

    _inherits(ActionMenuSlideOut, _ActionMenuAnimation2);

    return ActionMenuSlideOut;
})(ActionMenuAnimation);

_animationsAnimation.Animation.register("action-menu-slide-out", ActionMenuSlideOut);