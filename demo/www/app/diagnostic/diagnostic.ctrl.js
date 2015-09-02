angular.module('demo.diagnostic.ctrl', [])

  .controller('DiagnosticCtrl', function ($scope, $cordovaDiagnostic) {

    $scope.isLocationEnabled = function () {

      $cordovaGeolocation
        .isLocationEnabled()
        .then(function (result) {
          console.log("location enabled");
          $scope.locationEnabled = result;
        }, function (err) {
          console.log("unable to get location status");
          $scope.errorMsg = "Error : " + err.message;
        });
    };

  });
