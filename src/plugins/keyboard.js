// install   :      cordova plugin add https://github.com/driftyco/ionic-plugins-keyboard.git
// link      :      https://github.com/driftyco/ionic-plugins-keyboard

//TODO: add support for native.keyboardshow + native.keyboardhide

angular.module('ngCordova.plugins.keyboard', [])

  .factory('$cordovaKeyboard', ['$cordova', function ($cordova) {

    return {
      hideAccessoryBar: function (bool) {
        $cordova.ready().then(function () {
          return cordova.plugins.Keyboard.hideKeyboardAccessoryBar(bool);
        });
      },

      close: function () {
        $cordova.ready().then(function () {
          return cordova.plugins.Keyboard.close();
        });
      },

      disableScroll: function (bool) {
        $cordova.ready().then(function () {
          return cordova.plugins.Keyboard.disableScroll(bool);
        });
      },

      isVisible: function () {
        $cordova.ready().then(function () {
          return cordova.plugins.Keyboard.isVisible;
        });
      }
    }
  }]);
