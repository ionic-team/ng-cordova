---
layout: content
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

## Examples and Docs

To use any of the plugin wrappers below, all you need to do is link to the `ng-cordova.js` file in your app. Then, include `ngCordova` as a dependency in your angular module:

```javascript
angular.module('myApp', ['ngCordova'])
```

### `$cordovaCamera`

This service makes it easy to use the [`org.apache.cordova.camera`](https://github.com/apache/cordova-plugin-camera) plugin to take pictures and video
from a device:

```javascript

module.controller('PictureCtrl', function($scope, $cordovaCamera) {

  $scope.takePicture = function() {
    $cordovaCamera.getPicture({

      // See all the possible Camera options from the Camera docs [1]:
      /// https://github.com/apache/cordova-plugin-camera/blob/master/doc/index.md#cameraoptions

    }).then(function(imageData) {

      // Success! Image data is here

    }, function(err) {

      // An error occured. Show a message to the user

    });
  }

});
```

[1] [https://github.com/apache/cordova-plugin-camera/blob/master/doc/index.md#cameraoptions](https://github.com/apache/cordova-plugin-camera/blob/master/doc/index.md#cameraoptions)

### `$cordovaDevice`

Grab device related information, such as platform, and device model.

```javascript
module.controller('MyCtrl', function($scope, $cordovaDevice) {
  var device = $cordovaDevice.getDevice();
  var cordova = $cordovaDevice.getCordova();
  var model = $cordovaDevice.getModel();
  var platform = $cordovaDevice.getPlatform();
  var uuid = $cordovaDevice.getUUID();
  var version = $cordovaDevice.getVersion();
});
```

### `$cordovaGeolocation`

Grab the current location of the user, or grab continuous location changes:

```javascript
module.controller('PictureCtrl', function($scope, $cordovaGeolocation) {
  $scope.getPosition = function() {
    $cordovaGeolocation.getCurrentPosition().then(function(position) {
      // Position here: position.coords.latitude, position.coords.longitude
    }, function(err) {});
  }

  $scope.trackPosition = function() {
    $cordovaGeolocation.watchPosition().then(function() {
      // Not currently used
    }, function(err) {
      // An error occured. Show a message to the user
    }, function(position) {
      // Active updates of the position here
    });
  }

});
```

### `$cordovaBarcodeScanner`

Scan QR codes and bar codes. From the [wildabeast/BarcodeScanner](https://github.com/wildabeast/BarcodeScanner) plugin.


```javascript
module.controller('MyCtrl', function($scope, $cordovaBarcodeScanner) {
  $cordovaBarcodeScanner.scan().then(function(result) {
    // Scanner result
  }, function(err) {
  });
```

### `$cordovaDeviceOrientation`

Monitor device orientation through the digital compass on a device.

```javascript
module.controller('PictureCtrl', function($scope, $cordovaDeviceOrientation) {
  $scope.trackHeading = function() {
    // Pass options in [1]
    $cordovaDeviceOrientation.watchHeading(options).then(function() {
      // Not currently used
    }, function(err) {
      // An error occured. Show a message to the user
    }, function(position) {
      // Active updates of the heading here
    });
  }
});
```

[1][https://github.com/apache/cordova-plugin-device-orientation/blob/master/doc/index.md#navigatorcompasswatchheading](https://github.com/apache/cordova-plugin-device-orientation/blob/master/doc/index.md#navigatorcompasswatchheading)

### `$cordovaDeviceMotion`

Track accelerometer changes as the device is moved, rotated, and shaken.


```javascript
module.controller('MyCtrl', function($scope, $cordovaDeviceMotion) {
  $cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {

    // Accelerometer data available in result

  }, function(err) {
  
    // An error occured. Show a message to the user?

  });

  $cordovaDeviceMotion.watchAcceleration({
  }, function(result) {
  }, function(err) {
  });

  // Clear a watch by watchID
  $cordovaDeviceMotion.clearWatch(watchID);
});
```

### `$cordovaContacts`

A powerful way to create, remove, and search through contacts on the device.

```javascript
module.controller('MyCtrl', function($scope, $cordovaContacts) {
  $scope.addContact = function() {
    $cordovaContacts.save($scope.contactForm).then(function(result) {
      // Contact saved
    }, function(err) {
      // Contact error
    });
  };

  // Many more features, see the docs below
});
```

[1][https://github.com/apache/cordova-plugin-contacts/blob/master/doc/index.md](https://github.com/apache/cordova-plugin-contacts/blob/master/doc/index.md)


### `$cordovaNetwork`

Check network connection types, and track offline and online status.

```javascript
module.controller('MyCtrl', function($scope, $cordovaNetwork) {
  var type = $cordovaNetwork.getNetwork();

  var isOnline = $cordovaNetwork.isOnline();

  // See the various network types: https://github.com/apache/cordova-plugin-network-information/blob/master/doc/index.md#connectiontype
});
```

### `$cordovaVibration`

Vibrate the device programatically.

```javascript
module.controller('MyCtrl', function($scope, $cordovaVibration) {

  // Vibrate 100ms
  $cordovaVibration.vibrate(100);

});
```

### `$cordovaSplashscreen`

Show or hide the Splash Screen.

```javascript
module.controller('MyCtrl', function($scope, $cordovaSplashscreen) {
  $cordovaSplashscreen.show();
});
```

<!--
### `$cordovaNotification`

Trigger alert, confirm, and prompt windows, or send beeps (beep, beep!)

```javascript
module.controller('MyCtrl', function($scope, $cordovaNotifications) {
  
  $cordovaNotifications.alert('Wow!');
});
```
-->
