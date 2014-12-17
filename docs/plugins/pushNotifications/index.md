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
      // An error occurred. Show a message to the user
  });

  $cordovaPush.unregister(options).then(function(result) {
      // Success!
  }, function(err) {
      // An error occurred. Show a message to the user
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
      // An error occurred. Show a message to the user
  });

});
```