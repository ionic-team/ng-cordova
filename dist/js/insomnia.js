System.register('ng-cordova/insomnia', [], function (_export) {
  // install  :     cordova plugin add https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin.git
  // link     :     https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin
  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.insomnia', []).factory('$cordovaInsomnia', ['$window', function ($window) {

        return {
          keepAwake: function keepAwake() {
            return $window.plugins.insomnia.keepAwake();
          },
          allowSleepAgain: function allowSleepAgain() {
            return $window.plugins.insomnia.allowSleepAgain();
          }
        };
      }]);
    }
  };
});