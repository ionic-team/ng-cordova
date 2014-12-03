// install   :     cordova plugin add org.apache.cordova.device-motion
// link      :     https://github.com/apache/cordova-plugin-device-motion/blob/master/doc/index.md

angular.module('ngCordova.plugins.deviceMotion', [])

  .factory('$cordovaDeviceMotion', ['$q', 'cordovaReady', function ($q, cordovaReady) {

    return {
      getCurrentAcceleration: cordovaReady(function () {
        var q = $q.defer();

        navigator.accelerometer.getCurrentAcceleration(function (result) {
          q.resolve(result);
        }, function (err) {
          q.reject(err);
        });

        return q.promise;
      }),

      watchAcceleration: cordovaReady(function (options) {
        var q = $q.defer();

        var watchId = navigator.accelerometer.watchAcceleration(function (result) {
          //q.resolve(watchID);
          q.notify(result);
        }, function (err) {
          q.reject(err);
        }, options);

        return {
          watchId: watchId,
          promise: q.promise
        };
      }),

      clearWatch: cordovaReady(function (watchID) {
        return navigator.accelerometer.clearWatch(watchID);
      })
    };
  }]);
