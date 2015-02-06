angular.module('demo.file.ctrl', [])

  .controller('FileCtrl', function ($scope, $log, $cordovaFile, $window, $q) {

    $scope.inputs = {
      checkDir: "test_directory",
      checkFile: "test_file.txt",
      createDirectory: "test_directory",
      createFile: "test_file.txt",
      removeDirectory: "test_directory",
      removeFile: "test_file.txt",
      writeText: "THIS TEXT IS WRITTEN TO THIS FILE",
      writeFile: "test_file.txt",
      readFile: "test_file.txt",
      moveFile: "test_file.txt"
    };

    $scope.test = function () {
      document.addEventListener('deviceready', function () {

        var q = $q.defer();

        var options = {
          create: false
        };

        var defaults = {
          create: false,
          exclusive: false
        };

        options = angular.extend(defaults, options);

        var path = cordova.file.dataDirectory;
        var fileName = "some_file.txt";

        try {
          $window.resolveLocalFileSystemURL(path, function (fileSystem) {

            fileSystem.getFile(fileName, options, function (fileEntry) {

              fileEntry.remove(function (result) {
                q.resolve(result);
              }, function (e) {
                q.reject(e)
              });

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
          $scope.checkDirResult = 'success ' + JSON.stringify(success);
        }, function (error) {
          $scope.checkDirResult = 'error ' + JSON.stringify(error);
        });
      });
    };


    $scope.checkFile = function () {
      document.addEventListener('deviceready', function () {
        // path, file
        $cordovaFile.checkFile(cordova.file.dataDirectory, $scope.inputs.checkFile).then(function (success) {
          $scope.checkFileResult = 'success ' + JSON.stringify(success);
        }, function (error) {
          $scope.checkFileResult = 'error ' + JSON.stringify(error);
        });
      });
    };


    $scope.createDirectory = function () {
      document.addEventListener('deviceready', function () {
        var options = {};
        // path, dirName, options
        $cordovaFile.createDir(cordova.file.dataDirectory, $scope.inputs.createDirectory, options).then(function (success) {
          $scope.createDirectoryResult = 'success ' + JSON.stringify(success);
        }, function (error) {
          $scope.createDirectoryResult = 'error ' + JSON.stringify(error);
        });
      });
    };


    $scope.createFile = function () {
      document.addEventListener('deviceready', function () {
        var options = {};
        // path, fileName, options
        $cordovaFile.createFile(cordova.file.dataDirectory, $scope.inputs.createFile, options).then(function (success) {
          $scope.createFileResult = 'success ' + JSON.stringify(success);
        }, function (error) {
          $scope.createFileResult = 'error ' + JSON.stringify(error);
        });
      });
    };


    $scope.removeFile = function () {
      document.addEventListener('deviceready', function () {
        // path, fileName
        $cordovaFile.removeFile(cordova.file.dataDirectory, $scope.inputs.removeFile).then(function (success) {
          $scope.removeFileResult = 'success ' + JSON.stringify(success);
        }, function (error) {
          $scope.removeFileResult = 'error ' + JSON.stringify(error);
        });
      });
    };


    $scope.removeDirectory = function () {
      document.addEventListener('deviceready', function () {
        // path, dirName
        $cordovaFile.removeDir(cordova.file.dataDirectory, $scope.inputs.removeDirectory).then(function (success) {
          $scope.removeDirectoryResult = 'success ' + JSON.stringify(success);
        }, function (error) {
          $scope.removeDirectoryResult = 'error ' + JSON.stringify(error);
        });
      });
    };


    $scope.writeFile = function () {
      document.addEventListener('deviceready', function () {
        // path, fileName, text, options
        var options = {};
        $cordovaFile.writeFile(cordova.file.dataDirectory, $scope.inputs.writeFile, $scope.inputs.writeText, options).then(function (success) {
          $scope.writeFileResult = 'success ' + JSON.stringify(success);
        }, function (error) {
          $scope.writeFileResult = 'error ' + JSON.stringify(error);
        });
      });
    };


    $scope.readFileAsText = function () {
      document.addEventListener('deviceready', function () {
        // path, fileName, options
        var options = {};
        $cordovaFile.readAsText(cordova.file.dataDirectory, $scope.inputs.readFile, options).then(function (success) {
          $scope.readFileResult = 'success ' + JSON.stringify(success);
        }, function (error) {
          $scope.readFileResult = 'error ' + JSON.stringify(error);
        });
      });
    };


    $scope.moveFile = function () {
      document.addEventListener('deviceready', function () {
        // path, fileName, options
        $cordovaFile.moveFile(cordova.file.dataDirectory, $scope.inputs.moveFile, cordova.file.tempDirectory).then(function (success) {
          $scope.moveFileResult = 'success ' + JSON.stringify(success);
        }, function (error) {
          $scope.moveFileResult = 'error ' + JSON.stringify(error);
        });
      });
    };

  });
