angular.module('ngCordova.plugins.statusbar', [])

.factory('$cordovaStatusbar', [function() {

  return {
  	overlaysWebView: function(bool) {
      return StatusBar.overlaysWebView(true);
	  },

    // styles: Default, LightContent, BlackTranslucent, BlackOpaque
    style: function (style) {
      switch (style) {
        case 0:     // Default
          return StatusBar.styleDefault();
          break;

        case 1:     // LightContent
          return StatusBar.styleLightContent();
          break;

        case 2:     // BlackTranslucent
          return StatusBar.styleBlackTranslucent();
          break;

        case 3:     // BlackOpaque
          return StatusBar.styleBlackOpaque();
          break;

        default:  // Default
          return StatusBar.styleDefault();
      }
    },


    // supported names: black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown
    styleColor: function (color) {
      return StatusBar.backgroundColorByName(color);
    },
    
    styleHex: function (colorHex) {
      return StatusBar.backgroundColorByHexString(colorHex);
    },

    hide: function () {
      return StatusBar.hide();
    },

    show: function () {
      return StatusBar.show()
    },

    isVisible: function () {
      return StatusBar.isVisible();
    }
  }
}]);
