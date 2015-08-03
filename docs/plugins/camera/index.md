---
layout: docs-plugins
title: DOCS | ngCordova

plugin-name: $cordovaCamera
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/camera.js
official-docs: https://github.com/apache/cordova-plugin-camera
icon-apple: true
icon-android: true
icon-windows: true
---

This service makes it easy to use the [`cordova-plugin-camera`](https://github.com/apache/cordova-plugin-camera) plugin to take pictures and video
from a device.

> **NOTE**: The camera API only works on a real device, and not in the emulator.

```bash
cordova plugin add org.apache.cordova.camera
```

#### Methods

##### `getPicture(options)`

[View Camera Options](https://github.com/apache/cordova-plugin-camera/blob/master/doc/index.md#cameraoptions)


| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| options      | `Object`       | Camera options |

> | Options                       | Type           | Detail  |
> | ----------------------------  | ---------------| --------|
> | quality           | `Number`       | Quality of the saved image, range of `0` - `100` |
> | destinationType   | `Number`       | Format of the return value |
> | sourceType        | `Number`       | Set the source of the picture |
> | allowEdit         | `Boolean`      | Allow simple editing of image before selection |
> | encodingType      | `Number`       | JPEG = `0`, PNG = `1` |
> | targetWidth       | `Number`       | Width to scale image (pixels). Used with `targetHeight` |
> | targetHeight      | `Number`       | Height to scale image (pixels). Used with `targetHeight` |
> | mediaType         | `String`       | Set the type of media to select from |
> | cameraDirection   | `Number`       | Back = `0`, Front-facing = `1` |
> | popoverOptions    | `String`       | iOS-only options that specify popover location in iPad |
> | saveToPhotoAlbum  | `Boolean`      | Save image to photo album on the device |

**Returns**  `Object` with image data


#### Examples

###### Retrieve photo as a **base64-encoded image**

```javascript
module.controller('PictureCtrl', function($scope, $cordovaCamera) {

  document.addEventListener("deviceready", function () {

    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      // error
    });

  }, false);
});
```

###### Retrieve the image's **file location**

```javascript
module.controller('PictureCtrl', function($scope, $cordovaCamera) {

  document.addEventListener("deviceready", function () {

    var options = {
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
    };

    $cordovaCamera.getPicture(options).then(function(imageURI) {
      var image = document.getElementById('myImage');
      image.src = imageURI;
    }, function(err) {
      // error
    });


    $cordovaCamera.cleanup().then(...); // only for FILE_URI

  }, false);
});
```
