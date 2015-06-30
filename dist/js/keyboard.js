System.register('ng-cordova/keyboard', [], function (_export) {
  // install   :      cordova plugin add https://github.com/driftyco/ionic-plugins-keyboard.git
  // link      :      https://github.com/driftyco/ionic-plugins-keyboard

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.keyboard', []).factory('$cordovaKeyboard', ['$rootScope', function ($rootScope) {

        var keyboardShowEvent = function keyboardShowEvent() {
          $rootScope.$evalAsync(function () {
            $rootScope.$broadcast('$cordovaKeyboard:show');
          });
        };

        var keyboardHideEvent = function keyboardHideEvent() {
          $rootScope.$evalAsync(function () {
            $rootScope.$broadcast('$cordovaKeyboard:hide');
          });
        };

        document.addEventListener('deviceready', function () {
          if (cordova.plugins.Keyboard) {
            window.addEventListener('native.keyboardshow', keyboardShowEvent, false);
            window.addEventListener('native.keyboardhide', keyboardHideEvent, false);
          }
        });

        return {
          hideAccessoryBar: function hideAccessoryBar(bool) {
            return cordova.plugins.Keyboard.hideKeyboardAccessoryBar(bool);
          },

          close: function close() {
            return cordova.plugins.Keyboard.close();
          },

          show: function show() {
            return cordova.plugins.Keyboard.show();
          },

          disableScroll: function disableScroll(bool) {
            return cordova.plugins.Keyboard.disableScroll(bool);
          },

          isVisible: function isVisible() {
            return cordova.plugins.Keyboard.isVisible;
          },

          clearShowWatch: function clearShowWatch() {
            document.removeEventListener('native.keyboardshow', keyboardShowEvent);
            $rootScope.$$listeners['$cordovaKeyboard:show'] = [];
          },

          clearHideWatch: function clearHideWatch() {
            document.removeEventListener('native.keyboardhide', keyboardHideEvent);
            $rootScope.$$listeners['$cordovaKeyboard:hide'] = [];
          }
        };
      }]);
    }
  };
});