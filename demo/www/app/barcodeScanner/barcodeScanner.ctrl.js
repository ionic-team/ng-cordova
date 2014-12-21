angular.module('demo.barcodeScanner.ctrl', [])

  .controller('BarcodeScannerCtrl', function ($scope, $cordovaBarcodeScanner) {

    $scope.scan = function () {
      $cordovaBarcodeScanner
        .scan()
        .then(function (result) {
          $scope.scanResult = result;
        }, function (err) {
          $scope.scanResult = 'SCAN ERROR (see console)';
          console.error(err);
        });
    };
  });
