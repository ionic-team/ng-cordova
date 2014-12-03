// install   :     cordova plugin add org.apache.cordova.device
// link      :     https://github.com/apache/cordova-plugin-device/blob/master/doc/index.md

angular.module('ngCordova.plugins.device', [])

  .factory('$cordovaDevice', ['cordovaReady', function (cordovaReady) {

    return {
      getDevice: cordovaReady(function () {
        return device;
      }),

      getCordova: cordovaReady(function () {
        return device.cordova;
      }),

      getModel: cordovaReady(function () {
        return device.model;
      }),

      // Warning: device.name is deprecated as of version 2.3.0. Use device.model instead.
      getName: cordovaReady(function () {
        return device.name;
      }),

      getPlatform: cordovaReady(function () {
        return device.platform;
      }),

      getUUID: cordovaReady(function () {
        return device.uuid;
      }),

      getVersion: cordovaReady(function () {
        return device.version;
      })
    };
  }]);
