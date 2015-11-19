// install   :      cordova plugin add cordova-plugin-navigationbar
// link      :      https://github.com/Tobiaswk/cordova-plugin-navigationbar

/* globals NavigationBar: true */
angular.module('ngCordova.plugins.navigationbar', [])

.factory('$cordovaNavigationbar', [function() {

  return {

    styleHex: function(colorHex) {
      return NavigationBar.backgroundColorByHexString(colorHex);
    }

  };
}]);
