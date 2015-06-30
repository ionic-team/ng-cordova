System.register('ng-cordova/ng-cordova', ['./plugins/camera'], function (_export) {
  'use strict';

  return {
    setters: [function (_pluginsCamera) {
      for (var _key in _pluginsCamera) {
        _export(_key, _pluginsCamera[_key]);
      }
    }],
    execute: function () {}
  };
});