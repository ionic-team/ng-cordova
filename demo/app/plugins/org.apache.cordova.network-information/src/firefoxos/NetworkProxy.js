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
  Network API overview: http://dvcs.w3.org/hg/dap/raw-file/tip/network-api/Overview.html

*/


var cordova = require('cordova');

module.exports = {                                    
    
    var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection; 
    
    getConnectionInfo: function (win, fail, args) {      
        /*
        bandwidth of type double, readonly
        The user agent must set the value of the bandwidth attribute to:
            0 if the user is currently offline;
            Infinity if the bandwidth is unknown;
            an estimation of the current bandwidth in MB/s (Megabytes per seconds) available for communication with the browsing context active document's domain.
        */
        win(connection.bandwidth);
    },  
    
    isMetered: function (win, fail, args) {  
        /*
        readonly attribute boolean metered
            A connection is metered when the user's connection is subject to a limitation from his Internet Service Provider strong enough to request web applications to be careful with the bandwidth usage.

            What is a metered connection is voluntarily left to the user agent to judge. It would not be possible to give an exhaustive list of limitations considered strong enough to flag the connection as metered and even if doable, some limitations can be considered strong or weak depending on the context.
            Examples of metered connections are mobile connections with a small bandwidth quota or connections with a pay-per use plan.
            The user agent MUST set the value of the metered attribute to true if the connection with the browsing context active document's domain is metered and false otherwise. If the implementation is not able to know the status of the connection or if the user is offline, the value MUST be set to false.

            If unable to know if a connection is metered, a user agent could ask the user about the status of his current connection.
        */
        win(connection.metered);
    }
};

require("cordova/firefoxos/commandProxy").add("Network", module.exports);