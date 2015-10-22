/**
   * @ngdoc service
   * @name ngCordovaMocks.cordovaCarrier
   *
   * @description
   * A service for testing Carrier features
   * in an app built with ngCordova.
   **/
ngCordovaMocks.factory('$cordovaCarrier', ['$q', function ($q) {
  var throwsError = false;

  return {

    throwsError: throwsError,

    getCarrierInfo: function () {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error capturing the audio.');
      } else {
        defer.resolve();
      }

      return defer.promise;
    }
  };
}]);
