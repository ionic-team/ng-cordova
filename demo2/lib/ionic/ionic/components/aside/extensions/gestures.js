'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _ionicGesturesSlideEdgeGesture = require('ionic/gestures/slide-edge-gesture');

var AsideTargetGesture = (function (_SlideEdgeGesture) {
    function AsideTargetGesture(aside) {
        _classCallCheck(this, AsideTargetGesture);

        var asideElement = aside.getNativeElement();
        _get(Object.getPrototypeOf(AsideTargetGesture.prototype), 'constructor', this).call(this, asideElement, {
            direction: aside.side === 'left' || aside.side === 'right' ? 'x' : 'y',
            edge: aside.side,
            threshold: 0
        });
        this.aside = aside;
    }

    _inherits(AsideTargetGesture, _SlideEdgeGesture);

    _createClass(AsideTargetGesture, [{
        key: 'canStart',
        value: function canStart(ev) {
            return this.aside.isOpen;
        }
    }, {
        key: 'onSlideBeforeStart',

        // Set CSS, then wait one frame for it to apply before sliding starts
        value: function onSlideBeforeStart(slide, ev) {
            this.aside.setSliding(true);
            this.aside.setChanging(true);
            return new Promise(function (resolve) {
                requestAnimationFrame(resolve);
            });
        }
    }, {
        key: 'onSlide',
        value: function onSlide(slide, ev) {
            this.aside.setOpenAmt(slide.distance / slide.max);
            this.aside.setTransform('translate3d(' + slide.distance + 'px,0,0)');
        }
    }, {
        key: 'onSlideEnd',
        value: function onSlideEnd(slide, ev) {
            this.aside.setTransform('');
            this.aside.setSliding(false);
            if (Math.abs(ev.gesture.velocityX) > 0.2 || Math.abs(slide.delta) > Math.abs(slide.max) * 0.5) {
                this.aside.setOpen(!this.aside.isOpen);
            }
        }
    }, {
        key: 'getElementStartPos',
        value: function getElementStartPos(slide, ev) {
            return this.aside.isOpen ? slide.max : slide.min;
        }
    }, {
        key: 'getSlideBoundaries',
        value: function getSlideBoundaries() {
            return {
                min: 0,
                max: this.aside.width()
            };
        }
    }]);

    return AsideTargetGesture;
})(_ionicGesturesSlideEdgeGesture.SlideEdgeGesture);

var AsideGesture = (function (_SlideEdgeGesture2) {
    function AsideGesture(aside) {
        _classCallCheck(this, AsideGesture);

        // TODO figure out the sliding element, dont just use the parent
        var contentElement = aside.getContentElement();
        _get(Object.getPrototypeOf(AsideGesture.prototype), 'constructor', this).call(this, contentElement, {
            direction: aside.side === 'left' || aside.side === 'right' ? 'x' : 'y',
            edge: aside.side,
            threshold: 75
        });
        this.aside = aside;
        this.slideElement = contentElement;
        this.listen();
        var contentGesture = new AsideTargetGesture(aside);
        contentGesture.listen();
    }

    _inherits(AsideGesture, _SlideEdgeGesture2);

    _createClass(AsideGesture, [{
        key: 'canStart',
        value: function canStart(ev) {
            // Only restrict edges if the aside is closed
            return this.aside.isOpen ? true : _get(Object.getPrototypeOf(AsideGesture.prototype), 'canStart', this).call(this, ev);
        }
    }, {
        key: 'onSlideBeforeStart',

        // Set CSS, then wait one frame for it to apply before sliding starts
        value: function onSlideBeforeStart(slide, ev) {
            this.aside.setSliding(true);
            this.aside.setChanging(true);
            return new Promise(function (resolve) {
                requestAnimationFrame(resolve);
            });
        }
    }, {
        key: 'onSlide',
        value: function onSlide(slide, ev) {
            this.aside.setOpenAmt(slide.distance / slide.max);
            this.aside.setTransform('translate3d(' + slide.distance + 'px,0,0)');
        }
    }, {
        key: 'onSlideEnd',
        value: function onSlideEnd(slide, ev) {
            this.aside.setTransform('');
            this.aside.setSliding(false);
            if (Math.abs(ev.gesture.velocityX) > 0.2 || Math.abs(slide.delta) > Math.abs(slide.max) * 0.5) {
                this.aside.setOpen(!this.aside.isOpen);
            }
        }
    }, {
        key: 'getElementStartPos',
        value: function getElementStartPos(slide, ev) {
            return this.aside.isOpen ? slide.max : slide.min;
        }
    }, {
        key: 'getSlideBoundaries',
        value: function getSlideBoundaries() {
            return {
                min: 0,
                max: this.aside.width()
            };
        }
    }]);

    return AsideGesture;
})(_ionicGesturesSlideEdgeGesture.SlideEdgeGesture);

var LeftAsideGesture = (function (_AsideGesture) {
    function LeftAsideGesture() {
        _classCallCheck(this, LeftAsideGesture);

        _get(Object.getPrototypeOf(LeftAsideGesture.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(LeftAsideGesture, _AsideGesture);

    return LeftAsideGesture;
})(AsideGesture);

exports.LeftAsideGesture = LeftAsideGesture;

var RightAsideGesture = (function (_LeftAsideGesture) {
    function RightAsideGesture() {
        _classCallCheck(this, RightAsideGesture);

        _get(Object.getPrototypeOf(RightAsideGesture.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(RightAsideGesture, _LeftAsideGesture);

    _createClass(RightAsideGesture, [{
        key: 'getElementStartPos',
        value: function getElementStartPos(slide, ev) {
            return this.aside.isOpen ? slide.min : slide.max;
        }
    }, {
        key: 'getSlideBoundaries',
        value: function getSlideBoundaries() {
            return {
                min: -this.aside.width(),
                max: 0
            };
        }
    }]);

    return RightAsideGesture;
})(LeftAsideGesture);

exports.RightAsideGesture = RightAsideGesture;

var TopAsideGesture = (function (_AsideGesture2) {
    function TopAsideGesture() {
        _classCallCheck(this, TopAsideGesture);

        _get(Object.getPrototypeOf(TopAsideGesture.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(TopAsideGesture, _AsideGesture2);

    _createClass(TopAsideGesture, [{
        key: 'onSlide',
        value: function onSlide(slide, ev) {
            this.aside.setTransform('translate3d(0,' + slide.distance + 'px,0)');
        }
    }, {
        key: 'getSlideBoundaries',
        value: function getSlideBoundaries() {
            return {
                min: 0,
                max: this.aside.height()
            };
        }
    }]);

    return TopAsideGesture;
})(AsideGesture);

exports.TopAsideGesture = TopAsideGesture;

var BottomAsideGesture = (function (_TopAsideGesture) {
    function BottomAsideGesture() {
        _classCallCheck(this, BottomAsideGesture);

        _get(Object.getPrototypeOf(BottomAsideGesture.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(BottomAsideGesture, _TopAsideGesture);

    _createClass(BottomAsideGesture, [{
        key: 'getElementStartPos',
        value: function getElementStartPos(slide, ev) {
            return this.aside.isOpen ? slide.min : slide.max;
        }
    }, {
        key: 'getSlideBoundaries',
        value: function getSlideBoundaries() {
            return {
                min: -this.aside.height(),
                max: 0
            };
        }
    }]);

    return BottomAsideGesture;
})(TopAsideGesture);

exports.BottomAsideGesture = BottomAsideGesture;