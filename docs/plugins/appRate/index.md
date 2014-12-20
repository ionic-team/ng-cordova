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

The [AdMob](https://github.com/floatinghotpot/cordova-admob-pro) plugin presents AdMob Ads in Mobile App/Games natively from JavaScript.


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