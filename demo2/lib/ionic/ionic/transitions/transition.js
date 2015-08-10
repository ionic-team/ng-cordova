'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _animationsAnimation = require('../animations/animation');

var SHOW_NAVBAR_CSS = 'show-navbar';
var SHOW_VIEW_CSS = 'show-view';
var SHOW_BACK_BUTTON = 'show-back-button';
var TransitionRegistry = {};

var Transition = (function (_Animation) {
    function Transition(nav, opts) {
        _classCallCheck(this, Transition);

        _get(Object.getPrototypeOf(Transition.prototype), 'constructor', this).call(this);
        // get the entering and leaving items
        var enteringItem = this.entering = nav.getStagedEnteringItem();
        var leavingItem = this.leaving = nav.getStagedLeavingItem();
        // create animation for the entering item's "ion-view" element
        this.enteringView = new _animationsAnimation.Animation(enteringItem.viewElementRef());
        this.enteringView.before.addClass(SHOW_VIEW_CSS);
        this.enteringView.onPlay(function () {
            enteringItem.postRender();
        });
        this.add(this.enteringView);
        if (opts.navbar !== false) {
            var enteringNavbar = this.enteringNavbar = new _animationsAnimation.Animation(enteringItem.navbarElement());
            enteringNavbar.before.addClass(SHOW_NAVBAR_CSS);
            if (enteringItem.enableBack()) {
                // only animate in the back button if the entering view has it enabled
                var enteringBackButton = this.enteringBackButton = new _animationsAnimation.Animation(enteringItem.backButtonElement());
                enteringBackButton.before.addClass(SHOW_BACK_BUTTON).fadeIn();
                enteringNavbar.add(enteringBackButton);
            }
            this.enteringTitle = new _animationsAnimation.Animation(enteringItem.titleElement());
            enteringNavbar.add(this.enteringTitle);
            this.add(enteringNavbar);
            this.enteringNavbarItems = new _animationsAnimation.Animation(enteringItem.navbarItemElements());
            this.enteringNavbarItems.fadeIn();
            enteringNavbar.add(this.enteringNavbarItems);
        }
        if (leavingItem) {
            // setup the leaving item if one exists (initial viewing wouldn't have a leaving item)
            this.leavingView = new _animationsAnimation.Animation(leavingItem.viewElementRef());
            this.leavingView.after.removeClass(SHOW_VIEW_CSS);
            var leavingNavbar = this.leavingNavbar = new _animationsAnimation.Animation(leavingItem.navbarElement());
            leavingNavbar.after.removeClass(SHOW_NAVBAR_CSS);
            var leavingBackButton = this.leavingBackButton = new _animationsAnimation.Animation(leavingItem.backButtonElement());
            leavingBackButton.after.removeClass(SHOW_BACK_BUTTON).fadeOut();
            leavingNavbar.add(leavingBackButton);
            this.leavingTitle = new _animationsAnimation.Animation(leavingItem.titleElement());
            leavingNavbar.add(this.leavingTitle);
            this.leavingNavbarItems = new _animationsAnimation.Animation(leavingItem.navbarItemElements());
            this.leavingNavbarItems.fadeOut();
            leavingNavbar.add(this.leavingNavbarItems);
            this.add(this.leavingView, leavingNavbar);
        }
    }

    _inherits(Transition, _Animation);

    _createClass(Transition, [{
        key: 'viewWidth',
        value: function viewWidth() {
            // TODO: MAKE MORE BETTER
            return this._w || (this._w = this.leaving && this.leaving.viewElementRef().nativeElement.offsetWidth);
        }
    }], [{
        key: 'create',

        /*
         STATIC CLASSES
         */
        value: function create(nav) {
            var opts = arguments[1] === undefined ? {} : arguments[1];

            //const name = opts.animation || IonicConfig.global.setting('viewTransition') || 'ios';
            var name = opts.animation || 'ios';
            var TransitionClass = TransitionRegistry[name];
            if (!TransitionClass) {
                // transition wasn't found, default to a 'none' transition
                // which doesn't animate anything, just shows and hides
                TransitionClass = Transition;
            }
            return new TransitionClass(nav, opts);
        }
    }, {
        key: 'register',
        value: function register(name, TransitionClass) {
            TransitionRegistry[name] = TransitionClass;
        }
    }]);

    return Transition;
})(_animationsAnimation.Animation);

exports.Transition = Transition;