---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><a href="#PinDialog"><code>$cordovaPinDialog</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/pinDialog.js">Source</a>
    <a class="btn-anchor" href="https://github.com/Paldom/PinDialog">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
  </div>
</div>

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
