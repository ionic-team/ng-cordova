// install   :     cordova plugin add https://github.com/gitawego/cordova-screenshot.git
// link      :     https://github.com/gitawego/cordova-screenshot

angular.module('ngCordova.plugins.screenshot', [])
.factory('$cordovaScreenshot', ['$q', function ($q) {
  return {
    captureToFile: function (opts) {

      var options = opts || {};

      var extension = options.extension || 'jpg';
      var quality = options.quality || '100';

      var defer = $q.defer();

      if (!navigator.screenshot) {
        defer.resolve(null);
        return defer.promise;
      }

      navigator.screenshot.save(function (error, res) {
        if (error) {
          defer.reject(error);
        } else {
          defer.resolve(res.filePath);
        }
      }, extension, quality, options.filename);

      return defer.promise;
    },
    captureToUri: function (opts) {

      var options = opts || {};

      var extension = options.extension || 'jpg';
      var quality = options.quality || '100';

      var defer = $q.defer();

      if (!navigator.screenshot) {
        defer.resolve(null);
        return defer.promise;
      }

      navigator.screenshot.URI(function (error, res) {
        if (error) {
          defer.reject(error);
        } else {
          defer.resolve(res.URI);
        }
      }, extension, quality, options.filename);

      return defer.promise;
    }
  };
}]);