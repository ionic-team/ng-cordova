/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaNavigationbar
 *
 * @description
 * A service for testing the navigation bar
 * in an app build with ngCordova.
 */
ngCordovaMocks.factory('$cordovaNavigationbar', function() {

  return {

    styleHex: function(colorHex) {
      // TODO: review
      return colorHex;
    },

  };
});
