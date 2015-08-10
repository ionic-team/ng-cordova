'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ionicUtil = require('ionic/util');

var util = _interopRequireWildcard(_ionicUtil);

/**
 * Base class for all Ionic components. Exposes some common functionality
 * that all Ionic components need, such as accessing underlying native elements and
 * sending/receiving app-level events.
 */

var Ion = (function () {
    function Ion(elementRef, config) {
        _classCallCheck(this, Ion);

        this.elementRef = elementRef;
        this.config = config;
        this.clsMode = config.setting('mode');
    }

    _createClass(Ion, [{
        key: 'onInit',
        value: function onInit() {
            var cls = this.constructor;
            if (cls.defaultProperties && this.config) {
                for (var prop in cls.defaultProperties) {
                    // Priority:
                    // ---------
                    // 1) Value set from within constructor
                    // 2) Value set from the host element's attribute
                    // 3) Value set by the users global config
                    // 4) Value set by the default mode/platform config
                    // 5) Value set from the component's default
                    if (this[prop]) {
                        // this property has already been set on the instance
                        // could be from the user setting the element's attribute
                        // or from the user setting it within the constructor
                        continue;
                    }
                    // get the property values from a global user/platform config
                    var configVal = this.config.setting(prop);
                    if (configVal) {
                        this[prop] = configVal;
                        continue;
                    }
                    // wasn't set yet, so go with property's default value
                    this[prop] = cls.defaultProperties[prop];
                }
            }
            this.onIonInit && this.onIonInit();
        }
    }, {
        key: 'getDelegate',
        value: function getDelegate(delegateName) {
            var cls = this.constructor;
            if (cls.delegates) {
                var cases = cls.delegates[delegateName] || [];
                for (var i = 0; i < cases.length; i++) {
                    var delegateCase = cases[i];
                    if (util.isArray(delegateCase)) {
                        var _delegateCase = _slicedToArray(delegateCase, 2);

                        var check = _delegateCase[0];
                        var DelegateConstructor = _delegateCase[1];

                        if (check(this)) {
                            return new DelegateConstructor(this);
                        }
                    } else {
                        return new delegateCase(this);
                    }
                }
            }
        }
    }, {
        key: 'getElementRef',
        value: function getElementRef() {
            return this.elementRef;
        }
    }, {
        key: 'getNativeElement',
        value: function getNativeElement() {
            return this.elementRef.nativeElement;
        }
    }, {
        key: 'width',
        value: function width() {
            return this.getNativeElement().offsetWidth;
        }
    }, {
        key: 'height',
        value: function height() {
            return this.getNativeElement().offsetHeight;
        }
    }]);

    return Ion;
})();

exports.Ion = Ion;