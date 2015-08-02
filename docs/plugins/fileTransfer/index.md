---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaFileTransfer
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/fileTransfer.js
official-docs:  https://github.com/apache/cordova-plugin-file-transfer
icon-apple: true
icon-android: true
icon-windows: true
---

This plugin allows you to upload and download files.

```
cordova plugin add org.apache.cordova.file-transfer
```

#### Methods

##### `download(url, filePath, options, trustHosts)`

Downloads a file from server.

| Param         | Type           | Detail  |
| ------------- |----------------| --------|
| url           | `String`       | URL of the server to download the file |
| targetPath    | `String`       | Filesystem url representing the file on the device |
| options       | `Object`       | Optional parameters, currently only supports headers |
| trustAllHosts | `Boolean`      | If set to `true` - accepts all security certificates |

> | Returns      | Type        | Detail  |
> | ------------ |-------------| --------|
> | success      | `Object`    | Returns success object with file path and more info  |
> | progress     | `Object`    | Returns download progress Object |


##### `upload(server, filePath, options, trustAllHosts)`

Sends a file to a server.

| Param         | Type           | Detail  |
| ------------- |----------------| --------|
| server        | `String`       | URL of the server to receive the file |
| targetPath    | `String`       | Filesystem url representing the file on the device |
| options       | `Object`       | Optional parameters |
| trustAllHosts | `Boolean`      | If set to `true` - accepts all security certificates |

> | Returns      | Type        | Detail  |
> | ------------ |-------------| --------|
> | success      | `Object`    | Returns success object with file path and more info  |
> | progress     | `Object`    | Returns download progress Object |

#### Example


```javascript
module.controller('MyCtrl', function($scope, $timeout, $cordovaFileTransfer) {

  document.addEventListener('deviceready', function () {

    var url = "http://cdn.wall-pix.net/albums/art-space/00030109.jpg";
    var targetPath = cordova.file.documentsDirectory + "testImage.png";
    var trustHosts = true
    var options = {};

    $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
      .then(function(result) {
        // Success!
      }, function(err) {
        // Error
      }, function (progress) {
        $timeout(function () {
          $scope.downloadProgress = (progress.loaded / progress.total) * 100;
        })
      });

   }, false);


  document.addEventListener('deviceready', function () {

    $cordovaFileTransfer.upload(server, filePath, options)
      .then(function(result) {
        // Success!
      }, function(err) {
        // Error
      }, function (progress) {
        // constant progress updates
      });

  }, false);

});
```
