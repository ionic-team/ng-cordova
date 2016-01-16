// install   :      cordova plugin add cordova-plugin-vibration
// link      :      https://github.com/apache/cordova-plugin-vibration

angular.module('ngCordova.plugins.vibration', [])

  .factory('$cordovaVibration', [function () {

    return {
      vibrate: function (timeOrPattern) {
        return navigator.vibrate(timeOrPattern);
      }
    };
  }]);
