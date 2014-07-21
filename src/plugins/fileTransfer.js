/**
 * @author langstra
 */
// TODO: add support for upload
// TODO: add support for abort

angular.module('ngCordova.plugins.fileTransfer', [])

//Filesystem (checkDir, createDir, checkFile, creatFile, removeFile, writeFile, readFile)
    .factory('$cordovaFileTransfer', ['$q', function ($q) {

        return {
            /**
             *
             * @param {String} link - Link of the resource to be downloaded
             * @param {String} path - Path on the device to save the resource to
             * @param {String} filename - Name of the file
             * @param {Object} options - Optional parameter, see the official docs for possible headers
             * @param {Boolean} trustAllHosts - Optional parameter, defaults to false. If set to true, it accepts all security certificates
             * @returns {.watchHeading.promise|*|.watchPosition.promise|.watchAcceleration.promise|promise} - Promise can result in an error code when rejected or the path to the saved file
             */
            download: function (link, path, filename, options, trustAllHosts) {

                var e = $q.defer();

                getFilesystem().then(
                    function (filesystem) {
                        filesystem.root.getDirectory(path, {create: true},
                            function (fileEntry) {

                                var path = fileEntry.toURL();
                                var fileTransfer = new FileTransfer();

                                fileTransfer.download(
                                    link,
                                    path + filename,
                                    function (file) {
                                        e.resolve(file.toURL());
                                    },
                                    function (error) {
                                        return e.resolve(error.code);
                                    },
                                    trustAllHosts || false,
                                    options || {}
                                );
                            },
                            function (err) {
                                e.reject(err.code);
                            }
                        );
                    }
                );

                return e.promise;
            }, upload: function () {
                return null
            }, abort: function () {
                return null
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