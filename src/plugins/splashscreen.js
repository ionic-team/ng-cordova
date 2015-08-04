// install   :      cordova plugin add cordova-plugin-splashscreen
// link      :      https://github.com/apache/cordova-plugin-splashscreen

angular.module('ngCordova.plugins.splashscreen', [])

  .factory('$cordovaSplashscreen', [function () {

    return {
      hide: function () {
        return navigator.splashscreen.hide();
      },

      show: function () {
        return navigator.splashscreen.show();
      }
    };

  }]);
