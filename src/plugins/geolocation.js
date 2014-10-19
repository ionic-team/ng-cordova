// install   :     cordova plugin add org.apache.cordova.geolocation
// link      :     https://github.com/apache/cordova-plugin-geolocation/blob/master/doc/index.md

angular.module('ngCordova.plugins.geolocation', [])

  .factory('$cordovaGeolocation', ['$q', '$cordova', function ($q, $cordova) {

    return {
      getCurrentPosition: function (options) {
        var q = $q.defer();

        $cordova.ready().then(function () {
          navigator.geolocation.getCurrentPosition(function (result) {
            q.resolve(result);
          }, function (err) {
            q.reject(err);
          }, options);
        });

        return q.promise;
      },
      watchPosition: function (options) {
        var q = $q.defer();

        var watchId;
        $cordova.ready().then(function () {
           watchId = navigator.geolocation.watchPosition(function (result) {
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
          return navigator.geolocation.clearWatch(watchID);
        })
      }
    }
  }]);
