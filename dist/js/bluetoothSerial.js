System.register('ng-cordova/bluetoothSerial', [], function (_export) {
  // install   :     cordova plugin add https://github.com/don/BluetoothSerial.git
  // link      :     https://github.com/don/BluetoothSerial

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.bluetoothSerial', []).factory('$cordovaBluetoothSerial', ['$q', '$window', function ($q, $window) {

        return {
          connect: function connect(address) {
            var q = $q.defer();
            $window.bluetoothSerial.connect(address, function () {
              q.resolve();
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          // not supported on iOS
          connectInsecure: function connectInsecure(address) {
            var q = $q.defer();
            $window.bluetoothSerial.connectInsecure(address, function () {
              q.resolve();
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          disconnect: function disconnect() {
            var q = $q.defer();
            $window.bluetoothSerial.disconnect(function () {
              q.resolve();
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          list: function list() {
            var q = $q.defer();
            $window.bluetoothSerial.list(function (data) {
              q.resolve(data);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          discoverUnpaired: function discoverUnpaired() {
            var q = $q.defer();
            $window.bluetoothSerial.discoverUnpaired(function (data) {
              q.resolve(data);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          setDeviceDiscoveredListener: function setDeviceDiscoveredListener() {
            var q = $q.defer();
            $window.bluetoothSerial.setDeviceDiscoveredListener(function (data) {
              q.notify(data);
            });
            return q.promise;
          },

          clearDeviceDiscoveredListener: function clearDeviceDiscoveredListener() {
            $window.bluetoothSerial.clearDeviceDiscoveredListener();
          },

          showBluetoothSettings: function showBluetoothSettings() {
            var q = $q.defer();
            $window.bluetoothSerial.showBluetoothSettings(function () {
              q.resolve();
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          isEnabled: function isEnabled() {
            var q = $q.defer();
            $window.bluetoothSerial.isEnabled(function () {
              q.resolve();
            }, function () {
              q.reject();
            });
            return q.promise;
          },

          enable: function enable() {
            var q = $q.defer();
            $window.bluetoothSerial.enable(function () {
              q.resolve();
            }, function () {
              q.reject();
            });
            return q.promise;
          },

          isConnected: function isConnected() {
            var q = $q.defer();
            $window.bluetoothSerial.isConnected(function () {
              q.resolve();
            }, function () {
              q.reject();
            });
            return q.promise;
          },

          available: function available() {
            var q = $q.defer();
            $window.bluetoothSerial.available(function (data) {
              q.resolve(data);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          read: function read() {
            var q = $q.defer();
            $window.bluetoothSerial.read(function (data) {
              q.resolve(data);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          readUntil: function readUntil(delimiter) {
            var q = $q.defer();
            $window.bluetoothSerial.readUntil(delimiter, function (data) {
              q.resolve(data);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          write: function write(data) {
            var q = $q.defer();
            $window.bluetoothSerial.write(data, function () {
              q.resolve();
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          subscribe: function subscribe(delimiter) {
            var q = $q.defer();
            $window.bluetoothSerial.subscribe(delimiter, function (data) {
              q.notify(data);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          subscribeRawData: function subscribeRawData() {
            var q = $q.defer();
            $window.bluetoothSerial.subscribeRawData(function (data) {
              q.notify(data);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          unsubscribe: function unsubscribe() {
            var q = $q.defer();
            $window.bluetoothSerial.unsubscribe(function () {
              q.resolve();
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          unsubscribeRawData: function unsubscribeRawData() {
            var q = $q.defer();
            $window.bluetoothSerial.unsubscribeRawData(function () {
              q.resolve();
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          clear: function clear() {
            var q = $q.defer();
            $window.bluetoothSerial.clear(function () {
              q.resolve();
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          readRSSI: function readRSSI() {
            var q = $q.defer();
            $window.bluetoothSerial.readRSSI(function (data) {
              q.resolve(data);
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