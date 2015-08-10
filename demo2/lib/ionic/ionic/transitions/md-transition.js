'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _transition = require('./transition');

var _animationsAnimation = require('../animations/animation');

var DURATION = 300;
var EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
var TRANSLATEY = 'translateY';
var OFF_BOTTOM = '5%';
var CENTER = '0%';

var MaterialTransition = (function (_Transition) {
    function MaterialTransition(nav, opts) {
        _classCallCheck(this, MaterialTransition);

        _get(Object.getPrototypeOf(MaterialTransition.prototype), 'constructor', this).call(this, nav, opts);
        // global duration and easing for all child animations
        this.duration(DURATION);
        this.easing(EASING);
        // entering item moves in bottom to center
        this.enteringView.to(TRANSLATEY, CENTER).before.setStyles({ zIndex: this.entering.index });
        // entering title fades in
        this.enteringTitle.fadeIn();
        // leaving view stays put
        this.leavingView.before.setStyles({ zIndex: this.leaving.index });
        // leaving title fades out
        this.leavingTitle.fadeOut();
        // set properties depending on direction
        if (opts.direction === 'back') {
            // back direction
            this.enteringView.from(TRANSLATEY, CENTER);
            this.leavingNavbar.before.addClass('transparent-navbar').after.removeClass('transparent-navbar');
            this.leavingTitle.fadeOut();
            // leaving view goes center to bottom
            this.leavingView.fromTo(TRANSLATEY, CENTER, OFF_BOTTOM).fadeOut();
            if (this.leaving.enableBack()) {
                var leavingBackButtonText = new _animationsAnimation.Animation(this.leaving.backButtonTextElement());
                leavingBackButtonText.fadeOut();
                this.leavingNavbar.add(leavingBackButtonText);
            }
        } else {
            // forward direction
            this.enteringView.from(TRANSLATEY, OFF_BOTTOM).fadeIn();
            this.enteringNavbar.before.addClass('transparent-navbar').after.removeClass('transparent-navbar');
            if (this.entering.enableBack()) {
                var enteringBackButtonText = new _animationsAnimation.Animation(this.entering.backButtonTextElement());
                enteringBackButtonText.fadeIn();
                this.enteringNavbar.add(enteringBackButtonText);
            }
        }
    }

    _inherits(MaterialTransition, _Transition);

    return MaterialTransition;
})(_transition.Transition);

_transition.Transition.register('md', MaterialTransition);