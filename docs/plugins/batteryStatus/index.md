---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaBatteryStatus
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/batteryStatus.js
official-docs: https://github.com/apache/cordova-plugin-battery-status
icon-apple: true
icon-android: true
icon-windows: true
---

The [BatteryStatus](https://github.com/apache/cordova-plugin-battery-status) plugin provides an API for the current battery status.

```bash
cordova plugin add cordova-plugin-battery-status
```


```javascript
module.run(function($rootScope, $cordovaBatteryStatus) {

  document.addEventListener("deviceready", function () {

    $rootScope.$on('$cordovaBatteryStatus:status', function (result) {
      var batteryLevel = result.level;       // (0 - 100)
      var isPluggedIn  = result.isPlugged;   // bool
    });

    $rootScope.$on('$cordovaBatteryStatus:critical', function (result) {
      var batteryLevel = result.level;       // (0 - 100)
      var isPluggedIn  = result.isPlugged;   // bool
    });

    $rootScope.$on('$cordovaBatteryStatus:low', function (result) {
      var batteryLevel = result.level;       // (0 - 100)
      var isPluggedIn  = result.isPlugged;   // bool
    });

  }, false);
});
```