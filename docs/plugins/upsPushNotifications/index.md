---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name:  $cordovaUpsPush
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/upsPush.js
official-docs: https://aerogear.org/docs/guides/aerogear-cordova/AerogearCordovaPush/
icon-apple: true
icon-android: true
icon-windows: true
---

The AeroGear UnifiedPush Server offers a unified Notification Service API to the APNs, GCM, WNS, MPNs and SimplePush Notification Services. When a push message request is sent to the UnifiedPush Server, it is internally translated into the format of these 3rd party networks. This gives a server the ability to send Push notifications to different mobile platforms. Making not only your client code platform independend, but also your server side.

Allows your application to receive push notifications. To receive notifications in your controllers or services, listen for `$cordovaUpsPush:notificationReceived` event.

```
cordova plugin add aerogear-cordova-push
```

#### Methods

##### `register(config)`

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| config       | `Object`       | Configuration object for setting default values |

> **Returns** `Object` with user information, such as id, lastName


##### `unregister(options)`

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| options      | `Object`       | Options for unregistering push-notifications (not generally needed) |


##### `$rootScope.$on('$cordovaPush:notificationReceived', func(event, notification))`

| Returns      | Type           | Detail  |
| ------------ |----------------| --------|
| event        | `Object`       | Default Angular event passed into the listener (not used in push notifications) |
| notification | `Object`       | Notification received from server |


##### `setBadgeNumber(number)` *- iOS only*

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| number       | `Integer`      | Set the badge count visible when the app is not running |


[Setup and install the UnifiedPush Server](https://aerogear.org/docs/unifiedpush/ups_userguide/index/#server-installation) or run it on [Openshift](https://aerogear.org/docs/unifiedpush/ups_userguide/index/#openshift). You can send messages from the web console of the server or use one of the [Sender API's](https://aerogear.org/docs/unifiedpush/ups_userguide/index/#_server_integration_tutorials)

#### Example

Setup Push Notifications:

```javascript
controller('exampleCtrl', function($scope, $rootScope, $cordovaUpsPush) {

  var pushConfig = {
    pushServerURL: "<pushServerURL e.g http(s)//host:port/context >",
    alias: "<alias e.g. a username or an email address optional>",
    android: {
      senderID: "<senderID e.g Google Project ID only for android>",
      variantID: "<variantID e.g. 1234456-234320>",
      variantSecret: "<variantSecret e.g. 1234456-234320>"
    },
    ios: {
      variantID: "<variantID e.g. 1234456-234320>",
      variantSecret: "<variantSecret e.g. 1234456-234320>"
    },
    windows: {
      variantID: "<variantID e.g. 1234456-234320>",
      variantSecret: "<variantSecret e.g. 1234456-234320>"
    }
  };

  $cordovaUpsPush.register(pushConfig).then(function () {
    console.log("successful registered");
  }, function (err) {
    alert("Registration error: " + err);
  });


  $rootScope.$on('$cordovaUpsPush:notificationReceived', function (event, notification) {
    navigator.notification.alert(notification.alert);

    //only on ios
    if (notification.badge) {
      $cordovaUpsPush.setBadgeNumber(notification.badge).then(function(result) {
        // Success!
      }, function(err) {
        // An error occurred. Show a message to the user
      });
    }
  });

  }, false);
```
