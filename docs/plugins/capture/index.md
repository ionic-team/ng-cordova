---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaCapture
source:  https://github.com/driftyco/ng-cordova/blob/master/src/plugins/capture.js
official-docs:  https://github.com/apache/cordova-plugin-media-capture
icon-apple: true
icon-android: true
icon-windows: true
---


This plugin allows you to record sound, video and images through the native capabilities of the device.

```bash
$ cordova plugin add cordova-plugin-media-capture
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaCapture) {

  $scope.captureAudio = function() {
    var options = { limit: 3, duration: 10 };

    $cordovaCapture.captureAudio(options).then(function(audioData) {
      // Success! Audio data is here
    }, function(err) {
      // An error occurred. Show a message to the user
    });
  }

  $scope.captureImage = function() {
    var options = { limit: 3 };

    $cordovaCapture.captureImage(options).then(function(imageData) {
      // Success! Image data is here
    }, function(err) {
      // An error occurred. Show a message to the user
    });
  }

  $scope.captureVideo = function() {
    var options = { limit: 3, duration: 15 };

    $cordovaCapture.captureVideo(options).then(function(videoData) {
      // Success! Video data is here
    }, function(err) {
      // An error occurred. Show a message to the user
    });
  }

});
```
