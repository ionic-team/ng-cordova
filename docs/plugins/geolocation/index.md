---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><code>$cordovaGeolocation</code></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/geolocation.js">Source</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-geolocation/blob/master/doc/index.md">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>
</div>

Grab the current location of the user, or grab continuous location changes:


```
cordova plugin add org.apache.cordova.geolocation
```

#### Methods

##### `getCurrentPosition(options)`

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| options       | `Object`      | Options to configure getting position |

> | Options       | Type           | Detail  |
> | ------------  |----------------| --------|
> | timeout       | `Number`       | Maximum length of time (milliseconds) that is allowed to pass |
> | maximumAge    | `Number`       | Accept a cached position whose age is no greater than the specified time in milliseconds |
> | enableHighAccuracy | `Boolean`  | Provides a hint that the application needs the best possible results |

**Returns** `Object` with user information, such as id, lastName


##### `watchPosition(options)`

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| options       | `Object`      | Options to configure getting position |

> | Options       | Type           | Detail  |
> | ------------  |----------------| --------|
> | timeout       | `Number`       | Maximum length of time (milliseconds) that is allowed to pass |
> | maximumAge    | `Number`       | Accept a cached position whose age is no greater than the specified time in milliseconds |
> | enableHighAccuracy | `Boolean`  | Provides a hint that the application needs the best possible results |


**Returns** `Object` - watchID which is used to clear watch later on.

##### `clearWatch(watchID)`

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| watchID       | `Object`      | Uses the `watchID` returned from `watchPosition()` |


#### Example

```javascript
module.controller('GeoCtrl', function($cordovaGeolocation) {

  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
    }, function(err) {
      // error
    });


  var watchOptions = {
    frequency : 1000,
    timeout : 3000,
    enableHighAccuracy: false // may cause errors if true
  };

  var watch = $cordovaGeolocation.watchPosition(watchOptions);
  watch.then(
    null,
    function(err) {
      // error
    },
    function(position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
  });


  watch.clearWatch();
  // OR
  $cordovaGeolocation.clearWatch(watch)
    .then(function(result) {
      // success
      }, function (error) {
      // error
    });
});
```
