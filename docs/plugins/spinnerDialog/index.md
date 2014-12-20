---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaSpinnerDialog
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/spinnerDialog.js
official-docs: https://github.com/Paldom/SpinnerDialog
icon-apple: true
icon-android: true
icon-windows: true
---

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


