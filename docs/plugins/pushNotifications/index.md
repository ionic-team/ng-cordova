---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><code>$cordovaPush</code></h3>
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

Allows your application to receive push notifications. To receive notifications in your controllers or services, listen for `pushNotificationReceived` event.

```
cordova plugin add https://github.com/phonegap-build/PushPlugin.git
```

#### Methods

##### `register(config)`

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| config       | `Object`       | Configuration object for setting default values |


> |Returns|||
> | ------------ |----------------| --------|
> | config       | `Object`       | Configuration object for setting default values |

`Object` with user information, such as id, lastName


##### `unregister(options)`

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| options      | `Object`       | Options for unregistering push-notifications (not generally needed) |


##### `$rootScope.$on('pushNotificationReceived', func(event, notification))`

| Returns      | Type           | Detail  |
| ------------ |----------------| --------|
| event        | `Object`       | Default Angular event passed into the listener (not used in push notifications) |
| notification | `Object`       | Notification received from server |


##### `unregister(options)`

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| options      | `Object`       | Options for unregistering push-notifications (not generally needed) |


#### Example - iOS

Setup Push Notifications when the App is first opened:

```javascript
module.run(function($http, $cordovaPush) {

  var iosConfig = {
    "badge": "true",
    "sound": "true",
    "alert": "true",
  };

  $cordovaPush.register(config).then(function(result) {
    // Success -- send deviceToken to server, and store for future use
    console.log("result: " + result);
    $http.post("http://server.com/tokens", {user: "Bob", tokenID : result.deviceToken);
  }, function(err) {
    // Error
  });

  // WARNING: dangerous to unregister (results in loss of tokenID)
  $cordovaPush.unregister(options).then(function(result) {
    // Success!
  }, function(err) {
    // Error
  });
```

**iOS** : Receiving a notification:

```javascript
myApp.controller('MyCtrl', function($rootScope) {

  $rootScope.$on('pushNotificationReceived', function(event, notification) {
    if (notification.alert)
      navigator.notification.alert(notification.alert)

    if (notification.sound)
      var snd = new Media(event.sound);
      snd.play();

    if (notification.badge) {
      $cordovaPush.setBadgeNumber(notification.badge)
        .then(function(result) {
          // Success!
        }, function(err) {
          // An error occurred. Show a message to the user
        });
    }
  });
});
```


#### Example - Android

Setup Push Notifications when the App is first opened:

```javascript
module.run(function($cordovaPush) {

  var androidConfig = {
    "senderID": "replace_with_sender_id",
  };

  $cordovaPush.register(config).then(function(result) {
    // Success
  }, function(err) {
    // Error
  });

  // WARNING: dangerous to unregister (results in loss of tokenID)
  $cordovaPush.unregister(options).then(function(result) {
    // Success!
  }, function(err) {
    // Error
  });
```

**Android** : Receiving a notification:

```javascript
myApp.controller('MyCtrl', function($rootScope) {

  $rootScope.$on('pushNotificationReceived', function(event, notification) {
    switch(notification.event) {
      case 'registered':
        if (notification.regid.length > 0 ) {
          alert('registration ID = ' + notification.regid);
        }
        break;

      case 'message':
        // this is the actual push notification. its format depends on the data model from the push server
        alert('message = ' + notification.message + ' msgCount = ' + notification.msgcnt);
        break;

      case 'error':
        alert('GCM error = ' + notification.msg);
        break;

      default:
        alert('An unknown GCM event has occurred');
        break;
    }
  });
});
```


#### Additional Resources

- [Local and Push Notification Programming Guide](http://developer.apple.com/library/mac/#documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/ApplePushService/ApplePushService.html) (Apple)
- [Apple Push Notification Services Tutorial: Part 1/2](http://www.raywenderlich.com/3443/apple-push-notification-services-tutorial-part-12)
- [Apple Push Notification Services Tutorial: Part 2/2](http://www.raywenderlich.com/3525/apple-push-notification-services-tutorial-part-2)
- [Google Cloud Messaging for Android](http://developer.android.com/guide/google/gcm/index.html) (Android)
- [How to Implement Push Notifications for Android](http://tokudu.com/2010/how-to-implement-push-notifications-for-android/)
