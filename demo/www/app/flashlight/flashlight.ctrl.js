angular.module('demo.flashlight.ctrl', [])

  .controller('FlashlightCtrl', function ($scope, $cordovaFlashlight, $ionicModal) {
    $scope.on = function () {
      $cordovaFlashlight.switchOn();
    };
    $scope.off = function () {
      $cordovaFlashlight.switchOff();
    };



    /*
     Ionic modal with source code
     */

    $ionicModal.fromTemplateUrl('app/flashlight/flashlight-source.html', {
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