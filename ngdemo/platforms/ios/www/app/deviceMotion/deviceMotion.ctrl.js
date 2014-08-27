angular.module('demo.deviceMotion.ctrl', [])

  .controller('DeviceMotionCtrl', function ($scope, $cordovaDeviceMotion) {
    var watchID;

    var updateMotion = function (result) {
      $scope.x = result.x;
      $scope.y = result.y;
      $scope.z = result.z;
      $scope.timeStammp = result.timeStamp;
      $scope.msg = "";
      console.log("updated device motion");
    };

    $scope.getAcceleration = function () {
      $cordovaDeviceMotion.getCurrentAcceleration().then(function (result) {
        updateMotion(result);
      }, function (err) {
        $scope.msg = err.message;
      });
    };

    $scope.watchAcceleration = function () {
      var options = { frequency: 3000 };  // Update every 3 seconds

      watchID = $cordovaDeviceMotion.watchAcceleration(options).then(
        function () {
          /* unused */
        },
        function (err) {

          $scope.msg = err.message;
        },
        function (acceleration) {
          updateMotion(acceleration);
        });
    };

    $scope.clearWatch = function () {
      // use watchID from watchAccelaration()

      $cordovaDeviceMotion.clearWatch(watchID).then(function (result) {
        $scope.msg = "watch cleared";
      }, function (err) {
        $scope.msg = err.message;
      });
    }
  });

