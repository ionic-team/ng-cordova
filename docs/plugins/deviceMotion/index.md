---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaDeviceMotion
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/deviceMotion.js
official-docs: https://github.com/apache/cordova-plugin-device-motion/
icon-apple: true
icon-android: true
icon-windows: true
---

This plugin provides access to the device's accelerometer. The accelerometer is a motion sensor that detects the change (delta) in movement relative to the current device orientation, in three dimensions along the x, y, and z axis.

```
cordova plugin add org.apache.cordova.device-motion
```

#### Methods

##### `getCurrentAcceleration()`
Get the current acceleration along the x, y, and z axes.

> **Returns**  `Object`  —  with `x`, `y`, `z` coordinates + timestamp


##### `watchAcceleration(options)`
Retrieves the device's current Acceleration at a regular interval, executing the angular `notify` function each time. Specify the interval in milliseconds via the `options` object's frequency parameter.

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| options      | `Object`       | Watching options |

> | Options      | Type        | Detail  |
> | ------------ |-------------| --------|
> | frequency    | `Number`    | Requested period of calls to acceleration data in Milliseconds |

> **Returns**  `Object`  —  with `x`, `y`, `z` coordinates + timestamp


##### `clearWatch(watchID)`
Stop watching the Acceleration referenced by the watchID parameter. `watchID` parameter is optional, if used with the promise object returned from `watchAcceleration()`.

| Param        | Type        | Detail  |
| ------------ |-------------| --------|
| watchID      | `Number`    | The ID returned by `watchAcceleration()` |


#### Example

```javascript
module.controller('ThisCtrl', function($cordovaDeviceMotion) {

  document.addEventListener("deviceready", function () {

    $cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
      var X = result.x;
      var Y = result.y;
      var Z = result.z;
      var timeStamp = result.timestamp;
    }, function(err) {
      // An error occurred. Show a message to the user
    });

  }, false);


  // watch Acceleration
  var options = { frequency: 20000 };

  document.addEventListener("deviceready", function () {

    var watch = $cordovaDeviceMotion.watchAcceleration(options);
    watch.then(
      null,
      function(error) {
      // An error occurred
      },
      function(result) {
        var X = result.x;
        var Y = result.y;
        var Z = result.z;
        var timeStamp = result.timestamp;
    });


    watch.clearWatch();
    // OR
    $cordovaDeviceMotion.clearWatch(watch)
      .then(function(result) {
        // success
        }, function (error) {
        // error
      });

  }, false);
});
```