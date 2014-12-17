---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><code>$cordovaNativeAudio</code></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/nativeAudio.js">Source</a>
    <a class="btn-anchor" href="https://github.com/SidneyS/cordova-plugin-nativeaudio">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
  </div>
</div>

Cordova / PhoneGap 3.5+ extension for Native Audio playback, aimed at HTML5 gaming and audio applications which require minimum latency, polyphony and concurrency.

```
cordova plugin add https://github.com/SidneyS/cordova-plugin-nativeaudio.git
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaNativeAudio, $timeout) {

  $cordovaNativeAudio
    .preloadSimple('click', 'audio/click.mp3')
    .then(function (msg) {
      console.log(msg);
    }, function (error) {
      alert(error);
    });

  $cordovaNativeAudio
    .preloadComplex('music', 'audio/music.mp3', 1, 1)
    .then(function (msg) {
      console.log(msg);
    }, function (error) {
      console.error(error);
    });

  $scope.play = function () {
    $cordovaNativeAudio.play('click');
    $cordovaNativeAudio.loop('music');

    // stop 'music' loop and unload
    $timeout(function () {
      $cordovaNativeAudio.stop('music');

      $cordovaNativeAudio.unload('click');
      $cordovaNativeAudio.unload('music');
    }, 1000 * 60);
  };

});
```
