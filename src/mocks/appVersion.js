ngCordovaMocks.factory('$cordovaAppVersion', ['$q', function ($q) {
  var throwsError = false;
  return {
    throwsError: throwsError,
    getAppVersion: function () {
      var defer = $q.defer();
      defer.resolve('mock v');
      return defer.promise;
    }
  };
}]);
