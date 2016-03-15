// install   :     cordova plugin add cordova-plugin-dialogs
// link      :     https://github.com/apache/cordova-plugin-dialogs

angular.module('ngCordova.plugins.dialogs', [])

  .factory('$cordovaDialogs', ['$q', '$window', function ($q, $window) {

    return {
      alert: function (message, title, buttonName) {
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

      confirm: function (message, title, buttonLabels) {
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

      prompt: function (message, title, buttonLabels, defaultText) {
        var q = $q.defer();

        if (!$window.navigator.notification) {
          var res = $window.prompt(message, defaultText);
          if (res !== null) {
            q.resolve({input1: res, buttonIndex: 1});
          } else {
            q.resolve({input1: res, buttonIndex: 2});
          }
        } else {
          navigator.notification.prompt(message, function (result) {
            q.resolve(result);
          }, title, buttonLabels, defaultText);
        }
        return q.promise;
      },

      beep: function (times) {
        return navigator.notification.beep(times);
      },

      activityStart: function (message, title) {
        var q = $q.defer();

        if (cordova.platformId === 'android') {
          navigator.notification.activityStart(title, message);
          q.resolve();
        } else {
          q.reject(message, title);
        }
      
        return q.promise;
      },

      activityStop: function () {
        var q = $q.defer();

        if (cordova.platformId === 'android') {
          navigator.notification.activityStop();
          q.resolve();
        } else {
          q.reject();
        }
      
        return q.promise;
      },

      progressStart: function (message, title) {
        var q = $q.defer();

        if (cordova.platformId === 'android') {
          navigator.notification.progressStart(title, message);
          q.resolve();
        } else {
          q.reject(message, title);
        }
      
        return q.promise;
      },

      progressStop: function () {
        var q = $q.defer();

        if (cordova.platformId === 'android') {
          navigator.notification.progressStop();
          q.resolve();
        } else {
          q.reject();
        }
      
        return q.promise;
      },

      progressValue: function (value) {
        var q = $q.defer();

        if (cordova.platformId === 'android') {
          navigator.notification.progressValue(value);
          q.resolve();
        } else {
          q.reject(value);
        }
      
        return q.promise;
      }
    };
  }]);
