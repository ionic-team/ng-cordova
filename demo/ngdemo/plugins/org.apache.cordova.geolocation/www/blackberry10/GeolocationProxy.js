/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var idsMap = {},
    geo = cordova.require('cordova/modulemapper').getOriginalSymbol(window, 'navigator.geolocation');

module.exports = {

    getLocation: function(success, error, args) {
        var successCallback = function (result) {
            var pos = result.coords;
            pos.timestamp = result.timestamp;
            if (success) {
                success(pos);
            }
        };
        geo.getCurrentPosition(successCallback, error, {
            enableHighAccuracy: args[0],
            maximumAge: args[1]
        });
    },

    addWatch: function(success, error, args) {
        var id = args[0],
            successCallback = function (result) {
                var pos = result.coords;
                pos.timestamp = result.timestamp;
                if (success) {
                    success(pos);
                }
            },
            nativeId = geo.watchPosition(successCallback, error, {
                enableHighAccuracy: args[1]
            });
        idsMap[id] = nativeId;
    },

    clearWatch: function(success, error, args) {
        var id = args[0];
        if(id in idsMap) {
            geo.clearWatch(idsMap[id]);
            delete idsMap[id];
        }
        if(success) {
            success();
        }
    }

};

require("cordova/exec/proxy").add("Geolocation", module.exports);
