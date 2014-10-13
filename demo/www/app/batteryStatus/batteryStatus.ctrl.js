angular.module('demo.batteryStatus.ctrl', [])

  .controller('BatteryStatusCtrl', function ($scope, $timeout, $cordovaBatteryStatus, $ionicModal) {


    $scope.watch = function () {
      $cordovaBatteryStatus.$on('batterystatus', function (result) {
        $timeout(function () {
          $scope.batteryLevel = result.level;       // (0 - 100)
          $scope.isPluggedIn = result.isPlugged;   // bool
          console.log("result" + result);
        });
        console.log("result" + result);

      });

      console.log("now active, watching");
      /*

       $cordovaBatteryStatus.$on('batterycritical', function (result) {
       $scope.batteryLevel = result.level;       // (0 - 100)
       $scope.isPluggedIn = result.isPlugged;   // bool
       });

       $cordovaBatteryStatus.$on('batterylow', function (result) {
       $scope.batteryLevel = result.level;       // (0 - 100)
       $scope.isPluggedIn = result.isPlugged;   // bool
       });

       */
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
