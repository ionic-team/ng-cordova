---
layout: docs-plugins
title: DOCS | ngCordova

plugin-name: $cordovaCamera
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/camera.js
official-docs: https://github.com/apache/cordova-plugin-camera/blob/master/doc/index.md#orgapachecordovacamera
icon-apple: true
icon-android: true
icon-windows: true
---

This service makes it easy to use the [`org.apache.cordova.camera`](https://github.com/apache/cordova-plugin-camera) plugin to take pictures and video
from a device.

```bash
cordova plugin add org.apache.cordova.camera
```

#### Methods

##### `getPicture(options)`

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| options      | `Object`       | Camera options |


**Returns**  `Object` with image data


#### Example

```javascript
module.controller('PictureCtrl', function($scope, $cordovaCamera) {

  var options = {
    quality : 75,
    destinationType : Camera.DestinationType.DATA_URL,
    sourceType : Camera.PictureSourceType.CAMERA,
    allowEdit : true,
    encodingType: Camera.EncodingType.JPEG,
    targetWidth: 100,
    targetHeight: 100,
    popoverOptions: CameraPopoverOptions,
    saveToPhotoAlbum: false
  };

  $cordovaCamera.getPicture(options).then(function(imageData) {
    // Success! Image data is here
  }, function(err) {
    // An error occurred. Show a message to the user
  });
  
});
```

[View Camera Options](https://github.com/apache/cordova-plugin-camera/blob/master/doc/index.md#cameraoptions)
