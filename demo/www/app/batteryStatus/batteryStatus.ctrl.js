angular.module('demo.batteryStatus.ctrl', [])

  .controller('BatteryStatusCtrl', function ($scope, $timeout, $cordovaBatteryStatus) {

    console.log("battery status init");

    document.addEventListener("deviceready", function () {
      $scope.watch = function () {
        console.log("watching battery");
        $cordovaBatteryStatus.$on('batterystatus', function (result) {
          $timeout(function () {
            $scope.batteryLevel = result.level;       // (0 - 100)
            $scope.isPluggedIn = result.isPlugged;   // bool
          });
          alert("result" + result);
        });
      };
    }, false);


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
  });
