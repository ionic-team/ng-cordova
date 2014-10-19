// install  :     cordova plugin add https://github.com/MobileChromeApps/zip.git
// link     :     https://github.com/MobileChromeApps/zip

angular.module('ngCordova.plugins.zip', [])

  .factory('$cordovaZip', ['$q', '$window', '$cordova', function ($q, $window, $cordova) {

    return {
      unzip: function (source, destination) {
        var q = $q.defer();

        $cordova.ready().then(function () {
          $window.zip.unzip(source, destination, function (isError) {
            if (isError === 0) {
              q.resolve();
            } else {
              q.reject();
            }
          }, function (progressEvent) {
            q.notify(progressEvent);
          });
        });

        return q.promise;
      }
    }
  }]);
