---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaContacts
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/contacts.js
official-docs: https://github.com/apache/cordova-plugin-contacts/
icon-apple: true
icon-android: true
icon-windows: true
---

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
