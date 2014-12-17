---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><code>$cordovaMedia</code></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/media.js">Source</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-media/blob/master/doc/index.md">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>
</div>

Media plugin

```
cordova plugin add org.apache.cordova.media
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaMedia) {
    var src = "/src/audio.mp3";

    var mediaSource = $cordovaMedia.newMedia(src);
    var promise = mediaSource.promise;
    var mediaStatus = mediaSource.mediaStatus;
    var media = mediaSource.media;

    $cordovaMedia.play(media);

    $cordovaMedia.pause(media);

    $cordovaMedia.stop(media);

    $cordovaMedia.release(media);

    $cordovaMedia.getDuration(media);

    $cordovaMedia.seekTo(media, 5000000); // milliseconds

    $cordovaMedia.setVolume(media, 80);

    $cordovaMedia.startRecord(media);

    $cordovaMedia.stopRecord(media);

    $cordovaMedia.getCurrentPosition(media).then(...);
});
```