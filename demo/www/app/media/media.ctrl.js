angular.module('demo.media.ctrl', [])

  .controller('MediaCtrl', function ($scope, $ionicPlatform, $cordovaMedia) {
    var thisMedia;

    $ionicPlatform.ready(function () {
      thisMedia = $cordovaMedia.newMedia('/sample.mp3');
    });


    $scope.playMedia = function () {

      thisMedia.play().then(function(){
      // success
      //Perform some action when playback finishes like playNext()
      console.log("fire when playback finishes");

        }, null, function(data){

        if(data.status){
          //Watch for status changes from the Media plugin, perform some action on start, stop, pause etc
          //Media.MEDIA_NONE = 0;
          //Media.MEDIA_STARTING = 1;
          //Media.MEDIA_RUNNING = 2;
          //Media.MEDIA_PAUSED = 3;
          //Media.MEDIA_STOPPED = 4;
          console.log(data.status);
        };

        if(data.duration){
          //gets the duration of the current track, perform some action with the duration
          console.log("track duration: " +data.duration);
        };

        if(data.position){
          //Update the current playback position every second
          console.log('track progress: ' + data.position);
        };

        });
      console.log("play media");
    };

    $scope.stopMedia = function () {
      thisMedia.pause();
    };

    $scope.getCurrentPosition = function () {
      thisMedia.currentTime().then(function(position){
        console.log("current playback position is:" + position);
      });
    };

    $scope.getDuration = function () {
      thisMedia.getDuration().then(function(duration){
        console.log("media duration is:" + duration);
      });
    };

  });
