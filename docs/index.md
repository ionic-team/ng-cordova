---
layout: docs
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

## Overview

[ngCordova](http://ngCordova.com) was built to help make app development faster and more efficient than ever before.
It gives you simple [AngularJS](https://angularjs.org/) wrappers for the most popular [Cordova](cordova.apache.org) and [PhoneGap](http://phonegap.com/) plugins available,
where you can take a picture, scan a barcode, upload a file, turn on your flashlight, get your current location, and much more with just a few lines of code.

## Install

You can use `bower` to install ngCordova like so *or* **[download the zip file here](https://github.com/driftyco/ng-cordova/archive/master.zip)**, and locate the `.js` file in the dist folder


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

Before each plugin you must check if your device has fully loaded, and if the plugins are available using a native cordova event called `deviceready`. Implement it like so:

```javascript
document.addEventListener("deviceready", function () {
  $cordovaPlugin.someFunction().then(success, error);
}, false);

// OR with Ionic

$ionicPlatform.ready(function() {
  $cordovaPlugin.someFunction().then(success, error);
});
```

Now you can add plugins to your cordova project, and use the ngCordova API detailed below:

```bash
cordova plugin add ...
```



## Plugins

<a class="anchor" id="AdMob"></a>

<div class="anchor-row">
  <h3><a href="#AdMob"><code>$cordovaAdMob</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/adMob.js">Source</a>
    <a class="btn-anchor" href="https://github.com/floatinghotpot/cordova-admob-pro#quick-start-example-code">Official Docs</a>
</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
  </div>  
</div>


The [AdMob](https://github.com/floatinghotpot/cordova-admob-pro) plugin presents AdMob Ads in Mobile App/Games natively from JavaScript.


```bash
cordova plugin add com.google.cordova.admob
```


```javascript

module.controller('AdMobCtrl', function($scope, $cordovaAdMob) {
    // AdMob implementation here
    // coming soon...
});
```

<a class="anchor" id="AppAvailability"></a>

<div class="anchor-row">
  <h3><a href="#AppAvailability"><code>$cordovaAppAvailability</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/appAvailability.js">Source</a>
    <a class="btn-anchor" href="https://github.com/ohh2ahh/AppAvailability">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
  </div>  
</div>

The [AppAvailability](https://github.com/ohh2ahh/AppAvailability) plugin allows you to check if an app is installed on the user's device. It requires an URI Scheme (e.g. twitter://) on iOS or a Package Name (e.g com.twitter.android) on Android.

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


```bash
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

<a class="anchor" id="BackgroundGeolocation"></a>

<div class="anchor-row">
  <h3><a href="#BackgroundGeolocation"><code>$cordovaBackgroundGeolocation</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/backgroundGeolocation.js">Source</a>
    <a class="btn-anchor" href="https://github.com/christocracy/cordova-plugin-background-geolocation">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
  </div>  
</div>

Cross-platform background geolocation for Cordova / PhoneGap with battery-saving "circular region monitoring" and "stop detection".

```bash
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

<a class="anchor" id="BatteryStatus"></a>

<div class="anchor-row">
  <h3><a href="#BatteryStatus"><code>$cordovaBatteryStatus</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/batteryStatus.js">Source</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-battery-status/blob/master/doc/index.md">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

The [BatteryStatus](https://github.com/apache/cordova-plugin-battery-status) plugin provides an API for the current battery status.

```bash
cordova plugin add org.apache.cordova.battery-status
```


```javascript

module.controller('MyCtrl', function($scope, $cordovaBatteryStatus) {

  $cordovaBatteryStatus.$on('batterystatus', function (result) {
    var batteryLevel = result.level;       // (0 - 100)
    var isPluggedIn  = result.isPlugged;   // bool
  });

  $cordovaBatteryStatus.$on('batterycritical', function (result) {
    var batteryLevel = result.level;       // (0 - 100)
    var isPluggedIn  = result.isPlugged;   // bool
  });

  $cordovaBatteryStatus.$on('batterylow', function (result) {
    var batteryLevel = result.level;       // (0 - 100)
    var isPluggedIn  = result.isPlugged;   // bool
  });

});

```

<a class="anchor" id="BarcodeScanner"></a>

<div class="anchor-row">
  <h3><a href="#BarcodeScanner"><code>$cordovaBarcodeScanner</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/barcodeScanner.js">Source</a>
    <a class="btn-anchor" href="https://github.com/wildabeast/BarcodeScanner/#using-the-plugin">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

The [Barcode Scanner Plugin](https://github.com/wildabeast/BarcodeScanner/) opens a camera view and automagically scans a barcode, returning the data back to you.


```bash
cordova plugin add https://github.com/wildabeast/BarcodeScanner.git
```

```javascript

module.controller('BarcodeCtrl', function($scope, $cordovaBarcodeScanner) {

  $cordovaBarcodeScanner
    .scan()
    .then(function(imageData) {
      // Success! Barcode data is here
    }, function(error) {
      // An error occurred
    });


  // NOTE: encoding not functioning yet
  $cordovaBarcodeScanner
    .encode(BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com")
    .then(function(success) {
      // Success!
    }, function(error) {
      // An error occurred
    });

});
```

<a class="anchor" id="Calendar"></a>

<div class="anchor-row">
  <h3><a href="#Calendar"><code>$cordovaCalendar</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/calendar.js">Source</a>
    <a class="btn-anchor" href="https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin/blob/master/README.md">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
  </div>  
</div>

The [Calendar Plugin](https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin) allows you to manage events in the devices native calendar.

```bash
cordova plugin add https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin.git
```

```javascript
module.controller('CalendarCtrl', function ($scope, $cordovaCalendar) {

  $cordovaCalendar.createCalendar({
    calendarName: 'Cordova Calendar',
    calendarColor: '#FF0000'
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.deleteCalendar('Cordova Calendar').then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.createEvent({
    title: 'Space Race',
    location: 'The Moon',
    notes: 'Bring sandwiches',
    startDate: new Date(2015, 0, 6, 18, 30, 0, 0, 0),
    endDate: new Date(2015, 1, 6, 12, 0, 0, 0, 0)
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.createEventWithOptions({
    title: 'Space Race',
    location: 'The Moon',
    notes: 'Bring sandwiches',
    startDate: new Date(2015, 0, 6, 18, 30, 0, 0, 0),
    endDate: new Date(2015, 1, 6, 12, 0, 0, 0, 0)
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.createEventInteractively({
    title: 'Space Race',
    location: 'The Moon',
    notes: 'Bring sandwiches',
    startDate: new Date(2015, 0, 6, 18, 30, 0, 0, 0),
    endDate: new Date(2015, 1, 6, 12, 0, 0, 0, 0)
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.createEventInNamedCalendar({
    title: 'Space Race',
    location: 'The Moon',
    notes: 'Bring sandwiches',
    startDate: new Date(2015, 0, 6, 18, 30, 0, 0, 0),
    endDate: new Date(2015, 1, 6, 12, 0, 0, 0, 0),
    calendarName: 'Cordova Calendar'
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.findEvent({
    title: 'Space Race',
    location: 'The Moon',
    notes: 'Bring sandwiches',
    startDate: new Date(2015, 0, 6, 18, 30, 0, 0, 0),
    endDate: new Date(2015, 1, 6, 12, 0, 0, 0, 0)
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.listEventsInRange(
    new Date(2015, 0, 6, 0, 0, 0, 0, 0),
    new Date(2015, 1, 6, 0, 0, 0, 0, 0)
  ).then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.listCalendars().then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.findAllEventsInNamedCalendar('Cordova Calendar').then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.modifyEvent({
    title: 'Space Race',
    location: 'The Moon',
    notes: 'Bring sandwiches',
    startDate: new Date(2015, 0, 6, 18, 30, 0, 0, 0),
    endDate: new Date(2015, 1, 6, 12, 0, 0, 0, 0)
    newTitle: 'Ostrich Race',
    newLocation: 'Africa',
    newNotes: 'Bring a saddle',
    newStartDate: new Date(2015, 2, 12, 19, 0, 0, 0, 0),
    newEndDate: new Date(2015, 2, 12, 22, 30, 0, 0, 0)
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.deleteEvent({
    newTitle: 'Ostrich Race',
    location: 'Africa',
    notes: 'Bring a saddle',
    startDate: new Date(2015, 2, 12, 19, 0, 0, 0, 0),
    endDate: new Date(2015, 2, 12, 22, 30, 0, 0, 0)
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });

});
```

<a class="anchor" id="Camera"></a>

<div class="anchor-row">
  <h3><a href="#Camera"><code>$cordovaCamera</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/camera.js">Source</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-camera/blob/master/doc/index.md#orgapachecordovacamera">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

This service makes it easy to use the [`org.apache.cordova.camera`](https://github.com/apache/cordova-plugin-camera) plugin to take pictures and video
from a device.

```bash
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


<a class="anchor" id="Capture"></a>

<div class="anchor-row">
  <h3><a href="#Capture"><code>$cordovaCapture</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/capture.js">Source</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-media-capture/blob/master/doc/index.md">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

This plugin allows you to record sound, video and images throught the native capabilities of the device

```bash
$ cordova plugin add org.apache.cordova.media-capture
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



<a class="anchor" id="Clipboard"></a>

<div class="anchor-row">
  <h3><a href="#Clipboard"><code>$cordovaClipboard</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/clipboard.js">Source</a>
    <a class="btn-anchor" href="https://github.com/VersoSolutions/CordovaClipboard">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

The [Clipboard](https://github.com/VersoSolutions/CordovaClipboard) plugin provides Clipboard management for Cordova/PhoneGap that supports iOS, Android, and Windows Phone 8.


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


<a class="anchor" id="Contacts"></a>

<div class="anchor-row">
  <h3><a href="#Contacts"><code>$cordovaContacts</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/contacts.js">Source</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-contacts/blob/master/doc/index.md">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

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

<a class="anchor" id="DatePicker"></a>

<div class="anchor-row">
  <h3><a href="#DatePicker"><code>$cordovaDatePicker</code></a></h3>
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

<a class="anchor" id="Device"></a>

<div class="anchor-row">
  <h3><a href="#Device"><code>$cordovaDevice</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/device.js">Source</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-device/blob/master/doc/index.md">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

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

<a class="anchor" id="DeviceMotion"></a>

<div class="anchor-row">
  <h3><a href="#DeviceMotion"><code>$cordovaDeviceMotion</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/deviceMotion.js">Source</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-device-motion/blob/master/doc/index.md">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

Get access to the device's accelerometer.

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
        var X = acceleration.x;
        var Y = acceleration.y;
        var Z = acceleration.z;
        var timeStamp = acceleration.timestamp;
    });
  };

  // use watchID from watchAcceleration()
    $cordovaDeviceMotion.clearWatch(watch.watchId)
      .then(function(result) {
        // Success!
      }, function(err) {
        // An error occured. Show a message to the user
    });
});
```

<a class="anchor" id="DeviceOrientation"></a>

<div class="anchor-row">
  <h3><a href="#DeviceOrientation"><code>$cordovaDeviceOrientation</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/deviceOrientation.js">Source</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-device-orientation/blob/master/doc/index.md">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

Get access to the device's compass.

```
cordova plugin add org.apache.cordova.device-orientation
```

```javascript
module.controller('DeviceOrientationCtrl', function($scope, $cordovaDeviceOrientation) {

    $cordovaDeviceOrientation.getCurrentHeading().then(function(result) {
      // Success!
    }, function(err) {
      // An error occurred
    });

    var options = { frequency: 1000 }; // Update every 1 second
    var watch = $cordovaDeviceOrientation.watchHeading(options);

    watch.promise.then(function(result) { /* unused */ },
      function(err) {
        // An error occurred
      }, function(position) {
        // Heading comes back in
        // position.magneticHeading
      });

    $cordovaDeviceOrientation.clearWatch(watch.watchId)
      .then(function(result) {
        // Success!
      }, function(err) {
        // An error occurred
      });
});
```

<a class="anchor" id="Dialogs"></a>

<div class="anchor-row">
  <h3><a href="#Dialogs"><code>$cordovaDialogs</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/dialogs.js">Source</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-dialogs/blob/master/doc/index.md">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

Trigger alert, confirm, and prompt windows, or send beeps (beep, beep!)

```
cordova plugin add org.apache.cordova.dialogs
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaDialogs) {

  $cordovaDialogs.alert('message', 'title', 'button name')
    .then(function() {
      // callback success
    });

  $cordovaDialogs.confirm('message', 'title', ['button 1','button 2'])
    .then(function(buttonIndex) {
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      var btnIndex = buttonIndex;
    });

  $cordovaDialogs.prompt('msg', 'title', ['btn 1','btn 2'], 'default text')
    .then(function(result) {
      var input = result.input1;
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      var btnIndex = buttonIndex;
    });

  // beep 3 times
  $cordovaDialogs.beep(3);

});
```


<a class="anchor" id="Facebook"></a>

<div class="anchor-row">
  <h3><a href="#Facebook"><code>$cordovaFacebook</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/facebook.js">Source</a>
    <a class="btn-anchor" href="https://github.com/Wizcorp/phonegap-facebook-plugin">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
  </div>  
</div>

The Facebook Connect plugin to obtain access to the native FB application on iOS and Android. This plugin is not simple to install so make sure to check out the official docs.

#### Pre-Install

To use the FB plugin, you first have to create a new Facebook App inside of the Facebook developer portal at [https://developers.facebook.com](https://developers.facebook.com/). Retrieve the `App ID` and `App Name`, which will be required to setup your cordova app and for web-development.


#### iOS Install

Download the repo from [https://github.com/Wizcorp/phonegap-facebook-plugin](https://github.com/Wizcorp/phonegap-facebook-plugin). Then type in the following commands in your Terminal.

```bash
cordova platform add ios

cordova -d plugin add /Users/your/path/here/phonegap-facebook-plugin --variable APP_ID="123456789" --variable APP_NAME="myApplication"
```

**[Check out the more complete docs for iOS install](https://github.com/Wizcorp/phonegap-facebook-plugin/blob/master/platforms/ios/README.md)**

#### Android Install

Installing the FB plugin requires a lot of pre-configuration.

Configure the project with your FB app id in the `res/values/facebookconnect.xml` file. For example:

```xml
<resources>
    <string name="fb_app_id">123456789</string>
    <string name="fb_app_name">TEST</string>
</resources>
```

Then, type in your terminal the following commands:

```bash
cordova platform add android

cordova -d plugin add https://github.com/phonegap/phonegap-facebook-plugin.git --variable APP_ID="123456789" --variable APP_NAME="myApplication"

android update project --subprojects --path "platforms/android" --target android-19 --library "CordovaLib"

android update project --subprojects --path "platforms/android" --target android-19 --library "com.phonegap.plugins.facebookconnect/FacebookLib"

cd platforms/android/

ant clean

cd com.phonegap.plugins.facebookconnect/FacebookLib

ant clean

open -e AndroidManifest.xml

// change your minSdkVersion and your targetSdkVersion to your environment settings for me it was:
// <uses-sdk android:minSdkVersion="14" android:targetSdkVersion="17" />

ant release

cd ../../../..

cordova build android
```

**[Check out the detailed docs for Android](https://github.com/Wizcorp/phonegap-facebook-plugin/blob/master/platforms/android/README.md)**


#### Web Development

To use the FB plugin during your browser development, set the `$cordovaFacebookProvider` in your `app.config` module:

```javascript
// Only required for development in browser, not cordova!
module.config(function($cordovaFacebookProvider) {
  var appID = 123456789;
  var version = "v2.0"; // or leave blank and default is v2.0
  $cordovaFacebookProvider.setAppID(appID, version);
});
```

This will allow you to use Facebook in your application through the same API as the cordova plugin.

To allow web-access through your app in the development stage, you may have to go into the Facebook Developer portal and set the `Site URL` to your localhost server (eg: `http://localhost:8100/`). The page to configure these settings can be found at at [https://developers.facebook.com/apps/{Your App ID}/settings/](https://developers.facebook.com/apps/{Your App ID}/settings/).



#### Methods

##### `login(permissions)`

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| permissions  | `String Array` | A string array of permissions your app will require. EG: `["public_profile", "email"]` |

**Returns**  `Object` with user information, such as id, lastName


##### `showDialog(options)`

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| options  | `Object` | A JSON object with 3 keys: `method`, `link`, `caption`. Each value is of `String` type |


##### `api(path, permissions)`

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| path         | `String`       | The Facebook API path to query. EG: `me`, `me/photos`, `search?q={your-query}` |
| permissions  | `String Array` | A string array of permissions your app will require. Set permissions to `null` to stop the Facebook App from opening again. |


##### `getLoginStatus(message)`

Check if the user is currently logged in. If they are already logged in, there is no need to login again, and the `api` method can be called.

##### `getAccessToken(message)`

Retrieves the Access Token of the current logged-in session.

##### `logout(message)`

Logout the user out of Facebook.


#### Example

```javascript
module.controller('MyCtrl', function($scope, $cordovaFacebook) {

  $cordovaFacebook.login(["public_profile", "email", "user_friends"])
    .then(function(success) {
      /*  { id: "634565435",
            lastName: "bob"
            ...
          }
      */
    }, function (error) {
      // error
    });


  var options = {
    method: "feed",
    link: "http://example.com",
    caption: "Such caption, very feed."
  };
  $cordovaFacebook.showDialog(options)
    .then(function(success) {
      // success
    }, function (error) {
      // error
    });


  $cordovaFacebook.api("me", ["public_profile"])
    .then(function(success) {
      // success
    }, function (error) {
      // error
    });


  $cordovaFacebook.getLoginStatus()
    .then(function(success) {
      // success
    }, function (error) {
      // error
    });

  $cordovaFacebook.getAccessToken()
    .then(function(success) {
      // success
    }, function (error) {
      // error
    });

  $cordovaFacebook.logout()
    .then(function(success) {
      // success
    }, function (error) {
      // error
    });

});
```


<a class="anchor" id="File"></a>

<div class="anchor-row">
  <h3><a href="#File"><code>$cordovaFile</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/file.js">Source</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md" title="org.apache.cordova.file">Official Docs</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-file-transfer/blob/master/doc/index.md" title="org.apache.cordova.file-transfer">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

A Plugin to get access to the device's files and directories.

```
cordova plugin add org.apache.cordova.file
cordova plugin add org.apache.cordova.file-transfer
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
  $cordovaFile
    .downloadFile(source, filePath, true, options)
    .then(function(result) {
      // Success!
    }, function(err) {
      // Error
    }, function (progress) {
      // constant progress updates
    });


  // parameters: source, filePath, options
  $cordovaFile
    .uploadFile(server, filePath, options)
    .then(function(result) {
      // Success!
    }, function(err) {
      // Error
    }, function (progress) {
      // constant progress updates
    });

});
```


<a class="anchor" id="Flashlight"></a>

<div class="anchor-row">
  <h3><a href="#Flashlight"><code>$cordovaFlashlight</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/flashlight.js">Source</a>
    <a class="btn-anchor" href="https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

Flashlight Cordova plugin.

```
cordova plugin add https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin.git
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaFlashlight) {

  $cordovaFlashlight.available().then(function(availability) {
    var avail = availability; // is available
  }, function () {
    // unavailable
  });

  $cordovaFlashlight.switchOn()
    .then(
      function (success) { /* success */ },
      function (error) { /* error */ });

  $cordovaFlashlight.switchOff()
    .then(
      function (success) { /* success */ },
      function (error) { /* error */ });

  $cordovaFlashlight.toggle()
    .then(function (success) { /* success */ },
      function (error) { /* error */ });
});
```


<a class="anchor" id="Geolocation"></a>

<div class="anchor-row">
  <h3><a href="#Geolocation"><code>$cordovaGeolocation</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/geolocation.js">Source</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-geolocation/blob/master/doc/index.md">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

Grab the current location of the user, or grab continuous location changes:


```
cordova plugin add org.apache.cordova.geolocation
```

```javascript
module.controller('GeoCtrl', function($cordovaGeolocation) {

  $cordovaGeolocation
    .getCurrentPosition()
    .then(function (position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
    }, function(err) {
      // error
    });

  // begin a watch
  var options = {
    frequency : 1000,
    timeout : 3000,
    enableHighAccuracy: true
  };

  var watch = $cordovaGeolocation.watchPosition(options);
  watch.promise.then(function()  { /* Not  used */ },
    function(err) {
      // error
    }, function(position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
  });

  // clear watch
  $cordovaGeolocation.clearWatch(watch.watchId)
});
```

<a class="anchor" id="Globalization"></a>

<div class="anchor-row">
  <h3><a href="#Globalization"><code>$cordovaGlobalization</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/globalization.js">Source</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-globalization/blob/master/doc/index.md">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

Obtains information and performs operations specific to the user's locale and timezone.

```
cordova plugin add org.apache.cordova.globalization
```


```javascript
module.controller('MyCtrl', function($cordovaGlobalization) {
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

<a class="anchor" id="GoogleAnalytics"></a>

<div class="anchor-row">
  <h3><a href="#GoogleAnalytics"><code>$cordovaGoogleAnalytics</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/GA.js">Source</a>
    <a class="btn-anchor" href="https://github.com/danwilson/google-analytics-plugin">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
  </div>  
</div>

A Plugin to connect to Google's native Universal Analytics SDK 3.0

```
cordova plugin add https://github.com/danwilson/google-analytics-plugin.git
```


```javascript
module.controller('MyCtrl', function($scope, $cordovaGoogleAnalytics) {

  // turn on debug mode
  // https://github.com/danwilson/google-analytics-plugin#javascript-usage
  $cordovaGoogleAnalytics.debugMode();

  // start tracker
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/

  $cordovaGoogleAnalytics.startTrackerWithId('UA-000000-01');

  // set user id
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/user-id

  $cordovaGoogleAnalytics.setUserId('USER_ID');

  // track a view
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/screens
  // Hint: Currently no support for appName, appId, appVersion, appInstallerId
  //       If you need support for it, please create an issue on github:
  //       https://github.com/driftyco/ng-cordova/issues

  $cordovaGoogleAnalytics.trackView('Home Screen');

  // set custom dimensions
  // https://developers.google.com/analytics/devguides/platform/customdimsmets

  $cordovaGoogleAnalytics.addCustomDimension('dimension1', 'Level 1');

  // track event
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/events

  $cordovaGoogleAnalytics.trackEvent('Videos', 'Video Load Time', 'Gone With the Wind', 100);

  // add transaction
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#addTrans

  $cordovaGoogleAnalytics.addTransaction('1234', 'Acme Clothing', '11.99', '5', '1.29', 'EUR');

  // add transaction item
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#addItem

  $cordovaGoogleAnalytics.addTransactionItem(
    '1234', 'Fluffy Pink Bunnies', 'DD23444', 'Party Toys', '11.99', '1', 'GBP'
  );
});
```



<a class="anchor" id="Keyboard"></a>

<div class="anchor-row">
  <h3><a href="#Keyboard"><code>$cordovaKeyboard</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/keyboard.js">Source</a>
    <a class="btn-anchor" href="https://github.com/driftyco/ionic-plugins-keyboard">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
  </div>  
</div>

Accessing the Keyboard of iOS from cordova

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



<a class="anchor" id="Keychain"></a>

<div class="anchor-row">
  <h3><a href="#Keychain"><code>$cordovaKeychain</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/keychain.js">Source</a>
    <a class="btn-anchor" href="https://github.com/shazron/KeychainPlugin">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
  </div>  
</div>

Accessing the keychain of iOS from cordova

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

<a class="anchor" id="LocalNotification"></a>

<div class="anchor-row">
  <h3><a href="#LocalNotification"><code>$cordovaLocalNotification</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/localNotification.js">Source</a>
    <a class="btn-anchor" href="https://github.com/katzer/cordova-plugin-local-notifications">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

The essential purpose of local notifications is to enable an application to inform its users that it has something for them — for example, a message or an upcoming appointment — when the application isn’t running in the foreground.
They are scheduled by an application and delivered on the same device.

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


<a class="anchor" id="Media"></a>

<div class="anchor-row">
  <h3><a href="#Media"><code>$cordovaMedia</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/media.js">Source</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-media/blob/master/doc/index.md">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

Media plugin

```
cordova plugin add org.apache.cordova.media
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaMedia) {
    var src = "/src/audio.mp3";

    var mediaSource = $cordovaMedia.newMedia(src);
    var promise = mediaSource.promise;
    var mediaStatus = mediaSource.mediaStatus;
    var media = mediaSource.media;

    $cordovaMedia.play(media);

    $cordovaMedia.pause(media);

    $cordovaMedia.stop(media);

    $cordovaMedia.release(media);

    $cordovaMedia.getDuration(media);

    $cordovaMedia.seekTo(media, 5000000); // milliseconds

    $cordovaMedia.setVolume(media, 80);

    $cordovaMedia.startRecord(media);

    $cordovaMedia.stopRecord(media);

    $cordovaMedia.getCurrentPosition(media).then(...);
});
```

<a class="anchor" id="NativeAudio"></a>

<div class="anchor-row">
  <h3><a href="#NativeAudio"><code>$cordovaNativeAudio</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/nativeAudio.js">Source</a>
    <a class="btn-anchor" href="https://github.com/SidneyS/cordova-plugin-nativeaudio">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
  </div>  
</div>

Cordova / PhoneGap 3.5+ extension for Native Audio playback, aimed at HTML5 gaming and audio applications which require minimum latency, polyphony and concurrency.

```
cordova plugin add https://github.com/SidneyS/cordova-plugin-nativeaudio.git
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaNativeAudio, $timeout) {

  $cordovaNativeAudio
    .preloadSimple('click', 'audio/click.mp3')
    .then(function (msg) {
      console.log(msg);
    }, function (error) {
      alert(error);
    });

  $cordovaNativeAudio
    .preloadComplex('music', 'audio/music.mp3', 1, 1)
    .then(function (msg) {
      console.log(msg);
    }, function (error) {
      console.error(error);
    });

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

<a class="anchor" id="Network"></a>

<div class="anchor-row">
  <h3><a href="#Network"><code>$cordovaNetwork</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/network.js">Source</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-network-information/blob/master/doc/index.md">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

Check network connection types, and track offline and online status.

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


<a class="anchor" id="Oauth"></a>

<div class="anchor-row">
  <h3><a href="#Oauth"><code>$cordovaOauth</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/oauth.js">Source</a>
    <a class="btn-anchor" href="https://github.com/nraboy/ng-cordova-oauth/blob/master/README.md">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

Use browser login flow for various oauth providers

```
cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git
```

When registering your application with various service providers such as Facebook or Google, it is very important to use
**http://localhost/callback** as the callback / redirect uri.  The Oauth module depends on this in order to complete the
browser flow.

``` javascript
module.controller('MyCtrl', function($scope, $cordovaOauth) {
    $scope.facebookLogin = function() {
        $cordovaOauth.facebook("CLIENT_ID_HERE", ["email"]).then(function(result) {
            // results
        }, function(error) {
            // error
        });
    }

    // $cordovaOauth.dropbox(string appKey);
    // $cordovaOauth.digitalOcean(string clientId, string clientSecret);
    // $cordovaOauth.google(string clientId, array appScope);
    // $cordovaOauth.github(string clientId, string clientSecret, array appScope);
    // $cordovaOauth.linkedin(string clientId, string clientSecret, array appScope, string state);
    // $cordovaOauth.instagram(string clientId, array appScope);
    // $cordovaOauth.box(string clientId, string clientSecret, string state);
    // $cordovaOauth.reddit(string clientId, string clientSecret, array appScope);
    // $cordovaOauth.twitter(string consumerKey, string consumerSecretKey);
});
```

To use Twitter in your project you must have the open source library, [jsSHA](https://github.com/Caligatio/jsSHA), included
in your project.  This is because Twitter requires request signing using HMAC-SHA1, not natively found in JavaScript.

``` html
<script src="js/sha1.js"></script>
```

Add the above jsSHA library into your index.html file.


<a class="anchor" id="PinDialog"></a>

<div class="anchor-row">
  <h3><a href="#PinDialog"><code>$cordovaPinDialog</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/pinDialog.js">Source</a>
    <a class="btn-anchor" href="https://github.com/Paldom/PinDialog">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
  </div>  
</div>

Numeric password dialog.

```
cordova plugin add https://github.com/Paldom/PinDialog.git
```

```javascript
module.controller('MyCtrl', function($cordovaPinDialog) {

  $cordovaPinDialog.prompt('Some message here').then(
    function(result) {
      // result
    },
    function (error) {
      // error
  })
});
```

<a class="anchor" name="Preferences"></a>

<div class="anchor-row">
  <h3><a href="#Preferences"><code>$cordovaPreferences</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/preferences.js">Source</a>
    <a class="btn-anchor" href="https://github.com/dferrell/plugins-application-preferences">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
  </div>  
</div>

Accessing application preference with the [application-preferences](https://github.com/dferrell/plugins-application-preferences) plugin.

```
cordova plugin add https://github.com/dferrell/plugins-application-preferences.git
```


```javascript
module.controller('MyCtrl', function($scope, $cordovaPreferences) {

  $scope.getName = function () {
    $cordovaPreferences.get('name_identifier').then(function (name) {
      $scope.name = name;
    })
  };

  $scope.setName = function () {
    $cordovaPreferences.get('name_identifier', 'homer').then(function () {
      console.log('successfully saved!');
    })
  };
});
```

<a class="anchor" id="Printer"></a>

<div class="anchor-row">
  <h3><a href="#Printer"><code>$cordovaPrinter</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/Printer.js">Source</a>
    <a class="btn-anchor" href="https://github.com/katzer/cordova-plugin-printer">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
  </div>  
</div>

Printer plugin

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




<a class="anchor" id="ProgressIndicator"></a>

<div class="anchor-row">
  <h3><a href="#ProgressIndicator"><code>$cordovaProgress</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/progressIndicator.js">Source</a>
    <a class="btn-anchor" href="http://pbernasconi.github.io/cordova-progressIndicator/">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
  </div>  
</div>

Various Progress Dialogs for indicating loading or downloading.


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


$cordovaProgress.showSuccess(true, "Success!") // requires .hide()

$cordovaProgress.showText(false, 100000, "Loading")

});
```


<a class="anchor" id="Push"></a>

<div class="anchor-row">
  <h3><a href="#Push"><code>$cordovaPush</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/push.js">Source</a>
    <a class="btn-anchor" href="https://github.com/phonegap-build/PushPlugin#-plugin-api">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

Allows your application to receive push notifications. To receive notifications in your controllers or services, listen for 'pushNotificationReceived' event.

```
cordova plugin add https://github.com/phonegap-build/PushPlugin.git
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaPush) {

  var androidConfig = {
    "senderID":"replace_with_sender_id",
  };

  var iosConfig = {
    "badge":"true",
    "sound":"true",
    "alert":"true",
  };

  // (optional) custom notification handler
  // If you set "ecb" in the config object, the 'pushNotificationReceived' angular event will not be broadcast.
  // You will be responsible for handling the notification and passing it to your contollers/services
  androidConfig.ecb = "myCustomOnNotificationHandler"
  iosConfig.ecb = "myCustomOnNotificationAPNHandler"

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

  // receive notification
  myApp.controller('myCtrl', ['$scope', function($scope) {
      $scope.$on('pushNotificationReceived', function(event, notification) {
          // process notification
      });
  }]);

  // iOS only
  $cordovaPush.setBadgeNumber(2).then(function(result) {
      // Success!
  }, function(err) {
      // An error occured. Show a message to the user
  });

});
```

<a class="anchor" id="SocialSharing"></a>

<div class="anchor-row">
  <h3><a href="#SocialSharing"><code>$cordovaSocialSharing</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/socialSharing.js">Source</a>
    <a class="btn-anchor" href="https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

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
      // An error occurred. Show a message to the user
    });

  // TO, CC, BCC must be an array, Files can be either null, string or array
  $cordovaSocialSharing
    .shareViaEmail(message, subject, toArr, bccArr, file)
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occurred. Show a message to the user
    });


  $cordovaSocialSharing
    .canShareVia(socialType, message, image, link)
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occurred. Show a message to the user
    });
});
```


<a class="anchor" id="SpinnerDialog"></a>

<div class="anchor-row">
  <h3><a href="#SpinnerDialog"><code>$cordovaSpinnerDialog</code></a></h3>
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



<a class="anchor" id="Splashscreen"></a>

<div class="anchor-row">
  <h3><a href="#Splashscreen"><code>$cordovaSplashscreen</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/splashscreen.js">Source</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-splashscreen/blob/master/doc/index.md">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

Show or hide the Splash Screen.

```
cordova plugin add org.apache.cordova.splashscreen
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaSplashscreen) {

  $cordovaSplashscreen.show();

});
```



<a class="anchor" id="SQLite"></a>

<div class="anchor-row">
  <h3><a href="#SQLite"><code>$cordovaSQLite</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/SQLite.js">Source</a>
    <a class="btn-anchor" href="https://github.com/brodysoft/Cordova-SQLitePlugin">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

Native interface to sqlite in a Cordova/PhoneGap plugin for Android/iOS/WP(8), with HTML5 Web SQL API [View Docs](https://github.com/brodysoft/Cordova-SQLitePlugin/blob/master/README.md)

```
cordova plugin add https://github.com/brodysoft/Cordova-SQLitePlugin.git
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaSQLite) {

  var db = $cordovaSQLite.openDB({ name: "my.db" });

  // for opening a background db:
  var db = $cordovaSQLite.openDB({ name: "my.db", bgType: 1 });

  $scope.execute = function() {
    var query = "INSERT INTO test_table (data, data_num) VALUES (?,?)";
    $cordovaSQLite.execute(db, query, ["test", 100]).then(function(res) {
      console.log("insertId: " + res.insertId);
    }, function (err) {
      console.error(err);
    });
  };

});
```


<a class="anchor" id="Statusbar"></a>

<div class="anchor-row">
  <h3><a href="#StatusbarLite"><code>$cordovaStatusbar</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/statusbar.js">Source</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-statusbar/blob/master/doc/index.md">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

Configure the device's StatusBar with colors and styles.

```
cordova plugin add org.apache.cordova.statusbar
```

```javascript
module.controller('MyCtrl', function($cordovaStatusbar) {
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

<a class="anchor" id="Toast"></a>

<div class="anchor-row">
  <h3><a href="#Toast"><code>$cordovaToast</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/toast.js">Source</a>
    <a class="btn-anchor" href="https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

This plugin allows you to show a native Toast (a little text popup) on iOS, Android and WP8. It's great for showing a non intrusive native notification which is guaranteed always in the viewport of the browser.

```
cordova plugin add https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin.git
```

#### Methods

##### `show(message, duration, position)`


| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| message      | `String`       | Message of the spinner dialog. Leave blank for no message |
| duration     | `String`       | Duration of time to display the toast. Options : `'short'`, `'long'` |
| position     | `String`       | Location of the toast. Options : `'top'`, `'center'`, `'bottom'` |



##### `showShortTop(message)`

##### `showShortCenter(message)`

##### `showShortBottom(message)`

##### `showLongTop(message)`

##### `showLongCenter(message)`

##### `showLongBottom(message)`


#### Example

```javascript
module.controller('MyCtrl', function($cordovaToast) {

  $cordovaToast
    .show('Here is a message', 'long', 'center')
    .then(function(success) {
      // success
    }, function (error) {
      // error
    });

  $cordovaToast.showShortTop('Here is a message').then(function(success) {
    // success
  }, function (error) {
    // error
  });

  $cordovaToast.showLongBottom('Here is a message').then(function(success) {
    // success
  }, function (error) {
    // error
  });

});
```

<a class="anchor" id="TouchID"></a>

<div class="anchor-row">
  <h3><a href="#TouchID"><code>$cordovaTouchID</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/touchID.js">Source</a>
    <a class="btn-anchor" href="https://github.com/leecrossley/cordova-plugin-touchid">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
  </div>  
</div>

Cordova Plugin to leverage the iOS local authentication framework to allow in-app user authentication using Touch ID.

```
cordova plugin add uk.co.ilee.touchid
```

```javascript
module.controller('MyCtrl', function($cordovaTouchID) {

  $cordovaTouchID.checkSupport().then(function() {
    // success, TouchID supported
  }, function (error) {
    alert(error); // TouchID not supported
  });

  $cordovaTouchID.authenticate("text").then(function() {
    // success
  }, function () {
    // error
  });

});
```


<a class="anchor" id="Vibration"></a>

<div class="anchor-row">
  <h3><a href="#Vibration"><code>$cordovaVibration</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/vibration.js">Source</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-vibration/blob/master/doc/index.md">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>  
</div>

Vibrate the device programatically.

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

<div class="anchor-row">
  <h3><a href="#Zip"><code>$cordovaZip</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/zip.js">Source</a>
    <a class="btn-anchor" href="https://github.com/MobileChromeApps/zip">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
  </div>  
</div>


Unzip a file.

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
