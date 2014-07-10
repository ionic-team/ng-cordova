angular.module('ngCordova.plugins.deviceOrientation', [])

.factory('$cordovaDeviceOrientation', ['$q', function($q) {

  return {
    getCurrentHeading: function() {
      var q = $q.defer();

      navigator.compass.getCurrentHeading(function(heading) {
        q.resolve(heading);
      }, function(err) {
        q.reject(err);
      });

      return q.promise;
    },
    watchHeading: function(options) {
      var q = $q.defer();

      var watchId = navigator.compass.watchHeading(function(result) {
        q.notify(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return {
        watchId: watchId,
        promise: q.promise
      }
    },
    clearWatch: function(watchID) {
      navigator.compass.clearWatch();
    }
  }
}]);
