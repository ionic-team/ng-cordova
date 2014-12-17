---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><a href="#Keyboard"><code>$cordovaKeyboard</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/keyboard.js">Source</a>
    <a class="btn-anchor" href="https://github.com/driftyco/ionic-plugins-keyboard">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
  </div>
</div>

Accessing the Keyboard of iOS from cordova

```
cordova plugin add https://github.com/driftyco/ionic-plugins-keyboard.git
```


```javascript
module.controller('MyCtrl', function($scope, $cordovaKeyboard) {

  $cordovaKeyboard.hideAccessoryBar(true)

  $cordovaKeyboard.disableScroll(true)

  $cordovaKeyboard.close()

  var isVisible = $cordovaKeyboard.isVisible()

});
```

