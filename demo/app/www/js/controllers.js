angular.module('starter.controllers', [])

.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.controller('AppCtrl', function($scope) {
  $scope.plugins = [
    { name: 'Camera', slug: 'camera' },
    { name: 'Geolocation', slug: 'geolocation' },
    { name: 'Device Motion', slug: 'device-motion' }
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
})

.controller('GeolocationCtrl', function($scope, $cordovaGeolocation) {
  $scope.toggleTrack = function() {
    $cordovaGeolocation.watchPosition().then(function(resp) {
    }, function(err) {
    }, function(position) {
      $scope.lat = position.coords.latitude;
      $scope.lng = position.coords.longitude;
    });
  };
})

.controller('AccelCtrl', function($scope, $cordovaAccelerometer) {
  console.log('Accel');
  $scope.toggleTrack = function() {
    $cordovaAccelerometer.watchAcceleration().then(function(resp) {
    }, function(err) {
    }, function(data) {
      console.log('Data', data)
      $scope.x = data.x;
      $scope.y = data.y;
      $scope.z = data.z;
    });
  };
});
