---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaDeviceOrientation
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/deviceOrientation.js
official-docs: https://github.com/apache/cordova-plugin-device-orientation/blob/master/doc/index.md
icon-apple: true
icon-android: true
icon-windows: true
---

Get access to the device's compass.

```
cordova plugin add org.apache.cordova.device-orientation
```

```javascript
module.controller('ThisCtrl', function($cordovaDeviceOrientation) {

  $cordovaDeviceOrientation.getCurrentHeading().then(function(result) {
    // Success!
  }, function(err) {
    // An error occurred
  });


  var options = { frequency: 1000 }; // Update every 1 second

  var watch = $cordovaDeviceOrientation.watchHeading(options)
  watch.then(
    null,
    function(error) {
      // An error occurred
    },
    function(position) { // updates constantly (depending on frequency value)
      var magneticHeading = position.magneticHeading;
      var trueHeading = position.trueHeading;
      var accuracy = position.headingAccuracy;
      var timeStamp = position.timestamp;
    });


  watch.clearWatch();
  // OR
  $cordovaDeviceOrientation.clearWatch(watch)
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occurred
    });
});
```
