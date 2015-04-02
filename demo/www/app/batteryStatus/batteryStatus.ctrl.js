angular.module('demo.batteryStatus.ctrl', [])

  .controller('BatteryStatusCtrl', function ($scope, $timeout, $cordovaBatteryStatus) {

    console.log("battery status init");

    document.addEventListener("deviceready", function () {
      $scope.watch = function () {
        console.log("watching battery");
        $cordovaBatteryStatus.$on('batterystatus', function (result, info) {
          $timeout(function () {
            $scope.batteryLevel = info.level;       // (0 - 100)
            $scope.isPluggedIn = info.isPlugged;   // bool
          });
          alert("Info " + info.level + " " + info.isPlugged);
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
