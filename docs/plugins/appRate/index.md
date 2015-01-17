---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaAppRate
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/appRate.js
official-docs: https://github.com/pushandplay/cordova-plugin-apprate
icon-apple: true
icon-android: true
icon-windows: false
---

The [AppRate](https://github.com/pushandplay/cordova-plugin-apprate) plugin makes it easy to prompt the user to rate your app, either no or later, or never.


```bash
cordova plugin add https://github.com/pushandplay/cordova-plugin-apprate.git
```


#### Methods

##### `promptForRating(when)`

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| when         | `Boolean`      | If `true` shows the app-rate dialog immediately |


#### Configure with `$cordovaAppRateProvider` *- in `config()` only*

##### `setPreferences(preferences)`

| Preferences  | Type           | Detail  |
| ------------ |----------------| --------|
| language     | `String`       | Possible values: `'ios'`, `'android'`, `'windows8'` |
| appName      | `String`       | URL of your application id |
| openStoreInApp      | `Boolean`       | URL of your application id |
| usesUntilPrompt | `Integer`       | URL of your application id |
| promptAgainForEachNewVersion | `Boolean`       | URL of your application id |
| useCustomRateDialog      | `String`       | URL of your application id |
| iosURL          | `String`       | URL of your application id |
| androidURL      | `String`       | URL of your application id |
| windowsURL      | `String`       | URL of your application id |


#### Example

**Configure default Preferences in your `config`**

```javascript
module.config(function ($cordovaAppRateProvider) {

 document.addEventListener("deviceready", function () {

   var prefs = {
     language: 'en',
     appName : 'MY APP',
     iosURL : 'ios url link',
     androidURL : 'android url link'
   };

   $cordovaAppRateProvider.setPreferences(prefs)

 }, false);
});
```

**Open the Dialog in a controller**

```javascript
module.controller('MyCtrl', function($scope, $cordovaAppRate) {

  document.addEventListener("deviceready", function () {

    $cordovaAppRate.promptForRating(true).then(function (result) {
        // success
    });
  }, false);
});
```
