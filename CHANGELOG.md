### 0.1.3-alpha (06-11-2014)


#### NEW

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

----

### 0.1.2-alpha (06-11-2014)

#### NEW

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


#### FEATURES

- Progress event to **File Plugin** `upload()` + `download()`
- More commands in **Push Notification plugin**
- Handle `Connection.NONE` in **Network Information Plugin**  for is`Offline()`
- Use `notify` not `resolve` with `watchHeading`


#### FIXES

- Remove options in **BarcodeScanner** : `scan()`
- Remove options in **Device Motion** : `getCurrentAcceleration()`


----
 
### 0.1.1-alpha (06-03-2014)

#### NEW
- StatusBar

#### FIXES
- Renamed Accelerometer and Compass to deviceMotion and deviceOrientation, respectively

----

### 0.1.0-alpha (06-03-2014)

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
