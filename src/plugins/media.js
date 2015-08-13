// install   :      cordova plugin add cordova-plugin-media
// link      :      https://github.com/apache/cordova-plugin-media

/* globals Media: true */
angular.module('ngCordova.plugins.media', [])

.service('NewMedia', ['$q', '$interval', function ($q, $interval) {
  var q, q2, q3, mediaStatus = null, mediaPosition = -1, mediaTimer, mediaDuration = -1;

  function setTimer(media) {
      if (angular.isDefined(mediaTimer)) {
        return;
      }

      mediaTimer = $interval(function () {
          if (mediaDuration < 0) {
              mediaDuration = media.getDuration();
              if (q && mediaDuration > 0) {
                q.notify({duration: mediaDuration});
              }
          }

          media.getCurrentPosition(
            // success callback
            function (position) {
                if (position > -1) {
                    mediaPosition = position;
                }
            },
            // error callback
            function (e) {
                console.log('Error getting pos=' + e);
            });

          if (q) {
            q.notify({position: mediaPosition});
          }

      }, 1000);
  }

  function clearTimer() {
      if (angular.isDefined(mediaTimer)) {
          $interval.cancel(mediaTimer);
          mediaTimer = undefined;
      }
  }

  function resetValues() {
      mediaPosition = -1;
      mediaDuration = -1;
  }

  function NewMedia(src) {
      this.media = new Media(src,
        function (success) {
            clearTimer();
            resetValues();
            q.resolve(success);
        }, function (error) {
            clearTimer();
            resetValues();
            q.reject(error);
        }, function (status) {
            mediaStatus = status;
            q.notify({status: mediaStatus});
        });
  }

  // iOS quirks :
  // -  myMedia.play({ numberOfLoops: 2 }) -> looping
  // -  myMedia.play({ playAudioWhenScreenIsLocked : false })
  NewMedia.prototype.play = function (options) {
      q = $q.defer();

      if (typeof options !== 'object') {
          options = {};
      }

      this.media.play(options);

      setTimer(this.media);

      return q.promise;
  };

  NewMedia.prototype.pause = function () {
      clearTimer();
      this.media.pause();
  };

  NewMedia.prototype.stop  = function () {
      this.media.stop();
  };

  NewMedia.prototype.release  = function () {
      this.media.release();
      this.media = undefined;
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
      q2 = $q.defer();
      this.media.getCurrentPosition(function (position){
      q2.resolve(position);
      });
      return q2.promise;
  };

  NewMedia.prototype.getDuration = function () {
    q3 = $q.defer();
    this.media.getDuration(function (duration){
    q3.resolve(duration);
    });
    return q3.promise;
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
