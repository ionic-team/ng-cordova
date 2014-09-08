// install   :      cordova plugin add https://github.com/shazron/KeychainPlugin.git
// link      :      https://github.com/shazron/KeychainPlugin

angular.module('ngCordova.plugins.keychain', [])

  .factory('$cordovaKeychain', ['$q', function ($q) {

    var kc = new Keychain();

    return {
      getForKey: function (key, serviceName) {
        var defer = $q.defer();

        kc.getForKey(function (value) {
          defer.resolve(value);
        }, function (error) {
          defer.reject(error);
        }, key, serviceName);

        return defer.promise;
      },

      setForKey: function (key, serviceName, value) {
        var defer = $q.defer();

        kc.setForKey(function () {
          defer.resolve();
        }, function (error) {
          defer.reject(error);
        }, key, serviceName, value);

        return defer.promise;
      },

      removeForKey: function (ey, serviceName) {
        var defer = $q.defer();

        kc.removeForKey(function () {
          defer.resolve();
        }, function (error) {
          defer.reject(error);
        }, key, serviceName);

        return defer.promise;
      }
    }
  }]);