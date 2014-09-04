// install   :     cordova plugin add org.apache.cordova.dialogs
// link      :     https://github.com/apache/cordova-plugin-dialogs/blob/master/doc/index.md

angular.module('ngCordova.plugins.dialogs', [])

  .factory('$cordovaDialogs', [function () {

    return {
      alert: function (message, callback, title, buttonName) {
        return navigator.notification.alert.apply(navigator.notification, arguments);
      },

      confirm: function (message, callback, title, buttonName) {
        return navigator.notification.confirm.apply(navigator.notification, arguments);
      },

      prompt: function (message, promptCallback, title, buttonLabels, defaultText) {
        return navigator.notification.prompt.apply(navigator.notification, arguments);
      },

      beep: function (times) {
        return navigator.notification.beep(times);
      }
    }
  }]);
