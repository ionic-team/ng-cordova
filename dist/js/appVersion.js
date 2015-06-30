System.register('ng-cordova/appVersion', [], function (_export) {
  // install   :     cordova plugin add https://github.com/whiteoctober/cordova-plugin-app-version.git
  // link      :     https://github.com/whiteoctober/cordova-plugin-app-version

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.appVersion', []).factory('$cordovaAppVersion', ['$q', function ($q) {

        return {
          getAppVersion: function getAppVersion() {
            var q = $q.defer();
            cordova.getAppVersion(function (version) {
              q.resolve(version);
            });

            return q.promise;
          }
        };
      }]);
    }
  };
});