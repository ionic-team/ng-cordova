// install   :      cordova plugin add org.apache.cordova.media
// link      :      https://github.com/apache/cordova-plugin-media

angular.module('ngCordova.plugins.media', [])

  .factory('$cordovaMedia', ['$q', function ($q) {

    return {
      newMedia: function (src) {
        var q = $q.defer();
        var mediaStatus = null;
        var media;

        media = new Media(src,
          function (success) {
            q.resolve(success);
          }, function (error) {
            q.reject(error);
          }, function (status) {
            mediaStatus = status;
          });

        // getCurrentPosition NOT WORKING!
        q.promise.getCurrentPosition = function () {
          media.getCurrentPosition(function (success) {
          }, function (error) {
          });
        };

        q.promise.getDuration = function () {
          media.getDuration();
        };

        // iOS quirks :
        // -  myMedia.play({ numberOfLoops: 2 }) -> looping
        // -  myMedia.play({ playAudioWhenScreenIsLocked : false })
        q.promise.play = function (options) {
          if (typeof options !== "object") {
            options = {};
          }
          media.play(options);
        };

        q.promise.pause = function () {
          media.pause();
        };

        q.promise.stop = function () {
          media.stop();
        };

        q.promise.release = function () {
          media.release();
        };

        q.promise.seekTo = function (timing) {
          media.seekTo(timing);
        };

        q.promise.setVolume = function (volume) {
          media.setVolume(volume);
        };

        q.promise.startRecord = function () {
          media.startRecord();
        };

        q.promise.stopRecord = function () {
          media.stopRecord();
        };

        q.promise.media = media;

        return q.promise;
      }
    };
  }]);
