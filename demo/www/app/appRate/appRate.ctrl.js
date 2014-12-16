angular.module('demo.appRate.ctrl', [])

  .controller('AppRateCtrl', function ($scope, $log, $cordovaAppRate) {

      $scope.promptRating = function () {
          $cordovaAppRate.promptForRating(true).then(function (result) {
              console.log("result: " + result);
          }, function (error) {
              console.log("ERROR: " + error);
          })
      };
  });
