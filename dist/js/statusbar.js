System.register('ng-cordova/statusbar', [], function (_export) {
  // install   :      cordova plugin add cordova-plugin-statusbar
  // link      :      https://github.com/apache/cordova-plugin-statusbar

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.statusbar', []).factory('$cordovaStatusbar', [function () {

        return {
          overlaysWebView: function overlaysWebView(bool) {
            return StatusBar.overlaysWebView(!!bool);
          },

          STYLES: {
            DEFAULT: 0,
            LIGHT_CONTENT: 1,
            BLACK_TRANSLUCENT: 2,
            BLACK_OPAQUE: 3
          },

          style: function style(_style) {
            switch (_style) {
              // Default
              case 0:
                return StatusBar.styleDefault();

              // LightContent
              case 1:
                return StatusBar.styleLightContent();

              // BlackTranslucent
              case 2:
                return StatusBar.styleBlackTranslucent();

              // BlackOpaque
              case 3:
                return StatusBar.styleBlackOpaque();

              default:
                return StatusBar.styleDefault();
            }
          },

          // supported names:
          // black, darkGray, lightGray, white, gray, red, green,
          // blue, cyan, yellow, magenta, orange, purple, brown
          styleColor: function styleColor(color) {
            return StatusBar.backgroundColorByName(color);
          },

          styleHex: function styleHex(colorHex) {
            return StatusBar.backgroundColorByHexString(colorHex);
          },

          hide: function hide() {
            return StatusBar.hide();
          },

          show: function show() {
            return StatusBar.show();
          },

          isVisible: function isVisible() {
            return StatusBar.isVisible;
          }
        };
      }]);
    }
  };
});