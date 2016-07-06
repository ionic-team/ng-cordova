// install   :  cordova plugin add https://github.com/xseignard/cordovarduino.git
// link      :  https://github.com/xseignard/cordovarduino

/* globals serial: true */
angular.module('ngCordova.plugins.serial', [])

  .factory('$cordovaSerial', ['$q', function ($q) {

    var serialService = {};

    serialService.requestPermission = function requestPermission(options) {
      var q = $q.defer();

      serial.requestPermission(options, function success() {
        q.resolve();
      }, function error(err) {
        q.reject(err);
      });

      return q.promise;
    };

    serialService.open = function(options) {
      var q = $q.defer();

      serial.open(options, function success() {
        q.resolve();
      }, function error(err) {
        q.reject(err);
      });

      return q.promise;
    };

    serialService.write = function(data) {
      var q = $q.defer();

      serial.write(data, function success() {
        q.resolve();
      }, function error(err) {
        q.reject(err);
      });

      return q.promise;
    };

    serialService.writeHex = function(data) {
      var q = $q.defer();

      serial.writeHex(data, function success() {
        q.resolve();
      }, function error(err) {
        q.reject(err);
      });

      return q.promise;
    };

    serialService.read = function() {
      var q = $q.defer();

      serial.read(function success(buffer) {
        var view = new Uint8Array(buffer);
        q.resolve(view);
      }, function error(err) {
        q.reject(err);
      });

      return q.promise;
    };

    serialService.registerReadCallback = function(successCallback, errorCallback) {
      serial.registerReadCallback(function success(buffer) {
        var view = new Uint8Array(buffer);
        successCallback(view);
      }, errorCallback);
    };

    serialService.close = function() {
      var q = $q.defer();

      serial.close(function success() {
        q.resolve();
      }, function error(err) {
        q.reject(err);
      });

      return q.promise;
    };

    return serialService;
  }]);
