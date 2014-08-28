angular.module('ngCordova.plugins.printer', [])

.factory('$cordovaPrinter', ['$q', '$window', function ($q, $window) {

    return {
      isAvailable: function () {
        $window.plugin.printer.isServiceAvailable(function (isAvailable) {
          return isAvailable ? true : false;
        });
      },

      print: function (doc) {
        $window.plugin.printer.print(doc);
      }
    }
  }
]);