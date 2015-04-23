---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaDeviceOrientation
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/deviceOrientation.js
official-docs: https://github.com/apache/cordova-plugin-device-orientation/
icon-apple: true
icon-android: true
icon-windows: true
---

This plugin provides access to the device's compass. The compass is a sensor that detects the direction or heading that the device is pointed, typically from the top of the device. It measures the heading in degrees from 0 to 359.99, where 0 is north.

```
cordova plugin add org.apache.cordova.device-orientation
```

#### Methods

##### `getCurrentHeading()`
Get the current compass heading.

> **Returns**  `Object`  —  with `magneticHeading`, `trueHeading`, `headingAccuracy`, `timestamp`


##### `watchHeading(options)`
Gets the device's current heading at a regular interval, executing the angular `notify` function each time. Specify the interval in milliseconds via the `options` object's frequency parameter.

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| options      | `Object`       | Watching options |

> | Options      | Type        | Detail  |
> | ------------ |-------------| --------|
> | frequency    | `Number`    | Requested period of calls to acceleration data in Milliseconds |
> | filter       | `Number`    | The change in degrees required to initiate a watchHeading success callback. When this value is set, `frequency` is ignored |

> **Returns**  `Object`  —  with `magneticHeading`, `trueHeading`, `headingAccuracy`, `timestamp`


##### `clearWatch(watchID)`
Stop watching the Heading referenced by the watchID parameter. `watchID` parameter is optional, if used with the promise object returned from `watchHeading()`.

| Param        | Type        | Detail  |
| ------------ |-------------| --------|
| watchID      | `Number`    | The ID returned by `watchHeading()` |


#### Example

```javascript
module.controller('ThisCtrl', function($cordovaDeviceOrientation) {

  document.addEventListener("deviceready", function () {

    $cordovaDeviceOrientation.getCurrentHeading().then(function(result) {
       var magneticHeading = result.magneticHeading;
       var trueHeading = result.trueHeading;
       var accuracy = result.headingAccuracy;
       var timeStamp = result.timestamp;
    }, function(err) {
      // An error occurred
    });



    var options = {
      frequency: 3000,
      filter: true     // if frequency is set, filter is ignored
    }

    var watch = $cordovaDeviceOrientation.watchHeading(options).then(
      null,
      function(error) {
        // An error occurred
      },
      function(result) {   // updates constantly (depending on frequency value)
        var magneticHeading = result.magneticHeading;
        var trueHeading = result.trueHeading;
        var accuracy = result.headingAccuracy;
        var timeStamp = result.timestamp;
      });


    watch.clearWatch();
    // OR
    $cordovaDeviceOrientation.clearWatch(watch)
      .then(function(result) {
        // Success!
      }, function(err) {
        // An error occurred
      });

  }, false);
});
```
