System.register('ng-cordova/vibration', [], function (_export) {
  // install   :      cordova plugin add cordova-plugin-vibration
  // link      :      https://github.com/apache/cordova-plugin-vibration

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.vibration', []).factory('$cordovaVibration', [function () {

        return {
          vibrate: function vibrate(times) {
            return navigator.notification.vibrate(times);
          },
          vibrateWithPattern: function vibrateWithPattern(pattern, repeat) {
            return navigator.notification.vibrateWithPattern(pattern, repeat);
          },
          cancelVibration: function cancelVibration() {
            return navigator.notification.cancelVibration();
          }
        };
      }]);
    }
  };
});