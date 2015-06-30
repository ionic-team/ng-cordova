System.register('ng-cordova/ble', [], function (_export) {
  //  install   :   cordova plugin add https://github.com/don/cordova-plugin-ble-central.git
  //  link      :   https://github.com/don/cordova-plugin-ble-central

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.ble', []).factory('$cordovaBLE', ['$q', function ($q) {

        return {
          scan: function scan(services, seconds) {
            var q = $q.defer();
            ble.scan(services, seconds, function (result) {
              q.resolve(result);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          connect: function connect(deviceID) {
            var q = $q.defer();
            ble.connect(deviceID, function (result) {
              q.resolve(result);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          disconnect: function disconnect(deviceID) {
            var q = $q.defer();
            ble.disconnect(deviceID, function (result) {
              q.resolve(result);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          read: function read(deviceID, serviceUUID, characteristicUUID) {
            var q = $q.defer();
            ble.read(deviceID, serviceUUID, characteristicUUID, function (result) {
              q.resolve(result);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          write: function write(deviceID, serviceUUID, characteristicUUID, data) {
            var q = $q.defer();
            ble.write(deviceID, serviceUUID, characteristicUUID, data, function (result) {
              q.resolve(result);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          writeCommand: function writeCommand(deviceID, serviceUUID, characteristicUUID, data) {
            var q = $q.defer();
            ble.writeCommand(deviceID, serviceUUID, characteristicUUID, data, function (result) {
              q.resolve(result);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          startNotification: function startNotification(deviceID, serviceUUID, characteristicUUID) {
            var q = $q.defer();
            ble.startNotification(deviceID, serviceUUID, characteristicUUID, function (result) {
              q.resolve(result);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          stopNotification: function stopNotification(deviceID, serviceUUID, characteristicUUID) {
            var q = $q.defer();
            ble.stopNotification(deviceID, serviceUUID, characteristicUUID, function (result) {
              q.resolve(result);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          isConnected: function isConnected(deviceID) {
            var q = $q.defer();
            ble.isConnected(deviceID, function (result) {
              q.resolve(result);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          isEnabled: function isEnabled() {
            var q = $q.defer();
            ble.isEnabled(function (result) {
              q.resolve(result);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          }
        };
      }]);
    }
  };
});