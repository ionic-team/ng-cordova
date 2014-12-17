---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><code>$cordovaDeviceMotion</code></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/deviceMotion.js">Source</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-device-motion/blob/master/doc/index.md">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>
</div>

Get access to the device's accelerometer.

```
cordova plugin add org.apache.cordova.device-motion
```

```javascript
module.controller('DeviceMotionCtrl', function($scope, $cordovaDeviceMotion) {
  var watch;

  $scope.getAcceleration = function () {
    $cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
      // Success!
    }, function(err) {
      // An error occurred. Show a message to the user
    });
  };

  $scope.watchAcceleration = function () {
    // Update every 3 seconds for 1 minute
    var options = {
      maximumAge: 3000,
      timeout: 60 * 1000,
      enableHighAccuracy: true
    };

    watch = $cordovaDeviceMotion.watchAcceleration(options);

    watch.promise.then(
      function() {/* unused */},
      function(err) {},
      function(acceleration) {
        var X = acceleration.x;
        var Y = acceleration.y;
        var Z = acceleration.z;
        var timeStamp = acceleration.timestamp;
    });
  };

  // use watchID from watchAcceleration()
    $cordovaDeviceMotion.clearWatch(watch.watchId)
      .then(function(result) {
        // Success!
      }, function(err) {
        // An error occurred. Show a message to the user
    });
});
```