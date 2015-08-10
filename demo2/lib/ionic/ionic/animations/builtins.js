'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _animation = require('./animation');

var SlideIn = (function (_Animation) {
    function SlideIn(element) {
        _classCallCheck(this, SlideIn);

        _get(Object.getPrototypeOf(SlideIn.prototype), 'constructor', this).call(this, element);
        this.easing('cubic-bezier(0.1,0.7,0.1,1)').duration(400).fromTo('translateY', '100%', '0%');
    }

    _inherits(SlideIn, _Animation);

    return SlideIn;
})(_animation.Animation);

_animation.Animation.register('slide-in', SlideIn);

var SlideOut = (function (_Animation2) {
    function SlideOut(element) {
        _classCallCheck(this, SlideOut);

        _get(Object.getPrototypeOf(SlideOut.prototype), 'constructor', this).call(this, element);
        this.easing('ease-out').duration(250).fromTo('translateY', '0%', '100%');
    }

    _inherits(SlideOut, _Animation2);

    return SlideOut;
})(_animation.Animation);

_animation.Animation.register('slide-out', SlideOut);

var FadeIn = (function (_Animation3) {
    function FadeIn(element) {
        _classCallCheck(this, FadeIn);

        _get(Object.getPrototypeOf(FadeIn.prototype), 'constructor', this).call(this, element);
        this.easing('ease-in').duration(400).fadeIn();
    }

    _inherits(FadeIn, _Animation3);

    return FadeIn;
})(_animation.Animation);

_animation.Animation.register('fade-in', FadeIn);

var FadeOut = (function (_Animation4) {
    function FadeOut(element) {
        _classCallCheck(this, FadeOut);

        _get(Object.getPrototypeOf(FadeOut.prototype), 'constructor', this).call(this, element);
        this.easing('ease-out').duration(250).fadeOut();
    }

    _inherits(FadeOut, _Animation4);

    return FadeOut;
})(_animation.Animation);

_animation.Animation.register('fade-out', FadeOut);