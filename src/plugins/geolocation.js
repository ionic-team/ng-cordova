// install   :     cordova plugin add org.apache.cordova.geolocation
// link      :     https://github.com/apache/cordova-plugin-geolocation/blob/master/doc/index.md

angular.module('ngCordova.plugins.geolocation', [])

  .factory('$cordovaGeolocation', ['$q', 'cordovaReady', function ($q, cordovaReady) {

    return {
      getCurrentPosition: cordovaReady(function (options) {
        var q = $q.defer();

        navigator.geolocation.getCurrentPosition(function (result) {
          q.resolve(result);
        }, function (err) {
          q.reject(err);
        }, options);

        return q.promise;
      }),

      watchPosition: cordovaReady(function (options) {
        var q = $q.defer();

        var watchId = navigator.geolocation.watchPosition(function (result) {
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
        return navigator.geolocation.clearWatch(watchID);
      })
    };
  }]);
