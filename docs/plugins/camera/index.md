---
layout: docs-plugins
title: DOCS | ngCordova
---


<div class="anchor-row">
  <h3><code>$cordovaCamera</code></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/camera.js">Source</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-camera/blob/master/doc/index.md#orgapachecordovacamera">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

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
