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
module.exports = {
    setSandbox : function (success, fail, args, env) {
        require("lib/webview").setSandbox(JSON.parse(decodeURIComponent(args[0])));
        new PluginResult(args, env).ok();
    },

    isSandboxed : function (success, fail, args, env) {
        new PluginResult(args, env).ok(require("lib/webview").getSandbox() === "1");
    },

    resolveLocalPath : function (success, fail, args, env) {
        var homeDir = window.qnx.webplatform.getApplication().getEnv("HOME").replace("/data", "/app/native/"),
            path = homeDir + JSON.parse(decodeURIComponent(args[0])).substring(9);
        require("lib/webview").setSandbox(false);
        new PluginResult(args, env).ok(path);
    }
};
