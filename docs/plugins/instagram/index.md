---
layout: docs-plugins
title: Instagram Plugin - ngCordova - by the Ionic Framework Team

plugin-name: $cordovaInstagram
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/instagram.js
official-docs: https://github.com/vstirbu/InstagramPlugin
icon-apple: true
icon-android: true
icon-windows: false
---

Cordova Plugin For opening images in the Instagram app.

#### Example

```javascript
module.controller('ThisCtrl', function($scope, $cordovaInstagram) {
  // Get image from camera, base64 is good. See the
  // $cordovaCamera docs for more info
  
  $cordovaInstagram.share($scope.image.data, $scope.image.caption).then(function() {
    // Worked
  }, function(err) {
    // Didn't work
  });
})
```

##### `share(imageData, imageCaption)`

Share an image base64 encoded using a data-uri as imageData (can easily be fetched from the $cordovaCamera plugin). Specify
an optional caption for the image using `imageCaption`

| Param        | Type           |
| ------------ |----------------|
| imageData    | `String`       |
| imageCaption | `String`       |
