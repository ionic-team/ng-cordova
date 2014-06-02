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

var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    Entry = require('./BB10Entry'),
    FileError = require('./FileError'),
    DirectoryReader = require('./BB10DirectoryReader'),
    fileUtils = require('./BB10Utils'),
    DirectoryEntry = function (name, fullPath, fileSystem) {
        DirectoryEntry.__super__.constructor.call(this, false, true, name, fullPath, fileSystem);
    };

if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) { callback(); };
}

utils.extend(DirectoryEntry, Entry);

DirectoryEntry.prototype.createReader = function () {
    return new DirectoryReader(this.fullPath);
};

DirectoryEntry.prototype.getDirectory = function (path, options, successCallback, errorCallback) {
    var currentPath = this.nativeEntry.fullPath,
        that = this,
        fullPath;

    if (path.indexOf("/") === 0) {
        fullPath = path;
    } else {
        fullPath = currentPath + "/" + path;
    }

    argscheck.checkArgs('sOFF', 'DirectoryEntry.getDirectory', arguments);

    if (fileUtils.isOutsideSandbox(fullPath)) {
        cordova.exec(function () {
            window.requestAnimationFrame(function () {
                window.webkitRequestFileSystem(window.PERSISTENT, that.filesystem._size, function (fs) {
                    fs.root.getDirectory(fullPath, options, function (entry) {
                        successCallback(fileUtils.createEntry(entry));
                    }, errorCallback);
                }, errorCallback);
            });
        }, errorCallback, "org.apache.cordova.file", "setSandbox", [false]);
    } else {
        cordova.exec(function () {
            window.requestAnimationFrame(function () {
                window.webkitRequestFileSystem(fileUtils.getFileSystemName(that.filesystem) === "persistent" ? window.PERSISTENT : window.TEMPORARY, that.filesystem._size, function (fs) {
                    fs.root.getDirectory(fullPath, options, function (entry) {
                        successCallback(fileUtils.createEntry(entry));
                    }, errorCallback);
                }, errorCallback);
            });
        }, errorCallback, "org.apache.cordova.file", "setSandbox", [true]);
    }
};

DirectoryEntry.prototype.removeRecursively = function (successCallback, errorCallback) {
    argscheck.checkArgs('FF', 'DirectoryEntry.removeRecursively', arguments);
    this.nativeEntry.removeRecursively(successCallback, errorCallback);
};

DirectoryEntry.prototype.getFile = function (path, options, successCallback, errorCallback) {
    var currentPath = this.nativeEntry.fullPath,
        that = this,
        fullPath;

    if (path.indexOf("/") === 0) {
        fullPath = path;
    } else {
        fullPath = currentPath + "/" + path;
    }

    argscheck.checkArgs('sOFF', 'DirectoryEntry.getFile', arguments);

    if (fileUtils.isOutsideSandbox(fullPath)) {
        cordova.exec(function () {
            window.requestAnimationFrame(function () {
                window.webkitRequestFileSystem(window.PERSISTENT, that.filesystem._size, function (fs) {
                    fs.root.getFile(fullPath, options, function (entry) {
                        successCallback(fileUtils.createEntry(entry));
                    }, errorCallback);
                }, errorCallback);
            });
        }, errorCallback, "org.apache.cordova.file", "setSandbox", [false]);
    } else {
        cordova.exec(function () {
            window.requestAnimationFrame(function () {
                window.webkitRequestFileSystem(fileUtils.getFileSystemName(that.filesystem) === "persistent" ? window.PERSISTENT: window.TEMPORARY, that.filesystem._size, function (fs) {
                    fs.root.getFile(fullPath, options, function (entry) {
                        successCallback(fileUtils.createEntry(entry));
                    }, errorCallback);
                }, errorCallback);
            });
        }, errorCallback, "org.apache.cordova.file", "setSandbox", [true]);
    }
};

module.exports = DirectoryEntry;
