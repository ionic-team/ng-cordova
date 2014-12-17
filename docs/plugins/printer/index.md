---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><a href="#Printer"><code>$cordovaPrinter</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/Printer.js">Source</a>
    <a class="btn-anchor" href="https://github.com/katzer/cordova-plugin-printer">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
  </div>
</div>

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
