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

The [AppRate](https://github.com/pushandplay/cordova-plugin-apprate) plugin makes it easy to prompt the user to rate your app, either now or later, or never.


```bash
cordova plugin add https://github.com/pushandplay/cordova-plugin-apprate.git
```


#### Methods

##### `promptForRating(immediate)`

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| immediate    | `Boolean`      | If `true` shows the app-rate dialog immediately |



##### `$cordovaAppRateProvider.setPreferences(preferences)` *- only in `config()`*

The `preferences` parameter is an `Object` with the following key possibilities:

| Preferences         | Type      | Detail   |
| ------------------- |---------- | -------- |
| language            | `String`  | Language of Dialog - eg `'en'`, `'fr'`, `'it'` |
| appName             | `String`  | Custom application title |
| openStoreInApp      | `Boolean` | Leave app or not  |
| usesUntilPrompt     | `Integer` | Number of runs of app before dialog is displayed |
| promptForNewVersion | `Boolean` | Show dialog again if new app version |
| useCustomRateDialog | `String`  | Use custom view for rate dialog |
| iosURL              | `String`  | Application id in AppStore |
| androidURL          | `String`  | Application URL in GooglePlay |
| windowsURL          | `String`  | Application URL in WindowsStore |


#### Example

**Configure default Preferences in your `config`**

```javascript
module.config(function ($cordovaAppRateProvider) {

 document.addEventListener("deviceready", function () {

   var prefs = {
     language: 'en',
     appName: 'MY APP',
     iosURL: '<my_app_id>',
     androidURL: 'market://details?id=<package_name>',
     windowsURL: 'ms-windows-store:Review?name=<...>'
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

**Navigate to the App store in a controller, bypassing the dialog box**

```javascript
module.controller('MyCtrl', function($scope, $cordovaAppRate) {

  document.addEventListener("deviceready", function () {

    $cordovaAppRate.navigateToAppStore().then(function (result) {
        // success
    });
  }, false);
});
```
