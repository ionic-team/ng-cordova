/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaFileOpener2
 *
 * @description
 * A service for testing fileOpener2
 * in an app build with ngCordova.
 */
ngCordovaMocks.factory('$cordovaFileOpener2', ['$q', function ($q) {

  var throwsError = false;

  return {

    /**
     * @ngdoc property
     * @name throwsError
     * @propertyOf ngCordovaMocks.cordovaFileOpener2
     *
     * @description
     * A flag that signals whether a promise should be rejected or not.
     * This property should only be used in automated tests.
     **/
    throwsError: throwsError,

    open: function (file, type) {

      var defer = $q.defer();

      if (this.throwError) {
        defer.reject({
          status: 0,
          message: 'There was an error capturing the file.'
        });
      } else {
        defer.resolve();
      }

      return defer.promise;

    },

    uninstall: function (pack) {

      var defer = $q.defer();

      if (this.throwError) {
        defer.reject({
          status: 0,
          message: 'There was an error capturing the packageId.'
        });
      } else {
        defer.resolve();
      }

      return defer.promise;

    },

    appIsInstalled: function (pack) {

      var defer = $q.defer();

      if (this.throwError) {
        defer.reject({
          status: 0,
          message: 'There was an error capturing the packageId.'
        });
      } else {
        defer.resolve();
      }

      return defer.promise;

    }

  };

}]);

