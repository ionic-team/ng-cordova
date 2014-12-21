angular.module('demo.media.ctrl', [])

  .controller('MediaCtrl', function ($scope, $ionicPlatform, $cordovaMedia) {
    var thisMedia;

    $ionicPlatform.ready(function () {
      thisMedia = $cordovaMedia('/sample.mp3');
    });


    $scope.playMedia = function () {
      thisMedia.play();
      console.log("play media");
    };

    $scope.stopMedia = function () {
      thisMedia.pause();
    };

  });
