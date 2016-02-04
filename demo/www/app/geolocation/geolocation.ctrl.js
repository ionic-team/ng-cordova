angular.module('demo.geolocation.ctrl', [])

  .controller('GeolocationCtrl', function ($scope, $cordovaGeolocation) {

    $scope.getLocation = function () {

      $cordovaGeolocation
        .getCurrentPosition({timeout: 10000, enableHighAccuracy: false})
        .then(function (position) {
          console.log("position found");
          $scope.position = position;
          // long = position.coords.longitude
          // lat = position.coords.latitude
        }, function (err) {
          console.log("unable to find location");
          $scope.errorMsg = "Error : " + err.message;
        });
    };

  });
