/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaNavigationbar
 *
 * @description
 * A service for testing the navigation bar
 * in an app build with ngCordova.
 */
ngCordovaMocks.factory('$cordovaStatusbar', function() {

  return {

    styleHex: function(colorHex) {
      // TODO: review
      return colorHex;
    },

  };
});
