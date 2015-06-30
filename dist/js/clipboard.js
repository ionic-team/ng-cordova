System.register('ng-cordova/clipboard', [], function (_export) {
  // install   :     cordova plugin add https://github.com/VersoSolutions/CordovaClipboard.git
  // link      :     https://github.com/VersoSolutions/CordovaClipboard

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.clipboard', []).factory('$cordovaClipboard', ['$q', '$window', function ($q, $window) {

        return {
          copy: function copy(text) {
            var q = $q.defer();

            $window.cordova.plugins.clipboard.copy(text, function () {
              q.resolve();
            }, function () {
              q.reject();
            });

            return q.promise;
          },

          paste: function paste() {
            var q = $q.defer();

            $window.cordova.plugins.clipboard.paste(function (text) {
              q.resolve(text);
            }, function () {
              q.reject();
            });

            return q.promise;
          }
        };
      }]);
    }
  };
});