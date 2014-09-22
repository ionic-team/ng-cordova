// install   :      cordova plugin add https://github.com/driftyco/ionic-plugins-keyboard.git
// link      :      https://github.com/driftyco/ionic-plugins-keyboard

angular.module('ngCordova.plugins.keyboard', [])

  .factory('$cordovaKeyboard', ['$window', '$rootScope', function($window, $rootScope) {

    $window.addEventListener('native.keyboardshow', function(e) {
      $rootScope.$broadcast(e.type, e.keyboardHeight);
    });

    $window.addEventListener('native.keyboardhide', function(e) {
      $rootScope.$broadcast(e.type);
    });

    return {
      hideAccessoryBar: function (bool) {
        return cordova.plugins.Keyboard.hideKeyboardAccessoryBar(bool);
      },

      close: function () {
        return cordova.plugins.Keyboard.close();
      },

      disableScroll: function (bool) {
        return cordova.plugins.Keyboard.disableScroll(bool);
      },

      isVisible: function () {
        return cordova.plugins.Keyboard.isVisible
      }
    }
  }]);
