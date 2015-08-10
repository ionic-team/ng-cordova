'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utilUtil = require('../../util/util');

var NavController = (function () {
    function NavController(nav) {
        _classCallCheck(this, NavController);

        this._nav = nav;
    }

    _createClass(NavController, [{
        key: 'setItems',

        /**
         * Set the history stack to match the list of component items.
         */
        value: function setItems(items) {
            return this._nav.setItems(items);
        }
    }, {
        key: 'clear',

        /**
         * Clear the history stack.
         */
        value: function clear() {
            return this._nav.clear();
        }
    }, {
        key: 'push',

        /**
         * Push an ew component onto the history stack.
         */
        value: function push() {
            return this._nav.push.apply(this._nav, arguments);
        }
    }, {
        key: 'pop',

        /**
         * Pop the top most (visible) component off the history stack.
         */
        value: function pop() {
            return this._nav.pop.apply(this._nav, arguments);
        }
    }]);

    return NavController;
})();

exports.NavController = NavController;

var NavParams = function NavParams(params) {
    _classCallCheck(this, NavParams);

    (0, _utilUtil.extend)(this, params);
};

exports.NavParams = NavParams;