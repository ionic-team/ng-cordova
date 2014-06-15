angular.module('ngCordova.plugins.appAvailability', [])

.factory('$cordovaAppAvailability', ['$q', function ($q) {

  return {
    check: function(urlScheme) {
      var q = $q.defer();

      appAvailability.check(urlScheme, function (result) {
        q.resolve(result);
      }, function (err) {
        q.reject(err);
      });

      return q.promise;
    }
  }
}]);