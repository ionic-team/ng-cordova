---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaZip
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/zip.js
official-docs: https://github.com/MobileChromeApps/zip
icon-apple: true
icon-android: true
icon-windows: false
---


Unzip a file.

```
cordova plugin add https://github.com/MobileChromeApps/zip.git
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaZip) {

  $cordovaZip
    .unzip(
      src, // https://github.com/MobileChromeApps/zip/blob/master/tests/tests.js#L32
      dest // https://github.com/MobileChromeApps/zip/blob/master/tests/tests.js#L45
    ).then(function () {
      console.log('success');
    }, function () {
      console.log('error');
    }, function (progressEvent) {
      // https://github.com/MobileChromeApps/zip#usage
      console.log(progressEvent);
    });
});
```