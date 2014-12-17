---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><a href="#Keychain"><code>$cordovaKeychain</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/keychain.js">Source</a>
    <a class="btn-anchor" href="https://github.com/shazron/KeychainPlugin">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
  </div>
</div>

Accessing the keychain of iOS from cordova

```
cordova plugin add https://github.com/shazron/KeychainPlugin.git
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaKeychain) {

  $scope.getValueFromKey = function(key) {
    $cordovaKeychain.getForKey(key, servicename).then(function(value) {
      console.log(value);
    }, function (err) {
      console.error(err);
    });
  };

});
```
