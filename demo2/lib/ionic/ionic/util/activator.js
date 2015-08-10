'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _dom = require('./dom');

var queueElements = {}; // elements that should get an active state in XX milliseconds
var activeElements = {}; // elements that are currently active
var keyId = 0; // a counter for unique keys for the above ojects
var ACTIVATED_CLASS = 'activated';
var DEACTIVATE_TIMEOUT = 180;

var Activator = (function () {
    function Activator() {
        _classCallCheck(this, Activator);
    }

    _createClass(Activator, null, [{
        key: 'start',
        value: function start(ele) {
            queueElements[++keyId] = ele;
            if (keyId > 9) keyId = 0;
            (0, _dom.raf)(Activator.activate);
        }
    }, {
        key: 'activate',
        value: function activate() {
            // activate all elements in the queue
            for (var key in queueElements) {
                if (queueElements[key]) {
                    queueElements[key].classList.add(ACTIVATED_CLASS);
                    activeElements[key] = queueElements[key];
                }
            }
            queueElements = {};
        }
    }, {
        key: 'end',
        value: function end() {
            setTimeout(Activator.clear, DEACTIVATE_TIMEOUT);
        }
    }, {
        key: 'clear',
        value: function clear() {
            // clear out any elements that are queued to be set to active
            queueElements = {};
            // in the next frame, remove the active class from all active elements
            (0, _dom.raf)(Activator.deactivate);
        }
    }, {
        key: 'deactivate',
        value: function deactivate() {
            for (var key in activeElements) {
                if (activeElements[key]) {
                    activeElements[key].classList.remove(ACTIVATED_CLASS);
                }
                delete activeElements[key];
            }
        }
    }, {
        key: 'moveListeners',
        value: function moveListeners(pointerMove, shouldAdd) {
            document.removeEventListener('touchmove', pointerMove);
            document.removeEventListener('mousemove', pointerMove);
            if (shouldAdd) {
                document.addEventListener('touchmove', pointerMove);
                document.addEventListener('mousemove', pointerMove);
            }
        }
    }]);

    return Activator;
})();

exports.Activator = Activator;