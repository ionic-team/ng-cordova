---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaToast
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/toast.js
official-docs: https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin
icon-apple: true
icon-android: true
icon-windows: true
---

This plugin allows you to show a native Toast (a little text popup) on iOS, Android and WP8. It's great for showing a non intrusive native notification which is guaranteed always in the viewport of the browser.

```
cordova plugin add https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin.git
```

#### Methods

##### `show(message, duration, position)`


| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| message      | `String`       | Message of the spinner dialog. Leave blank for no message |
| duration     | `String`       | Duration of time to display the toast. Options : `'short'`, `'long'` |
| position     | `String`       | Location of the toast. Options : `'top'`, `'center'`, `'bottom'` |



##### `showShortTop(message)`

##### `showShortCenter(message)`

##### `showShortBottom(message)`

##### `showLongTop(message)`

##### `showLongCenter(message)`

##### `showLongBottom(message)`

##### `showWithOptions(options)`


#### Example

```javascript
module.controller('MyCtrl', function($cordovaToast) {

  $cordovaToast
    .show('Here is a message', 'long', 'center')
    .then(function(success) {
      // success
    }, function (error) {
      // error
    });

  $cordovaToast.showShortTop('Here is a message').then(function(success) {
    // success
  }, function (error) {
    // error
  });

  $cordovaToast.showLongBottom('Here is a message').then(function(success) {
    // success
  }, function (error) {
    // error
  });

});
```
