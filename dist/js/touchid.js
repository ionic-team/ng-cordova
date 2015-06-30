System.register('ng-cordova/touchid', [], function (_export) {
  // install   :      cordova plugin add https://github.com/leecrossley/cordova-plugin-touchid.git
  // link      :      https://github.com/leecrossley/cordova-plugin-touchid

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.touchid', []).factory('$cordovaTouchID', ['$q', function ($q) {

        return {
          checkSupport: function checkSupport() {
            var defer = $q.defer();
            if (!window.cordova) {
              defer.reject('Not supported without cordova.js');
            } else {
              touchid.checkSupport(function (value) {
                defer.resolve(value);
              }, function (err) {
                defer.reject(err);
              });
            }

            return defer.promise;
          },

          authenticate: function authenticate(auth_reason_text) {
            var defer = $q.defer();
            if (!window.cordova) {
              defer.reject('Not supported without cordova.js');
            } else {
              touchid.authenticate(function (value) {
                defer.resolve(value);
              }, function (err) {
                defer.reject(err);
              }, auth_reason_text);
            }

            return defer.promise;
          }
        };
      }]);
    }
  };
});