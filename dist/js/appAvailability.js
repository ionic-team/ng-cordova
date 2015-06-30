System.register('ng-cordova/appAvailability', [], function (_export) {
  // install  :     cordova plugin add https://github.com/ohh2ahh/AppAvailability.git
  // link     :     https://github.com/ohh2ahh/AppAvailability

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.appAvailability', []).factory('$cordovaAppAvailability', ['$q', function ($q) {

        return {
          check: function check(urlScheme) {
            var q = $q.defer();

            appAvailability.check(urlScheme, function (result) {
              q.resolve(result);
            }, function (err) {
              q.reject(err);
            });

            return q.promise;
          }
        };
      }]);
    }
  };
});