#!/bin/bash

function ap {
  cordova plugin add org.apache.cordova.$1
}

ap console
ap device
ap camera
ap vibration
ap network-information
ap file
ap geolocation
ap dialogs
ap device-motion
ap splashscreen
ap device-orientation
ap contacts
ap statusbar
cordova plugin add https://github.com/driftyco/ionic-plugins-keyboard
cordova plugin add https://github.com/wildabeast/BarcodeScanner.git 
