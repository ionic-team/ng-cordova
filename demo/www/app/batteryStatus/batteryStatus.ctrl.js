angular.module('demo.batteryStatus.ctrl', [])

  .controller('BatteryStatusCtrl', function ($scope, $timeout, $cordovaBatteryStatus) {


    $cordovaBatteryStatus.$on('batterystatus', function (result) {
      $timeout(function () {
        $scope.batteryLevel = result.level;       // (0 - 100)
        $scope.isPluggedIn = result.isPlugged;   // bool
        console.log("result" + result);
      });
      console.log("result" + result);
    });


    $cordovaBatteryStatus.$on('batterycritical', function (result) {
      $scope.batteryLevel = result.level;       // (0 - 100)
      $scope.isPluggedIn = result.isPlugged;   // bool
    });

    $cordovaBatteryStatus.$on('batterylow', function (result) {
      $scope.batteryLevel = result.level;       // (0 - 100)
      $scope.isPluggedIn = result.isPlugged;   // bool
    });


  });
