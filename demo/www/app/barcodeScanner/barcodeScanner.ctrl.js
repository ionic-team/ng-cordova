angular.module('demo.barcodeScanner.ctrl', [])

  .controller('BarcodeScannerCtrl', function ($scope, $cordovaBarcodeScanner, $ionicModal) {

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


    /*
     Ionic modal with source code
     */

    $ionicModal.fromTemplateUrl('app/barcodeScanner/barcodeScanner-source.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.closeModal = function () {
      $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
      $scope.modal.remove();
    });

    $scope.showSource = function () {
      $scope.modal.show();
    }
  });