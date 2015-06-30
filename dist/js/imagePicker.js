System.register('ng-cordova/imagePicker', [], function (_export) {
  // install  :     cordova plugin add https://github.com/wymsee/cordova-imagePicker.git
  // link     :     https://github.com/wymsee/cordova-imagePicker

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.imagePicker', []).factory('$cordovaImagePicker', ['$q', '$window', function ($q, $window) {

        return {
          getPictures: function getPictures(options) {
            var q = $q.defer();

            $window.imagePicker.getPictures(function (results) {
              q.resolve(results);
            }, function (error) {
              q.reject(error);
            }, options);

            return q.promise;
          }
        };
      }]);
    }
  };
});