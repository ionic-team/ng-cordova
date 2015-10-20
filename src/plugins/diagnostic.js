// install   :     cordova plugin add cordova.plugins.diagnostic
// link      :     https://github.com/dpa99c/cordova-diagnostic-plugin

angular.module('ngCordova.plugins.diagnostic', [])

  .factory('$cordovaDiagnostic', ['$q', function ($q) {

    return {

      /**
       * Android and iOS
       */

      isLocationEnabled: function () {
        var q = $q.defer();

        cordova.plugins.diagnostic.isLocationEnabled(function (result) {
          q.resolve(result);
        }, function (err) {
          q.reject(err);
        });

        return q.promise;
      },

      isWifiEnabled: function () {
        var q = $q.defer();

        cordova.plugins.diagnostic.isWifiEnabled(function (result) {
          q.resolve(result);
        }, function (err) {
          q.reject(err);
        });

        return q.promise;
      },

      isCameraEnabled: function () {
        var q = $q.defer();

        cordova.plugins.diagnostic.isCameraEnabled(function (result) {
          q.resolve(result);
        }, function (err) {
          q.reject(err);
        });

        return q.promise;
      },

      isBluetoothEnabled: function () {
        var q = $q.defer();

        cordova.plugins.diagnostic.isBluetoothEnabled(function (result) {
          q.resolve(result);
        }, function (err) {
          q.reject(err);
        });

        return q.promise;
      },

      /**
       * Android only
       */

      switchToLocationSettings: function () {
        var q = $q.defer();

        if(cordova.plugins.diagnostic.switchToLocationSettings()) {
          q.resolve(true);
        } else {
          q.reject('Switch to location settings is not supported.');
        }

        return q.promise;
      },

      switchToMobileDataSettings: function () {
        var q = $q.defer();

        if(cordova.plugins.diagnostic.switchToMobileDataSettings()) {
          q.resolve(true);
        } else {
          q.reject('Switch to mobile data settings is not supported.');
        }

        return q.promise;
      },

      switchToBluetoothSettings: function () {
        var q = $q.defer();

        if(cordova.plugins.diagnostic.switchToBluetoothSettings()) {
          q.resolve(true);
        } else {
          q.reject('Switch to bluetooth settings is not supported.');
        }

        return q.promise;
      },

      switchToWifiSettings: function () {
        var q = $q.defer();

        if(cordova.plugins.diagnostic.switchToWifiSettings()) {
          q.resolve(true);
        } else {
          q.reject('Switch to wifi settings is not supported.');
        }

        return q.promise;
      },

      /**
       * iOS only
       */

      isLocationEnabledSetting: function () {
        var q = $q.defer();

        cordova.plugins.diagnostic.isLocationEnabledSetting(function (result) {
          q.resolve(result);
        }, function (err) {
          q.reject(err);
        });

        return q.promise;
      },

      isLocationAuthorized: function () {
        var q = $q.defer();

        cordova.plugins.diagnostic.isLocationAuthorized(function (result) {
          q.resolve(result);
        }, function (err) {
          q.reject(err);
        });

        return q.promise;
      },
    };
  }]);
