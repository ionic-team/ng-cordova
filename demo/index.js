angular.module('app', ['ngCordova', 'ionic'])

.controller('MyCtrl', function($scope, $cordovaCamera) {

  $cordovaCamera.whenGetPicture('cat', 'img/cat.jpg');

  $scope.takePicture = function() {
    $cordovaCamera.getPicture('cat').then(function(imageData) {
      console.log('Took', imageData);
    }, function(err) {
      console.error('Error', err);
    });
  }
});
