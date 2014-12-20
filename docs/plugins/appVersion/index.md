---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaAppVersion
source:  https://github.com/driftyco/ng-cordova/blob/master/src/plugins/appVersion.js
official-docs:  https://github.com/whiteoctober/cordova-plugin-app-version
icon-apple: true
icon-android: true
icon-windows: false
---

Reads the version of your app from the target build settings.

```bash
cordova plugin add https://github.com/whiteoctober/cordova-plugin-app-version.git
```

#### Methods

##### `getAppVersion()`

Get the version of the current app running.

**Returns**  `String`, with the app-version


#### Example

```javascript

module.controller('myCtrl', function($scope, $cordovaAppVersion) {

  $cordovaAppVersion.getAppVersion().then(function (version) {
    var appVersion = version;
  });
});
```