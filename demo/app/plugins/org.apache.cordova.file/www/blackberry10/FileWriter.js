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

var FileError = require('./FileError'),
    ProgressEvent = require('./ProgressEvent'),
    fileUtils = require('./BB10Utils'),
    utils = require('cordova/utils');

function FileWriter (file) {
    var that = this;
    this.file = file;
    this.events = {};
    this.pending = [];
    resolveLocalFileSystemURI(file.fullPath, function (entry) {
        entry.nativeEntry.createWriter(function (writer) {
            var i,
                event;
            that.nativeWriter = writer;
            for (event in that.events) {
                if (that.events.hasOwnProperty(event)) {
                    that.nativeWriter[event] = that.events[event];
                }
            }
            for (i = 0; i < that.pending.length; i++) {
                that.pending[i]();
            }
        });
    });
    this.events = {};
    this.pending = [];
}

utils.defineGetter(FileWriter.prototype, 'error', function() {
    return this.nativeWriter ? this.nativeWriter.error : null;
});

utils.defineGetter(FileWriter.prototype, 'fileName', function() {
    return this.nativeWriter ? this.nativeWriter.fileName : this.file.name;
});

utils.defineGetter(FileWriter.prototype, 'length', function() {
    return this.nativeWriter ? this.nativeWriter.length : this.file.size;
});

utils.defineGetter(FileWriter.prototype, 'position', function() {
    return this.nativeWriter ? this.nativeWriter.position : 0;
});

utils.defineGetter(FileWriter.prototype, 'readyState', function() {
    return this.nativeWriter ? this.nativeWriter.readyState : 0;
});

function defineEvent(eventName) {
    utils.defineGetterSetter(FileWriter.prototype, eventName, function() {
        return this.nativeWriter ? this.nativeWriter[eventName] || null : this.events[eventName] || null;
    }, function(value) {
        if (this.nativeWriter) {
            this.nativeWriter[eventName] = value;
        }
        else {
            this.events[eventName] = value;
        }
    });
}

defineEvent('onabort');
defineEvent('onerror');
defineEvent('onprogress');
defineEvent('onwrite');
defineEvent('onwriteend');
defineEvent('onwritestart');

FileWriter.prototype.abort = function() {
    this.nativeWriter.abort();
};

FileWriter.prototype.write = function(text) {
    var that = this,
        op = function () {
            that.nativeWriter.write(new Blob([text]));
        };
    this.nativeWriter ? op() : this.pending.push(op);

};

FileWriter.prototype.seek = function(offset) {
    var that = this,
        op = function () {
            that.nativeWriter.seek(offset);
        };
    this.nativeWriter ? op() : this.pending.push(op);
};

FileWriter.prototype.truncate = function(size) {
    var that = this,
        op = function () {
            that.nativeWriter.truncate(size);
        };
    this.nativeWriter ? op() : this.pending.push(op);
};

module.exports = FileWriter;
