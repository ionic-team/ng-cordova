angular.module('ngCordova.plugins.bluetoothSerial', [])

.factory('$cordovaBluetoothSerial', ['$q' , function ($q) {

  var promise_f = function() {
    var q = $q.defer();

    // callbacks
    var success =  function (success) {
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

    cordova.plugins.bluetoothSerial[f_name].apply(this, args);

    return q.promise;
  };

  return {
    connect:          promise_f('connect', macAddress),
    connectInsecure:  promise_f('connectInsecure', macAddress),
    disconnect:       promise_f('disconnect'),
    list:             promise_f('list'),
    isEnabled:        promise_f('isEnabled'),
    isConnected:      promise_f('isConnected'),
    available:        promise_f('available'),
    read:             promise_f('read'),
    readUntil:        promise_f('readUntil', delimiter),
    write:            promise_f('write', data),
    subscribe:        promise_f('subscribe', delimiter),
    unsubscribe:      promise_f('unsubscribe'),
    clear:            promise_f('clear'),
    readRSSI:         promise_f('readRSSI')
  };
}]);
