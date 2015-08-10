'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _ionicUtilDom = require('ionic/util/dom');

var domUtil = _interopRequireWildcard(_ionicUtilDom);

var dom = domUtil;
exports.dom = dom;

var _ionicUtilUtil = require('ionic/util/util');

_defaults(exports, _interopRequireWildcard(_ionicUtilUtil));