// install   : cordova plugin add de.appplant.cordova.plugin.printer
// link      : https://github.com/katzer/cordova-plugin-printer

angular.module('ngCordova.plugins.printer', [])

  .factory('$cordovaPrinter', ['$q', '$window', '$cordova', function ($q, $window, $cordova) {

    return {
      isAvailable: function () {
        var q = $q.defer();

        $cordova.ready().then(function () {
          $window.plugin.printer.isServiceAvailable(function (isAvailable) {
            q.resolve(isAvailable);
          });
        });

        return q.promise;
      },

      print: function (doc) {
        $cordova.ready().then(function () {
          $window.plugin.printer.print(doc);
        });
      }
    }
  }]);
