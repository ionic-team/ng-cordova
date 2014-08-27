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

/*
  Network API overview: http://www.w3.org/TR/netinfo-api/
  and http://w3c.github.io/netinfo/
*/

var cordova = require('cordova'),
    Connection = require('./Connection'),
    modulemapper = require('cordova/modulemapper');

var origConnection = modulemapper.getOriginalSymbol(window, 'navigator.connection');

module.exports = {

  getConnectionInfo: function(successCallback, errorCallback) {
    var connection = origConnection || navigator.mozConnection,
      connectionType = Connection.UNKNOWN,
      bandwidth = connection.bandwidth,
      metered = connection.metered,
      type = connection.type;

    if (type != undefined) {
      // For more information see:
      // https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API

      switch(type) {
        case "cellular":
          connectionType = Connection.CELL;
          break;
        case "ethernet":
          connectionType = Connection.ETHERNET;
          break;
        case "wifi":
          connectionType = Connection.WIFI;
          break;
        case "none":
          connectionType = Connection.NONE;
          break;
      }
    } else if (bandwidth != undefined && metered != undefined) {
      /*
      bandwidth of type double, readonly
      The user agent must set the value of the bandwidth attribute to:
      0 if the user is currently offline;
      Infinity if the bandwidth is unknown;
      an estimation of the current bandwidth in MB/s (Megabytes per seconds)
      available for communication with the browsing context active document's
      domain.

      For more information see:
      https://developer.mozilla.org/en-US/docs/Web/API/Connection
      */

      if (bandwidth === 0) {
        connectionType = Connection.NONE;
      } else if (metered && isFinite(bandwidth)) {
        connectionType = Connection.CELL;
      } else if (!metered && isFinite(bandwidth)) {
        connectionType = Connection.WIFI;
      }
    }

    setTimeout(function() {
      successCallback(connectionType);
    }, 0);
  }
};

require("cordova/firefoxos/commandProxy").add("NetworkStatus", module.exports);