// install   :     cordova plugin add org.apache.cordova.device-motion
// link      :     https://github.com/apache/cordova-plugin-device-motion/blob/master/doc/index.md

angular.module('ngCordova.plugins.deviceMotion', [])

  .factory('$cordovaDeviceMotion', ['$q', '$cordova', function ($q, $cordova) {

    return {
      getCurrentAcceleration: function () {
        var q = $q.defer();

        $cordova.ready().then(function () {
          navigator.accelerometer.getCurrentAcceleration(function (result) {
            q.resolve(result);
          }, function (err) {
            q.reject(err);
          });
        });
        return q.promise;
      },

      watchAcceleration: function (options) {
        var q = $q.defer();

        var watchId;
        $cordova.ready().then(function () {
          watchId = navigator.accelerometer.watchAcceleration(function (result) {
            q.notify(result);
          }, function (err) {
            q.reject(err);
          }, options);
        });

        return {
          watchId: watchId,
          promise: q.promise
        }
      },

      clearWatch: function (watchID) {
        $cordova.ready().then(function () {
          return navigator.accelerometer.clearWatch(watchID);
        });
      }
    }
  }]);
