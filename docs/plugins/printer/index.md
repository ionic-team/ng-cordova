---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaPrinter
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/Printer.js
official-docs: https://github.com/katzer/cordova-plugin-printer
icon-apple: true
icon-android: true
icon-windows: false
---

Printer plugin

```
cordova plugin add https://github.com/katzer/cordova-plugin-printer.git
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaPrinter) {

  var printerAvail = $cordovaPrinter.isAvailable()

  var doc = "<html> ... </html>";
  $cordovaPrinter.print(doc)
});
```
