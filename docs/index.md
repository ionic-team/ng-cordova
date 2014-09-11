---
layout: docs
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

## Overview & Installing

To use any of the plugin wrappers below, all you need to do is link to the `ng-cordova.js` file in your app. 

You can use bower to install ngCordova like so ***or*** [download the zip file here](https://github.com/driftyco/ng-cordova/archive/master.zip).


``` bash
$ bower install ngCordova
```

Include `ng-cordova.js` ***or*** `ng-cordova.min.js` in your `index.html` file **before** `cordova.js`

```html
<script src="lib/ngCordova/dist/ng-cordova.js"></script>
<script src="cordova.js"></script>
```

Then, include `ngCordova` as a dependency in your angular module:

```javascript
angular.module('myApp', ['ngCordova'])
```

Once ngCordova is setup, install a cordova plugin (`cordova plugin add [...]`) and use the ngCordova API like below.



## Plugins

<a class="anchor" name="AdMob"></a>
### [`$cordovaAdMob`](#AdMob)

The [AdMob](https://github.com/floatinghotpot/cordova-admob-pro) plugin presents AdMob Ads in Mobile App/Games natively from JavaScript.
[View Official Docs](https://github.com/floatinghotpot/cordova-admob-pro#quick-start-example-code)


```
cordova plugin add com.google.cordova.admob
```


```javascript

module.controller('AdMobCtrl', function($scope, $cordovaAdMob) {
		// AdMob implementation here
		// coming soon...
});
```

<a class="anchor" name="AppAvailability"></a>
### [`$cordovaAppAvailability`](#AppAvailability)

The [AppAvailability](https://github.com/ohh2ahh/AppAvailability) plugin allows you to check if an app is installed on the user's device. It requires an URI Scheme (e.g. twitter://) on iOS or a Package Name (e.g com.twitter.android) on Android.

**[View Official Docs](https://github.com/ohh2ahh/AppAvailability)**

<table class="table">
    <thead>
        <tr>
            <th>iOS Schemes</th>
            <th>Android Schemes</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>twitter://</td>
            <td>com.twitter.android</td>
        </tr>
        <tr>
            <td>fb://</td>
            <td>com.facebook.katana</td>
        </tr>
       
        <tr>
            <td>whatsapp://</td>
            <td>com.whatsapp</td>
        </tr>
    </tbody>
</table>



```
cordova plugin add https://github.com/ohh2ahh/AppAvailability.git
```


```javascript

module.controller('AppAvailCtrl', function($scope, $cordovaAppAvailability) {

  $cordovaAppAvailability
    .check('twitter://')
    .then(function(success) {
      // success
    },
    function (error) {
      // error
    });
});
```

<a class="anchor" name="BackgroundGeolocation"></a>
### [`$cordovaBackgroundGeolocation`](#BackgroundGeolocation)

Cross-platform background geolocation for Cordova / PhoneGap with battery-saving "circular region monitoring" and "stop detection".

**[View Official Docs](https://github.com/christocracy/cordova-plugin-background-geolocation)**

```
cordova plugin add https://github.com/christocracy/cordova-plugin-background-geolocation.git
```

```javascript

module.controller('MyCtrl', function($scope, $cordovaBackgroundGeolocation) {

  var options = {
    // https://github.com/christocracy/cordova-plugin-background-geolocation#config
  };

  // `configure` calls `start` internally
  $cordovaBackgroundGeolocation.configure(options).then(function (location) {
    console.log(location);
  }, function (err) {
    console.error(err);
  });

  $scope.stopBackgroundGeolocation = function () {
    $cordovaBackgroundGeolocation.stop();
  };
});
```

<a class="anchor" name="BatteryStatus"></a>
### [`$cordovaBatteryStatus`](#BatteryStatus)

The [BatteryStatus](https://github.com/apache/cordova-plugin-battery-status) plugin provides an API for the current battery status.

[View Official Docs](https://github.com/apache/cordova-plugin-battery-status/blob/master/doc/index.md)


```
cordova plugin add org.apache.cordova.battery-status
```


```javascript

module.controller('BatteryCtrl', function($scope, $cordovaBatteryStatus) {
  
  $cordovaBatteryStatus.onBatteryStatus(function(result) {
    var batteryLevel = result.level;       // (0 - 100)
    var isPluggedIn  = result.isPlugged;   // bool
  });
  
  $cordovaBatteryStatus.onBatteryCritical(function(result) {
    var batteryLevel = result.level;       // (0 - 100)
    var isPluggedIn  = result.isPlugged;   // bool
  });
    
  $cordovaBatteryStatus.onBatteryLow(function(result) {
    var batteryLevel = result.level;       // (0 - 100)
    var isPluggedIn  = result.isPlugged;   // bool
  });
});

```

<a class="anchor" name="BarcodeScanner"></a>
### [`$cordovaBarcodeScanner`](#BarcodeScanner)

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

<a class="anchor" name="Camera"></a>

### [`$cordovaCamera`](#Camera)

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


<a class="anchor" name="Capture"></a>
### [`$cordovaCapture`](#Capture)

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



<a class="anchor" name="Clipboard"></a>
### [`$cordovaClipboard`](#Clipboard)

The [Clipboard](https://github.com/VersoSolutions/CordovaClipboard) plugin provides an API for the current battery status.

[View Official Docs](https://github.com/VersoSolutions/CordovaClipboard)


```
cordova plugin add https://github.com/VersoSolutions/CordovaClipboard
```


```javascript

module.controller('ClipboardCtrl', function($scope, $cordovaClipboard) {
  
  $cordovaClipboard
    .copy('text to copy')
    .then(function () {
      // success
    }, function () {
      // error
    });
    
  $cordovaClipboard
    .paste()
    .then(function (result) {
      // success, use result
    }, function () {
      // error
    });
    
});

```


<a class="anchor" name="Contacts"></a>
### [`$cordovaContacts`](#Contacts)

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

<a class="anchor" name="DatePicker"></a>

### [`$cordovaDatePicker`](#DatePicker)

Show a native date or time picker widget.

```
cordova plugin add https://github.com/VitaliiBlagodir/cordova-plugin-datepicker.git
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaDatePicker) {
  $cordovaDatePicker.show(
    {date: new Date(), mode: 'date'},
    function(date){
      alert(date);
    };
  );
});
```

<a class="anchor" name="Device"></a>

### [`$cordovaDevice`](#Device)

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

<a class="anchor" name="DeviceMotion"></a>

### [`$cordovaDeviceMotion`](#DeviceMotion)

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
    // Update every 3 seconds for 1 minute
    var options = { 
      maximumAge: 3000, 
      timeout: 60 * 1000, 
      enableHighAccuracy: true
    };

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

<a class="anchor" name="DeviceOrientation"></a>

### [`$cordovaDeviceOrientation`](#DeviceOrientation)

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

<a class="anchor" name="Dialogs"></a>

### [`$cordovaDialogs`](#Dialogs)

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

<a class="anchor" name="File"></a>

### [`$cordovaFile`](#File)

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
  
  
  $cordovaFile.checkFile(filePath).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });
  
  
  // parameters: filePath, replace (boolean)
  $cordovaFile.createFile(filePath, true).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });
  
  
  $cordovaFile.removeFile(filePath).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });
  
  
  $cordovaFile.writeFile(filePath).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });
  
  // Reads a file as TEXT
  $cordovaFile.readFile(filePath).then(function(result) {
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


<a class="anchor" name="Flashlight"></a>

### [`$cordovaFlashlight`](#Flashlight)

Flashlight [View Official Docs](https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin)

```
cordova plugin add https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin.git
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaFlashlight) {
  
  var isAvailable = $cordovaFlashlight.available()
  
  $cordovaFlashlight.switchOn()
    .then(
      function (success) { /* success */ },
      function (error) { /* error */ });

  $cordovaFlashlight.switchOff()
    .then(
      function (success) { /* success */ },
      function (error) { /* error */ });
});
```


<a class="anchor" name="Geolocation"></a>

### [`$cordovaGeolocation`](#Geolocation)

Grab the current location of the user, or grab continuous location changes:
[View Official Docs](https://github.com/apache/cordova-plugin-geolocation/blob/master/doc/index.md)


```
cordova plugin add org.apache.cordova.geolocation
```

```javascript
module.controller('GeoCtrl', function($scope, $cordovaGeolocation) {
  
  $cordovaGeolocation
    .getCurrentPosition()
    .then(function (position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
    }, function(err) {
      // error
    });

  // begin watching
  var watch = $cordovaGeolocation.watchPosition({ frequency: 1000 });
  watch.promise.then(function() { /* Not  used */ }, 
    function(err) {
      // An error occurred.
    }, 
    function(position) {
      // Active updates of the position here
      // position.coords.[ latitude / longitude]
  });
  
  // clear watch
  $cordovaGeolocation.clearWatch(watch.watchID)
  
});
```

<a class="anchor" name="Globalization"></a>

### [`$cordovaGlobalization`](#Globalization)

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



<a class="anchor" name="Keyboard"></a>
### `$cordovaKeyboard`

Accessing the Keyboard of iOS from cordova [View Official Docs](https://github.com/driftyco/ionic-plugins-keyboard)

```
cordova plugin add https://github.com/driftyco/ionic-plugins-keyboard.git
```


```javascript
module.controller('MyCtrl', function($scope, $cordovaKeyboard) {

  $cordovaKeyboard.hideAccessoryBar(true)

  $cordovaKeyboard.disableScroll(true)
  
  $cordovaKeyboard.close()
  
  var isVisible = $cordovaKeyboard.isVisible()

});
```



<a class="anchor" name="Keychain"></a>
### `$cordovaKeychain`

Accessing the keychain of iOS from cordova [View Docs](https://github.com/shazron/KeychainPlugin)

```
cordova plugin add https://github.com/shazron/KeychainPlugin.git
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaKeychain) {

  $scope.getValueFromKey = function(key) {
    $cordovaKeychain.getForKey(key, servicename).then(function(value) {
      console.log(value);
    }, function (err) {
      console.error(err);
    });
  };

});
```


<a class="anchor" name="NativeAudio"></a>
### [`$cordovaNativeAudio`](#NativeAudio)

Cordova / PhoneGap 3.5+ extension for Native Audio playback, aimed at HTML5 gaming and audio applications which require minimum latency, polyphony and concurrency.
[View Docs](https://github.com/SidneyS/cordova-plugin-nativeaudio)

```
cordova plugin add https://github.com/SidneyS/cordova-plugin-nativeaudio.git
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaNativeAudio, $timeout) {

  $scope.preloadSimple = function () {
    $cordovaNativeAudio.preloadSimple('click', 'audio/click.mp3').then(function (msg) {
      console.log(msg);
    }, function (error) {
      console.error(error);
    });
  };

  $scope.preloadComplex = function () {
    $cordovaNativeAudio.preloadComplex('music', 'audio/music.mp3', 1, 1).then(function (msg) {
      console.log(msg);
    }, function (error) {
      console.error(error);
    });
  };

  $scope.play = function () {
    $cordovaNativeAudio.play('click');
    $cordovaNativeAudio.loop('music');

    // stop 'music' loop and unload
    $timeout(function () {
      $cordovaNativeAudio.stop('music');

      $cordovaNativeAudio.unload('click');
      $cordovaNativeAudio.unload('music');
    }, 1000 * 60);
  };

});
```


<a class="anchor" name="Media"></a>
### [`$cordovaMedia`](#Media)

Media plugin
[View Official Docs](https://github.com/apache/cordova-plugin-media/blob/master/doc/index.md)

```
cordova plugin add org.apache.cordova.media
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaNetwork) {
  	var src = "/src/audio.mp3";
  
  	var mediaSource = $cordovaMedia.newMedia(src)
  	var promise = mediaSource.promise
  	var mediaStatus = mediaSource.mediaStatus
  	var media = mediaSource.media
  
  	$cordovaMedia.play(media)
  	
  	$cordovaMedia.pause(media)
  	
  	$cordovaMedia.stop(media)
  	
  	$cordovaMedia.release(media)
  	
  	$cordovaMedia.getDuration(media)
  	
  	$cordovaMedia.seekTo(media, 5000000) // milliseconds
  	
  	$cordovaMedia.setVolume(media, 80)
  	
  	$cordovaMedia.startRecord(media)
  	
  	$cordovaMedia.stopRecord(media)
  
  	$cordovaMedia.getCurrentPosition(media).then(...)
});
```





<a class="anchor" name="Network"></a>
### [`$cordovaNetwork`](#Network)

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


<a class="anchor" name="LocalNotification"></a>
### [`$cordovaLocalNotification`](#LocalNotification)

The essential purpose of local notifications is to enable an application to inform its users that it has something for them — for example, a message or an upcoming appointment — when the application isn’t running in the foreground.
They are scheduled by an application and delivered on the same device.
[View Official Docs](https://github.com/katzer/cordova-plugin-local-notifications)

```
cordova plugin add de.appplant.cordova.plugin.local-notification
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaLocalNotification) {

  $scope.addNotification = function () {
    $cordovaLocalNotification.add({
      id: 'some_notification_id'
      // parameter documentation:
      // https://github.com/katzer/cordova-plugin-local-notifications#further-informations-1
    }).then(function () {
      console.log('callback for adding background notification');
    });
  };

  $scope.cancelNotification = function () {
    $cordovaLocalNotification.cancel('some_notification_id').then(function () {
      console.log('callback for cancellation background notification');
    });
  };

  $scope.cancelAllNotification = function () {
    $cordovaLocalNotification.cancelAll().then(function () {
      console.log('callback for canceling all background notifications');
    });
  };

  $scope.checkIfIsScheduled = function () {
    $cordovaLocalNotification.isScheduled('some_notification_id').then(function (isScheduled) {
      console.log(isScheduled);
    });
  };

  $scope.getNotificationIds = function () {
    $cordovaLocalNotification.getScheduledIds().then(function (scheduledIds) {
      console.log(scheduledIds);
    });
  };

  $scope.checkIfIsTriggered = function () {
    $cordovaLocalNotification.isTriggered('some_notification_id').then(function (isTriggered) {
      console.log(isTriggered);
    });
  };

  $scope.getTriggeredIds = function () {
    $cordovaLocalNotification.getTriggeredIds().then(function (triggeredIds) {
      console.log(triggeredIds);
    });
  };

  $scope.notificationDefaults = $cordovaLocalNotification.getDefaults();

  $scope.setDefaultOptions = function () {
    $cordovaLocalNotification.setDefaults({ autoCancel: true });
  };

  // event callbacks events `onadd`, `ontrigger`, `onclick` and `oncancel`
  // can be assigned like this:
  $cordovaLocalNotification.onadd = function (id, state, json) {};

});
```


<a class="anchor" name="PinDialog"></a>
### [`$cordovaPinDialog`](#PinDialog)

Numeric password dialog.

```
cordova plugin add https://github.com/Paldom/PinDialog.git
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaPinDialog) {

  $cordovaPinDialog.prompt('Some message here').then(
    function(result) {
      // result
    },
    function (error) {
      // error
  })
});
```


<a class="anchor" name="Printer"></a>
### [`$cordovaPrinter`](#Printer)

Printer plugin
[View Official Docs](https://github.com/katzer/cordova-plugin-printer)

```
cordova plugin add https://github.com/katzer/cordova-plugin-printer.git
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaPrinter) {

  var printerAvail = $cordovaPrinter.isAvailable()
  
  var doc = "<html> ... </html>";
  $cordovaPrinter.print(doc)
});
```




<a class="anchor" name="ProgressIndicator"></a>
### [`$cordovaProgress`](#ProgressIndicator)

Various Progress Dialogs for indicating loading or downloading.
[View Official Docs](http://pbernasconi.github.io/cordova-progressIndicator/)


<table class="table table-docs text-center" style="width: auto">
    <thead >
        <tr>
            <th class="table-border-right"></th>
            <th>Simple </th>
            <th>Determin</th>
            <th>Annular</th>
            <th>Bar</th>
            <th>Success</th>
            <th>Text</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="table-border-right">Example</td>
            <td><img class="img-responsive" src="/img/progressIndicator/simple.jpg"></td>
            <td><img class="img-responsive" src="/img/progressIndicator/determinate-simple.jpg"></td>
            <td><img class="img-responsive" src="/img/progressIndicator/annular-simple.jpg"></td>
            <td><img class="img-responsive" src="/img/progressIndicator/bar-simple.jpg"></td>
            <td><img class="img-responsive" src="/img/progressIndicator/success.jpg"></td>
            <td><img class="img-responsive" src="/img/progressIndicator/text-top.jpg"></td>
        </tr>
        <tr>
												<td class="table-border-right">Requires hide</td>
												<td>true</td>
												<td>false</td>
												<td>false</td>
												<td>false</td>
												<td>true</td>
												<td>true</td>
        </tr>

    </tbody>
</table>

```
cordova plugin add org.pbernasconi.progressindicator
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaProgress) {

$cordovaProgress.showSimple(true)  // requires .hide()

$cordovaProgress.showSimpleWithLabel(true, "Loading") // .hide()
  
$cordovaProgress.showSimpleWithLabelDetail(true, "Loading", "detail")
    // requires .hide()
    
$cordovaProgress.hide()


$cordovaProgress.showDeterminate(false, 100000)

$cordovaProgress.showDeterminateWithLabel(true, 50000, "Loading")

$cordovaProgress.showAnnular(true, 50000)

$cordovaProgress.showAnnularWithLabel(false, 100000, "Loading")

$cordovaProgress.showBar(true, 50000)

$cordovaProgress.showBarWithLabel(false, 100000, "Loading")


$cordovaProgress.showSuccess(true) // requires .hide()

$cordovaProgress.showText(false, 100000, "Loading")

});
```




<a class="anchor" name="Push"></a>

### [`$cordovaPush`](#Push)

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

<a class="anchor" name="SocialSharing"></a>

### [`$cordovaSocialSharing`](#SocialSharing)

Share images, text, messages via Facebook, Twitter, Email, SMS, WhatsApp, etc using this plugin.

<table class="table table-docs text-center">
    <thead >
        <tr>
            <th class="table-border-right"></th>
            <th>FB iOS</th>
            <th>FB Android</th>
            <th>Twitter</th>
            <th>Whatsapp</th>
            <th>Email</th>
            <th>SMS</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="table-border-right">Message</td>
            <td class="table-green"></td>
            <td class="table-red"></td>
            <td class="table-green"></td>
            <td class="table-green"></td>
            <td class="table-green"></td>
            <td class="table-green"></td>
        </tr>
        <tr>
            <td  class="table-border-right">Image</td>
            <td class="table-green"></td>
            <td class="table-green">either</td>
            <td class="table-green"></td>
            <td class="table-green"></td>
            <td class="table-green"></td>
            <td class="table-green"></td>
        </tr>
        <tr>
            <td  class="table-border-right">Link</td>
            <td class="table-green"></td>
            <td class="table-green">or</td>
            <td class="table-green"></td>
            <td class="table-green"></td>
            <td class="table-green"></td>
            <td class="table-green"></td>
        </tr>
    </tbody>
</table>


```
cordova plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaSocialSharing) {

  $cordovaSocialSharing
    .shareViaTwitter(message, image, link)
    .then(function(result) {
      // Success! 
    }, function(err) {
      // An error occured. Show a message to the user
    });
  
  $cordovaSocialSharing
    .shareViaWhatsApp(message, image, link)
    .then(function(result) {
      // Success! 
    }, function(err) {
      // An error occured. Show a message to the user
    });
  
  
  $cordovaSocialSharing
    .shareViaFacebook(message, image, link)
    .then(function(result) {
      // Success! 
    }, function(err) {
      // An error occured. Show a message to the user
    });
  
  // access multiple numbers in a string like: '0612345678,0687654321'
  $cordovaSocialSharing
    .shareViaSMS(message, number)
    .then(function(result) {
      // Success! 
    }, function(err) {
      // An error occured. Show a message to the user
    });
  
  // TO, CC, BCC must be an array, Files can be either null, string or array
  $cordovaSocialSharing
    .shareViaEmail(message, subject, toArr, bccArr, file)
    .then(function(result) {
      // Success! 
    }, function(err) {
      // An error occured. Show a message to the user
    });
  
  
  $cordovaSocialSharing
    .canShareVia(socialType, message, image, link)
    .then(function(result) {
      // Success! 
    }, function(err) {
      // An error occured. Show a message to the user
    });
});
```


<a class="anchor" name="SpinnerDialog"></a>
### [`$cordovaSpinnerDialog`](#SpinnerDialog)

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



<a class="anchor" name="Splashscreen"></a>
### [`$cordovaSplashscreen`](#Splashscreen)

Show or hide the Splash Screen.

```
cordova plugin add org.apache.cordova.splashscreen
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaSplashscreen) {
  $cordovaSplashscreen.show();
});
```



<a class="anchor" name="SQLite"></a>
### `$cordovaSQLite`

Native interface to sqlite in a Cordova/PhoneGap plugin for Android/iOS/WP(8), with HTML5 Web SQL API [View Docs](https://github.com/brodysoft/Cordova-SQLitePlugin/blob/master/README.md)

```
cordova plugin add https://github.com/brodysoft/Cordova-SQLitePlugin.git
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaSQLite) {

  var db = $cordovaSQLite.openDB("my.db");

  // for opening a background db -  true: 1, false: 0
  var db = $cordovaSQLite.openDB("my.db", 1});

  var query = "INSERT INTO test_table (data, data_num) VALUES (?,?)";
  $cordovaSQLite.execute(db, query, ["test", 100]).then(function(tx, res) {
    console.log("insertId: " + res.insertId);
  }, function (err) {
    console.error(err);
  });
  
  $cordovaSQLite.deleteDB("my.db")
    .then(function () {
      // success
    }, function () {
      // error
    }
});
```


<a class="anchor" name="Statusbar"></a>
### [`$cordovaStatusbar`](#Statusbar)

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

<a class="anchor" name="Toast"></a>

### [`$cordovaToast`](#Toast)

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
module.controller('MyCtrl', function($scope, $cordovaToast) {

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

<a class="anchor" name="Vibration"></a>
### [`$cordovaVibration`](#Vibration)

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

<a class="anchor" name="Zip"></a>
### [`$cordovaZip`](#Zip)

Vibrate the device programatically.
[View Docs](https://github.com/MobileChromeApps/zip)

```
cordova plugin add https://github.com/MobileChromeApps/zip.git
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaZip) {

  $cordovaZip
    .unzip(
      src, // https://github.com/MobileChromeApps/zip/blob/master/tests/tests.js#L32
      dest // https://github.com/MobileChromeApps/zip/blob/master/tests/tests.js#L45
    ).then(function () {
      console.log('success');
    }, function () {
      console.log('error');
    }, function (progressEvent) {
      // https://github.com/MobileChromeApps/zip#usage
      console.log(progressEvent);
    });
});
```
