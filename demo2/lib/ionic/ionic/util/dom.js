'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.rafPromise = rafPromise;
exports.transitionEnd = transitionEnd;
exports.animationStart = animationStart;
exports.animationEnd = animationEnd;
exports.ready = ready;
exports.windowLoad = windowLoad;
exports.pointerCoord = pointerCoord;
exports.hasPointerMoved = hasPointerMoved;
exports.hasFocus = hasFocus;

var _angular2SrcFacadeAsync = require('angular2/src/facade/async');

var nativeRaf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
var nativeCancelRaf = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame;
var raf = nativeRaf || function (callback) {
    var timeCurrent = new Date().getTime(),
        timeDelta = undefined;
    /* Dynamically set delay on a per-tick basis to match 60fps. */
    /* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
    timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
    timeLast = timeCurrent + timeDelta;
    return setTimeout(function () {
        callback(timeCurrent + timeDelta);
    }, timeDelta);
};
exports.raf = raf;
var rafCancel = nativeRaf ? nativeCancelRaf : function (id) {
    return window.cancelTimeout(id);
};
exports.rafCancel = rafCancel;

function rafPromise() {
    return new _angular2SrcFacadeAsync.Promise(function (resolve) {
        return raf(resolve);
    });
}

var CSS = {};
exports.CSS = CSS;
(function () {
    // transform
    var i,
        keys = ['webkitTransform', 'transform', '-webkit-transform', 'webkit-transform', '-moz-transform', 'moz-transform', 'MozTransform', 'mozTransform', 'msTransform'];
    for (i = 0; i < keys.length; i++) {
        if (document.documentElement.style[keys[i]] !== undefined) {
            CSS.transform = keys[i];
            break;
        }
    }
    // transition
    keys = ['webkitTransition', 'mozTransition', 'msTransition', 'transition'];
    for (i = 0; i < keys.length; i++) {
        if (document.documentElement.style[keys[i]] !== undefined) {
            CSS.transition = keys[i];
            break;
        }
    }
    // The only prefix we care about is webkit for transitions.
    var isWebkit = CSS.transition.indexOf('webkit') > -1;
    CSS.prefix = isWebkit ? '-webkit-' : '';
    // transition duration
    CSS.transitionDuration = (isWebkit ? '-webkit-' : '') + 'transition-duration';
    // To be sure transitionend works everywhere, include *both* the webkit and non-webkit events
    CSS.transitionEnd = (isWebkit ? 'webkitTransitionEnd ' : '') + 'transitionend';
})();
if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
    CSS.animation = 'WebkitAnimation';
    CSS.animationStart = 'webkitAnimationStart animationstart';
    CSS.animationEnd = 'webkitAnimationEnd animationend';
} else {
    CSS.animation = 'animation';
    CSS.animationStart = 'animationstart';
    CSS.animationEnd = 'animationend';
}

function transitionEnd(el) {
    return cssPromise(el, CSS.transitionEnd);
}

function animationStart(el, animationName) {
    return cssPromise(el, CSS.animationStart, animationName);
}

function animationEnd(el, animationName) {
    return cssPromise(el, CSS.animationEnd, animationName);
}

function cssPromise(el, eventNames, animationName) {
    return new _angular2SrcFacadeAsync.Promise(function (resolve) {
        eventNames.split(' ').forEach(function (eventName) {
            el.addEventListener(eventName, onEvent);
        });
        function onEvent(ev) {
            if (ev.animationName && animationName) {
                // do not resolve if a bubbled up ev.animationName
                // is not the same as the passed in animationName arg
                if (ev.animationName !== animationName) {
                    return;
                }
            } else if (ev.target !== el) {
                // do not resolve if the event's target element is not
                // the same as the element the listener was added to
                return;
            }
            ev.stopPropagation();
            eventNames.split(' ').forEach(function (eventName) {
                el.removeEventListener(eventName, onEvent);
            });
            resolve(ev);
        }
    });
}

function ready(callback) {
    var promise = null;
    if (!callback) {
        // a callback wasn't provided, so let's return a promise instead
        promise = new _angular2SrcFacadeAsync.Promise(function (resolve) {
            callback = resolve;
        });
    }
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        callback();
    } else {
        (function () {
            var completed = function completed() {
                document.removeEventListener('DOMContentLoaded', completed, false);
                window.removeEventListener('load', completed, false);
                callback();
            };

            document.addEventListener('DOMContentLoaded', completed, false);
            window.addEventListener('load', completed, false);
        })();
    }
    return promise;
}

function windowLoad(callback) {
    var promise = null;
    if (!callback) {
        // a callback wasn't provided, so let's return a promise instead
        promise = new _angular2SrcFacadeAsync.Promise(function (resolve) {
            callback = resolve;
        });
    }
    if (document.readyState === 'complete') {
        callback();
    } else {
        (function () {
            var completed = function completed() {
                window.removeEventListener('load', completed, false);
                callback();
            };

            window.addEventListener('load', completed, false);
        })();
    }
    return promise;
}

function pointerCoord(ev) {
    // get coordinates for either a mouse click
    // or a touch depending on the given event
    var c = { x: 0, y: 0 };
    if (ev) {
        var touches = ev.touches && ev.touches.length ? ev.touches : [ev];
        var e = ev.changedTouches && ev.changedTouches[0] || touches[0];
        if (e) {
            c.x = e.clientX || e.pageX || 0;
            c.y = e.clientY || e.pageY || 0;
        }
    }
    return c;
}

function hasPointerMoved(threshold, startCoord, endCoord) {
    return startCoord && endCoord && (Math.abs(startCoord.x - endCoord.x) > threshold || Math.abs(startCoord.y - endCoord.y) > threshold);
}

function hasFocus(ele) {
    return !!(ele && (document.activeElement === ele.nativeElement || document.activeElement === ele));
}