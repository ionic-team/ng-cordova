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

function takePicture(success, error, opts) {
    var pick = new MozActivity({
        name: "pick",
        data: {
            type: ["image/*"]
        }
    });

    pick.onerror = error || function() {};

    pick.onsuccess = function() {
        // image is returned as Blob in this.result.blob
        // we need to call success with url or base64 encoded image
        if (opts && opts.destinationType == 0) {
            // TODO: base64
            return;
        }
        if (!opts || !opts.destinationType || opts.destinationType > 0) {
            // url
            return success(window.URL.createObjectURL(this.result.blob));
        }
    };
}

module.exports = {
    takePicture: takePicture,
    cleanup: function(){}
};

require("cordova/firefoxos/commandProxy").add("Camera", module.exports);
