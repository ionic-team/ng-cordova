/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaToast
 *
 * @description
 * A service for testing toasts
 * in an app build with ngCordova.
 *
 * @example
 */
ngCordovaMocks.factory('$cordovaToast', ['$q', function ($q) {
  var throwsError = false;

  return {
    /**
     * @ngdoc property
     * @name throwsError
     * @propertyOf ngCordovaMocks.cordovaToast
     *
     * @description
     * A flag that signals whether a promise should be rejected or not.
     * This property should only be used in automated tests.
     **/
    throwsError: throwsError,

    showShortTop: function (message) {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error showing the toast.');
      } else {
        defer.resolve();
      }
      return defer.promise;
    },
    showShortCenter: function (message) {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error showing the toast.');
      } else {
        defer.resolve();
      }
      return defer.promise;
    },
    showShortBottom: function (message) {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error showing the toast.');
      } else {
        defer.resolve();
      }
      return defer.promise;
    },
    showLongTop: function (message) {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error showing the toast.');
      } else {
        defer.resolve();
      }
      return defer.promise;
    },
    showLongCenter: function (message) {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error showing the toast.');
      } else {
        defer.resolve();
      }
      return defer.promise;
    },
    showLongBottom: function (message) {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error showing the toast.');
      } else {
        defer.resolve();
      }
      return defer.promise;
    },
    show: function (message, duration, position) {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error showing the toast.');
      } else {
        defer.resolve();
      }
      return defer.promise;
    }
  };
}]);
