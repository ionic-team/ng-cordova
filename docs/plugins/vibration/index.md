---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaVibration
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/vibration.js
official-docs: https://github.com/apache/cordova-plugin-vibration
icon-apple: true
icon-android: true
icon-windows: true
---

Vibrate the device programmatically.

```
cordova plugin add cordova-plugin-vibration
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaVibration) {

  // Vibrate 100ms
  $cordovaVibration.vibrate(100);

});
```