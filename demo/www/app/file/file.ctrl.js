angular.module('demo.file.ctrl', [])

  .controller('FileCtrl', function ($scope, $log, $cordovaFile, $window) {

    $scope.inputs = {
      checkDir: "test_file",
      checkFile: "my_file.txt"
    };


    $scope.test = function () {
      document.addEventListener('deviceready', function () {

        $window.resolveLocalFileSystemURL(cordova.file.dataDirectory + "my_file.txt", function (result) {

          if (result.isDirectory === true) {
            console.log("resolve: \n" + JSON.stringify(result));
          }
          else {
            console.log("reject: \n" + JSON.stringify(result));
          }

        }, function (error) {
          console.log("reject: \n" + JSON.stringify(error));
        });

      });
    };


    $scope.checkDir = function () {
      document.addEventListener('deviceready', function () {
        $cordovaFile.checkDir(cordova.file.dataDirectory, $scope.inputs.checkDir).then(function (success) {
          console.log('success ' + JSON.stringify(success));
          $scope.checkDirResult = success;
        }, function (error) {
          console.log('error ' + JSON.stringify(error));
          $scope.checkDirResult = error;
        });

      });

    };


    $scope.checkFile = function () {
      document.addEventListener('deviceready', function () {
        $cordovaFile.checkFile(cordova.file.dataDirectory, $scope.inputs.checkFile).then(function (success) {
          console.log('success ' + JSON.stringify(success));
          $scope.checkFileResult = success;
        }, function (error) {
          console.log('error ' + JSON.stringify(error));
          $scope.checkFileResult = error;
        });
      });
    };



    $scope.createDirectory = function () {
      document.addEventListener('deviceready', function () {
        $cordovaFile.createDirectory(cordova.file.dataDirectory, $scope.inputs.checkFile).then(function (success) {
          console.log('success ' + JSON.stringify(success));
          $scope.checkFileResult = success;
        }, function (error) {
          console.log('error ' + JSON.stringify(error));
          $scope.checkFileResult = error;
        });
      });
    }


  });
