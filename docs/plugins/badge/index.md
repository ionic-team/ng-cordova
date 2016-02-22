---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaBadge
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/badge.js
official-docs: https://github.com/katzer/cordova-plugin-badge
icon-apple: true
icon-android: true
icon-windows: true
---

Access and modify the badge number of the app icon on various mobile platforms including iOS, Android and Windows Phone.

```
cordova plugin add https://github.com/katzer/cordova-plugin-badge.git
```

#### Methods

##### `hasPermission()`

Determine if the app does have the permission to show badge notifications.

```javascript
module.controller('MyCtrl', function($cordovaBadge) {

  $cordovaBadge.hasPermission().then(function(yes) {
    // You have permission
  }, function(no) {
    // You do not have permission
  });

});

```

##### `set(badge, callback, scope)`

Set a number to display on the badge.

```javascript
module.controller('MyCtrl', function($cordovaBadge) {

  $cordovaBadge.set(3).then(function() {
    // You have permission, badge set.
  }, function(err) {
    // You do not have permission.
  });

});

```

##### `get()`

Get the current badge number displayed.

```javascript
module.controller('MyCtrl', function($cordovaBadge) {

  $cordovaBadge.get().then(function(badge) {
    // You have permission, badge returned.
  }, function(err) {
    // You do not have permission.
  });

});

```

##### `clear(callback, scope)`

Clear the current badge number displayed.

```javascript
module.controller('MyCtrl', function($cordovaBadge) {

  $cordovaBadge.clear().then(function() {
    // You have permission, badge cleared.
  }, function(err) {
    // You do not have permission.
  });

});

```

##### `increase(count, callback, scope)`

Increase the current badge number displayed by the number provided.
If number is not passed, badge will increase by 1.

```javascript
module.controller('MyCtrl', function($cordovaBadge) {

  $cordovaBadge.increase(count).then(function() {
    // You have permission, badge increased.
  }, function(err) {
    // You do not have permission.
  });

});

```

##### `decrease(count, callback, scope)`

Decrease the current badge number displayed by the number provided.
If number is not passed, badge will decrease by 1.

```javascript
module.controller('MyCtrl', function($cordovaBadge) {

  $cordovaBadge.decrease(count).then(function() {
    // You have permission, badge decreased.
  }, function(err) {
    // You do not have permission.
  });

});

```
