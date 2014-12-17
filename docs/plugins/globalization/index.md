---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><code>$cordovaGlobalization</code></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/globalization.js">Source</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-globalization/blob/master/doc/index.md">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>
</div>

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