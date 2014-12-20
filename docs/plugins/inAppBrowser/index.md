---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaInAppBrowser
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/inappbrowser.js
official-docs: https://github.com/apache/cordova-plugin-inappbrowser/blob/master/doc/index.md
icon-apple: true
icon-android: true
icon-windows: true
---


Provides a web browser view. It could be used to open images, access web pages, and open PDF files.

```
cordova plugin add org.apache.cordova.inappbrowser
```


```javascript
module.controller('FooCtrl', function($cordovaInAppBrowser) {

  // Using the plugin with default options
  $cordovaInAppBrowser
    .open('http://ngcordova.com', '_blank')
    .then(function(event) {
      // success
    }, function(event) {
      // error
    });

});

module.controller('BarCtrl', function($cordovaInAppBrowser) {

  // Configuring the plugin, options could be `String` or `Object`
  $cordovaInAppBrowser.init('location=no,clearcache=yes');

  $cordovaInAppBrowser
    .open('http://ngcordova.com', '_blank')
    .then(function(event) {
      // success
    })
    .catch(function(event) {
      // error
    });

});

module.controller('BazCtrl', function($scope, $cordovaInAppBrowser) {

  // More advanced usage
  var inApp = $cordovaInAppBrowser.init({
    location: 'no',
    clearcache: 'yes'
  });

  $cordovaInAppBrowser.open('http://ngcordova.com', '_blank');

  // fires when the InAppBrowser starts to load a URL
  inApp.$on('loadstart', function(event) {

  });

  // fires when the InAppBrowser finishes loading a URL
  inApp.$on('loadstop', function(event) {
    // Inject css
    $cordovaInAppBrowser.insertCSS({
      code: 'body {background-color:blue;}'
    });

    // Execute javascript
    $cordovaInAppBrowser.executeScript({
      file: 'script.js'
    });
  });

  // fires when the InAppBrowser encounters an error when loading a URL
  inApp.$on('loaderror', function(event) {

  });

  // fires when the InAppBrowser window is closed
  inApp.$on('exit', function(event) {

  });

  $scope.onClose = function() {
    $cordovaInAppBrowser.close();
  };

});
```


