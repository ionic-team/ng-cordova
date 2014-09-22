// install   :     cordova plugin add org.apache.cordova.file
// link      :     https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md

// TODO: add documentation for FileError types
// TODO: add abort() option to downloadFile and uploadFile methods.
// TODO: add support for downloadFile and uploadFile options. (or detailed documentation) -> for fileKey, fileName, mimeType, headers
// TODO: add support for onprogress property

angular.module('ngCordova.plugins.file', [])

//Filesystem (checkDir, createDir, checkFile, creatFile, removeFile, writeFile, readFile)
.provider('$cordovaFile', [function () {

  var _fileSystemType = window.LocalFileSystem ? window.LocalFileSystem.PERSISTENT : 1;
  var _fileSystemSize = 1024 * 1024;

  var fsProvider = {
    get fileSystemType() {
      return _fileSystemType;
    },
    set fileSystemType(fileSystemType) {
      _fileSystemType = fileSystemType;
    },
    get fileSystemSize() {
      return _fileSystemSize;
    },
    set fileSystemSize(fileSystemSize) {
      _fileSystemSize = fileSystemSize; 
    }
  };

  fsProvider.$get = ['$window', '$q', '$log', function($window, $q, $log) {
    return {
      checkDir: function (dir) {
        return getDirectory(dir, {create: false});
      },

      createDir: function (dir, replaceBOOL) {
        return getDirectory(dir, {create: true, exclusive: replaceBOOL});
      },

      listDir: function (filePath) {
        var q = $q.defer();

        getDirectory(filePath, {create: false})
        .then(function (parent) {
          var reader = parent.createReader();
          reader.readEntries(
            function (entries) {
              q.resolve(entries);
            },
            function () {
              q.reject('DIR_READ_ERROR : ' + filePath);
            });
        }, function () {
          q.reject('DIR_NOT_FOUND : ' + filePath);
        });

        return q.promise;
      },

      checkFile: function (filePath) {
        // Backward compatibility for previous function checkFile(dir, file)
        if (arguments.length == 2) {
          filePath = '/' + filePath + '/' + arguments[1];
        }
        return getFileEntry(filePath, {create: false});
      },

      createFile: function (filePath, replaceBOOL) {
        // Backward compatibility for previous function createFile(filepath replaceBOOL)
        if (arguments.length == 3) {
          filePath = '/' + filePath + '/' + arguments[1];
          replaceBOOL = arguments[2];
        }
        return getFileEntry(filePath, {create: true, exclusive: replaceBOOL});
      },

      removeFile: function (filePath) {
        var q = $q.defer();

        // Backward compatibility for previous function removeFile(dir, file)
        if (arguments.length == 2) {
          filePath = '/' + filePath + '/' + arguments[1];
        }

        getFileEntry(filePath, {create: false})
        .then(function (fileEntry) {
          fileEntry.remove(q.resolve, q.reject);
        }, q.reject);
        return q.promise;
      },

      writeFile: function (filePath, data) {
        var q = $q.defer();

        getFileWriter(filePath, {create: true})
        .then(function (fileWriter) {
          fileWriter.onwriteend = function (evt) {
            if (this.error) 
              q.reject(this.error);
            else
              q.resolve(evt);
          };
          fileWriter.write(data);
        }, q.reject);

        return q.promise;
      },

      readFile: function (filePath) {  /// now deprecated in new ng-cordova version
        $log.log('readFile is now deprecated as of v0.1.4-alpha, use readAsText instead');
        return this.readAsText(filePath);
      },

      readAsText: function (filePath) {
        var q = $q.defer();

        // Backward compatibility for previous function readFile(dir, file)
        if (arguments.length == 2) {
          filePath = '/' + filePath + '/' + arguments[1];
        }

        getFile(filePath, {create: false})
        .then(function(file) {
          getPromisedFileReader(q).readAsText(file);
        }, q.reject);

        return q.promise;
      },


      readAsDataURL: function (filePath) {
        var q = $q.defer();

        // Backward compatibility for previous function readFile(dir, file)
        if (arguments.length == 2) {
          filePath = '/' + filePath + '/' + arguments[1];
        }

        getFile(filePath, {create: false})
        .then(function(file) {
          getPromisedFileReader(q).readAsDataURL(file);
        }, q.reject);

        return q.promise;
      },

      readAsBinaryString: function (filePath) {
        var q = $q.defer();

        // Backward compatibility for previous function readFile(dir, file)
        if (arguments.length == 2) {
          filePath = '/' + filePath + '/' + arguments[1];
        }

        getFile(filePath, {create: false})
        .then(function(file) {
          getPromisedFileReader(q).readAsBinaryString(file);
        }, q.reject);

        return q.promise;
      },

      readAsArrayBuffer: function (filePath) {
        var q = $q.defer();

        // Backward compatibility for previous function readFile(dir, file)
        if (arguments.length == 2) {
          filePath = '/' + filePath + '/' + arguments[1];
        }

        getFile(filePath, {create: false})
        .then(function(file) {
          getPromisedFileReader(q).readAsArrayBuffer(file);
        }, q.reject);

        return q.promise;
      },

      readFileMetadata: function (filePath) {
        return getFile(filePath, {create: false});
      },

      readFileAbsolute: function (filePath) {
        var q = $q.defer();
        getAbsoluteFile(filePath)
        .then(function(file) {
          getPromisedFileReader(q).readAsText(file);
        }, q.reject);
        return q.promise;
      },

      readFileAsBinaryStringAbsolute: function(filePath) {
        var q = $q.defer();
        getAbsoluteFile(filePath)
        .then(function(file) {
          getPromisedFileReader(q).readAsBinaryString(file);
        }, q.reject);
        return q.promise;
      },

      readFileAsArrayBufferAbsolute: function(filePath) {
        var q = $q.defer();
        getAbsoluteFile(filePath)
        .then(function(file) {
          getPromisedFileReader(q).readAsArrayBuffer(file);
        }, q.reject);
        return q.promise;
      },

      readFileMetadataAbsolute: function (filePath) {
        return getAbsoluteFile(filePath);
      },

      downloadFile: function (source, filePath, trustAllHosts, options) {
        var q = $q.defer();
        var fileTransfer = new FileTransfer();
        var uri = encodeURI(source);

        fileTransfer.onprogress = q.notify;
        fileTransfer.download(uri, filePath, q.resolve, q.reject, trustAllHosts, options);
        return q.promise;
      },

      uploadFile: function (server, filePath, options) {
        var q = $q.defer();
        var fileTransfer = new FileTransfer();
        var uri = encodeURI(server);

        fileTransfer.onprogress = q.notify;
        fileTransfer.upload(filePath, uri, q.resolve, q.reject, options);
        return q.promise;
      }
    };

    function getPromisedFileReader(deferred) {
      var reader = new FileReader();
      reader.onloadend = function () {
        if (this.error)
          deferred.reject(this.error);
        else
          deferred.resolve(this.result);
      };
      return reader;
    }

    function getFile(path, options) {
      var q = $q.defer();
      getFileEntry(path, options)
      .then(function(fileEntry) {
        fileEntry.file(q.resolve, q.reject);
      }, q.reject);
      return q.promise;
    }

    function getFileWriter(path, options) {
      var q = $q.defer();
      getFileEntry(path, options)
      .then(function(fileEntry) {
        fileEntry.createWriter(q.resolve, q.reject);
      }, q.reject);
      return q.promise;
    }

    function getFileEntry(path, options) {
      var q = $q.defer();
      getFilesystem().then(
        function (filesystem) {
          filesystem.root.getFile(path, options, q.resolve, q.reject);
        }, q.reject);
      return q.promise;
    }

    function getAbsoluteFile(path) {
      var q = $q.defer();
      $window.resolveLocalFileSystemURL(path,
        function (fileEntry) {
          fileEntry.file(q.resolve, q.reject);
        }, q.reject);
      return q.promise;
    }

    function getDirectory(dir, options) {
      var q = $q.defer();
      getFilesystem().then(
        function(filesystem) {
          filesystem.root.getDirectory(dir, options, q.resolve, q.resolve);
        }, q.reject);
      return q.promise;
    }

    function getFilesystem() {
      var q = $q.defer();
      $window.requestFileSystem(_fileSystemType, _fileSystemSize, q.resolve, q.reject); 
      return q.promise;
    }
  }];

  return fsProvider;
}]);
