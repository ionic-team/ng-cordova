---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><a href="#TouchID"><code>$cordovaTouchID</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/touchID.js">Source</a>
    <a class="btn-anchor" href="https://github.com/leecrossley/cordova-plugin-touchid">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
  </div>
</div>

Cordova Plugin to leverage the iOS local authentication framework to allow in-app user authentication using Touch ID.

```
cordova plugin add uk.co.ilee.touchid
```

```javascript
module.controller('MyCtrl', function($cordovaTouchID) {

  $cordovaTouchID.checkSupport().then(function() {
    // success, TouchID supported
  }, function (error) {
    alert(error); // TouchID not supported
  });

  $cordovaTouchID.authenticate("text").then(function() {
    // success
  }, function () {
    // error
  });

});
```
