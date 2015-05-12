/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaBLE
 *
 * @description
 * A service for ble features
 * in an app build with ngCordova.
 **/
ngCordovaMocks.factory('$cordovaBLE', ['$q', '$timeout', function ($q, $timeout) {
  var deviceScan = {
    name: 'Test Device',
    id: 'AA:BB:CC:DD:EE:FF',
    advertising: [2, 1, 6, 3, 3, 15, 24, 8, 9, 66, 97, 116, 116, 101, 114, 121],
    rssi: -55
  };

  var deviceConnect = {
    name: 'Test Device',
    id: 'AA:BB:CC:DD:EE:FF',
    advertising: [2, 1, 6, 3, 3, 15, 24, 8, 9, 66, 97, 116, 116, 101, 114, 121],
    rssi: -55,
    services: [
      '1800',
      '1801',
      '180f'
    ],
    characteristics: [
      {
        service: '1800',
        characteristic: '2a00',
        properties: ['Read']
      },
      {
        service: '1800',
        characteristic: '2a01',
        properties: ['Read']
      },
      {
        service: '1801',
        characteristic: '2a05',
        properties: ['Read']
      },
      {
        service: '180f',
        characteristic: '2a19',
        properties: ['Read'],
        descriptors: [{'uuid': '2901'}, {'uuid': '2904'}]
      }
    ]
  };

  var readData = new ArrayBuffer(8);

  return {

    scan: function (services, seconds) {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(deviceScan);
      }, seconds * 1000);
      return q.promise;
    },

    connect: function (deviceID) {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(deviceConnect);
      }, 1500);
      return q.promise;
    },

    disconnect: function (deviceID) {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(true);
      }, 500);
      return q.promise;
    },

    read: function (deviceID, serviceUUID, characteristicUUID) {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(readData);
      }, 100);
      return q.promise;
    },

    write: function (deviceID, serviceUUID, characteristicUUID, data) {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(true);
      }, 100);
      return q.promise;
    },

    writeCommand: function (deviceID, serviceUUID, characteristicUUID, data) {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(true);
      }, 100);
      return q.promise;
    },

    notify: function (deviceID, serviceUUID, characteristicUUID) {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(true);
      }, 100);
      return q.promise;
    },

    indicate: function (deviceID, serviceUUID, characteristicUUID) {
      var q = $q.defer();
      $timeout(function () {
        q.resolve(true);
      }, 100);
      return q.promise;
    },

    isConnected: function (deviceID) {
      var q = $q.defer();
      q.resolve(true);
      return q.promise;
    },

    isEnabled: function () {
      var q = $q.defer();
      q.resolve(true);
      return q.promise;
    }
  };
}]);
