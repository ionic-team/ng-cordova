'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ion = require('../ion');

var _utilDom = require('../../util/dom');

var dom = _interopRequireWildcard(_utilDom);

var inputRegistry = [];
var itemRegistry = [];
var inputItemIds = -1;
var activeInput = null;
var lastInput = null;
// Input element (not the container)

var IonInput = (function () {
    function IonInput(elementRef, app, config, scrollView) {
        _classCallCheck(this, IonInput);

        this.elementRef = elementRef;
        this.app = app;
        this.scrollView = scrollView;
        this.scrollAssist = config.setting('keyboardScrollAssist');
        inputRegistry.push(this);
    }

    _createClass(IonInput, [{
        key: 'hasFocus',
        value: function hasFocus() {
            return dom.hasFocus(this.elementRef);
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.setFocus();
        }
    }, {
        key: 'setFocus',
        value: function setFocus() {
            // TODO: How do you do this w/ NG2?
            this.elementRef.nativeElement.focus();
        }
    }, {
        key: 'setFocusHolder',
        value: function setFocusHolder(type) {
            var focusHolder = this.app.focusHolder();
            focusHolder && focusHolder.setFocusHolder(type);
        }
    }, {
        key: 'isActiveInput',
        value: function isActiveInput(shouldBeActive) {
            if (shouldBeActive) {
                if (activeInput && activeInput !== lastInput) {
                    lastInput = activeInput;
                }
                activeInput = this;
                var focusHolder = this.app.focusHolder();
                focusHolder && focusHolder.setActiveInput(activeInput);
            } else if (activeInput === this) {
                lastInput = activeInput;
                activeInput = null;
            }
        }
    }, {
        key: 'sibling',
        value: function sibling(inc) {
            var index = inputRegistry.indexOf(this);
            if (index > -1) {
                return inputRegistry[index + inc];
            }
        }
    }], [{
        key: 'focusPrevious',
        value: function focusPrevious() {
            this.focusMove(-1);
        }
    }, {
        key: 'focusNext',
        value: function focusNext() {
            this.focusMove(1);
        }
    }, {
        key: 'focusMove',
        value: function focusMove(inc) {
            var input = activeInput || lastInput;
            if (input) {
                var siblingInput = input.sibling(inc);
                siblingInput && siblingInput.focus();
            }
        }
    }, {
        key: 'clearTabIndexes',
        value: function clearTabIndexes() {
            for (var i = 0; i < inputRegistry.length; i++) {
                inputRegistry[i].tabIndex = -1;
            }
        }
    }]);

    return IonInput;
})();

exports.IonInput = IonInput;

// Container element for the label and input element

var IonInputItem = (function (_Ion) {
    function IonInputItem(elementRef, ionicConfig) {
        _classCallCheck(this, IonInputItem);

        _get(Object.getPrototypeOf(IonInputItem.prototype), 'constructor', this).call(this, elementRef, ionicConfig);
        this.id = ++inputItemIds;
        itemRegistry.push(this);
    }

    _inherits(IonInputItem, _Ion);

    _createClass(IonInputItem, [{
        key: 'onInit',
        value: function onInit() {
            _get(Object.getPrototypeOf(IonInputItem.prototype), 'onInit', this).call(this);
            if (this.input && this.label) {
                this.input.id = this.input.id || 'input-' + this.id;
                this.label.labelFor = this.input.id;
            }
        }
    }, {
        key: 'registerInput',
        value: function registerInput(input) {
            this.input = input;
        }
    }, {
        key: 'registerLabel',
        value: function registerLabel(label) {
            this.label = label;
        }
    }]);

    return IonInputItem;
})(_ion.Ion);

exports.IonInputItem = IonInputItem;