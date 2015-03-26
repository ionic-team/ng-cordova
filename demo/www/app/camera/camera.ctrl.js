angular.module('demo.camera.ctrl', [])

  .controller('CameraCtrl', function ($scope, $cordovaCamera) {
    $scope.takePicture = function () {
      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA
      };

      // udpate camera image directive
      $cordovaCamera.getPicture(options).then(function (imageData) {
        $scope.cameraimage = "data:image/jpeg;base64," + imageData;
      }, function (err) {
        console.log('Failed because: ' + message);
      });
    };
  });
