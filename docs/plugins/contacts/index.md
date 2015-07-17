---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaContacts
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/contacts.js
official-docs: https://github.com/apache/cordova-plugin-contacts
icon-apple: true
icon-android: true
icon-windows: true
---

A powerful way to create, remove, and search through contacts on the device.

```
cordova plugin add cordova-plugin-contacts
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaContacts, $ionicPlatform) {
  $scope.addContact = function() {
    $cordovaContacts.save($scope.contactForm).then(function(result) {
      // Contact saved
    }, function(err) {
      // Contact error
    });
  };

  $scope.getAllContacts = function() {
    $cordovaContacts.find().then(function(result) { //omitting parameter to .find() causes all contacts to be returned
      $scope.contacts = result;//all contacts returned in result object.
    }
  };

  $scope.findContactsBySearchTerm = function (searchTerm) {
    var opts = {                                           //search options
      filter : searchTerm,                                 // 'Bob'
      multiple: true,                                      // Yes, return any contact that matches criteria
      fields:  [ 'displayName', 'name' ]                   // These are the fields to search for 'bob'.
      desiredFields: [id];    //return fields.
    };

    if ($ionicPlatform.isAndroid()) {
      opts.hasPhoneNumber = true;         //hasPhoneNumber only works for android.
    };

    $cordovaContacts.find(opts).then(function (result) {
      $scope.contacts = result;
    };
  }

});
```
