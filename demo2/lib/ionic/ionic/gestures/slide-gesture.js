'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _ionicGesturesDragGesture = require('ionic/gestures/drag-gesture');

var _ionicUtil = require('ionic/util');

var util = _interopRequireWildcard(_ionicUtil);

var SlideGesture = (function (_DragGesture) {
    function SlideGesture(element) {
        var opts = arguments[1] === undefined ? {} : arguments[1];

        _classCallCheck(this, SlideGesture);

        _get(Object.getPrototypeOf(SlideGesture.prototype), 'constructor', this).call(this, element, opts);
        this.element = element;
    }

    _inherits(SlideGesture, _DragGesture);

    _createClass(SlideGesture, [{
        key: 'getSlideBoundaries',

        /*
         * Get the min and max for the slide. pageX/pageY.
         * Only called on dragstart.
         */
        value: function getSlideBoundaries(slide, ev) {
            return {
                min: 0,
                max: this.element.offsetWidth
            };
        }
    }, {
        key: 'getElementStartPos',

        /*
         * Get the element's pos when the drag starts.
         * For example, an open side menu starts at 100% and a closed
         * sidemenu starts at 0%.
         */
        value: function getElementStartPos(slide, ev) {
            return 0;
        }
    }, {
        key: 'canStart',
        value: function canStart() {
            return true;
        }
    }, {
        key: 'onDragStart',
        value: function onDragStart(ev) {
            var _this = this;

            if (!this.canStart(ev)) return false;
            this.slide = {};
            var promise = this.onSlideBeforeStart(this.slide, ev) || Promise.resolve();
            promise.then(function () {
                var _getSlideBoundaries = _this.getSlideBoundaries(_this.slide, ev);

                var min = _getSlideBoundaries.min;
                var max = _getSlideBoundaries.max;

                _this.slide.min = min;
                _this.slide.max = max;
                _this.slide.elementStartPos = _this.getElementStartPos(_this.slide, ev);
                _this.slide.pointerStartPos = ev.gesture.center[_this.direction];
                _this.slide.started = true;
                _this.onSlideStart(_this.slide, ev);
            })['catch'](function () {
                _this.slide = null;
            });
        }
    }, {
        key: 'onDrag',
        value: function onDrag(ev) {
            if (!this.slide || !this.slide.started) return;
            this.slide.pos = ev.gesture.center[this.direction];
            this.slide.distance = util.clamp(this.slide.min, this.slide.pos - this.slide.pointerStartPos + this.slide.elementStartPos, this.slide.max);
            this.slide.delta = this.slide.pos - this.slide.pointerStartPos;
            this.onSlide(this.slide, ev);
        }
    }, {
        key: 'onDragEnd',
        value: function onDragEnd(ev) {
            if (!this.slide || !this.slide.started) return;
            this.onSlideEnd(this.slide, ev);
            this.slide = null;
        }
    }, {
        key: 'onSlideBeforeStart',
        value: function onSlideBeforeStart() {}
    }, {
        key: 'onSlideStart',
        value: function onSlideStart() {}
    }, {
        key: 'onSlide',
        value: function onSlide() {}
    }, {
        key: 'onSlideEnd',
        value: function onSlideEnd() {}
    }]);

    return SlideGesture;
})(_ionicGesturesDragGesture.DragGesture);

exports.SlideGesture = SlideGesture;