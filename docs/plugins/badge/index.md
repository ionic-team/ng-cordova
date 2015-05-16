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