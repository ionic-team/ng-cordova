---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaFlashlight
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/flashlight.js
official-docs: https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin
icon-apple: true
icon-android: true
icon-windows: true
---

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

