angular.module('ngCordova.plugins.barcodeScanner', [])

  .factory('BarcodeScanner', ['$q', function ($q) {

    return {
      scan: function () {
        var q = $q.defer();

        cordova.plugins.barcodeScanner.scan(function (result) {
            // Do any magic you need
            q.resolve(result);
          },

          function (err) {
            q.reject(err);
          },
          options);

        return q.promise;
      },

      encode: function (type, data) {
        var q = $q.defer();

        /* TODO needs work for type:
         make the default:  BarcodeScanner.Encode.TEXT_TYPE
         other options: .EMAIL_TYPE, .PHONE_TYPE, .SMS_TYPE

         docs: https://github.com/wildabeast/BarcodeScanner#encoding-a-barcode
         */

        cordova.plugins.barcodeScanner.encode(type, data, function (result) {
            q.resolve(result);
          },

          function (err) {
            q.reject(err);
          });

        return q.promise;
      }
    }
  }]);
