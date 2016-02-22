---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaPinDialog
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/pinDialog.js
official-docs: https://github.com/Paldom/PinDialog
icon-apple: true
icon-android: true
icon-windows: false
---

Numeric password dialog.

```
cordova plugin add https://github.com/Paldom/PinDialog.git
```

```javascript
module.controller('MyCtrl', function($cordovaPinDialog) {

  $cordovaPinDialog.prompt('Some message here').then(
    function(result) {
      // result
    },
    function (error) {
      // error
  })
});
```
