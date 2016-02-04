// install   :     cordova plugin add cordova-plugin-file-transfer
// link      :     https://github.com/apache/cordova-plugin-file-transfer

/* globals FileTransfer: true */
angular.module('ngCordova.plugins.fileTransfer', [])

  .factory('$cordovaFileTransfer', ['$q', '$timeout', function ($q, $timeout) {
    return {
      download: function (source, filePath, options, trustAllHosts) {
        var q = $q.defer();
        var ft = new FileTransfer();
        var uri = (options && options.encodeURI === false) ? source : encodeURI(source);

        if (options && options.timeout !== undefined && options.timeout !== null) {
          $timeout(function () {
            ft.abort();
          }, options.timeout);
          options.timeout = null;
        }

        ft.onprogress = function (progress) {
          q.notify(progress);
        };

        q.promise.abort = function () {
          ft.abort();
        };

        ft.download(uri, filePath, q.resolve, q.reject, trustAllHosts, options);
        return q.promise;
      },

      upload: function (server, filePath, options, trustAllHosts) {
        var q = $q.defer();
        var ft = new FileTransfer();
        var uri = (options && options.encodeURI === false) ? server : encodeURI(server);

        if (options && options.timeout !== undefined && options.timeout !== null) {
          $timeout(function () {
            ft.abort();
          }, options.timeout);
          options.timeout = null;
        }

        ft.onprogress = function (progress) {
          q.notify(progress);
        };

        q.promise.abort = function () {
          ft.abort();
        };

        ft.upload(filePath, uri, q.resolve, q.reject, options, trustAllHosts);
        return q.promise;
      }
    };
  }]);
