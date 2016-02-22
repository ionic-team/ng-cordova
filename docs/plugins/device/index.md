---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaDevice
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/device.js
official-docs: https://github.com/apache/cordova-plugin-device
icon-apple: true
icon-android: true
icon-windows: true
---

Grab device related information, such as platform, and device model.

```
cordova plugin add cordova-plugin-device
```

#### Methods

##### `getDevice()`
Get all device information.

> **Returns**  `Object`  —  returns `cordova`, `model`, `platform`, `UUID`, and `version` information


##### `getCordova()`
Get the version of Cordova running on the device.

> **Returns**  `String`


##### `getModel()`
The `getModel()` returns the name of the device's model or product. The value is set by the device manufacturer and may be different across versions of the same product.

> **Returns**  `String`  —  eg: iPhone 5 : `"iPhone 5,1"`, Nexus One : `"Passion"`


##### `getPlatform()`
Get the device's operating system name.

> **Returns**  `String`  —  eg: `"iOS"`, `"Android"`, `"WinCE"`


##### `getUUID()`
Get the device's Universally Unique Identifier (UUID). The details of how a UUID is generated are determined by the device manufacturer and are specific to the device's platform or model.

> **Returns**  `String`


##### `getVersion()`
Get the operating system version.

> **Returns**  `String`  —  eg: iOS 8.2 : `"8.2"`, Froyo OS : `"2.2"`


#### Example

```javascript
module.controller('MyCtrl', function($scope, $cordovaDevice) {

  document.addEventListener("deviceready", function () {

    var device = $cordovaDevice.getDevice();

    var cordova = $cordovaDevice.getCordova();

    var model = $cordovaDevice.getModel();

    var platform = $cordovaDevice.getPlatform();

    var uuid = $cordovaDevice.getUUID();

    var version = $cordovaDevice.getVersion();

  }, false);
})
```