System.register('ng-cordova/badge', [], function (_export) {
  // install  :     cordova plugin add https://github.com/katzer/cordova-plugin-badge.git
  // link     :     https://github.com/katzer/cordova-plugin-badge

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.badge', []).factory('$cordovaBadge', ['$q', function ($q) {

        return {
          hasPermission: function hasPermission() {
            var q = $q.defer();
            cordova.plugins.notification.badge.hasPermission(function (permission) {
              if (permission) {
                q.resolve(true);
              } else {
                q.reject('You do not have permission');
              }
            });

            return q.promise;
          },

          promptForPermission: function promptForPermission() {
            return cordova.plugins.notification.badge.promptForPermission();
          },

          set: function set(number) {
            var q = $q.defer();

            cordova.plugins.notification.badge.hasPermission(function (permission) {
              if (permission) {
                q.resolve(cordova.plugins.notification.badge.set(number));
              } else {
                q.reject('You do not have permission to set Badge');
              }
            });
            return q.promise;
          },

          get: function get() {
            var q = $q.defer();
            cordova.plugins.notification.badge.hasPermission(function (permission) {
              if (permission) {
                cordova.plugins.notification.badge.get(function (badge) {
                  q.resolve(badge);
                });
              } else {
                q.reject('You do not have permission to get Badge');
              }
            });

            return q.promise;
          },

          clear: function clear() {
            var q = $q.defer();

            cordova.plugins.notification.badge.hasPermission(function (permission) {
              if (permission) {
                q.resolve(cordova.plugins.notification.badge.clear());
              } else {
                q.reject('You do not have permission to clear Badge');
              }
            });
            return q.promise;
          },

          configure: function configure(config) {
            return cordova.plugins.notification.badge.configure(config);
          }
        };
      }]);
    }
  };
});