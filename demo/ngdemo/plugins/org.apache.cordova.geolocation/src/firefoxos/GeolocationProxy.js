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
           
// latest geolocation spec can be found here: http://www.w3.org/TR/geolocation-API/

var idsMap = {};

module.exports = {
    getLocation: function(success, error, args) {
        var geo = cordova.require('cordova/modulemapper').getOriginalSymbol(window, 'navigator.geolocation');
        function successCallback(position) {
          // Cordova is creating Position object using just coords
          success(position.coords);
        }
        geo.getCurrentPosition(successCallback, error, {
            enableHighAccuracy: args[0],
            maximumAge: args[1]
        });
    },

    addWatch: function(success, error, args) {
        var geo = cordova.require('cordova/modulemapper').getOriginalSymbol(window, 'navigator.geolocation');        
        var id = args[0];
        var nativeId = geo.watchPosition(success, error, {
            enableHighAccuracy: args[1]
        });

        idsMap[id] = nativeId;
    },

    clearWatch: function(success, error, args) {
        var geo = cordova.require('cordova/modulemapper').getOriginalSymbol(window, 'navigator.geolocation');
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

require("cordova/firefoxos/commandProxy").add("Geolocation", module.exports);
