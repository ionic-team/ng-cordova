// install   :     cordova plugin add https://github.com/VersoSolutions/CordovaClipboard
// link      :     https://github.com/VersoSolutions/CordovaClipboard

angular.module('ngCordova.plugins.clipboard', [])

  .factory('$cordovaClipboard', ['$q', '$window', '$cordova', function ($q, $window, $cordova) {

    return {
      copy: function (text) {
        var q = $q.defer();

        $cordova.ready().then(function () {
          $window.cordova.plugins.clipboard.copy(text,
            function () {
              q.resolve();
            }, function () {
              q.reject();
            });
        });

        return q.promise;
      },

      paste: function () {
        var q = $q.defer();

        $cordova.ready().then(function () {
          $window.cordova.plugins.clipboard.paste(function (text) {
            q.resolve(text);
          }, function () {
            q.reject();
          });
        });

        return q.promise;
      }
    }
  }]);
