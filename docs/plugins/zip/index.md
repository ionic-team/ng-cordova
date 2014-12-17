---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><a href="#Zip"><code>$cordovaZip</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/zip.js">Source</a>
    <a class="btn-anchor" href="https://github.com/MobileChromeApps/zip">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
  </div>
</div>


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