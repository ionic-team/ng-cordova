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

var utils = require('cordova/utils'),
    Entry = require('./BB10Entry'),
    FileWriter = require('./BB10FileWriter'),
    File = require('./BB10File'),
    fileUtils = require('./BB10Utils'),
    FileError = require('./FileError'),
    FileEntry = function (name, fullPath, fileSystem) {
        FileEntry.__super__.constructor.apply(this, [true, false, name, fullPath, fileSystem]);
    };

utils.extend(FileEntry, Entry);

FileEntry.prototype.createWriter = function(successCallback, errorCallback) {
    this.file(function (file) {
        successCallback(new FileWriter(file));
    }, errorCallback);
};

FileEntry.prototype.file = function(successCallback, errorCallback) {
    var fullPath = this.fullPath,
        success = function (file) {
            file.fullPath = fullPath;
            successCallback(fileUtils.createFile(file));
        };
    this.nativeEntry.file(success, errorCallback);
};

module.exports = FileEntry;
