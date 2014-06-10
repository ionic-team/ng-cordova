---
layout: content
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

## Examples and Docs

To use any of the plugin wrappers below, all you need to do is link to the `ng-cordova.js` file in your app. Then, include `ngCordova` as a dependency in your angular module:

```javascript
angular.module('myApp', ['ngCordova'])
```

**NOTE:** Include `ng-cordova.js` in your `index.html` file before `cordova.js`:

```html
<script src="lib/ngCordova/dist/ng-cordova.js"></script>
<script src="cordova.js"></script>
```


### Installing Plugins

Barcode Scanner Plugin

```
cordova plugin add https://github.com/wildabeast/BarcodeScanner.git
```

Camera Plugin

```
cordova plugin add org.apache.cordova.camera
```

Contacts Plugin

```
cordova plugin add org.apache.cordova.contacts
```

Device Plugin

```
cordova plugin add org.apache.cordova.device
```

Device Motion Plugin

```
cordova plugin add org.apache.cordova.device-motion
```

Device Orientation Plugin

```
cordova plugin add org.apache.cordova.device-orientation
```

Dialogs Plugin

```
cordova plugin add org.apache.cordova.dialogs
```

File Plugin

```
cordova plugin add org.apache.cordova.file
```

Google Analytics Plugin

```
cordova plugin add https://github.com/phonegap-build/GAPlugin.git
```

Geolocation Plugin

```
cordova plugin add org.apache.cordova.geolocation
```

Globalization Plugin

```
cordova plugin add org.apache.cordova.globalization
```

Ionic Keyboard Plugin

```
cordova plugin add https://github.com/driftyco/ionic-plugins-keyboard.git
```

Network Plugin

```
cordova plugin add org.apache.cordova.network-information
```

Pin Dialog Plugin

```
cordova plugin add https://github.com/Paldom/PinDialog.git
```

Push Notifications Plugin

```
cordova plugin add https://github.com/phonegap-build/PushPlugin.git
```

Social Sharing Plugin

```
cordova plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git
```

Spinner Dialog Plugin

```
cordova plugin add https://github.com/Paldom/SpinnerDialog.git
```

SplashScreen Plugin

```
cordova plugin add org.apache.cordova.splashscreen
```

SQLite Plugin

```
cordova plugin add https://github.com/brodysoft/Cordova-SQLitePlugin.git
```

Statusbar Plugin

```
cordova plugin add org.apache.cordova.statusbar
```

Vibration Plugin

```
cordova plugin add org.apache.cordova.vibration
```

### `$cordovaBarcodeScanner`

The [Barcode Scanner Plugin](https://github.com/wildabeast/BarcodeScanner/) opens a camera view and automagically scans a barcode, returning the data back to you.
[View Official Docs](https://github.com/wildabeast/BarcodeScanner/#using-the-plugin)

```javascript

module.controller('BarcodeScannerCtrl', function($scope, $cordovaBarcodeScanner) {

  $scope.scanBarcode = function() {
    $cordovaBarcodeScanner.scan().then(function(imageData) {
      // Success! Barcode data is here

    }, function(err) {
      // An error occured. Show a message to the user

    });
  };
  
  // NOTE: encoding not functioning yet
  $scope.encodeData = function() {
    $cordovaBarcodeScanner.encode(BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com").then(function(success) {
      // Success! 
    }, function(err) {
      // An error occured. Show a message to the user

    });      
  }
});
```


### `$cordovaCamera`

This service makes it easy to use the [`org.apache.cordova.camera`](https://github.com/apache/cordova-plugin-camera) plugin to take pictures and video
from a device. [View Official Docs](https://github.com/apache/cordova-plugin-camera/blob/master/doc/index.md#orgapachecordovacamera)

```javascript

module.controller('PictureCtrl', function($scope, $cordovaCamera) {

  $scope.takePicture = function() {
    $cordovaCamera.getPicture({

      // See all the possible Camera options from the Camera docs:
      // https://github.com/apache/cordova-plugin-camera/blob/master/doc/index.md#cameraoptions

    }).then(function(imageData) {

      // Success! Image data is here

    }, function(err) {

      // An error occured. Show a message to the user

    });
  }

});
```

[View Camera Options](https://github.com/apache/cordova-plugin-camera/blob/master/doc/index.md#cameraoptions)


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


### `$cordovaDeviceMotion`

Get access to the device's accelerometer.
[View Official Docs](https://github.com/apache/cordova-plugin-device-motion/blob/master/doc/index.md)

```javascript
module.controller('DeviceMotionCtrl', function($scope, $cordovaDeviceMotion) {
  $scope.getAcceleration = function () {
  	$cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
      // Success! 
    }, function(err) {
      // An error occured. Show a message to the user
    });
  };
  
  $scope.watchAcceleration = function () {
  	var options = { frequency: 3000 };  // Update every 3 seconds
  	
  	$cordovaDeviceMotion.watchAcceleration(options).then(
      function() {/* unused */},  
      function(err) {},
      function(acceleration) {
        $cordovaDialogs.alert('Acceleration X: ' + acceleration.x + '\n' +
           'Acceleration Y: ' + acceleration.y + '\n' +
           'Acceleration Z: ' + acceleration.z + '\n' +
           'Timestamp: '      + acceleration.timestamp + '\n');
    });
  };
  
  $scope.clearWatch = function() {
	// returns watch ID to be used in clearWatch

    $cordovaDeviceMotion.clearWatch(watchID).then(function(result) {
      // Success! 
    }, function(err) {
      // An error occured. Show a message to the user

    });
  }
});
```


### `$cordovaDeviceOrientation`

Get access to the device's compass.
[View Official Docs](https://github.com/apache/cordova-plugin-device-orientation/blob/master/doc/index.md)

```javascript
module.controller('DeviceMotionCtrl', function($scope, $cordovaDeviceOrientation) {
  $scope.getHeading = function () {
  	$cordovaDeviceOrientation.getCurrentHeading().then(function(result) {
      // Success! 
    }, function(err) {
      // An error occured. Show a message to the user

    });
  };
  
  $scope.watchHeading = function () {
  	var options = { frequency: 3000 }; // Update every 3 seconds

  	$cordovaDeviceOrientation.watchHeading(options).then(function(result) {
      // returns watch ID to be used in clearWatch
    }, function(err) {
      // An error occured. Show a message to the user

    });
  };
  
  $scope.clearWatch = function() {
  	// use the watch ID from watchHeading() promise
  	
    $cordovaDeviceOrientation.clearWatch(watchID).then(function(result) {
      // Success! 
    }, function(err) {
      // An error occured. Show a message to the user

    });
  }
});
```


### `$cordovaDialogs`

Trigger alert, confirm, and prompt windows, or send beeps (beep, beep!)

```javascript
module.controller('MyCtrl', function($scope, $cordovaDialogs) {
  
  $cordovaDialogs.alert('Wow!');
});
```


### `$cordovaFile`

A Plugin to get access to the device's files and directories.
[View Official Docs](https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md)

```javascript
module.controller('MyCtrl', function($scope, $cordovaFile) {
  
  $cordovaFile.checkDir(directory).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });
  
  
  // parameters: directory, replace (boolean)
  $cordovaFile.createDir(directory, false).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });
  
  
  $cordovaFile.checkFile(directory, file).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });
  
  
  // parameters: directory, file, replace (boolean)
  $cordovaFile.createFile(directory, file, true).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });
  
  
  $cordovaFile.removeFile(directory, file).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });
  
  
  // doesn't function at the moment
  $cordovaFile.writeFile(directory, file).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });
  
  // Reads a file as TEXT
  $cordovaFile.readFile(directory, file).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });
  
  // parameters: source, filePath, trust all hosts (boolean), options
  $cordovaFile.downloadFile(source, filePath, true, options).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });
  
  
  // parameters: source, filePath, options
  $cordovaFile.uploadFile(server, filePath, options).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });
 
});
```


### `$cordovaGeolocation`

Grab the current location of the user, or grab continuous location changes:
[View Official Docs](https://github.com/apache/cordova-plugin-contacts/blob/master/doc/index.md)

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


### `$cordovaNetwork`

Check network connection types, and track offline and online status.
[View Official Docs](https://github.com/apache/cordova-plugin-network-information/blob/master/doc/index.md)

```javascript
module.controller('MyCtrl', function($scope, $cordovaNetwork) {
  var type = $cordovaNetwork.getNetwork();

  var isOnline = $cordovaNetwork.isOnline();

  // See the various network types: https://github.com/apache/cordova-plugin-network-information/blob/master/doc/index.md#connectiontype
});
```


### `$cordovaPush`

Allows your application to receive push notifications
[View Official Docs](https://github.com/phonegap-build/PushPlugin#-plugin-api)

```javascript
module.controller('MyCtrl', function($scope, $cordovaPush) {

  var androidConfig = {
    "senderID":"replace_with_sender_id",
    "ecb":"onNotification"
  };
  
  var iosConfig = {
    "badge":"true",
    "sound":"true",
    "alert":"true",
    "ecb":"onNotificationAPN"
  };

  $cordovaPush.register(config).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });
  
  
  $cordovaPush.unregister(options).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });
  
  // iOS only
  $cordovaPush.setBadgeNumber(2).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });
  
});
```


### `$cordovaSocialSharing`

Social Sharing plugin

```javascript
module.controller('MyCtrl', function($scope, $cordovaSocialSharing) {

  $cordovaSocialSharing.shareViaTwitter(message, image, link).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });
  
  
  $cordovaSocialSharing.shareViaWhatsApp(message, image, link).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });
  
  
  $cordovaSocialSharing.shareViaFacebook(message, image, link).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });
  
  // access multiple numbers in a string like: '0612345678,0687654321'
  $cordovaSocialSharing.shareViaSMS(message, number).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });
  
  // TO, CC, BCC must be an array, Files can be either null, string or array
  $cordovaSocialSharing.shareViaEmail(message, subject, toArr, bccArr, file).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });
  
  
  $cordovaSocialSharing.canShareVia(socialType, message, image, link).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });
});
```



### `$cordovaSplashscreen`

Show or hide the Splash Screen.

```javascript
module.controller('MyCtrl', function($scope, $cordovaSplashscreen) {
  $cordovaSplashscreen.show();
});
```


### `$cordovaStatusbar`

Configure the device's StatusBar with colors and styles.

```javascript
module.controller('MyCtrl', function($scope, $cordovaStatusbar) {
  $cordovaStatusbar.overlaysWebView(true);
  
  // styles: Default : 0, LightContent: 1, BlackTranslucent: 2, BlackOpaque: 3
  $cordovaStatusbar.style(1);
  
  // supported names: black, darkGray, lightGray, white, gray, red, green, 
  // blue, cyan, yellow, magenta, orange, purple, brown
  $cordovaStatusbar.styleColor('black');
  
  $cordovaStatusbar.styleHex('#000');

  $cordovaStatusbar.hide();

  $cordovaStatusbar.show();
  
  var isVisible = $cordovaStatusbar.isVisible();

});
```


### `$cordovaVibration`

Vibrate the device programatically.
[View Official Docs](https://github.com/apache/cordova-plugin-vibration/blob/master/doc/index.md)

```javascript
module.controller('MyCtrl', function($scope, $cordovaVibration) {

  // Vibrate 100ms
  $cordovaVibration.vibrate(100);

});
```

