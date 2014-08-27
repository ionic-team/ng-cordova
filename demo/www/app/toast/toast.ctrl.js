angular.module('demo.toast.ctrl', [])


  .controller('ToastCtrl', function ($scope, $cordovaToast) {

    $scope.toastMessage = 'enter a message';

    $scope.center = function (message) {
      $cordovaToast.show(message, 'long', 'center')
        .then(function (success) {
          console.log("center msg displayed");
        }, function (error) {
          $scope.msg = error.message;
        });
    };

    $scope.top = function (message) {

      $cordovaToast
        .showShortTop(message)
        .then(function (success) {
          console.log("short top displayed ");
        }, function (error) {
          $scope.msg = error.message;
        });
    };


    $scope.bottom = function (message) {
      $cordovaToast
        .showLongBottom(message)
        .then(function (success) {
          console.log("long bottom displayed");
        }, function (error) {
          $scope.msg = error.message;
        });
    }
  });
