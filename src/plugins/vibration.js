// install   :      cordova plugin add org.apache.cordova.vibration
// link      :      https://github.com/apache/cordova-plugin-vibration/blob/master/doc/index.md

angular.module('ngCordova.plugins.vibration', [])

  .factory('$cordovaVibration', ['$cordova', function ($cordova) {

    return {
      vibrate: function (times) {
        $cordova.ready().then(function () {
          return navigator.notification.vibrate(times);
        });
      },
      vibrateWithPattern: function (pattern, repeat) {
        $cordova.ready().then(function () {
          return navigator.notification.vibrateWithPattern(pattern, repeat);
        });
      },
      cancelVibration: function () {
        $cordova.ready().then(function () {
          return navigator.notification.cancelVibration();
        });
      }
    }
  }]);
