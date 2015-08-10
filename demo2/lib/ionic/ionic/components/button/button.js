"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _angular2Angular2 = require("angular2/angular2");

var _configConfig = require("../../config/config");

var _utilActivator = require("../../util/activator");

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
var Button = (function () {
    var _class = function Button() {
        _classCallCheck(this, _class);

        this.iconLeft = this.iconRight = this.iconOnly = false;
    };

    _createClass(_class, [{
        key: "registerIcon",
        value: function registerIcon(icon) {
            this.iconLeft = icon.iconLeft;
            this.iconRight = icon.iconRight;
            this.iconOnly = icon.iconOnly;
        }
    }]);

    return _class;
})();
exports.Button = Button;
exports.Button = Button = __decorate([(0, _angular2Angular2.Directive)({
    selector: "button,[button]",
    host: {
        "[class.icon-left]": "iconLeft",
        "[class.icon-right]": "iconRight",
        "[class.icon-only]": "iconOnly"
    }
}), __metadata("design:paramtypes", [])], Button);
var TapDisabled = (function () {
    var _class2 = function TapDisabled() {
        _classCallCheck(this, _class2);
    };

    return _class2;
})();
exports.TapDisabled = TapDisabled;
exports.TapDisabled = TapDisabled = __decorate([(0, _angular2Angular2.Directive)({
    selector: "[tap-disabled]"
}), __metadata("design:paramtypes", [])], TapDisabled);
var TapClick = (function () {
    var _class3 = function TapClick(elementRef, config, ngZone, tapDisabled) {
        _classCallCheck(this, _class3);

        this.ele = elementRef.nativeElement;
        this.tapEnabled = !tapDisabled;
        this.tapPolyfill = config.setting("tapPolyfill");
        this.zone = ngZone;
        var self = this;
        self.pointerMove = function (ev) {
            var moveCoord = dom.pointerCoord(ev);
            console.log("pointerMove", moveCoord, self.start);
            if (dom.hasPointerMoved(10, self.start, moveCoord)) {
                self.pointerCancel();
            }
        };
    };

    _createClass(_class3, [{
        key: "touchStart",
        value: function touchStart(ev) {
            this.pointerStart(ev);
        }
    }, {
        key: "touchEnd",
        value: function touchEnd(ev) {
            var self = this;
            if (this.tapPolyfill && this.tapEnabled) {
                var endCoord = dom.pointerCoord(ev);
                this.disableClick = true;
                this.zone.runOutsideAngular(function () {
                    clearTimeout(self.disableTimer);
                    self.disableTimer = setTimeout(function () {
                        self.disableClick = false;
                    }, 600);
                });
                if (this.start && !dom.hasPointerMoved(3, this.start, endCoord)) {
                    var clickEvent = document.createEvent("MouseEvents");
                    clickEvent.initMouseEvent("click", true, true, window, 1, 0, 0, endCoord.x, endCoord.y, false, false, false, false, 0, null);
                    clickEvent.isIonicTap = true;
                    this.ele.dispatchEvent(clickEvent);
                }
            }
            this.pointerEnd();
        }
    }, {
        key: "mouseDown",
        value: function mouseDown(ev) {
            if (this.disableClick) {
                ev.preventDefault();
                ev.stopPropagation();
            } else {
                this.pointerStart(ev);
            }
        }
    }, {
        key: "mouseUp",
        value: function mouseUp(ev) {
            if (this.disableClick) {
                ev.preventDefault();
                ev.stopPropagation();
            }
            this.pointerEnd();
        }
    }, {
        key: "pointerStart",
        value: function pointerStart(ev) {
            var _this = this;

            this.start = dom.pointerCoord(ev);
            this.zone.runOutsideAngular(function () {
                _utilActivator.Activator.start(ev.currentTarget);
                _utilActivator.Activator.moveListeners(_this.pointerMove, true);
            });
        }
    }, {
        key: "pointerEnd",
        value: function pointerEnd() {
            var _this2 = this;

            this.zone.runOutsideAngular(function () {
                _utilActivator.Activator.end();
                _utilActivator.Activator.moveListeners(_this2.pointerMove, false);
            });
        }
    }, {
        key: "pointerCancel",
        value: function pointerCancel() {
            var _this3 = this;

            this.start = null;
            this.zone.runOutsideAngular(function () {
                _utilActivator.Activator.clear();
                _utilActivator.Activator.moveListeners(_this3.pointerMove, false);
            });
        }
    }, {
        key: "allowClick",
        value: function allowClick(ev) {
            if (!ev.isIonicTap) {
                if (this.disableClick || !this.start) {
                    return false;
                }
            }
            return true;
        }
    }, {
        key: "click",
        value: function click(ev) {
            if (!this.allowClick(ev)) {
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
    }, {
        key: "onDestroy",
        value: function onDestroy() {
            this.ele = null;
        }
    }]);

    return _class3;
})();
exports.TapClick = TapClick;
exports.TapClick = TapClick = __decorate([(0, _angular2Angular2.Directive)({
    selector: "button,[button],[tappable],ion-checkbox",
    host: {
        "(^touchstart)": "touchStart($event)",
        "(^touchend)": "touchEnd($event)",
        "(^touchcancel)": "pointerCancel()",
        "(^mousedown)": "mouseDown($event)",
        "(^mouseup)": "mouseUp($event)",
        "(^click)": "click($event)"
    }
}), __param(3, (0, _angular2Angular2.Optional)()), __param(3, (0, _angular2Angular2.Ancestor)()), __metadata("design:paramtypes", [typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object, typeof _configConfig.IonicConfig !== "undefined" && _configConfig.IonicConfig || Object, typeof _angular2Angular2.NgZone !== "undefined" && _angular2Angular2.NgZone || Object, TapDisabled])], TapClick);