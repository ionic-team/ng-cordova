System.register('app/pages/index', ['./camera', './geolocation'], function (_export) {
  'use strict';

  return {
    setters: [function (_camera) {
      for (var _key in _camera) {
        if (_key !== 'default') _export(_key, _camera[_key]);
      }
    }, function (_geolocation) {
      for (var _key2 in _geolocation) {
        if (_key2 !== 'default') _export(_key2, _geolocation[_key2]);
      }
    }],
    execute: function () {}
  };
});