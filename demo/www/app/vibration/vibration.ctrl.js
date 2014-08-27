angular.module('demo.vibration.ctrl', [])

  .controller('VibrationCtrl', function($scope, $cordovaVibration) {

    $scope.duration = 100;

    var vibrate = function(){
      console.log("vibrating");
      $cordovaVibration.vibrate($scope.duration);
    }
  });
