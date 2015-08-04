// install   :      cordova plugin add https://github.com/shazron/KeychainPlugin.git
// link      :      https://github.com/shazron/KeychainPlugin

/* globals Keychain: true */
angular.module('ngCordova.plugins.keychain', [])

  .factory('$cordovaKeychain', ['$q', function ($q) {

    return {
      getForKey: function (key, serviceName) {
        var defer = $q.defer(),
            kc = new Keychain();

        kc.getForKey(defer.resolve, defer.reject, key, serviceName);

        return defer.promise;
      },

      setForKey: function (key, serviceName, value) {
        var defer = $q.defer(),
            kc = new Keychain();

        kc.setForKey(defer.resolve, defer.reject, key, serviceName, value);

        return defer.promise;
      },

      removeForKey: function (key, serviceName) {
        var defer = $q.defer(),
            kc = new Keychain();

        kc.removeForKey(defer.resolve, defer.reject, key, serviceName);

        return defer.promise;
      }
    };
  }]);
