---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaGlobalization
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/globalization.js
official-docs: https://github.com/apache/cordova-plugin-globalization/
icon-apple: true
icon-android: true
icon-windows: true
---

Obtains information and performs operations specific to the user's locale and timezone.

```
cordova plugin add org.apache.cordova.globalization
```


```javascript
module.controller('MyCtrl', function($cordovaGlobalization) {
  $cordovaGlobalization.getPreferredLanguage().then(
    function(result) {
      // result
    },
    function(error) {
      // error
  });

  $cordovaGlobalization.getLocaleName().then(
    function(result) {
      // result
    },
    function(error) {
      // error
  });

  $cordovaGlobalization.getFirstDayOfWeek().then(
    function(result) {
      // result
    },
    function(error) {
      // error
  });

    // Soon implemented:
    // dateToString
    // stringToDate
    // getDatePattern
    // getDateNames
    // isDayLightSavingsTime
    // numberToString
    // stringToNumber
    // getNumberPattern
    // getCurrencyPattern
});
```