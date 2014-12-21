---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaAppRate
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/adMob.js
official-docs: https://github.com/pushandplay/cordova-plugin-apprate
icon-apple: true
icon-android: true
icon-windows: false
---

The [AppRate](https://github.com/pushandplay/cordova-plugin-apprate) plugin makes it easy to prompt the user to rate your app, either no or later, or never.


```bash
cordova plugin add https://github.com/pushandplay/cordova-plugin-apprate.git
```


```javascript

module.controller('MyCtrl', function($scope, $cordovaAppRate) {

  $cordovaAppRate.promptForRating(true).then(function (result) {
    // success
  });
});
```
