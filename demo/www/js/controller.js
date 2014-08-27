angular.module('starter.controller', [])

  .controller('AboutCtrl', function ($scope) {
    $scope.title = "About";
    var init = function () {
      $scope.version = "01.01"
    };
    init();
  });