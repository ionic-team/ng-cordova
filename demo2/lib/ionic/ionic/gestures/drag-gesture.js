'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _ionicGesturesGesture = require('ionic/gestures/gesture');

var _ionicUtil = require('ionic/util');

var util = _interopRequireWildcard(_ionicUtil);

//import Hammer from 'hammer';
/*
 * BUG(ajoslin): HammerJS 2.x does not have an alternative to HammerJS 1.x's
 * dragLockToAxis, so a vertical and horizontal gesture can happen at the same time.
 */

var DragGesture = (function (_Gesture) {
    function DragGesture(element) {
        var opts = arguments[1] === undefined ? {} : arguments[1];

        _classCallCheck(this, DragGesture);

        util.defaults(opts, {});
        _get(Object.getPrototypeOf(DragGesture.prototype), 'constructor', this).call(this, element, opts);
    }

    _inherits(DragGesture, _Gesture);

    _createClass(DragGesture, [{
        key: 'listen',
        value: function listen() {
            var _this = this;

            _get(Object.getPrototypeOf(DragGesture.prototype), 'listen', this).call(this);
            this.on('panstart', function (ev) {
                if (_this.onDragStart(ev) !== false) {
                    _this.dragging = true;
                }
                // ev.stopPropagation();
            });
            this.on('panmove', function (ev) {
                if (!_this.dragging) return;
                if (_this.onDrag(ev) === false) {
                    _this.dragging = false;
                }
                // ev.stopPropagation()
            });
            this.on('panend', function (ev) {
                if (!_this.dragging) return;
                _this.onDragEnd(ev);
                _this.dragging = false;
                // ev.stopPropagation()
            });
        }
    }, {
        key: 'onDrag',
        value: function onDrag() {}
    }, {
        key: 'onDragStart',
        value: function onDragStart() {}
    }, {
        key: 'onDragEnd',
        value: function onDragEnd() {}
    }]);

    return DragGesture;
})(_ionicGesturesGesture.Gesture);

exports.DragGesture = DragGesture;