angular.module('demo.batteryStatus.ctrl', [])

  .controller('BatteryStatusCtrl', function ($scope, $timeout, $cordovaBatteryStatus) {


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
  });
