angular.module('demo.deviceOrientation.ctrl', [])

  .controller('DeviceOrientationCtrl', function ($scope, $timeout, $cordovaDeviceOrientation) {

    var options = {frequency: 1000}; // Update every 1 seconds

    $scope.getHeading = function () {
      $cordovaDeviceOrientation
        .getCurrentHeading()
        .then(function (position) {
          $scope.heading = position;
        }, function (err) {
          $scope.msg = err.message;
        });
    };


    $scope.watchHeading = function () {
      $scope.this_watch = $cordovaDeviceOrientation.watchHeading(options);

      $scope.this_watch.then(
        function () {
          /* unused */
        },
        function (err) {
          $scope.msg = err.message;
        },
        function (position) {
          $timeout(function () {
            $scope.heading = position;
          });
        }
      );

    };

    $scope.clearWatch = function () {
      $cordovaDeviceOrientation.clearWatch($scope.this_watch.watchID);
    };

  });
