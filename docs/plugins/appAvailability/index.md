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

<table class="table">
    <thead>
        <tr>
            <th>iOS Schemes</th>
            <th>Android Schemes</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>twitter://</td>
            <td>com.twitter.android</td>
        </tr>
        <tr>
            <td>fb://</td>
            <td>com.facebook.katana</td>
        </tr>

        <tr>
            <td>whatsapp://</td>
            <td>com.whatsapp</td>
        </tr>
    </tbody>
</table>


```bash
cordova plugin add https://github.com/ohh2ahh/AppAvailability.git
```


```javascript

module.controller('AppAvailCtrl', function($scope, $cordovaAppAvailability) {

  $cordovaAppAvailability
    .check('twitter://')
    .then(function(success) {
      // success
    },
    function (error) {
      // error
    });
});
```
