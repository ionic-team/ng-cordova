angular.module('ngCordova.plugins.deviceOrientation', [])

.factory('$cordovaDeviceOrientation', ['$q', function($q) {

  return {
    watchHeading: function(options) {
      var q = $q.defer();

      navigator.compass.watchHeading(function(result) {
        q.notify(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return q.promise;
    }
  }
}]);
