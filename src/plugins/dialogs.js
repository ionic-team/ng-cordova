// install   :     cordova plugin add org.apache.cordova.dialogs
// link      :     https://github.com/apache/cordova-plugin-dialogs/blob/master/doc/index.md

angular.module('ngCordova.plugins.dialogs', [])

  .factory('$cordovaDialogs', ['$q', function ($q) {

    return {
      alert: function (message, title, buttonName) {
        var d = $q.defer();

        navigator.notification.alert(message, function () {
          d.resolve();
        }, title, buttonName);

        return d.promise;
      },

      confirm: function (message, title, buttonLabels) {
        var d = $q.defer();

        navigator.notification.confirm(message, function (buttonIndex) {
          d.resolve(buttonIndex);
        }, title, buttonLabels);

        return d.promise;
      },

      prompt: function (message, title, buttonLabels, defaultText) {
        var d = $q.defer();

        navigator.notification.prompt(message, function (result) {
          d.resolve(result);
        }, title, buttonLabels, defaultText);

        return d.promise;
      },

      beep: function (times) {
        return navigator.notification.beep(times);
      }
    };
  }]);
