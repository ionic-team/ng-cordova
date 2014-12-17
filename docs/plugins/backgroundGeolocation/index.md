---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><a href="#BackgroundGeolocation"><code>$cordovaBackgroundGeolocation</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/backgroundGeolocation.js">Source</a>
    <a class="btn-anchor" href="https://github.com/christocracy/cordova-plugin-background-geolocation">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
  </div>
</div>

Cross-platform background geolocation for Cordova / PhoneGap with battery-saving "circular region monitoring" and "stop detection".

```bash
cordova plugin add https://github.com/christocracy/cordova-plugin-background-geolocation.git
```

```javascript

module.controller('MyCtrl', function($scope, $cordovaBackgroundGeolocation) {

  var options = {
    // https://github.com/christocracy/cordova-plugin-background-geolocation#config
  };

  // `configure` calls `start` internally
  $cordovaBackgroundGeolocation.configure(options).then(function (location) {
    console.log(location);
  }, function (err) {
    console.error(err);
  });

  $scope.stopBackgroundGeolocation = function () {
    $cordovaBackgroundGeolocation.stop();
  };
});
```
