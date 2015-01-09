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

This plugin provides an implementation of an old version of the [Network Information API](http://www.w3.org/TR/2011/WD-netinfo-api-20110607/). It provides information about the device's cellular and wifi connection, and whether the device has an internet connection.

```
cordova plugin add org.apache.cordova.network-information
```

#### Methods

##### `getNetwork()`

This property offers a fast way to determine the device's network connection state, and type of connection.

**Returns** `Connection` Object:

> | Connection Type     | Description  |
> | ------------------- | ------------ |
> | Connection.UNKNOWN  | Unknown connection |
> | Connection.ETHERNET | Ethernet connection |
> | Connection.WIFI     | WiFi connection |
> | Connection.CELL_2G  | Cell 2G connection |
> | Connection.CELL_3G  | Cell 3G connection |
> | Connection.CELL_4G  | Cell 4G connection |
> | Connection.CELL     | Cell generic connection |
> | Connection.NONE     | No network connection |


##### `isOnline()`

Check if the phone network is Online

**Returns** `true` - if Online


##### `isOffline()`

Check if the phone network is Offline

**Returns** `true` - if Offline


##### `$rootScope.$on('networkOnline', function(networkState));`

| Returns      | Type       | Detail  |
| ------------ |------------| --------|
| networkState | `Object`   | Date Picker options |


##### `$rootScope.$on('networkOffline', function(networkState));`


#### Examples

```javascript
module.controller('MyCtrl', function($scope, $cordovaNetwork) {

  document.addEventListener("deviceready", function () {

    var type = $cordovaNetwork.getNetwork();

    var isOnline = $cordovaNetwork.isOnline();

    var isOffline = $cordovaNetwork.isOffline();

  }, false);
});
```