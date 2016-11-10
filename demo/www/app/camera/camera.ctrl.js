angular.module('demo.camera.ctrl', [])

  .controller('CameraCtrl', function ($scope, $cordovaCamera) {
    $scope.takePicture = function () {
      $cordovaCamera.getPicture({
        destinationType: 'data_uri'
      }).then(function (imageData) {
        $scope.cameraimage = "data:image/jpeg;base64," + imageData;
      }, function (err) {
        console.log('Failed because: ');
		    console.log(err);
      });
    };
  });
