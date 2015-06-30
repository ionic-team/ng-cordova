System.register('ng-cordova/printer', [], function (_export) {
  // install   : cordova plugin add https://github.com/katzer/cordova-plugin-printer.git
  // link      : https://github.com/katzer/cordova-plugin-printer

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.printer', []).factory('$cordovaPrinter', ['$q', '$window', function ($q, $window) {

        return {
          isAvailable: function isAvailable() {
            var q = $q.defer();

            $window.plugin.printer.isAvailable(function (isAvailable) {
              q.resolve(isAvailable);
            });

            return q.promise;
          },

          print: function print(doc, options) {
            var q = $q.defer();
            $window.plugin.printer.print(doc, options, function () {
              q.resolve();
            });
            return q.promise;
          }
        };
      }]);
    }
  };
});