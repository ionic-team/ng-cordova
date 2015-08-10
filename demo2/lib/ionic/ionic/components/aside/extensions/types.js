'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ionicUtilDom = require('ionic/util/dom');

// TODO use setters instead of direct dom manipulation
var asideManipulator = {
    setSliding: function setSliding(sliding) {
        this.aside.getNativeElement().classList[sliding ? 'add' : 'remove']('no-transition');
    },
    setOpen: function setOpen(open) {
        this.aside.getNativeElement().classList[open ? 'add' : 'remove']('open');
    },
    setTransform: function setTransform(t) {
        this.aside.getNativeElement().style[_ionicUtilDom.CSS.transform] = t;
    }
};
var contentManipulator = {
    setSliding: function setSliding(sliding) {
        this.aside.contentElement.classList[sliding ? 'add' : 'remove']('no-transition');
    },
    setOpen: function setOpen(open) {
        this.aside.contentElement.classList[open ? 'add' : 'remove']('aside-open-' + this.aside.side);
    },
    setTransform: function setTransform(t) {
        this.aside.contentElement.style[_ionicUtilDom.CSS.transform] = t;
    }
};

var AsideType = function AsideType(aside) {
    _classCallCheck(this, AsideType);

    this.aside = aside;
    //FIXME(ajoslin): have to wait for for bindings to apply in a component
    setTimeout(function () {
        aside.contentElement.classList.add('aside-content');
    });
};

exports.AsideType = AsideType;

var AsideTypeOverlay = (function (_AsideType) {
    function AsideTypeOverlay() {
        _classCallCheck(this, AsideTypeOverlay);

        _get(Object.getPrototypeOf(AsideTypeOverlay.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(AsideTypeOverlay, _AsideType);

    _createClass(AsideTypeOverlay, [{
        key: 'setSliding',
        value: function setSliding(sliding) {
            asideManipulator.setSliding.call(this, sliding);
        }
    }, {
        key: 'setOpen',
        value: function setOpen(open) {
            asideManipulator.setOpen.call(this, open);
        }
    }, {
        key: 'setTransform',
        value: function setTransform(t) {
            asideManipulator.setTransform.call(this, t);
        }
    }]);

    return AsideTypeOverlay;
})(AsideType);

exports.AsideTypeOverlay = AsideTypeOverlay;

var AsideTypePush = (function (_AsideType2) {
    function AsideTypePush() {
        _classCallCheck(this, AsideTypePush);

        _get(Object.getPrototypeOf(AsideTypePush.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(AsideTypePush, _AsideType2);

    _createClass(AsideTypePush, [{
        key: 'setSliding',
        value: function setSliding(sliding) {
            asideManipulator.setSliding.call(this, sliding);
            contentManipulator.setSliding.call(this, sliding);
        }
    }, {
        key: 'setOpen',
        value: function setOpen(open) {
            asideManipulator.setOpen.call(this, open);
            contentManipulator.setOpen.call(this, open);
        }
    }, {
        key: 'setTransform',
        value: function setTransform(t) {
            asideManipulator.setTransform.call(this, t);
            contentManipulator.setTransform.call(this, t);
        }
    }]);

    return AsideTypePush;
})(AsideType);

exports.AsideTypePush = AsideTypePush;

var AsideTypeReveal = (function (_AsideType3) {
    function AsideTypeReveal() {
        _classCallCheck(this, AsideTypeReveal);

        _get(Object.getPrototypeOf(AsideTypeReveal.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(AsideTypeReveal, _AsideType3);

    _createClass(AsideTypeReveal, [{
        key: 'setSliding',
        value: function setSliding(sliding) {
            contentManipulator.setSliding.call(this, sliding);
        }
    }, {
        key: 'setOpen',
        value: function setOpen(sliding) {
            contentManipulator.setOpen.call(this, sliding);
        }
    }, {
        key: 'setTransform',
        value: function setTransform(t) {
            contentManipulator.setTransform.call(this, t);
        }
    }]);

    return AsideTypeReveal;
})(AsideType);

exports.AsideTypeReveal = AsideTypeReveal;