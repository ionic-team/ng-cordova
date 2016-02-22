---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaKeyboard
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/keyboard.js
official-docs: https://github.com/driftyco/ionic-plugins-keyboard
icon-apple: true
icon-android: true
icon-windows: false
---

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

