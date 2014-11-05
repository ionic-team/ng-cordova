// install   :      cordova plugin add org.apache.cordova.vibration
// link      :      https://github.com/apache/cordova-plugin-vibration/blob/master/doc/index.md

angular.module('ngCordova.plugins.vibration', [])

  .factory('$cordovaVibration', [function () {

    return {
      vibrate: function (times) {
        return navigator.notification.vibrate(times);
      },
      vibrateWithPattern: function (pattern, repeat) {
        return navigator.notification.vibrateWithPattern(pattern, repeat);
      },
      cancelVibration: function () {
        return navigator.notification.cancelVibration();
      }
    };
  }]);
