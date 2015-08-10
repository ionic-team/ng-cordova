'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utilDom = require('../util/dom');

var RENDER_DELAY = 36;
var AnimationRegistry = {};
/**
  Animation Steps/Process
  -----------------------
  1) Construct animation (doesn't start)
  2) Client play()'s animation, returns promise
  3) Add before classes to elements
  4) Remove before classes from elements
  5) Elements staged in "from" effect w/ inline styles
  6) Call onReady()
  7) Wait for RENDER_DELAY milliseconds (give browser time to render)
  8) Call onPlay()
  8) Run from/to animation on elements
  9) Animations finish async
 10) Set inline styles w/ the "to" effects on elements
 11) Add after classes to elements
 12) Remove after classes from elements
 13) Call onFinish()
 14) Resolve play()'s promise
**/

var Animation = (function () {
    function Animation(ele) {
        _classCallCheck(this, Animation);

        this._el = [];
        this._chld = [];
        this._ani = [];
        this._bfAdd = [];
        this._bfSty = {};
        this._bfRmv = [];
        this._afAdd = [];
        this._afRmv = [];
        this._readys = [];
        this._plays = [];
        this._finishes = [];
        this.elements(ele);
    }

    _createClass(Animation, [{
        key: 'elements',
        value: function elements(ele) {
            if (ele) {
                if (typeof ele === 'string') {
                    // string query selector
                    ele = document.querySelectorAll(ele);
                }
                if (ele.length) {
                    // array of elements
                    for (var i = 0; i < ele.length; i++) {
                        this.addElement(ele[i]);
                    }
                } else {
                    // single element
                    this.addElement(ele);
                }
            }
            return this;
        }
    }, {
        key: 'addElement',
        value: function addElement(ele) {
            // ensure only HTML Element nodes
            if (ele) {
                if (ele.nativeElement) {
                    // angular ElementRef
                    ele = ele.nativeElement;
                }
                if (ele.nodeType === 1) {
                    this._el.push(ele);
                }
            }
        }
    }, {
        key: 'parent',
        value: function parent(parentAnimation) {
            this._parent = parentAnimation;
            return this;
        }
    }, {
        key: 'add',
        value: function add(childAnimations) {
            childAnimations = Array.isArray(childAnimations) ? childAnimations : arguments;
            for (var i = 0; i < childAnimations.length; i++) {
                childAnimations[i].parent(this);
                this._chld.push(childAnimations[i]);
            }
            return this;
        }
    }, {
        key: 'duration',
        value: function duration(value) {
            if (arguments.length) {
                this._duration = value;
                return this;
            }
            return this._duration || this._parent && this._parent.duration();
        }
    }, {
        key: 'easing',
        value: function easing(name, opts) {
            if (arguments.length) {
                this._easing = {
                    name: name,
                    opts: opts
                };
                return this;
            }
            return this._easing || this._parent && this._parent.easing();
        }
    }, {
        key: 'playbackRate',
        value: function playbackRate(value) {
            if (arguments.length) {
                this._rate = value;
                var i = undefined;
                for (i = 0; i < this._chld.length; i++) {
                    this._chld[i].playbackRate(value);
                }
                for (i = 0; i < this._ani.length; i++) {
                    this._ani[i].playbackRate(value);
                }
                return this;
            }
            return this._rate || this._parent && this._parent.playbackRate();
        }
    }, {
        key: 'from',
        value: function from(property, value) {
            if (!this._from) {
                this._from = {};
            }
            this._from[property] = value;
            return this;
        }
    }, {
        key: 'to',
        value: function to(property, value) {
            if (!this._to) {
                this._to = {};
            }
            this._to[property] = value;
            return this;
        }
    }, {
        key: 'fromTo',
        value: function fromTo(property, from, to) {
            return this.from(property, from).to(property, to);
        }
    }, {
        key: 'fadeIn',
        value: function fadeIn() {
            return this.fromTo('opacity', 0, 1);
        }
    }, {
        key: 'fadeOut',
        value: function fadeOut() {
            return this.fromTo('opacity', 1, 0);
        }
    }, {
        key: 'play',
        value: function play() {
            var _this = this;

            var self = this;
            var animations = self._ani;
            var children = self._chld;
            var promises = [];
            var i = undefined,
                l = undefined;
            // the actual play() method which may or may not start async
            function beginPlay() {
                var i = undefined,
                    l = undefined;
                var promises = [];
                for (i = 0, l = children.length; i < l; i++) {
                    promises.push(children[i].play());
                }
                for (i = 0, l = animations.length; i < l; i++) {
                    promises.push(animations[i].play());
                }
                return Promise.all(promises);
            }
            if (!self._parent) {
                var _ret = (function () {
                    var kickoff = function kickoff() {
                        // synchronously call all onPlay()'s before play()
                        self._onPlay();
                        beginPlay().then(function () {
                            self._onFinish();
                            resolve();
                        });
                    };

                    // this is the top level animation and is in full control
                    // of when the async play() should actually kick off
                    // stage all animations and child animations at their starting point
                    self.stage();
                    var resolve = undefined;
                    var promise = new Promise(function (res) {
                        resolve = res;
                    });

                    if (_this._duration > RENDER_DELAY) {
                        // begin each animation when everything is rendered in their starting point
                        // give the browser some time to render everything in place before starting
                        setTimeout(kickoff, RENDER_DELAY);
                    } else {
                        // no need to render everything in there place before animating in
                        // just kick it off immediately to render them in their "to" locations
                        kickoff();
                    }
                    return {
                        v: promise
                    };
                })();

                if (typeof _ret === 'object') return _ret.v;
            }
            // this is a child animation, it is told exactly when to
            // start by the top level animation
            return beginPlay();
        }
    }, {
        key: 'stage',
        value: function stage() {
            // before the RENDER_DELAY
            // before the animations have started
            if (!this._isStaged) {
                this._isStaged = true;
                var i = undefined,
                    p = undefined,
                    l = undefined,
                    j = undefined,
                    ele = undefined,
                    animation = undefined;
                for (i = 0, l = this._chld.length; i < l; i++) {
                    this._chld[i].stage();
                }
                for (i = 0; i < this._el.length; i++) {
                    ele = this._el[i];
                    for (j = 0; j < this._bfAdd.length; j++) {
                        ele.classList.add(this._bfAdd[j]);
                    }
                    for (p in this._bfSty) {
                        ele.style[p] = this._bfSty[p];
                    }
                    for (j = 0; j < this._bfRmv.length; j++) {
                        ele.classList.remove(this._bfRmv[j]);
                    }
                }
                if (this._to) {
                    // only animate the elements if there are defined "to" effects
                    for (i = 0; i < this._el.length; i++) {
                        animation = new Animate(this._el[i], this._from, this._to, this.duration(), this.easing(), this.playbackRate());
                        if (animation.shouldAnimate) {
                            this._ani.push(animation);
                        }
                    }
                }
                for (i = 0; i < this._readys.length; i++) {
                    this._readys[i](this);
                }
            }
        }
    }, {
        key: '_onPlay',
        value: function _onPlay() {
            // after the RENDER_DELAY
            // before the animations have started
            var i = undefined;
            for (i = 0; i < this._chld.length; i++) {
                this._chld[i]._onPlay();
            }
            for (i = 0; i < this._plays.length; i++) {
                this._plays[i](this);
            }
        }
    }, {
        key: '_onFinish',
        value: function _onFinish() {
            // after the animations have finished
            if (!this._isFinished) {
                this._isFinished = true;
                var i = undefined,
                    j = undefined,
                    ele = undefined;
                for (i = 0; i < this._chld.length; i++) {
                    this._chld[i]._onFinish();
                }
                if (this.playbackRate() < 0) {
                    // reverse direction
                    for (i = 0; i < this._el.length; i++) {
                        ele = this._el[i];
                        for (j = 0; j < this._bfAdd.length; j++) {
                            ele.classList.remove(this._bfAdd[j]);
                        }
                        for (j = 0; j < this._bfRmv.length; j++) {
                            ele.classList.add(this._bfRmv[j]);
                        }
                    }
                } else {
                    // normal direction
                    for (i = 0; i < this._el.length; i++) {
                        ele = this._el[i];
                        for (j = 0; j < this._afAdd.length; j++) {
                            ele.classList.add(this._afAdd[j]);
                        }
                        for (j = 0; j < this._afRmv.length; j++) {
                            ele.classList.remove(this._afRmv[j]);
                        }
                    }
                }
                for (i = 0; i < this._finishes.length; i++) {
                    this._finishes[i](this);
                }
            }
        }
    }, {
        key: 'pause',
        value: function pause() {
            this._hasFinished = false;
            var i = undefined;
            for (i = 0; i < this._chld.length; i++) {
                this._chld[i].pause();
            }
            for (i = 0; i < this._ani.length; i++) {
                this._ani[i].pause();
            }
        }
    }, {
        key: 'progress',
        value: function progress(value) {
            var i = undefined;
            for (i = 0; i < this._chld.length; i++) {
                this._chld[i].progress(value);
            }
            if (!this._initProgress) {
                this._initProgress = true;
                this.play();
                this.pause();
            }
            for (i = 0; i < this._ani.length; i++) {
                this._ani[i].progress(value);
            }
        }
    }, {
        key: 'onReady',
        value: function onReady(fn) {
            this._readys.push(fn);
        }
    }, {
        key: 'onPlay',
        value: function onPlay(fn) {
            this._plays.push(fn);
        }
    }, {
        key: 'onFinish',
        value: function onFinish(fn) {
            this._finishes.push(fn);
        }
    }, {
        key: 'dispose',
        value: function dispose() {
            var i = undefined;
            for (i = 0; i < this._chld.length; i++) {
                this._chld[i].dispose();
            }
            for (i = 0; i < this._ani.length; i++) {
                this._ani[i].dispose();
            }
            this._el = this._parent = this._chld = this._ani = this._readys = this._plays = this._finishes = null;
        }
    }, {
        key: 'before',
        get: function get() {
            var _this2 = this;

            return {
                addClass: function addClass(className) {
                    _this2._bfAdd.push(className);
                    return _this2;
                },
                removeClass: function removeClass(className) {
                    _this2._bfRmv.push(className);
                    return _this2;
                },
                setStyles: function setStyles(styles) {
                    _this2._bfSty = styles;
                }
            };
        }
    }, {
        key: 'after',
        get: function get() {
            var _this3 = this;

            return {
                addClass: function addClass(className) {
                    _this3._afAdd.push(className);
                    return _this3;
                },
                removeClass: function removeClass(className) {
                    _this3._afRmv.push(className);
                    return _this3;
                }
            };
        }
    }], [{
        key: 'create',

        /*
         STATIC CLASSES
         */
        value: function create(element, name) {
            var AnimationClass = AnimationRegistry[name];
            if (!AnimationClass) {
                // couldn't find an animation by the given name
                // fallback to just the base Animation class
                AnimationClass = Animation;
            }
            return new AnimationClass(element);
        }
    }, {
        key: 'register',
        value: function register(name, AnimationClass) {
            AnimationRegistry[name] = AnimationClass;
        }
    }]);

    return Animation;
})();

exports.Animation = Animation;

var Animate = (function () {
    function Animate(ele, fromEffect, toEffect, duration, easingConfig, playbackRate) {
        var _this4 = this;

        _classCallCheck(this, Animate);

        // https://w3c.github.io/web-animations/
        // not using the direct API methods because they're still in flux
        // however, element.animate() seems locked in and uses the latest
        // and correct API methods under the hood, so really doesn't matter
        this.toEffect = parseEffect(toEffect);
        this.shouldAnimate = duration > RENDER_DELAY;
        if (!this.shouldAnimate) {
            return inlineStyle(ele, this.toEffect);
        }
        this.ele = ele;
        this.promise = new Promise(function (res) {
            _this4.resolve = res;
        });
        // stage where the element will start from
        fromEffect = parseEffect(fromEffect);
        inlineStyle(ele, fromEffect);
        this.duration = duration;
        this.rate = playbackRate;
        this.easing = easingConfig && easingConfig.name || 'linear';
        this.effects = [convertProperties(fromEffect)];
        if (this.easing in EASING_FN) {
            insertEffects(this.effects, fromEffect, this.toEffect, easingConfig);
        } else if (this.easing in CUBIC_BEZIERS) {
            this.easing = 'cubic-bezier(' + CUBIC_BEZIERS[this.easing] + ')';
        }
        this.effects.push(convertProperties(this.toEffect));
    }

    _createClass(Animate, [{
        key: 'play',
        value: function play() {
            var self = this;
            if (self.player) {
                self.player.play();
            } else {
                self.player = self.ele.animate(self.effects, {
                    duration: self.duration || 0,
                    easing: self.easing,
                    playbackRate: self.rate || 1
                });
                self.player.onfinish = function () {
                    // lock in where the element will stop at
                    // if the playbackRate is negative then it needs to return
                    // to its "from" effects
                    inlineStyle(self.ele, self.rate < 0 ? self.fromEffect : self.toEffect);
                    self.resolve();
                };
            }
            return self.promise;
        }
    }, {
        key: 'pause',
        value: function pause() {
            this.player && this.player.pause();
        }
    }, {
        key: 'progress',
        value: function progress(value) {
            var player = this.player;
            if (player) {
                // passed a number between 0 and 1
                value = Math.max(0, Math.min(1, value));
                if (value >= 1) {
                    player.currentTime = this.duration * 0.999;
                    return player.play();
                }
                if (player.playState !== 'paused') {
                    player.pause();
                }
                player.currentTime = this.duration * value;
            }
        }
    }, {
        key: 'playbackRate',
        value: function playbackRate(value) {
            this.rate = value;
            if (this.player) {
                this.player.playbackRate = value;
            }
        }
    }, {
        key: 'dispose',
        value: function dispose() {
            this.ele = this.player = this.effects = this.toEffect = null;
        }
    }]);

    return Animate;
})();

function insertEffects(effects, fromEffect, toEffect, easingConfig) {
    easingConfig.opts = easingConfig.opts || {};
    var increment = easingConfig.opts.increment || 0.04;
    var easingFn = EASING_FN[easingConfig.name];
    var pos = undefined,
        tweenEffect = undefined,
        addEffect = undefined,
        property = undefined,
        toProperty = undefined,
        fromValue = undefined,
        diffValue = undefined;
    for (pos = increment; pos <= 1 - increment; pos += increment) {
        tweenEffect = {};
        addEffect = false;
        for (property in toEffect) {
            toProperty = toEffect[property];
            if (toProperty.tween) {
                fromValue = fromEffect[property].num;
                diffValue = toProperty.num - fromValue;
                tweenEffect[property] = {
                    value: roundValue(easingFn(pos, easingConfig.opts) * diffValue + fromValue) + toProperty.unit
                };
                addEffect = true;
            }
        }
        if (addEffect) {
            effects.push(convertProperties(tweenEffect));
        }
    }
}
function parseEffect(inputEffect) {
    var val = undefined,
        r = undefined,
        num = undefined,
        property = undefined;
    var outputEffect = {};
    for (property in inputEffect) {
        val = inputEffect[property];
        r = val.toString().match(/(\d*\.?\d*)(.*)/);
        num = parseFloat(r[1]);
        outputEffect[property] = {
            value: val,
            num: num,
            unit: r[0] != r[2] ? r[2] : '',
            tween: !isNaN(num) && ANIMATE_PROPERTIES.indexOf(property) > -1
        };
    }
    return outputEffect;
}
function convertProperties(inputEffect) {
    var outputEffect = {};
    var transforms = [];
    var value = undefined,
        property = undefined;
    for (property in inputEffect) {
        value = inputEffect[property].value;
        if (TRANSFORMS.indexOf(property) > -1) {
            transforms.push(property + '(' + value + ')');
        } else {
            outputEffect[property] = value;
        }
    }
    if (transforms.length) {
        transforms.push('translateZ(0px)');
        outputEffect.transform = transforms.join(' ');
    }
    return outputEffect;
}
function inlineStyle(ele, effect) {
    if (ele && effect) {
        var transforms = [];
        var value = undefined,
            property = undefined;
        for (property in effect) {
            value = effect[property].value;
            if (TRANSFORMS.indexOf(property) > -1) {
                transforms.push(property + '(' + value + ')');
            } else {
                ele.style[property] = value;
            }
        }
        if (transforms.length) {
            transforms.push('translateZ(0px)');
            ele.style[_utilDom.CSS.transform] = transforms.join(' ');
        }
    }
}
function roundValue(val) {
    return Math.round(val * 10000) / 10000;
}
var TRANSFORMS = ['translateX', 'translateY', 'translateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'skewX', 'skewY', 'perspective'];
var ANIMATE_PROPERTIES = TRANSFORMS.concat('opacity');
// Robert Penner's Easing Functions
// http://robertpenner.com/easing/
var CUBIC_BEZIERS = {
    // default browser suppored easing
    // ease
    // ease-in
    // ease-out
    // ease-in-out
    // Cubic
    'ease-in-cubic': '0.55,0.055,0.675,0.19',
    'ease-out-cubic': '0.215,0.61,0.355,1',
    'ease-in-Out-cubic': '0.645,0.045,0.355,1',
    // Circ
    'ease-in-circ': '0.6,0.04,0.98,0.335',
    'ease-out-circ': '0.075,0.82,0.165,1',
    'ease-in-out-circ': '0.785,0.135,0.15,0.86',
    // Expo
    'ease-in-expo': '0.95,0.05,0.795,0.035',
    'ease-out-expo': '0.19,1,0.22,1',
    'ease-in-out-expo': '1,0,0,1',
    // Quad
    'ease-in-quad': '0.55,0.085,0.68,0.53',
    'ease-out-quad': '0.25,0.46,0.45,0.94',
    'ease-in-out-quad': '0.455,0.03,0.515,0.955',
    // Quart
    'ease-in-quart': '0.895,0.03,0.685,0.22',
    'ease-out-quart': '0.165,0.84,0.44,1',
    'ease-in-out-quart': '0.77,0,0.175,1',
    // Quint
    'ease-in-quint': '0.755,0.05,0.855,0.06',
    'ease-out-quint': '0.23,1,0.32,1',
    'ease-in-out-quint': '0.86,0,0.07,1',
    // Sine
    'ease-in-sine': '0.47,0,0.745,0.715',
    'ease-out-sine': '0.39,0.575,0.565,1',
    'ease-in-out-sine': '0.445,0.05,0.55,0.95',
    // Back
    'ease-in-back': '0.6,-0.28,0.735,0.045',
    'ease-out-back': '0.175,0.885,0.32,1.275',
    'ease-in-out-back': '0.68,-0.55,0.265,1.55'
};
var EASING_FN = {
    'elastic': function elastic(pos) {
        return -1 * Math.pow(4, -8 * pos) * Math.sin((pos * 6 - 1) * (2 * Math.PI) / 2) + 1;
    },
    'swing-from-to': function swingFromTo(pos, opts) {
        var s = opts.s || 1.70158;
        return (pos /= 0.5) < 1 ? 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s)) : 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
    },
    'swing-from': function swingFrom(pos, opts) {
        var s = opts.s || 1.70158;
        return pos * pos * ((s + 1) * pos - s);
    },
    'swing-to': function swingTo(pos, opts) {
        var s = opts.s || 1.70158;
        return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
    },
    'bounce': function bounce(pos) {
        if (pos < 1 / 2.75) {
            return 7.5625 * pos * pos;
        } else if (pos < 2 / 2.75) {
            return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
        } else if (pos < 2.5 / 2.75) {
            return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
        }
        return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
    },
    'bounce-past': function bouncePast(pos) {
        if (pos < 1 / 2.75) {
            return 7.5625 * pos * pos;
        } else if (pos < 2 / 2.75) {
            return 2 - (7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75);
        } else if (pos < 2.5 / 2.75) {
            return 2 - (7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375);
        }
        return 2 - (7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375);
    },
    'ease-out-bounce': function easeOutBounce(pos) {
        if (pos < 1 / 2.75) {
            return 7.5625 * pos * pos;
        } else if (pos < 2 / 2.75) {
            return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
        } else if (pos < 2.5 / 2.75) {
            return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
        }
        return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
    },
    'ease-from-to': function easeFromTo(pos) {
        if ((pos /= 0.5) < 1) return 0.5 * Math.pow(pos, 4);
        return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
    },
    'ease-from': function easeFrom(pos, opts) {
        return Math.pow(pos, opts.s || 4);
    },
    'ease-to': function easeTo(pos, opts) {
        return Math.pow(pos, opts.s || 0.25);
    },
    /*
     * scripty2, Thomas Fuchs (MIT Licence)
     * https://raw.github.com/madrobby/scripty2/master/src/effects/transitions/transitions.js
     */
    'spring': function spring(pos, opts) {
        var damping = opts.damping || 4.5;
        var elasticity = opts.elasticity || 6;
        return 1 - Math.cos(pos * damping * Math.PI) * Math.exp(-pos * elasticity);
    },
    'sinusoidal': function sinusoidal(pos) {
        return -Math.cos(pos * Math.PI) / 2 + 0.5;
    }
};