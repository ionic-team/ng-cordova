angular.module('ngCordova.plugins.splashscreen', [])

.factory('$cordovaSplashscreen', [ function () {

  return {
    hide: function () {
      if(navigator.splashscreen)
        return navigator.splashscreen.hide();
    },

    show: function () {
      if(navigator.splashscreen)
        return navigator.splashscreen.show();
    }
  };

}]);
