// install   :     cordova plugin add org.apache.cordova.file
// link      :     https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md

// TODO: add documentation for FileError types

angular.module('ngCordova.plugins.file', [])
  .provider('$cordovaFile', [function () {

    var defaults = this.defaults = {
      fileSystem: {
        size: 1024 * 1024
      }
    };

    this.setFileSystemSize = function (size) {
      this.defaults.fileSystem.size = size;
    };


    this.$get = ['$q', '$window', '$log', '$timeout', function ($q, $window, $log, $timeout) {

      return {

        checkDir: function (path, dir) {
          var q = $q.defer();

          if ((/^\//.test(dir))) {
            q.reject("directory cannot start with \/")
          }

          try {
            var directory = path + dir;
            $window.resolveLocalFileSystemURL(directory, function (fileSystem) {
              if (fileSystem.isDirectory === true) {
                q.resolve(fileSystem);
              } else {
                q.reject({code: 13, message: "input is not a directory"});
              }
            }, function (error) {
              q.reject(error);
            });
          } catch (err) {
            q.reject(err);
          }
          return q.promise;
        },

        checkFile: function (path, file) {
          var q = $q.defer();

          if ((/^\//.test(file))) {
            q.reject("directory cannot start with \/")
          }

          try {
            var directory = path + file;
            $window.resolveLocalFileSystemURL(directory, function (fileSystem) {
              if (fileSystem.isFile === true) {
                q.resolve(fileSystem);
              } else {
                q.reject({code: 13, message: "input is not a file"});
              }
            }, function (error) {
              q.reject(error);
            });
          } catch (err) {
            q.reject(err);
          }

          return q.promise;
        },

        createDir: function (path, dirName, options) {
          var q = $q.defer();

          if ((/^\//.test(dirName))) {
            q.reject("directory cannot start with \/")
          }

          var defaults = {
            create: true,
            exclusive: false
          };
          options = angular.extend(defaults, options);

          try {
            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
              fileSystem.getDirectory(dirName, options, function (result) {
                q.resolve(result);
              }, function (error) {
                q.resolve(error);
              });
            }, function (err) {
              q.reject(err);
            });
          } catch (e) {
            q.reject(e);
          }

          return q.promise;
        },

        createFile: function (path, fileName, options) {
          var q = $q.defer();

          if ((/^\//.test(fileName))) {
            q.reject("file-name cannot start with \/")
          }

          var defaults = {
            create: true,
            exclusive: false
          };
          options = angular.extend(defaults, options);

          try {
            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
              fileSystem.getFile(fileName, options, function (result) {
                q.resolve(result);
              }, function (error) {
                q.resolve(error);
              });
            }, function (err) {
              q.reject(err);
            });
          } catch (e) {
            q.reject(e);
          }
          return q.promise;
        },

        listFiles: function (path, dir) {

        },

        listDir: function (filePath) {
          var q = $q.defer();

          getDirectory(filePath, {create: false}).then(function (parent) {
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


        removeDir: function (path, dirName) {
          var q = $q.defer();

          if ((/^\//.test(dirName))) {
            q.reject("file-name cannot start with \/")
          }

          try {
            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
              fileSystem.getDirectory(dirName, {create: false}, function (fileEntry) {
                fileEntry.remove(function (result) {
                  q.resolve(result);
                }, function (error) {
                  q.reject(error);
                });
              }, function (err) {
                q.resolve(err);
              });
            }, function (er) {
              q.reject(er);
            });
          } catch (e) {
            q.reject(e);
          }
          return q.promise;
        },

        removeFile: function (path, fileName) {
          var q = $q.defer();

          if ((/^\//.test(fileName))) {
            q.reject("file-name cannot start with \/");
          }

          try {
            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
              fileSystem.getFile(fileName, {create: false}, function (fileEntry) {
                fileEntry.remove(function (result) {
                  q.resolve(result);
                }, function (error) {
                  q.reject(error);
                });
              }, function (err) {
                q.resolve(err);
              });
            }, function (er) {
              q.reject(er);
            });
          } catch (e) {
            q.reject(e);
          }
          return q.promise;
        },


        writeFile: function (path, fileName, text, options) {
          var q = $q.defer();

          if ((/^\//.test(fileName))) {
            q.reject("file-name cannot start with \/");
          }

          var defaults = {
            create: true,
            exclusive: false
          };
          options = angular.extend(defaults, options);

          try {
            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
              fileSystem.getFile(fileName, options, function (fileEntry) {
                fileEntry.createWriter(function (writer) {
                  if (options.append === true) {
                    writer.seek(writer.length);
                  }

                  if (options.truncate) {
                    writer.truncate(options.truncate);
                  }

                  writer.onwriteend = function (evt) {
                    if (this.error) {
                      q.reject(this.error);
                    }
                    else {
                      q.resolve(evt);
                    }
                  };

                  writer.write(text);

                  q.promise.abort = function () {
                    writer.abort();
                  }

                });
              }, function (error) {
                q.resolve(error);
              });
            }, function (err) {
              q.reject(err);
            });
          } catch (e) {
            q.reject(e);
          }

          return q.promise;
        },

        readAsText: function (path, file) {
          var q = $q.defer();

          if ((/^\//.test(file))) {
            q.reject("file-name cannot start with \/");
          }

          try {
            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
              fileSystem.getFile(file, {create: false}, function (fileEntry) {

                fileEntry.file(function (fileData) {
                  var reader = new FileReader();

                  reader.onloadend = function (evt) {
                    if (evt.target._result !== undefined || evt.target._result !== null) {
                      q.resolve(evt.target._result);
                    }
                    else if (evt.target._error !== undefined || evt.target._error !== null) {
                      q.reject(evt.target._error);
                    }
                    else {
                      q.reject();
                    }
                  };

                  reader.readAsText(fileData);
                });
              }, function (error) {
                q.reject(error);
              });
            }, function (err) {
              q.reject(err);
            });
          } catch (e) {
            q.reject(e);
          }

          return q.promise;
        },


        readAsDataURL: function (path, file) {
          var q = $q.defer();

          if ((/^\//.test(file))) {
            q.reject("file-name cannot start with \/");
          }

          try {
            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
              fileSystem.getFile(file, {create: false}, function (fileEntry) {
                fileEntry.file(function (fileData) {
                  var reader = new FileReader();
                  reader.onloadend = function (evt) {
                    if (evt.target._result !== undefined || evt.target._result !== null) {
                      q.resolve(evt.target._result);
                    }
                    else if (evt.target._error !== undefined || evt.target._error !== null) {
                      q.reject(evt.target._error);
                    }
                    else {
                      q.reject();
                    }
                  };
                  reader.readAsDataURL(fileData);
                });
              }, function (error) {
                q.reject(error);
              });
            }, function (err) {
              q.reject(err);
            });
          } catch (e) {
            q.reject(e);
          }

          return q.promise;
        },

        readAsBinaryString: function (path, file) {
          var q = $q.defer();

          if ((/^\//.test(file))) {
            q.reject("file-name cannot start with \/");
          }

          try {
            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
              fileSystem.getFile(file, {create: false}, function (fileEntry) {
                fileEntry.file(function (fileData) {
                  var reader = new FileReader();
                  reader.onloadend = function (evt) {
                    if (evt.target._result !== undefined || evt.target._result !== null) {
                      q.resolve(evt.target._result);
                    }
                    else if (evt.target._error !== undefined || evt.target._error !== null) {
                      q.reject(evt.target._error);
                    }
                    else {
                      q.reject();
                    }
                  };
                  reader.readAsBinaryString(fileData);
                });
              }, function (error) {
                q.reject(error);
              });
            }, function (err) {
              q.reject(err);
            });
          } catch (e) {
            q.reject(e);
          }

          return q.promise;
        },

        readAsArrayBuffer: function (path, file) {
          var q = $q.defer();

          if ((/^\//.test(file))) {
            q.reject("file-name cannot start with \/");
          }

          try {
            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
              fileSystem.getFile(file, {create: false}, function (fileEntry) {
                fileEntry.file(function (fileData) {
                  var reader = new FileReader();
                  reader.onloadend = function (evt) {
                    if (evt.target._result !== undefined || evt.target._result !== null) {
                      q.resolve(evt.target._result);
                    }
                    else if (evt.target._error !== undefined || evt.target._error !== null) {
                      q.reject(evt.target._error);
                    }
                    else {
                      q.reject();
                    }
                  };
                  reader.readAsArrayBuffer(fileData);
                });
              }, function (error) {
                q.reject(error);
              });
            }, function (err) {
              q.reject(err);
            });
          } catch (e) {
            q.reject(e);
          }

          return q.promise;
        },


        moveFile: function (path, fileName, newPath, newFileName) {
          var q = $q.defer();

          newFileName = newFileName || fileName;

          if ((/^\//.test(fileName))) {
            q.reject("file-name cannot start with \/");
          }

          try {
            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
              fileSystem.getFile(fileName, {create: false}, function (fileEntry) {

                var newPathName = newPath.substring(newPath.lastIndexOf('/') - 1);
                console.log(newPathName, newPath);

                var parentEntry = new DirectoryEntry(newPathName, newPath);
                fileEntry.moveTo(parentEntry, newFileName, function (result) {
                  q.resolve(result);
                }, function (error) {
                  q.reject(error);
                });

              }, function (err) {
                q.resolve(err);
              });
            }, function (er) {
              q.reject(er);
            });
          } catch (e) {
            q.reject(e);
          }
          return q.promise;
        },

        readFileMetadata: function (filePath) {
          return getFile(filePath, {create: false});
        }
      };

      function getFile(path, options) {
        var q = $q.defer();
        getFileEntry(path, options).then(function (fileEntry) {
          fileEntry.file(q.resolve, q.reject);
        }, q.reject);
        return q.promise;
      }

      function getFileEntry(path, options) {
        var q = $q.defer();
        getFilesystem().then(function (filesystem) {
          filesystem.root.getFile(path, options, q.resolve, q.reject);
        }, q.reject);
        return q.promise;
      }

      function getDirectory(dir, options) {
        var q = $q.defer();
        getFilesystem().then(function (filesystem) {
          filesystem.root.getDirectory(dir, options, q.resolve, q.reject);
        }, q.reject);
        return q.promise;
      }

      function getFilesystem() {
        var q = $q.defer();

        $window.requestFileSystem = $window.requestFileSystem || $window.webkitRequestFileSystem;
        try {
          $window.requestFileSystem($window.PERSISTENT, defaults.fileSystem.size, q.resolve, q.reject);
        } catch (err) {
          q.reject(err);
        }
        return q.promise;
      }
    }];
  }]);
