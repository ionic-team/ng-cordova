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

```javascript
module.controller('GeoCtrl', function($cordovaGeolocation) {

  $cordovaGeolocation
    .getCurrentPosition()
    .then(function (position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
    }, function(err) {
      // error
    });

  // begin a watch
  var options = {
    frequency : 1000,
    timeout : 3000,
    enableHighAccuracy: true
  };

  var watch = $cordovaGeolocation.watchPosition(options);
  watch.promise.then(function()  { /* Not  used */ },
    function(err) {
      // error
    }, function(position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
  });

  // clear watch
  $cordovaGeolocation.clearWatch(watch.watchId)
});
```
