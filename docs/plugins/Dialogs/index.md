---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><code>$cordovaDialogs</code></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/dialogs.js">Source</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-dialogs/blob/master/doc/index.md">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>
</div>

Trigger alert, confirm, and prompt windows, or send beeps (beep, beep!)

```
cordova plugin add org.apache.cordova.dialogs
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaDialogs) {

  $cordovaDialogs.alert('message', 'title', 'button name')
    .then(function() {
      // callback success
    });

  $cordovaDialogs.confirm('message', 'title', ['button 1','button 2'])
    .then(function(buttonIndex) {
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      var btnIndex = buttonIndex;
    });

  $cordovaDialogs.prompt('msg', 'title', ['btn 1','btn 2'], 'default text')
    .then(function(result) {
      var input = result.input1;
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      var btnIndex = buttonIndex;
    });

  // beep 3 times
  $cordovaDialogs.beep(3);

});
```

