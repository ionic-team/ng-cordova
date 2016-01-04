//  install   :   cordova plugin add https://github.com/don/cordova-plugin-ble-central.git
//  link      :   https://github.com/don/cordova-plugin-ble-central

/* globals ble: true */
angular.module('ngCordova.plugins.ble', [])

  .factory('$cordovaBLE', ['$q', '$timeout', function ($q, $timeout) {

    return {
      scan: function (services, seconds) {
        var q = $q.defer();

        ble.startScan(services, function (result) {
          q.notify(result);
        }, function (error) {
          q.reject(error);
        });

        $timeout(function () {
            ble.stopScan(function () {
              q.resolve();
            }, function (error) {
              q.reject(error);
            });
        }, seconds*1000);

        return q.promise;
      },

      /**
        * Note, can't use promise for this method because error callback is not only called when
        * a connection is attempted and fails, it is also called when a successful connection
        * is broken. Examples of later-broken connections are user turns power off of BLE device
        * or move out of range
        *
        * @param deviceID
        * @param successCallback
        * @param errorCallback called with one parameter, the BLE peripheral object
 	      */
      connect: function (deviceID, successCallback, errorCallback) {
        ble.connect(deviceID, successCallback, errorCallback);
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

     /**
      * Writes data to a characteristic without confirmation from the peripheral.
      *
      * TODO update docs/api regarding relevancy of success/error callbacks given the no-response nature of this api.
      *
      * @param deviceID
      * @param serviceUUID
      * @param characteristicUUID
      * @param data If binary, use ArrayBuffer https://github.com/don/cordova-plugin-ble-central#typed-arrays
      */
      writeWithoutResponse: function (deviceID, serviceUUID, characteristicUUID, data) {
        var q = $q.defer();
        ble.writeWithoutResponse(deviceID, serviceUUID, characteristicUUID, data, function (result) {
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

	  /**
       * Note, can't use promise for this method because dataCallback is not a success callback,
       * it's a persistent, repeat event handler called whenever there's incoming data from
       * the BLE peripheral.
       *
       * @param deviceID
       * @param serviceUUID
       * @param characteristicUUID
       * @param dataCallback called with one parameter, the data
       * @param errorCallback called with one parameter, the BLE peripheral object
       */
      startNotification: function (deviceID, serviceUUID, characteristicUUID, dataCallback, errorCallback) {
        ble.startNotification(deviceID, serviceUUID, characteristicUUID, dataCallback, errorCallback);
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

      isConnected: function (deviceID) {
        var q = $q.defer();
        ble.isConnected(deviceID, function (result) {
          q.resolve(result);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },
	  
	  /**
       * Prompts the user to enable Bluetooth.
       */
      enable: function() {
        var q = $q.defer();
        ble.enable(function() {
          q.resolve();
        }, function() {
          q.reject();
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
