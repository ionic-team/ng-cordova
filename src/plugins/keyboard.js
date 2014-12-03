// install   :      cordova plugin add https://github.com/driftyco/ionic-plugins-keyboard.git
// link      :      https://github.com/driftyco/ionic-plugins-keyboard

//TODO: add support for native.keyboardshow + native.keyboardhide

angular.module('ngCordova.plugins.keyboard', [])

  .factory('$cordovaKeyboard', ['cordovaReady', function (cordovaReady) {

    return {
      hideAccessoryBar: cordovaReady(function (bool) {
        return cordova.plugins.Keyboard.hideKeyboardAccessoryBar(bool);
      }),

      close: cordovaReady(function () {
        return cordova.plugins.Keyboard.close();
      }),

      disableScroll: cordovaReady(function (bool) {
        return cordova.plugins.Keyboard.disableScroll(bool);
      }),

      isVisible: cordovaReady(function () {
        return cordova.plugins.Keyboard.isVisible;
      })
    };
  }]);
