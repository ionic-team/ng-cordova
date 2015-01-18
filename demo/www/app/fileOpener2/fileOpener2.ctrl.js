angular.module('demo.fileOpener2.ctrl', [])

  .controller('FileOpener2Ctrl', function ($scope, $log, $cordovaFileOpener2) {

    $scope.packageId = '';
    $scope.type = '';

    $scope.logs = '';

    $scope.open = function() {
      $cordovaFileOpener2.open(
        $scope.packageId,
        $scope.type
      ).then(
        function(){
          $scope.logs = 'Success';
        },
        function(error) {
          alert('error code: '+error.code+' , message: '+error.message);
          $scope.logs = 'error code: '+error.code+' , message: '+error.message;
        }
      );
    };

  });
