System.register('ng-cordova/keychain', [], function (_export) {
  // install   :      cordova plugin add https://github.com/shazron/KeychainPlugin.git
  // link      :      https://github.com/shazron/KeychainPlugin

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.keychain', []).factory('$cordovaKeychain', ['$q', function ($q) {

        return {
          getForKey: function getForKey(key, serviceName) {
            var defer = $q.defer(),
                kc = new Keychain();

            kc.getForKey(defer.resolve, defer.reject, key, serviceName);

            return defer.promise;
          },

          setForKey: function setForKey(key, serviceName, value) {
            var defer = $q.defer(),
                kc = new Keychain();

            kc.setForKey(defer.resolve, defer.reject, key, serviceName, value);

            return defer.promise;
          },

          removeForKey: function removeForKey(key, serviceName) {
            var defer = $q.defer(),
                kc = new Keychain();

            kc.removeForKey(defer.resolve, defer.reject, key, serviceName);

            return defer.promise;
          }
        };
      }]);
    }
  };
});