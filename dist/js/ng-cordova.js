System.register('ng-cordova/ng-cordova', ['./plugins/camera', './plugins/geolocation'], function (_export) {
  'use strict';

  return {
    setters: [function (_pluginsCamera) {
      for (var _key in _pluginsCamera) {
        _export(_key, _pluginsCamera[_key]);
      }
    }, function (_pluginsGeolocation) {
      for (var _key2 in _pluginsGeolocation) {
        _export(_key2, _pluginsGeolocation[_key2]);
      }
    }],
    execute: function () {}
  };
});