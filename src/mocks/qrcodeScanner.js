/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaQRCodeScanner
 *
 * @description
 * A service for testing qrcode scanner features
 * in an app build with ngCordova.
 **/
ngCordovaMocks.factory('$cordovaQRCodeScanner', ['$q', function ($q) {
  var throwsError = false;

  var scannedText = '';
  var wasCancelled = false;

  return {
    /**
     * @ngdoc property
     * @name throwsError
     * @propertyOf ngCordovaMocks.cordovaQRCodeScanner
     *
     * @description
     * A flag that signals whether a promise should be rejected or not.
     * This property should only be used in automated tests.
     **/
    throwsError: throwsError,

    /**
     * @ngdoc property
     * @name scannedText
     * @propertyOf ngCordovaMocks.cordovaQRCodeScanner
     *
     * @description
     * Used to simulate the result.text property of a
     * successful scan. For more information, see the text at
     * https://github.com/wladiston/QRCodeScanner/#using-the-plugin
     * This property should only be used in automated tests.
     **/
    scannedText: scannedText,

    /**
     * @ngdoc property
     * @name wasCancelled
     * @propertyOf ngCordovaMocks.cordovaQRCodeScanner
     *
     * @description
     * Used to simulate the result.cancelled property of a
     * successful scan. For more information, see the text at
     * https://github.com/wladiston/QRCodeScanner/#using-the-plugin
     * This property should only be used in automated tests.
     **/
    wasCancelled: wasCancelled,

    scan: function () {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error scanning.');
      } else {
        defer.resolve({text: this.scannedText, cancelled: this.wasCancelled});
      }

      return defer.promise;
    }
  };
}]);
