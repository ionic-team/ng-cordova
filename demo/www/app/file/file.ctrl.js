angular.module('demo.file.ctrl', [])

  .controller('FileCtrl', function ($scope, $log, $cordovaFile, $window, $q) {

    $scope.inputs = {
      checkDir: "test_directory",
      checkFile: "test_file.txt",
      createDirectory: "test_directory",
      createFile: "test_file.txt"
    };

    $scope.test = function () {
      document.addEventListener('deviceready', function () {

        var q = $q.defer();

        var options = {
          create: true
        };

        var defaults = {
          create: true,
          exclusive: true
        };

        options = angular.extend(defaults, options);

        var path = cordova.file.dataDirectory;
        var fileName = "some_file.txt";

        try {
          $window.resolveLocalFileSystemURL(path, function (result) {

            console.log(JSON.stringify(result.filesystem));


            result.getFile(fileName, options, function (result) {
              console.log("success : getDIR: " + JSON.stringify(result));
            }, function (er) {
              console.log("er : getDIR: " + JSON.stringify(er));
            })

          }, function (error) {
            //q.reject(error);
          });

        } catch (err) {
         // q.reject(err);
        }

        return q.promise;
      });
    };


    $scope.checkDir = function () {
      document.addEventListener('deviceready', function () {
        // path, directory
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
        // path, file
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

        var options = {};
        // path, dirName, options
        $cordovaFile.createDir(cordova.file.dataDirectory, $scope.inputs.createDirectory, options).then(function (success) {
          console.log('success ' + JSON.stringify(success));
          $scope.createDirectoryResult = success;
        }, function (error) {
          console.log('error ' + JSON.stringify(error));
          $scope.createDirectoryResult = error;
        });
      });
    };


    $scope.createFile = function () {
      document.addEventListener('deviceready', function () {

        var options = {};
        // path, fileName, options
        $cordovaFile.createFile(cordova.file.dataDirectory, $scope.inputs.createFile, options).then(function (success) {
          console.log('success ' + JSON.stringify(success));
          $scope.createFileResult = success;
        }, function (error) {
          console.log('error ' + JSON.stringify(error));
          $scope.createFileResult = error;
        });
      });
    };


  });
