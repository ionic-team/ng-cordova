---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><a href="#DeviceOrientation"><code>$cordovaDeviceOrientation</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/deviceOrientation.js">Source</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-device-orientation/blob/master/doc/index.md">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>
</div>

Get access to the device's compass.

```
cordova plugin add org.apache.cordova.device-orientation
```

```javascript
module.controller('DeviceOrientationCtrl', function($scope, $cordovaDeviceOrientation) {

    $cordovaDeviceOrientation.getCurrentHeading().then(function(result) {
      // Success!
    }, function(err) {
      // An error occurred
    });

    var options = { frequency: 1000 }; // Update every 1 second
    var watch = $cordovaDeviceOrientation.watchHeading(options);

    watch.promise.then(function(result) { /* unused */ },
      function(err) {
        // An error occurred
      }, function(position) {
        // Heading comes back in
        // position.magneticHeading
      });

    $cordovaDeviceOrientation.clearWatch(watch.watchId)
      .then(function(result) {
        // Success!
      }, function(err) {
        // An error occurred
      });
});
```
