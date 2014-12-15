angular.module('demo.appRate.ctrl', [])

  .controller('AppRateCtrl', function ($scope, $log, $cordovaAppRate) {

      $scope.promptRating = function () {
          console.log("prompt")
          $cordovaAppRate.promptForRating(true).then(function (result) {
              console.log("result");
          }, function (error) {
              console.log("ERROR: " + error);
          })
      };
  });
