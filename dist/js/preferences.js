System.register('ng-cordova/preferences', [], function (_export) {
  // install   :
  // link      :

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.prefs', []).factory('$cordovaPreferences', ['$window', '$q', function ($window, $q) {

        return {

          set: function set(key, value) {
            var q = $q.defer();

            $window.appgiraffe.plugins.applicationPreferences.set(key, value, function (result) {
              q.resolve(result);
            }, function (err) {
              q.reject(err);
            });

            return q.promise;
          },

          get: function get(key) {
            var q = $q.defer();

            $window.appgiraffe.plugins.applicationPreferences.get(key, function (value) {
              q.resolve(value);
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