System.register('ng-cordova/zip', [], function (_export) {
  // install  :     cordova plugin add https://github.com/MobileChromeApps/zip.git
  // link     :     https://github.com/MobileChromeApps/zip

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.zip', []).factory('$cordovaZip', ['$q', '$window', function ($q, $window) {

        return {
          unzip: function unzip(source, destination) {
            var q = $q.defer();

            $window.zip.unzip(source, destination, function (isError) {
              if (isError === 0) {
                q.resolve();
              } else {
                q.reject();
              }
            }, function (progressEvent) {
              q.notify(progressEvent);
            });

            return q.promise;
          }
        };
      }]);
    }
  };
});