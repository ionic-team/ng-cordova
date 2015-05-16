---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaTouchID
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/touchid.js
official-docs: https://github.com/leecrossley/cordova-plugin-touchid
icon-apple: true
icon-android: false
icon-windows: false
---

Cordova Plugin to leverage the iOS local authentication framework to allow in-app user authentication using Touch ID.

```
cordova plugin add https://github.com/leecrossley/cordova-plugin-touchid.git
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
