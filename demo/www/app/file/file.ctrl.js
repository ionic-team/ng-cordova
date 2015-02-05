angular.module('demo.file.ctrl', [])

  .controller('FileCtrl', function ($scope, $log, $cordovaFile) {


    $scope.inputs = {
      checkDir: "/documents",
      checkFile: ""
    };


    $scope.checkDir = function () {
      document.addEventListener('deviceready', function () {
        $cordovaFile.checkDir($scope.inputs.checkDir).then(function (success) {
          console.log('success ' + JSON.stringify(success));
          $scope.checkDirResult = success;
        }, function (error) {
          console.log('success ' + JSON.stringify(error));
          $scope.checkDirResult = error;
        });

      });

    };


    $scope.checkFile = function () {
      document.addEventListener('deviceready', function () {
        $cordovaFile.checkFile($scope.inputs.checkFile).then(function (success) {
          console.log('success ' + JSON.stringify(success));
          $scope.checkFileResult = success;
        }, function (error) {
          console.log('success ' + JSON.stringify(error));
          $scope.checkFileResult = error;
        });
      });
    };







  });
