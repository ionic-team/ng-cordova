// install   : cordova plugin add de.appplant.cordova.plugin.printer
// link      : https://github.com/katzer/cordova-plugin-printer

angular.module('ngCordova.plugins.printer', [])

  .factory('$cordovaPrinter', ['$q', function ($q) {

    return {
      isAvailable: function () {
        window.plugin.printer.isServiceAvailable(function (isAvailable) {
          return isAvailable ? true : false;
        });
      },

      print: function (doc) {
        window.plugin.printer.print(doc);
      }
    }
  }
  ]);