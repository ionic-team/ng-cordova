---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaSplashscreen
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/splashscreen.js
official-docs: https://github.com/apache/cordova-plugin-splashscreen
icon-apple: true
icon-android: true
icon-windows: true
---

Show or hide the Splash Screen.

```
cordova plugin add org.apache.cordova.splashscreen
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaSplashscreen) {

  $cordovaSplashscreen.show();

});
```