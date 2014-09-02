angular.module('ngCordova.plugins.keychain', [])

  .factory('$cordovaKeychain', ['$q', function ($q) {

    var kc = new Keychain();

    return {
      getForKey: function(key, servicename) {
        var defer = $q.defer();

        kc.getForKey(function (value) {
          defer.resolve(value);
        }, function (error) {
          defer.reject(error);
        }, key, servicename);

        return defer.promise;
      },

      setForKey: function(key, servicename, value) {
        var defer = $q.defer();

        kc.setForKey(function () {
          defer.resolve();
        }, function (error) {
          defer.reject(error);
        }, key, servicename, value);

        return defer.promise;
      },

      removeForKey: function( ey, servicename) {
        var defer = $q.defer();

        kc.removeForKey(function () {
          defer.resolve();
        }, function (error) {
          defer.reject(error);
        }, key, servicename);

        return defer.promise;
      }
    }
  }]);