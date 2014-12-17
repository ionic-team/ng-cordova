---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><a href="#Flashlight"><code>$cordovaFlashlight</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/flashlight.js">Source</a>
    <a class="btn-anchor" href="https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>
</div>

Flashlight Cordova plugin.

```
cordova plugin add https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin.git
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaFlashlight) {

  $cordovaFlashlight.available().then(function(availability) {
    var avail = availability; // is available
  }, function () {
    // unavailable
  });

  $cordovaFlashlight.switchOn()
    .then(
      function (success) { /* success */ },
      function (error) { /* error */ });

  $cordovaFlashlight.switchOff()
    .then(
      function (success) { /* success */ },
      function (error) { /* error */ });

  $cordovaFlashlight.toggle()
    .then(function (success) { /* success */ },
      function (error) { /* error */ });
});
```

