angular.module('demo.dialogs.ctrl', [])

  .controller('DialogsCtrl', function ($scope, $cordovaDialogs) {

    $scope.action = "Press any button";

    $scope.alert = function () {
      $scope.action = "Alert";
      $cordovaDialogs.alert('Wow!');
    };

    $scope.confirm = function () {
      $scope.action = "Confirm";
      $cordovaDialogs.confirm('Are you sure?');
    };

    $scope.prompt = function () {
      $scope.action = "Prompt";
      $cordovaDialogs.prompt('Please Login');
    };

    $scope.beep = function () {
      $scope.action = "Beep";
      $cordovaDialogs.beep(3);
    }

  });

