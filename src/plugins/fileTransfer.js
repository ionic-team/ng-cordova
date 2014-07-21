/**
 * @author langstra
 */
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
            download: function (link, fileEntry, filename) {
                var e = $q.defer();
                var path = fileEntry.toURL();
                var fileTransfer = new FileTransfer();

                fileTransfer.download(
                    link,
                    path + filename,
                    function (file) {
                        e.resolve(file.toURI());
                    },
                    function (error) {
                        return e.resolve(error.code);
                    }
                );

                return e.promise;
            }, upload: function () {
                return null
            }, abort: function () {
                return null
            }
        };
    }]);