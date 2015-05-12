/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaSplashscreen
 *
 * @description
 * A service for testing the splash screen
 * in an app build with ngCordova.
 */
ngCordovaMocks.factory('$cordovaSplashscreen', function () {
  var isVisible = false;

  return {
    /**
     * @ngdoc property
     * @name isVisible
     * @propertyOf ngCordovaMocks.cordovaSplashscreen
     *
     * @description
     * A flag that signals whether the splash screen is visible or not.
     * This property should only be used in automated tests.
     **/
    isVisible: isVisible,

    hide: function () {
      // do nothing. everything happens behind the scenes in this case.
      // its a stub that is present for completeness.
      this.isVisible = false;
      return true;
    },
    show: function () {
      // do nothing. everything happens behind the scenes in this case.
      // its a stub that is present for completeness.
      this.isVisible = true;
      return true;
    }
  };
});
