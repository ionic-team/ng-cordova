angular.module('demo.file.ctrl', [])

  .controller('FileCtrl', function ($scope, $log, $cordovaFile) {


    document.addEventListener('deviceready', function () {
      $cordovaFile.checkDir("/directory").then(function (success) {
        console.log('success ' + JSON.stringify(success));
        $scope.isDir = success;
      }, function (error) {
        console.log('success ' + JSON.stringify(error));
        $scope.isDir = error;
      })
    })


  });
