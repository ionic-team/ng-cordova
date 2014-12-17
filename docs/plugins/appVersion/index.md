---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><code>$cordovaAppVersion</code></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/appVersion.js">Source</a>
    <a class="btn-anchor" href="https://github.com/whiteoctober/cordova-plugin-app-version">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
  </div>
</div>


Reads the version of your app from the target build settings.

```bash
cordova plugin add https://github.com/whiteoctober/cordova-plugin-app-version.git
```

#### Methods

##### `getAppVersion()`

Get the version of the current app running.

**Returns**  `String`, with the app-version


#### Example

```javascript

module.controller('myCtrl', function($scope, $cordovaAppVersion) {

  $cordovaAppVersion.getAppVersion().then(function (version) {
    var appVersion = version;
  });
});
```