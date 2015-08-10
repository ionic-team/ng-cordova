'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _ionicGesturesSlideGesture = require('ionic/gestures/slide-gesture');

var _ionicUtil = require('ionic/util');

var util = _interopRequireWildcard(_ionicUtil);

var SlideEdgeGesture = (function (_SlideGesture) {
    function SlideEdgeGesture(element) {
        var opts = arguments[1] === undefined ? {} : arguments[1];

        _classCallCheck(this, SlideEdgeGesture);

        util.defaults(opts, {
            edge: 'left',
            threshold: 50
        });
        _get(Object.getPrototypeOf(SlideEdgeGesture.prototype), 'constructor', this).call(this, element, opts);
        // Can check corners through use of eg 'left top'
        this.edges = opts.edge.split(' ');
        this.threshold = opts.threshold;
    }

    _inherits(SlideEdgeGesture, _SlideGesture);

    _createClass(SlideEdgeGesture, [{
        key: 'canStart',
        value: function canStart(ev) {
            var _this = this;

            this._containerRect = this.getContainerDimensions();
            return this.edges.every(function (edge) {
                return _this._checkEdge(edge, ev.gesture.center);
            });
        }
    }, {
        key: 'getContainerDimensions',
        value: function getContainerDimensions() {
            return {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    }, {
        key: '_checkEdge',
        value: function _checkEdge(edge, pos) {
            switch (edge) {
                case 'left':
                    return pos.x <= this._containerRect.left + this.threshold;
                case 'right':
                    return pos.x >= this._containerRect.width - this.threshold;
                case 'top':
                    return pos.y <= this._containerRect.top + this.threshold;
                case 'bottom':
                    return pos.y >= this._containerRect.height - this.threshold;
            }
        }
    }]);

    return SlideEdgeGesture;
})(_ionicGesturesSlideGesture.SlideGesture);

exports.SlideEdgeGesture = SlideEdgeGesture;