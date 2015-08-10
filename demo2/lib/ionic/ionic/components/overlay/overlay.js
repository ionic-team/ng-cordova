'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular2Angular2 = require('angular2/angular2');

var _angular2SrcCoreCompilerElement_injector = require('angular2/src/core/compiler/element_injector');

var _animationsAnimation = require('../../animations/animation');

var _utilClickBlock = require('../../util/click-block');

var _ionicUtil = require('ionic/util');

var util = _interopRequireWildcard(_ionicUtil);

var Overlay = (function () {
    function Overlay(app, config) {
        _classCallCheck(this, Overlay);

        this.app = app;
        this.mode = config.setting('mode');
    }

    _createClass(Overlay, [{
        key: 'create',
        value: function create(overlayType, componentType) {
            var _this = this;

            var opts = arguments[2] === undefined ? {} : arguments[2];
            var context = arguments[3] === undefined ? null : arguments[3];

            return new Promise(function (resolve, reject) {
                var app = _this.app;
                var annotation = new _angular2Angular2.Component({
                    selector: 'ion-' + overlayType,
                    host: {
                        '[style.z-index]': 'zIndex',
                        'mode': _this.mode,
                        'class': overlayType
                    }
                });
                var overlayComponentType = _angular2SrcCoreCompilerElement_injector.DirectiveBinding.createFromType(componentType, annotation);
                // create a unique token that works as a cache key
                overlayComponentType.token = overlayType + componentType.name;
                app.appendComponent(overlayComponentType).then(function (ref) {
                    var overlayRef = new OverlayRef(app, overlayType, opts, ref, context);
                    overlayRef._open(opts).then(function () {
                        resolve(overlayRef);
                    });
                })['catch'](function (err) {
                    console.error('Overlay appendComponent:', err);
                    reject(err);
                });
            })['catch'](function (err) {
                console.error('Overlay create:', err);
            });
        }
    }, {
        key: 'getByType',
        value: function getByType(overlayType) {
            if (this.app) {
                for (var i = this.app.overlays.length - 1; i >= 0; i--) {
                    if (overlayType === this.app.overlays[i]._type) {
                        return this.app.overlays[i];
                    }
                }
            }
            return null;
        }
    }, {
        key: 'getByHandle',
        value: function getByHandle(handle, overlayType) {
            if (this.app) {
                for (var i = this.app.overlays.length - 1; i >= 0; i--) {
                    if (handle === this.app.overlays[i]._handle && overlayType === this.app.overlays[i]._type) {
                        return this.app.overlays[i];
                    }
                }
            }
            return null;
        }
    }]);

    return Overlay;
})();

exports.Overlay = Overlay;

var OverlayRef = (function () {
    function OverlayRef(app, overlayType, opts, ref, context) {
        var _this2 = this;

        _classCallCheck(this, OverlayRef);

        var overlayInstance = ref && ref.instance;
        if (!overlayInstance) return;
        if (context) {
            util.extend(ref.instance, context);
        }
        this._instance = overlayInstance;
        overlayInstance.viewLoaded && overlayInstance.viewLoaded();
        this.zIndex = ROOT_Z_INDEX;
        for (var i = 0; i < app.overlays.length; i++) {
            if (app.overlays[i].zIndex >= this.zIndex) {
                this.zIndex = app.overlays[i].zIndex + 1;
            }
        }
        overlayInstance.zIndex = this.zIndex;
        overlayInstance.overlayRef = this;
        overlayInstance.close = function (instanceOpts) {
            _this2.close(instanceOpts);
        };
        this._elementRef = ref.location;
        this._type = overlayType;
        this._opts = opts;
        this._handle = opts.handle || this.zIndex;
        this._dispose = function () {
            _this2._instance = null;
            ref.dispose && ref.dispose();
            util.array.remove(app.overlays, _this2);
        };
        app.overlays.push(this);
    }

    _createClass(OverlayRef, [{
        key: 'getElementRef',
        value: function getElementRef() {
            return this._elementRef;
        }
    }, {
        key: '_open',
        value: function _open() {
            var _this3 = this;

            var opts = arguments[0] === undefined ? {} : arguments[0];

            return new Promise(function (resolve) {
                var instance = _this3._instance || {};
                instance.viewWillEnter && instance.viewWillEnter();
                var animationName = opts && opts.animation || _this3._opts.enterAnimation;
                var animation = _animationsAnimation.Animation.create(_this3._elementRef.nativeElement, animationName);
                animation.before.addClass('show-overlay');
                (0, _utilClickBlock.ClickBlock)(true, animation.duration() + 200);
                animation.play().then(function () {
                    (0, _utilClickBlock.ClickBlock)(false);
                    animation.dispose();
                    instance.viewDidEnter && instance.viewDidEnter();
                    resolve();
                });
            })['catch'](function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'close',
        value: function close() {
            var _this4 = this;

            var opts = arguments[0] === undefined ? {} : arguments[0];

            return new Promise(function (resolve) {
                var instance = _this4._instance || {};
                instance.viewWillLeave && instance.viewWillLeave();
                instance.viewWillUnload && instance.viewWillUnload();
                var animationName = opts && opts.animation || _this4._opts.leaveAnimation;
                var animation = _animationsAnimation.Animation.create(_this4._elementRef.nativeElement, animationName);
                animation.after.removeClass('show-overlay');
                (0, _utilClickBlock.ClickBlock)(true, animation.duration() + 200);
                animation.play().then(function () {
                    instance.viewDidLeave && instance.viewDidLeave();
                    instance.viewDidUnload && instance.viewDidUnload();
                    _this4._dispose();
                    (0, _utilClickBlock.ClickBlock)(false);
                    animation.dispose();
                    resolve();
                });
            })['catch'](function (err) {
                console.error(err);
            });
        }
    }]);

    return OverlayRef;
})();

exports.OverlayRef = OverlayRef;

var ROOT_Z_INDEX = 1000;