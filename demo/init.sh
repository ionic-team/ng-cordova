#!/bin/bash

function ap {
  cordova plugin add org.apache.cordova.$1
}

ap camera
ap console
ap contacts
ap device
ap dialogs
ap device-motion
ap device-orientation
ap network-information
ap geolocation
ap globalization
ap file
ap splashscreen
ap statusbar
ap vibration
ap media
ap inappbrowser
ap battery-status

#read appID
#read appName
cordova plugin add https://github.com/Wizcorp/phonegap-facebook-plugin.git  #--variable APP_ID="$appID" --variable APP_NAME="$appName"
cordova plugin add https://github.com/driftyco/ionic-plugins-keyboard          # keyboard
cordova plugin add https://github.com/VitaliiBlagodir/cordova-plugin-datepicker.git    # date-picker
cordova plugin add https://github.com/wildabeast/BarcodeScanner.git     # barcode scanner
cordova plugin add https://github.com/chrisekelley/AppPreferences       # app preferences
cordova plugin add https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin.git    # flashlight
cordova plugin add https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin.git         # toast
cordova plugin add uk.co.ilee.touchid       # touchID
cordova plugin add https://github.com/pushandplay/cordova-plugin-apprate.git    # AppRate
cordova plugin add https://github.com/katzer/cordova-plugin-local-notifications.git
