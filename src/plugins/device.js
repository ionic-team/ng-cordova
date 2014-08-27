angular.module('ngCordova.plugins.device', [])

.factory('$cordovaDevice', ['$q', function ($q) {

  var readyDeferred = $q.defer();
  document.addEventListener('deviceready', function () { readyDeferred.resolve(); }, false);
  
  return {
    getDevice: function () {
      return device;
    },

    getCordova: function () {
      return device.cordova;
    },

    getModel: function () {
      return device.model;
    },

    // Warning: device.name is deprecated as of version 2.3.0. Use device.model instead.
    getName: function () {
      return device.name;
    },

    getPlatform: function () {
      return device.platform;
    },

    getUUID: function () {
      return device.uuid;
    },

    getVersion: function () {
      return device.version;
    },

    ready: readyDeferred.promise
  }
}]);
