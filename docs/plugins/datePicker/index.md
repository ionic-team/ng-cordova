---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaDatePicker
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/datepicker.js
official-docs: http://github.com/VitaliiBlagodir/cordova-plugin-datepicker
icon-apple: true
icon-android: true
icon-windows: false
---

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
