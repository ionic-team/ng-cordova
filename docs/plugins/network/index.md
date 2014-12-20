---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaNetwork
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/network.js
official-docs: https://github.com/apache/cordova-plugin-network-information/blob/master/doc/index.md
icon-apple: true
icon-android: true
icon-windows: true
---

Check network connection types, and track offline and online status.

```
cordova plugin add org.apache.cordova.network-information
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaNetwork) {
  var type = $cordovaNetwork.getNetwork();

  var isOnline = $cordovaNetwork.isOnline();

  var isOffline = $cordovaNetwork.isOffline();
});
```
[View Network Types](https://github.com/apache/cordova-plugin-network-information/blob/master/doc/index.md#connectiontype)

