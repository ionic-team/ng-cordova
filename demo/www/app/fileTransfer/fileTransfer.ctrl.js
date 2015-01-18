angular.module('demo.fileTransfer.ctrl', [])

  .controller('FileTransferCtrl', function ($scope, $rootScope, $cordovaFileTransfer, $timeout) {

    $scope.downloadFile = function () {
      document.addEventListener('deviceready', function () {
        var url = "http://cdn.wall-pix.net/albums/art-space/00030109.jpg";
        var fileDir = cordova.file.documentsDirectory + "testImage.png";

        var download = $cordovaFileTransfer.download(url, fileDir).then(function (success) {
          console.log("success " + JSON.stringify(success));
          $timeout(function () {
            $scope.downloadProgress = 100
          }, 1000);
        }, function (error) {
          console.log("Error " + JSON.stringify(error));
        }, function (progress) {
          $timeout(function () {
            $scope.downloadProgress = (progress.loaded / progress.total) * 100;

          });
        });


        if ($scope.downloadProgress > 0.1) {
          download.abort();
        }
      })
    };


  });
