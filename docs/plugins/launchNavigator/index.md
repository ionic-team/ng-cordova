---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaKeychain
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/launchNavigator.js
official-docs: https://github.com/dpa99c/phonegap-launch-navigator
icon-apple: true
icon-android: true
icon-windows: true
---

Launch the native navigator from a start to a destination.

```
cordova plugin add uk.co.workingedge.phonegap.plugin.launchnavigator
```

### Methods

##### `navigate(destination, start, options)`

Navigate to a destination using the native navigation app.

| Param                      | Required | Type                | Detail                                                                                                                                                                                                              |
| -------------------------- |----------| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| destination                | true     | `String` or `Array` | destination location to use for navigation, either as a String specifying the place name, or as an Array specifying latitude/longitude.                                                                             |
| start                      | false    | `String` or `Array` | start location to use for navigation, either as a String specifying the place name, or as an Array specifying latitude/longitude. If not specified (using `null` value), the current device location will be used.  |
| options                    | false    | `Object`            | Platform-specific options. See [Caveats](https://github.com/dpa99c/phonegap-launch-navigator#caveats) for details on each platform.                                                                                 |

> **Returns** a promise object.

### Example

```javascript
module.controller('MyCtrl', function($scope, $cordovaLaunchNavigator) {

  $scope.launchNavigator = function() {
    var destination = [latitude, longitude];
	var start = "Trento";
    $cordovaLaunchNavigator.navigate(destination, start).then(function() {
      console.log("Navigator launched");
    }, function (err) {
      console.error(err);
    });
  };

});
```
