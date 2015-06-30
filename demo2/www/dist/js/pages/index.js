System.register('app/pages/index', ['./camera'], function (_export) {
  'use strict';

  return {
    setters: [function (_camera) {
      for (var _key in _camera) {
        _export(_key, _camera[_key]);
      }
    }],
    execute: function () {}
  };
});