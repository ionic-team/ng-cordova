angular.module('ngCordova.plugins.clipboard', [])

  .factory('$cordovaClipboard', function ($q) {

    return {
      copy: function (text) {
        var q = $q.defer();

        window.cordova.plugins.clipboard.copy(text,
          function () {
            q.resolve();
          }, function () {
            q.reject();
          });

        return q.promise;
      },

      paste: function () {
        var q = $q.defer();

        window.cordova.plugins.clipboard.paste(function (text) {
          q.resolve(text);
        }, function () {
          q.reject();
        });

        return q.promise;
      }
    };
  });
