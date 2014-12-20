---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaStatusbar
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/statusbar.js
official-docs: https://github.com/apache/cordova-plugin-statusbar/blob/master/doc/index.md
icon-apple: true
icon-android: true
icon-windows: true
---

Configure the device's StatusBar with colors and styles.

```
cordova plugin add org.apache.cordova.statusbar
```

```javascript
module.controller('MyCtrl', function($cordovaStatusbar) {
  $cordovaStatusbar.overlaysWebView(true);

  // styles: Default : 0, LightContent: 1, BlackTranslucent: 2, BlackOpaque: 3
  $cordovaStatusbar.style(1);

  // supported names: black, darkGray, lightGray, white, gray, red, green,
  // blue, cyan, yellow, magenta, orange, purple, brown
  $cordovaStatusbar.styleColor('black');

  $cordovaStatusbar.styleHex('#000');

  $cordovaStatusbar.hide();

  $cordovaStatusbar.show();

  var isVisible = $cordovaStatusbar.isVisible();

});
```