---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><code>$cordovaBatteryStatus</code></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/batteryStatus.js">Source</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-battery-status/blob/master/doc/index.md">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>
</div>

The [BatteryStatus](https://github.com/apache/cordova-plugin-battery-status) plugin provides an API for the current battery status.

```bash
cordova plugin add org.apache.cordova.battery-status
```


```javascript

module.controller('MyCtrl', function($scope, $cordovaBatteryStatus) {

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

});

```