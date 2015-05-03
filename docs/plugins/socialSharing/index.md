---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaSocialSharing
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/socialSharing.js
official-docs: https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin
icon-apple: true
icon-android: true
icon-windows: true
---

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
    .share(message, subject, file, link) // Share via native share sheet
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occured. Show a message to the user
    });

  $cordovaSocialSharing
    .shareViaTwitter(message, image, link)
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occurred. Show a message to the user
    });

  $cordovaSocialSharing
    .shareViaWhatsApp(message, image, link)
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occurred. Show a message to the user
    });

  $cordovaSocialSharing
    .shareViaFacebook(message, image, link)
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occurred. Show a message to the user
    });

  // access multiple numbers in a string like: '0612345678,0687654321'
  $cordovaSocialSharing
    .shareViaSMS(message, number)
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occurred. Show a message to the user
    });

  // toArr and bccArr must be an array, file can be either null, string or array
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

  $cordovaSocialSharing
    .canShareViaEmail()
    .then(function(result) {
      // Yes we can
    }, function(err) {
      // Nope
    });
});
```
