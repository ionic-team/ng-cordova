// Simple noop function
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports.noop = noop;
exports.clamp = clamp;
exports.extend = extend;
exports.merge = merge;
exports.defaults = defaults;
exports.pascalCaseToDashCase = pascalCaseToDashCase;
exports.nextUid = nextUid;
exports.getQuerystring = getQuerystring;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function noop() {}

;
/**
 * Given a min and max, restrict the given number
 * to the range.
 * @param min the minimum
 * @param n the value
 * @param max the maximum
 */

function clamp(min, n, max) {
    return Math.max(min, Math.min(n, max));
}

/**
 * Extend the destination with an arbitrary number of other objects.
 * @param dst the destination
 * @param ... the param objects
 */

function extend(dst) {
    return _baseExtend(dst, [].slice.call(arguments, 1), false);
}

/**
 * Do a deep extend (merge).
 * @param dst the destination
 * @param ... the param objects
 */

function merge(dst) {
    return _baseExtend(dst, [].slice.call(arguments, 1), true);
}

function _baseExtend(dst, objs, deep) {
    for (var i = 0, ii = objs.length; i < ii; ++i) {
        var obj = objs[i];
        if (!obj || !isObject(obj) && !isFunction(obj)) continue;
        var keys = Object.keys(obj);
        for (var j = 0, jj = keys.length; j < jj; j++) {
            var key = keys[j];
            var src = obj[key];
            if (deep && isObject(src)) {
                if (!isObject(dst[key])) dst[key] = isArray(src) ? [] : {};
                _baseExtend(dst[key], [src], true);
            } else {
                dst[key] = src;
            }
        }
    }
    return dst;
}
/**
 * Apply default arguments if they don't exist in
 * the first object.
 * @param the destination to apply defaults to.
 */

function defaults(dest) {
    for (var i = arguments.length - 1; i >= 1; i--) {
        var source = arguments[i] || {};
        for (var key in source) {
            if (source.hasOwnProperty(key) && !dest.hasOwnProperty(key)) {
                dest[key] = source[key];
            }
        }
    }
    return dest;
}

var isBoolean = function isBoolean(val) {
    return typeof val === 'boolean';
};
exports.isBoolean = isBoolean;
var isString = function isString(val) {
    return typeof val === 'string';
};
exports.isString = isString;
var isNumber = function isNumber(val) {
    return typeof val === 'number';
};
exports.isNumber = isNumber;
var isFunction = function isFunction(val) {
    return typeof val === 'function';
};
exports.isFunction = isFunction;
var isDefined = function isDefined(val) {
    return typeof val !== 'undefined';
};
exports.isDefined = isDefined;
var isUndefined = function isUndefined(val) {
    return typeof val === 'undefined';
};
exports.isUndefined = isUndefined;
var isBlank = function isBlank(val) {
    return val === undefined || val === null;
};
exports.isBlank = isBlank;
var isObject = function isObject(val) {
    return typeof val === 'object';
};
exports.isObject = isObject;
var isArray = Array.isArray;
exports.isArray = isArray;
/**
 * Convert a string in the format thisIsAString to a slug format this-is-a-string
 */

function pascalCaseToDashCase() {
    var str = arguments[0] === undefined ? '' : arguments[0];

    return str.charAt(0).toLowerCase() + str.substring(1).replace(/[A-Z]/g, function (match) {
        return '-' + match.toLowerCase();
    });
}

var uid = 0;

function nextUid() {
    return ++uid;
}

/**
 * A simple logger class.
 */

var Log = (function () {
    function Log() {
        _classCallCheck(this, Log);
    }

    _createClass(Log, null, [{
        key: 'log',
        value: function log() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            console.log.apply(console, args);
        }
    }, {
        key: 'info',
        value: function info() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            console.info.apply(console, args);
        }
    }, {
        key: 'warn',
        value: function warn() {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            console.warn.apply(console, args);
        }
    }, {
        key: 'error',
        value: function error() {
            for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
            }

            console.error.apply(console, args);
        }
    }]);

    return Log;
})();

exports.Log = Log;
var array = {
    find: function find(arr, cb) {
        for (var i = 0, ii = arr.length; i < ii; i++) {
            if (cb(arr[i], i)) return arr[i];
        }
    },
    remove: function remove(arr, itemOrIndex) {
        var index = -1;
        if (isNumber(itemOrIndex)) {
            index = itemOrIndex;
        } else {
            index = arr.indexOf(itemOrIndex);
        }
        if (index < 0) {
            return false;
        }
        arr.splice(index, 1);
        return true;
    }
};
exports.array = array;
/**
 * Grab the query string param value for the given key.
 * @param key the key to look for
 */

function getQuerystring(url, key) {
    var queryParams = {};
    if (url) {
        var startIndex = url.indexOf('?');
        if (startIndex !== -1) {
            var queries = url.slice(startIndex + 1).split('&');
            if (queries.length) {
                queries.forEach(function (param) {
                    var split = param.split('=');
                    queryParams[split[0]] = split[1].split('#')[0];
                });
            }
        }
        if (key) {
            return queryParams[key] || '';
        }
    }
    return queryParams;
}