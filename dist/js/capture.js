System.register('ng-cordova/capture', [], function (_export) {
  // install   :    cordova plugin add cordova-plugin-media-capture
  // link      :    https://github.com/apache/cordova-plugin-media-capture

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.capture', []).factory('$cordovaCapture', ['$q', function ($q) {

        return {
          captureAudio: function captureAudio(options) {
            var q = $q.defer();

            if (!navigator.device.capture) {
              q.resolve(null);
              return q.promise;
            }

            navigator.device.capture.captureAudio(function (audioData) {
              q.resolve(audioData);
            }, function (err) {
              q.reject(err);
            }, options);

            return q.promise;
          },
          captureImage: function captureImage(options) {
            var q = $q.defer();

            if (!navigator.device.capture) {
              q.resolve(null);
              return q.promise;
            }

            navigator.device.capture.captureImage(function (imageData) {
              q.resolve(imageData);
            }, function (err) {
              q.reject(err);
            }, options);

            return q.promise;
          },
          captureVideo: function captureVideo(options) {
            var q = $q.defer();

            if (!navigator.device.capture) {
              q.resolve(null);
              return q.promise;
            }

            navigator.device.capture.captureVideo(function (videoData) {
              q.resolve(videoData);
            }, function (err) {
              q.reject(err);
            }, options);

            return q.promise;
          }
        };
      }]);
    }
  };
});