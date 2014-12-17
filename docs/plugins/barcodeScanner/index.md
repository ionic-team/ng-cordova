---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><code>$cordovaBarcodeScanner</code></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/barcodeScanner.js">Source</a>
    <a class="btn-anchor" href="https://github.com/wildabeast/BarcodeScanner/#using-the-plugin">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>
</div>

The [Barcode Scanner Plugin](https://github.com/wildabeast/BarcodeScanner/) opens a camera view and automagically scans a barcode, returning the data back to you.


```bash
cordova plugin add https://github.com/wildabeast/BarcodeScanner.git
```


#### Methods

##### `scan()`

**Returns**  `Object` with user information, such as id, lastName

##### `encode(type, text)`


| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| type         | `Constant`     | Encoding type desired (eg:  BarcodeScanner.Encode.TEXT_TYPE) |
| text         | `String`       | String of text to be encoded into desired format |


**Returns**  `Object` with encoded text


#### Example

```javascript

module.controller('BarcodeCtrl', function($scope, $cordovaBarcodeScanner) {

  $cordovaBarcodeScanner
    .scan()
    .then(function(barcodeData) {
      // Success! Barcode data is here
    }, function(error) {
      // An error occurred
    });


  // NOTE: encoding not functioning yet
  $cordovaBarcodeScanner
    .encode(BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com")
    .then(function(success) {
      // Success!
    }, function(error) {
      // An error occurred
    });

});
```