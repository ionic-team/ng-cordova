/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaInstagram
 *
 * @description
 * A service for testing instagram features
 * in an app build with ngCordova.
 **/
ngCordovaMocks.factory('$cordovaInstagram', ['$q', function ($q) {
  var throwsError = false;
  var returnIsInstalled = true;

  return {

    /**
     * @ngdoc property
     * @name throwsError
     * @propertyOf ngCordovaMocks.cordovaInstagram
     *
     * @description
     * A flag that signals whether a promise should be rejected or not.
     * This property should only be used in automated tests.
     **/
    throwsError: throwsError,

    /**
     * @ngdoc property
     * @name returnIsInstalled
     * @propertyOf ngCordovaMocks.cordovaInstagram
     *
     * @description
     * A flag that signals whether the mock should simulate that the instagram app
     * is installed or not.
     * This property should only be used in automated tests.
     **/
    returnIsInstalled: returnIsInstalled,

    share: function (options) {
      if(this.throwsError) {
        return $q.reject('an error occurred');
      }
      return $q.when(true);
    },


    isInstalled: function () {
      if(this.throwsError) {
        return $q.reject('an error occurred');
      }
      return $q.when(this.returnIsInstalled);
    }
  }
}]);
