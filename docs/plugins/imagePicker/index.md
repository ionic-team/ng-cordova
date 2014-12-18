---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><code>$cordovaImagePicker</code></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/imagePicker.js">Source</a>
    <a class="btn-anchor" href="https://github.com/wymsee/cordova-imagePicker">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
  </div>
</div>


Cordova Plugin For Multiple Image Selection - implemented for iOS and Android 4.0 and above.

```bash
cordova plugin add https://github.com/wymsee/cordova-imagePicker.git
```



#### Methods

##### `getPictures(options)`

Start or resume playing an audio file. Options are only available for iOS devices.

| Param        | Type           |
| ------------ |----------------|
| options      | `Object`       |

> | Options            | Type       | Detail  |
> | ------------       |------------| --------|
> | maximumImagesCount | `Integer`  | Max images to be selected |
> | width              | `Integer`  | Width to resize image to (if one of height/width is `0`, will resize to fit the other while keeping aspect ratio, if both height and width are 0, the full size image will be returned) |
> | height             | `Integer`  | Height to resize image to |
> | quality            | `Integer`  | Quality of resized image, defaults to `100` |



#### Example

```javascript
module.controller('ThisCtrl', function($scope, $cordovaImagePicker) {

  var options = {
   maximumImagesCount: 10,
   width: 800,
   height: 800,
   quality: 80
  };

  $cordovaImagePicker.getPictures(options)
    .then(function (results) {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
      }
    }, function(error) {
      // error getting photos
    });
});
```