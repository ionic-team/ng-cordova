---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaDeviceMotion
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/deviceMotion.js
official-docs: https://github.com/apache/cordova-plugin-device-motion/blob/master/doc/index.md
icon-apple: true
icon-android: true
icon-windows: true
---

Get access to the device's accelerometer.

```
cordova plugin add org.apache.cordova.device-motion
```

```javascript
module.controller('ThisCtrl', function($cordovaDeviceMotion) {

  $cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
    // Success!
  }, function(err) {
    // An error occurred. Show a message to the user
  });


  var options = {
    maximumAge: 3000,
    timeout: 60 * 1000,
    enableHighAccuracy: false // may cause errors if true
  }

  var watch = $cordovaDeviceMotion.watchAcceleration(options);
  watch.then(
    null,
    function(error) {
    // An error occurred
    },
    function(acceleration) {
      var X = acceleration.x;
      var Y = acceleration.y;
      var Z = acceleration.z;
      var timeStamp = acceleration.timestamp;
  });


  watch.clearWatch();
  // OR
  $cordovaDeviceMotion.clearWatch(watch)
    .then(function(result) {
      // success
      }, function (error) {
      // error
    });
});
```