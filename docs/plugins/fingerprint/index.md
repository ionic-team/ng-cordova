---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaFingerprint
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/fingerprint.js
official-docs: https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio
icon-apple: true
icon-android: true
icon-windows: false
---

Cordova Plugin to use native fingerprint authentication on Android 6+ and iOS.

```
cordova plugin add https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio
```

```javascript
module.controller('MyCtrl', function($cordovaFingerprint) {

  $cordovaFingerprint.isAvailable().then(function() {
    // success, fingerprint supported
  }, function (error) {
    alert(error); // not supported
  });

  var options = {
      clientId: "Fingerprint App",
      clientSecret: "secret" //Only necessary for Android
    };

  $cordovaFingerprint.show(options).then(function() {
    // success
  }, function () {
    // error
  });

});
```
