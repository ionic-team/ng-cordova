// TODO: writeFile needs work, doesn't function
// TODO: add support for readFile -> readAsData
// TODO: add support for readFile -> readAsBinaryString
// TODO: add support for readFile -> readAsArrayBuffer
// TODO: add functionality to define storage size in the getFilesystem() -> requestFileSystem() method
// TODO: add documentation for FileError types
// TODO: add abort() option to downloadFile and uploadFile methods.
// TODO: add support for downloadFile and uploadFile options. (or detailed documentation) -> for fileKey, fileName, mimeType, headers
// TODO: add support for onprogress property


angular.module('ngCordova.plugins.file', [])

//Filesystem (checkDir, createDir, checkFile, creatFile, removeFile, writeFile, readFile)
  .factory('$cordovaFile', ['$q', function ($q) {

    return {
      checkDir: function (dir) {
        var q = $q.defer();

        getFilesystem().then(
          function (filesystem) {
            filesystem.root.getDirectory(dir, {create: false},
              //Dir exists
              function () {
                q.resolve();
              },
              //Dir doesn't exist
              function () {
                q.reject();
              }
            );
          }
        );

        return q.promise;
      },

      createDir: function (dir, replaceBOOL) {
        getFilesystem().then(
          function (filesystem) {
            filesystem.root.getDirectory(dir, {create: true, exclusive: replaceBOOL});
          }
        );
      },

      checkFile: function (dir, file) {
        var q = $q.defer();

        getFilesystem().then(
          function (filesystem) {
            filesystem.root.getFile('/' + dir + '/' + file, {create: false},
              // File exists
              function () {
                q.resolve();
              },
              // File doesn't exist
              function () {
                q.reject();
              }
            );
          }
        );

        return q.promise;
      },

      createFile: function (dir, file, replaceBOOL) {
        getFilesystem().then(
          function (filesystem) {
            filesystem.root.getFile('/' + dir + '/' + file, {create: true, exclusive: replaceBOOL},
              function (success) {

              },
              function (err) {

              });
          }
        );
      },

      removeFile: function (dir, file) {
        var q = $q.defer();

        getFilesystem().then(
          function (filesystem) {
            filesystem.root.getFile('/' + dir + '/' + file, {create: false}, function (fileEntry) {
              fileEntry.remove(function () {
                q.resolve();
              });
            });
          }
        );

        return q.promise;
      },

      writeFile: function (dir, file) {
        var q = $q.defer();

        getFilesystem().then(
          function (filesystem) {
            filesystem.root.getFile('/' + dir + '/' + file, {create: false},
              function (fileEntry) {
                fileEntry.createWriter(
                  function (fileWriter) {
                    q.resolve(fileWriter);
                  },
                  function (error) {
                    q.reject(error);
                  });
              }
            );
          }
        );

        return q.promise;
      },

      readFile: function (dir, file) {
        var q = $q.defer();

        getFilesystem().then(
          function (filesystem) {

            filesystem.root.getFile('/' + dir + '/' + file, {create: false},
              // success
              function (fileEntry) {
                fileEntry.file(function (file) {
                  var reader = new FileReader();
                  reader.onloadend = function () {
                    q.resolve(this.result);
                  };

                  reader.readAsText(file);
                });
              },
              // error
              function (error) {
                q.reject(error);
              });
          }
        );

        return q.promise;
      },

      downloadFile: function (source, filePath, trustAllHosts, options) {
        var q = $q.defer();
        var fileTransfer = new FileTransfer();
        var uri = encodeURI(source);
        
        fileTransfer.onprogress = function(progressEvent) {
          if (progressEvent.lengthComputable) {
			var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
			q.notify(perc);
		  }
        };

        fileTransfer.download(
          uri,
          filePath,
          function (entry) {
            q.resolve(entry);
          },
          function (error) {
            q.reject(error);
          },
          trustAllHosts, options);
          
          return q.promise;
      },

      uploadFile: function (server, filePath, options) {
        var q = $q.defer();
        var fileTransfer = new FileTransfer();
        var uri = encodeURI(server);
        
        fileTransfer.onprogress = function(progressEvent) {
          if (progressEvent.lengthComputable) {
			var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
			q.notify(perc);
		  }
        };

        fileTransfer.upload(
          filePath,
          uri,
          function (result) {
            q.resolve(result);
          },
          function (error) {
            q.reject(error);
          },
          options)
          
          return q.promise
      }

    };

    function getFilesystem() {
      var q = $q.defer();

      window.requestFileSystem(LocalFileSystem.PERSISTENT, 1024 * 1024, function (filesystem) {
          q.resolve(filesystem);
        },
        function (err) {
          q.reject(err);
        });

      return q.promise;
    }
  }]);