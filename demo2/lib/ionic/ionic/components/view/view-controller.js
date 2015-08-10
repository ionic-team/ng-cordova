'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x7, _x8, _x9) { var _again = true; _function: while (_again) { var object = _x7, property = _x8, receiver = _x9; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x7 = parent; _x8 = property; _x9 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _angular2Angular2 = require('angular2/angular2');

var _angular2SrcCoreCompilerDynamic_component_loader = require('angular2/src/core/compiler/dynamic_component_loader');

var _angular2SrcCoreCompilerView_manager = require('angular2/src/core/compiler/view_manager');

var _ion = require('../ion');

var _configConfig = require('../../config/config');

var _appApp = require('../app/app');

var _routingRouter = require('../../routing/router');

var _viewItem = require('./view-item');

var _navNavController = require('../nav/nav-controller');

var _navPane = require('../nav/pane');

var _transitionsTransition = require('../../transitions/transition');

var _utilClickBlock = require('../../util/click-block');

var _ionicUtil = require('ionic/util');

var util = _interopRequireWildcard(_ionicUtil);

var ViewController = (function (_Ion) {
    function ViewController(parentViewCtrl, injector, elementRef) {
        _classCallCheck(this, ViewController);

        var config = injector.get(_configConfig.IonicConfig);
        _get(Object.getPrototypeOf(ViewController.prototype), 'constructor', this).call(this, elementRef, config);
        this.parent = parentViewCtrl;
        this.compiler = injector.get(_angular2Angular2.Compiler);
        this.loader = injector.get(_angular2SrcCoreCompilerDynamic_component_loader.DynamicComponentLoader);
        this.viewMngr = injector.get(_angular2SrcCoreCompilerView_manager.AppViewManager);
        this.router = injector.get(_routingRouter.IonicRouter);
        this.app = injector.get(_appApp.IonicApp);
        this.config = config;
        this.router.addViewController(this);
        this.items = [];
        this.panes = new _navPane.PaneController(this);
        this.sbTransition = null;
        this.sbActive = false;
        this.sbEnabled = true;
        this.id = ++ctrlIds;
        this._ids = -1;
        // build a new injector for child ViewItems to use
        this.bindings = _angular2Angular2.Injector.resolve([(0, _angular2Angular2.bind)(ViewController).toValue(this), (0, _angular2Angular2.bind)(_navNavController.NavController).toValue(new _navNavController.NavController(this))]);
    }

    _inherits(ViewController, _Ion);

    _createClass(ViewController, [{
        key: 'push',
        value: function push(component) {
            var params = arguments[1] === undefined ? {} : arguments[1];
            var opts = arguments[2] === undefined ? {} : arguments[2];

            if (!component || this.isTransitioning()) {
                return Promise.reject();
            }
            var resolve = undefined;
            var promise = new Promise(function (res) {
                resolve = res;
            });
            // do not animate if this is the first in the stack
            if (!this.items.length) {
                opts.animation = 'none';
            }
            // default the direction to "forward"
            opts.direction = opts.direction || 'forward';
            // the active item is going to be the leaving one (if one exists)
            var leavingItem = this.getActive() || new _viewItem.ViewItem();
            leavingItem.shouldCache = util.isBoolean(opts.cacheLeavingItem) ? opts.cacheLeavingItem : true;
            leavingItem.shouldDestroy = !leavingItem.shouldCache;
            if (leavingItem.shouldDestroy) {
                leavingItem.willUnload();
            }
            // create a new ViewItem
            var enteringItem = new _viewItem.ViewItem(this, component, params);
            // add the item to the stack
            this.add(enteringItem);
            // notify app of the state change
            this.app.stateChange('push', enteringItem);
            // start the transition
            this.transition(enteringItem, leavingItem, opts, function () {
                resolve();
            });
            return promise;
        }
    }, {
        key: 'pop',
        value: function pop() {
            var opts = arguments[0] === undefined ? {} : arguments[0];

            if (this.isTransitioning() || this.items.length < 2) {
                return Promise.reject();
            }
            var resolve = undefined;
            var promise = new Promise(function (res) {
                resolve = res;
            });
            // default the direction to "back"
            opts.direction = opts.direction || 'back';
            // get the active item and set that it is staged to be leaving
            // was probably the one popped from the stack
            var leavingItem = this.getActive() || new _viewItem.ViewItem();
            leavingItem.shouldCache = util.isBoolean(opts.cacheLeavingItem) ? opts.cacheLeavingItem : false;
            leavingItem.shouldDestroy = !leavingItem.shouldCache;
            if (leavingItem.shouldDestroy) {
                leavingItem.willUnload();
            }
            // the entering item is now the new last item
            // Note: we might not have an entering item if this is the
            // only item on the history stack.
            var enteringItem = this.getPrevious(leavingItem);
            if (enteringItem) {
                // notify app of the state change
                this.app.stateChange('pop', enteringItem);
                // start the transition
                this.transition(enteringItem, leavingItem, opts, function () {
                    // transition completed, destroy the leaving item
                    resolve();
                });
            } else {
                this.transitionComplete();
                resolve();
            }
            return promise;
        }
    }, {
        key: 'setItems',

        /**
         * Set the item stack to reflect the given component classes.
         */
        value: function setItems(components) {
            var opts = arguments[1] === undefined ? {} : arguments[1];

            if (!components || !components.length) {
                return Promise.resolve();
            }
            this.app.stateClear();
            // if animate has not been set then default to false
            opts.animate = opts.animate || false;
            // ensure leaving items are not cached, and should be destroyed
            opts.cacheLeavingItem = false;
            // get the items to auto remove without having to do a transiton for each
            // the last item (the currently active one) will do a normal transition out
            if (this.items.length > 1) {
                var autoRemoveItems = this.items.slice(0, this.items.length - 1);
                for (var i = 0; i < autoRemoveItems.length; i++) {
                    autoRemoveItems[i].shouldDestroy = true;
                    autoRemoveItems[i].shouldCache = false;
                    autoRemoveItems[i].willUnload();
                }
            }
            var component = null;
            var viewItem = null;
            // create the ViewItems that go before the new active ViewItem in the stack
            // but the previous views won't should render yet
            if (components.length > 1) {
                var newBeforeItems = components.slice(0, components.length - 1);
                for (var j = 0; j < newBeforeItems.length; j++) {
                    component = newBeforeItems[j];
                    if (component) {
                        viewItem = new _viewItem.ViewItem(this, component.component || component, component.params);
                        viewItem.state = CACHED_STATE;
                        viewItem.shouldDestroy = false;
                        viewItem.shouldCache = false;
                        // add the item to the stack
                        this.add(viewItem);
                    }
                }
            }
            // get the component that will become the active item
            // it'll be the last one in the given components array
            component = components[components.length - 1];
            // transition the leaving and entering
            return this.push(component && component.component || component, component && component.params, opts);
        }
    }, {
        key: 'setRoot',
        value: function setRoot(component) {
            var params = arguments[1] === undefined ? {} : arguments[1];
            var opts = arguments[2] === undefined ? {} : arguments[2];

            return this.setItems([{
                component: component,
                params: params
            }], opts);
        }
    }, {
        key: 'transition',
        value: function transition(enteringItem, leavingItem, opts, callback) {
            var _this = this;

            if (!enteringItem || enteringItem === leavingItem) {
                return callback();
            }
            if (opts.animate === false) {
                opts.animation = 'none';
            } else if (!opts.animation) {
                opts.animation = this.config.setting('viewTransition');
            }
            opts.animate = opts.animation !== 'none';
            // wait for the new item to complete setup
            enteringItem.stage(function () {
                enteringItem.shouldDestroy = false;
                enteringItem.shouldCache = false;
                enteringItem.willEnter();
                leavingItem.willLeave();
                // set that the new item pushed on the stack is staged to be entering/leaving
                // staged state is important for the transition to find the correct item
                enteringItem.state = STAGED_ENTERING_STATE;
                leavingItem.state = STAGED_LEAVING_STATE;
                // init the transition animation
                var transAnimation = _transitionsTransition.Transition.create(_this, opts);
                if (!opts.animate) {
                    // force it to not animate the elements, just apply the "to" styles
                    transAnimation.duration(0);
                }
                var duration = transAnimation.duration();
                if (duration > 64) {
                    // block any clicks during the transition and provide a
                    // fallback to remove the clickblock if something goes wrong
                    (0, _utilClickBlock.ClickBlock)(true, duration + 200);
                }
                // start the transition
                transAnimation.play().then(function () {
                    // transition has completed, update each item's state
                    enteringItem.state = ACTIVE_STATE;
                    leavingItem.state = CACHED_STATE;
                    // dispose any items that shouldn't stay around
                    transAnimation.dispose();
                    enteringItem.didEnter();
                    leavingItem.didLeave();
                    // all done!
                    _this.transitionComplete();
                    callback();
                });
            });
        }
    }, {
        key: 'swipeBackStart',
        value: function swipeBackStart() {
            var _this2 = this;

            if (this.isTransitioning() || this.items.length < 2) {
                return;
            }
            this.sbActive = true;
            this.sbResolve = null;
            // default the direction to "back"
            var opts = {
                direction: 'back'
            };
            // get the active item and set that it is staged to be leaving
            // was probably the one popped from the stack
            var leavingItem = this.getActive() || new _viewItem.ViewItem();
            leavingItem.shouldDestroy = true;
            leavingItem.shouldCache = false;
            leavingItem.willLeave();
            leavingItem.willUnload();
            // the entering item is now the new last item
            var enteringItem = this.getPrevious(leavingItem);
            enteringItem.shouldDestroy = false;
            enteringItem.shouldCache = false;
            enteringItem.willEnter();
            // wait for the new item to complete setup
            enteringItem.stage(function () {
                // set that the new item pushed on the stack is staged to be entering/leaving
                // staged state is important for the transition to find the correct item
                enteringItem.state = STAGED_ENTERING_STATE;
                leavingItem.state = STAGED_LEAVING_STATE;
                // init the transition animation
                _this2.sbTransition = _transitionsTransition.Transition.create(_this2, opts);
                _this2.sbTransition.easing('linear');
                _this2.sbTransition.stage();
                var swipeBackPromise = new Promise(function (res) {
                    _this2.sbResolve = res;
                });
                swipeBackPromise.then(function (completeSwipeBack) {
                    if (completeSwipeBack) {
                        // swipe back has completed, update each item's state
                        enteringItem.state = ACTIVE_STATE;
                        leavingItem.state = CACHED_STATE;
                        enteringItem.didEnter();
                        leavingItem.didLeave();
                        // notify app of the state change
                        _this2.app.stateChange('pop', enteringItem);
                    } else {
                        // cancelled the swipe back, return items to original state
                        leavingItem.state = ACTIVE_STATE;
                        enteringItem.state = CACHED_STATE;
                        leavingItem.willEnter();
                        leavingItem.didEnter();
                        enteringItem.didLeave();
                        leavingItem.shouldDestroy = false;
                        enteringItem.shouldDestroy = false;
                    }
                    // all done!
                    _this2.transitionComplete();
                });
            });
        }
    }, {
        key: 'swipeBackProgress',
        value: function swipeBackProgress(progress) {
            if (this.sbTransition) {
                (0, _utilClickBlock.ClickBlock)(true, 4000);
                this.sbTransition.progress(Math.min(1, Math.max(0, progress)));
            }
        }
    }, {
        key: 'swipeBackEnd',
        value: function swipeBackEnd(completeSwipeBack, progress, playbackRate) {
            var _this3 = this;

            // to reverse the animation use a negative playbackRate
            if (this.sbTransition && this.sbActive) {
                this.sbActive = false;
                if (progress <= 0) {
                    this.swipeBackProgress(0.0001);
                } else if (progress >= 1) {
                    this.swipeBackProgress(0.9999);
                }
                if (!completeSwipeBack) {
                    playbackRate = playbackRate * -1;
                }
                this.sbTransition.playbackRate(playbackRate);
                this.sbTransition.play().then(function () {
                    _this3.sbResolve && _this3.sbResolve(completeSwipeBack);
                    _this3.sbTransition && _this3.sbTransition.dispose();
                    _this3.sbResolve = _this3.sbTransition = null;
                });
            }
        }
    }, {
        key: 'isSwipeBackEnabled',
        value: function isSwipeBackEnabled(val) {
            if (arguments.length) {
                this.sbEnabled = !!val;
            }
            return this.sbEnabled;
        }
    }, {
        key: 'canSwipeBack',
        value: function canSwipeBack() {
            if (this.sbEnabled) {
                var activeItem = this.getActive();
                if (activeItem) {
                    return activeItem.enableBack();
                }
            }
            return false;
        }
    }, {
        key: 'transitionComplete',
        value: function transitionComplete() {
            var _this4 = this;

            var destroys = [];
            this.items.forEach(function (item) {
                if (item) {
                    if (item.shouldDestroy) {
                        destroys.push(item);
                    } else if (item.state === CACHED_STATE && item.shouldCache) {
                        item.shouldCache = false;
                    }
                }
            });
            destroys.forEach(function (item) {
                _this4.remove(item);
                item.destroy();
            });
            // allow clicks again
            (0, _utilClickBlock.ClickBlock)(false);
        }
    }, {
        key: 'isTransitioning',
        value: function isTransitioning() {
            var state = undefined;
            for (var i = 0, ii = this.items.length; i < ii; i++) {
                state = this.items[i].state;
                if (state === STAGED_ENTERING_STATE || state === STAGED_LEAVING_STATE) {
                    return true;
                }
            }
            return false;
        }
    }, {
        key: 'getActive',
        value: function getActive() {
            for (var i = 0, ii = this.items.length; i < ii; i++) {
                if (this.items[i].state === ACTIVE_STATE) {
                    return this.items[i];
                }
            }
            return null;
        }
    }, {
        key: 'getByInstance',
        value: function getByInstance(instance) {
            if (instance) {
                for (var i = 0, ii = this.items.length; i < ii; i++) {
                    if (this.items[i].instance === instance) {
                        return this.items[i];
                    }
                }
            }
            return null;
        }
    }, {
        key: 'getByIndex',
        value: function getByIndex(index) {
            if (index < this.items.length && index > -1) {
                return this.items[index];
            }
            return null;
        }
    }, {
        key: 'getPrevious',
        value: function getPrevious(item) {
            if (item) {
                return this.items[this.items.indexOf(item) - 1];
            }
            return null;
        }
    }, {
        key: 'getStagedEnteringItem',
        value: function getStagedEnteringItem() {
            for (var i = 0, ii = this.items.length; i < ii; i++) {
                if (this.items[i].state === STAGED_ENTERING_STATE) {
                    return this.items[i];
                }
            }
            return null;
        }
    }, {
        key: 'getStagedLeavingItem',
        value: function getStagedLeavingItem() {
            for (var i = 0, ii = this.items.length; i < ii; i++) {
                if (this.items[i].state === STAGED_LEAVING_STATE) {
                    return this.items[i];
                }
            }
            return null;
        }
    }, {
        key: 'navbarViewContainer',
        value: function navbarViewContainer(nbContainer) {
            if (nbContainer) {
                this._nbContainer = nbContainer;
            }
            if (this._nbContainer) {
                return this._nbContainer;
            }
            if (this.parent) {
                return this.parent.navbarViewContainer();
            }
        }
    }, {
        key: 'anchorElementRef',
        value: function anchorElementRef() {
            if (arguments.length) {
                this._anchorER = arguments[0];
            }
            return this._anchorER;
        }
    }, {
        key: 'anchorViewContainerRef',
        value: function anchorViewContainerRef() {
            if (arguments.length) {
                this._anchorVC = arguments[0];
            }
            return this._anchorVC;
        }
    }, {
        key: 'childNavbar',
        value: function childNavbar() {
            if (arguments.length) {
                this._childNavbar = arguments[0];
            }
            return this._childNavbar;
        }
    }, {
        key: 'add',
        value: function add(item) {
            item.id = this.id + '-' + ++this._ids;
            this.items.push(item);
        }
    }, {
        key: 'remove',
        value: function remove(itemOrIndex) {
            util.array.remove(this.items, itemOrIndex);
        }
    }, {
        key: 'indexOf',
        value: function indexOf(item) {
            return this.items.indexOf(item);
        }
    }, {
        key: 'length',
        value: function length() {
            return this.items.length;
        }
    }, {
        key: 'instances',
        value: function instances() {
            var instances = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    if (item.instance) {
                        instances.push(item.instance);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return instances;
        }
    }, {
        key: 'isActive',
        value: function isActive(item) {
            return item && item.state === ACTIVE_STATE;
        }
    }, {
        key: 'isStagedEntering',
        value: function isStagedEntering(item) {
            return item && item.state === STAGED_ENTERING_STATE;
        }
    }]);

    return ViewController;
})(_ion.Ion);

exports.ViewController = ViewController;

var ACTIVE_STATE = 1;
var CACHED_STATE = 2;
var STAGED_ENTERING_STATE = 3;
var STAGED_LEAVING_STATE = 4;
var ctrlIds = -1;