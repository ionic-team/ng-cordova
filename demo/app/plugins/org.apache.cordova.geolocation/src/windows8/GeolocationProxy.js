/*
 * Copyright 2013 Research In Motion Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var PositionError = require('./PositionError'),
    ids = {},
    loc;

function ensureLocator() {
    if (loc == null)
        loc = new Windows.Devices.Geolocation.Geolocator();

    return loc;
}

function createErrorCode() {
    switch (loc.locationStatus) {
        case Windows.Devices.Geolocation.PositionStatus.initializing:
            // This status indicates that a location device is still initializing
        case Windows.Devices.Geolocation.PositionStatus.noData:
            // No location data is currently available 
        case Windows.Devices.Geolocation.PositionStatus.notInitialized:
            // This status indicates that the app has not yet requested
            // location data by calling GetGeolocationAsync() or 
            // registering an event handler for the positionChanged event. 
        case Windows.Devices.Geolocation.PositionStatus.notAvailable:
            // Location is not available on this version of Windows
            return PositionError.POSITION_UNAVAILABLE;

        case Windows.Devices.Geolocation.PositionStatus.disabled:
            // The app doesn't have permission to access location,
            // either because location has been turned off.
            return PositionError.PERMISSION_DENIED;

        default:
            break;
    }
}

module.exports = {
    getLocation: function (success, fail, args, env) {
        ensureLocator();
        if (loc != null)
        {
            var highAccuracy = args[0],
                maxAge = args[1];

            loc.desiredAccuracy = highAccuracy ?
                Windows.Devices.Geolocation.PositionAccuracy.high :
                Windows.Devices.Geolocation.PositionAccuracy.default;

            loc.reportInterval = maxAge ? maxAge : 0;

            loc.getGeopositionAsync().then(
                function (pos) {
                    success({
                        latitude: pos.coordinate.latitude,
                        longitude: pos.coordinate.longitude,
                        altitude: pos.coordinate.altitude,
                        accuracy: pos.coordinate.accuracy,
                        heading: pos.coordinate.heading,
                        velocity: pos.coordinate.speed,
                        altitudeAccuracy: pos.coordinate.altitudeAccuracy,
                        timestamp: pos.coordinate.timestamp
                    });
                },
                function (err) {
                    fail({
                        code: createErrorCode(),
                        message: err.message
                    });
                }
            );
        }
        else
        {
            fail({
                code: PositionError.POSITION_UNAVAILABLE,
                message: "You do not have the required location services present on your system."
            });
        }
    },

    addWatch: function (success, fail, args, env) {
        ensureLocator();
        var clientId = args[0],
            highAccuracy = args[1],

            onPositionChanged = function (e) {
                success({
                    latitude: e.position.coordinate.latitude,
                    longitude: e.position.coordinate.longitude,
                    altitude: e.position.coordinate.altitude,
                    accuracy: e.position.coordinate.accuracy,
                    heading: e.position.coordinate.heading,
                    velocity: e.position.coordinate.speed,
                    altitudeAccuracy: e.position.coordinate.altitudeAccuracy,
                    timestamp: e.position.coordinate.timestamp
                });
            },

            onStatusChanged = function (e) {
                switch (e.status) {
                    case Windows.Devices.Geolocation.PositionStatus.noData:
                    case Windows.Devices.Geolocation.PositionStatus.notAvailable:
                        fail({
                            code: PositionError.POSITION_UNAVAILABLE,
                            message: "Data from location services is currently unavailable or you do not have the required location services present on your system."
                        });
                        break;

                    case Windows.Devices.Geolocation.PositionStatus.disabled:
                        fail({
                            code: PositionError.PERMISSION_DENIED,
                            message: "Your location is currently turned off."
                        });
                        break;

                    case Windows.Devices.Geolocation.PositionStatus.initializing:
                    case Windows.Devices.Geolocation.PositionStatus.ready:
                    default:
                        break;
                }
            };

        loc.desiredAccuracy = highAccuracy ?
                Windows.Devices.Geolocation.PositionAccuracy.high :
                Windows.Devices.Geolocation.PositionAccuracy.default;

        loc.addEventListener("positionchanged", onPositionChanged);
        loc.addEventListener("statuschanged", onStatusChanged);

        ids[clientId] = { pos: onPositionChanged, status: onStatusChanged };
    },

    clearWatch: function (success, fail, args, env) {
        var clientId = args[0],
            callbacks = ids[clientId];

        if (callbacks) {
            loc.removeEventListener("positionchanged", callbacks.pos);
            loc.removeEventListener("statuschanged", callbacks.status);

            delete ids[clientId];
        }

        success && success();
    }
};

require("cordova/exec/proxy").add("Geolocation", module.exports);
