// install   :      cordova plugin add cordova-plugin-media
// link      :      https://github.com/apache/cordova-plugin-media

/* globals Media: true */
angular.module('ngCordova.plugins.media', [])

.service('NewMedia', ['$q', '$interval', function ($q, $interval) {

  //
  // Privates functions
  function setTimer(player) {
      if (angular.isDefined(player.mediaTimer)) {
        return;
      }

      player.mediaTimer = $interval(function () {
          if (player.mediaDuration < 0) {
              player.mediaDuration = player.media.getDuration();
              if (player.$defer && player.mediaDuration > 0) {
                player.$defer.notify({duration: player.mediaDuration});
              }
          }

          player.media.getCurrentPosition(
            // success callback
            function (position) {
                if (position > -1) {
                    player.mediaPosition = position;
                }
            },
            // error callback
            function (e) {
                console.log('Error getting pos=' + e);
            });

            player.$defer.notify({position: player.mediaPosition});

      }, 1000);
  }

  function clearTimer(player) {
      if (angular.isDefined(player.mediaTimer)) {
          $interval.cancel(player.mediaTimer);
          player.mediaTimer = undefined;
      }
  }


  //
  // Public API
  function NewMedia(src) {
      var self=this;
      this.$defer=$q.defer();
      this.mediaPosition = -1;
      this.mediaDuration = -1;
      this.mediaTimer = undefined;

      this.media = new Media(src,
        function (success) {
            self.$defer.resolve(success);
        }, function (error) {
            self.$defer.reject(error);
        }, function (status) {
            self.media.mediaStatus = status;
            self.$defer.notify({status: self.media.mediaStatus});
        });
  }

  // iOS quirks :
  // -  myMedia.play({ numberOfLoops: 2 }) -> looping
  // -  myMedia.play({ playAudioWhenScreenIsLocked : false })
  NewMedia.prototype.play = function (options) {

      if (typeof options !== 'object') {
          options = {};
      }

      this.media.play(options);

      setTimer(this);

      return this.$defer.promise;
  };

  NewMedia.prototype.pause = function () {
      clearTimer(this);
      this.media.pause();
  };

  NewMedia.prototype.stop  = function () {
      this.media.stop();
  };

  NewMedia.prototype.release  = function () {
      this.media.release();
      this.media = undefined;
      this.mediaPosition = -1;
      this.mediaDuration = -1;
  };

  NewMedia.prototype.seekTo  = function (timing) {
      this.media.seekTo(timing);
  };

  NewMedia.prototype.setVolume = function (volume) {
      this.media.setVolume(volume);
  };

  NewMedia.prototype.startRecord = function () {
      this.media.startRecord();
  };

  NewMedia.prototype.stopRecord  = function () {
      this.media.stopRecord();
  };

  NewMedia.prototype.currentTime = function () {
      var q = $q.defer();
      this.media.getCurrentPosition(function (position){
      	q.resolve(position);
      });
      return q.promise;
  };

  NewMedia.prototype.getDuration = function () {
    var q = $q.defer();
    this.media.getDuration(function (duration){
    	q.resolve(duration);
    });
    return q.promise;
  };

  return NewMedia;

}])
.factory('$cordovaMedia', ['NewMedia', function (NewMedia) {
  return {
      newMedia: function (src) {
          return new NewMedia(src);
      }
  };
}]);
