angular.module('demo.statusbar.ctrl', [])


  .controller('StatusbarCtrl', function ($scope, $cordovaStatusbar) {
    $scope.toggleBar = function () {
      if ($cordovaStatusbar.isVisible()) {
        $cordovaStatusbar.hide();
      } else {
        $cordovaStatusbar.show();
      }
    };
  });