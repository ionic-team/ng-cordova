<!---
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
-->

# org.apache.cordova.geolocation

This plugin provides information about the device's location, such as
latitude and longitude. Common sources of location information include
Global Positioning System (GPS) and location inferred from network
signals such as IP address, RFID, WiFi and Bluetooth MAC addresses,
and GSM/CDMA cell IDs. There is no guarantee that the API returns the
device's actual location.

This API is based on the
[W3C Geolocation API Specification](http://dev.w3.org/geo/api/spec-source.html),
and only executes on devices that don't already provide an implementation.

__WARNING__: Collection and use of geolocation data
raises important privacy issues.  Your app's privacy policy should
discuss how the app uses geolocation data, whether it is shared with
any other parties, and the level of precision of the data (for
example, coarse, fine, ZIP code level, etc.).  Geolocation data is
generally considered sensitive because it can reveal user's
whereabouts and, if stored, the history of their travels.
Therefore, in addition to the app's privacy policy, you should
strongly consider providing a just-in-time notice before the app
accesses geolocation data (if the device operating system doesn't do
so already).  That notice should provide the same information noted
above, as well as obtaining the user's permission (e.g., by presenting
choices for __OK__ and __No Thanks__).  For more information, please
see the Privacy Guide.

## Installation

    cordova plugin add org.apache.cordova.geolocation

### Firefox OS Quirks

Create __www/manifest.webapp__ as described in 
[Manifest Docs](https://developer.mozilla.org/en-US/Apps/Developing/Manifest).
Add permisions: 

    "permissions": {
		"geolocation": { "description": "Used to position the map to your current position" }
	}

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry 10
- Firefox OS
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

## Methods

- navigator.geolocation.getCurrentPosition
- navigator.geolocation.watchPosition
- navigator.geolocation.clearWatch

## Objects (Read-Only)

- Position
- PositionError
- Coordinates

## navigator.geolocation.getCurrentPosition

Returns the device's current position to the `geolocationSuccess`
callback with a `Position` object as the parameter.  If there is an
error, the `geolocationError` callback is passed a
`PositionError` object.

    navigator.geolocation.getCurrentPosition(geolocationSuccess,
                                             [geolocationError],
                                             [geolocationOptions]);

### Parameters

- __geolocationSuccess__: The callback that is passed the current position.

- __geolocationError__: _(Optional)_ The callback that executes if an error occurs.

- __geolocationOptions__: _(Optional)_ The geolocation options.


### Example

    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    //
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

## navigator.geolocation.watchPosition

Returns the device's current position when a change in position is detected.
When the device retrieves a new location, the `geolocationSuccess`
callback executes with a `Position` object as the parameter.  If
there is an error, the `geolocationError` callback executes with a
`PositionError` object as the parameter.

    var watchId = navigator.geolocation.watchPosition(geolocationSuccess,
                                                      [geolocationError],
                                                      [geolocationOptions]);

### Parameters

- __geolocationSuccess__: The callback that is passed the current position.

- __geolocationError__: (Optional) The callback that executes if an error occurs.

- __geolocationOptions__: (Optional) The geolocation options.

### Returns

- __String__: returns a watch id that references the watch position interval. The watch id should be used with `navigator.geolocation.clearWatch` to stop watching for changes in position.

### Example

    // onSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                            'Longitude: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    // Options: throw an error if no update is received every 30 seconds.
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });


## geolocationOptions

Optional parameters to customize the retrieval of the geolocation
`Position`.

    { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };

### Options

- __enableHighAccuracy__: Provides a hint that the application needs the best possible results. By default, the device attempts to retrieve a `Position` using network-based methods. Setting this property to `true` tells the framework to use more accurate methods, such as satellite positioning. _(Boolean)_

- __timeout__: The maximum length of time (milliseconds) that is allowed to pass from the call to `navigator.geolocation.getCurrentPosition` or `geolocation.watchPosition` until the corresponding `geolocationSuccess` callback executes. If the `geolocationSuccess` callback is not invoked within this time, the `geolocationError` callback is passed a `PositionError.TIMEOUT` error code. (Note that when used in conjunction with `geolocation.watchPosition`, the `geolocationError` callback could be called on an interval every `timeout` milliseconds!) _(Number)_

- __maximumAge__: Accept a cached position whose age is no greater than the specified time in milliseconds. _(Number)_

### Android Quirks

Android 2.x emulators do not return a geolocation result unless the `enableHighAccuracy` option is set to `true`.

## navigator.geolocation.clearWatch

Stop watching for changes to the device's location referenced by the
`watchID` parameter.

    navigator.geolocation.clearWatch(watchID);

### Parameters

- __watchID__: The id of the `watchPosition` interval to clear. (String)

### Example

    // Options: watch for changes in position, and use the most
    // accurate position acquisition method available.
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { enableHighAccuracy: true });

    // ...later on...

    navigator.geolocation.clearWatch(watchID);

## Position

Contains `Position` coordinates and timestamp, created by the geolocation API.

### Properties

- __coords__: A set of geographic coordinates. _(Coordinates)_

- __timestamp__: Creation timestamp for `coords`. _(Date)_

## Coordinates

A `Coordinates` object is attached to a `Position` object that is
available to callback functions in requests for the current position.
It contains a set of properties that describe the geographic coordinates of a position.

### Properties

* __latitude__: Latitude in decimal degrees. _(Number)_

* __longitude__: Longitude in decimal degrees. _(Number)_

* __altitude__: Height of the position in meters above the ellipsoid. _(Number)_

* __accuracy__: Accuracy level of the latitude and longitude coordinates in meters. _(Number)_

* __altitudeAccuracy__: Accuracy level of the altitude coordinate in meters. _(Number)_

* __heading__: Direction of travel, specified in degrees counting clockwise relative to the true north. _(Number)_

* __speed__: Current ground speed of the device, specified in meters per second. _(Number)_

###  Amazon Fire OS Quirks

__altitudeAccuracy__: Not supported by Android devices, returning `null`.

### Android Quirks

__altitudeAccuracy__: Not supported by Android devices, returning `null`.

## PositionError

The `PositionError` object is passed to the `geolocationError`
callback function when an error occurs with navigator.geolocation.

### Properties

- __code__: One of the predefined error codes listed below.

- __message__: Error message describing the details of the error encountered.

### Constants

- `PositionError.PERMISSION_DENIED`
  - Returned when users do not allow the app to retrieve position information. This is dependent on the platform.
- `PositionError.POSITION_UNAVAILABLE`
  - Returned when the device is unable to retrieve a position. In general, this means the device is not connected to a network or can't get a satellite fix.
- `PositionError.TIMEOUT`
  - Returned when the device is unable to retrieve a position within the time specified by the `timeout` included in `geolocationOptions`. When used with `navigator.geolocation.watchPosition`, this error could be repeatedly passed to the `geolocationError` callback every `timeout` milliseconds.
