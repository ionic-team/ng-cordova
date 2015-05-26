angular.module('demo.qrcodeScanner.ctrl', [])

  .controller('QRCodeScannerCtrl', function ($scope, $cordovaQRCodeScanner) {

    $scope.scan = function () {
      $cordovaQRCodeScanner
        .scan()
        .then(function (result) {
          $scope.scanResult = result;
        }, function (err) {
          $scope.scanResult = 'SCAN ERROR (see console)';
          console.error(err);
        });
    };
  });
