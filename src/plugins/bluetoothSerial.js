// install   :
// link      :

angular.module('ngCordova.plugins.bluetoothSerial', [])

  .factory('$cordovaBluetoothSerial', ['$q', '$window', function ($q, $window) {

    var promise_f = function () {
      var q = $q.defer();

      // callbacks
      var success = function (success) {
        q.resolve(success);
      };
      var failure = function (failure) {
        q.reject(failure);
      };

      // get func and set args
      var f_name = arguments[0];
      var args = Array.prototype.slice.call(arguments, 1, arguments.length);
      args.push(success);
      args.push(failure);

      $window.bluetoothSerial[f_name].apply(this, args);

      return q.promise;
    };

    return {
      connect: function (macAddress) {
        return promise_f('connect', macAddress);
      },
      connectInsecure: function (macAddress) {
        return promise_f('connectInsecure', macAddress);
      },
      disconnect: function () {
        return promise_f('disconnect');
      },
      list: function () {
        return promise_f('list');
      },
      isEnabled: function () {
        return promise_f('isEnabled');
      },
      isConnected: function () {
        return promise_f('isConnected');
      },
      available: function () {
        return promise_f('available');
      },
      read: function () {
        return promise_f('read');
      },
      readUntil: function (delimiter) {
        return promise_f('readUntil', delimiter);
      },
      write: function (data) {
        return promise_f('write', data);
      },
      subscribe: function (delimiter) {
        return promise_f('subscribe', delimiter);
      },
      unsubscribe: function () {
        return promise_f('unsubscribe');
      },
      clear: function () {
        return promise_f('clear');
      },
      readRSSI: function () {
        return promise_f('readRSSI');
      }
    };
  }]);
