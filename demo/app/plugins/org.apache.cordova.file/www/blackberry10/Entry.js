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
    FileError = require('./FileError'),
    Metadata = require('./Metadata'),
    fileUtils = require('./BB10Utils');

function Entry(isFile, isDirectory, name, fullPath, fileSystem) {
    var strippedPath;
    if (fullPath && fullPath.charAt(fullPath.length - 1) === '/') {
        strippedPath = fullPath.slice(0, -1);
    }
    this.isFile = !!isFile;
    this.isDirectory = !!isDirectory;
    this.name = name || '';
    this.fullPath = typeof strippedPath !== "undefined" ? strippedPath : (fullPath || '');
    this.filesystem = fileSystem || null;
}

Entry.prototype.getMetadata = function(successCallback, errorCallback) {
    argscheck.checkArgs('FF', 'Entry.getMetadata', arguments);
    var success = function(lastModified) {
        var metadata = new Metadata(lastModified);
        if (typeof successCallback === 'function') {
            successCallback(metadata);
        }
    };
    this.nativeEntry.getMetadata(success, errorCallback);
};

Entry.prototype.setMetadata = function(successCallback, errorCallback, metadataObject) {
    argscheck.checkArgs('FFO', 'Entry.setMetadata', arguments);
    errorCallback("Not supported by platform");
};

Entry.prototype.moveTo = function(parent, newName, successCallback, errorCallback) {
    argscheck.checkArgs('oSFF', 'Entry.moveTo', arguments);
    var srcPath = this.fullPath,
        name = newName || this.name,
        success = function(entry) {
            if (entry) {
                if (typeof successCallback === 'function') {
                    successCallback(fileUtils.createEntry(entry));
                }
            }
            else {
                if (typeof errorCallback === 'function') {
                    errorCallback(new FileError(FileError.NOT_FOUND_ERR));
                }
            }
        };
    this.nativeEntry.moveTo(parent.nativeEntry, newName, success, errorCallback);
};


Entry.prototype.copyTo = function(parent, newName, successCallback, errorCallback) {
    argscheck.checkArgs('oSFF', 'Entry.copyTo', arguments);
    var srcPath = this.fullPath,
        name = newName || this.name,
        success = function(entry) {
            if (entry) {
                if (typeof successCallback === 'function') {
                    successCallback(fileUtils.createEntry(entry));
                }
            }
            else {
                if (typeof errorCallback === 'function') {
                    errorCallback(new FileError(FileError.NOT_FOUND_ERR));
                }
            }
        };
    this.nativeEntry.copyTo(parent.nativeEntry, newName, success, errorCallback);
};

Entry.prototype.toURL = function() {
    return "file://" + this.nativeEntry.fullPath; 
};

Entry.prototype.toURI = function(mimeType) {
    console.log("DEPRECATED: Update your code to use 'toURL'");
    return this.toURL();
};

Entry.prototype.remove = function(successCallback, errorCallback) {
    argscheck.checkArgs('FF', 'Entry.remove', arguments);
    this.nativeEntry.remove(successCallback, errorCallback);
};

Entry.prototype.getParent = function(successCallback, errorCallback) {
    argscheck.checkArgs('FF', 'Entry.getParent', arguments);
    var win = successCallback && function(result) {
        successCallback(fileUtils.createEntry(result));
    };
    this.nativeEntry.getParent(win, errorCallback);
};

module.exports = Entry;
