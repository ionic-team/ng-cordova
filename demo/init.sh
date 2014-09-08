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
ap file
ap splashscreen
ap statusbar
ap vibration
cordova plugin add https://github.com/driftyco/ionic-plugins-keyboard
cordova plugin add https://github.com/VitaliiBlagodir/cordova-plugin-datepicker.git
cordova plugin add https://github.com/wildabeast/BarcodeScanner.git
cordova plugin add https://github.com/chrisekelley/AppPreferences
cordova plugin add https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin.git
cordova plugin add https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin.git
