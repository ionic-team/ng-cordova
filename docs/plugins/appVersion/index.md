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

##### `getVersionNumber()`

Get the version number of the current app running.

**Returns**  `String`, with the version number

##### `getVersionCode()`

Get the build identifier of the app

**Returns**  `String`, with the build identifier

#### Example

```javascript
module.controller('myCtrl', function($scope, $cordovaAppVersion) {

  document.addEventListener("deviceready", function () {

    $cordovaAppVersion.getVersionNumber().then(function (version) {
        var appVersion = version;
      });
  }, false);
  
  $cordovaAppVersion.getVersionCode().then(function (build) {
        var appBuild = build;
      });
  }, false);
  
});
```
