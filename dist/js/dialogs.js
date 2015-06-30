System.register('ng-cordova/dialogs', [], function (_export) {
  // install   :     cordova plugin add cordova-plugin-dialogs
  // link      :     https://github.com/apache/cordova-plugin-dialogs

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.dialogs', []).factory('$cordovaDialogs', ['$q', '$window', function ($q, $window) {

        return {
          alert: function alert(message, title, buttonName) {
            var q = $q.defer();

            if (!$window.navigator.notification) {
              $window.alert(message);
              q.resolve();
            } else {
              navigator.notification.alert(message, function () {
                q.resolve();
              }, title, buttonName);
            }

            return q.promise;
          },

          confirm: function confirm(message, title, buttonLabels) {
            var q = $q.defer();

            if (!$window.navigator.notification) {
              if ($window.confirm(message)) {
                q.resolve(1);
              } else {
                q.resolve(2);
              }
            } else {
              navigator.notification.confirm(message, function (buttonIndex) {
                q.resolve(buttonIndex);
              }, title, buttonLabels);
            }

            return q.promise;
          },

          prompt: function prompt(message, title, buttonLabels, defaultText) {
            var q = $q.defer();

            if (!$window.navigator.notification) {
              var res = $window.prompt(message, defaultText);
              if (res !== null) {
                q.resolve({ input1: res, buttonIndex: 1 });
              } else {
                q.resolve({ input1: res, buttonIndex: 2 });
              }
            } else {
              navigator.notification.prompt(message, function (result) {
                q.resolve(result);
              }, title, buttonLabels, defaultText);
            }
            return q.promise;
          },

          beep: function beep(times) {
            return navigator.notification.beep(times);
          }
        };
      }]);
    }
  };
});