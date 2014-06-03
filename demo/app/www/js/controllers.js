angular.module('starter.controllers', [])

.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.controller('AppCtrl', function($scope) {
  $scope.plugins = [
    { name: 'Camera', slug: 'camera' }
  ];
})

.controller('CameraCtrl', function($scope, $cordovaCamera) {
  $scope.takePicture = function() {
    $scope.photo = 'http://placekitten.com/320/320';

    $cordovaCamera.getPicture({
      quality: 75,
      targetWidth: 320,
      targetHeight: 320,
      saveToPhotoAlbum: false
    }).then(function(imageURI) {
      $scope.photo = imageURI;
    }, function(err) {
      console.error('Unable to take pic', err);
      alert('Unable to take picture');
    });
  };
});
