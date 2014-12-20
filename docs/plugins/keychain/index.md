---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaKeychain
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/keychain.js
official-docs: https://github.com/shazron/KeychainPlugin
icon-apple: true
icon-android: false
icon-windows: false
---

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
