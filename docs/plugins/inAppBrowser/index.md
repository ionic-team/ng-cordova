---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaInAppBrowser
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/inappbrowser.js
official-docs: https://github.com/apache/cordova-plugin-inappbrowser
icon-apple: true
icon-android: true
icon-windows: true
---

Provides a web browser view. It could be used to open images, access web pages, and open PDF files.

```
cordova plugin add org.apache.cordova.inappbrowser
```

#### Methods

##### `$cordovaInAppBrowserProvider.setDefaultOptions(options)`

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| options      | `Object`       | Set global, default options for all inAppBrowsers |


##### `open(URL, target, options)`

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| URL          | `String`       | Configuration object for setting default values |
| target       | `String`       | The target in which to load the URL (`_self`, `_blank`, `_system`) |
| options      | `Object`       | Optionally override default options |


##### `close()`

Closes the InAppBrowser window.

##### `$rootScope.$on('$cordovaInAppBrowser:loadstart', function(e, event));`

Listen for the `loadstart` event, called when the In App Browser starts loading a page (only after `open()` is called).

##### `$rootScope.$on('$cordovaInAppBrowser:loadstop', function(e, event));`

Listen for the `loadstop` event, which fires after the Browser has finished loading (only after `open()` is called).

##### `$rootScope.$on('$cordovaInAppBrowser:loaderror', function(e, event));`

Listen for the `loaderror` event, which fires when the In App Browser encounters an error when loading a URL (only after `open()` is called).

##### `$rootScope.$on('$cordovaInAppBrowser:exit', function(e, event));`

Listen for the `exit` event, which fires when the InAppBrowser window is closed (only after `open()` is called).


#### Example

**Set Default Options**

```javascript
module.config(function($cordovaInAppBrowserProvider) {

  var defaultOptions = {
    location: 'no',
    clearcache: 'no',
    toolbar: 'no'
  };

  document.addEventListener(function () {

    $cordovaInAppBrowserProvider.setDefaultOptions(options)

  }, false);
});
```

**Open a new browser**

```javascript
module.controller('ThisCtrl', function($cordovaInAppBrowser) {

  var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'no'
    };

  document.addEventListener(function () {
    $cordovaInAppBrowser.open('http://ngcordova.com', '_blank', options)
      .then(function(event) {
        // success
      })
      .catch(function(event) {
        // error
      });


    $cordovaInAppBrowser.close();

  }, false);

  $rootScope.$on('$cordovaInAppBrowser:loadstart', function(e, event){

  });

  $rootScope.$on('$cordovaInAppBrowser:loadstop', function(e, event){
    // insert CSS via code / file
    $cordovaInAppBrowser.insertCSS({
      code: 'body {background-color:blue;}'
    });

    // insert Javascript via code / file
    $cordovaInAppBrowser.executeScript({
      file: 'script.js'
    });
  });

  $rootScope.$on('$cordovaInAppBrowser:loaderror', function(e, event){

  });

  $rootScope.$on('$cordovaInAppBrowser:exit', function(e, event){

  });

});
```


