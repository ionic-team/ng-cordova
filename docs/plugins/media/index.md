---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaMedia
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/media.js
official-docs: https://github.com/apache/cordova-plugin-media/blob/master/doc/index.md
icon-apple: true
icon-android: true
icon-windows: true
---


This plugin provides the ability to record and play back audio files on a device.


```
cordova plugin add org.apache.cordova.media
```


#### Methods

##### `newMedia(source)`

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| source       | `String`       | A URI containing the audio content |

**Returns** `Object` - media object, to be used for future methods

##### `play(options)` - *`options` for iOS only*

Start or resume playing an audio file. Options are only available for iOS devices.

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| options      | `Object`       |  |

> | Options                      | Type           | Detail  |
> | ------------                 |----------------| --------|
> | numberOfLoops                | `Integer`       | Number of times you want the media file to play |
> | playAudioWhenScreenIsLocked  | `Boolean`       | Allow playback when the screen is locked |



##### `pause()`

Pause playback of an audio file.

##### `stop()`

Stop playing an audio file.

##### `release()`

Releases the underlying operating system's audio resources.

##### `seekTo(milliseconds)`

Moves the position within the audio file.

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| source       | `Integer`       | The position to set the playback position within the audio, in milliseconds. |

##### `setVolume(volume)`

Set the volume for audio playback.

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| volume       | `Float`      | The volume to set for playback. Value must be within range of `0.0` - `1.0`. |

##### `startRecord()`

Start recording an audio file.

##### `startRecord()`

Stop recording an audio file.

#### Example

```javascript
module.controller('MyCtrl', function($scope, $cordovaMedia) {

  var src = "/src/audio.mp3";
  var media = $cordovaMedia.newMedia(src).then(function() {
    // success
  }, function () {
    // error
  });


  var iOSPlayOptions = {
    numberOfLoops: 2,
    playAudioWhenScreenIsLocked : false
  }

  media.play(options); // iOS only!
  media.play(); // Android

  media.pause();

  media.stop();

  media.release();

  media.seekTo(5000); // milliseconds value

  media.setVolume(0.5);

  media.startRecord();

  media.stopRecord();

  // media.getDuration(media); not working yet

  // media.getCurrentPosition().then(...); not working yet
});
```