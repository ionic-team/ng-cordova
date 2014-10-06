/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaFile
 *
 * @description
 * A service for testing interaction with device directories and files
 * in an app build with ngCordova.
 */
ngCordovaMocks.factory('$cordovaFile', ['$q', function($q) {
	var throwsError = false;
	var fileSystem = {};

	var mockIt = function(errorMessage) {
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

		checkDir: function(directory) {
			return mockIt.call(this, 'There was an error checking the directory.');		
		},

		createDir: function(directory, overwrite) {
			return mockIt.call(this, 'There was an error creating the directory.');		
		},

		listDir: function(filePath) {
		 	return mockIt.call(this, 'There was an error listing the directory');
		},

		checkFile: function(directory, file) {
			return mockIt.call(this, 'There was an error checking for the file.');	
		},

		createFile: function(directory, file, overwrite) {
			return mockIt.call(this, 'There was an error creating the file.');
		},

		removeFile: function(directory, file) {
			return mockIt.call(this,'There was an error removng the file.');	
		},

		writeFile: function(directory, file, options) {
			return mockIt.call(this,'There was an error writing the file.');		
		},

		readFile: function(directory, file) {
			return mockIt.call(this, 'There was an error reading the file.');			
		},

		readAsText: function (filePath) {
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
		},

		downloadFile: function(source, filePath, trust, options) {
			return mockIt.call(this, 'There was an error downloading the file.');	
		},

		uploadFile: function(server, filePath, options) {
			return mockIt.call(this, 'There was an error uploading the file.');	
		}		
	};
}]);