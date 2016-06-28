---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name:  $cordovaPushV5
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/push_v5.js
official-docs: https://github.com/phonegap/phonegap-plugin-push
icon-apple: true
icon-android: true
icon-windows: true
---


Allows your application to receive push notifications. To receive notifications in your controllers or services, listen for `$cordovaPushV5:notificationReceived` event.

Note: Ionic offers a tightly-integrated Push Notification service to make sending and receiving push notifications easy for Ionic apps: [Ionic Push docs](http://docs.ionic.io/v1.0/docs/push-from-scratch)


```bash
# This requires phonegap/cordova CLI 5.0+ ( current stable v1.7.2 )
phonegap plugin add phonegap-plugin-push --variable SENDER_ID="XXXXXXX"

# or
cordova plugin add phonegap-plugin-push --variable SENDER_ID="XXXXXXX"

# It is also possible to install via repo url directly ( unstable )
phonegap plugin add https://github.com/phonegap/phonegap-plugin-push --variable SENDER_ID="XXXXXXX"

# or
cordova plugin add https://github.com/phonegap/phonegap-plugin-push --variable SENDER_ID="XXXXXXX"
cordova plugin add https://github.com/phonegap-build/PushPlugin.git
```

#### Methods

##### `initialize(options)`
Initializes the plugin on the native side.

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| options      | `Object`       | Configuration object for setting default values |

> **Returns** `Promise` which resolves to an `PushNotification` instance.

> For details about `options`, refer to the [official docs](https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/API.md).

##### `onNotification()`
Start listening to receive push notifications.  This should be called after `initialize` resolves.

##### `onError()`
Start listening to receive push notification errors.  This should be called after `initialize` resolves.

##### `register()`
> **Returns** `Promise` which resolves to data including the `registrationId`

##### `unregister()`
The unregister method is used when the application no longer wants to receive push notifications. Beware that this cleans up all event handlers previously registered, so you will need to re-register them if you want them to function again without an application reload.

##### `$rootScope.$on('$cordovaPushV5:notificationReceived', func(event, notification))`
Triggered each time a push notification is received by a 3rd party push service on the device.

> For details about the callback parameters, refer to the [official docs](https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/API.md)

##### `$rootScope.$on('$cordovaPushV5:errorOcurred', func(event, error))`
Triggered when an internal error occurs and the cache is aborted.

> For details about the callback parameters, refer to the [official docs](https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/API.md)

##### `getBadgeNumber()` *- iOS only*
Get the current badge count visible when the app is not running

##### `setBadgeNumber(number)` *- iOS only*
Set the badge count visible when the app is not running

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| number       | `Integer`      | Indicates what number should show up in the badge. Passing 0 will clear the badge |

##### `finish()` *- iOS only*
Tells the OS that you are done processing a background push notification.

#### Example

Setup Push Notifications when the App is first opened:

```javascript
module.run(function($http, $cordovaPushV5) {

  var options = {
  	android: {
  	  senderID: "12345679"
  	},
    ios: {
      alert: "true",
      badge: "true",
      sound: "true"
    },
    windows: {}
  };
  
  // initialize
  $cordovaPushV5.initialize(options).then(function() {
    // start listening for new notifications
    $cordovaPushV5.onNotification();
    // start listening for errors
    $cordovaPushV5.onError();
    
    // register to get registrationId
    $cordovaPushV5.register().then(function(data) {
      // `data.registrationId` save it somewhere;
    })
  });
  
  // triggered every time notification received
  $rootScope.$on('$cordovaPushV5:notificationReceived', function(event, data){
    // data.message,
    // data.title,
    // data.count,
    // data.sound,
    // data.image,
    // data.additionalData
  });

  // triggered every time error occurs
  $rootScope.$on('$cordovaPushV5:errorOcurred', function(event, e){
    // e.message
  });

});
```

#### Additional Resources

- [Local and Push Notification Programming Guide](http://developer.apple.com/library/mac/#documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/ApplePushService/ApplePushService.html) (Apple)
- [Apple Push Notification Services Tutorial: Part 1/2](http://www.raywenderlich.com/3443/apple-push-notification-services-tutorial-part-12)
- [Apple Push Notification Services Tutorial: Part 2/2](http://www.raywenderlich.com/3525/apple-push-notification-services-tutorial-part-2)
- [Google Cloud Messaging for Android](http://developer.android.com/guide/google/gcm/index.html) (Android)
- [How to Implement Push Notifications for Android](http://tokudu.com/2010/how-to-implement-push-notifications-for-android/)
