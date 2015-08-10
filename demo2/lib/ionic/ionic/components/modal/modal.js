"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

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
var Modal = (function (_Overlay) {
    var _class = function Modal() {
        _classCallCheck(this, _class);

        _get(Object.getPrototypeOf(_class.prototype), "constructor", this).apply(this, arguments);
    };

    _inherits(_class, _Overlay);

    _createClass(_class, [{
        key: "open",
        value: function open(ComponentType) {
            var opts = arguments[1] === undefined ? {} : arguments[1];

            var defaults = {
                enterAnimation: "modal-slide-in",
                leaveAnimation: "modal-slide-out"
            };
            return this.create(OVERLAY_TYPE, ComponentType, util.extend(defaults, opts));
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
exports.Modal = Modal;
exports.Modal = Modal = __decorate([(0, _angular2Angular2.Injectable)(), __metadata("design:paramtypes", [])], Modal);
var OVERLAY_TYPE = "modal";
/**
 * Animations for modals
 */

var ModalSlideIn = (function (_Animation) {
    function ModalSlideIn(element) {
        _classCallCheck(this, ModalSlideIn);

        _get(Object.getPrototypeOf(ModalSlideIn.prototype), "constructor", this).call(this, element);
        this.easing("cubic-bezier(.36,.66,.04,1)").duration(400).fromTo("translateY", "100%", "0%");
    }

    _inherits(ModalSlideIn, _Animation);

    return ModalSlideIn;
})(_animationsAnimation.Animation);

_animationsAnimation.Animation.register("modal-slide-in", ModalSlideIn);

var ModalSlideOut = (function (_Animation2) {
    function ModalSlideOut(element) {
        _classCallCheck(this, ModalSlideOut);

        _get(Object.getPrototypeOf(ModalSlideOut.prototype), "constructor", this).call(this, element);
        this.easing("ease-out").duration(250).fromTo("translateY", "0%", "100%");
    }

    _inherits(ModalSlideOut, _Animation2);

    return ModalSlideOut;
})(_animationsAnimation.Animation);

_animationsAnimation.Animation.register("modal-slide-out", ModalSlideOut);