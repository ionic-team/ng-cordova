---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><code>$cordovaAppAvailability</code></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/appAvailability.js">Source</a>
    <a class="btn-anchor" href="https://github.com/ohh2ahh/AppAvailability">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
  </div>
</div>

The [AppAvailability](https://github.com/ohh2ahh/AppAvailability) plugin allows you to check if an app is installed on the user's device. It requires an URI Scheme (e.g. twitter://) on iOS or a Package Name (e.g com.twitter.android) on Android.

```bash
cordova plugin add https://github.com/ohh2ahh/AppAvailability.git
```

#### Methods

##### `check(method)`

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| method       | `String`       | URI scheme to test as described below |


#### Schemes

An extensive list of [iOS schemes can be found at this link](http://wiki.akosma.com/IPhone_URL_Schemes). 

| iOS Schemes     | Android Scheme |
| --------------- |----------------|
| `twitter://`    | `com.twitter.android` |
| `fb://`         | `com.facebook.katana` |
| `whatsapp://`   | `com.whatsapp` |



#### Example

```javascript
module.controller('AppAvailCtrl', function($cordovaAppAvailability) {

  $cordovaAppAvailability
    .check('twitter://')
    .then(function() {
      // is available
    },
    function () {
      // not available
    });
});
```
