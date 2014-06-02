angular.module('ngCordova.plugins.splashscreen', [])

  .factory('Splashscreen', ['$q', function($q) {

    return {
      hide: function () {
        return navigator.splashscreen.hide();
      },

      show: function () {
        return navigator.splashscreen.show();
      }
    };

  }]);