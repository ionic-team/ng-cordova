'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _focusHolder = require('./focus-holder');

_defaults(exports, _interopRequireWildcard(_focusHolder));

var _input = require('./input');

_defaults(exports, _interopRequireWildcard(_input));

var _tapInput = require('./tap-input');

_defaults(exports, _interopRequireWildcard(_tapInput));

var _textInput = require('./text-input');

_defaults(exports, _interopRequireWildcard(_textInput));