// install   : cordova plugin add de.appplant.cordova.plugin.printer
// link      : https://github.com/katzer/cordova-plugin-printer

angular.module('ngCordova.plugins.printer', [])

  .factory('$cordovaPrinter', ['$q', function ($q) {

    return {
      isAvailable: function () {
        var d = $q.defer();

        window.plugin.printer.isServiceAvailable(function (isAvailable) {
          d.resolve(isAvailable);
        });

        return d.promise;
      },

      print: function (doc) {
        window.plugin.printer.print(doc);
      }
    }
  }
  ]);