angular.module('demo.dialogs.ctrl', [])

  .controller('DialogsCtrl', function ($scope, $cordovaDialogs, $ionicModal) {

    $scope.action = "Press any button";

    $scope.alert = function () {
      $scope.action = "Alert";
      $cordovaDialogs.alert('Wow!');
    };

    $scope.confirm = function () {
      $scope.action = "Confirm";
      $cordovaDialogs.confirm('Are you sure?', "Custom title").then(function (buttonIndex) {
        $cordovaDialogs.alert("Button index : " + buttonIndex);
      });
    };

    $scope.prompt = function () {
      $scope.action = "Prompt";
      $cordovaDialogs.prompt('Please Login', "Custom title").then(function (result) {
        $cordovaDialogs.alert("Input: " + result.input1 + "\n Button index : " + result.buttonIndex);
      });
    };

    $scope.beep = function () {
      $scope.action = "Beep";
      $cordovaDialogs.beep(3);
    };


    /*
     Ionic modal with source code
     */

    $ionicModal.fromTemplateUrl('app/dialogs/dialogs-source.html', {
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

