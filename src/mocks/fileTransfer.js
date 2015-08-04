/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaFileTransfer
 *
 * @description
 * A service for testing download and upload
 * in an app build with ngCordova.
 */
ngCordovaMocks.factory('$cordovaFileTransfer', ['$q', function ($q) {
    var throwsError = false;

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
         * @propertyOf ngCordovaMocks.cordovaFileTransfer
         *
         * @description
         * A flag that signals whether a promise should be rejected or not.
         * This property should only be used in automated tests.
         **/
        throwsError: throwsError,

        download: function (source, filePath, trust, options) {
            return mockIt.call(this, 'There was an error downloading the file.');
        },

        upload: function (server, filePath, options) {
            return mockIt.call(this, 'There was an error uploading the file.'); 
        }
    };
}]);