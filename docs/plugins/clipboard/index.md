---
layout: docs-plugins
title: DOCS | ngCordova
---

<div class="anchor-row">
  <h3><code>$cordovaClipboard</code></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/clipboard.js">Source</a>
    <a class="btn-anchor" href="https://github.com/VersoSolutions/CordovaClipboard">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>
</div>

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
