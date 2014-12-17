---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><code>$cordovaSpinnerDialog</code></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/spinnerDialog.js">Source</a>
    <a class="btn-anchor" href="https://github.com/Paldom/SpinnerDialog">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>
</div>

A dialog with a spinner wheel.

```
cordova plugin add https://github.com/Paldom/SpinnerDialog.git
```

#### Methods

##### `show(title, message, persistent)`


| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| title        | `String`       | Title of the spinner dialog. Leave blank for no title |
| message      | `String`       | Message of the spinner dialog. Leave blank for no message |
| persistent   | `Boolean`      | `true` to stop the user from dismissing the dialog with touch. `false` to allow touch to dismiss dialog.|


##### `hide()`

Hides the spinner dialog, which is currently in the view.


#### Example

```javascript
module.controller('MyCtrl', function($scope, $cordovaSpinnerDialog) {

  $cordovaSpinnerDialog.show("title","message", true);

  $cordovaSpinnerDialog.hide();
});
```


