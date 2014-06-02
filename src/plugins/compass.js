angular.module('ngCordova.plugins.compass', [])

.factory('$cordovaCompass', ['$q', function($q) {

  return {
    watchHeading: function(options) {
      var q = $q.defer();

      navigator.compass.watchHeading(function(result) {
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return q.promise;
    }
  }
}]);
