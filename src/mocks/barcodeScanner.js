/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaBarcodeScanner
 *
 * @description
 * A service for testing barcode scanner features
 * in an app build with ngCordova.
 **/
ngCordovaMocks.factory('$cordovaBarcodeScanner', ['$q', function ($q) {
  var throwsError = false;

  var scannedText = '';
  var scannedFormat = '';
  var wasCancelled = false;

  return {
    /**
     * @ngdoc property
     * @name throwsError
     * @propertyOf ngCordovaMocks.cordovaBarcodeScanner
     *
     * @description
     * A flag that signals whether a promise should be rejected or not.
     * This property should only be used in automated tests.
     **/
    throwsError: throwsError,

    /**
     * @ngdoc property
     * @name scannedText
     * @propertyOf ngCordovaMocks.cordovaBarcodeScanner
     *
     * @description
     * Used to simulate the result.text property of a
     * successful scan. For more information, see the text at
     * https://github.com/wildabeast/BarcodeScanner/#using-the-plugin
     * This property should only be used in automated tests.
     **/
    scannedText: scannedText,

    /**
     * @ngdoc property
     * @name scannedFormat
     * @propertyOf ngCordovaMocks.cordovaBarcodeScanner
     * @description
     * Used to simulate the result.format property of a
     * successful scan. For more information, see the text at
     * https://github.com/wildabeast/BarcodeScanner/#using-the-plugin
     * This property should only be used in automated tests.
     **/
    scannedFormat: scannedFormat,

    /**
     * @ngdoc property
     * @name wasCancelled
     * @propertyOf ngCordovaMocks.cordovaBarcodeScanner
     *
     * @description
     * Used to simulate the result.cancelled property of a
     * successful scan. For more information, see the text at
     * https://github.com/wildabeast/BarcodeScanner/#using-the-plugin
     * This property should only be used in automated tests.
     **/
    wasCancelled: wasCancelled,

    scan: function () {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error scanning.');
      } else {
        defer.resolve({text: this.scannedText, format: this.scannedFormat, cancelled: this.wasCancelled});
      }

      return defer.promise;
    },

    encode: function (type, data) {
      this.scannedFormat = type;
      this.scannedText = data;

      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error encoding the data.');
      } else {
        defer.resolve();
      }

      return defer.promise;
    }
  };
}]);
