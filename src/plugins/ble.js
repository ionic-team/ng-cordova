//  install   :   cordova plugin add com.megster.cordova.ble
//  link      :   https://github.com/don/cordova-plugin-ble-central

angular.module('ngCordova.plugins.ble', [])

  .factory('$cordovaBLE', ['$q', '$timeout', function ($q, $timeout) {

    var scanning = null;

    return {
      scan: function (services, seconds) {
        var q = $q.defer();
        var devices = [];
        ble.scan(services, seconds, function (result) {
          devices.push(result);
          q.notify(result);
        }, function (error) {
          q.reject(error);
        });

        $timeout(function () {
          q.resolve(devices);
        }, seconds*1000);

        return q.promise;
      },

      startScan: function(services) {
        var q = $q.defer();
        ble.startScan(services, function (result) {
          q.notify(result);
        }, function (error) {
          q.reject(error);
        });
        scanning = q.promise;
        return q.promise;
      },

      stopScan: function() {
        if(scanning !== null) {
          scanning.resolve();
          scanning = null;
        }
        var q = $q.defer();
        ble.stopScan(function (result) {
          q.resolve(result);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      connect: function (deviceID) {
        var q = $q.defer();
        ble.connect(deviceID, function (result) {
          q.resolve(result);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      disconnect: function (deviceID) {
        var q = $q.defer();
        ble.disconnect(deviceID, function (result) {
          q.resolve(result);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      read: function (deviceID, serviceUUID, characteristicUUID) {
        var q = $q.defer();
        ble.read(deviceID, serviceUUID, characteristicUUID, function (result) {
          q.resolve(result);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      write: function (deviceID, serviceUUID, characteristicUUID, data) {
        var q = $q.defer();
        ble.write(deviceID, serviceUUID, characteristicUUID, data, function (result) {
          q.resolve(result);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      writeCommand: function (deviceID, serviceUUID, characteristicUUID, data) {
        var q = $q.defer();
        ble.writeCommand(deviceID, serviceUUID, characteristicUUID, data, function (result) {
          q.resolve(result);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      writeWithoutResponse: function (deviceID, serviceUUID, characteristicUUID, data) {
        var q = $q.defer();
        ble.writeWithoutResponse(deviceID, serviceUUID, characteristicUUID, data, function (result) {
          q.resolve(result);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      notify: function (deviceID, serviceUUID, characteristicUUID) {
        var q = $q.defer();
        ble.notify(deviceID, serviceUUID, characteristicUUID, function (result) {
          q.resolve(result);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      startNotification: function (deviceID, serviceUUID, characteristicUUID) {
        var q = $q.defer();
        ble.startNotification(deviceID, serviceUUID, characteristicUUID, function (result) {
          q.resolve(result);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      stopNotification: function (deviceID, serviceUUID, characteristicUUID) {
        var q = $q.defer();
        ble.stopNotification(deviceID, serviceUUID, characteristicUUID, function (result) {
          q.resolve(result);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      indicate: function (deviceID, serviceUUID, characteristicUUID) {
        var q = $q.defer();
        ble.indicate(deviceID, serviceUUID, characteristicUUID, function (result) {
          q.resolve(result);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      isConnected: function (deviceID) {
        var q = $q.defer();
        ble.isConnected(deviceID, function (result) {
          q.resolve(result);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      isEnabled: function () {
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
