---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaDatePicker
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/datepicker.js
official-docs: https://github.com/VitaliiBlagodir/cordova-plugin-datepicker
icon-apple: true
icon-android: true
icon-windows: false
---

Show a native date or time picker widget.

```
cordova plugin add https://github.com/VitaliiBlagodir/cordova-plugin-datepicker.git
```

#### Methods

##### `show(options)`

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| options      | `Object`       | Date Picker options |

> | Options           | Type             | Default      | Detail          |
> | ----------------  | ---------------- |------------- | ----------------|
> | mode              | `String`         | `'date'`     | Mode of date picker: `'date'`, `'time'` |
> | date              | `Date`, `String` | `new Date()` | Selected date   |
> | minDate           | `Date`, `String` | none         | Minimum date    |
> | maxDate           | `Date`, `String` | none         | Maximum date    |
> | allowOldDates     | `Boolean`        | `true`       | Show / hide dates earlier than selected |
> | allowFutureDates  | `Boolean`        | `true`       | Show / hide dates after selected date |
> | doneButtonLabel   | `String`         | `'Done'`     | Label of done button |
> | doneButtonColor   | `String`         | `'#0000FF'`  | Hex color of done button |
> | cancelButtonLabel | `String`         | `'Cancel'`   | Label of cancel button |
> | cancelButtonColor | `String`         | `'#000000'`  | Hex color of cancel button |
> | minuteInterval    | `Integer`        | `1`          | Interval of minutes selection |


**Returns**  `Date` - User selected Date


#### Examples

```javascript
module.controller('MyCtrl', function($scope, $cordovaDatePicker) {

  var options = {
    date: new Date(),
    mode: 'date', // or 'time'
    minDate: new Date() - 10000,
    allowOldDates: true,
    allowFutureDates: false,
    doneButtonLabel: 'DONE',
    doneButtonColor: '#F2F3F4',
    cancelButtonLabel: 'CANCEL',
    cancelButtonColor: '#000000'
  };

  document.addEventListener("deviceready", function () {

    $cordovaDatePicker.show(options).then(function(date){
        alert(date);
    });

  }, false);
});
```
