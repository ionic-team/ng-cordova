
# 0.1.4-alpha (09-08-2014)

### Plugins

#### New

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



#### Fixes

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



### Docs


#### New

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
