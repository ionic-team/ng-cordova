/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaFile
 *
 * @description
 * A service for testing interaction with device directories and files
 * in an app build with ngCordova.
 */ 
ngCordovaMocks.factory('$cordovaFile', function($q) {
	var throwsError = false;
	var fileSystem = {};

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
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error checking the directory.');
			} else {
				defer.resolve();
			}
			return defer.promise;			
		},

		createDir: function(directory, overwrite) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error creating the directory.');
			} else {
				defer.resolve();
			}
			return defer.promise;			
		},

		checkFile: function(directory, file) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error checking for the file.');
			} else {
				defer.resolve();
			}
			return defer.promise;			
		},

		createFile: function(directory, file, overwrite) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error creating the file.');
			} else {
				defer.resolve();
			}
			return defer.promise;			
		},

		removeFile: function(directory, file) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error removng the file.');
			} else {
				defer.resolve();
			}
			return defer.promise;			
		},

		writeFile: function(directory, file) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error writing the file.');
			} else {
				defer.resolve();
			}
			return defer.promise;			
		},

		readFile: function(directory, file) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error reading the file.');
			} else {
				defer.resolve();
			}
			return defer.promise;			
		},

		downloadFile: function(source, filePath, trust, options) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error downloading the file.');
			} else {
				defer.resolve();
			}
			return defer.promise;			
		},

		uploadFile: function(server, filePath, options) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error uploading the file.');
			} else {
				defer.resolve();
			}
			return defer.promise;			
		}		
	};
});