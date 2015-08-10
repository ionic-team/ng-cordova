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

var _ion = require("../ion");

var _configConfig = require("../../config/config");

var _configAnnotations = require("../../config/annotations");

var _extensionsTypes = require("./extensions/types");

var types = _interopRequireWildcard(_extensionsTypes);

var _extensionsGestures = require("./extensions/gestures");

var gestures = _interopRequireWildcard(_extensionsGestures);

var _ionicUtil = require("ionic/util");

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

/**
 * TODO (?) add docs about how to have a root aside and a nested aside, then hide the root one
 */
var Aside = (function (_Ion) {
    var _class = function Aside(elementRef, ionicConfig) {
        var _this = this;

        _classCallCheck(this, _class);

        _get(Object.getPrototypeOf(_class.prototype), "constructor", this).call(this, elementRef, ionicConfig);
        this.opening = new _angular2Angular2.EventEmitter("opening");
        // TODO: Use Animation Class
        this.getNativeElement().addEventListener("transitionend", function (ev) {
            _this.setChanging(false);
        });
    };

    _inherits(_class, _Ion);

    _createClass(_class, [{
        key: "onInit",
        value: function onInit() {
            _get(Object.getPrototypeOf(_class.prototype), "onInit", this).call(this);
            this.contentElement = this.content instanceof Node ? this.content : this.content.getNativeElement();
            this.gestureDelegate = this.getDelegate("gesture");
            this.typeDelegate = this.getDelegate("type");
        }
    }, {
        key: "getContentElement",
        value: function getContentElement() {
            return this.contentElement;
        }
    }, {
        key: "setOpenAmt",
        value: function setOpenAmt(v) {
            this.opening.next(v);
        }
    }, {
        key: "setTransform",
        value: function setTransform(transform) {
            this.typeDelegate.setTransform(transform);
        }
    }, {
        key: "setSliding",
        value: function setSliding(isSliding) {
            if (isSliding !== this.isSliding) {
                this.typeDelegate.setSliding(isSliding);
            }
        }
    }, {
        key: "setChanging",
        value: function setChanging(isChanging) {
            if (isChanging !== this.isChanging) {
                this.isChanging = isChanging;
                this.getNativeElement().classList[isChanging ? "add" : "remove"]("changing");
            }
        }
    }, {
        key: "setOpen",
        value: function setOpen(isOpen) {
            var _this2 = this;

            console.log("SET OPEN", isOpen);
            console.trace();
            if (isOpen !== this.isOpen) {
                this.isOpen = isOpen;
                this.setChanging(true);
                // Set full or closed amount
                this.setOpenAmt(isOpen ? 1 : 0);
                return _ionicUtil.dom.rafPromise().then(function () {
                    _this2.typeDelegate.setOpen(isOpen);
                });
            }
        }
    }, {
        key: "open",
        value: function open() {
            return this.setOpen(true);
        }
    }, {
        key: "close",
        value: function close() {
            return this.setOpen(false);
        }
    }, {
        key: "toggle",
        value: function toggle() {
            return this.setOpen(!this.isOpen);
        }
    }]);

    return _class;
})(_ion.Ion);
exports.Aside = Aside;
exports.Aside = Aside = __decorate([(0, _configAnnotations.IonicComponent)({
    selector: "ion-aside",
    properties: ["content", "dragThreshold"],
    defaultProperties: {
        "side": "left",
        "type": "reveal"
    },
    delegates: {
        gesture: [[function (instance) {
            return instance.side == "top";
        }, gestures.TopAsideGesture], [function (instance) {
            return instance.side == "bottom";
        }, gestures.BottomAsideGesture], [function (instance) {
            return instance.side == "right";
        }, gestures.RightAsideGesture], [function (instance) {
            return instance.side == "left";
        }, gestures.LeftAsideGesture]],
        type: [[function (instance) {
            return instance.type == "overlay";
        }, types.AsideTypeOverlay], [function (instance) {
            return instance.type == "reveal";
        }, types.AsideTypeReveal], [function (instance) {
            return instance.type == "push";
        }, types.AsideTypePush]]
    },
    events: ["opening"]
}), (0, _angular2Angular2.View)({
    template: "<ng-content></ng-content>"
}), __metadata("design:paramtypes", [typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object, typeof _configConfig.IonicConfig !== "undefined" && _configConfig.IonicConfig || Object])], Aside);