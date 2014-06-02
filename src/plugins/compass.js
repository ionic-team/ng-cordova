angular.module('ngCordova.plugins.compass', [])

.factory('Compass', ['$q', function($q) {

  return {
    watchHeading: function(options) {
      var q = $q.defer();

      navigator.compass.watchHeading(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return q.promise;
    }
  }
}]);
