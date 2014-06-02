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

var origFileReader = window.FileReader,
    fileUtils = require('./BB10Utils'),
    utils = require('cordova/utils');

var FileReader = function() {
    this.nativeReader = new origFileReader();
};

utils.defineGetter(FileReader.prototype, 'readyState', function() {
    return this.nativeReader.readyState;
});

utils.defineGetter(FileReader.prototype, 'error', function() {
    return this.nativeReader.error;
});

utils.defineGetter(FileReader.prototype, 'result', function() {
    return this.nativeReader.result;
});

function defineEvent(eventName) {
    utils.defineGetterSetter(FileReader.prototype, eventName, function() {
        return this.nativeReader[eventName] || null;
    }, function(value) {
        this.nativeReader[eventName] = value;
    });
}

defineEvent('onabort');
defineEvent('onerror');
defineEvent('onload');
defineEvent('onloadend');
defineEvent('onloadstart');
defineEvent('onprogress');

FileReader.prototype.abort = function() {
    return this.nativeReader.abort();
};

function read(method, context, file, encoding) {
    if (file.fullPath) {
         resolveLocalFileSystemURI(file.fullPath, function (entry) {
            entry.nativeEntry.file(function (nativeFile) {
                context.nativeReader[method].call(context.nativeReader, nativeFile, encoding);
            }, context.onerror);
        }, context.onerror);
    } else {
        context.nativeReader[method](file, encoding);
    }
}

FileReader.prototype.readAsText = function(file, encoding) {
    read("readAsText", this, file, encoding);
};

FileReader.prototype.readAsDataURL = function(file) {
    read("readAsDataURL", this, file);
};

FileReader.prototype.readAsBinaryString = function(file) {
    read("readAsBinaryString", this, file);
};

FileReader.prototype.readAsArrayBuffer = function(file) {
    read("readAsArrayBuffer", this, file);
};

window.FileReader = FileReader;
module.exports = FileReader;
