// install  :    cordova plugin add https://github.com/wildabeast/BarcodeScanner.git
// link     :    https://github.com/wildabeast/BarcodeScanner/#using-the-plugin

angular.module('ngCordova.plugins.barcodeScanner', [])

  .factory('$cordovaBarcodeScanner', ['$q', function ($q) {

    return {
      scan: function () {
        var q = $q.defer();

        cordova.plugins.barcodeScanner.scan(q.resolve, q.reject);

        return q.promise;
      },

      encode: function (type, data) {
        var q = $q.defer();
        type = type || "TEXT_TYPE";

        cordova.plugins.barcodeScanner.encode(type, data, q.resolve, q.reject);

        return q.promise;
      }
    };
  }]);
