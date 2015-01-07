---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaBatteryStatus
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/batteryStatus.js
official-docs: https://github.com/apache/cordova-plugin-battery-status/blob/master/doc/index.md
icon-apple: true
icon-android: true
icon-windows: true
---

The [BatteryStatus](https://github.com/apache/cordova-plugin-battery-status) plugin provides an API for the current battery status.

```bash
cordova plugin add org.apache.cordova.battery-status
```


```javascript

module.controller('MyCtrl', function($scope, $cordovaBatteryStatus) {

  document.addEventListener("deviceready", function () {

    $cordovaBatteryStatus.$on('batterystatus', function (result) {
      var batteryLevel = result.level;       // (0 - 100)
      var isPluggedIn  = result.isPlugged;   // bool
    });

    $cordovaBatteryStatus.$on('batterycritical', function (result) {
      var batteryLevel = result.level;       // (0 - 100)
      var isPluggedIn  = result.isPlugged;   // bool
    });

    $cordovaBatteryStatus.$on('batterylow', function (result) {
      var batteryLevel = result.level;       // (0 - 100)
      var isPluggedIn  = result.isPlugged;   // bool
    });

  }, false);
});

```