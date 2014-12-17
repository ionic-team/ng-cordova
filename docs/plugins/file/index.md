---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><code>$cordovaFile</code></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/file.js">Source</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md" title="org.apache.cordova.file">Official Docs</a>
    <a class="btn-anchor" href="https://github.com/apache/cordova-plugin-file-transfer/blob/master/doc/index.md" title="org.apache.cordova.file-transfer">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>
</div>

A Plugin to get access to the device's files and directories.

```
cordova plugin add org.apache.cordova.file
cordova plugin add org.apache.cordova.file-transfer
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaFile) {

  $cordovaFile.checkDir(directory).then(function(result) {
      // Success!
  }, function(err) {
      // An error occurred. Show a message to the user
  });


  // parameters: directory, replace (boolean)
  $cordovaFile.createDir(directory, false).then(function(result) {
      // Success!
  }, function(err) {
      // An error occurred. Show a message to the user
  });


  $cordovaFile.checkFile(filePath).then(function(result) {
      // Success!
  }, function(err) {
      // An error occurred. Show a message to the user
  });


  // parameters: filePath, replace (boolean)
  $cordovaFile.createFile(filePath, true).then(function(result) {
      // Success!
  }, function(err) {
      // An error occurred. Show a message to the user
  });


  $cordovaFile.removeFile(filePath).then(function(result) {
      // Success!
  }, function(err) {
      // An error occurred. Show a message to the user
  });


  $cordovaFile.writeFile(filePath, data, options).then(function(result) {
      // Success!
  }, function(err) {
      // An error occurred. Show a message to the user
  });

  // Reads a file as TEXT
  $cordovaFile.readFile(filePath).then(function(result) {
      // Success!
  }, function(err) {
      // An error occurred. Show a message to the user
  });

  // parameters: source, filePath, trust all hosts (boolean), options
  $cordovaFile
    .downloadFile(source, filePath, true, options)
    .then(function(result) {
      // Success!
    }, function(err) {
      // Error
    }, function (progress) {
      // constant progress updates
    });


  // parameters: source, filePath, options
  $cordovaFile
    .uploadFile(server, filePath, options)
    .then(function(result) {
      // Success!
    }, function(err) {
      // Error
    }, function (progress) {
      // constant progress updates
    });

});
```

