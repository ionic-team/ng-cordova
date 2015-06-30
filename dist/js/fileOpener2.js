System.register('ng-cordova/fileOpener2', [], function (_export) {
  // install   :      cordova plugin add https://github.com/pwlin/cordova-plugin-file-opener2.git
  // link      :      https://github.com/pwlin/cordova-plugin-file-opener2

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.fileOpener2', []).factory('$cordovaFileOpener2', ['$q', function ($q) {

        return {
          open: function open(file, type) {
            var q = $q.defer();
            cordova.plugins.fileOpener2.open(file, type, {
              error: function error(e) {
                q.reject(e);
              }, success: function success() {
                q.resolve();
              }
            });
            return q.promise;
          },

          uninstall: function uninstall(pack) {
            var q = $q.defer();
            cordova.plugins.fileOpener2.uninstall(pack, {
              error: function error(e) {
                q.reject(e);
              }, success: function success() {
                q.resolve();
              }
            });
            return q.promise;
          },

          appIsInstalled: function appIsInstalled(pack) {
            var q = $q.defer();
            cordova.plugins.fileOpener2.appIsInstalled(pack, {
              success: function success(res) {
                q.resolve(res);
              }
            });
            return q.promise;
          }
        };
      }]);
    }
  };
});