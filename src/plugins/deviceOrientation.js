// install   :     cordova plugin add org.apache.cordova.device-orientation
// link      :     https://github.com/apache/cordova-plugin-device-orientation/blob/master/doc/index.md

angular.module('ngCordova.plugins.deviceOrientation', [])

  .factory('$cordovaDeviceOrientation', ['$q', '$cordova', function ($q, $cordova) {

    return {
      getCurrentHeading: function () {
        var q = $q.defer();

          navigator.compass.getCurrentHeading(function (heading) {
            q.resolve(heading);
          }, function (err) {
            q.reject(err);
          });


        return q.promise;
      },

      watchHeading: function (options) {
        var q = $q.defer();
        var watchId;

        $cordova.ready().then(function () {
          watchId = navigator.compass.watchHeading(function (result) {
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
          return navigator.compass.clearWatch(watchID);
        });
      }
    }
  }]);
