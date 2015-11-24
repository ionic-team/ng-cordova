---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaMedia
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/media.js
official-docs: https://github.com/apache/cordova-plugin-media
icon-apple: true
icon-android: true
icon-windows: true
---


This plugin provides the ability to record and play back audio files on a device.

**A note on iOS capabilities**


*An app that plays or records audio continuously (even while the app is running in the background) can register to perform those tasks in the background. You enable audio support from the Background modes section of the Capabilities tab in your Xcode project. (You can also enable this support by including the UIBackgroundModes key with the audio value in your app’s Info.plist file.) Apps that play audio content in the background must play audible content and not silence.*


[Apple reference "Playing and Recording Background Audio"](https://developer.apple.com/library/ios/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/BackgroundExecution/BackgroundExecution.html)

```
cordova plugin add cordova-plugin-media
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

##### `stopRecord()`

Stop recording an audio file.

#### Example

```javascript
module.controller('MyCtrl', function($scope, $cordovaMedia) {

  var src = "/src/audio.mp3";
  var media = $cordovaMedia.newMedia(src);


  var iOSPlayOptions = {
    numberOfLoops: 2,
    playAudioWhenScreenIsLocked : false
  }

  media.play(iOSPlayOptions); // iOS only!
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
