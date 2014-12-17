---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><code>$cordovaAppRate</code></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/adMob.js">Source</a>
    <a class="btn-anchor" href="https://github.com/pushandplay/cordova-plugin-apprate">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
  </div>
</div>


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