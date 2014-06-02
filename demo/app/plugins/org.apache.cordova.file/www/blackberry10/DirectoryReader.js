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
    fileUtils = require('./BB10Utils');

function DirectoryReader(path) {
    this.path = path;
    this.nativeReader = null;
}

DirectoryReader.prototype.readEntries = function(successCallback, errorCallback) {
    var self = this,
        win = typeof successCallback !== 'function' ? null : function(result) {
            var retVal = [];
            for (var i=0; i<result.length; i++) {
                retVal.push(fileUtils.createEntry(result[i]));
            }
            successCallback(retVal);
        },
        fail = typeof errorCallback !== 'function' ? null : function(code) {
            errorCallback(new FileError(code));
        };
    if (this.nativeReader) {
        this.nativeReader.readEntries(win, fail);
    } else {
        resolveLocalFileSystemURI("filesystem:local:///persistent/" + this.path, function (entry) {
            self.nativeReader = entry.nativeEntry.createReader()
            self.nativeReader.readEntries(win, fail);
        }, function () {
            fail(FileError.NOT_FOUND_ERR);
        });
    }
};

module.exports = DirectoryReader;
