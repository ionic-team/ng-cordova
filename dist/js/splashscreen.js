System.register('ng-cordova/splashscreen', [], function (_export) {
  // install   :      cordova plugin add cordova-plugin-splashscreen
  // link      :      https://github.com/apache/cordova-plugin-splashscreen

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.splashscreen', []).factory('$cordovaSplashscreen', [function () {

        return {
          hide: function hide() {
            return navigator.splashscreen.hide();
          },

          show: function show() {
            return navigator.splashscreen.show();
          }
        };
      }]);
    }
  };
});