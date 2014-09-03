angular.module('ngCordova.plugins.printer', [])

  .factory('$cordovaPrinter', function ($q) {

    return {
      isAvailable: function () {
        window.plugin.printer.isServiceAvailable(function (isAvailable) {
          return isAvailable ? true : false;
        });
      },

      print: function (doc) {
        window.plugin.printer.print(doc);
      }
    };
  });