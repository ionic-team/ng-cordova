# 0.1.11-alpha (01-15-2014)

### New
- **NPM** - deploy new versions using Travis 081a23f
- **FileOpener2 plugin** - created module and factory for fileOpener2 plugin 08970d0
- **inAppBrowser plugin** - refractor into a provider to set default options + override default options in `open()` method daeedd1 8d9e7fb
- **File Transfer plugin** - refractor out FileTransfer plugin from **File plugin** into its own module 11717fc
- **Local Notification** - added ` registerPermission()` method for iOS 8 742d961cfd91a19998029aa51d25602387cb4e29
- **OAuth** -Magento, ADFS, Vkontakte support   8bb4198


### Fix
- **ProgressIndicator** - add the `show()` method that exists for android. show expects one parameter which is the indicator message 67f5f0d f5b220f
- **OAuth** - fix promise resolve #544 e0b2457
- **OAuth** -  `close()` browser only after login promise is complete 8bb4198
- **Push Notification** - `onNotification` check + replace `$rootscope.$apply()` with `$timeout` to avoid '$digest already in progress' error 1cb428a
- **Network** -  improve eventListener auto initialized the eventListeners for `offline`, `online`. 8272f28 0c8c0fd 579c18f
- **Network** -  replace `$apply()` with `$timeout()` for online and offline events d0028aa
- **Social Sharing** -add `shareViaFacebookWithPasteMessageHint` method a5df9db
- **localNotification** - replace `$rootscope.$apply()` with `$timeout()` to avoid $digest error for events 743ce58
- **Battery Status** - remove isolated `$rootScope.$new()` and replace with DI injection + check if plugin is installed. If installed, start EventListeners 0c6de57
- **Battery Status** - refractor out anonymous functions for better memory management + wrap `$broadcast` calls in a `$timeout` function to ensure `$rootscope.$apply()` occurs 600b30e


### Demo
- **Facebook** - FB variables to init.sh d0575a7
- **Contacts** - add contacts da92644
- **localNotification** - add detailed localNotification  da92644


### Breaking Changes
- **Network** - standardise $broadcast naming 3566b7b
- **Push Notification** - standardise $broadcast naming dda9e80
- **Battery Status** - standardise $broadcast naming 6b6739f
- **Local Notifications** -standardize $broadcast naming 742d961
- **InAppBrowser** - rename `loadstart`, `loadstop`, `loaderror`, `exit` to `$cordovaInAppBrowser:[event]` for standardisation + refractor to `$rootScope.$broadcast()` to avoid new isolated scope dea2b8e
- **InAppBrowser** - remove `init()` function - refractor into `$cordovaInAppBrowserProvider.setDefaultOptions(options)` dea2b8e

##### Network
Before
```javascript
$rootScope.$on('networkOffline', function(e,state));
$rootScope.$on('networkOnline', function(e,state));
```

Now
```javascript
$rootScope.$on('$cordovaNetwork:offline', function(e,state));
$rootScope.$on('$cordovaNetwork:online', function(e,state));
```


##### Push Notifications
Before
```javascript
$rootScope.$on('pushNotificationReceived', function(e,state));
```

Now
```javascript
$rootScope.$on('$cordovaPush:notificationReceived', function(e,notification));
```

##### Battery Status
Before
```javascript
$cordovaBatteryStatus.$on('batterystatus', function(e,status));
$cordovaBatteryStatus.$on('batterycritical', function(e,status));
$cordovaBatteryStatus.$on('batterylow', function(e,status));
```

Now
```javascript
$rootScope.$on('$cordovaBatteryStatus:status', function(e,status));
$rootScope.$on('$cordovaBatteryStatus:critical', function(e,status));
$rootScope.$on('$cordovaBatteryStatus:low', function(e,status));
```

##### Local Notification
Before
```javascript
$rootScope.$on("localNotification:canceled", function(e,notification));
$rootScope.$on("localNotification:clicked", function(e,notification));
$rootScope.$on("localNotification:triggered", function(e,notification));
$rootScope.$on("localNotification:added", function(e,notification));
```

Now
```javascript
$rootScope.$on("$cordovaLocalNotification:canceled", function(e,notification));
$rootScope.$on("$cordovaLocalNotification:clicked", function(e,notification));
$rootScope.$on("$cordovaLocalNotification:triggered", function(e,notification));
$rootScope.$on("$cordovaLocalNotification:added", function(e,notification));
```

##### In App Browser
Before
```javascript
inApp.$on('loadstart', function(e, event));
inApp.$on('loadstop', function(e, event));
inApp.$on('loaderror', function(e, event));
inApp.$on('exit', function(e, event));

$cordovaInAppBrowser.init(options);
```

Now
```javascript
$rootScope.$on('$cordovaInAppBrowser:loadstart', function(e, event));
$rootScope.$on('$cordovaInAppBrowser:loadstop', function(e, event));
$rootScope.$on('$cordovaInAppBrowser:loaderror', function(e, event));
$rootScope.$on('$cordovaInAppBrowser:exit', function(e, event));

$cordovaInAppBrowserProvider.setDefaultOptions(options);
```

##### File Plugin
Before
```javascript
$cordovaFile.uploadFile(...)
$cordovaFile.downloadFile(...)
```

Now
```javascript
$cordovaFileTransfer.upload(...)
$cordovaFileTransfer.download(...)
```


# 0.1.10-alpha (01-4-2014)

This is a relatively small release to reflect more changes to the **FB plugin**. Important additions were made the **network plugin**, which now provides the ability to watch for `online` and `offline` events.

> NOTE: **ngCordova** is arriving at a very stable level and we hope to release the first **BETA** version in the next few weeks, after we complete some important fixes to the **file plugin**, **push notifications** and **local notifications** plugins. Expect 1 - 2 more **ALPHA** releases with changes made to these plugins, and send me an email  @ paolo.enrico.bernasconi@gmail.com if you would like to help test these plugins.

### NEW

- **Network Plugin** : adding `$on('online')`, `$on('offline')` events 3cccfe409b44710e9677a3d9434b3efe346e6379
- **0Auth** : salesforce + strava support e0795ce 
- **Facebook** : make more compliant with original plugin and remove unnecessary `init()` from login method. 64b5aa8036d23dd768a2b47c21e760871feb94dd  2218c4d
- **mocks** : better file plugin 2404142 78e9410  8bac9eb
- **docs**: ability to search plugins

### Fix
- **0Auth** : add code to handle cancel / exit events in the oauth browser flow  4d93e12
- **Keychain** : check if keychain exists before instantiating  7684643


### Breaking Changes

**Facebook Plugin:** (only relevant for browser testing)

**Before**
```
.config(function () {
  $cordovaFacebookProvider.setAppID(appID, version);
});

```

**After**
```
.config(function () {
  $cordovaFacebookProvider. browserInit(12345678, "v2.0")
});
```




# 0.1.9-alpha (12-22-2014)

A new release to reflect a few changes made to the docs and code respectively. Mainly `v0.1.9-alpha` has been released to fix the AngularJS dependency issue, which now resolves to anything higher than `v1.2.23`.

### NEW

- **MAJOR docs refractor**
- **Brightness** plugin
- **App Version** plugin
- **ActionSheet** plugin
- **Email Composer** plugin
- **Image Picker** plugin


### Fix
- **App** Rate plugin: add dep injection
- **Media** plugin: reduce promisifcation
- **StatusBar** : `isVisible` is not a method, but a value
- **Bower** -- update dependency to `>= 1.2.23`


# 0.1.8-alpha (12-11-2014)

### NEW
- **App Rate** plugin
- **In App Browser** plugin
- **HTTPd** plugin
- **Video Capture Plus** plugin
- **GoogleAds** plugin
- **FacebookAds** plugin
- **FlurryAds** plugin
- **iAd** plugin
- **mMediaAds** plugin
- **mobfoxAds** plugin
- **mopubAds** plugin
- **0Auth** - twitter, reddit, foresquare support
- **Date Picker** - Insert default options on datePicker

### FIXES
- **Module** - add zip plugin injection dependency
- **Push Notification** - 	wrapping $broadcast in an $apply() statement to bring notification into scope
- **Local Notification** -  Updated localNotification wrapper with hasPermission and promptForPermission methods
- **Bluetooth Serial** - fix callback from `resolve` to `notify` for constant updates
- **File** - add timeout option to upload

### Breaking Changes

Changes were made to the promisification of `geolocation`, `deviceOrientation` and `deviceMotion` plugin `watch` methods.

**Before**:
```
watch = $cordovaDeviceMotion.watchAcceleration(options);

watch.promise.then(
     function() {/* unused */},
     function(err) {},
     function(acceleration) {
});

$cordovaDeviceMotion.clearWatch(watch.watchID);
```

**Now**:
```
watch = $cordovaDeviceMotion.watchAcceleration(options).then(
     function() {/* unused */},
     function(err) {},
     function(acceleration) {
});

watch.clear();
// or
$cordovaDeviceMotion.clearWatch(watch);
```

The same goes for `geolocation` and `DeviceOrientation`.






# 0.1.7-alpha (11-05-2014)

This is a micro-release to fix the issue with `bower` installing `v0.1.5-alpha`, resolving #418.

### New
- **Demo** - FB web-dev api is now working ec053ad  71d3961
- **PushNotifications** - 	Angular event broadcast for push notifications  da0ef69
- **Contact* - new `pickContact` method 01319b853da56eeb7893abc93fb1ebbb2bb9fbe7

### Fixes
- **Printer** - fix `isAvailable` method + promise for `print` method  ef452ed




# 0.1.6-alpha (10-30-2014)

This is a small release to reflect a few fixes in the **Facebook plugin**. The docs at [ngcordova.com/docs](http://ngcordova.com/docs) are now aligned with the fixes made.

### New

- [Bluetooth Low Energy plugin]() 7540bf2
- [Badge plugin](https://github.com/katzer/cordova-plugin-badge) 69fe14f
- AuthO plugin (web based) c775650
- AppRating plugin (still in development) 9aead73


### Fixes

- **Facebook** - refractor appID 48cb327
- **Facebook** - add version parameter to setAppID method	 0e6f7b1
- **Flashlight** - add toggle method 0e24273
- **Spinner Dialog** -  add `fixed` parameter to stop touch from removing spinner dialog d1a01df


# 0.1.5-alpha (10-17-2014)

The Facebook Plugin is now supported with many new plugins added and bugs fixed!

### Highlights

**FB plugin** - The highly demanded Facebook plugin now has docs and a working example in the demo file of ngCordova.

**TouchID** - Add iOS TouchID authentication to your apps easily with the touchid plugin. See the demo app for a working example.

**Travis CI testing** - We've integrated ngCordova into TravisCI, and have builds tested on each commit.

### New

- [TouchID plugin](https://github.com/leecrossley/cordova-plugin-touchid)
- [ZIP plugin](https://github.com/MobileChromeApps/zip)
- [Calendar plugin](https://github.com/apache/cordova-plugin-contacts)
- [Google Analytics plugin](https://github.com/phonegap-build/GAPlugin)
- Date Picker now has promises
- PinDialog now has promises
- Replacing javascript `window` with angular `$window`
- Testing for many plugins (check the /test folder)

### Fix

- Dialogs plugin : fixed prompt and confirm methods to return button index and input (if exists)
- Keychain : fix issue where keychain is not initialized properly
- StatusBar : fix the method overlaysWebView to honour the boolean param
- Remove ngCordova.min.js from bower for better grunt integration
- Fixes to the File Plugin (more fixes coming soon)




# 0.1.4-alpha (09-08-2014)

### New

- [Progress Indicator plugin](http://pbernasconi.github.io/cordova-progressIndicator/)  d70f387
- [Clipboard plugin](https://github.com/VersoSolutions/CordovaClipboard) f54bdc8
- [SMS plugin](https://github.com/aharris88/phonegap-sms-plugin)
- [Bluetooth Serial plugin](https://github.com/don/BluetoothSerial)
- [AdMob Plugin](https://github.com/floatinghotpot/cordova-plugin-admob)
- [Background Geolocation Plugin](https://github.com/christocracy/cordova-plugin-background-geolocation)
- [Facebook Connect Plugin](https://github.com/Wizcorp/phonegap-facebook-plugin)
- [Printer Plugin](https://github.com/katzer/cordova-plugin-printer)
- [Native Audio Plugin](https://github.com/SidneyS/cordova-plugin-nativeaudio) 96f4570
- [Media plugin](https://github.com/apache/cordova-plugin-media) a235517
- [Battery Status plugin](org.apache.cordova.battery-status) 897dd65
- [Keychain plugin](https://github.com/shazron/KeychainPlugin)
- [Date Picker plugin](https://github.com/VitaliiBlagodir/cordova-plugin-datepicker)



### Fixes

- **Dialogs** - Adding promise support
- **Device Orientation** - Fixed compass.clearWatch missing the watchID parameter 9367bcf
- **Globalization** - Added more methods and endpoints 786ec67
- **Globalization** - Fixed unnecessary options parameter 4379b81e791c8aefa71ba84fe65cb6ef70b62a7c
- **File** - Adding writeFile logic for "file" plugin 46bd8b7
- **File** - Added relative path and filename	fbd2e9d
- **File** - New methods for ReasAs [text, DataURL, BinaryString, ArrayBuffer] 0b30ba1
- **Printer** - Adding promise support
-  **Social Sharing** - Added the (most important) `share` function
-  **Social Sharing** - Renamed SMS phonenr param to indicate you can pass multiple by separating by a comma
-  **Social Sharing** - Renamed all image params to file, because any file can be shared
-  **Social Sharing** - Fixed `shareViaEmail`, because it was an unadjusted copy-paste of `shareViaSMS`
-  **Social Sharing** - Added `shareVia`
-  **Social Sharing** - Added `canShareViaEmail`
-  **Social Sharing** - Fixed `canShareVia` (subject was missing)
-  **Social Sharing** - Removed some now obsolete TODO's/notes

### New

- A new side-menu for quick navigation

- Flashlight plugin
- Progress Indicator plugin
- AdMob plugin
- AppAvailability plugin
- Battery Status plugin
- Clipboard plugin
- Keychain plugin
- Media plugin
- Printer Plugin
- Contributing guidelines
- CHANGELOG.md

### Demo
- **Completely new demos** with many new plugins 49d991f
- Quick-view the source code in the app
- Flashlight plugin
- Statusbar plugin
- Preferences plugin
- Barcode Scanner plugin

### Other
- **ng-cordova-mocks** - Mock are now in ngCordova! Documentation is **coming soon**, with examples in the demo too
- Adding js-lint testing in gulp 72e513b
- Adding .editorconfig for better contributing
- Fix bower.js file and bower install ngCordova



# 0.1.3-alpha (06-11-2014)

### NEW
 - API Change for Geolocation, DeviceMotion, and DeviceOrientation plugins. They now return an object of the form:
```javascript
{
  promise: deferrable,
  watchId: watchId
}
```

Where promise is the internal promise, and watchId is the watchId that can be used to clear the watch later.

 - [Capture](https://github.com/apache/cordova-plugin-media-capture) plugin
 - [Flashlight](https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin) plugin
 - [AppAvailability](https://github.com/ohh2ahh/AppAvailability) plugin
 - Cordova preferences plugin

And lots of fixes!



# 0.1.2-alpha (06-11-2014)

### NEW

- Bower support
- File Plugin
- Globalization plugin.
- Google Analytics plugin
- Local Notifications Plugin
- Pin Dialog plugin
- Push Notifications plugin
- Social Sharing plugin
- Spinner Dialog plugin
- SQLite Plugin
- Toast Plugin


### FEATURES

- Progress event to **File Plugin** `upload()` + `download()`
- More commands in **Push Notification plugin**
- Handle `Connection.NONE` in **Network Information Plugin**  for is`Offline()`
- Use `notify` not `resolve` with `watchHeading`


### FIXES

- Remove options in **BarcodeScanner** : `scan()`
- Remove options in **Device Motion** : `getCurrentAcceleration()`




# 0.1.1-alpha (06-03-2014)

### NEW
- StatusBar

### FIXES
- Renamed Accelerometer and Compass to deviceMotion and deviceOrientation, respectively



# 0.1.0-alpha (06-03-2014)

ngCordova is ready for some bleeding edge testing. So far we support the following Cordova plugins:

- org.apache.cordova.console
- org.apache.cordova.device
- org.apache.cordova.camera
- org.apache.cordova.vibration
- org.apache.cordova.network-information
- org.apache.cordova.geolocation
- org.apache.cordova.dialogs
- org.apache.cordova.device-motion
- org.apache.cordova.splashscreen
- org.apache.cordova.device-orientation
- org.apache.cordova.contacts
- https://github.com/driftyco/ionic-plugins-keyboard
- https://github.com/wildabeast/BarcodeScanner


Give it a try, and please report lots of issues and contribute PRs. :icecream:
