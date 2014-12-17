---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><code>$cordovaDatePicker</code></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/datepicker.js">Source</a>
    <a class="btn-anchor" href="http://github.com/VitaliiBlagodir/cordova-plugin-datepicker">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
  </div>
</div>

Show a native date or time picker widget.

```
cordova plugin add http://github.com/VitaliiBlagodir/cordova-plugin-datepicker
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaDatePicker) {

  var options = {date: new Date(), mode: 'date'};
  //var options = {date: new Date(), mode: 'time'}; for time
  $cordovaDatePicker.show(options).then(function(date){
      alert(date);
  });
});
```
