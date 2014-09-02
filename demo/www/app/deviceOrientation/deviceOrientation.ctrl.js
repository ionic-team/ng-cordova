angular.module('demo.deviceOrientation.ctrl', [])

  .controller('DeviceOrientationCtrl', function ($scope, $timeout, $cordovaDeviceOrientation, $ionicModal) {

    var options = { frequency: 1000 }; // Update every 1 seconds

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

      $scope.this_watch.promise.then(function () { /* unused */
        },
        function (err) {
          $scope.msg = err.message
        }, function (position) {
          $timeout(function () {
            $scope.heading = position;
          })
        });
    };

    $scope.clearWatch = function () {
      $cordovaDeviceOrientation
        .clearWatch($scope.this_watch.watchId)
        .then(function (result) {
          // Success!
        }, function (err) {
          // An error occured. Show a message to the user
        });
    };


    /*
     Ionic modal with source code
     */

    $ionicModal.fromTemplateUrl('app/deviceOrientation/deviceOrientation-source.html', {
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
