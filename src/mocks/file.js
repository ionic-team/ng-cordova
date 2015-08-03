/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaFile
 *
 * @description
 * A service for testing interaction with device directories and files
 * in an app build with ngCordova.
 */
ngCordovaMocks.factory('$cordovaFile', ['$q', function ($q) {
  var throwsError = false;
  var fileSystem = {};
  var shouldMockFiles = false;
  var files = {};

  var mockIt = function (errorMessage) {
    var defer = $q.defer();
    if (this.throwsError) {
      defer.reject(errorMessage);
    } else {
      defer.resolve();
    }

    return defer.promise;
  };

  return {
    /**
     * @ngdoc property
     * @name throwsError
     * @propertyOf ngCordovaMocks.cordovaFile
     *
     * @description
     * A flag that signals whether a promise should be rejected or not.
     * This property should only be used in automated tests.
     **/
    throwsError: throwsError,

    /**
     * @ngdoc property
     * @name fileSystem
     * @propertyOf ngCordovaMocks.cordovaFile
     *
     * @description
     * A fake, in-memory file system. This is incomplete at this time.
     * This property should only be used in automated tests.
     **/
    fileSystem: fileSystem,

    /**
     * @ngdoc property
     * @name shouldMockFiles
     * @propertyOf ngCordovaMocks.cordovaFile
     *
     * @description
     * A flag that signals whether one wish to mock files.
     * This is useful if you need mocks specific file scenarios.
     * This property should only be used in automated tests.
     **/
    shouldMockFiles: shouldMockFiles,

    /**
     * @ngdoc property
     * @name files
     * @propertyOf ngCordovaMocks.cordovaFile
     *
     * @description
     * An object that may be used for mocking files on the device.
     * This property should only be used in automated tests.
     *
     * **/
    files: files,

    checkDir: function (directory) {
      if (this.shouldMockFiles) {
        var defer = $q.defer();
        if (this.files[directory] && !this.files[directory].isFile) {
          defer.resolve();
        } else {
          defer.reject();
        }

        return defer.promise;
      }

      return mockIt.call(this, 'There was an error checking the directory.');
    },

    createDir: function (directory, overwrite) {
      if (this.shouldMockFiles) {
        var defer = $q.defer();
        this.files[directory] = {isFile: false};
        defer.resolve();
        return defer.promise;
      }

      return mockIt.call(this, 'There was an error creating the directory.');
    },

    listDir: function (filePath) {
      return mockIt.call(this, 'There was an error listing the directory');
    },

    checkFile: function (filePath) {
      if (this.shouldMockFiles) {
        var defer = $q.defer();
        if (this.files[filePath] && this.files[filePath].isFile) {
          defer.resolve();
        } else {
          defer.reject();
        }

        return defer.promise;
      }

      return mockIt.call(this, 'There was an error checking for the file.');
    },

    createFile: function (filePath, overwrite) {
      if (this.shouldMockFiles) {
        var defer = $q.defer();
        this.files[filePath] = {
          isFile: true,
          fileContent: ''
        };
        defer.resolve();
        return defer.promise;
      }

      return mockIt.call(this, 'There was an error creating the file.');
    },

    removeFile: function (directory, file) {
      return mockIt.call(this, 'There was an error removng the file.');
    },

    writeFile: function (filePath, data, options) {
      if (this.shouldMockFiles && filePath && data) {
        this.files[filePath] = {
          isFile: true,
          fileContent: data
        };
      }

      return mockIt.call(this, 'There was an error writing the file.');
    },

    readFile: function (filePath) {
      return this.readAsText(filePath);
    },

    readAsText: function (filePath) {
      if (this.shouldMockFiles) {
        var defer = $q.defer();
        if (files[filePath] && files[filePath].isFile) {
          defer.resolve(files[filePath].fileContent);
        } else {
          defer.reject();
        }

        return defer.promise;
      }

      return mockIt.call(this, 'There was an error reading the file as text.');
    },

    readAsDataURL: function (filePath) {
      return mockIt.call(this, 'There was an error reading the file as a data url.');
    },

    readAsBinaryString: function (filePath) {
      return mockIt.call(this, 'There was an error reading the file as a binary string.');
    },

    readAsArrayBuffer: function (filePath) {
      return mockIt.call(this, 'There was an error reading the file as an array buffer.');
    },

    readFileMetadata: function (filePath) {
      return mockIt.call(this, 'There was an error reading the file metadata');
    },

    readFileAbsolute: function (filePath) {
      return mockIt.call(this, 'There was an error reading the file from the absolute path');
    },

    readFileMetadataAbsolute: function (filePath) {
      return mockIt.call(this, 'There was an error reading the file metadta from the absolute path');
    }
  };
}]);
