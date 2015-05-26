// install  :    cordova plugin add https://github.com/wladiston/QRCodeScanner.git
// link     :    https://github.com/wladiston/QRCodeScanner

angular.module('ngCordova.plugins.qrcodeScanner', [])

    .factory('$cordovaQRCodeScanner', ['$q', function ($q) {

        return {
            scan: function (config) {
                var q = $q.defer();

                cordova.plugins.qrcodeScanner.scan(function (result) {
                    q.resolve(result);
                }, function (err) {
                    q.reject(err);
                }, config);

                return q.promise;
            }
        };
    }]);
