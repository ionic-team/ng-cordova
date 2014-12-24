// install   :      cordova plugin add org.apache.cordova.media
// link      :      https://github.com/apache/cordova-plugin-media

angular.module('ngCordova.plugins.media', [])

  .factory('$cordovaMedia', ['$q', function ($q) {

    return {
      newMedia: function (src) {
        var q = $q.defer();

        var media = new Media(src, q.resolve, q.reject, q.notify);

        return {
          media: media,
          promise: q.promise
        };

      },

      getCurrentPosition: function (source) {
        var q = $q.defer();

        source.getCurrentPosition(function (success) {
          q.resolve(success);

        }, function (error) {
          q.reject(error);
        });

        return q.promise;
      },

      getDuration: function (source) {

        return source.getDuration();
      },

      play: function (source, options) {
        if (typeof options !== "object") {
          options = {};
        }
        return source.play(options);

        // iOS quirks :
        // -  myMedia.play({ numberOfLoops: 2 }) -> looping
        // -  myMedia.play({ playAudioWhenScreenIsLocked : false })
      },

      pause: function (source) {
        return source.pause();
      },

      release: function (source) {
        return source.release();
      },


      seekTo: function (source, milliseconds) {

        return source.seekTo(milliseconds);
      },

      setVolume: function (source, volume) {
        return source.setVolume(volume);
      },

      startRecord: function (source) {

        return source.startRecord();
      },

      stopRecord: function (source) {

        return source.stopRecord();
      },

      stop: function (source) {

        return source.stop();
      }
    };
  }]);
