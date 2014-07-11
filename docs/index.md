---
layout: docs
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

<a name="cordovaBarcodeScanner"></a>
### [`$cordovaBarcodeScanner`](#cordovaBarcodeScanner)

The [Barcode Scanner Plugin](https://github.com/wildabeast/BarcodeScanner/) opens a camera view and automagically scans a barcode, returning the data back to you.
[View Official Docs](https://github.com/wildabeast/BarcodeScanner/#using-the-plugin)


```
cordova plugin add https://github.com/wildabeast/BarcodeScanner.git
```

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

<a name="cordovaCamera"></a>

### [`$cordovaCamera`](#cordovaCamera)

This service makes it easy to use the [`org.apache.cordova.camera`](https://github.com/apache/cordova-plugin-camera) plugin to take pictures and video
from a device. [View Official Docs](https://github.com/apache/cordova-plugin-camera/blob/master/doc/index.md#orgapachecordovacamera)

```
cordova plugin add org.apache.cordova.camera
```

```javascript

module.controller('PictureCtrl', function($scope, $cordovaCamera) {

  $scope.takePicture = function() {
    var options = { 
        quality : 75, 
        destinationType : Camera.DestinationType.DATA_URL, 
        sourceType : Camera.PictureSourceType.CAMERA, 
        allowEdit : true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 100,
        targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
    };
    
    $cordovaCamera.getPicture(options).then(function(imageData) {
      // Success! Image data is here
    }, function(err) {
      // An error occured. Show a message to the user
    });
  }
});
```

[View Camera Options](https://github.com/apache/cordova-plugin-camera/blob/master/doc/index.md#cameraoptions)

<a name="cordovaContacts"></a>

### [`$cordovaContacts`](#cordovaContacts)

A powerful way to create, remove, and search through contacts on the device.

```
cordova plugin add org.apache.cordova.contacts
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaContacts) {
  $scope.addContact = function() {
    $cordovaContacts.save($scope.contactForm).then(function(result) {
      // Contact saved
    }, function(err) {
      // Contact error
    });
  };

  // Many more features will be added shortly
});
```

<a name="cordovaDevice"></a>

### [`$cordovaDevice`](#cordovaDevice)

Grab device related information, such as platform, and device model.

```
cordova plugin add org.apache.cordova.device
```

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

<a name="cordovaDeviceMotion"></a>

### [`$cordovaDeviceMotion`](#cordovaDeviceMotion)

Get access to the device's accelerometer.
[View Official Docs](https://github.com/apache/cordova-plugin-device-motion/blob/master/doc/index.md)

```
cordova plugin add org.apache.cordova.device-motion
```

```javascript
module.controller('DeviceMotionCtrl', function($scope, $cordovaDeviceMotion) {
  var watch;

  $scope.getAcceleration = function () {
    $cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
      // Success! 
    }, function(err) {
      // An error occured. Show a message to the user
    });
  };
  
  $scope.watchAcceleration = function () {
    var options = { frequency: 1000 };  // Update every 1 second
    
    watch = $cordovaDeviceMotion.watchAcceleration(options);

    watch.promise.then(
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
  // use watchID from watchAccelaration()

    if(!watch) { return; }

    $cordovaDeviceMotion.clearWatch(watch.watchId).then(function(result) {
      // Success! 
    }, function(err) {
      // An error occured. Show a message to the user

    });
  }
});
```

<a name="cordovaDeviceOrientation"></a>

### [`$cordovaDeviceOrientation`](#cordovaDeviceOrientation)

Get access to the device's compass.
[View Official Docs](https://github.com/apache/cordova-plugin-device-orientation/blob/master/doc/index.md)

```
cordova plugin add org.apache.cordova.device-orientation
```

```javascript
module.controller('DeviceOrientationCtrl', function($scope, $cordovaDeviceOrientation) {

    $cordovaDeviceOrientation.getCurrentHeading().then(function(result) {
      // Success! 
    }, function(err) {
      // An error occured. Show a message to the user
    });
  
    var options = { frequency: 1000 }; // Update every 1 second
    var watch = $cordovaDeviceOrientation.watchHeading(options);

    watch.promise.then(function(result) { /* unused */ },
      function(err) {
        // An error occured. Show a message to the user
      }, function(position) {
        // Heading comes back in
        // position.magneticHeading
      });
  
    $cordovaDeviceOrientation.clearWatch(watch.watchId).then(function(result) {
      // Success! 
    }, function(err) {
      // An error occured. Show a message to the user
    });
});
```

<a name="cordovaDialogs"></a>

### [`$cordovaDialogs`](#cordovaDialogs)

Trigger alert, confirm, and prompt windows, or send beeps (beep, beep!)

```
cordova plugin add org.apache.cordova.dialogs
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaDialogs) {
  
  $cordovaDialogs.alert('Wow!');
  
  $cordovaDialogs.confirm('Are you sure?');

  $cordovaDialogs.prompt('Please Login');

  // beep 3 times
  $cordovaDialogs.beep(3);

});
```

<a name="cordovaFile"></a>

### [`$cordovaFile`](#cordovaFile)

A Plugin to get access to the device's files and directories.
[View Official Docs](https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md)

```
cordova plugin add org.apache.cordova.file
```

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

<a name="cordovaGeolocation"></a>

### [`$cordovaGeolocation`](#cordovaGeolocation)

Grab the current location of the user, or grab continuous location changes:
[View Official Docs](https://github.com/apache/cordova-plugin-geolocation/blob/master/doc/index.md)


```
cordova plugin add org.apache.cordova.geolocation
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaGeolocation) {
  $cordovaGeolocation.getCurrentPosition().then(function(position) {
      // Position here: position.coords.latitude, position.coords.longitude
    }, function(err) {
      // error
    });

  var watch = $cordovaGeolocation.watchPosition({
    frequency: 1000
  });

  watch.promise.then(function() {
      // Not currently used
    }, function(err) {
      // An error occured. Show a message to the user
    }, function(position) {
      // Active updates of the position here
      // position.coords.latitude/longitude
  });
});
```

<a name="cordovaGlobalization"></a>

### [`$cordovaGlobalization`](#cordovaGlobalization)

Obtains information and performs operations specific to the user's locale and timezone.
[View Official Docs](https://github.com/apache/cordova-plugin-globalization/blob/master/doc/index.md)

```
cordova plugin add org.apache.cordova.globalization
```


```javascript
module.controller('MyCtrl', function($scope, $cordovaGlobalization) {
  $cordovaGlobalization.getPreferredLanguage().then(
    function(result) {
      // result
    }, 
    function(error) {
      // error
  });
    
  $cordovaGlobalization.getLocaleName().then(
    function(result) {
      // result
    }, 
    function(error) {
      // error
  });
  
  $cordovaGlobalization.getFirstDayOfWeek().then(
    function(result) {
      // result
    }, 
    function(error) {
      // error
  });
  
    // Soon implemented:
    // dateToString
    // stringToDate
    // getDatePattern
    // getDateNames
    // isDayLightSavingsTime
    // numberToString
    // stringToNumber
    // getNumberPattern
    // getCurrencyPattern
    
});
```

<a name="cordovaNetwork"></a>

### [`$cordovaNetwork`](#cordovaNetwork)

Check network connection types, and track offline and online status.
[View Official Docs](https://github.com/apache/cordova-plugin-network-information/blob/master/doc/index.md)

```
cordova plugin add org.apache.cordova.network-information
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaNetwork) {
  var type = $cordovaNetwork.getNetwork();
  
  var isOnline = $cordovaNetwork.isOnline();
  
  var isOffline = $cordovaNetwork.isOffline();
});
```
[View Network Types](https://github.com/apache/cordova-plugin-network-information/blob/master/doc/index.md#connectiontype)


<a name="cordovaPinDialog"></a>

### [`$cordovaPinDialog`](#cordovaPinDialog)

Numeric password dialog.

```
cordova plugin add https://github.com/Paldom/PinDialog.git
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaPush) {

  $cordovaPinDialog.prompt('Some message here').then(
    function(result) {
      // result
    },
    function (error) {
      // error
  })
});
```

<a name="cordovaPush"></a>

### [`$cordovaPush`](#cordovaPush)

Allows your application to receive push notifications
[View Official Docs](https://github.com/phonegap-build/PushPlugin#-plugin-api)

```
cordova plugin add https://github.com/phonegap-build/PushPlugin.git
```

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

<a name="cordovaSocialSharing"></a>

### [`$cordovaSocialSharing`](#cordovaSocialSharing)

Social Sharing plugin.

```
cordova plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git
```

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
  $cordovaSocialSharing.shareViaEmail(message, subject, toArr, bccArr, file).then(
    function(result) {
      // Success! 
    }, function(err) {
      // An error occured. Show a message to the user
    });
  
  
  $cordovaSocialSharing.canShareVia(socialType, message, image, link).then(
    function(result) {
      // Success! 
    }, function(err) {
      // An error occured. Show a message to the user
    });
});
```

<a name="cordovaSpinnerDialog"></a>

### [`$cordovaSpinnerDialog`](#cordovaSpinnerDialog)

A dialog with a spinner wheel.
[View Official Docs](https://github.com/Paldom/SpinnerDialog)

```
cordova plugin add https://github.com/Paldom/SpinnerDialog.git
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaSpinnerDialog) {
  
  // Show spinner dialog with message
  // Title and message only works on Android
  $cordovaSpinnerDialog.show("title","message");

  // Hide spinner dialog
  $cordovaSpinnerDialog.hide();
});
```

<a name="cordovaSplashscreen"></a>

### [`$cordovaSplashscreen`](#cordovaSplashscreen)

Show or hide the Splash Screen.

```
cordova plugin add org.apache.cordova.splashscreen
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaSplashscreen) {
  $cordovaSplashscreen.show();
});
```

<a name="cordovaStatusbar"></a>

### [`$cordovaStatusbar`](#cordovaStatusbar)

Configure the device's StatusBar with colors and styles.

```
cordova plugin add org.apache.cordova.statusbar
```

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

<a name="cordovaToast"></a>

### [`$cordovaToast`](#cordovaToast)

This plugin allows you to show a native Toast (a little text popup) on iOS, Android and WP8. It's great for showing a non intrusive native notification which is guaranteed always in the viewport of the browser.
[View Official Docs](https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin)

```
cordova plugin add https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin.git
```

You have two choices to make when showing a Toast: where to show it and for how long.

- show(message, duration, position)
  - duration: 'short', 'long'
  - position: 'top', 'center', 'bottom'

You can also use any of these convenience methods:

- showShortTop(message)
- showShortCenter(message)
- showShortBottom(message)
- showLongTop(message)
- showLongCenter(message)
- showLongBottom(message)

```javascript
module.controller('MyCtrl', function($scope, $cordovaVibration) {

  $cordovaToast.show('Here is a message', 'long', 'center').then(function(success) {
    // success
  }, function (error) {
    // error
  });

  $cordovaToast.showShortTop('Here is a message').then(function(success) {
    // success
  }, function (error) {
    // error
  });

  $cordovaToast.showLongBotton('Here is a message').then(function(success) {
    // success
  }, function (error) {
    // error
  });

});
```

<a name="cordovaVibration"></a>
### [`$cordovaVibration`](#cordovaVibration)

Vibrate the device programatically.
[View Official Docs](https://github.com/apache/cordova-plugin-vibration/blob/master/doc/index.md)

```
cordova plugin add org.apache.cordova.vibration
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaVibration) {

  // Vibrate 100ms
  $cordovaVibration.vibrate(100);

});
```

<a name="cordovaCapture"></a>
### [`$cordovaCapture`](#cordovaCapture)

This plugin allows you to record sound, video and images throught the native capabilities of the device
[View Official Docs](https://github.com/apache/cordova-plugin-media-capture/blob/master/doc/index.md)

```
cordova plugin add org.apache.cordova.media-capture
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaCapture) {

  $scope.captureAudio = function() {
    var options = { limit: 3, duration: 10 };
    
    $cordovaCapture.captureAudio(options).then(function(audioData) {
      // Success! Audio data is here
    }, function(err) {
      // An error occured. Show a message to the user
    });
  }

  $scope.captureImage = function() {
    var options = { limit: 3 };
    
    $cordovaCapture.captureImage(options).then(function(imageData) {
      // Success! Image data is here
    }, function(err) {
      // An error occured. Show a message to the user
    });
  }

  $scope.captureVideo = function() {
    var options = { limit: 3, duration: 15 };
    
    $cordovaCapture.captureVideo(options).then(function(videoData) {
      // Success! Video data is here
    }, function(err) {
      // An error occured. Show a message to the user
    });
  }

});
```
