---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaFileOpener2
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/fileOpener2.js
official-docs:  https://github.com/pwlin/cordova-plugin-file-opener2
icon-apple: true
icon-android: true
icon-windows: false
---

This plugin will open a file on your device file system with its default application.

```
cordova plugin add https://github.com/pwlin/cordova-plugin-file-opener2

```

#### Open an APK install dialog:
```javascript
module.controller('MyCtrl', function($scope, $cordovaFileOpener2) {

  $cordovaFileOpener2.open(
    '/sdcard/Download/gmail.apk', 
    'application/vnd.android.package-archive'
  ).then(function() {
      // Success!
  }, function(err) {
      // An error occurred. Show a message to the user
  });

});
```

#### Open a PDF document with the default PDF reader and optional callback object:
```javascript
module.controller('MyCtrl', function($scope, $cordovaFileOpener2) {

  $cordovaFileOpener2.open(
    '/sdcard/Download/starwars.pdf',
    'application/pdf'
  ).then(function() {
      // file opened successfully
  }, function(err) {
      // An error occurred. Show a message to the user
  });

});
```

### Additional Android Functions
#### Uninstall a package with its id.
```javascript
module.controller('MyCtrl', function($scope, $cordovaFileOpener2) {

  $cordovaFileOpener2.uninstall('com.zynga.FarmVille2CountryEscape').then(function() {
      // Uninstall intent activity started.
  }, function(err) {
      // An error occurred. Show a message to the user
  });

});
```

#### Check if an app is already installed.
```javascript
module.controller('MyCtrl', function($scope, $cordovaFileOpener2) {

  $cordovaFileOpener2.appIsInstalled('com.adobe.reader').then(function(res) {
      if (res.status === 0) {
          // Adobe Reader is not installed.
      } else {
          // Adobe Reader is installed.
      }
  });

});
```

