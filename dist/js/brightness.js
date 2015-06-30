System.register('ng-cordova/brightness', [], function (_export) {
  // install  :    cordova plugin add https://github.com/fiscal-cliff/phonegap-plugin-brightness.git
  // link     :    https://github.com/fiscal-cliff/phonegap-plugin-brightness

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.brightness', []).factory('$cordovaBrightness', ['$q', '$window', function ($q, $window) {

        return {
          get: function get() {
            var q = $q.defer();

            $window.cordova.plugins.brightness.getBrightness(function (result) {
              q.resolve(result);
            }, function (err) {
              q.reject(err);
            });

            return q.promise;
          },

          set: function set(data) {
            var q = $q.defer();

            $window.cordova.plugins.brightness.setBrightness(data, function (result) {
              q.resolve(result);
            }, function (err) {
              q.reject(err);
            });

            return q.promise;
          },

          setKeepScreenOn: function setKeepScreenOn(bool) {
            var q = $q.defer();

            $window.cordova.plugins.brightness.setKeepScreenOn(bool, function (result) {
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