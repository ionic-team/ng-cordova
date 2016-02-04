/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaCapture
 *
 * @description
 * A service for testing media capture
 * in an app build with ngCordova.
 *
 * @example
 */
ngCordovaMocks.factory('$cordovaCapture', ['$q', function ($q) {
  var throwsError = false;

  return {
    /**
     * @ngdoc property
     * @name throwsError
     * @propertyOf ngCordovaMocks.cordovaCapture
     *
     * @description
     * A flag that signals whether a promise should be rejected or not.
     * This property should only be used in automated tests.
     **/
    throwsError: throwsError,

    captureAudio: function () {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error capturing the audio.');
      } else {
        defer.resolve();
      }

      return defer.promise;
    },

    captureImage: function () {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error capturing the image.');
      } else {
        defer.resolve();
      }

      return defer.promise;
    },

    captureVideo: function () {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error capturing the video.');
      } else {
        defer.resolve();
      }

      return defer.promise;
    }
  };
}]);
