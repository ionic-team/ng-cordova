System.register('ng-cordova/flashlight', [], function (_export) {
  // install   :     cordova plugin add https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin.git
  // link      :     https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.flashlight', []).factory('$cordovaFlashlight', ['$q', '$window', function ($q, $window) {

        return {
          available: function available() {
            var q = $q.defer();
            $window.plugins.flashlight.available(function (isAvailable) {
              q.resolve(isAvailable);
            });
            return q.promise;
          },

          switchOn: function switchOn() {
            var q = $q.defer();
            $window.plugins.flashlight.switchOn(function (response) {
              q.resolve(response);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          switchOff: function switchOff() {
            var q = $q.defer();
            $window.plugins.flashlight.switchOff(function (response) {
              q.resolve(response);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          toggle: function toggle() {
            var q = $q.defer();
            $window.plugins.flashlight.toggle(function (response) {
              q.resolve(response);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          }
        };
      }]);
    }
  };
});