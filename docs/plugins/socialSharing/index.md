---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

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
