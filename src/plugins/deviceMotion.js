angular.module('ngCordova.plugins.deviceMotion', [])

.factory('$cordovaDeviceMotion', ['$q', function($q) {

  return {
    getCurrentAcceleration: function() {
      var q = $q.defer();

      navigator.accelerometer.getCurrentAcceleration(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      });

      return q.promise;
    },
    watchAcceleration: function(options) {
      var q = $q.defer();

      navigator.accelerometer.watchAcceleration(function(result) {
        // Do any magic you need
        q.notify(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return q.promise;
    },
    clearWatch: function(watchID) {
      return navigator.accelerometer.clearWatch(watchID);
    }
  }
}]);
