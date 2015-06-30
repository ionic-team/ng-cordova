System.register('ng-cordova/camera', [], function (_export) {
  // install   :   cordova plugin add cordova-plugin-camera
  // link      :   https://github.com/apache/cordova-plugin-camera

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.camera', []).factory('$cordovaCamera', ['$q', function ($q) {

        return {
          getPicture: function getPicture(options) {
            var q = $q.defer();

            if (!navigator.camera) {
              q.resolve(null);
              return q.promise;
            }

            navigator.camera.getPicture(function (imageData) {
              q.resolve(imageData);
            }, function (err) {
              q.reject(err);
            }, options);

            return q.promise;
          },

          cleanup: function cleanup() {
            var q = $q.defer();

            navigator.camera.cleanup(function () {
              q.resolve();
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