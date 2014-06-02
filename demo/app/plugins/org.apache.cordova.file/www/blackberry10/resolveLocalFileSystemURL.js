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

var fileUtils = require('./BB10Utils'),
    FileError = require('./FileError');

if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) { callback(); };
}

module.exports = function (uri, success, fail) {

    var decodedURI = decodeURI(uri).replace(/filesystem:/, '').replace(/file:\/\//, ''),
        failNotFound = function () {
            if (fail) {
                fail(FileError.NOT_FOUND_ERR);
            }
        },
        resolveURI = function () {
            window.requestAnimationFrame(function () {
                window.webkitRequestFileSystem(
                    window.PERSISTENT,
                    50*1024*1024,
                    function (fs) {
                        var op = decodedURI.slice(-1) === '/' ? 'getDirectory' : 'getFile';
                        fs.root[op](
                            decodedURI,
                            { create: false },
                            function (entry) {
                                success(fileUtils.createEntry(entry));
                            },
                            failNotFound
                        );
                    },
                    failNotFound
                );
            });
        };

    if (decodedURI.substring(0, 8) === 'local://') {
        cordova.exec(
            function (path) {
                decodedURI = path;
                resolveURI();
            },
            failNotFound,
            'org.apache.cordova.file',
            'resolveLocalPath',
            [decodedURI]
        );
    } else {
        cordova.exec(
            resolveURI, 
            failNotFound, 
            'org.apache.cordova.file', 
            'setSandbox', 
            [!fileUtils.isOutsideSandbox(decodedURI)]
        );
    }
};
