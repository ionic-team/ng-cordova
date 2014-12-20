---
layout: docs-plugins
title: DOCS | ngCordova

plugin-name: $cordovaClipboard
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/clipboard.js
official-docs: https://github.com/VersoSolutions/CordovaClipboard
icon-apple: true
icon-android: true
icon-windows: true
---

The [Clipboard](https://github.com/VersoSolutions/CordovaClipboard) plugin provides Clipboard management for Cordova/PhoneGap that supports iOS, Android, and Windows Phone 8.


```
cordova plugin add https://github.com/VersoSolutions/CordovaClipboard
```


```javascript

module.controller('ClipboardCtrl', function($scope, $cordovaClipboard) {

  $cordovaClipboard
    .copy('text to copy')
    .then(function () {
      // success
    }, function () {
      // error
    });

  $cordovaClipboard
    .paste()
    .then(function (result) {
      // success, use result
    }, function () {
      // error
    });

});

```
