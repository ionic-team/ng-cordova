ngCordovaMocks.factory('$cordovaAppVersion', ['$q', function ($q) {
  var throwsError = false;
  return {
    throwsError: throwsError,

    getAppName: function () {
      var q = $q.defer();
      q.resolve('mock app name');
      return q.promise;
    },

    getPackageName: function () {
      var q = $q.defer();
      q.resolve('com.package.mock');
      return q.promise;
    },

    getVersionNumber: function () {
      var q = $q.defer();
      q.resolve('1.2.3');
      return q.promise;
    },

    getVersionCode: function () {
      var q = $q.defer();
      q.resolve('4.5.6');
      return q.promise;
    }
  };
}]);
