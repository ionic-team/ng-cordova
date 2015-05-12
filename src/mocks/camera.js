/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaCamera
 *
 * @description
 * A service for testing camera features
 * in an app build with ngCordova.
 **/
ngCordovaMocks.factory('$cordovaCamera', ['$q', function ($q) {
  var throwsError = false;
  var imageData = '';

  return {

    /**
     * @ngdoc property
     * @name throwsError
     * @propertyOf ngCordovaMocks.cordovaCamera
     *
     * @description
     * A flag that signals whether a promise should be rejected or not.
     * This property should only be used in automated tests.
     **/
    throwsError: throwsError,

    /**
     * @ngdoc property
     * @name imageData
     * @propertyOf ngCordovaMocks.cordovaCamera
     *
     * @description
     * The imagedata (e.g. an url) which will be returned from the device.
     * This property should only be used in automated tests.
     **/
    imageData: imageData,

    getPicture: function (options) {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error getting the picture.');
      } else {
        if (options) {
          options = options;	// This is just to get by JSHint.
        }

        defer.resolve(this.imageData);
      }

      return defer.promise;
    }
  };
}]);
