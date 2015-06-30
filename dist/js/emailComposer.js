System.register('ng-cordova/emailComposer', [], function (_export) {
  // install  :     cordova plugin add https://github.com/katzer/cordova-plugin-email-composer.git
  // link     :     https://github.com/katzer/cordova-plugin-email-composer

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.emailComposer', []).factory('$cordovaEmailComposer', ['$q', function ($q) {

        return {
          isAvailable: function isAvailable() {
            var q = $q.defer();

            cordova.plugins.email.isAvailable(function (isAvailable) {
              if (isAvailable) {
                q.resolve();
              } else {
                q.reject();
              }
            });

            return q.promise;
          },

          open: function open(properties) {
            var q = $q.defer();

            cordova.plugins.email.open(properties, function () {
              q.reject(); // user closed email composer
            });

            return q.promise;
          },

          addAlias: function addAlias(app, schema) {
            cordova.plugins.email.addAlias(app, schema);
          }
        };
      }]);
    }
  };
});