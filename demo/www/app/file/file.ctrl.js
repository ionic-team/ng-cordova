angular.module('demo.file.ctrl', [])

  .controller('FileCtrl', function ($scope, $log, $cordovaFile, $window, $q, $cordovaFileError) {

    $scope.inputs = {
      checkDir: "test_directory",
      checkFile: "test_file.txt",
      createDirectory: "test_directory",
      createFile: "test_file.txt",
      removeDirectory: "test_directory",
      removeFile: "test_file.txt",
      removeRecursively: "test_directory/test_file.txt",
      writeText: "THIS TEXT IS WRITTEN TO THIS FILE",
      writeFile: "test_file.txt",
      writeExistingText: "Write this text to an existing file",
      writeExistingFile: "test_file.txt",
      readFile: "test_file.txt",
      moveDirectory: "test_directory",
      moveFile: "test_file.txt",
      copyDirectory: "test_directory",
      copyFile: "test_file.txt"
    };

    $scope.test = function () {
      document.addEventListener('deviceready', function () {

        var newPath = cordova.file.applicationDirectory;
        var test = DirectoryEntry(newPath);

        console.log(test);
        console.log(DirectoryEntry);
        /*
         try {
         var path = cordova.file.applicationDirectory;
         var newFileName;
         var fileName = newFileName = "test_file.txt";
         var newPath = cordova.file.tempDirectory;

         var q = $q.defer();
         $window.resolveLocalFileSystemURL(path, function (fileSystem) {
         fileSystem.getFile(fileName, {create: false}, function (fileEntry) {

         var newPathName = newPath.substring(newPath.lastIndexOf('/'));

         console.log(newPathName);

         //var parentEntry = new DirectoryEntry(newPathName, newPath);
         fileEntry.moveTo(newPath, newFileName, function (result) {
         console.log(result)
         }, function (error) {
         console.log(error)
         });

         }, function (err) {
         console.log(err);
         });
         }, function (er) {
         console.log(er);
         });
         } catch (e) {
         console.log(e);
         }

         */
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
        // path, dirName, replace?
        $cordovaFile.createDir(cordova.file.dataDirectory, $scope.inputs.createDirectory, false).then(function (success) {
          $scope.createDirectoryResult = 'success ' + JSON.stringify(success);
        }, function (error) {
          $scope.createDirectoryResult = 'error ' + JSON.stringify(error);
        });
      });
    };

    $scope.createFile = function () {
      document.addEventListener('deviceready', function () {
        // path, fileName, replace?
        $cordovaFile.createFile(cordova.file.dataDirectory, $scope.inputs.createFile, true).then(function (success) {
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


    $scope.removeRecursively = function () {
      document.addEventListener('deviceready', function () {
        // path, dirName
        $cordovaFile.removeRecursively(cordova.file.dataDirectory, $scope.inputs.removeDirectory).then(function (success) {
          $scope.removeRecursivelyResult = 'success ' + JSON.stringify(success);
        }, function (error) {
          $scope.removeRecursivelyResult = 'error ' + JSON.stringify(error);
        });
      });
    };


    $scope.writeFile = function () {
      document.addEventListener('deviceready', function () {
        // path, fileName, text, replace?
        $cordovaFile.writeFile(cordova.file.dataDirectory, $scope.inputs.writeFile, $scope.inputs.writeText, true).then(function (success) {
          $scope.writeFileResult = 'success ' + JSON.stringify(success);
        }, function (error) {
          $scope.writeFileResult = 'error ' + JSON.stringify(error);
        });
      });
    };


    $scope.writeExistingFile = function () {
      document.addEventListener('deviceready', function () {
        // path, fileName, text
        $cordovaFile.writeExistingFile(cordova.file.dataDirectory, $scope.inputs.writeExistingFile, $scope.inputs.writeExistingText).then(function (success) {
          $scope.writeExistingFileResult = 'success ' + JSON.stringify(success);
        }, function (error) {
          $scope.writeExistingFileResult = 'error ' + JSON.stringify(error);
        });
      });
    };


    $scope.readFileAsText = function () {
      document.addEventListener('deviceready', function () {
        // path, fileName
        $cordovaFile.readAsText(cordova.file.dataDirectory, $scope.inputs.readFile).then(function (success) {
          $scope.readFileResult = 'success ' + JSON.stringify(success);
        }, function (error) {
          $scope.readFileResult = 'error ' + JSON.stringify(error);
        });
      });
    };

    $scope.moveDir = function () {
      document.addEventListener('deviceready', function () {
        // path, DirName, newPath, newDirName
        $cordovaFile.moveDir(cordova.file.dataDirectory, $scope.inputs.moveDirectory, cordova.file.tempDirectory, "new_directory").then(function (success) {
          $scope.moveDirectoryResult = 'success ' + JSON.stringify(success);
        }, function (error) {
          $scope.moveDirectoryResult = 'error ' + JSON.stringify(error);
        });
      });
    };


    $scope.moveFile = function () {
      document.addEventListener('deviceready', function () {
        // path, fileName, newPath, newFileName
        $cordovaFile.moveFile(cordova.file.dataDirectory, $scope.inputs.moveFile, cordova.file.tempDirectory, "new_file.txt").then(function (success) {
          $scope.moveFileResult = 'success ' + JSON.stringify(success);
        }, function (error) {
          $scope.moveFileResult = 'error ' + JSON.stringify(error);
        });
      });
    };


    $scope.copyDir = function () {
      document.addEventListener('deviceready', function () {
        // path, dirName, newPath, dirFileName
        $cordovaFile.copyDir(cordova.file.dataDirectory, $scope.inputs.copyDirectory, cordova.file.tempDirectory, "new_directory").then(function (success) {
          $scope.copyDirectoryResult = 'success ' + JSON.stringify(success);
        }, function (error) {
          $scope.copyDirectoryResult = 'error ' + JSON.stringify(error);
        });
      });
    };


    $scope.copyFile = function () {
      document.addEventListener('deviceready', function () {
        // path, fileName, newPath, newFileName
        $cordovaFile.copyFile(cordova.file.dataDirectory, $scope.inputs.copyFile, cordova.file.tempDirectory, "new_file.txt").then(function (success) {
          $scope.copyFileResult = 'success ' + JSON.stringify(success);
        }, function (error) {
          $scope.copyFileResult = 'error ' + JSON.stringify(error);
        });
      });
    };

  });
