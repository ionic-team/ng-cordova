"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _angular2Angular2 = require("angular2/angular2");

var _viewViewController = require("../view/view-controller");

var _pane = require("./pane");

var _ionicGesturesGesture = require("ionic/gestures/gesture");

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
var SwipeHandle = (function () {
    var _class = function SwipeHandle(viewCtrl, pane, elementRef, ngZone) {
        _classCallCheck(this, _class);

        if (!viewCtrl || !viewCtrl.isSwipeBackEnabled() || !pane) return;
        var self = this;
        self.pane = pane;
        self.viewCtrl = viewCtrl;
        self.zone = ngZone;
        this.zone.runOutsideAngular(function () {
            var gesture = self.gesture = new _ionicGesturesGesture.Gesture(elementRef.nativeElement);
            gesture.listen();
            function dragHorizontal(ev) {
                self.onDragHorizontal(ev);
            }
            gesture.on("panend", function (gestureEv) {
                self.onDragEnd(gestureEv.gesture);
            });
            gesture.on("panleft", dragHorizontal);
            gesture.on("panright", dragHorizontal);
        });
        self.startX = null;
        self.width = null;
    };

    _createClass(_class, [{
        key: "onDragEnd",
        value: function onDragEnd(gesture) {
            var _this = this;

            gesture.srcEvent.preventDefault();
            gesture.srcEvent.stopPropagation();
            // TODO: POLISH THESE NUMBERS WITH GOOD MATHIFICATION
            var progress = (gesture.center.x - this.startX) / this.width;
            var completeSwipeBack = progress > 0.5;
            var playbackRate = 4;
            if (completeSwipeBack) {
                // complete swipe back
                if (progress > 0.9) {
                    playbackRate = 1;
                } else if (progress > 0.8) {
                    playbackRate = 2;
                } else if (progress > 0.7) {
                    playbackRate = 3;
                }
            } else {
                // cancel swipe back
                if (progress < 0.1) {
                    playbackRate = 1;
                } else if (progress < 0.2) {
                    playbackRate = 2;
                } else if (progress < 0.3) {
                    playbackRate = 3;
                }
            }
            this.zone.run(function () {
                _this.viewCtrl.swipeBackEnd(completeSwipeBack, progress, playbackRate);
            });
            this.startX = null;
        }
    }, {
        key: "onDragHorizontal",
        value: function onDragHorizontal(gestureEv) {
            var _this2 = this;

            this.zone.run(function () {
                var gesture = gestureEv.gesture;
                if (_this2.startX === null) {
                    // starting drag
                    gesture.srcEvent.preventDefault();
                    gesture.srcEvent.stopPropagation();
                    _this2.startX = gesture.center.x;
                    _this2.width = _this2.pane.width() - _this2.startX;
                    _this2.viewCtrl.swipeBackStart();
                }
                _this2.viewCtrl.swipeBackProgress((gesture.center.x - _this2.startX) / _this2.width);
            });
        }
    }, {
        key: "onDestroy",
        value: function onDestroy() {
            this.gesture && this.gesture.destroy();
        }
    }, {
        key: "showHandle",
        get: function get() {
            return this.viewCtrl ? this.viewCtrl.canSwipeBack() : false;
        }
    }]);

    return _class;
})();
exports.SwipeHandle = SwipeHandle;
exports.SwipeHandle = SwipeHandle = __decorate([(0, _angular2Angular2.Directive)({
    selector: ".swipe-handle",
    host: {
        "[class.show-handle]": "showHandle"
    }
}), __param(0, (0, _angular2Angular2.Optional)()), __param(0, (0, _angular2Angular2.Inject)((0, _angular2Angular2.forwardRef)(function () {
    return _viewViewController.ViewController;
}))), __param(1, (0, _angular2Angular2.Ancestor)()), __param(1, (0, _angular2Angular2.Inject)((0, _angular2Angular2.forwardRef)(function () {
    return _pane.Pane;
}))), __metadata("design:paramtypes", [typeof _viewViewController.ViewController !== "undefined" && _viewViewController.ViewController || Object, typeof _pane.Pane !== "undefined" && _pane.Pane || Object, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object, typeof _angular2Angular2.NgZone !== "undefined" && _angular2Angular2.NgZone || Object])], SwipeHandle);