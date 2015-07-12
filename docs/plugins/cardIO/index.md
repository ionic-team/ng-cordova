---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaNgCardIO
source:  https://github.com/driftyco/ng-cordova/blob/master/src/plugins/cardIO.js
official-docs:  https://github.com/daruwanov/angular-cordova-cardio
icon-apple: true
icon-android: true
---


This plugin allows you to scan credit cards in your mobile app

```bash
$ cordova plugin add https://github.com/vkeepe/card.io.git
```

###Android
Before you build in release mode, make sure to adjust your proguard configuration by adding the following to proguard.cnf:
 - keep class io.card.** { *; }
 - keep class com.keepe.** { *; }
 - keepclassmembers class io.card.** { *;}


Module provide next functionality:

```javascript
 $cordovaNgCardIOProvider.setScanerConfig()
 /**
  * Set up config options for scan.
  * Use in config block of your app.
  * You can pass, only fields which values you want to change.
  **/
```

```javascript
    /**
     *Default scaner config:
     *
     * @param expiry (default: true) - use or not expire date of card
     * @param cvv (default: true) - use or not cvv number (cvv always fill on manually)
     * @param zip (default: false) - use or not cvv number (cvv always fill on manually)
     * @param suppressManual (default: false) - not sure how it works... Nothing happens for me, when i try
     * @param suppressConfirm (default: false) - not sure how it works... Nothing happens for me, when i try
     * @param hideLogo (default: true) - not sure how it works... Nothing happens for me, when i try
     **/
    $cordovaNgCardIOProvider.setScanerConfig(
      {
             "expiry": true,
             "cvv": true,
             "zip": false,
             "suppressManual": false,
             "suppressConfirm": false,
             "hideLogo": true
      }
    );
```

- ```javascript
 $cordovaNgCardIOProvider.setCardIOResponseFields()
 /**
  * Create config of fields which will return after scanning.
  * Use in config block of your app.
  * You can pass, only fields which values you want to get back in response.
  **/
 ```

```javascript
    /**
     *Default response fields:
     *
     * @param card_type - will return a string with name of card type ("Visa", "MasterCard", etc)
     * @param card_number - will return a string with full card number (1234567890123456)
     * @param redacted_card_number - will return a string with masked card number - format depend on card type ("1XXXXXXXXXXXX789", "XXXXXXXXXXXXX6789")
     * @param expiry_month - will return a month of expire date (01, 02, 03, ... 11, 12)
     * @param expiry_year - will return an year of expire date (2016, 2017, ...)
     * @param short_expiry_year - will return a short year format of expire date (16, 17 ...)
     * @param cvv - will return cvv
     * @param zip - will return zip
     **/
    $cordovaNgCardIOProvider.setCardIOResponseFields(
      [
            "card_type",
            "redacted_card_number",
            "card_number",
            "expiry_month",
            "expiry_year",
            "short_expiry_year",
            "cvv",
            "zip"
          ]
    );
````

```javascript
 $cordovaNgCardIO.canCard()
 /**
  * Starting scan dialog.
  * Return a promise.
  *
  * Plugin request access to camera
  * If we will allow plugin will use camera to scan our card
  * If we will not allow plugin will use manually entering of data
  * If Plugin could not scan some data, he will ask us to enter this data
  * Cvv always entering manually
  **/
```

```javascript
     $cordovaNgCardIO.scanCard()
        .then(function (response) {
                //Success response - it`s an object with card data
              },
              function (response) {
                //We will go there only when user cancel a scanning.
                //response always null
              }
        );
```
