'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utilDom = require('../util/dom');

var ScrollTo = (function () {
    function ScrollTo(ele, x, y, duration) {
        _classCallCheck(this, ScrollTo);

        if (typeof ele === 'string') {
            // string query selector
            ele = document.querySelector(ele);
        }
        if (ele) {
            if (ele.nativeElement) {
                // angular ElementRef
                ele = ele.nativeElement;
            }
            if (ele.nodeType === 1) {
                this._el = ele;
            }
        }
    }

    _createClass(ScrollTo, [{
        key: 'start',
        value: function start(x, y, duration, tolerance) {
            // scroll animation loop w/ easing
            // credit https://gist.github.com/dezinezync/5487119
            var self = this;
            if (!self._el) {
                // invalid element
                return Promise.resolve();
            }
            x = x || 0;
            y = y || 0;
            tolerance = tolerance || 0;
            var ele = self._el;
            var fromY = ele.scrollTop;
            var fromX = ele.scrollLeft;
            var xDistance = Math.abs(x - fromX);
            var yDistance = Math.abs(y - fromY);
            if (yDistance <= tolerance && xDistance <= tolerance) {
                // prevent scrolling if already close to there
                this._el = ele = null;
                return Promise.resolve();
            }
            return new Promise(function (resolve, reject) {
                var start = Date.now();
                // start scroll loop
                self.isPlaying = true;
                (0, _utilDom.raf)(step);
                // decelerating to zero velocity
                function easeOutCubic(t) {
                    return --t * t * t + 1;
                }
                // scroll loop
                function step() {
                    var time = Math.min(1, (Date.now() - start) / duration);
                    // where .5 would be 50% of time on a linear scale easedT gives a
                    // fraction based on the easing method
                    var easedT = easeOutCubic(time);
                    if (fromY != y) {
                        ele.scrollTop = parseInt(easedT * (y - fromY) + fromY, 10);
                    }
                    if (fromX != x) {
                        ele.scrollLeft = parseInt(easedT * (x - fromX) + fromX, 10);
                    }
                    if (time < 1 && self.isPlaying) {
                        (0, _utilDom.raf)(step);
                    } else if (!self.isPlaying) {
                        // stopped
                        this._el = ele = null;
                        reject();
                    } else {
                        // done
                        this._el = ele = null;
                        resolve();
                    }
                }
            });
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.isPlaying = false;
        }
    }, {
        key: 'dispose',
        value: function dispose() {
            this.stop();
            this._el = null;
        }
    }]);

    return ScrollTo;
})();

exports.ScrollTo = ScrollTo;